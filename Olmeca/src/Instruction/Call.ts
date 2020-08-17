import { Instruction } from "../Abstract/Instruction";
import { Environment } from "../Symbol/Environment";
import { Expression } from "../Abstract/Expression";

export class Call extends Instruction{

    constructor(private id: string, private expresiones : Array<Expression>, line : number, column : number){
        super(line, column);
    }

    public execute(environment : Environment) {
        const func = environment.getFuncion(this.id);
        if(func != undefined){
            const newEnv = new Environment(environment.getGlobal());
            for(let i = 0; i < this.expresiones.length; i++){
                const value = this.expresiones[i].execute(environment);
                newEnv.guardar(func.parametros[i], value.value, value.type);
            }
            func.statment.execute(newEnv);
        }
    }
}
