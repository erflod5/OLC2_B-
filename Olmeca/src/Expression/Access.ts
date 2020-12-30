import { Expression } from "../Abstract/Expression";
import { Environment } from "../Symbol/Environment";
import { Retorno } from "../Abstract/Retorno";

export class Access extends Expression{

    constructor(private id: string, line : number, column: number){
        super(line, column);
    }

    public execute(environment: Environment): Retorno {
        const value = environment.getVar(this.id);
        if(value == null)
            throw new Error("La variable no existe");
        return {value : value.valor, type : value.type};
    }
}