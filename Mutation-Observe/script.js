// attributes herhangi bir obje değişikliği class id vb gibi
// childList bir obje içinde bir obje eklendiğinde
// characterData bir obje içinde bir değişiklik yapıldığında
// subtree bir obje içinde bir obje eklendiğinde  


const mutationObserver = new MutationObserver(entries =>{
    console.log(entries)
})

const parent = document.querySelector('.container')

mutationObserver.observe(parent,{attributes:true,childList:true,characterData:true,subtree:true})

  

const but = document.querySelector('#but')

but.addEventListener('click',()=>{
    parent.classList.toggle('back')
})
    
parent.children[0].remove()



// ************************* RESIZE OBSERVER *************************  

const box = document.querySelector('.box')

const resizeObserver = new ResizeObserver(entries =>{
    if (entries[0].contentRect.width < 600) {
        console.log(entries)
        box.classList.add('small')
    }
    else{
        box.classList.remove('small')
    }
});

resizeObserver.observe(box) 
