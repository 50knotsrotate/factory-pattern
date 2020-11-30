"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var GreetingFactory_1 = require("./GreetingFactory");
var Person = /** @class */ (function () {
    function Person(mood) {
        this.greetingFactory = new GreetingFactory_1.GreetingFactory();
        this.mood = mood;
        this.greetingBehavior = this.greetingFactory.getGreeting(this.mood);
    }
    ;
    Person.prototype.sayHello = function () {
        this.greetingBehavior.greet();
    };
    ;
    Person.prototype.setMood = function (mood) {
        this.mood = mood;
        this.greetingBehavior = this.greetingFactory.getGreeting(this.mood);
    };
    ;
    return Person;
}());
exports.Person = Person;
