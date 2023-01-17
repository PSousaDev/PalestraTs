function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args: any[]) {
      console.log(`Calling ${propertyKey} with`, args);
      const result = original.apply(this, args);
      console.log(`Call to ${propertyKey} returned`, result);
      return result;
  }
}

class Calculator {
  @log
  add(a: number, b: number): number {
      return a + b;
  }
}

const calculator = new Calculator();
calculator.add(1, 2);
