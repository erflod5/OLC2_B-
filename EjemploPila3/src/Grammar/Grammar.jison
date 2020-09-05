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
T 
  : F T_{
    console.log("T -> F T' ("+yytext+")");
    var s =  eval('$$');
    console.log(s);
	  $$ = $2;
	  return $$;
  }
;

T_
  : '*' F T_ {
    console.log("T' -> * F T' ("+yytext+")");
    var s =  eval('$$');
    console.log(s);
	$$ = s[s.length-4] * $3;
  }
  | /*e*/{
    console.log("T' -> epsilon ' ("+yytext+")");
    var s =  eval('$$');
    console.log(s);
    $$ = s[s.length - 1];
  }
;

F
  : numero {
	  $$ = Number($1);
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
