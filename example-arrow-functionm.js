 var names = ['Andrew', 'Clint','Kylie'];
//
// names.forEach (function (name) {
//     console.log('forEach', name);
// });
//
// names.forEach((name) => {console.log('arrrowFunc',name)
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Andrew'));

var person = {
  name: 'Clint',
  greet: function() {
    names.forEach((name) => {
    console.log(this.name + ' says hi to ' + name)
    });
  }
};

person.greet();

function add(a, b) {
  return a + b;
}

console.log (add(1,3));
console.log (add(3,3));
