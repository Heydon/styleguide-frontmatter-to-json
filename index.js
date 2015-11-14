var Compile = require('./lib/components-to-json');
var Render = require('./lib/render-json');

// Convert yaml snippets to json
Compile('./components', './components.json');
// Render json via handlebars
Render('./components.json', './index.html');
