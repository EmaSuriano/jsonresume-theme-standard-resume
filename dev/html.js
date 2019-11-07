const fs = require('fs');
var path = require('path');
const resumeJson = require('./resume.json');

const themePkg = require('..');

function createHtml(callback) {
  var html = themePkg.render(resumeJson);
  var stream = fs.createWriteStream(path.resolve(__dirname, 'resume.html'));

  stream.write(html, function(error) {
    if (error) {
      return callback(error);
    }
    stream.close(callback);
  });
}

createHtml(console.log);
