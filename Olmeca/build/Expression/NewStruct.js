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
exports.NewStruct = void 0;
var Expression_1 = require("../Abstract/Expression");
var Retorno_1 = require("../Abstract/Retorno");
var Struct_1 = require("../Symbol/Struct");
var Symbol_1 = require("../Symbol/Symbol");
var NewStruct = /** @class */ (function (_super) {
    __extends(NewStruct, _super);
    function NewStruct(attributes, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.attributes = attributes;
        return _this;
    }
    NewStruct.prototype.execute = function (environment) {
        var struct = new Struct_1.Struct();
        this.attributes.forEach(function (attribute) {
            var value = attribute.value.execute(environment);
            struct.setAttribute(attribute.id, new Symbol_1.Symbol(value.value, attribute.id, value.type));
        });
        return { value: struct, type: Retorno_1.Type.STRUCT };
    };
    return NewStruct;
}(Expression_1.Expression));
exports.NewStruct = NewStruct;
//# sourceMappingURL=NewStruct.js.map