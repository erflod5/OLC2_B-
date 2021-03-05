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
exports.Access = void 0;
var Expression_1 = require("../Abstract/Expression");
var Access = /** @class */ (function (_super) {
    __extends(Access, _super);
    function Access(id, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        return _this;
    }
    Access.prototype.execute = function (environment) {
        var value = environment.getVar(this.id);
        if (value == null)
            throw new Error("La variable no existe");
        return { value: value.valor, type: value.type };
    };
    return Access;
}(Expression_1.Expression));
exports.Access = Access;
//# sourceMappingURL=Access.js.map