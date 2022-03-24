function calisanYarat() {
    let isim = "Mehmet";
  
    return function() {
      console.log(isim);
    };
  }
  
  let isim = "Zafer";
  
  // fonksiyon yarat
  let is = calisanYarat();
  
  // çağır
  is(); // burada "Mehmet" mi yoksa "Zafer" mi gösterilecek ?

  console.log("\n *********************\n");
  let adi = "Ahmet";

function selamVer() {
  console.log("Merhaba, " + adi);
}

adi = "Mehmet"; // (*)

selamVer(); // Mehmet