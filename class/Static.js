class User {
    static staticMethod() {
      console.log(this === User);
    }
  }
  
  User.staticMethod(); // true


  //*****************

  class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
  
    static createTodays() {
      // remember, this = Article
      return new this("Today's digest", new Date());
    }
  }
  
  let article = Article.createTodays();
  
  console.log( article.title ); // Today's digest
  
  // Static Properties *****************


  class Article2 {
    static publisher = "Ilya Kantor";
  }
  
  Article2.publisher="sedat"
  console.log( Article2.publisher ); // sedat
