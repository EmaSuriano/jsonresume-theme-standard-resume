const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

function render(resume) {
  const css = fs.readFileSync(__dirname + '/style.css', 'utf-8');
  const tpl = fs.readFileSync(__dirname + '/resume.hbs', 'utf-8');
  const partialsDir = path.join(__dirname, 'partials');
  const filenames = fs.readdirSync(partialsDir);
  Handlebars.registerHelper('date', require('helper-date'));

  filenames.forEach(function (filename) {
    const matches = /^([^.]+).hbs$/.exec(filename);
    if (!matches) {
      return;
    }
    const name = matches[1];
    const filepath = path.join(partialsDir, filename);
    const template = fs.readFileSync(filepath, 'utf8');
    Handlebars.registerPartial(name, template);
  });

  return Handlebars.compile(tpl)({
    css: css,
    resume: resume,
  });
}

module.exports = {
  render: render,
  pdfRenderOptions: {
    margin: {
      top: '1cm',
      bottom: '1cm',
    },
    mediaType: 'print',
  },
};
