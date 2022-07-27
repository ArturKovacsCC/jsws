

// functions, anonymous functions, arrow functions (function into arrow)
// closures

function spawnZombies(count) {
    const ZOMBIE = "Hunted Ghoul";
    let result = "";
    for (let i = 0; i < count; i++) {
        result += ZOMBIE + ", ";
    }
    return result;
}

const zombies = spawnZombies(3);
console.log(zombies);


const destroyCreature = function (targetCreature) {
    console.log("Destroying", targetCreature);
}

const destroyCreature2 = targetSpell => console.log("Destroying ", targetSpell);

// Returns a function that takes an argument and returns the argument + `powerIncement`
function getIncrementFunction(incrementBy) {
    // ITS A CLOSURE!
    return function(baseValue) {
        return baseValue + incrementBy;
    }
}


// `disfigure` subtracts 1 from the value it gets as parameter
const incrementByTwo = getIncrementFunction(2);

const diregrafGhoulToughness = 2;
const diregrafGhoulDisfiguredToughness = disfigure(diregrafGhoulToughness);
console.log(diregrafGhoulDisfiguredToughness)






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

for (const spell of greenSpells) {
    spell();
}

function makeNumbers(callback) {
    while(true) {
        const num = Math.random() * 100_000_000;
        if (num > 99_999_999) {
            callback(num);
        }
    }
}
makeNumbers(num => console.log(num));


