class User {

    constructor(name) {// new ile User çağrıldığında çağrılır
      // invokes the setter
      this.name = name;
    }
  
    get name() {//name değişkeninin get methodu
      return this._name;// _name get methodu name ile karışmaması için
    }
  
    set name(value) {//name değişkeninin set methodu
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John");
  console.log(user.name); // John
  
  user = new User(""); // Name is too short.

  console.log(typeof User);//function yazdırır
  console.log( User);//[class User] yazdırır

