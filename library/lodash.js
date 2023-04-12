
// Requiring the lodash library  
const _ = require("lodash"); 
  
// Applying _.after() method
// basicamente, depois de ser executado 3 vezes, ele retorna o que está em console.
var gfg = _.after(3, function () {
  console.log('Saved');
});

module.exports = gfg;