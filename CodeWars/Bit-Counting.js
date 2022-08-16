var countBits = function(n) {
   cnt =0;
    n.toString(2).split('').map( x=> x=='1'?cnt+=1:null);
    return cnt;
    
  };

  countBits(7)

  /*
Write a function that takes an integer as input, and returns the number of bits that are equal to
 one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
  */