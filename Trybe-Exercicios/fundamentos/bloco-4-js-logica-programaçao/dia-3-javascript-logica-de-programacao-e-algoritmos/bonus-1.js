// //criar um algoritmo que criar um quadrado de astericos
// var n = 5;
// var aux = "";
// for (var linha = 1; linha <= n; linha++) {
//   for (var coluna = 1; coluna <= n; coluna++) {
//     aux += "*";
//   }
//   console.log(aux);
//   aux = "";
// }

let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};