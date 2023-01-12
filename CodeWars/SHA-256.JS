function sha256 (string) {
     crypto = require('crypto');
    hash = crypto.createHash('sha256');
    hash.update(string);
    return hash.digest('hex');

}

console.log(sha256('Hello World!'));

/*
Create a function that converts a given ASCII string to its hexadecimal SHA-256 hash.
*/