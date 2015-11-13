var fs = require('fs');
var fr = require('yaml-front-matter');
var _ = require('lodash');

var compile = function(directory, outputFile) {

  fs.readdir(directory, function(err, files) {

    if (err) {

      console.log(err);

    } else {

      var componentArray = [];

      files.forEach(function(file) {
        var data = fs.readFileSync(directory +'/'+ file, 'utf8');
        var object = fr.loadFront(data);
        object.tags.sort();
        componentArray.push(object);
      });

      var json = {};
      json.components = _.shuffle(componentArray);
      output = JSON.stringify(json, null, 4);

      fs.writeFileSync(outputFile, output, 'utf8');

    }

  });

};

module.exports = compile;
