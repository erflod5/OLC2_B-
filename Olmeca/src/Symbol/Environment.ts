import { env } from "process"
import { Symbol } from "./Symbol";
import { Type } from "../Abstract/Retorno";

export class Environment{
    
    private variables : Map<string, Symbol>;
    
    constructor(public anterior : Environment | null){
        this.variables = new Map();
    }

    public guardar(id: string, valor: any, type: Type){
        this.variables.set(id, new Symbol(valor, id, type));
    }
    
    public getVar(id: string) : Symbol | undefined | null{
        let env : Environment | null = this;
        while(env != null){
            if(env.variables.has(id)){
                return env.variables.get(id);
            }
            env = env.anterior;
        }
        return null;
    }   
}
/*envGlobal

function X() {
    env
    env.anterior = envGlobal;
    if(1){
        envIf
        envIf.anterior = env

    }
}*/ 