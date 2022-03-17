let john = {
    name: "John",
    sayHi: function() {
      console.log("Hi buddy!");
    }
  };
  
  john.sayHi(); // Hi buddy!

  console.log('\n ***********\n');

  let str = "Hello";

  console.log( str.toUpperCase() ); // HELLO


  console.log('\n ***********\n');

  let n = 1.234563242342;

  console.log( n.toFixed(4) ); // 1.23 virgülden sonraki basamak ayarı

  console.log('\n ***********\n');

  let sifir = new Number(0);

if (sifir) { // burada sıfır true gelecek çünkü o bir obje
  console.log( "Sıfır doğru mu???" );
}


console.log('\n ***********\n');

let num = Number("123"); // karakteri sayıya çevir.
console.log(typeof num);

console.log('\n ***********\n');
//deneme

let strr = "Merhaba";

strr.test = 5; // (*)

console.log(str.test);