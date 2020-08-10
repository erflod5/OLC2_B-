 
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