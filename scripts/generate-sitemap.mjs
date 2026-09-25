import { readdir, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const output = new URL('../dist/', import.meta.url);
const root = fileURLToPath(output);
const base = 'https://hs108.in';
const pages = [];

async function visit(directory) {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, item.name);
    if (item.isDirectory()) await visit(path);
    else if (item.name === 'index.html') {
      const slug = relative(root, directory).split(sep).join('/');
      pages.push(slug ? `${base}/${slug}/` : `${base}/`);
    }
  }
}

await visit(root);
pages.sort();
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(url => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`;
await writeFile(new URL('sitemap.xml', output), xml, 'utf8');
console.log(`Generated sitemap.xml with ${pages.length} routes`);
