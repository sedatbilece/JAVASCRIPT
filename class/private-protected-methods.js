// Protected değişken (_) ile oluşturulur
//Private değişken (#) ile oluşturulur

class CoffeeMachine {
     #waterAmount = 0;
      _power;
    
    set waterAmount(value) {//
      if (value < 0) {
        value = 0;
      }
      this._waterAmount = value;
    }
    
    
  
    get waterAmount() {
      return this.#waterAmount;
    }
  
    constructor(power,waterAmount=0) {
      this._power = power;
      this.#waterAmount=waterAmount
    }
  
  }
  
  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100,20);
  
  // add water
 coffeeMachine.waterAmount=22; // _waterAmount will become 0, not -10

 coffeeMachine._waterAmount=40;//wateramount değişkenine direk erişilemez
  console.log(coffeeMachine.waterAmount);
  console.log(coffeeMachine._power);//powera direk erişilebilir