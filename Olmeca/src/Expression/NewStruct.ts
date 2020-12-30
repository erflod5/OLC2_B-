import { Expression } from "../Abstract/Expression";
import { Environment } from "../Symbol/Environment";
import { Retorno, Type } from "../Abstract/Retorno";
import { Struct } from "../Symbol/Struct";
import { Symbol } from "../Symbol/Symbol";

export class NewStruct extends Expression{

    constructor(private attributes: Array<{id : string, value : Expression}>, line : number, column: number){
        super(line, column);
    }

    public execute(environment: Environment): Retorno {
        const struct = new Struct();
        this.attributes.forEach((attribute)=>{
            const value = attribute.value.execute(environment);
            struct.setAttribute(attribute.id, new Symbol(value.value, attribute.id, value.type));
        });
        return {value : struct, type : Type.STRUCT};
    }
}
