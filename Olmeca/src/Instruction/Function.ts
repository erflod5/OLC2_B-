import { Instruction } from "../Abstract/Instruction";
import { Expression } from "../Abstract/Expression";
import { Environment } from "../Symbol/Environment";

export class Function extends Instruction{

    constructor(private id: string, public statment: Instruction, public parametros : Array<string>, line : number, column : number){
        super(line, column);
    }

    public execute(environment : Environment) {
        environment.guardarFuncion(this.id, this);
    }
}

/*
    function fact(n : numbero){
        if(n == 0)
            return 1;
        else
            return n * fact(n - 1);
    }
*/



/*

    Lenguaje Entrada -> Traducis -> Lenguaje Salida;

    Lenguaje Salida -> Intepretas -> Salida en consola | Reportes | TS;

*/