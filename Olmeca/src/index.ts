import { Instruction } from "./Abstract/Instruction";
import { Environment } from "./Symbol/Environment";
import { errores } from './Errores';
import { Error_ } from "./Error";

const parser = require('./Grammar/Grammar');
const fs = require('fs');

try {
    const entrada = fs.readFileSync('./entrada.txt');
    const ast = parser.parse(entrada.toString());
    const env = new Environment(null);
    for(const instr of ast){
        try {
            const actual = instr.execute(env);
            if(actual != null || actual != undefined){
                errores.push(new Error_(actual.line, actual.column, 'Semantico', actual.type + ' fuera de un ciclo'));
            }
        } catch (error) {
            errores.push(error);  
        }
    }
}
catch (error) {
    console.log(error);
}

console.log(errores);


//Java
// int x = 10;

// x = 10;
// x = "hola";

//JS
