function pigIt(str){
    return str.split(' ').map(word => {
        if (word.match(/[a-zA-Z]/)) {
            
            return word.slice(1) + word[0] + 'ay';
        } else {
            
            return word;
        }
    }).join(' ');
}

console.log( pigIt('Pig latin is cool !'))

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
 */

//best practice
/*
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
*/

