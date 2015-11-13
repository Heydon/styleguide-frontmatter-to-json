var Compile = require('./components-to-json');
var Render = require('./render-json');

var compile = new Compile('./components', './components.json');
var render = new Render('./components.json', './index.html');
