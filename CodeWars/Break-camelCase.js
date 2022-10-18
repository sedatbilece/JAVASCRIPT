// complete the function
function solution(string) {
    return string.split('').map((letter, index) => {
        if (letter === letter.toUpperCase()) {
            return " "+letter;
        }
        return letter;
    }).join('');
}

console.log(solution('camelCasing')); // 'camel Casing'

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */