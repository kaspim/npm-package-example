interface GreeterMethods {
    setName(name: string): this;
    sayHi(): string;
}

export class Greeter implements GreeterMethods {
    private name: string | null;

    constructor() {
        this.name = null;
    }

    public setName(name: string): this {
        this.name = name;
        return this;
    }

    public sayHi(): string {
        return 'Hi, ' + (!!this.name ? this.name + '!' : 'there!');
    }
}
