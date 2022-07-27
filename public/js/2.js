
// functions

function greet(parameter) {
    console.log("hello", parameter);
}
greet();

// anonymous functions

const printHelloNum = function(number) {
    console.log("Hello", number);
};
printHelloNum(5);


// arrow functions (function into arrow)
const printHelloNum2 = number => console.log("Hello", number);
printHelloNum2(6);

// array map, reduce
function doubleNumber(number) {
    return number * 2;
}
const numbers = [
    2, -1, 15
];
const numbers2 = numbers.map(doubleNumber);
console.log(numbers2);

// functions are values
function doGiantGrowth() {
    console.log("target creature got bigger");
}
function gainMana() {
    console.log("You can now use one more mana");
}
function learnCreatureSpell() {
    console.log("You now learned a creature spell");
}
const greenSpells = [
    doGiantGrowth,
    gainMana,
    learnCreatureSpell
];

for (const func of greenSpells) {
    func()
}

// TASK iterate through an array of functions and call each function


// closures

function createMultiplierFunction(factor) {
    const color = "#fff";
    return (number) => {
        console.log(color);
        return number * factor;
    };
}

function map(array, callback) {
    let result = [];
    for (const element of array) {
        result.push(callback(element));
    }
    return result;
}

const tripleNumbers = createMultiplierFunction(3);
const tripled = numbers.map(tripleNumbers);
console.log(tripled);

