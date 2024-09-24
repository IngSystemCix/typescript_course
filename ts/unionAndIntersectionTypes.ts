// union types: | operator

let unionType: string | number;
unionType = "Hello";
console.log(`String value: ${unionType}`);
unionType = 10;
console.log(`Number value: ${unionType}`);

// intersection types: & operator

type FirstType = { name: string };
type SecondType = { age: number };
type ThirdType = FirstType & SecondType;

let intersectionType: ThirdType;
intersectionType = { name: "John", age: 30 };
console.log(`Name: ${intersectionType.name}, Age: ${intersectionType.age}`);

// type aliases: custom types

type StringOrNumber = string | number;
let aliasType: StringOrNumber;
aliasType = "Hello";
console.log(`String value: ${aliasType}`);