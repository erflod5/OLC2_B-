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
exports.Relational = exports.RelationalOption = void 0;
var Expression_1 = require("../Abstract/Expression");
var Retorno_1 = require("../Abstract/Retorno");
var RelationalOption;
(function (RelationalOption) {
    RelationalOption[RelationalOption["EQUAL"] = 0] = "EQUAL";
    RelationalOption[RelationalOption["NOTEQUAL"] = 1] = "NOTEQUAL";
    RelationalOption[RelationalOption["LESS"] = 2] = "LESS";
    RelationalOption[RelationalOption["LESSOREQUAL"] = 3] = "LESSOREQUAL";
    RelationalOption[RelationalOption["GREATER"] = 4] = "GREATER";
    RelationalOption[RelationalOption["GREATEROREQUAL"] = 5] = "GREATEROREQUAL";
})(RelationalOption = exports.RelationalOption || (exports.RelationalOption = {}));
var Relational = /** @class */ (function (_super) {
    __extends(Relational, _super);
    function Relational(left, right, type, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.left = left;
        _this.right = right;
        _this.type = type;
        return _this;
    }
    Relational.prototype.execute = function (environment) {
        var leftValue = this.left.execute(environment);
        var rightValue = this.right.execute(environment);
        if (this.type == RelationalOption.EQUAL) {
            var result = leftValue.value == rightValue.value;
            return { value: result, type: Retorno_1.Type.BOOLEAN };
        }
        else if (this.type == RelationalOption.NOTEQUAL) {
            var result = leftValue.value != rightValue.value;
            return { value: result, type: Retorno_1.Type.BOOLEAN };
        }
        return { value: 0, type: Retorno_1.Type.NUMBER };
    };
    return Relational;
}(Expression_1.Expression));
exports.Relational = Relational;
//# sourceMappingURL=Relational.js.map