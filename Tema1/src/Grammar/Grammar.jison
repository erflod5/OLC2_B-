
%lex
%options case-insensitive
%%
\s+                   /* skip whitespace */
number [0-9]+
{number}              return 'NUMBER'
"*"                   return '*'
"."                   return '.'
<<EOF>>		          return 'EOF'

/lex

%start S

%%

S : INICIO;

INICIO 
    : numero ARBOLES{
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
        imprime_arbol($2.nodo);
        $$ = $1 + 1;
    }
    | ARBOL {
        imprime_arbol($1.nodo);
        $$ = 1;
    }
;

ARBOL
    : '*' ARBOL ARBOL {
        $$ = { nodo : crea_nodo('*', $2.nodo, $3.nodo), altura : ($1.altura > $2.altura ? $1.altura : $2.altura) + 1};
    }
    | '.' {
        $$ = {altura : 0, nodo : null};
    }
;