"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
let Vo = parseFloat(readline.question("Masukkan kecepatan awal benda (Vo): "));
let a = parseFloat(readline.question("Masukkan percepatan benda (a): "));
let t = parseFloat(readline.question("Masukkan waktu benda (t): "));
let Vt = Vo + a * t;
let S = Vo * t + 0.5 * a * Math.pow(t, 2);
console.log(`kecepatan benda (Vt) adalah ${Vt.toFixed(1)} m/s`);
console.log(`jarak yang ditempuh benda (S) adalah ${S.toFixed(1)} m`);
//# sourceMappingURL=glbb.js.map