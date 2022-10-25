import http from 'http';
import path from 'path';
import { generateHtml, generatePdf } from './generators';

const PORT = 3000;
const PUBLIC_FOLDER = path.join(__dirname, '..', 'public');

const server = http.createServer(async (req, response) => {
  if (req.url?.endsWith('.pdf')) {
    const pdf = await generatePdf(path.join(PUBLIC_FOLDER, '/index.pdf'));
    response.writeHead(200, { 'Content-Type': 'application/pdf' });
    response.write(pdf);
  } else {
    const html = await generateHtml(path.join(PUBLIC_FOLDER, '/index.html'));
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(html);
  }

  response.end();
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
