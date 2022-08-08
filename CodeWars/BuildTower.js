function towerBuilder(nFloors) {
    let  n=nFloors-1;
    let x=1;
    let arr=[];

    for(i=0;i<nFloors;i++){
        arr.push(' '.repeat(n)+'*'.repeat(x)+' '.repeat(n));
        n--;
        x+=2;
    }
   return arr;
 }

console.log( towerBuilder(6))

/*
Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/