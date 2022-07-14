class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
      console.log(this.name+" created .");
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  }
  
  let animal = new Animal("My animal");



  animal.run(10);
  animal.stop();

  class Rabbit extends Animal {//rabbit animal fonk ve constructorı kullanabilir


    constructor(name, earLength) {
        super(name);// (!) parent name beklediği için extend edilen classta const. override edilirse verilmelidir
        this.earLength = earLength;
      }

    hide() {
        console.log(`${this.name} hides!`);
    }

    stop(){//override method
        console.log(this.name+" Stopped.");
    }

    stopparent(){
        super.stop();
    }
    showEarLength(){
        console.log('earLength:'+this.earLength);
    }
  }
  
  let rabbit = new Rabbit("White Rabbit",30);
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.hide(); // White Rabbit hides!

  rabbit.stop();// White Rabbit Stopped.
  rabbit.stopparent();//White Rabbit stands still.
  rabbit.showEarLength();