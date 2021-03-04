import { Instruction } from "../Abstract/Instruction";
import { Environment } from "../Symbol/Environment";
import { Expression } from "../Abstract/Expression";
import { Symbol } from "../Symbol/Symbol";
import { Array } from '../Symbol/Array';

export class AssignmentStruct extends Instruction {

    constructor(private ids: [string | Expression], private value: Expression, line: number, column: number) {
        super(line, column);
    }

    public execute(environment: Environment) {
        const value = this.value.execute(environment);
        let symbol = environment.getVar(this.ids[0] as string);

        for (let i = 1; i < this.ids.length - 1; i++) {
            const index = this.ids[i];

            if (index instanceof Expression) {
                const value = index.execute(environment);
                
                symbol = symbol?.valor.getAttribute(value.value as number);
            }
            else {
                symbol = symbol?.valor.getAttribute(this.ids[i]);
            }
        }


        const last = this.ids[this.ids.length - 1];

        if (last instanceof Expression) {
            const index = last.execute(environment);
            const newSymbol = new Symbol(value.value,'', value.type);
            symbol?.valor. setAttribute(index.value as number, newSymbol);
        }
        else {
            const newSymbol = new Symbol(value.value, last, value.type);
            symbol?.valor.setAttribute(last, newSymbol);
        }
        
    }
}