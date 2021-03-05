"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Array = void 0;
var Array = /** @class */ (function () {
    function Array() {
        this.values = [];
    }
    Array.prototype.getAttribute = function (index) {
        return this.values[index];
    };
    Array.prototype.setAttribute = function (index, value) {
        this.values[index] = value;
    };
    return Array;
}());
exports.Array = Array;
//# sourceMappingURL=Array.js.map