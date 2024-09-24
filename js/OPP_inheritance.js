// inherientance
import { Person } from './OPP_class';
class employe extends Person {
    salary;
    sales;
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    set setSales(sales) {
        this.sales = sales;
    }
    get getSales() {
        return this.sales ?? 0;
    }
    get getSalary() {
        return this.salary;
    }
    display() {
        super.display();
        console.log(this.sales);
        console.log(this.salary);
    }
}
