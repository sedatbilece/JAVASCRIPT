

(async () => {
  async function hello() {

    //  return new Promise(resolve => resolve("hello world"));
    return "async hello world";
  }

  const text = await hello();
  //text.then( response =>  console.log(response));
  console.log(text);

})()