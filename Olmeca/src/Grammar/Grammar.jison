 
%{
    const {Arithmetic, ArithmeticOption} = require('../Expression/Arithmetic');
    const {Relational, RelationalOption} = require('../Expression/Relational');
    const {Access} = require('../Expression/Access');
    const {Literal} = require('../Expression/Literal');
    const {CallExpr} = require('../Expression/CallExpr');
    const {AccessId} = require('../Expression/AccessId'); // print(a.b.c);
    const {NewStruct} = require('../Expression/NewStruct'); // {a : 10, b : "hola"}
    const {If} = require('../Instruction/If');
    const {Return} = require('../Instruction/Return');
    const {Print} = require('../Instruction/Print');
    const {Statement} = require('../Instruction/Statement');
    const {While} = require('../Instruction/While');
    const {Declaration} = require('../Instruction/Declaration');
    const {Break} = require('../Instruction/Break');
    const {Call} = require('../Instruction/Call');
    const {Function} = require('../Instruction/Function');
    const {AssignmentStruct} = require('../Instruction/AssignmentStruct'); //a.b.c = 10;
%}

%lex
%options case-insensitive
number  [0-9]+
decimal {entero}"."{entero}
string  (\"[^"]*\")
%%
\s+                   /* skip whitespace */

{number}                return 'NUMBER'
{decimal}               return 'DECIMAL'
{string}                return 'STRING'
"*"                     return '*'
"/"                     return '/'
";"                     return ';'
":"                     return ':'
"."                     return '.'
","                     return ','
"-"                     return '-'
"+"                     return '+'

"<"                   return '<'
">"                   return '>'
"<="                  return '<='
">="                  return '>='
"=="                  return '=='
"!="                  return '!='
"||"                  return '||'
"&&"                  return '&&'
"!"                   return '!'
"="                   return '='

"("                     return '('
")"                     return ')' 
"{"                     return '{'
"}"                     return '}'
"if"                    return 'IF'
"else"                  return 'ELSE'
"while"                 return 'WHILE'
"print"                 return 'PRINT'
"break"                 return 'BREAK'
"function"              return 'FUNCTION'
"return"                return "RETURN"
"null"                  return "NULL"
([a-zA-Z_])[a-zA-Z0-9_ñÑ]*	return 'ID';
<<EOF>>		            return 'EOF'


/lex

%left '||'
%left '&&'
%left '==', '!='
%left '>=', '<=', '<', '>'
%left '+' '-'
%left '*' '/'
%left '.'

%start Init

%%

Init    
    : Instructions EOF 
    {
        return $1;
    } 
;

Instructions
    : Instructions Instruction{
        $1.push($2);
        $$ = $1;
    }
    | Instruction{
        $$ = [$1];
    }
;

Instruction
    : IfSt {
        $$ = $1;
    }
    | WhileSt {
        $$ = $1;
    }
    | Statement {
        $$ = $1;
    }
    | PrintSt {
        $$ = $1;
    }
    | Declaration{
        $$ = $1;
    }
    | 'BREAK' ';'{
        $$ = new Break(@1.first_line, @1.first_column);
    }
    | FunctionSt {
        $$ = $1;
    }
    | Call ';'{

    }
    | RETURN Expr ';' {
        $$ = new Return($2, @1.first_line, @1.first_column);
    }
    | error ';'
    | error '}'
;

Call
    : ID '(' ')' {
        $$ = new Call($1, [], @1.first_line, @1.first_column);
    }
    | ID '(' ListaExpr ')' {
        $$ = new Call($1, $3, @1.first_line, @1.first_column);
    }
;

ListaExpr 
    : ListaExpr ',' Expr{
        $1.push($3);
        $$ = $1;
    }
    | Expr{
        $$ = [$1];
    }
;    

FunctionSt 
    : 'FUNCTION' ID '(' ')' Statement {
        $$ = new Function($2, $5, [], @1.first_line, @1.first_column);
    }
    | 'FUNCTION' ID '(' Parametros ')' Statement {
        $$ = new Function($2, $6, $4, @1.first_line, @1.first_column);
    }
;

Parametros
    : Parametros ',' ID {
        $1.push($3);
        $$ = $1;
    }
    | ID{
        $$ = [$1];
    }
;

