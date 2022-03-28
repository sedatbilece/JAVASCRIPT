let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
console.log("\n*********************\n");

  setTimeout(user.sayHi, 1000); // Hello, undefined!

console.log("\n*********************\n");

let f = user.sayHi;
setTimeout(f, 1000); //Hello, undefined!

console.log("\n*********************\n");

user.sayHi();//Hello, John


console.log("\n*********************\n");

setTimeout(function() {
    user.sayHi(); // Hello, John!
  }, 1000);
console.log("\n*********************\n");