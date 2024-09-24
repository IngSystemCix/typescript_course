let someValue: unknown = "this is a string";

// Using 'as' syntax
let strLength: number = (someValue as string).length;

console.log(strLength); // Output: 16

// Using angle-bracket syntax
let strLength2: number = (<string>someValue).length;

console.log(strLength2); // Output: 16