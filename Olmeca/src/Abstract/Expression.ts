import { Retorno } from "./Retorno";
import { Environment } from "../Symbol/Environment";

export abstract class Expression {

    private line: number;
    private column: number;

    constructor(line: number, column: number) {
        this.line = line;
        this.column = column;
    }

    public abstract execute(environment: Environment) : Retorno;

}