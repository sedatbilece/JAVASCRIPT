
var uniqueInOrder  = function(iterable) {
 
  str = String(iterable);
  len =str.length;
  arr=[];

  for (i=0; i<len-1;i++){
        if(iterable[i]!=iterable[i+1]){
            arr.push(iterable[i]);
        }
        if((i+1)==len-1){
            arr.push(iterable[i+1]);
        }
  }
  
 return arr;  
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'));



// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]