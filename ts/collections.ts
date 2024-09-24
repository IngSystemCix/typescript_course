// arrays

let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// tuples

let tuple: [string, number, boolean] = ["John", 30, true];

// sets

let set = new Set<number>();
set.add(1);
set.add(2);
set.add(3);

// maps

let map = new Map<number, string>();
map.set(1, "John");
map.set(2, "Doe");
map.set(3, "Smith");

// weak sets

let weakSet = new WeakSet();
let obj = { message: "Hello" };
weakSet.add(obj);

// weak maps

let weakMap = new WeakMap();
let key = { id: 1 };
let value = { message: "Hello" };
weakMap.set(key, value);