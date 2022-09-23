// Faça um programa que, dado um valor n qualquer, seja n > 1 ,
//  imprima na tela um triangulo rentagulo  feito de asteriscos de lado de
//   tamanho n .
// var n = 5;
// var aux = '';
// for (var linha = 1; linha <= n; linha++) {
//     for(var coluna = 1; coluna <= n; coluna++) {
//         if (coluna == linha) {
//             aux += '*'
//         }
//     }
//     console.log(aux)
// } 


let size = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
};