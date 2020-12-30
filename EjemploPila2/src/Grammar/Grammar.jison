%lex
%%
\s+                           {}
(global|local|integer|float)  { return yytext; }
[a-zA-Z_]\w*                  { return 'id'; }
.                             { return yytext; }
/lex

%%
D 
  : C T L {
    console.log('Variables reconocidas: ', $3);
  }
  ;

C
  : global{
    $$ = 'GLOBAL';
  }
  | local{
    $$ = 'LOCAL';
  }
  ; 
  
T
  : integer{
    $$ = 'INT';
  }
  | float{
    $$ = 'FLOAT';
  }
;

L 
  : L ',' id { 
    var s =  eval('$$');
    var indice = s.length - 3;
    $1.push({id : $3, tipo : s[indice - 1], ambito : s[indice - 2]});
  }
  | id {
    var s =  eval('$$');
    var indice = s.length - 1;
    $$ = [ {id : $1, tipo : s[indice - 1], ambito : s[indice - 2]} ];
  }
;

%%

/*

global integer a,b,c

Variables reconocidas:  [
  { id: 'a', tipo: 'INT', ambito: 'GLOBAL' },
  { id: 'b', tipo: 'INT', ambito: 'GLOBAL' },
  { id: 'c', tipo: 'INT', ambito: 'GLOBAL' }
]
*/