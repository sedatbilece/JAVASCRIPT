function moveZeros(arr) {
    let len = arr.length;
    temp = [];

    temp = arr.filter ((x)=> x !== 0);

   var x =(len)-temp.length;

    for (let i = 0; i < x; i++) {
        temp.push(0);
    }
    return temp;
  }


  moveZeros([1,2,0,1,0,1,0,3,0,1])

  /*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
  */