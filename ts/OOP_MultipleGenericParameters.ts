class even<k, v> {
  private key: k;
  private value: v;

  constructor(key: k, value: v) {
      this.key = key;
      this.value = value;
  }

  getKey() {
      return this.key;
  }

  getValue() {
      return this.value;
  }

  display() {
      console.log(this.key);
      console.log(this.value);
  }
}

let even1 = new even<number, string>(1, "John");
console.log(even1.getKey());
console.log(even1.getValue());
even1.display();