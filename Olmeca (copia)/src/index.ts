import { Environment } from "./Symbol/Environment";
import { errores } from './Errores';
import { Function } from "./Instruction/Function";
import code from './Symbol/Code';

const parser = require('./Grammar/Grammar');
const fs = require('fs');

try {
    const entrada = fs.readFileSync('./entrada.txt');
    const ast = parser.parse(entrada.toString());
    const env = new Environment(null);

    for(const instr of ast){
        try {
            if(instr instanceof Function)
                code.push(instr.execute(env));
        } catch (error) {
            errores.push(error);  
        }
    }

    for(const instr of ast){
        if(instr instanceof Function)
            continue;
        try {
            const actual = instr.execute(env);
            code.push(actual);
        } catch (error) {
            errores.push(error);  
        }
    }
}
catch (error) {
    console.log(error);
}

console.log(code);
