import { Instruction } from "../Abstract/Instruction";
import { Environment } from "../Symbol/Environment";
import { Expression } from "../Abstract/Expression";

export class CallExpr extends Instruction{

    constructor(private id: string, private expresiones : Array<Expression>, line : number, column : number){
        super(line, column);
    }

    public execute(environment : Environment) {
        const func = environment.getFuncion(this.id);
        if(func != undefined){
            let cadena = func.uniqueId + '(';
            //TODO pasar parametros extras
            for(let i = 0; i < this.expresiones.length; i++){
                const value = this.expresiones[i].execute(environment);
                cadena += value + ',';
            }
            cadena = cadena.slice(0, cadena.length - 1) + ')';
            return cadena;
        }
        return '';
    }
}
