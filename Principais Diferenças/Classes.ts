class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }

  sayHello() {
      console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person("John Doe", 30);
john.sayHello();  // Output: "Hello, my name is John Doe"

//js

