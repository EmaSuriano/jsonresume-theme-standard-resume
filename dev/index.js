const http = require('http');
const fs = require('fs');

require('./html');
require('./pdf');

const PORT = 3000;

const server = http.createServer((req, response) => {
  if (req.url === '/pdf') {
    response.writeHeader(200, { 'Content-Type': 'application/pdf' });
    response.write(fs.readFileSync(__dirname + '/resume.pdf'));
  } else {
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write(fs.readFileSync(__dirname + '/resume.html'));
  }

  response.end();
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
