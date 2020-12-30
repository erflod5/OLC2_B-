import { Instruction } from "../Abstract/Instruction";
import { Environment } from "../Symbol/Environment";
import { Expression } from "../Abstract/Expression";
import { Symbol } from "../Symbol/Symbol";

export class AssignmentStruct extends Instruction{

    constructor(private ids: Array<string>, private value : Expression, line : number, column: number){
        super(line, column);
    }

    public execute(environment: Environment) {
        const value = this.value.execute(environment);
        let symbol = environment.getVar(this.ids[0]);
        for(let i = 1; i < this.ids.length - 1; i++){
            symbol = symbol?.valor.getAttribute(this.ids[i]);
        }

        if(symbol != null){
            symbol?.valor.
            setAttribute(this.ids[this.ids.length - 1], 
                new Symbol(value.value, this.ids[this.ids.length - 1], value.type))
            /*symbol.valor = value.value;
            symbol.type = value.type;*/
        }
    }
}