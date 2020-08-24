const parser = require('./Grammar/Grammar');

const ast = parser.parse('a+b+c+d');
console.log(ast);