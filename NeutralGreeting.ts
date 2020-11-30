import { Greeting } from "./Greeting";

export class NeutralGreeting implements Greeting {
  greet(): void {
    console.log("Hi.");
  }
}
