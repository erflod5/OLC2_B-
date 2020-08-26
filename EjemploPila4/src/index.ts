const parser = require('./Grammar/Grammar');

const input = `
    id1 [ 
        id2 [
            id4 [
                id5,
                id6,
                id7
            ]
        ],
        id3
    ]
`
/*
    global_id1
    global_id1_id2,
    global_id1_id2_id4
    global_id1_id3
    global_id1_id4
    global_$id
*/


const ast = parser.parse(input);
console.log(ast);


function x(){
    function y(){
        function factorial(n : number) : number{
            if(n == 0)
                return 1;
            else
                return n * factorial(n -1);
        }
        let fact = 10;
        console.log(factorial(10));
    }
    y();
}

x();

type t1 = {
    a : number,
    b: number
}

type t2 = {
    c : number, 
    d : number
}

let a = {c : 1, d : 2};