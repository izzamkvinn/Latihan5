import readline = require('readline-sync');

let M: number = parseFloat(readline.question("Masukkan massa benda (m): ")); 
let F: number = parseFloat(readline.question("Masukkan gaya benda (f): "));
let S: number = parseFloat(readline.question("Masukkan perpindahan benda (s): "));
let A: number = parseFloat(readline.question("Masukkan sudut antar perpindahan dan gaya (a): "));

// rumus w = f cos a . s
// math cos di ts harus memakai radian, ubah derajat duli
let radian: number = A * Math.PI / 180;
let W: number = F * Math.cos(radian) * S;

console.log(`nilai usaha (w) adalah ${W} joule`);
