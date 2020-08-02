 
%{

%}

%lex
%options case-insensitive
number [0-9]+
decimal {entero}"."{entero}
%%
\s+                   /* skip whitespace */

{number}              return 'NUMBER'
{decimal}             return 'DECIMAL'
"*"                   return '*'
"/"                   return '/'
";"                   return ';'
"-"                   return '-'
"+"                   return '+'
"("                   return '('
")"                   return ')' 
<<EOF>>		          return 'EOF'

/lex

%start Init

%%

Init    
    : E EOF 
    {
        return $1;
    }
;

E
    : E '+' T
    {
        $$ = $1 + $3;
    }       
    | E '-' T
    {
        $$ = $1 - $3;
    } 
    | T
    {
        $$ = $1;
    }
;

T   
    : T '*' F
    { 
        $$ = $1 * $3;
    }       
    | T '/' F
    {
        $$ = $1 / $3;
    }
    | F
    { 
        $$ = $1;
    }
;

F   
    : '(' E ')'
    { 
        $$ = $2;
    }
    | DECIMAL
    { 
        $$ = Number($1);
    }
    | NUMBER
    { 
        $$ = Number($1);
    }
;