interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable; // It can be type Greetable because the class Person implements Greetable, therefore user1 does not have to be of type Person

user1 = new Person('Monica');

user1.greet('Hi there, I am');
