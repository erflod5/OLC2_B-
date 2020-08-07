import { Instruction } from "../Abstract/Instruction";

export class Statement extends Instruction{

    constructor(private code : Array<Instruction>, line : number, column : number){
        super(line, column);
    }

    public execute() {
        
    }
}