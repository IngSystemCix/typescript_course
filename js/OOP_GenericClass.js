"use strict";
class Box {
    content;
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}
let box1 = new Box("Hello");
console.log(box1.getContent());
let box2 = new Box(10);
console.log(box2.getContent());
