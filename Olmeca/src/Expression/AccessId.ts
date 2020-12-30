import { Expression } from "../Abstract/Expression";
import { Environment } from "../Symbol/Environment";
import { Retorno, Type } from "../Abstract/Retorno";

export class AccessId extends Expression{

    constructor(private left: Expression, private id: string, line : number, column: number){
        super(line, column);
    }

    public execute(environment: Environment): Retorno {
        const left = this.left.execute(environment);
        if(left.type == Type.STRUCT){
            const value = left.value.getAttribute(this.id);
            return {value : value.valor, type: value.type};
        }
        throw new Error("La variable no existe " + this.line + " " + this.column);
    }
}