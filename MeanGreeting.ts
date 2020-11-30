import { Greeting } from './Greeting';

export class MeanGreeting implements Greeting { 
    
    greet(): void { 
        console.log('Hello, I hope you have a horrible day.');
    };
}