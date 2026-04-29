import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');
const publishDir = path.join(distDir, 'client');

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function copyEntry(sourcePath, targetPath) {
  const stats = await fs.stat(sourcePath);

  if (stats.isDirectory()) {
    await fs.mkdir(targetPath, { recursive: true });
    const entries = await fs.readdir(sourcePath, { withFileTypes: true });

    for (const entry of entries) {
      await copyEntry(path.join(sourcePath, entry.name), path.join(targetPath, entry.name));
    }

    return;
  }

  await fs.copyFile(sourcePath, targetPath);
}

async function main() {
  if (await pathExists(publishDir)) {
    return;
  }

  if (!(await pathExists(distDir))) {
    throw new Error('dist directory does not exist after build');
  }

  await fs.mkdir(publishDir, { recursive: true });
  const entries = await fs.readdir(distDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === 'client') {
      continue;
    }

    await copyEntry(path.join(distDir, entry.name), path.join(publishDir, entry.name));
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});