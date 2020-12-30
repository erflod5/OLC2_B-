const parser = require('./Grammar/Grammar');

const ast = parser.parse('1 ***..*..*..');
console.log(ast);