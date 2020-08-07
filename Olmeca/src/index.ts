import { Instruction } from "./Abstract/Instruction";

const parser = require('./Grammar/Grammar');
const fs = require('fs');

try {
    const entrada = fs.readFileSync('./entrada.txt');
    const ast = parser.parse(entrada.toString());
    for(const instr of ast){
        instr.execute();
    }
} 
catch (error) {
    console.error(error);    
}