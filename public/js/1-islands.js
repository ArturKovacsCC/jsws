
// const, let, var, types, comparison, loops


const string = "hello";
const number = 13;
const boolean = true;
const bigInt = BigInt(15);

const nullVar = null;
const undefVar = undefined;

const object = {};



// let
let mySpellCount = 6;
console.log(mySpellCount);
mySpellCount += 1;
console.log(mySpellCount);





// The == operator


console.log("number equals string", number == "13");







// Arcane Endevour: set a variable to a predifined value betwen 1-8
// print "Learning spell" as many times as the variable
// then print "Casting spell" once

const LEARN_COUNT = 5;
for (let i = 0; i < LEARN_COUNT; i++) {
    console.log("Learning spell", i+1);
}
console.log("Casting spell");





