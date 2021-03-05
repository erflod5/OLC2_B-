import { Instruction } from "../Abstract/Instruction";
import { Environment } from "../Symbol/Environment";
import { errores } from "../Errores";

export class Statement extends Instruction{

    constructor(private code : Array<Instruction>, line : number, column : number){
        super(line, column);
    }

    public execute(env : Environment) {
        const newEnv = new Environment(env);
        let cadena = '{';
        for(const instr of this.code){
            cadena += instr.execute(newEnv) + '\n';
        }
        cadena += '}\n';
        return cadena;
    }
}
