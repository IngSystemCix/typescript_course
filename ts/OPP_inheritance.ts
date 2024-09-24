// inherientance

import { Person } from './OPP_class';

class employe extends Person {
  private sales: number | undefined;
  
  constructor(name: string, age: number, private salary: number) {
    super(name, age);
  }

  set setSales(sales: number) {
    this.sales = sales;
  }

  get getSales(): number {
    return this.sales ?? 0;
  }

  get getSalary(): number {
    return this.salary;
  }

  display(): void {
    super.display();
    console.log(this.sales);
    console.log(this.salary);
  }
}