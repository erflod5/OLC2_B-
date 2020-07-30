import { Expression } from "../Abstract/Expression";

export class Literal extends Expression{
    
    constructor(private value : number, line : number, column: number){
        super(line, column);
    }

    public execute() : any{
        return Number(this.value);
    }
    
}