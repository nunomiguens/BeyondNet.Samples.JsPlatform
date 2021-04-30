function getPropDragons(dragon) {
    let name = dragon.name;
    return function buildString() {
        for (let prop in dragon) {
            console.log(`${name} has ${prop}`);
        }
    };
}

export default getPropDragons;
