import { Instruction } from "./Abstract/Instruction";
import { Environment } from "./Symbol/Environment";
import { errores } from './Errores';
import { Error_ } from "./Error";
import { Function } from "./Instruction/Function";

const parser = require('./Grammar/Grammar');
const fs = require('fs');

try {
    const entrada = fs.readFileSync('./entrada.txt');
    const ast = parser.parse(entrada.toString());
    const env = new Environment(null);

    for(const instr of ast){
        try {
            if(instr instanceof Function)
                instr.execute(env);
        } catch (error) {
            errores.push(error);  
        }
    }

    for(const instr of ast){
        if(instr instanceof Function)
            continue;
        try {
            const actual = instr.execute(env);
            if(actual != null || actual != undefined){
                errores.push(new Error_(actual.line, actual.column, 'Semantico', actual.type + ' fuera de un ambito correcto'));
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
