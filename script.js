// Script for B1 - Data structure and algorithm.

    // B1.2: Stores the ten numbers required by the assignment.
const numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

// Displays a copy to preserve the initial array in the console.
console.log("Initial array:", [...numbers]);

    // B1.3: Sorts the array numerically in ascending order.
// The comparison function receives firstNumber and secondNumber
// and returns their difference to determine their order.
numbers.sort((firstNumber, secondNumber) => firstNumber - secondNumber);

// Displays a copy of the sorted array.
console.log("Sorted array:", [...numbers]);

    // B1.4: Adds the three required numbers to the array.
numbers.push(19, 23, 30);

// Sorts the array again to position the added numbers correctly.
// The comparison function receives firstNumber and secondNumber
// and returns their difference to determine their order.
numbers.sort((firstNumber, secondNumber) => firstNumber - secondNumber);

// Displays a copy of the array after insertion.
console.log("Array after insertion:", [...numbers]);

    // B1.5: Finds the index of 8 and removes that element.
numbers.splice(numbers.indexOf(8), 1);

// Finds the index of 31 and removes that element.
numbers.splice(numbers.indexOf(31), 1);

// Displays a copy of the array after removal.
console.log("Array after removal:", [...numbers]);

    // B1.6: Searches array one element at a time for value.
// Returns the matching index, or -1 if value is not found.
function sequentialSearch(array, value) {
    // Tracks the index of the element currently being checked.
    for (let index = 0; index < array.length; index++) {
        if (array[index] === value) {
            return index;
        }
    }

    return -1;
}

// Searches for a number that exists in the final array.
console.log("Sequential search for 20:", sequentialSearch(numbers, 20));

// Searches for a number that does not exist in the final array.
console.log("Sequential search for 8:", sequentialSearch(numbers, 8));