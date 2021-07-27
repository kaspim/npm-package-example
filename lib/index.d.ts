interface GreeterMethods {
    setName(name: string): this;
    sayHi(): string;
}
export declare class Greeter implements GreeterMethods {
    private name;
    constructor();
    setName(name: string): this;
    sayHi(): string;
}
export {};
