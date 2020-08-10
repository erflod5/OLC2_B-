const parser = require('./Grammar/Grammar');

const ast = parser.parse('3244');
console.log(ast);

let x = {base:10, x:20};