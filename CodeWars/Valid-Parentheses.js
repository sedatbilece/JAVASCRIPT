function validParentheses(parens) {
   open=0;
   close=0;

   if(parens.length >100){
    return false;
   }
   parens.split('').map(x =>{
        if(x==='('){
            open++;
        }
        else if(x===')'){
            if(open>0){
                open--;
            }
            else{
                close++;
            }

        }
   })
   // basic stack
    if(open===0 && close===0){
        return true;
    }
    else{
        return false;
    }
  }

  console.log(validParentheses("(")); 

  /*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
  */