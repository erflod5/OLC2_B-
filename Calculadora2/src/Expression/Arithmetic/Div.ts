import { Expression } from "../../Abstract/Expression";


export class Div extends Expression{

    constructor(private left: Expression, private right: Expression, line: number, column: number){
        super(line,column);
    }

    public execute() : any{
        const leftValue = this.left.execute();
        const rightValue = this.right.execute();
        return leftValue / rightValue;
    }
}