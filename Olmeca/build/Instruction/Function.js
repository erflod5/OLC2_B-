"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Function = /** @class */ (function (_super) {
    __extends(Function, _super);
    function Function(id, statment, parametros, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        _this.statment = statment;
        _this.parametros = parametros;
        return _this;
    }
    Function.prototype.execute = function (environment) {
        environment.guardarFuncion(this.id, this);
    };
    return Function;
}(Instruction_1.Instruction));
exports.Function = Function;
/*
    function fact(n : numero){
        if(n == 0)
            return 1;
        else
            return n * fact(n - 1);
    }
*/
/*

    Lenguaje Entrada -> Traducis -> Lenguaje Salida;

    Lenguaje Salida -> Intepretas -> Salida en consola | Reportes | TS;

*/ 
//# sourceMappingURL=Function.js.map