const isNumber = (value: number | string) : value is number => typeof value === 'number';

console.log(isNumber(5)); // true
console.log(isNumber('5')); // false

const processValue = (value: number | string) => {
  if (isNumber(value)) {
    return value + 10;
  }
  return value.toUpperCase();
}

console.log(processValue(5)); // 15
console.log(processValue('a')); // 'A'