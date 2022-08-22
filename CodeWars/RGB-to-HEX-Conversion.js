function rgb(r,g,b){
    function decToHex(c){
      if(c>255) return"FF";
      else if(c<0) return"00";
      else
        return c.toString(16).padStart(2,"0").toUpperCase();
   }
   return decToHex(r)+decToHex(g)+decToHex(b) 
}

console.log(rgb(173,255,47));
//learned from youtube

/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/