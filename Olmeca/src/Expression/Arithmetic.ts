import { Expression } from "../Abstract/Expression";
import { Retorno, Type } from "../Abstract/Retorno";
import { Environment } from "../Symbol/Environment";
import { env } from "process";

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

    public execute(environment : Environment) : Retorno{
        const leftValue = this.left.execute(environment);
        const rightValue = this.right.execute(environment);
        let result : Retorno;

        if(this.type == ArithmeticOption.PLUS){
            result = {value : (leftValue.value + rightValue.value), type : Type.NUMBER};
        }
        else if(this.type == ArithmeticOption.MINUS){
            result = {value : (leftValue.value - rightValue.value), type : Type.NUMBER};
        }
        else if(this.type == ArithmeticOption.TIMES){
            result = {value : (leftValue.value * rightValue.value), type : Type.NUMBER};
        }
        else{
            if(rightValue.value == 0){
                throw new Error("No se puede dividir entre 0");
            }
            result = {value : (leftValue.value / rightValue.value), type : Type.NUMBER};
        }
        return result;
    }
}