// class
export class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    set setName(name) {
        this.name = name;
    }
    set setAge(age) {
        this.age = age;
    }
    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }
    display() {
        console.log(this.name);
        console.log(this.age);
    }
}
