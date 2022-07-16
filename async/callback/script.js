const box=document.querySelector('.box');

/*
function wait (ms) {

    return new Promise(function(resolve){

        return setTimeout(resolve,ms);
    })
}
*/

// Callback Hell olmadan çözümü
const wait = ms => new Promise( resolve => setTimeout(resolve ,ms ) );


wait(500).then(()=>{
     box.classList.add('bigger');
     return wait(500)
}).then(()=>{
    box.classList.add('circle');
    return wait(500);
})
.then(()=>{
    box.classList.add('move');
    return  wait(500);
})
.then(()=>{
    box.classList.add('back');
    return wait(500);
})
.then(()=>{
    box.classList.remove('back');
    return wait(500);
})
.then(()=>{
    box.classList.remove('move');
    return wait(500);
})
.then(()=>{
    box.classList.remove('circle');
    return wait(500);
}).finally(()=>{
    console.log("animasyon bitti");
})



