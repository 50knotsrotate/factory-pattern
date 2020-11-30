import { GreetingFactory } from './GreetingFactory';
import { Greeting } from './Greeting';

export class Person { 
    mood: String;
    greetingBehavior : Greeting
    greetingFactory: GreetingFactory;

    constructor(mood: String) { 
        this.greetingFactory = new GreetingFactory();
        this.mood = mood;
        this.greetingBehavior = this.greetingFactory.getGreeting(this.mood);
    };
    
    sayHello() { 
        this.greetingBehavior.greet();
    };

    setMood(mood : String): void { 
        this.mood = mood;
        this.greetingBehavior = this.greetingFactory.getGreeting(this.mood);
    };
}