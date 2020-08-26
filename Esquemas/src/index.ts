import { toUnicode } from "punycode";

const parser = require('./Grammar/Grammar');

const ast = parser.parse('5+2+3');
console.log(ast);



/*function fun1(){
    let x = 10;
    let y = 20;
    function fun2(){
        function fun3(){
            x = 4200;
        }
        let z = x + y + 20;
        x = z * 3;
        console.log(x);
        y = 3000;
        fun3();
    }
    fun2();
    console.log(y);
    console.log(x);
}

console.log("Salida funciones anidadas");
fun1();

type fun1_fun2_type = {
    x : number;
    y : number;
}

type fun1_fun2_fun3_type ={
    x : number;
    y : number;
    z : number;
}

function global_fun1(){
    let x = 10;
    let y = 20;
    
    let fun1_fun2_variables : fun1_fun2_type = {x : x, y : y}; 
    global_fun1_fun2(fun1_fun2_variables);
    x = fun1_fun2_variables.x;
    y = fun1_fun2_variables.y;

    console.log(y);
    console.log(x);
}

function global_fun1_fun2(fun1_fun2_variables : fun1_fun2_type){
    let x = fun1_fun2_variables.x;
    let y = fun1_fun2_variables.y;

    let z = x + y + 20;
    x = z * 3;
    console.log(x);
    y = 3000;

    let fun1_fun2_fun3_variables : fun1_fun2_fun3_type = {x : x, y : y, z : z};
    global_fun1_fun2_fun3(fun1_fun2_fun3_variables);
    x = fun1_fun2_fun3_variables.x;
    y = fun1_fun2_fun3_variables.y;
    z = fun1_fun2_fun3_variables.z;

    fun1_fun2_variables.x = x;
    fun1_fun2_variables.y = y;
}

function global_fun1_fun2_fun3(fun1_fun2_fun3_variables : fun1_fun2_fun3_type){
    let x = fun1_fun2_fun3_variables.x;
    let y = fun1_fun2_fun3_variables.y;
    let z = fun1_fun2_fun3_variables.z;

    x = 4200;

    fun1_fun2_fun3_variables.x = x;
    fun1_fun2_fun3_variables.y = y;
    fun1_fun2_fun3_variables.z = z;
}

console.log("Salida funciones desanidadas");
global_fun1();

*/