import { Instruction } from "../Abstract/Instruction";
import { Environment } from "../Symbol/Environment";
import { Expression } from "../Abstract/Expression";
import { env } from "process";

export class Declaration extends Instruction{

    private id : string;
    private value : Expression;

    constructor(id: string, value : Expression, line : number, column: number){
        super(line, column);
        this.id = id;
        this.value = value;
    }

    public execute(environment: Environment) {
        const val = this.value.execute(environment);
        environment.guardar(this.id, val.value, val.type);
    }

}