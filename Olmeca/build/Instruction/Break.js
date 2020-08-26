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
exports.Break = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Break = /** @class */ (function (_super) {
    __extends(Break, _super);
    function Break(line, column) {
        return _super.call(this, line, column) || this;
    }
    Break.prototype.execute = function (environment) {
        return { line: this.line, column: this.column, type: 'Break' };
    };
    return Break;
}(Instruction_1.Instruction));
exports.Break = Break;
//# sourceMappingURL=Break.js.map