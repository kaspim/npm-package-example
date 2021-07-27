import { Greeter } from '../index';

test('Greeter without name', () => {
    expect(new Greeter().sayHi()).toBe('Hi, there!');
});

test('Greeter with name', () => {
    expect(new Greeter().setName('developer').sayHi()).toBe('Hi, developer!');
});
