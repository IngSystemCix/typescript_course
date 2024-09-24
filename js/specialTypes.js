"use strict";
// any type: any
let value13 = 10;
// unknown type: unknown
let value14 = 10;
// void type: void
function saludar() {
    console.log("Hola");
}
// never type: never
let value15 = (() => {
    throw new Error("This function never returns");
})();
