import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the dist/client/assets directory to find the bundles
const assetsDir = path.join(__dirname, '../dist/client/assets');
const files = fs.readdirSync(assetsDir);

// Find the main index-*.js file (the largest one is usually the app)
const indexFiles = files.filter(f => f.startsWith('index-') && f.endsWith('.js'));
const mainBundle = indexFiles.sort((a, b) => {
  const statA = fs.statSync(path.join(assetsDir, a)).size;
  const statB = fs.statSync(path.join(assetsDir, b)).size;
  return statB - statA;
})[0];

// Find the stylesheet (optional - may be bundled in JS)
const styleFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));

if (!mainBundle) {
  console.error('Could not find main bundle in dist/client/assets');
  process.exit(1);
}

// Read the original index.html
const indexPath = path.join(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf-8');

// Replace the module script path with the bundled version
html = html.replace(
  '<script type="module" src="/src/main.tsx"></script>',
  `<script type="module" src="/assets/${mainBundle}"></script>`
);

// Replace the stylesheet path if a separate CSS file exists
if (styleFile) {
  html = html.replace(
    /<link rel="stylesheet" href="\/assets\/styles-[a-zA-Z0-9]+\.css" \/>/,
    `<link rel="stylesheet" href="/assets/${styleFile}" />`
  );
} else {
  // Remove the stylesheet link if CSS is bundled into JS
  html = html.replace(
    /<link rel="stylesheet" href="\/assets\/styles-[a-zA-Z0-9-]+\.css" \/>\s*/,
    ''
  );
}

// Write the updated HTML to dist/client
const outputPath = path.join(__dirname, '../dist/client/index.html');
fs.writeFileSync(outputPath, html);
console.log(`Generated ${outputPath} with ${mainBundle}${styleFile ? ` and ${styleFile}` : ' (CSS bundled in JS)'}`);
