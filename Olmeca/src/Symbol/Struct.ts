import { Symbol } from "./Symbol";

export class Struct{
    public attributes : Map<string, Symbol>;

    constructor(){
        this.attributes = new Map();
    }

    public getAttribute(id: string){
        return this.attributes.get(id);
    }

    public setAttribute(id: string, value: Symbol){
        this.attributes.set(id, value);
    }
}
