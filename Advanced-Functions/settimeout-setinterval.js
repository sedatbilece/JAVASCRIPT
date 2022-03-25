function selamVer(ifade, kim) {
    console.log( ifade + ', ' + kim );
  }
  
  setTimeout(selamVer, 1000, "Merhaba", "Ahmet"); // Merhaba, Ahmet



  let timerId = setTimeout(() => console.log("Bir şey olmayacak"), 1000);
  console.log(timerId); // timer identifier

clearTimeout(timerId);
console.log(timerId); // same identifier (iptal ettikten sonra null olmaz)

say=1;

function sayac(){
    
console.log(say);
say++;
}
let id=setInterval(sayac,1000);

setTimeout(()=>{clearInterval(id);},5000);//5.saniye sonunda interval durur



//sürekli tekrar eden settimeout

 timerId = setTimeout(function tick() {
    console.log('tick');
    timerId = setTimeout(tick, 2000); 
  }, 2000);


 // setTimeout(() => console.log("Dünya"), 0);//mümkün olan ilk anda fonksiyonu çalıştırır

console.log("Merhaba");



let i = 0;

let start = Date.now();

function count() {

  // zamanlama başa taşındı
  if (i < 1e9 - 1e6) {
    setTimeout(count, 0); // yeni çağrıyı zamanla
  }

  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    console.log((Date.now() - start) + 'ms de tamamlandı');
  }

}

count();


i = 0;

function count() {

  // yoğun işin bir bölümü (*)
  do {
    i++;
    console.log(i);
  } while (i % 1e3 != 0);

  if (i < 1e9) {
   setTimeout(count, 0);
  }

}

count();