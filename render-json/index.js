var fs = require('fs');
var handlebars = require('handlebars');

var render = function(data, outputFile) {

  var components = JSON.parse(fs.readFileSync(data, 'utf8'));
  var template = __dirname+'/page.tmpl.html';

  fs.readFile(template, 'utf-8', function(err, source) {

    if (err) {

      console.log(err);

    } else {
      handlebars.registerHelper('sluggify', function(name){
        return name
          .toLowerCase()
          .replace(/ /g,'-')
          .replace(/[^\w-]+/g,'');
      });
      var template = handlebars.compile(source);
      var html = template(components);
      fs.writeFileSync(outputFile, html, 'utf8');

    }

  });

};

module.exports = render;
