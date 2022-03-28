function slow(x) {
    // burada baya yoğun işlemci gücüne ihtiyaç duyan işler yapılmaktadır.
    console.log(`${x} ile çağırıldı`);
    return x;
  }
  
  function cachingDecorator(func) {
    let cache = new Map();
  
    return function(x) {
      if (cache.has(x)) { // eğer sonuç map içerisinde ise
        return cache.get(x); // değeri gönder
      }
  
      let result = func(x); // aksi halde hesap yap
  
      cache.set(x, result); // sonra sonucu sakla
      return result;
    };
  }
  
  slow = cachingDecorator(slow);
  
  console.log( slow(1) ); // slow(1) saklandı
  console.log( "Tekrar: " + slow(1) ); // aynısı döndü
  
  console.log( slow(2) ); // slow(2) saklandı
  console.log( "Tekrar: " + slow(2) ); // bir önceki ile aynısı döndü.

  