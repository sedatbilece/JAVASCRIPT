/*
DESCRIPTION:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {

    var dizi=['a','e','i','o','u'];
     var toplam=0;
    
    dizi.forEach(element => {

        for (i=0;i<str.length;i++){
            if(str[i]==element){
                toplam+=1;
            }
        }
    });  
    return toplam;
  }
  