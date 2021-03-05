import { Instruction } from "../Abstract/Instruction";
import { Environment } from "../Symbol/Environment";
import codes from '../Symbol/Code';
import { stat } from "fs";
import { Declaration } from "./Declaration";
import { Type } from "../Abstract/Retorno";

export class Function extends Instruction{

    public uniqueId : string;
    constructor(private id: string, public statments: [Instruction], public parametros : Array<string>, line : number, column : number){
        super(line, column);
        this.uniqueId = '';
    }

    public execute(environment : Environment) {
        environment.guardarFuncion(this.id, this);
        const newEnv = new Environment(environment);
        newEnv.idParent += this.id + '_';
        newEnv.actualFunct = this.id;
        this.uniqueId = newEnv.idParent;

        let cadena = 'function ' + newEnv.idParent + '(';
        this.parametros.forEach((parametro)=>{
            cadena += parametro + ',';
            newEnv.guardar(parametro, '', Type.NUMBER);
        });
        
        if(this.parametros.length != 0)
            cadena = cadena.slice(0, cadena.length - 1);
        
        cadena += environment.getStringVar();
        cadena += ') {';
        
        this.statments.forEach((statment)=>{
            if(statment instanceof Declaration){
                statment.previo(newEnv);
            }
        });

        this.statments.forEach((statment)=>{
            if(statment instanceof Function){
                codes.push(statment.execute(newEnv));
            }
        });

        this.statments.forEach((statment)=>{
            if(!(statment instanceof Function)){
                cadena += statment.execute(newEnv);
            }
        });

        return cadena + '}';
    }
}

/*

*/



/*

    Lenguaje Entrada -> Traducis -> Lenguaje Salida;

    Lenguaje Salida -> Intepretas -> Salida en consola | Reportes | TS;

*/