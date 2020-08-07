import { Instruction } from "../Abstract/Instruction";
import { Expression } from "../Abstract/Expression";

export class While extends Instruction{

    constructor(private condition : Expression, private code : Instruction, line : number, column : number){
        super(line, column);
    }

    public execute() {
    }
}