const parser = require('./Grammar/Grammar');

const ast = parser.parse('3*5/6/7');
console.log(ast);
console.log(3*5/6/7);
