import { Greeting } from './Greeting';
import { MeanGreeting } from './MeanGreeting';
import { NiceGreeting } from './NiceGreeting';
import { NeutralGreeting } from './NeutralGreeting';
import { NullGreeting } from './NullGreeting';

export class GreetingFactory { 
    getGreeting(greetingType: String): Greeting {
        greetingType = greetingType.toLowerCase();
        if (greetingType === 'mean') {
            return new MeanGreeting();
        } else if (greetingType === 'nice') {
            return new NiceGreeting()
        } else if (greetingType === 'neutral') {
            return new NeutralGreeting();
        } else { 
            return new NullGreeting()
        }
    }
};