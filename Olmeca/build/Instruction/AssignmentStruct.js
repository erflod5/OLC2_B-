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
exports.AssignmentStruct = void 0;
var Instruction_1 = require("../Abstract/Instruction");
var AssignmentStruct = /** @class */ (function (_super) {
    __extends(AssignmentStruct, _super);
    function AssignmentStruct(ids, value, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.ids = ids;
        _this.value = value;
        return _this;
    }
    AssignmentStruct.prototype.execute = function (environment) {
        var value = this.value.execute(environment);
        var symbol = environment.getVar(this.ids[0]);
        for (var i = 1; i < this.ids.length; i++) {
            symbol = symbol === null || symbol === void 0 ? void 0 : symbol.valor.getAttribute(this.ids[i]);
        }
        if (symbol != null) {
            symbol.valor = value.value;
            symbol.type = value.type;
        }
    };
    return AssignmentStruct;
}(Instruction_1.Instruction));
exports.AssignmentStruct = AssignmentStruct;
//# sourceMappingURL=AssignmentStruct.js.map