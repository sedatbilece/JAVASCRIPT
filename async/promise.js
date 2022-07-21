new Promise((resolve, reject) => {
    // resolve veya reject sadece birisi çalışır

    //işlem başarılı ise 
    resolve({
        name: "sedat",
        surname: "bilece"
    });


    //işlem başarısız ise
    reject();


}).then(data => {//zincir yapısı

    data.web = "url adresi";

    return data;

}).then(data => {

    console.log(data);

}).catch(data => {

    console.log(data);

}).finally(() => {
    console.log("tüm işlemler yapıldı ve bitti !");
})