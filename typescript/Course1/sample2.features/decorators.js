var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Boat = /** @class */ (function () {
    function Boat() {
        this.color = 'red';
    }
    Object.defineProperty(Boat.prototype, "formattedColor", {
        get: function () {
            return "This boat color is " + this.color;
        },
        enumerable: false,
        configurable: true
    });
    Boat.prototype.pilot = function () {
        throw new Error();
        console.log('Beto');
    };
    __decorate([
        logError
    ], Boat.prototype, "pilot");
    return Boat;
}());
function logError(target, key, desc) {
    var method = desc.value;
    desc.value = function () {
        try {
            method();
        }
        catch (e) {
            console.log('An error was ocurred');
        }
    };
}
new Boat().pilot();
