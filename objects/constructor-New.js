function User(name) {
    this.name = name;
    this.isAdmin = false;
    
  }
  
  let user = new User("Jack");

  console.log(user);
  console.log(typeof user);

console.log("\n ////////////////////////////////////////////////\n");

  let kullanici = {
    isim: "sedat",
    yoneticiMi: true
  };
 

  console.log(kullanici);
  console.log(typeof kullanici);
  console.log("\n ////////////////////////////////////////////////\n");

  function BuyukKullanici() {

    this.isim = "İhsan";
  
    return { isim: "Muhsin" };  // <-- obje dönderir
  }


  let deneme=new BuyukKullanici();

  console.log(deneme);
  console.log("\n ////////////////////////////////////////////////\n");
  
  function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      console.log( "My name is: " + this.name );
    };
  }
  
  let john = new User("John");
  
  john.sayHi(); // My name is: John
  
  console.log("\n ////////////////////////////////////////////////\n");
  console.log("\n ////////////////////////////////////////////////\n");
  console.log("\n ////////////////////////////////////////////////\n");
  console.log("\n ////////////////////////////////////////////////\n");