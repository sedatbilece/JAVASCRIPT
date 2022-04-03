let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  // rabbit animaldan kallıtım ile özellik alır 
  rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal


  // we can find both properties in rabbit now:
console.log( rabbit.eats ); // true (**)
console.log( rabbit.jumps ); // true



console.log("\n******************\n");

animal = {
    eats: true,
    walk() {
      console.log("Animal walk");
    }
  };
  
rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  // walk is taken from the prototype
  rabbit.walk(); // Animal walk

  console.log("\n******************\n");

  let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  let admin2 = {
    __proto__: user,
    isAdmin: true
  };
  
  console.log(admin.fullName); // John Smith (*)
  
  // Ayarlayıcılar uyarıldı!
  admin.fullName = "Alice Cooper"; // (**)

  console.log(admin.fullName);
  console.log(admin2.fullName);

  
  console.log("\n********----------- F.prototype -------------**********\n");

 animal = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }
  
  Rabbit.prototype = animal;
  
 rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
  console.log( rabbit.eats ); // true