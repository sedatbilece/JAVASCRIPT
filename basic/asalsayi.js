
const arg=process.argv.slice(2) 
function showPrimeNumbers(lownum,highnum){


    for(let i =lownum;i<=highnum;i++){
        let isPrime=true

        for(let j=2;j<=i;j++){
            if(i%j==0 && j !=i){
                isPrime=false
            }
        }

        if(isPrime){

            console.log(i);
        }

    }

   
}
showPrimeNumbers(arg[0]*1,arg[1]*1)

console.log(process.argv.slice(2))