// ÜS ALMA FONKSİYONU YAZALIM

function pow(x,n){

    if(n==1){
        return x;
    }
    else{
        return x * pow(x, n-1);
    }
}
//Recursive fonksiyonlar genelde daha az bellek kullanır
console.log(pow(4,5));

// us fonksiyonu burada n'e bağlı 
function us(x, n) {
    let sonuc = 1;
  
    for(let i = 0; i < n; i++) {
      sonuc *= x;
    }
  
    return sonuc;
  }



  function topla(n){

   if(n==1){
       return 1;
   } 
   else{
       return n+topla(n-1);
   }
  }

  console.log(topla(100));

  function faktoriyel(n){

    if(n==1){
        return 1;
    } 
    else{
        return n*faktoriyel(n-1);
    }
   }
 
   console.log(faktoriyel(5));