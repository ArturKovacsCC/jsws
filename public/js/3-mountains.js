
// Objects, property subscript syntax (ie: myObj[“myProperty”]),
// arrays (and array functions, spread syntax)

const chandra = {
    age: 13,
    name: "Chandra Nalaar",
};

console.log(chandra.age);
console.log(chandra["age"]);

// chandra is const, so does this work?
chandra.age = 15;

function birthday(human) {
    human.age += 1;
    console.log("Happy birthday", human.name);
}

console.log("age before", chandra.age);
birthday(chandra);
console.log("age after", chandra.age);





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









