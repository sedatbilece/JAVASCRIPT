// Regular Function
function sayHello(name) {
    return `Hello ${name}`;
}

// Arrow Function
const sayHello2 = (name) => `Hello ${name}`;


console.log(sayHello("regular"));
console.log(sayHello2("arrow")); 



document.querySelector("h3").addEventListener("click", function() {

    this.classList.toggle("active");
});

/*
// Bu şekilde kullanılmaz 
// This ,Argument,Super , New Target kullanılamaz 
document.querySelector("h3").addEventListener("click", ()=> {

    this.classList.toggle("active");
});
*/

//SORU ?: klasik fonksiyon tanımında  bu objelere nasıl sahip oluyor?