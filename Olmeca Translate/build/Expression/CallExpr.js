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
exports.CallExpr = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Environment_1 = require("../Symbol/Environment");
var CallExpr = /** @class */ (function (_super) {
    __extends(CallExpr, _super);
    function CallExpr(id, expresiones, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        _this.expresiones = expresiones;
        return _this;
    }
    CallExpr.prototype.execute = function (environment) {
        var func = environment.getFuncion(this.id);
        if (func != undefined) {
            var newEnv = new Environment_1.Environment(environment.getGlobal());
            for (var i = 0; i < this.expresiones.length; i++) {
                var value_1 = this.expresiones[i].execute(environment);
                newEnv.guardar(func.parametros[i], value_1.value, value_1.type);
            }
            var value = func.statment.execute(newEnv);
            return value.value;
        }
    };
    return CallExpr;
}(Instruction_1.Instruction));
exports.CallExpr = CallExpr;
//# sourceMappingURL=CallExpr.js.map