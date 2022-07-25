

// functions, anonymous functions, arrow functions (function into arrow)
// closures

// Liliana Vess
// https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/a/a9/Liliana_the_Necromancer.jpg/revision/latest?cb=20200807145701

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

// murder target creature
const murder = function (targetCreature) {
    console.log("Murdering", targetCreature);
}

const murderArrow = targetSpell => console.log("Murdering", targetSpell);

// Returns a function that takes an argument and returns the argument + `powerIncement`
function getHinderFunction(powerDecrement) {
    // ITS A CLOSURE!
    return function(basePower) {
        return basePower - powerDecrement;
    }
}

// Diregraf Ghoul: 
// https://c1.scryfall.com/file/scryfall-cards/large/front/b/9/b9cf8ad2-de95-417c-8808-83e60df9c007.jpg?1561757921

// `disfigure` subtracts 1 from the value it gets as parameter
const disfigure = getHinderFunction(1);

const diregrafGhoulToughness = 2;
const diregrafGhoulDisfiguredToughness = disfigure(diregrafGhoulToughness);
console.log(diregrafGhoulDisfiguredToughness)

