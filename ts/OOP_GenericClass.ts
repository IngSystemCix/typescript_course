class Box<T> {
    private content: T;
    constructor(content: T) {
        this.content = content;
    }
    getContent(): T {
        return this.content;
    }
}

let box1 = new Box<string>("Hello");
console.log(box1.getContent());
let box2 = new Box<number>(10);
console.log(box2.getContent());