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
exports.While = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Retorno_1 = require("../Abstract/Retorno");
var While = /** @class */ (function (_super) {
    __extends(While, _super);
    function While(condition, code, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.condition = condition;
        _this.code = code;
        return _this;
    }
    While.prototype.execute = function (env) {
        var condition = this.condition.execute(env);
        if (condition.type != Retorno_1.Type.BOOLEAN) {
            throw { error: "La condicion no es booleana", linea: this.line, columna: this.column };
        }
        while (condition.value == true) {
            var element = this.code.execute(env);
            if (element != null || element != undefined) {
                console.log(element);
                if (element.type == 'Break')
                    break;
                else if (element.type == 'Continue')
                    continue;
            }
            condition = this.condition.execute(env);
            if (condition.type != Retorno_1.Type.BOOLEAN) {
                throw { error: "La condicion no es booleana", linea: this.line, columna: this.column };
            }
        }
    };
    return While;
}(Instruction_1.Instruction));
exports.While = While;
//# sourceMappingURL=While.js.map