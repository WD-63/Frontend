// You can work here or download the template!
const array = ["apple", "banana", "cherry", "date"];
console.log(array);

// Create different strings by joining the array elements with various delimiters

// Default delimiter (comma)

const joinedWithComma = array.join(", ");
console.log(joinedWithComma);

// Using dash as delimiter
const dashWithComma = array.join("-");
console.log(dashWithComma);

// Using space as delimiter;
const spaceWithComma = array.join(" ");
console.log(spaceWithComma);

// Using ' and ' as delimiter
const joinedWithAnd = array.join(" & ");
console.log(joinedWithAnd);

// Without any delimiter
const chickenArrayJoin = array.join();
console.log(chickenArrayJoin);
