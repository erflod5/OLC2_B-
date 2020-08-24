 
%{
%}

%lex
%options case-insensitive
%%
\s+                   /* skip whitespace */

[a-zA-Z_]\w*          { return 'id'; }
"*"                   return '*'
"/"                   return '/'
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
        if($1.operador  != '+')
            return $1.value;
        else
            return $1.value + ')';
    } 
;

E
    : E '+' T
    {
        if($1.operador != '+'){
            $$ = {value : `${$1.value}, ${$3.value}`, operador : '+'};
        }
        else{
            $$ = { value : `SUM(${$1.value}, ${$3.value}`, operador : '+'};
        }
    } 
    | T
    {
        if($1.operador == '*')
            $$ = {value : `${$1.value} )`, operador : '0'};
        else
            $$ = $1;
    }
;

T   
    : T '*' F
    {
        if($1.operador != '*'){
            $$ = {value : `${$1.value}, ${$3.value}`, operador : '*'};
        }
        else{
            $$ = { value : `MUL(${$1.value}, ${$3.value}`, operador : '*'};
        }
    }       
    | F
    { 
        $$ = { value : $1.value, operador : '0'};
    }
;

F   : '(' E ')'
    { 
        $$ = {value: $2.value };
    }
    | id
    { 
        $$ = { value: $1};
    }
;