/* 

function selamVer() {
  var terim = "Merhaba"; // yeerl değişken "let" yerine "var" kullanılmıştır.
  alert(terim); // Merhaba
}

selamVer();

alert(terim); // Hata! terim tanımlı değil. */

/* if (true) {
  let test = true; // "let" yerine "var" kullanıldı
}

console.log(test); // true, değişken if'ten sonra da varlığına devam etti. */




function selamVer() {
  terim = "Merhaba";

  console.log(terim);

  var terim;
}
selamVer()