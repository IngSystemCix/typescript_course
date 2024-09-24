import { Person } from './OPP_class';

interface Repository<T> {
    add(t: T): void;
    remove(t: T): void;
    getById(id: number): T;
    getAll(): T[];
}

class PersonOfRepository implements Repository<Person> {
  add(t: Person): void {
    throw new Error("Method not implemented.");
  }
  remove(t: Person): void {
    throw new Error("Method not implemented.");
  }
  getById(id: number): Person {
    throw new Error("Method not implemented.");
  }
  getAll(): Person[] {
    throw new Error("Method not implemented.");
  }   
}