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
exports.Declaration = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var Declaration = /** @class */ (function (_super) {
    __extends(Declaration, _super);
    function Declaration(id, value, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        _this.value = value;
        return _this;
    }
    Declaration.prototype.execute = function (environment) {
        var val = this.value.execute(environment);
        environment.guardar(this.id, val.value, val.type);
    };
    return Declaration;
}(Instruction_1.Instruction));
exports.Declaration = Declaration;
//# sourceMappingURL=Declaration.js.map