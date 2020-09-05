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

INICIO : E EOF  { $$ = { val: $1.val}; console.log(s); return $$; } 
       ;

E :  T E1       { s = eval('$$'); $$ = { val: $2.val}; console.log(s, 'T')}  
  ;

E1 : '+' T E1   { s = eval('$$'); $$ = { val: s[s.length-4].val + $3.val}; console.log(s, $1);}
   | '-' T E1   { s = eval('$$'); $$ = { val: s[s.length-4].val - $3.val}; console.log(s, $1);}
   |            { s = eval('$$'); $$ = { val: s[s.length-1].val }; console.log(s, 'Epsilon +');}
   ;

T :  F T1       { s = eval('$$'); $$ = { val: $2.val}; console.log(s, 'F');} 
  ;

T1 : '*' F T1   { s = eval('$$'); $$ = { val: s[s.length-4].val * $3.val}; console.log(s, $1);}
   | '/' F T1   { s = eval('$$'); $$ = { val: s[s.length-4].val / $3.val}; console.log(s, $1);}
   |            { s = eval('$$'); $$ = { val: s[s.length-1].val}; console.log(s, 'Epsilon');} 
   ;

F : ENTERO      { s = eval('$$'); $$ = { val: Number($1)}; console.log(s, $1);}
  | DECIMAL     { s = eval('$$'); $$ = { val: Number($1)}; console.log(s, $1);}
  | '(' E ')'   { s = eval('$$'); $$ = { val: $2.val}; console.log(s, 'E');}
  ;
