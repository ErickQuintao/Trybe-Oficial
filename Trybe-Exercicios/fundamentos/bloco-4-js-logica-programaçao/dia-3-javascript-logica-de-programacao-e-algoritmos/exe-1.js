// console.log(10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1);
//fatorial de 10.
let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);