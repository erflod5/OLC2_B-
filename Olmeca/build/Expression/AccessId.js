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
exports.AccessId = void 0;
var Expression_1 = require("../Abstract/Expression");
var Retorno_1 = require("../Abstract/Retorno");
var AccessId = /** @class */ (function (_super) {
    __extends(AccessId, _super);
    function AccessId(left, id, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.left = left;
        _this.id = id;
        return _this;
    }
    AccessId.prototype.execute = function (environment) {
        var left = this.left.execute(environment);
        if (left.type == Retorno_1.Type.STRUCT) {
            var value = left.value.getAttribute(this.id);
            return { value: value.valor, type: value.type };
        }
        throw new Error("La variable no existe");
    };
    return AccessId;
}(Expression_1.Expression));
exports.AccessId = AccessId;
//# sourceMappingURL=AccessId.js.map