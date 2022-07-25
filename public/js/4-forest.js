
// functions are values, callbacks



function giantGrowth() {
    console.log("target creature got +3/+3");
}
function landGrant() {
    console.log("You can now use one more land");
}
function adventureAwaits() {
    console.log("You now learned a creature spell");
}
const greenSpells = [
    giantGrowth,
    landGrant,
    adventureAwaits
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




// Nissa Revane
// https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/2/28/Nissa-Steward-of-Elements.jpg/revision/latest?cb=20200807163113

