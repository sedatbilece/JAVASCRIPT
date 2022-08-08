function order(words){
   let arr = words.split(' ');
   let object = {};
   let text=''

   if(words.length<=0){
    return '';
   }

   arr.map((item)=>{// find number
       
       var matches = item.match(/(\d+)/);
       matches[0]!=='0'? object[matches[0]]=item : null;
   })

   var array = Object.keys(object)//to array
   .map(function(key) {
       return object[key];
   });

   array.map(x=>{//to text
        text+=x+' ';
   })

    text = text.trim()
    return text;
  } 



console.log(  order("0of Fo1r pe6ople g3ood th5e the2"))

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

*/