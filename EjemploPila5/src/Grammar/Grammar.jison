%{

%}

%lex
%%
\s+                           {}
[a-zA-Z_]\w*                  { return 'id'; }
.                             { return yytext; }
/lex

%%

RAIZ
  : PRIMERO '[' LISTA ']' {
    //console.log("RAIZ -> ID '[' HIJOS ']' ("+yytext+")");
    //var s =  eval('$$');
    //console.log(s);
  }
;

PRIMERO : id {
    //$$ = 'global_' + $1;
  }
;

LISTA
  : HIJO LISTAPRIMA {
    console.log(`LISTA -> HIJO LISTAPRIMA ${$1}`);
    var s =  eval('$$');
    console.log(s);
  }
;

LISTAPRIMA
  : ',' HIJO LISTAPRIMA{
    console.log(`LISTAPRIMA -> HIJO LISTAPRIMA ${$1}`);
    var s =  eval('$$');
    console.log(s);
  }
  | /*epsilon*/{
    console.log(`LISTAPRIMA -> epsilon`);
    var s =  eval('$$');
    console.log(s);
  }
;

HIJO 
  : ID {
    console.log(`HIJO -> ID ${$1}`);
    var s =  eval('$$');
    console.log(s);

  }
  | ID '[' LISTA ']'{
    console.log(`HIJO -> ID [ HIJOS ] ${$1}`);
    var s =  eval('$$');
    console.log(s);
  }
;

ID 
  : id {
    console.log(`ID -> id ${$1}`);
    var s =  eval('$$');
    const indice = s.length - 1;
    if(s[indice - 1] == '['){
      $$ = {padre : s[indice - 2], id : s[indice - 2] + '_' + $1};
    }
    else{
      $$ = {padre : s[indice - 2].padre, id : s[indice - 2].padre + '_' + $1};
    }
  }
;


%%