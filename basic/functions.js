 // fonksiyon tanımı
 selamVer("Ahmet"); // Merhaba Ahmet

function selamVer(isim) {
  console.log( `Merhaba, ${isim}` );
} 

///////////////////////////////////////////
//fonksiyon ifadesi
selamVer("Ahmet"); // hata verir !!!!!!!!

let selamVer = function(adi) {  // (*) büyü ortadan kalktı
  alert( `Merhaba, ${adi}` );
};
 ///////////////////////////////////////////
// arrow func
let topla=(a,b)=>{

    return a+b;
}

let toplam=topla(5,13);
console.log(toplam)

