let kullanici = {
    isim: "İhsan",
    para: 1000,
  
    // hint="string" için
    toString() {
      return `{isim: "${this.isim}"}`;
    },
  
    // hint="number" veya "default" için
    valueOf() {
      return this.para;
    }
  
  };
  
  console.log(kullanici); // toString -> {isim: "İhsan"}
  console.log(+kullanici); // valueOf -> 1000
  console.log(kullanici + 500); // valueOf -> 1500