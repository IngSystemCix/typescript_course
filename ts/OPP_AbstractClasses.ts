abstract class Animal {
  abstract makeSound(): void;
  move(): void {
      console.log('roaming the earth...');
  }
}

class Dog extends Animal {
  makeSound(): void {
      console.log('bow wow');
  }
}

let dog = new Dog();
dog.makeSound();
dog.move();