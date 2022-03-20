// JSON (JavaScript Object Notation)     genelde objelerin değerlerini ifade eder


let ogrenci = {// js objesi (JSON)
    adi: 'Ahmet',
    yasi: 30,
    adminMi: false,
    dersler: ['html', 'css', 'js'],
    esi: null
  };

  console.log(ogrenci);
  console.log(typeof ogrenci);


  let json = JSON.stringify(ogrenci);
  
  console.log(json);
  console.log(typeof json); // string dönecektir.!
  
  console.log("\n********************\n");
// DAİRESEL YAPI JSONA DÖNÜŞTÜRÜLEMMEZ
  let oda = {
    sayi: 23
  };
  
  let tanisma = {
    baslik: "Konferans",
    katilimcilar: ["ahmet", "mehmet"]
  };
  
  tanisma.yeri = oda;       // tanisma odaya referans veriyor.
  oda.dolduruldu = tanisma; // oda tanismaya referans veriyor

  console.log(oda);
  console.log(tanisma);

  console.log("\n********************\n");
  // STRİNGİ GERİ OBJEYE ÇEVİRME İŞLEMİ
let sayilar = "[0, 1, 2, 3]";

sayilar = JSON.parse(sayilar);

console.log(  sayilar ); // 1


console.log("\n********************\n");