//2 type creating
let arr = new Array();// (1)
// let arr = []; // (2)


console.log("\n**************************\n");
// mix of values
 arr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

// get the object at index 1 and then show its name
console.log( arr[1].name ); // John
console.log( arr[0] ); // apple
 
// get the function at index 3 and run it
arr[3](); // hello
console.log("\n**************************\n");

// YANLIŞ KULLANIMLAR
let meyveler = []; // Dizi yap

meyveler[99999] = 5; // boyutundan çokça büyük bir özelliğe veri ata.
meyveler [5000]=13;
meyveler.yas = 25;

console.log(meyveler);// [ <5000 empty items>, 13, <94998 empty items>, 5, yas: 25 ]


console.log("\n**************************\n");

 meyveler = ["Elma", "Portakal", "Armut"];

 console.log(meyveler.pop());//sondan eleman siler
 console.log(meyveler.push("kiraz"));// sona eleman ekler

 console.log(meyveler.shift());// baştan eleman siler silinen elemanı döner
 console.log(meyveler.unshift("karpuz"));// başa eleman ekler



 console.log("\n**************************\n");
 //DİZİLERİ YAZDIRMA

for (let i = 0; i < arr.length; i++) {
    console.log( arr[i] );
}

// Dizi elemanları üzerinden döner.
for(let meyve of meyveler) {
    console.log( meyve );

}

// DİZİ KAYBOLUR 
arr.length=0;//UZUNLUK DEĞERİ İLE OYNANDI
console.log(arr);

console.log("\n**************************\n");

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log( matrix[1][2] ); // merkez eleman


  console.log(String(meyveler));


  console.log("\n**************************\n");


 arr = [1, 2, 5]

// indeks -1 ( sondan birinci )
// 0 eleman sil,
// 3 vs 4 ekle
arr.splice(-1, 1,3,4);


console.log( arr ); // 1,2,3,4,5


console.log("\n**************************\n");

let kullanicilar = [
    {id: 1, isim: "Ahmet"},
    {id: 2, isim: "Muzaffer"},
    {id: 3, isim: "Emine"}
  ];
  
  let kullanici = kullanicilar.find(eleman => eleman.id == 1);
  
  console.log(kullanici.isim); // Ahmet


  console.log("\n**************************\n");
  let uzunluklar = ["Bilbo", "Gandalf", "Nazgul"];
  uzunluklar.map( (eleman) => {


    console.log(`kelime:${eleman} uzunluğu:${eleman.length}`)
  });


  console.log("\n**************************\n");
  let dizi = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ');

  console.log(dizi); // Bilbo, Gandalf
