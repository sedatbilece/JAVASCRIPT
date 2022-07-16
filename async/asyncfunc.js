
console.log("program çağrıldı")


const func1=()=>{
    console.log("fonk 1 tamamlandı")
    func3()
}

const func2=()=>{
    console.log("fonk 2 tamamlandı")
   
}
const func3=()=>{
    console.log("fonk 3 tamamlandı")
    func2()
}

func1()

console.log("\n ***************** \n ");

//const { name } = require("tar/lib/types");


// gecikme yaşanır 1:5 3:10 2:15 şeklinde gerçekleşir
let x=5;
console.log("1.veri:"+x)


setTimeout(()=>{
    x=x+5;
    console.log("2.veri:"+x)
},3000)

x=x+5;
console.log("3.veri:"+x)

console.log("\n ***************** \n ");
const books=[
    {name:"Kitap1" , auth:"yazar1"},
    {name:"Kitap2" , auth:"yazar2"},
    {name:"Kitap3" , auth:"yazar3"}
];
    const listBooks=()=>{

        books.map((book)=>{
         console.log(book.name);
        })
    }

    const addBook=(newBook,callback)=>{
        books.push(newBook);
        callback();
    }


addBook({name:"Kitap4" , auth:"yazar4"},listBooks)