const parser = require('./Grammar/Grammar');

const ast = parser.parse('342');
console.log(ast);

let x = {base:10, x:20};