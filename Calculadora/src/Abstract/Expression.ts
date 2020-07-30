export abstract class Expression {

    private line: number;
    private column: number;

    constructor(line: number, column: number) {
        this.line = line;
        this.column = column;
    }

    public abstract execute() : number;

}