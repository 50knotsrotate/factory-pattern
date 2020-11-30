"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetingFactory = void 0;
var MeanGreeting_1 = require("./MeanGreeting");
var NiceGreeting_1 = require("./NiceGreeting");
var NeutralGreeting_1 = require("./NeutralGreeting");
var NullGreeting_1 = require("./NullGreeting");
var GreetingFactory = /** @class */ (function () {
    function GreetingFactory() {
    }
    GreetingFactory.prototype.getGreeting = function (greetingType) {
        greetingType = greetingType.toLowerCase();
        if (greetingType === 'mean') {
            return new MeanGreeting_1.MeanGreeting();
        }
        else if (greetingType === 'nice') {
            return new NiceGreeting_1.NiceGreeting();
        }
        else if (greetingType === 'neutral') {
            return new NeutralGreeting_1.NeutralGreeting();
        }
        else {
            return new NullGreeting_1.NullGreeting();
        }
    };
    return GreetingFactory;
}());
exports.GreetingFactory = GreetingFactory;
;
