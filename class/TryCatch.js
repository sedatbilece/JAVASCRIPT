try {

    console.log('try başladı');  // (1) <--
  
   lalala; // hata,  değişken tanımlı değil!
  
   console.log('try bitti (hiç erişilemedi)');  // (2)
  
  } catch(err) {
  
    console.log(`Hata meydana geldi!`); // (3) <--
  
  }
  
  console.log("...Kod normal çalışmasına devam etti.");


//try catch yapısı asenkron method içine yazılmalı yoksa atlanır

setTimeout(function() {
    try {
      noSuchVariable; // try..catch hataları yakalayacaktır.
    } catch (e) {
      console.log( e.name );//ReferenceError
      console.log( e.message ); //noSuchVariable is not defined
     
    }
  }, 1000);




  // HATAMIZI OLUŞTURMA

  let json = '{ "yaş": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- hata yok

  if (!user.name) {
    throw new SyntaxError("Tanımlanmamış veri:isim yok"); // (*)
  }

  console.log( user.name );

} catch(e) {
    console.log( "JSON Error: " + e.message ); // JSON Error: Tanımlanmamış veri:isim yok
}