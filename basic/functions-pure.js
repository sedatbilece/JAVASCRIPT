const add = x => y => x + y;

const increment = add(1);
const addTen = add(10);
console.log(increment(2));


const words = str => str.split(' ');

console.log(words("hello from words func"))