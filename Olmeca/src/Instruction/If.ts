import { Instruction } from "../Abstract/Instruction";
import { Expression } from "../Abstract/Expression";

export class If extends Instruction{

    constructor(private condition : Expression, private code : Instruction, private elsSt : Instruction | null,
        line : number, column : number){
        super(line, column);
    }

    public execute() {
    }
}