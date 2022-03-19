let now = new Date();
console.log(now ); // shows current date/time


console.log(now.getUTCDay()+"."+now.getMonth()+"."+now.getFullYear())

console.log(typeof now);
now=String(now);
console.log(typeof now);

now=now.split(" ");
console.log(now);

saat=now[4].split(":");

console.log(saat);


let date = new Date( Date.parse('2012-01-26 13:51:50') );

console.log( "now: "+date);