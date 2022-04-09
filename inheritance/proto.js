let animal = {
    eats: true
  };

  // animal prototipi ile yeni bir rabbit objesi yaratma.
let rabbit = Object.create(animal);

console.log(rabbit.eats); // true
console.log(Object.getPrototypeOf(rabbit) === animal); // rabbit'in prototipini alma

Object.setPrototypeOf(rabbit, {}); // rabbit'in prototipini {}'e çevirme.
console.log(Object.getPrototypeOf(rabbit));



console.log("\n ************************** \n");


function User(){
    this.key=0;
console.log("user sınıfına erişildi");
    this.getName= function(name){
        this.key++;
        return name;
    };
}

var user=new User();
console.log(user.getName("sedat"));
console.log(user.key);

var user2=new User();
console.log(user2.getName("sedat2"));
console.log(user2.key);