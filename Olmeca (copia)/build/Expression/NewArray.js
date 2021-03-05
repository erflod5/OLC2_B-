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
exports.NewArray = void 0;
var Expression_1 = require("../Abstract/Expression");
var Retorno_1 = require("../Abstract/Retorno");
var Array_1 = require("../Symbol/Array");
var Symbol_1 = require("../Symbol/Symbol");
var NewArray = /** @class */ (function (_super) {
    __extends(NewArray, _super);
    function NewArray(listExpr, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.listExpr = listExpr;
        return _this;
    }
    NewArray.prototype.execute = function (environment) {
        var array = new Array_1.Array();
        var index = 0;
        this.listExpr.forEach(function (expr) {
            var value = expr.execute(environment);
            array.setAttribute(index++, new Symbol_1.Symbol(value.value, '', value.type));
        });
        return { value: array, type: Retorno_1.Type.ARRAY };
    };
    return NewArray;
}(Expression_1.Expression));
exports.NewArray = NewArray;
//# sourceMappingURL=NewArray.js.map