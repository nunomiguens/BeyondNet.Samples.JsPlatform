class Sample1 {
    myProperty = 'printing value';

    functionExpression(): void {
        setTimeout(function () {
            console.log(this.myProperty);
        }, 100);
    }

    arrowFunction() {
        setTimeout(() => {
            console.log(this.myProperty);
        }, 100);
    }
}

const obj1 = new Sample1();
console.log(obj1.arrowFunction());

class Sample2 {
    arrowFunctionProperty = () => {
        console.log(this);
    };

    regularMethod() {
        console.log(this);
    }
}

const obj2 = new Sample2();
console.log(obj2.arrowFunctionProperty());
console.log(obj2.regularMethod());

class ChildSample1 extends Sample2 {
    arrowFunctionProperty = () => {
        super.arrowFunctionProperty();
    };

    regularMethod() {
        super.regularMethod();
    }
}

const objChild = new ChildSample1();
console.log(objChild.arrowFunctionProperty());
