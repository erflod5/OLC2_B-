%{let s = null;%}
%lex
%options case-insensitive
entero [0-9]+
decimal {entero}"."{entero}
%%

\s+                   /* skip whitespace */

{decimal}             return 'DECIMAL' 
{entero}              return 'ENTERO'
"*"                   return '*'
"/"                   return '/'
";"                   return ';'
"-"                   return '-'
"+"                   return '+'
"("                   return '('
")"                   return ')'  
<<EOF>>		            return 'EOF'

/lex

%start INICIO

%%

INICIO : E EOF  { $$ = { val: $1.val}; return $$; } 
       ;

E :  T E1       { s = eval('$$'); $$ = { val: $2.val}; }  
  ;

E1 : '+' T E1   { s = eval('$$'); $$ = { val: s[s.length-4].val + $3.val}; }
   | '-' T E1   { s = eval('$$'); $$ = { val: s[s.length-4].val - $3.val}; }
   |            { s = eval('$$'); $$ = { val: s[s.length-1].val }; }
   ;

T :  F T1       { s = eval('$$'); $$ = { val: $2.val}; } 
  ;

T1 : '*' F T1   { s = eval('$$'); $$ = { val: s[s.length-4].val * $3.val}; }
   | '/' F T1   { s = eval('$$'); $$ = { val: s[s.length-4].val / $3.val}; }
   |            { s = eval('$$'); $$ = { val: s[s.length-1].val }; } 
   ;

F : ENTERO      { s = eval('$$'); $$ = { val: Number($1)}; }
  | DECIMAL     { s = eval('$$'); $$ = { val: Number($1)}; }
  | '(' E ')'   { s = eval('$$'); $$ = { val: $2.val}; }
  ;