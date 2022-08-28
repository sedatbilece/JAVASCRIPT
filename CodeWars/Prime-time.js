function prime(num) {
    let arr=[]
    for(i=2;i<=num;i++){
        cnt=0

        for (j=2;j<i;j++){
            if(i%j==0){
                cnt+=1
            }
        }
        if(cnt==0){
            arr.push(i)
        }
    }

    return arr
  }

  console.log(prime(2000))

  /*
We need prime numbers and we need them now!

Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

For example,

11 => [2, 3, 5, 7, 11]
  */