function seal (constructor: Function) {
  constructor.prototype.sealed = 'sealed of approval';
}

@seal
class SealedClass {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
}

const sealedInstance = new SealedClass('Sealed Class');
console.log((sealedInstance as SealedClass).title); // 'sealed of approval'