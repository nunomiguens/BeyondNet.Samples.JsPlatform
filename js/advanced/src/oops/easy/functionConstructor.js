//Constructor Functions
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function() {
    return "atack with " + this.weapon;
};

export default Elf;
