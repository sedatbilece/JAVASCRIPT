let milyar = 1e9;
console.log("milyar:"+milyar);

let sayi1=1.23e6;
console.log(" 1.23e6 :"+sayi1);

let ms = 1e-6;
console.log("1e-6: "+ms);

console.log("0xFF: "+0xFF);


let a = 0b11111111; // binary 255
let b = 0o377; // octal 255

console.log( a +"  " +b ); // true, iki sayı da aynıdır.


console.log("\n*******************************\n");

let sayi = 255;

console.log( "16lık tabanda:"+sayi.toString(16) );  // ff
console.log(  "8lik tabanda:"+sayi.toString(8) );  // ff
console.log( "2lik tabanda:"+ sayi.toString(2) );  // ff
console.log( "5lik tabanda:"+ sayi.toString(5) );  // ff
console.log( "10luk tabanda:"+ sayi.toString(10) );  // ff


// tipi strine çevirir
 sayi2=13;
 sayi2+= sayi.toString(8);
 console.log(typeof sayi2);


 console.log("sonsuz : "+1e500);

 console.log( 0.1 + 0.2 == 0.3 ); // false   0.1 + 0.2= 0.30000000000000004
 console.log(( 0.1 + 0.2).toFixed(2) == 0.3 ); // false


 // Merhaba ben kendi kendine artan sayıyım.!
console.log( 9999999999999999 ); // shows 10000000000000000


console.log("\n*******************************\n");

console.log("15:" +isNaN("15"));//false
console.log("num 15:" +isNaN(15));//false
console.log("str:" +isNaN("str"));//true

//isFinite sayı mı diye kontrolde kullanılabilir
console.log("15:" +isFinite("15"));//true
console.log("num 15:" +isFinite(15));//true
console.log("str:" +isFinite("str"));//false


console.log("\n*******************************\n");

console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5

console.log( parseInt('12.3') ); // 12, sadece tamsayı bölümü alındı
console.log( parseFloat('12.3.4') ); // 12.3, birinci noktadan sonra yeniden nokta gördüğünde işlemi tamamladı


console.log(Math.random());
console.log(Math.round((Math.random()*100) )); //0 <x <100 tam sayı
console.log((Math.random()*100) ); //0 <x <100 float sayı

console.log( Math.max(3, 5, -10, 0, 1) ); // 5
console.log( Math.min(1, 2) ); // 1


console.log("\n******\n");
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log( i );
}


//random değer aralıklı sayı bulucu
function random(min, max) {
    return Math.round(min + Math.random() * (max - min));
  }

  console.log(random(50,70));