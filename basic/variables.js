
//LET VAR FONKSIYON FARKI
function selamVer() {
  var terim = "Merhaba"; // yeerl değişken "let" yerine "var" kullanılmıştır.
  alert(terim); // Merhaba
}

selamVer();

alert(terim); // Hata! terim tanımlı değil. 



//LET VAR BLOK FARKI
if (true) {
  let test = true; // "let" yerine "var" kullanıldı
}

console.log(test); // true, değişken if'ten sonra da varlığına devam etti. 



//LET VAR FONKSIYON FARKI
function selamVer() {
  terim = "Merhaba";

  console.log(terim);

  var terim;
}
selamVer()