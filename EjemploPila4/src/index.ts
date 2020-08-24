const parser = require('./Grammar/Grammar');

const input = `
    id1 [ 
        id2 [
            id4
        ],
        id3
    ]
`

const ast = parser.parse(input);
console.log(ast);