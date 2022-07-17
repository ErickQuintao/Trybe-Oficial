// //exercicio 1.
// //Duas formas de resolver o exercício
// console.log('Bem-vinda, '+ info.personagem);

// console.log('Bem-vinda, '+ info['personagem']);

// //exercicios 2
//  let info = {
// 	personagem: 'Margarida',
// 	origem: 'Pato Donald',
// 	nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// 	recorrente: 'Sim'
//   }
//   //Duas formas de resolver o exercício
// info.recorrente = 'Sim';
// console.log(info);

// //exercicio 3
// let info = {
// 	personagem: 'Margarida',
// 	origem: 'Pato Donald',
// 	nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// 	recorrente: 'Sim',
//   };
  
//   for(let properties in info){
// 	console.log(properties);
//   }

// //exercicio 4
// let info = {
// 	personagem: 'Margarida',
// 	origem: 'Pato Donald',
// 	nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// 	recorrente: 'Sim',
//   };
  
//   for(let properties in info){
// 	console.log(info[properties]);
// / }

// //exercicio 5
// let info = {
// 	personagem: 'Margarida',
// 	origem: 'Pato Donald',
// 	nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// 	recorrente: 'Sim',
//   };
  
//   let info2 = {
// 	personagem: 'Tio Patinhas',
// 	origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
// 	nota: 'O último MacPatinhas',
// 	recorrente: 'Sim',
//   };
  
//   for (let properties in info) {
// 	if (
// 	  properties === 'recorrente' &&
// 	  info[properties] === 'Sim' &&
// 	  info2[properties] === 'Sim'
// 	) {
// 	  console.log('Ambos recorrentes');
// 	} else {
// 	  console.log(info[properties] + ' e ' + info2[properties]);
// 	}
//   }

// //exercicio 6
// let leitor = {
// 	nome: 'Julia',
// 	sobrenome: 'Pessoa',
// 	idade: 21,
// 	livrosFavoritos: [
// 	  {
// 		titulo: 'O Pior Dia de Todos',
// 		autor: 'Daniela Kopsch',
// 		editora: 'Tordesilhas',
// 	  },
// 	],
//   };
//   console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

// //exercicio 7 e 8
// let leitor = {
// 	nome: 'Julia',
// 	sobrenome: 'Pessoa',
// 	idade: 21,
// 	livrosFavoritos: [
// 	  {
// 		titulo: 'O Pior Dia de Todos',
// 		autor: 'Daniela Kopsch',
// 		editora: 'Tordesilhas',
// 	  },
// 		{
// 		  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
// 		  autor: 'JK Rowling',
// 		  editor: 'Rocco',
// 		},
// 	],
//   };
// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');