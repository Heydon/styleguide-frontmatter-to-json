var fs = require('fs');
var handlebars = require('handlebars');

var render = function(data, outputFile) {

  var components = JSON.parse(fs.readFileSync(data, 'utf8'));
  var template = __dirname+'/page.tmpl.html';

  fs.readFile(template, 'utf-8', function(err, source) {

    if (err) {

      console.log(err);

    } else {

      console.log('ran');

      handlebars.registerHelper('sluggify', function(name) {
        console.log('ran1');
        return name
          .toLowerCase()
          .replace(/ /g,'-')
          .replace(/[^\w-]+/g,'');
      });

      handlebars.registerHelper('oneline', function(text) {
        console.log('ran2');
        return text.replace(/(\r\n|\n|\r|\t)/gm, '')
                   .replace(/\s+/g, '');
      });

      var template = handlebars.compile(source);
      var html = template(components);
      fs.writeFileSync(outputFile, html, 'utf8');

    }

  });

};

module.exports = render;
