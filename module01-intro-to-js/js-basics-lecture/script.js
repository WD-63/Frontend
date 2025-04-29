// ==========================================
// JAVASCRIPT BASICS TUTORIAL
// ==========================================

// This script covers essential JavaScript concepts.
// Each section includes simple examples to help understand the fundamentals.

// ==========================================
// JAVASCRIPT SYNTAX ESSENTIALS
// ==========================================

// JavaScript syntax consists of:
// - Literals: Fixed values written directly in code (e.g., numbers, strings)
// - Variables: Containers for storing data values
// - Operators: Symbols that perform operations
// - Expressions: Combinations of values, variables, and operators
// - Keywords: Reserved words with special meanings
// - Comments: Notes in code that are ignored by the JavaScript engine

console.info("JAVASCRIPT SYNTAX ESSENTIALS");
// Example of JavaScript syntax:
let result = 10 + 1; // Expression using literals, variables, and operators
console.log(result); // Outputs: 11

// ==========================================
// VARIABLES
// ==========================================

// Variables are containers for storing data values. In JavaScript, you can declare variables using:
// - let: For values that can change
// - const: For values that cannot be reassigned
// - var: Older way to declare variables (not recommended)

console.info("VARIABLES");

// Using let (can be reassigned)
let score = 10 + 1;
console.log(score); // Outputs: 11
score = 20; // Reassigning
console.log(score); // Outputs: 20

// Using const (cannot be reassigned)
const myConst = "This is a const!";
console.log(myConst);
// myConst = "Something else!";  // This would cause an error

// Using var (not recommended)
// var dontUseVar = ":(";

// ==========================================
// DATA TYPES
// ==========================================

// JavaScript has several built-in data types:
// - Number: For numeric values
// - String: For text values
// - Boolean: For true/false values
// - Object: For complex data structures
// - Undefined: For variables that have been declared but not assigned
// - Null: For intentional absence of value

console.info("DATA TYPES");

// Examples of different data types
let num = 42; // Number
let text = "Hello"; // String
let isTrue = true; // Boolean
let person = { name: "John", age: 30 }; // Object
let notDefined; // Undefined
let empty = null; // Null

// Check type with typeof
console.log(typeof num); // Outputs: "number"
console.log(typeof text); // Outputs: "string"
console.log(typeof isTrue); // Outputs: "boolean"
console.log(typeof person); // Outputs: "object"
console.log(typeof notDefined); // Outputs: "undefined"
console.log(typeof empty); // Outputs: "object" ("weird" JavaScript behavior)

// ==========================================
// OPERATORS
// ==========================================

// ---- Arithmetic Operators ----
// + Addition
// - Subtraction
// * Multiplication
// / Division
// % Modulus (remainder)
// ++ Increment
// -- Decrement

console.info("OPERATORS - Arithmetic");

// Examples of arithmetic operators
result = 10 * 2; // Multiplication
console.log(result); // Outputs: 20

let counter = 1;
counter++; // Increment
console.log(counter); // Outputs: 2
counter--; // Decrement
console.log(counter); // Outputs: 1

// ---- Assignment Operators ----
// = Assigns value
// += Add and assign
// -= Subtract and assign
// *= Multiply and assign
// /= Divide and assign

console.info("OPERATORS - Assignment");

// Examples of assignment operators
let x = 10;
x += 5; // Same as x = x + 5
console.log(x); // Outputs: 15

// ==========================================
// EXPRESSIONS
// ==========================================

// Expressions are combinations of values, variables, and operators that compute to a value.

console.info("EXPRESSIONS");

// Examples of expressions
let sum = 10 + 1; // Expression that computes to 11

// ==========================================
// KEYWORDS
// ==========================================

// JavaScript has reserved words with special meanings that cannot be used as variable names:
// - let, const, var: For declaring variables
// - if, else, switch: For control flow
// - function, return: For functions
// - try, catch: For error handling
// - for, while, do: For loops
// - break, continue: For loop control

console.info("KEYWORDS");

// ==========================================
// COMMENTS
// ==========================================

console.info("COMMENTS");

// This is a single-line comment

/* This is a
   multi-line comment */

// ==========================================
// IDENTIFIERS
// ==========================================

// Identifiers are names given to variables, functions, etc. Rules:
// - Must start with a letter, underscore (_), or dollar sign ($)
// - Subsequent characters can include digits (0-9)
// - Are case-sensitive
// - Cannot be reserved keywords

console.info("IDENTIFIERS");

// JavaScript commonly uses camelCase for identifiers:
let myVariable; // Good: camelCase
let MyVariable; // Not recommended: PascalCase
let my_variable; // Not recommended: snake_case

