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
  : L ',' id    { 
    var s =  eval('$$');
    var b0 = s.length - 3;
    console.log("L -> L ',' id ("+yytext+")");
    console.log($id + ' is of type ' + s[b0-1]);
    console.log(s[b0] + ' is of class ' + s[b0-2]);
  }
  | id {
    var s =  eval('$$');
    var b0 = s.length - 1;
    console.log("L -> id ("+yytext+")");
    console.log($id + ' is of type ' + s[b0-1]);
    console.log(s[b0] + ' is of class ' + s[b0-2]);
  }
;

%%