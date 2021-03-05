import { Symbol } from "./Symbol";

export class Array{
    public values : Symbol[];

    constructor(){
        this.values = [];
    }

    public getAttribute(index: number){
        return this.values[index];
    }

    public setAttribute(index: number, value: Symbol){
        this.values[index] = value;
    }
}
