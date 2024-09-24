"use strict";
// Archivo: ts/car.ts
class Car {
    mark;
    model;
    years; // Parámetro opcional
    constructor(mark, model, years) {
        this.mark = mark;
        this.model = model;
        this.years = years; // Asignación de year, que puede ser undefined
    }
    display() {
        console.log(`Mark: ${this.mark}`);
        console.log(`Model: ${this.model}`);
        if (this.year !== undefined) {
            console.log(`Year: ${this.year}`);
        }
        else {
            console.log("Year: Not specified");
        }
    }
}
// Crear una instancia de Car sin especificar el año
let car1 = new Car('Toyota', 'Corolla');
car1.display();
