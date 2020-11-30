"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var philip = new Person_1.Person('mean'); // Philip woke up in a bad mood today.
philip.sayHello(); // Logs: Hello, I hope you have a horrible day.
philip.setMood('nice'); // Philip is now in a good mood
philip.sayHello(); // Logs: Hello! Wonderful weather we're having! I hope your day is as wonderful as you are!
philip.setMood('neutral'); // Philip has leveled out and is now in a neutral mood
philip.sayHello(); // Logs: Hi.
