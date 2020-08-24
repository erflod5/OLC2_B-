const parser = require('./Grammar/Grammar');

const ast = parser.parse('3*1*2*6');
console.log(ast);