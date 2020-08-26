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
exports.If = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Retorno_1 = require("../Abstract/Retorno");
var If = /** @class */ (function (_super) {
    __extends(If, _super);
    function If(condition, code, elsSt, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.condition = condition;
        _this.code = code;
        _this.elsSt = elsSt;
        return _this;
    }
    If.prototype.execute = function (env) {
        var _a;
        var condition = this.condition.execute(env);
        if (condition.type != Retorno_1.Type.BOOLEAN) {
            throw { error: "La condicion no es booleana", linea: this.line, columna: this.column };
        }
        if (condition.value == true) {
            return this.code.execute(env);
        }
        else {
            return (_a = this.elsSt) === null || _a === void 0 ? void 0 : _a.execute(env);
        }
    };
    return If;
}(Instruction_1.Instruction));
exports.If = If;
/*
    PADRE <- HIJO <- IF
    PADRE <- HIJO <- WHILE
*/ 
//# sourceMappingURL=If.js.map