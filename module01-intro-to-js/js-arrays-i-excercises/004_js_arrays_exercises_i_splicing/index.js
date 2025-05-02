// You can work here or download the template!
// Array 1: Use splice() method
const array1 = [10, 20, 30, 40, 50];
// Modify array1 in place by removing and adding elements, then print the result

// console.log("Original array1: ", array1);

array1.splice(3, 1, 8, 10, 12);

// Array 2: Use toSpliced() method
const array2 = ["x", "y", "z"];
// Create a modified copy of array2 and print both arrays

const chicken = array2.toSpliced(1, 1, "a", "b");
console.log("Original array2: ", array2);
console.log("chicken:", chicken);
