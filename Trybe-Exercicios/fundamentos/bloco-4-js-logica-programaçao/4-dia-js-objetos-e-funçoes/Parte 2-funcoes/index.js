//exercicio 1.

//Duas formas de resolver o exercício
/*
  Como podemos acessar a posição de uma string da mesma forma que
  acessamos um array, podemos então, comparar o caracter da
  posição 0 (primeira) com o caracter da última posição (length - 1).
  Dessa forma conseguimos verificar se a sequência de caracteres
  na string é a mesma do inicio ao fim e do fim ao inicio 😉
*/
// function verificaPalindrome(word){
// 	for(index in word){
// 	  if(word[index] != word[(word.length - 1) - index]){
// 		return false;
// 	  }
// 	}
// 	return true;
//   }
// versao 2;
//   function verificaPalindrome(string) {
// 	let reverse = string.split('').reverse().join('');
// 	if (reverse === string) {
// 	  return true;
// 	} else {
// 	  return false;
// 	}
//   }
  
//   console.log(verificaPalindrome('arara')); //true
//   console.log(verificaPalindrome('desenvolvimento')); //false

// //exercicio 2
// //um exemplo que eu fiz
// function Max(){
// 	var arr = [2, 3, 6, 7, 10, 1];
// 	for(let index in arr){ 
// 	var max = Math.max(arr[index]);
// 	}
// }
// console.log(Max([2, 3, 6, 7, 10, 1]));
////ou;
// function indiceDoMaior(numeros) {
// 	let indiceMaior = 0;
// 	for (let indice in numeros) {
// 	  if (numeros[indiceMaior] < numeros[indice]) {
// 		indiceMaior = indice;
// 	  }
// 	}
// 	return indiceMaior;
//   }
  
//   console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4

// //exercicio 3
// forma errada;
// function valorMenor(){  
// let array = [2, 4, 6, 7, 10, 0, -3];
// for(indice in array){  
// var mim = Math.min(array[indice]);
// };
// console.log(array[indice]);
// }
//// outra forma:

// function indiceDoMenor(numero){
// 	let menorValor = 0;
// 	for (let indice in numero){
// 		if (numero[menorValor]> numero[indice]){
// 			indice = menorValor
// 		}
// 	}
// 	return menorValor;
// }
// console.log(indiceDoMenor([2,4,6,7,10,0.-3]));//6

// //exercicio 4.
// function maiorPalavra(palavras) {
// 	let maiorPalavra = palavras[0];
// 	for (let indice in palavras) {
// 	  if (maiorPalavra.length < palavras[indice].length) {
// 		maiorPalavra = palavras[indice];
// 	  }
// 	}
// 	return maiorPalavra;
//   }
  
//   console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); // //Fernanda

// //exercicio 5.
// function maisRepetido(numeros) {
// 	let num = {};
  
// 	for (let index = 0; index < numeros.length; index += 1) {
// 	  let valor = numeros[index];
// 	  if (num[valor] === undefined) {
// 		num[valor] = 1;
// 	  } else {
// 		num[valor] = num[valor] + 1;
// 	  }
// 	}
  
// 	let contRepetido = 0;
// 	let contNumero = 0;
  
// 	for (let prop in num) {
// 	  if (contRepetido < num[prop]) {
// 		contRepetido = num[prop];
// 		contNumero = prop;
// 	  }
// 	}
  
// 	return contNumero;
//   }
  
//   console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); //2

// //exercicio 6.
//// jeito errado de fazer.
//// function soma(numeros){
//// 	var arr ={};
// //	for (index =1;index < numeros.length;index +=1){
// //arr += 1
// //	}
// //}

// function somaTodosNumeros(numeros) {
// 	let total = 0;
// 	for (let index = 1; index <= numeros; index += 1) {
// 	  total = total + index;
// 	}
// 	return total;
//   }
//   console.log(somaTodosNumeros(5)); //15


// //exercicio 7
// // jeito que eu tentei ,mas esta errado.
// function  verficaFimDaPalavra(){
// 	let word ='';
// 	let ending ='';
// 	if(word > ending && word.length -2 == ending){
// 		return true
// 	} else {
// 		return false
// 	}
// }
// console.log(verficaFimDaPalavra([trybe,be]));

// //Duas formas de resolver o exercício
// function verificaFimPalavra(palavra, fimPalavra) {
// 	palavra = palavra.split('');
// 	fimPalavra = fimPalavra.split('');
// 	controle = true;
// 	for (let index = 0; index < fimPalavra.length; index += 1) {
// 	  if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
// 		controle = false;
// 	  }
// 	}
// 	return controle;
//   }
  
// //   function verificaFimPalavra(palavra, fimPalavra) {
// // 	let inversoPalavra = palavra.split('').reverse().join('');
// // 	let inversoFimPalavra = fimPalavra.split('').reverse().join('');
// // 	let result;
  
// // 	for (let index = 0; index < inversoFimPalavra.length; index += 1) {
// // 	  if (inversoPalavra[index] !== inversoFimPalavra[index]) {
// // 		result = false;
// // 		break;
// // 	  } else {
// // 		result = true;
// // 	  }
// // 	}
	
// // 	return result;
// //   }
  
//   console.log(verificaFimPalavra('trybe', 'be')); //true
//   console.log(verificaFimPalavra('joaofernando', 'fernan')); //false


