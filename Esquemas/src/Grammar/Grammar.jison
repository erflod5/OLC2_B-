 
%{
%}

%lex
%options case-insensitive
number [0-9]
%%

{number}              return 'NUMBER'

<<EOF>>		          return 'EOF'

/lex

%start Init

%%

Init    
    : Lista EOF 
    {
        return $1;
    } 
;

Lista
    : Lista NUMBER{
        $$ = $1 * 10 + Number($2);
    }
    | NUMBER{
        $$ = Number($1);
    }
;

L
    : NUMBER LPRIMA{
        $$ = $1 * $2.base + $2.number;
    }
;

LPRIMA 
    : NUMBER LPRIMA{
        $$ = {base: $2.base * 10, number: $2.number + $1 * $2.base};
    }
    | /*epsilon*/
    {
        $$ = {base: 1, number: 0}  
    }
;
