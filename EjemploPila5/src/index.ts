const parser = require('./Grammar/Grammar');

const input = `
    id1 [ 
        id2,
        id3,
        id4
    ]
`
const ast = parser.parse(input);
console.log(ast);
