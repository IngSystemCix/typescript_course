# Guía Completa de TypeScript (TSC)

## Autor: Juan Bladimir Romero Collazos

## Introducción
TypeScript es un lenguaje de programación desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript que añade tipos estáticos opcionales.

## Instalación
Para instalar TypeScript, puedes usar npm:
```bash
npm install -g typescript
```

## Compilación
Para compilar archivos TypeScript (`.ts`), usa el comando `tsc`:
```bash
tsc archivo.ts
```

## Configuración
Puedes crear un archivo `tsconfig.json` para configurar el compilador TypeScript:

```shell
tsc --init
```

```json
"include": [
    "ts/**/*"   // Incluye todos los archivos .ts en la carpeta 'ts'
]
```

## Compile
Debes ejecutar el siguiente comando

```shell
tsc
```

## Tipos Básicos
### Boolean
```typescript
let isDone: boolean = false;
```

### Number
```typescript
let decimal: number = 6;
```

### String
```typescript
let color: string = "blue";
```

### Array
```typescript
let list: number[] = [1, 2, 3];
```

### Tuple
```typescript
let x: [string, number];
x = ["hello", 10];
```

### Enum
```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

### Any
```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
```

### Void
```typescript
function warnUser(): void {
    console.log("This is my warning message");
}
```

## Interfaces
```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };
console.log(greeter(user));
```

## Clases
```typescript
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number): void {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let dog = new Animal("Dog");
dog.move(10);
```

## Módulos
```typescript
// math.ts
export function add(x: number, y: number): number {
    return x + y;
}

// app.ts
import { add } from "./math";
console.log(add(2, 3));
```

## Conclusión
TypeScript es una poderosa herramienta para desarrollar aplicaciones JavaScript robustas y mantenibles. Esta guía cubre los conceptos básicos, pero hay mucho más por explorar.
