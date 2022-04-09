function User (name){
   console.log("user sınıfına erişildi ...");
   this.name=name;
}
User.prototype.getName=function(){
    
    return this.name;
}

var user1=new User("deneme1");
var user3=new User("deneme2");

console.log(user1.getName());

console.log(user3.getName());

console.log(User.prototype == user1.__proto__);
