const parser = require('./Grammar/Grammar');

const ast = parser.parse('3*5*6');
console.log(ast);