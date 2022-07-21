async function f() {
    return 1;
}

console.log(f());

f().then(data => {

    console.log(data);

});