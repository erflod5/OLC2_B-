import { Expression } from "../Abstract/Expression";
import { Environment } from "../Symbol/Environment";

export enum ArithmeticOption{
    PLUS,
    MINUS,
    TIMES,
    DIV
}

export class Arithmetic extends Expression{

    constructor(private left: Expression, private right: Expression, private type : ArithmeticOption, line: number, column: number){
        super(line,column);
    }

    public execute(environment : Environment){
        const leftValue = this.left.execute(environment);
        const rightValue = this.right.execute(environment);
        return leftValue + ' + ' + rightValue;
    }
}

/*
    3 + 5 * "hola mundo";
    Error
*/