
// Objects, property subscript syntax (ie: myObj[“myProperty”]),
// arrays (and array functions, spread syntax)

// ---------------
// intro objects

const firebrand = {
    toughness: 1,
    power: 1,
    name: "Fanatical Firebrand",
};

console.log(firebrand.power);
const key = "power";
console.log(firebrand[key]);

firebrand.power = 2;
console.log(firebrand[key]);

// property subscript syntax (and using it with a variable)


// const object fields



// more complex datastructures

const CREATURES = [
    {
        power: 2,
        toughness: 2,
    },
    {
        power: 2,
        toughness: 2,
    },
    {
        power: 2,
        toughness: 3,
    },
];


// TASK: write a function that returns the sum of toughness of the creatures.
// An iterable object of creatures is given as an argument to the function
let sumToughness = 0
for (let creature of CREATURES) {
    sumToughness += creature.toughness;
}
console.log(sumToughness);
