import { Retorno, Type } from "./Retorno";
import { Environment } from "../Symbol/Environment";
import { type } from "os";

export abstract class Expression {

    public line: number;
    public column: number;

    constructor(line: number, column: number) {
        this.line = line;
        this.column = column;
    }

    public abstract execute(environment: Environment) : Retorno;

    public tipoDominante(tipo1 : Type, tipo2 : Type) : Type{
        if(tipo1 == Type.NULL || tipo2 == Type.NULL)
            return Type.NULL;
        else if(tipo1 == Type.STRING || tipo2 == Type.STRING)
            return Type.STRING;
        else if(tipo1 == Type.NUMBER || tipo2 == Type.NUMBER)
            return Type.NUMBER;
        return Type.BOOLEAN;
    }

}

