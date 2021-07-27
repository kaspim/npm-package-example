"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = void 0;
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.name = null;
    }
    Greeter.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Greeter.prototype.sayHi = function () {
        return 'Hi, ' + (!!this.name ? this.name + '!' : 'there!');
    };
    return Greeter;
}());
exports.Greeter = Greeter;
