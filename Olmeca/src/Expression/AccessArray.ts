import { Expression } from "../Abstract/Expression";
import { Environment } from "../Symbol/Environment";
import { Retorno, Type } from "../Abstract/Retorno";
import { Symbol } from '../Symbol/Symbol';

export class AccessArray extends Expression {

    constructor(private anterior: Expression, private index: Expression, line: number, column: number) {
        super(line, column);
    }

    public execute(environment: Environment): Retorno {
        const anterior = this.anterior.execute(environment);
        if (anterior.type != Type.ARRAY)
            throw new Error("No es un arreglo");

        const index = this.index.execute(environment);
        if (index.type != Type.NUMBER)
            throw new Error("El indice no es un numero");

        const value = anterior.value.getAttribute(index.value as number) as Symbol;
        return { type: value.type, value: value.valor }
    }
}