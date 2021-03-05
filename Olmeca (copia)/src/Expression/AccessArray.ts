import { Expression } from "../Abstract/Expression";
import { Environment } from "../Symbol/Environment";

export class AccessArray extends Expression {

    constructor(private anterior: Expression, private index: Expression, line: number, column: number) {
        super(line, column);
    }

    public execute(environment: Environment) {
        const anterior = this.anterior.execute(environment);
        const index = this.index.execute(environment);
        let cadena = anterior + '[' + index + ']';
        return cadena;
    }
}