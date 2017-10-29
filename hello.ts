class Greeter {
    greeting: string
    constructor(greetingMessage: string) {
        this.greeting = greetingMessage;
    }

    greet(addressee: string) {
        return this.greeting +  ' ' + addressee;
    }
}

let greeter = new Greeter("Hello");
console.log(greeter.greet("World"));