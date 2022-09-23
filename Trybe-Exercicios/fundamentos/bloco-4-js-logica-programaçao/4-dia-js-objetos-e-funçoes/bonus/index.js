//exercicio 1;;;
const numerosRomanos = {
	i: 1,
	v: 5,
	x: 10,
	l: 50,
	c: 100,
	d: 500,
	m: 1000,
  };
  
  function romanoParaDecimal(numero) {
	numero = numero.toLowerCase();
	const len = numero.length;
	let soma = numerosRomanos[numero[len - 1]];
	let atual = numerosRomanos[numero[len - 1]];
	for (let i = 2; i <= len; i += 1) {
	  const prox = numerosRomanos[numero[len - i]];
	  if (atual <= prox) {
		soma += prox;
	  } else {
		soma -= prox;
	  }
	  atual = prox;
	}
	return soma;
  }
  
  console.log(romanoParaDecimal('MMXVIII')); 
  console.log(romanoParaDecimal('VI')); 
  console.log(romanoParaDecimal('IV')); 

// // exercicio 2;
// //o jeito errado que eu fiz;
// function arrayOfNumbers(vector){
// 	vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
// 	for (let index in vector){  
// 		let num = index.length
// 		if(num % 2 === 0 ){
// 		  return num
// 		}
// 	}
// 	console.log(arrayOfNumbers())
// // jeito certo
// const vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

// function arrayOfNumbers(vector) {
//   const result = [];
//   for (let index = 0; index < vector.length; index += 1) {
//     const numbers = vector[index];
//     for (let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
//       const current = numbers[indexSub];
//       if ((current % 2) === 0) {
//         result.push(current);
//       } 
//     }
//   }
//   return result;
// }

// console.log(arrayOfNumbers(vector));

// //exercicio 3;
//  	const basket = [
//   'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//   'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//   'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//   'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//   'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//   'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//   'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//   'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//   'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//   'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//   'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//   'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//   'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//   'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//   'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//   'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//   'Banana', 'Pera', 'Abacate', 'Uva',
// ];
// function frutas(){ 
// let Melancia = [];
// let Abacate = [];
// let Uva = [];
// let Laranja = [];
// let Jaca = [];
// let Pera = [];

// for(index = 0; index < basket.length;index +=1){
// 	if(index = Melancia){
// 		Melancia.push(basket[index]);
// 	} else if(index = 'Abacate'){
// 		Abacate.push(basket[index]);
// 	} else if(index = 'Uva'){
// 		Uva.push(basket[index]);
// 	} else if(index = 'Laranja'){
// 		Laranja.push(basket[index]);
// 	} else if(index = 'Jaca'){
// 		Jaca.push(basket[index])
// 	} else{
// 		Pera.push(basket[index]);
// 	}
// }
// }
// console.log('a cesta tem' + Melancia + Abacate + Uva + Pera + Laranja + Jaca);
// //jeito errado que eu fiz ;

// const basket = [
// 	'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
// 	'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
// 	'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
// 	'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
// 	'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
// 	'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
// 	'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
// 	'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
// 	'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
// 	'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
// 	'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
// 	'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
// 	'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
// 	'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
// 	'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
// 	'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
// 	'Banana', 'Pera', 'Abacate', 'Uva',
//   ];
  
//   const result = {};
  
//   for (let index = 0; index < basket.length; index += 1) {
// 	const fruit = basket[index];
// 	if (!result[fruit]) result[fruit] = 0;
// 	result[fruit] += 1;
//   }
  
//   const summaries = [];
//   for (fruit in result) {
// 	let message = `${result[fruit]} ${fruit}`;
// 	if (result[fruit] > 1) message += 's';
// 	summaries.push(message);
//   }
  
//   console.log(`Sua cesta possui: ${summaries.join(', ')}.`);

//  //exercicio 4 e 5
//  let moradores = {
//  	blocoUm: [
//  	  {
//  		nome: 'Luiza',
// 		sobrenome: 'Guimarães',
//  		andar: 10,
// 		apartamento: 1005, 	  },
//  	  {
// 		nome: 'William',
// 		sobrenome: 'Albuquerque',
// 		andar: 5,
//  		apartamento: 502,
// 	  },
// 	],
// 	blocoDois: [
// 	  {
//  		nome: 'Murilo',
// 		sobrenome: 'Ferraz',
// 		andar: 8,
// 		apartamento: 804,
// 	  },
// 	  {
// 		nome: 'Zoey',
// 		sobrenome: 'Brooks',
//  		andar: 1,
// 		apartamento: 101,
// 	  },
// 	],
//    };
//    let moradoresBlocoDois = moradores.blocoDois;
//  let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];
//    console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois.nome + ' ' + ultimoMoradorBlocoDois.sobrenome + ' mora no ' + ultimoMoradorBlocoDois.andar + '° andar, apartamento ' + ultimoMoradorBlocoDois.apartamento);
//    for (let index = 0; index < moradores.blocoUm.length; index += 1) {
//  	console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
//   }
  
//   for (let index = 0; index < moradores.blocoDois.length; index++) {
//  	console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
// }
// //.