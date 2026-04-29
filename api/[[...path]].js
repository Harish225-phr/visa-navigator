import { createServerEntry } from '../dist/server/index.js';

const serverEntry = await createServerEntry();

export default async function handler(req, res) {
  return serverEntry.fetch(
    new Request(`http://${req.headers.host}${req.url}`, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    })
  ).then(response => {
    res.status(response.status);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    return response.text().then(text => res.send(text));
  });
}
