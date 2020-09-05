%lex
%%
\s+                           {}
[a-zA-Z_]\w*                  { return 'id'; }
.                             { return yytext; }
/lex

%%

RAIZ
  : PRIMERO '[' HIJOS ']' {
    //console.log("RAIZ -> ID '[' HIJOS ']' ("+yytext+")");
    //var s =  eval('$$');
    //console.log(s);
  }
;

PRIMERO : id {
    $$ = $1;
  }
;

HIJOS
  : HIJOS ',' HIJO {
    var s =  eval('$$');
    var parent = s[s.length - 5];
    console.log(`Soy (${$3}) y mi padre es (${parent})`);
  }
  | HIJO {
    var s =  eval('$$');
    var parent = s[s.length - 3];
    console.log(`Soy (${$1}) y mi padre es (${parent})`);
  }
;

HIJO 
  : ID {
    /*console.log("HIJO -> ID ("+yytext+")");
    var s =  eval('$$');
    console.log(s);*/
    $$ = $1;
  }
  | ID '[' HIJOS ']'{
  /*console.log("HIJO -> ID '[' HIJOS ']' ("+yytext+")");
    var s =  eval('$$');
    console.log(s);*/
    $$ - $1;
  }
;

ID 
  : id {
    /*console.log('ID -> id (' + yytext + ')');
    var s =  eval('$$');
    console.log(s);*/
    $$ = $1;
  }
;

/*C
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

/*L 
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
;*/

%%