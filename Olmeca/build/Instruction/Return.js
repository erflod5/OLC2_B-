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
exports.Return = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Return = /** @class */ (function (_super) {
    __extends(Return, _super);
    function Return(expr, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.expr = expr;
        return _this;
    }
    Return.prototype.execute = function (environment) {
        var value = this.expr.execute(environment);
        return { line: this.line, column: this.column, type: 'Return', value: value };
    };
    return Return;
}(Instruction_1.Instruction));
exports.Return = Return;
//# sourceMappingURL=Return.js.map