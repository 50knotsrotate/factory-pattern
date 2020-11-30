import { Greeting } from './Greeting';

export class NiceGreeting implements Greeting { 
    greet(): void { 
        console.log('Hello! Wonderful weather we\'re having! I hope your day is as wonderful as you are!');
    };
};