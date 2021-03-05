import { Expression } from "../Abstract/Expression";
import { Environment } from "../Symbol/Environment";

export class NewArray extends Expression {

    constructor(private listExpr: [Expression], line: number, column: number) {
        super(line, column);
    }

    public execute(environment: Environment){
        let cadena = '[';
        this.listExpr.forEach((expr) => {
            const value = expr.execute(environment);
            cadena += value + ',';
        });
        cadena = cadena.slice(0, cadena.length - 1) + ']';
        return cadena;
    }
}