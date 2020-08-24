%lex
%%
\s+                           {}
(global|local|integer|float)  { return yytext; }
[a-zA-Z_]\w*                  { return 'id'; }
.                             { return yytext; }
/lex
%%
D 
  : C T L 
  ;

C
  : global
  | local
  ; 
  
T
  : integer
  | float
;

L 
  : L ',' id { 
    console.log("L -> L ',' id ("+yytext+")");
    var s =  eval('$$');
    console.log(s);
  }
  | id {
    console.log("L -> id ("+yytext+")");
    var s =  eval('$$');
    console.log(s);
  }
;

%%