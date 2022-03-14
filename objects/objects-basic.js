




 let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30     ,   // by key "age" store value 30
    likes_birds: true,
    dizi:[5,6,7]
  };
  
user.name="sedat"; // set etme şekilleri
user["name"]="mahmuy";// set şekilleri
 // delete user.name; nesnein özelliğini komple kaldırır key ve value ikisi birden
console.log(user.dizi);
console.log("age" in user );


//obje içinde gezinme
for(anahtar in user) {
  console.log(`${anahtar}: ${user[anahtar]}`);
}



///////////////////////////////////

let kodlar = {
  "49": "Almanya",
  "41": "İsveç",
  "44": "İngiltere",
  // ..,
  "1": "Amerika Birleşik Devletleri"
};

for(let kod in kodlar) {//key sırasına göre getir
  console.log(kod); // 1, 41, 44, 49
}

///////////////////////////////////
/* let kullanici = { isim: "Mümtaz" };

let yonetici = kullanici; // referansı kopyalar.
yonetici.isim="sedat";
console.log("\n "+kullanici.isim+"  "+yonetici.isim);//her ikiside sedat olur
console.log(kullanici=== yonetici);
 */

///////////////////////////////////

// bu özellikleri kullanıcıya kopyalamak için

let kullanici = { isim: "Mümtaz" };

let izin1 = { okuma: true };
let izin2 = { duzenleme: true };

// bu özellikleri kullanıcıya kopyalamak için
Object.assign(kullanici, izin1, izin2 );
console.log(kullanici)