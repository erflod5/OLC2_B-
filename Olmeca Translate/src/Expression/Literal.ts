import { Expression } from "../Abstract/Expression";

export class Literal extends Expression{
    
    constructor(private value : any, line : number, column: number, private type : number){
        super(line, column);
    }

    public execute(){
        return this.value.toString();
    }
}
