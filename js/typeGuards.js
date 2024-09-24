"use strict";
const isNumber = (value) => typeof value === 'number';
console.log(isNumber(5)); // true
console.log(isNumber('5')); // false
const processValue = (value) => {
    if (isNumber(value)) {
        return value + 10;
    }
    return value.toUpperCase();
};
console.log(processValue(5)); // 15
console.log(processValue('a')); // 'A'
