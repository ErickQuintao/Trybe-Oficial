//algoritmo para pegar o maior numero primo
// function primeNumber(num) {
//     for (var divisor = 2; divisor < num; divisor++) 
//     if (num % divisor == 0) return false;
//     return true;
// }

// var determinadoNumero = 50;

// for (var i = 2; i < determinadoNumero; i++) 
// if (primeNumber(i)) ;
// var m = Math.max(i);
// console.log(m);
let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);