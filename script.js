// Script for B1 - Data structure and algorithm

    // B1.2
const numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log("Initial array:", [...numbers]);

    // B1.3
numbers.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
console.log("Initial array:", [...numbers]);

    // B1.4
numbers.push(19, 23, 30);
numbers.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
console.log("Array after insertion:", [...numbers]);

    // B1.5
numbers.splice(numbers.indexOf(8), 1);
numbers.splice(numbers.indexOf(31), 1);
console.log("Array after removal:", [...numbers]);