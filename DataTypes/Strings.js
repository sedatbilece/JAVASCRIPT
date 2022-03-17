
// `` ile birden fazla satırda kullanılabilir
let davetliListesi = `Davetliler:
 * İhsan
 * Cemal
 * Muzaffer
`;

console.log(davetliListesi);
console.log("\n***********\n");

console.log( "\u00A9" ); // ©
console.log( "\u{20331}" ); // 佫, Uzun bir çince hiyerograf (uzun unicode)
console.log( "\u{1F60D}"); // 😍, gülen yüz sembolü (uzun unicode)
console.log("\n***********\n");

console.log( `Naber\n`.length ); // 6  \n tek karakter sayıldı
console.log("\n***********\n");


let str = "Bin berber bir berbere gel birader beraber bir berber dükkanı açalım demiş";

if (~str.indexOf("Bin")) {
  console.log( 'Buldum!' ); // Çalıştı
}
console.log("\n***********\n");

console.log( "Bin berber bir berbere gel birader beraber bir berber dükkanı açalım demiş".includes("dükkanı") ); // true
console.log("\n***********\n");


console.log( "birader".startsWith("bir") ); // true, "birader" "bir" ile başlar.
console.log( "birader".endsWith("er") );   // true, "birader" "er" ile biter.
console.log("\n***********\n");

 str = "stringify";
console.log( str.slice(0,5) );// 0ile 4 arasındaki indislerdeki karakterleri alır

 console.log( str.slice(2) ); // ringify, ikinci pozisyondan sonuna kadar.

// alt karakter dizisi için aynıdır.
console.log( str.substring(2, 6) ); // "ring"
console.log( str.substring(6, 2) ); // "ring"