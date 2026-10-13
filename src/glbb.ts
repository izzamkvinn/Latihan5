import readline = require('readline-sync');

let Vo: number = parseFloat(readline.question("Masukkan kecepatan awal benda (Vo): "));
let a: number = parseFloat(readline.question("Masukkan percepatan benda (a): "));
let t: number = parseFloat(readline.question("Masukkan waktu benda (t): "));

let Vt: number = Vo + a * t;
let S: number = Vo * t + 0.5 * a * Math.pow(t, 2);

console.log(`kecepatan benda (Vt) adalah ${Vt.toFixed(1)} m/s`);
console.log(`jarak yang ditempuh benda (S) adalah ${S.toFixed(1)} m`);