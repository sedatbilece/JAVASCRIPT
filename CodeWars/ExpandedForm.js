/* 
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    let dizi=[]
    let ndizi=[];
   temp=0;
    
   for(i=10;i<num*10;i=i*10){
    
    temp = num%i;
    dizi.push(temp);
    
   }
  

   for(i=0;i<dizi.length;i++){
        if(i==0){
            ndizi.push(dizi[i]);
        }else{
            ndizi.push(dizi[i]-dizi[i-1]);
        }
        
   }

   ndizi.reverse();
  ndizi= ndizi.filter(x => x!=0);
   
   text= ndizi.join(' + ')

    return text;
}


  

console.log(expandedForm(70304))