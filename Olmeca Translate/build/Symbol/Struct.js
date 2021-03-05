"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Struct = void 0;
var Struct = /** @class */ (function () {
    function Struct() {
        this.attributes = new Map();
    }
    Struct.prototype.getAttribute = function (id) {
        return this.attributes.get(id);
    };
    Struct.prototype.setAttribute = function (id, value) {
        this.attributes.set(id, value);
    };
    return Struct;
}());
exports.Struct = Struct;
//# sourceMappingURL=Struct.js.map