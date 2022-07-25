
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
console.log(firebrand["power"]);

const key = "power";
console.log(firebrand[key]);

// firebrand is const, so does this work?
firebrand.power = 2;

function increasePower(creature) {
    creature.power += 1;
}

console.log("power before", firebrand.power);
increasePower(firebrand);
console.log("power after", firebrand.power);


// ---------------
// intro arrays

const myNumbers = [1, 5, -3];
for (const num of myNumbers) {
    console.log(num);
}
const doubledNums = myNumbers.map(x => x*2);
for (const num of doubledNums) {
    console.log(num);
}


// CHANDRA:
// https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/d/d5/Oath_of_Chandra.jpg/revision/latest/scale-to-width-down/1000?cb=20200808200325



const CHANDRAS_CREATURES = [
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
]


// Rolling Thunder deals X damage divided as you choose among any number of targets.

function totalToughness(creatures) {
    // let or const
    let sum = 0;
    for (let i = 0; i < creatures.length; i++) {
        const creature = creatures[i];
        sum += creature.toughness;
    }
    // show for of
    return sum;
}
console.log("Total toughness is", totalToughness(CHANDRAS_CREATURES));




function totalToughness2(creatures) {
    return creatures.reduce((sum, curr) => sum + curr.toughness, 0);
}
console.log("Total toughness 2 is", totalToughness2(CHANDRAS_CREATURES));



// spread syntax?






