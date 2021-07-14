import {BuildFullName, Arrow, GetPropDragons} from "./closures/easy";
import {Draco, Drogon} from "./protos/easy";
import {CreateElf, Elf, ElfClass} from "./oops/easy";

console.log("1. Closures");

console.log(Arrow());
console.log(BuildFullName("Alberto")("Arroyo")("Raygada"));

console.log("2. Prototypes");

console.log(GetPropDragons(Draco)());
console.log(GetPropDragons(Drogon)());

console.log("3. OOP");

console.log("3.1. Funcional Creators");
let sam = CreateElf("Sam", "bow");
let peter = CreateElf("Peter", "fire");
console.log(sam.attack());
console.log(peter.attack());

console.log("3.1. Funcional Constructor");
sam = new Elf("Sam", "bow");
peter = new Elf("Peter", "fire");
console.log(sam.attack());
console.log(peter.attack());

console.log("3.2. Classes");
const fiona = new ElfClass("Fiona", "ninja stars");
console.log(fiona instanceof ElfClass); //
const ben = new ElfClass("Ben", "bow");
console.log(fiona.attack());
console.log(ben.attack());
