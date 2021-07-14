//Exercise:
const a = function() {
  console.log(this);
  const b = function() {
    console.log(this);
    const c = {
      hi: function() {
        console.log(this);
      }
    };
    c.hi();
  };
  b();
};

a();

//JS is weird:
const obj = {
  name: "Billy",
  sing: function() {
    console.log(this); // in this case, it's a method on an object.
    var anotherFunc = function() {
      console.log(this); // this points to windows!
    };
  }
};
