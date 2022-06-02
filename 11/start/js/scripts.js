function sayHello(text) {
  console.log(text + " " + this.firstName + " " + this.lastName);
}

var person = {
  firstName: "Jan",
  lastName: "Kowalski",
};

var hello = sayHello.bind(person, "Witaj");

function bind(fn, obj) {
  const args = Array.prototype.slice.call(arguments, 2);

  console.log(arguments);
  return function () {
    fn.apply(obj, args);
  };
}
var hello2 = bind(sayHello, person, "witaj");
