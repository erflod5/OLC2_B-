"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Environment_1 = require("./Symbol/Environment");
var Errores_1 = require("./Errores");
var Error_1 = require("./Error");
var Function_1 = require("./Instruction/Function");
var parser = require('./Grammar/Grammar');
var fs = require('fs');
try {
    var entrada = fs.readFileSync('./entrada.txt');
    var ast = parser.parse(entrada.toString());
    var env = new Environment_1.Environment(null);
    for (var _i = 0, ast_1 = ast; _i < ast_1.length; _i++) {
        var instr = ast_1[_i];
        try {
            if (instr instanceof Function_1.Function)
                instr.execute(env);
        }
        catch (error) {
            Errores_1.errores.push(error);
        }
    }
    for (var _a = 0, ast_2 = ast; _a < ast_2.length; _a++) {
        var instr = ast_2[_a];
        if (instr instanceof Function_1.Function)
            continue;
        try {
            var actual = instr.execute(env);
            if (actual != null || actual != undefined) {
                Errores_1.errores.push(new Error_1.Error_(actual.line, actual.column, 'Semantico', actual.type + ' fuera de un ambito correcto'));
            }
        }
        catch (error) {
            Errores_1.errores.push(error);
        }
    }
}
catch (error) {
    console.log(error);
}
console.log(Errores_1.errores);
//Java
// int x = 10;
// x = 10;
// x = "hola";
//JS
//# sourceMappingURL=index.js.map