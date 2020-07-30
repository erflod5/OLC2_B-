 
%{
    const {Arithmetic, ArithmeticOption} = require('../Expression/Arithmetic');
    const {Literal} = require('../Expression/Literal')
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
        $$ = new Arithmetic($1, $3, ArithmeticOption.PLUS, @1.first_line,@1.first_column);
    }       
    | E '-' T
    {
        $$ = new Arithmetic($1, $3, ArithmeticOption.MINUS, @1.first_line,@1.first_column);
    } 
    | T
    {
        $$ = $1;
    }
;

T   
    : T '*' F
    { 
        $$ = new Arithmetic($1, $3, ArithmeticOption.TIMES, @1.first_line,@1.first_column);
    }       
    | T '/' F
    {
        $$ = new Arithmetic($1, $3, ArithmeticOption.DIV, @1.first_line,@1.first_column);
    }
    | F
    { 
        $$ = $1;
    }
;

F   : '(' E ')'
    { 
        $$ = $2;
    }
    | DECIMAL
    { 
        $$ = new Literal($1, @1.first_line, @1.first_column);
    }
    | NUMBER
    { 
        $$ = new Literal($1, @1.first_line, @1.first_column);
    }
;