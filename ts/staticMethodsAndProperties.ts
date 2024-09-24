class calculator {
  static PI: number = 3.14;

  static add(a: number, b: number): number {
    return a + b;
  }

  static sub(a: number, b: number): number {
    return a - b;
  }
}

console.log(calculator.PI);
console.log(calculator.add(10, 20));
console.log(calculator.sub(10, 20));