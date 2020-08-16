export enum Type{
    NUMBER = 0,
    STRING = 1,
    BOOLEAN = 2,
    NULL = 3,
    ARRAY = 4
}

export type Retorno ={
    value : any,
    type : Type
}