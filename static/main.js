
async function getData(url) {
    let data = await fetch(url);
    return await data.json();
}

async function main() {
    let planets = await getData('https://swapi.dev/api/planets');
    console.log(planets);
}

main();

