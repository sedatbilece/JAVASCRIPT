// add one more method to it (can do more)
class PowerArray extends Array {
    isEmpty() {
      return this.length == 0;
    }
  }
  
  let arr = new PowerArray(1, 2, 5, 10, 50);
  console.log(arr.isEmpty()); // false
  
  let filteredArr = arr.filter(item => item >= 10);
  console.log(filteredArr); // 10, 50
  console.log(filteredArr.isEmpty()); // false


  console.log('\n ************************* \n');


  class Rabbit {}
let rabbit = new Rabbit();

// `Rabbit` sınıfının bir objesimidir?
console.log( rabbit instanceof Rabbit ); // true

let arry = [1, 2, 3];
console.log( arry instanceof Array ); // true   ( Array Objectden kalıtım alır )
console.log( arry instanceof Object ); // true

let obj ={};
console.log(obj); // [object Object]
console.log(obj.toString()); // the same


// Bu hangi tipte?
let array = [];
let objectToString = Object.prototype.toString;
console.log( objectToString.call(array) );