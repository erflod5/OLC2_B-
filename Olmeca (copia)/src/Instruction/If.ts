import { Instruction } from "../Abstract/Instruction";
import { Expression } from "../Abstract/Expression";
import { Environment } from "../Symbol/Environment";
import { Type } from "../Abstract/Retorno";

export class If extends Instruction{

    constructor(private condition : Expression, private code : Instruction, private elsSt : Instruction | null,
        line : number, column : number){
        super(line, column);
    }

    public execute(env : Environment) {
        const condition = this.condition.execute(env);
        const body = this.code.execute(env);
        let cadena = `if(${condition}) ${body}\n`;
        if(this.elsSt != null){
            cadena += `else ${this.elsSt.execute(env)}\n`;
        }
        return cadena;
    }
}



/*
    PADRE <- HIJO <- IF
    PADRE <- HIJO <- WHILE
*/