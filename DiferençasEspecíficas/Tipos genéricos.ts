function identity<T>(arg: T): T {
  return arg;
}

const myString = identity<string>("hello");
console.log(myString); // Output: "hello"

const myNumber = identity<number>(5);
console.log(myNumber); // Output: 5
