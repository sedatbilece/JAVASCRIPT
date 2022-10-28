// Return the output array, and ignore all non-op characters
function parse( data )
{
    let arr= data.split('');
    let result = [];
    let temp = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'i'){
            temp++;
        }else if(arr[i] == 'd'){
            temp--;
        }else if(arr[i] == 's'){
            temp = Math.pow(temp, 2);
        }else if(arr[i] == 'o'){
            result.push(temp);
        }
    }

    return result;
  
}


console.log(parse("iiisxxxdoiso"))

/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/