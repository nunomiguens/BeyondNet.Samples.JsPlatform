class ElfClass {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return "atack with " + this.weapon;
    }
}

export default ElfClass;
