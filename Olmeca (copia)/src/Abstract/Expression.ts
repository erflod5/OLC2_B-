import { Environment } from "../Symbol/Environment";
import { tipos } from "../Util/TablaTipos";

export abstract class Expression {

    public line: number;
    public column: number;

    constructor(line: number, column: number) {
        this.line = line;
        this.column = column;
    }

    public abstract execute(environment: Environment) : string;
}

