Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
};

const x = new Date().lastYear();

Array.prototype.map = function() {
    arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(this[i] + "🗺");
    }
    return arr;
};
console.log([1, 2, 3].map());

Function.prototype.bind = function(whoIsCallingMe) {
    const self = this;
    return function() {
        return self.apply(whoIsCallingMe, arguments);
    };
};
