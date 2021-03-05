import { Instruction } from "../Abstract/Instruction";
import { Environment } from "../Symbol/Environment";
import { Expression } from "../Abstract/Expression";
import { env } from "process";
import { Type } from "../Abstract/Retorno";

export class Declaration extends Instruction{

    private id : string;
    private value : Expression;

    constructor(id: string, value : Expression, line : number, column: number){
        super(line, column);
        this.id = id;
        this.value = value;
    }

    public execute(environment: Environment) {
        const val = this.value.execute(environment);
        if(this.id == environment.actualFunct)
            this.id = environment.idParent;
        let cadena = this.id + '=' + val + ';\n';
        return cadena;
    }

    public previo(environment: Environment){
        environment.guardar(this.id,'', Type.NUMBER);
    }    
}