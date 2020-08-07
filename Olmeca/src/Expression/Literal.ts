import { Expression } from "../Abstract/Expression";
import { Retorno, Type } from "../Abstract/Retorno";

export class Literal extends Expression{
    
    constructor(private value : any, line : number, column: number, private type : number){
        super(line, column);
    }

    public execute() : Retorno{
        if(this.type <= 1)
            return {value : Number(this.value), type : Type.NUMBER};
        else
            return {value : this.value, type : Type.STRING};
    }
}