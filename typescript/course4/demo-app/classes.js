var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sample1 = /** @class */ (function () {
    function Sample1() {
        this.myProperty = 'printing value';
    }
    Sample1.prototype.functionExpression = function () {
        setTimeout(function () {
            console.log(this.myProperty);
        }, 100);
    };
    Sample1.prototype.arrowFunction = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.myProperty);
        }, 100);
    };
    return Sample1;
}());
var obj1 = new Sample1();
console.log(obj1.arrowFunction());
var Sample2 = /** @class */ (function () {
    function Sample2() {
        var _this = this;
        this.arrowFunctionProperty = function () {
            console.log(_this);
        };
    }
    Sample2.prototype.regularMethod = function () {
        console.log(this);
    };
    return Sample2;
}());
var obj2 = new Sample2();
console.log(obj2.arrowFunctionProperty());
console.log(obj2.regularMethod());
var ChildSample1 = /** @class */ (function (_super) {
    __extends(ChildSample1, _super);
    function ChildSample1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrowFunctionProperty = function () {
            _super.prototype.arrowFunctionProperty.call(_this);
        };
        return _this;
    }
    ChildSample1.prototype.regularMethod = function () {
        _super.prototype.regularMethod.call(this);
    };
    return ChildSample1;
}(Sample2));
var objChild = new ChildSample1();
console.log(objChild.arrowFunctionProperty());
