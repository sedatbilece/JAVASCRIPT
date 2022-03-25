function selamVer() {
    console.log("Selam");
  }
  
  console.log(selamVer.name); // selamVer




  function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2



console.log("\n***********************\n");
function selamVer() {
    console.log("Selam");
  
    // Kaç defa çağırıldığını tutar.
    selamVer.counter++;
  }
  selamVer.counter = 0; // ilk değer
  
  selamVer(); // Selam
  selamVer(); // Selam
  
  console.log( `selamVer ${selamVer.counter} defa çağırılmıştır` );