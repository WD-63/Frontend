// Object literal
const lotrChar = {
  name: "Gandalf",
  characterClass: "wizard",
  level: 20,
  spellList: ["ligth", "fireball", "telekinese"],
  yellCatchPhrase() {
    return "You shall not pass!";
  },
  introduce() {
    return `My name is ${this.name} the ${this.characterClass}`;
  },
};

// const elfChar = {
//   name: "Leoglas",
//   introduce() {
//     return `My name is ${this.name} the ${this.characterClass}`;
//   },
// };

// console.log(lotrChar);
// console.log(lotrChar.spellList);
// const valueIWant = "level";
// console.log(lotrChar[valueIWant]);
// lotrChar.level = 21;
// console.log(lotrChar.level);
lotrChar.background = "Istari";
// delete lotrChar.background;
// console.log(lotrChar);

// console.log(lotrChar.yellCatchPhrase());
// console.log(lotrChar.introduce());
// console.log(elfChar.introduce());

const number = 5;
const { name, characterClass } = lotrChar;
console.log("name & class destructed: ", number, name, characterClass);

const { name: characterName } = lotrChar;

console.log(characterName);
