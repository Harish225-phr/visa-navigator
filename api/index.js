import { createServerEntry } from '../dist/server/index.js';

let serverEntry;

async function initializeServer() {
  if (!serverEntry) {
    serverEntry = await createServerEntry();
  }
  return serverEntry;
}

export default async function handler(req, res) {
  try {
    const server = await initializeServer();
    
    // Build the full URL
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const url = `${protocol}://${host}${req.url}`;
    
    // Create a fetch-compatible request
    const headers = new Headers(req.headers);
    headers.delete('host');
    headers.delete('content-length');
    
    const fetchRequest = new Request(url, {
      method: req.method,
      headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : undefined,
    });

    // Get response from TanStack Start server
    const response = await server.fetch(fetchRequest);

    // Set response status
    res.status(response.status);

    // Copy headers
    for (const [key, value] of response.headers) {
      res.setHeader(key, value);
    }

    // Send body
    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
