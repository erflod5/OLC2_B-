import { Instruction } from "../Abstract/Instruction";
import { Expression } from "../Abstract/Expression";
import { Environment } from "../Symbol/Environment";
import { Type } from "../Abstract/Retorno";

export class While extends Instruction{

    constructor(private condition : Expression, private code : Instruction, line : number, column : number){
        super(line, column);
    }

    public execute(env : Environment) {
        let condition = this.condition.execute(env);
        if(condition.type != Type.BOOLEAN){
            throw {error: "La condicion no es booleana", linea: this.line, columna : this.column};
        }

        while(condition.value == true){
            this.code.execute(env);
            condition = this.condition.execute(env);
            if(condition.type != Type.BOOLEAN){
                throw {error: "La condicion no es booleana", linea: this.line, columna : this.column};
            }
        }
    }
}