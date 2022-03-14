
/* Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. */

let user={
    name:"john",
    surname:"smith"
}
console.log(user);

user.name="pete";

console.log(user);

delete user.name

console.log(user);

console.log("\n ********************* \n");

/* Write the function isEmpty(obj) which returns true 
if the object has no properties, false otherwise.

 */

function bosMu(obj){

    for (let key in obj){
        return false;
    }
    
        return true;
    
    
}
let obje={};
console.log(bosMu(obje));

obje={name:"sedat"};

console.log(bosMu(obje));

console.log("\n ********************* \n");
/* We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
 */


function summ(obj){
let top=0;
    if(bosMu(obj)){
        return 0;
    }
    else{
        for(let key in obj){
            top+= +obj[key]
        }
        return top;
    }
}

let salaries={
    
};
console.log(summ(salaries));
salaries={
    John: 100,
  Ann: "160",
  Pete: 130
};
console.log(summ(salaries));

console.log("\n ********************* \n");

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (!isNaN(obj[key]) ) {
        obj[key] *= 2;
      }
    }
  }
  multiplyNumeric(menu);
  console.log(menu);