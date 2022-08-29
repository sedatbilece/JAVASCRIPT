function arrange(s) {
    let t=[]
    
   if(s.length==0){
    return s;
   }
    while(s.length>0){
       if(s.length==1){
        t.push(s[0])
        s.pop()
       }
       else{
        a= s.splice(0,1) 
        b= s.splice(s.length-1,1)
        t.push(a[0])
     t.push(b[0])
       }
     s.reverse();
    }  
    return t;
  }
  


arrange([9, 7, -2, 8, 5, -3, 6, 5, 1])

/*
A list S will be given. You need to generate a list T from it by following the given process:

Remove the first and last element from the list S and add them to the list T.
Reverse the list S
Repeat the process until list S gets emptied.
The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.

Example
S = [1,2,3,4,5,6]
T = []

S = [2,3,4,5] => [5,4,3,2]
T = [1,6]

S = [4,3] => [3,4]
T = [1,6,5,2]

S = []
T = [1,6,5,2,3,4]
return T
*/