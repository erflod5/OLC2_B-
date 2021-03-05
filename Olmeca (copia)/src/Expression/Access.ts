import { Expression } from "../Abstract/Expression";
import { Environment } from "../Symbol/Environment";

export class Access extends Expression{

    constructor(private id: string, line : number, column: number){
        super(line, column);
    }

    public execute(environment: Environment) {
        return this.id;
    }
}