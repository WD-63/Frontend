// You can work here or download the template!
// Step 1
const numberArray = [10, 20, 30, 40, 50];
// console.log(numberArray);

// Step 2
// for (let i = 0; i < numberArray.length; i++) {
//   console.log(numberArray[i]);
// }

// Step 3
// for (const chicken of numberArray) {
//   console.log(chicken);
// }

// Step 4
const objectArray = [
  { name: "Morris", age: 9000 },
  { name: "Mayrina", age: 777 },
  { name: "Elham", age: 1 },
  { name: "Shraddha", age: 7 },
];

console.log(objectArray);

// Step 5
// for (let i = 0; i < objectArray.length; i++) {
//   console.log(`Name: ${objectArray[i].name}, Age: ${objectArray[i].age}`);
// }

// Step 6
for (const chicken of objectArray) {
  console.log(`Name: ${chicken.name}, Age: ${chicken.age}`);
}
