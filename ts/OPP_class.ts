// class

export class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    set setName(name: string) {
      this.name = name;
    }

    set setAge(age: number) {
      this.age = age;
    }

    get getName(): string {
      return this.name;
    }

    get getAge(): number {
      return this.age;
    }

    display(): void {
        console.log(this.name);
        console.log(this.age);
    }
}