// ==========================================
// FUNCTIONS
// ==========================================

// Functions are blocks of code designed to perform specific tasks.

console.info("FUNCTIONS");

// ---- Function Declaration ----
console.info("FUNCTIONS - Declaration");
function helloWorld() {
  console.log("Hello World!");
}
helloWorld(); // Calling the function

// ---- Function with Return Value ----
console.info("FUNCTIONS - Return Value");
function writeMessage() {
  return "Hello World!";
}
const myMessage = writeMessage();
console.log("My Message: ", myMessage);

// ---- Function Expression ----
console.info("FUNCTIONS - Expression");
const goodByeWorld = function () {
  console.log("Goodbye World!");
};
goodByeWorld();

// ---- Arrow Function ----
console.info("FUNCTIONS - Arrow Function");
const helloWorldArrow = () => {
  console.log("Hello World!");
};
helloWorldArrow();

// With parameters
const multiply = (numA, numB) => {
  return numA * numB;
};
const multNum = multiply(5, 6);
console.log(multNum); // Outputs: 30

// ==========================================
// COMPARISON AND LOGICAL OPERATORS
// ==========================================

// ---- Comparison Operators ----
// == Equal to (value)
// === Equal to (value and type)
// != Not equal to (value)
// !== Not equal to (value and type)
// > Greater than
// < Less than
// >= Greater than or equal to
// <= Less than or equal to

console.info("COMPARISON OPERATORS");

// Examples of comparison operators
console.log(5 == "5"); // true (values are equal)
console.log(5 === "5"); // false (values are equal but types are different)
console.log(10 > 5); // true
console.log(10 < 5); // false

// ---- Logical Operators ----
// && Logical AND - Returns true if both operands are true
// || Logical OR - Returns true if at least one operand is true
// ! Logical NOT - Returns the opposite boolean value

console.info("LOGICAL OPERATORS");

// Logical AND (&&)
console.info("LOGICAL OPERATORS - AND (&&)");
console.log(10 === 10 && 0 === "0"); // false (0 !== "0")
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Logical OR (||)
console.info("LOGICAL OPERATORS - OR (||)");
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true
console.log(false || false); // false

// Logical NOT (!)
console.info("LOGICAL OPERATORS - NOT (!)");
console.log(!true); // false
console.log(!false); // true
console.log(!0); // true (0 is falsy)
console.log(!1); // false (1 is truthy)
console.log(!"hello"); // false (non-empty strings are truthy)
console.log(!""); // true (empty strings are falsy)

// Combining operators
console.info("LOGICAL OPERATORS - Combined");
console.log(10 > 5 && 6 < 8); // true
console.log(!(10 === 10) || 5 > 10); // false

// ==========================================
// CONDITIONALS
// ==========================================

// Conditionals execute code based on different conditions.

console.info("CONDITIONALS");

// ---- If-Else Statement ----
console.info("CONDITIONALS - If-Else");
score = 65;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// ---- Switch Statement ----
console.info("CONDITIONALS - Switch");
let day = 7;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Another day");
}

// ---- Ternary Operator ----
console.info("CONDITIONALS - Ternary");
age = 16;
isAdult = age >= 18 ? true : false;
console.log(isAdult); // Outputs: false

// ==========================================
// LOOPS
// ==========================================

// Loops execute a block of code multiple times.

console.info("LOOPS");

// ---- For Loop ----
console.info("LOOPS - For Loop");
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
}

// ---- While Loop ----
console.info("LOOPS - While Loop");
let i = 0;
while (i < 5) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
  i++;
}

// ---- Do-While Loop ----
console.info("LOOPS - Do-While Loop");
i = 0;
do {
  console.log(i); // Always executes at least once
  i++;
} while (i < 5);

// ---- Break and Continue ----
console.info("LOOPS - Break");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exits the loop when i is 5
  }
  console.log(i); // Outputs: 0, 1, 2, 3, 4
}

console.info("LOOPS - Continue");
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skips the rest of the loop body when i is 2
  }
  console.log(i); // Outputs: 0, 1, 3, 4
}

// ==========================================
// ERROR HANDLING
// ==========================================

// JavaScript provides a way to handle runtime errors using try/catch blocks.

console.info("ERROR HANDLING");

try {
  // Code that might throw an error
  // Uncomment to see the error: let x = y + 1; // y is not defined
  console.log("No error in try block");
} catch (error) {
  // Code to handle the error
  console.log("An error occurred:", error.message);
} finally {
  // Code that always runs, regardless of an error
  console.log("This always executes");
}

// Some resources: MDN Web Docs, W3Schools, or JavaScript.info.
