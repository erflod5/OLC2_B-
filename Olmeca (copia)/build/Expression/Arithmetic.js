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
exports.Arithmetic = exports.ArithmeticOption = void 0;
var Expression_1 = require("../Abstract/Expression");
var Retorno_1 = require("../Abstract/Retorno");
var Error_1 = require("../Error");
var ArithmeticOption;
(function (ArithmeticOption) {
    ArithmeticOption[ArithmeticOption["PLUS"] = 0] = "PLUS";
    ArithmeticOption[ArithmeticOption["MINUS"] = 1] = "MINUS";
    ArithmeticOption[ArithmeticOption["TIMES"] = 2] = "TIMES";
    ArithmeticOption[ArithmeticOption["DIV"] = 3] = "DIV";
})(ArithmeticOption = exports.ArithmeticOption || (exports.ArithmeticOption = {}));
var Arithmetic = /** @class */ (function (_super) {
    __extends(Arithmetic, _super);
    function Arithmetic(left, right, type, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.left = left;
        _this.right = right;
        _this.type = type;
        return _this;
    }
    Arithmetic.prototype.execute = function (environment) {
        var leftValue = this.left.execute(environment);
        var rightValue = this.right.execute(environment);
        var result;
        var tipoDominante = this.tipoDominante(leftValue.type, rightValue.type);
        if (this.type == ArithmeticOption.PLUS) {
            if (tipoDominante == Retorno_1.Type.STRING)
                result = { value: (leftValue.value.toString() + rightValue.value.toString()), type: Retorno_1.Type.STRING };
            else if (tipoDominante == Retorno_1.Type.NUMBER)
                result = { value: (leftValue.value + rightValue.value), type: Retorno_1.Type.NUMBER };
            else
                throw new Error_1.Error_(this.line, this.column, 'Semantico', 'No se puede operar: ' + leftValue.type + ' _ ' + rightValue.type);
        }
        else if (this.type == ArithmeticOption.MINUS) {
            if (tipoDominante == Retorno_1.Type.STRING)
                throw new Error_1.Error_(this.line, this.column, 'Semantico', 'No se puede operar: ' + leftValue.type + ' _ ' + rightValue.type);
            result = { value: (leftValue.value - rightValue.value), type: Retorno_1.Type.NUMBER };
        }
        else if (this.type == ArithmeticOption.TIMES) {
            result = { value: (leftValue.value * rightValue.value), type: Retorno_1.Type.NUMBER };
        }
        else {
            if (rightValue.value == 0) {
                throw new Error_1.Error_(this.line, this.column, "Semantico", "No se puede dividir entre 0");
            }
            result = { value: (leftValue.value / rightValue.value), type: Retorno_1.Type.NUMBER };
        }
        return result;
    };
    return Arithmetic;
}(Expression_1.Expression));
exports.Arithmetic = Arithmetic;
/*
    3 + 5 * "hola mundo";
    Error
*/ 
//# sourceMappingURL=Arithmetic.js.map