

// functions, anonymous functions, arrow functions (function into arrow)
// closures

function spawnZombies(count) {
    const ZOMBIE = "Corpse Knight";
    let retVal = "";
    for (let i = 0; i < count; i++) {
        retVal += ZOMBIE + ", ";
    }
    return retVal;
}

const zombies = spawnZombies(3);
console.log(zombies);

// counter target spell
const couterSpell = function (targetSpell) {
    console.log("Countering", targetSpell);
}

const counterSpellArrow = targetSpell => console.log("Countering", targetSpell);

// Returns a function that takes an argument and returns the argument + `powerIncement`
function getHinderFunction(powerDecrement) {
    // ITS A CLOSURE!
    return function(basePower) {
        return basePower - powerDecrement;
    }
}

// disfigure subtracts 1 from its parameter
const disfigure = getHinderFunction(1);

const diregrafGhoulToughness = 2;
const diregrafGhoulDisfiguredToughness = disfigure(diregrafGhoulToughness);
console.log(diregrafGhoulDisfiguredToughness)


