"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
let M = parseFloat(readline.question("Masukkan massa benda (m): "));
let F = parseFloat(readline.question("Masukkan gaya benda (f): "));
let S = parseFloat(readline.question("Masukkan perpindahan benda (s): "));
let A = parseFloat(readline.question("Masukkan sudut antar perpindahan dan gaya (a): "));
// rumus w = f cos a . s
// math cos di ts harus memakai radian, ubah derajat duli
let radian = A * Math.PI / 180;
let W = F * Math.cos(radian) * S;
console.log(`nilai usaha (w) adalah ${W} joule`);
//# sourceMappingURL=usaha.js.map