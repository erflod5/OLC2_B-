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
exports.AccessArray = void 0;
var Expression_1 = require("../Abstract/Expression");
var Retorno_1 = require("../Abstract/Retorno");
var AccessArray = /** @class */ (function (_super) {
    __extends(AccessArray, _super);
    function AccessArray(anterior, index, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.anterior = anterior;
        _this.index = index;
        return _this;
    }
    AccessArray.prototype.execute = function (environment) {
        var anterior = this.anterior.execute(environment);
        if (anterior.type != Retorno_1.Type.ARRAY)
            throw new Error("No es un arreglo");
        var index = this.index.execute(environment);
        if (index.type != Retorno_1.Type.NUMBER)
            throw new Error("El indice no es un numero");
        var value = anterior.value.getAttribute(index.value);
        return { type: value.type, value: value.valor };
    };
    return AccessArray;
}(Expression_1.Expression));
exports.AccessArray = AccessArray;
//# sourceMappingURL=AccessArray.js.map