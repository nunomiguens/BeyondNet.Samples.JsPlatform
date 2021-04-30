const elfFunctions = {
    attack: function() {
        return "atack with " + this.weapon;
    },
};

function CreateElf(name, weapon) {
    //Object.create creates __proto__ link
    let newElf = Object.create(elfFunctions);
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

export default CreateElf;
