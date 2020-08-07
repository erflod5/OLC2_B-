import { Environment } from "../Symbol/Environment";

export abstract class Instruction {

    private line: number;
    private column: number;

    constructor(line: number, column: number) {
        this.line = line;
        this.column = column;
    }

    public abstract execute(environment : Environment) : any;

}