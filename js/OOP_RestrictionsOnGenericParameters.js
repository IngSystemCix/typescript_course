"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class boxRestriction {
    content;
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}
let person1 = new Person("John", 30);
let box1Instance = new boxRestriction(person1);
console.log(box1Instance.getContent());
