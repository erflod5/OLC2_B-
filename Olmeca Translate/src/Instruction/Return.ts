import { Instruction } from "../Abstract/Instruction";
import { Environment } from "../Symbol/Environment";
import { Expression } from "../Abstract/Expression";

export class Return extends Instruction{

    constructor(private expr : Expression, line : number, column : number){
        super(line, column);
    }

    public execute(environment : Environment) {
        const value = this.expr.execute(environment);
        return 'return ' + value + ';\n';
    }
}
