function incrementString (strng) {
    let newstr =''
    let num=''

    let arr = strng.split('')// array to list
    var thenum = strng.replace( /^\D+/g, '');// extract number

    for (i=0;i<arr.length-thenum.length;i++){//string field
       newstr+=arr[i]
    }

    num = (+(thenum)+ 1)// increment number

    num = num.toString()
    
    if(thenum.length-num.length!=-1){// add zero if number is less than length of number
    newstr +='0'.repeat(thenum.length-num.length) 
    }

    newstr =newstr+num // add number to string
    return  newstr; // return string
  }

  console.log(
    incrementString("foobar"))

/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

 */