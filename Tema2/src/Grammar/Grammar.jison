 
%{
    let contador = 0;
    let salida = '';
    function imprime_arbol(puntero, numero){
        console.log(`Arbol ${numero}, altura ${puntero.altura}`)
        if(puntero.nodo != null){
            salida += getCodigoGraphviz(puntero, numero);        
        }
    }

    function crea_nodo(simbolo, puntero1, puntero2){
        contador++;
        return {simbolo : simbolo, izquierda : puntero1, derecha : puntero2, id : contador};
    }

    function getCodigoGraphviz(raiz, numero) {
        return "digraph grafica{\n" +
               "rankdir=TB;\n" +
               "node [shape = record, style=filled, fillcolor=seashell2];\n"+
                getCodigoInterno(raiz.nodo)+ `"Arbol ${numero}, altura ${raiz.altura}"` +
                "}\n\n\n\n";
    }

    function getCodigoInterno(raiz) {
        let etiqueta = '';
        if(raiz.izquierda == null && raiz.derecha ==null){
            etiqueta = "nodo"+raiz.id+" [ label =\""+raiz.simbolo+"\"];\n";
        }else{
            etiqueta = "nodo"+raiz.id+" [ label =\"<C0>|"+raiz.simbolo+"|<C1>\"];\n";
        }

        if(raiz.izquierda != null){
            etiqueta = etiqueta + getCodigoInterno(raiz.izquierda) +
               "nodo" + raiz.id + ":C0->nodo"+ raiz.izquierda.id + "\n";
        }
        
        if(raiz.derecha != null){
            etiqueta = etiqueta + getCodigoInterno(raiz.derecha) +
               "nodo"+ raiz.id +":C1->nodo"+raiz.derecha.id+"\n";                    
        }
        return etiqueta;
    }
%}


%lex
%options case-insensitive
number [0-9]+
%%

\s+                   /* skip whitespace */
{number}              return 'number'
"*"                   return '*'
"."                   return '.'

<<EOF>>		          return 'EOF'

/lex

%start S

%%

S : INICIO EOF{
    return salida;
};

INICIO 
    : number ARBOLES{
        if($2 == Number($1)){
            console.log("La cantidad de árboles es correcta");
        }
        else{
            console.log("La cantidad de árboles es incorrecta");
        }
    }
;

ARBOLES
    : ARBOLES ARBOL{
        imprime_arbol($2, $1 + 1);
        $$ = $1 + 1;
    }
    | ARBOL {
        imprime_arbol($1, 1);
        $$ = 1;
    }
;

ARBOL
    : "*" ARBOL ARBOL {
        $$ = { nodo : crea_nodo('*', $2.nodo, $3.nodo), altura : ($1.altura > $2.altura ? $1.altura : $2.altura) + 1};
    }
    | "." {
        $$ = {altura : 0, nodo : null};
    }
;