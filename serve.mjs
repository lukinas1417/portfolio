// Servidor estático mínimo para ver o portfólio localmente: node serve.mjs (http://localhost:8080)
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = fileURLToPath(new URL('.', import.meta.url));
const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
};

createServer(async (req, res) => {
  const caminho = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname));
  const arquivo = join(RAIZ, caminho.length === 1 ? 'index.html' : caminho);
  if (!arquivo.startsWith(RAIZ)) return res.writeHead(403).end();
  try {
    res.writeHead(200, { 'Content-Type': TIPOS[extname(arquivo)] ?? 'application/octet-stream' }).end(await readFile(arquivo));
  } catch {
    res.writeHead(404).end('não encontrado');
  }
}).listen(8080, () => console.log('http://localhost:8080'));
