console.log( 5 % 2 ); // 1, a remainder of 5 divided by 2
console.log( 8 % 3 ); // 2, a remainder of 8 divided by 3

console.log("\n ********** \n");

console.log( 2 ** 3 ); // 2³ = 8

console.log("\n ********** \n");

let s = "my" + "string";
console.log(s); // mystring

console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"

console.log(2 + 2 + '1' ); // "41" and not "221"

console.log( 6 - '2' ); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers


console.log("\n ********** \n");

let apples = "2";
let oranges = "3";

console.log( apples + oranges ); // "23", the binary plus concatenates strings
console.log( +apples + +oranges ); // 5

console.log("\n ********** \n");

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log( a ); // 3
console.log( c ); // 0

a = b = c = 2 + 2;

console.log( a ); // 4
console.log( b ); // 4
console.log( c ); // 4

console.log("\n ********** \n");

let counter = 1;
 a = ++counter; // (*)

 console.log(a); // 2

counter = 1;
a = counter++; // (*) changed ++counter to counter++

console.log(a); // 1


console.log("\n ********** \n");

// Bir satırda 3 farklı işlem
for (a = 1, b = 3, c = a * b; a < 10; a++) {
    console.log(`a:${a} b:${b} c:${c}`);
    
   }

   console.log("\n ********** \n");


   let x= (16,5,10);// virgül son kısmı  döndürür parantezden dolayı
   console.log(x);//10