Declaration 
    : ID '=' Expr ';'{
        $$ = new Declaration($1, $3, @1.first_line, @1.first_column);
    }
    | ListaIds '=' Expr ';' {
        $$ = new AssignmentStruct($1, $3);
    }
;

ListaIds
    : ListaIds '.' ID {
        $1.push($3);
        $$ = $1;
    }
    | ID '.' ID {
        $$ = [$1, $3];
    }
;

IfSt
    : 'IF' '(' Expr ')' Statement ElseSt{
        $$ = new If($3, $5, $6, @1.first_line, @1.first_column);
    }
;

ElseSt
    : 'ELSE' Statement {
        $$ = $2;
    }
    | 'ELSE' IfSt {
        $$ = $2;
    }
    | /* epsilon */
    {
        $$ = null;
    }
;

WhileSt
    : 'WHILE' '(' Expr ')' Statement{
        $$ = new While($3, $5, @1.first_line, @1.first_column);
    }
;

Statement
    : '{' Instructions '}' {
        $$ = new Statement($2, @1.first_line, @1.first_column);
    }
    | '{' '}' {
        $$ = new Statement(new Array(), @1.first_line, @1.first_column);
    }
;

PrintSt 
    : 'PRINT' '(' Expr ')' ';' {
        $$ = new Print($3, @1.first_line, @1.first_column);
    }
;

Expr
    : Expr '+' Expr
    {
        $$ = new Arithmetic($1, $3, ArithmeticOption.PLUS, @1.first_line,@1.first_column);
    }       
    | Expr '-' Expr
    {
        $$ = new Arithmetic($1, $3, ArithmeticOption.MINUS, @1.first_line,@1.first_column);
    }
    | Expr '*' Expr
    { 
        $$ = new Arithmetic($1, $3, ArithmeticOption.TIMES, @1.first_line,@1.first_column);
    }       
    | Expr '/' Expr
    {
        $$ = new Arithmetic($1, $3, ArithmeticOption.DIV, @1.first_line,@1.first_column);
    }
    | Expr '<' Expr
    {
        $$ = new Relational($1, $3,RelationalOption.LESS, @1.first_line, @1.first_column);
    }
    | Expr '<=' Expr
    {
        $$ = new Relational($1, $3,RelationalOption.LESSOREQUAL ,@1.first_line, @1.first_column);
    }
    | Expr '>' Expr
    {
        $$ = new Relational($1, $3,RelationalOption.GREATER ,@1.first_line, @1.first_column);
    }
    | Expr '>=' Expr
    {
        $$ = new Relational($1, $3,RelationalOption.GREATEROREQUAL ,@1.first_line, @1.first_column);
    }
    | Expr '==' Expr
    {
        $$ = new Relational($1, $3,RelationalOption.EQUAL ,@1.first_line, @1.first_column);
    }
    | Expr '!=' Expr
    {
        $$ = new Relational($1, $3,RelationalOption.NOTEQUAL ,@1.first_line, @1.first_column);
    }
    | Expr '.' ID
    {
        $$ = new AccessId($1, $3, @1.first_line, @1.first_column);
    }
    | F
    {
        $$ = $1;
    }
    | ID '(' ')' {
        $$ = new CallExpr($1, [], @1.first_line, @1.first_column);
    }
    | ID '(' ListaExpr ')' {
        $$ = new CallExpr($1, $3, @1.first_line, @1.first_column);
    }
    | '{' Attributes '}' {
        $$ = new NewStruct($2, @1.first_line, @1.first_column);
    }
;

Attributes
    : Attributes ',' Attribute {
        $1.push($3);
        $$ = $1;
    }
    | Attribute {
        $$ = [$1];
    }
;

Attribute
    : ID ':' Expr {
        $$ = {id: $1, value: $3};
    }
;

F   : '(' Expr ')'
    { 
        $$ = $2;
    }
    | DECIMAL
    { 
        $$ = new Literal($1, @1.first_line, @1.first_column, 0);
    }
    | NUMBER
    { 
        $$ = new Literal($1, @1.first_line, @1.first_column, 1);
    }
    | STRING
    {
        $$ = new Literal($1.replace(/\"/g,""), @1.first_line, @1.first_column, 2);
    }
    | ID{
        $$ = new Access($1, @1.first_line, @1.first_column);
    }
    | NULL{
        $$ = new Literal(null, @1.first_line, @1.first_column, 3);
    }
;