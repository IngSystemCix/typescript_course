/*
T: Type
K: Key
U: Union
E: Element
V: Value
*/

interface Car {
  model: string;
  year: number;
}

// partial<T> is a utility type that makes all properties of T optional
type PartialCar = Partial<Car>;

// Readonly<T> is a utility type that makes all properties of T readonly
type ReadonlyCar = Readonly<Car>;

// Required<T> is a utility type that makes all properties of T required
type RequiredCar = Required<PartialCar>;

// Pick<T, K> is a utility type that picks only the properties K from T
type PickCar = Pick<Car, 'model'>;

// Omit<T, K> is a utility type that omits the properties K from T
type OmitCar = Omit<Car, 'year'>;

// Exclude<T, U> is a utility type that excludes the properties of U from T
type ExcludeCar = Exclude<number | string, string>;

// Extract<T, U> is a utility type that extracts the properties of U from T
type ExtractCar = Extract<number | string, string>;

// NonNullable<T> is a utility type that removes null and undefined from T
type NonNullableCar = NonNullable<number | null | undefined>;

// ReturnType<T> is a utility type that returns the return type of a function
type ReturnTypeCar = ReturnType<() => Car>;

// InstanceType<T> is a utility type that returns the instance type of a class
class CarClass {
  modelss: string;
  yearss: number;
  constructor(model: string, year: number) {
    this.modelss = model;
    this.yearss = year;
  }
}

type InstanceTypeCar = InstanceType<typeof CarClass>;

// Parameters<T> is a utility type that returns the parameters of a function
type ParametersCar = Parameters<(model: string, year: number) => void>;

// ConstructorParameters<T> is a utility type that returns the constructor parameters of a class
type ConstructorParametersCar = ConstructorParameters<typeof CarClass>;

// ThisType<T> is a utility type that specifies the type of this in a function
type ThisTypeCar = ThisType<Car>;

// Record<K, T> is a utility type that creates an object type with keys of type K and values of type T
type RecordCar = Record<'model' | 'year', Car>;