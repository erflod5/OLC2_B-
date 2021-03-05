"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expression = void 0;
var TablaTipos_1 = require("../Util/TablaTipos");
var Expression = /** @class */ (function () {
    function Expression(line, column) {
        this.line = line;
        this.column = column;
    }
    Expression.prototype.tipoDominante = function (tipo1, tipo2) {
        var type = TablaTipos_1.tipos[tipo1][tipo2];
        return type;
    };
    return Expression;
}());
exports.Expression = Expression;
//# sourceMappingURL=Expression.js.map