function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  // ...
}

class Calculator {
  @log
  add(a: number, b: number): number {
      return a + b;
  }
  
  
} 
