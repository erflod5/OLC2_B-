import { Instruction } from "../Abstract/Instruction";
import { Environment } from "../Symbol/Environment";

export class Statement extends Instruction{

    constructor(private code : Array<Instruction>, line : number, column : number){
        super(line, column);
    }

    public execute(env : Environment) {
        const newEnv = new Environment(env);
        for(const instr of this.code){
            instr.execute(newEnv);
        }

    }
}