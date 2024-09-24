// any type: any

let value13: any = 10;

// unknown type: unknown

let value14: unknown = 10;

// void type: void

function saludar(): void {
  console.log("Hola");
}

// never type: never

let value15: never = (() => {
    throw new Error("This function never returns");
})();