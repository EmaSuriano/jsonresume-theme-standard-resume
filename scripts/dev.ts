import http from 'http';
import path from 'path';
import { generateHtml, generatePdf } from './generators';

const PORT = 3000;

const server = http.createServer(async (req, response) => {
  switch (req.url) {
    case '/index.pdf':
      const pdf = await generatePdf(path.join(__dirname, '/index.pdf'));
      response.writeHead(200, { 'Content-Type': 'application/pdf' });
      response.write(pdf);
      break;

    default:
      const html = await generateHtml(path.join(__dirname, '/index.html'));
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(html);
      break;
  }

  response.end();
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
