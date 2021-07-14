import Draco from "./draco";

const Drogon = {
    name: "Drogon",
    Speed() {
        return 10;
    },
};

Drogon.__proto__ = Draco;

export default Drogon;
