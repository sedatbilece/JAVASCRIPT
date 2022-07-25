/*
Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)
*/


function findMissingLetter(array)
{
    // if array uppercase return upper case
     var firstchar = array.join('')[0]; // get the first character of the array
     var islow = firstchar.toLowerCase() === firstchar;
    
     

    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var alphabetArray = alphabet.split('');
    var arrayLength = array.length;

    array = array.join('').toLowerCase().split('');//all process in lowercase
    let temp=[];
    let x=0;
    for (var i = 0; i < 26; i++){
        
        if(array[x]==alphabetArray[i]){

           for(let j=0;j<=arrayLength;j++){// doğru diziyi buluyoruz
             temp.push(alphabetArray[i+j]);
           }
            
        }
    }
    
    let difference = temp.filter(x => !array.includes(x));
    difference = difference.join('');

    //case convertion
    if(islow){
        return difference;
    }
    else{
        return difference.toUpperCase();
    }
}


//BEST SOLUTION
/* 
function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
}
*/



