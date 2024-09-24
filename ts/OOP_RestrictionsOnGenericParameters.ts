class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class boxRestriction<T extends Person> {
    private content: T;
    constructor(content: T) {
        this.content = content;
    }
    getContent(): T {
        return this.content;
    }
}

let person1 = new Person("John", 30);
let box1Instance = new boxRestriction<Person>(person1);
console.log(box1Instance.getContent());