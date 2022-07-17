//1-Crie um objeto player contendo as variáveis listadas abaixo.
//2-
let singer = { 
 name : 'Marta',
 lastName : 'Silva',
 age :34,
 medals :{
	 golden: 2,
	 silver: 3,
 },
 bestInTheWorld :{
	 array:[2006, 2007, 2008, 2009, 2010, 2018],
  }
 }
  console.log('A jogadora ' + singer.name + ' ' + singer.lastName + ' tem ' + singer.age + ' anos de idade');
 console.log("A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes em  " + singer.bestInTheWorld.array)
console.log('A jogadora possui ' + singer.medals.golden + ' medalhas de ouro e ' + singer.medals.silver + ' medalhas de prata' )


// let diasDaSemana = {
// 	1: 'domingo',
// 	2: 'segunda',
// 	3: 'terça',
// 	4: 'quarta',
// 	5: 'quinta',
// 	6: 'sexta',
// 	7: 'sábado',
// 	};
	
// 	// diasDaSemana.1; // SyntaxError: Unexpected number
// 	console.log(diasDaSemana['1']); // domingo