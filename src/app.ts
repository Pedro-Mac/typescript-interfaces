// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number /*this is an Interface with Function type*/;
}

let add: AddFn = (n1, n2) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable
  extends Named /*, AnotherInterface - this is possbile with interfaces but NOT WITH CLASSES*/ {
  //name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  age = 30;

  constructor(public name?: string, public outputName?: string) {
    if (name) this.name = name;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name + ' ' + this.outputName);
  }
}

let user1: Greetable; // It can be type Greetable because the class Person implements Greetable, therefore user1 does not have to be of type Person

user1 = new Person('Max', 'Rex');

user1.greet('Hi there, I am');
