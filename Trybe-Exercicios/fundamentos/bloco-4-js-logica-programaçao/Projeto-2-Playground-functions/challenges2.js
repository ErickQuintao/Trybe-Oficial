//Desafio 10
function techList(listaDeTecnologias, name) {
	const ObjetosComTecnologias = [];
	let ObjetosComTecnologiasOrdenados = [];
  
	if (listaDeTecnologias.length === 0) {
	  return 'Vazio!';
	}
	for (let tecnologia of listaDeTecnologias) {
	  ObjetosComTecnologias.push({
		'tech': tecnologia,
		'name': name
	  })
	}
	ObjetosComTecnologiasOrdenados = [...ObjetosComTecnologias];
	ObjetosComTecnologiasOrdenados.sort(function (a, b) {
	  if (a.tech > b.tech) {
		return 1;
	  }
	  if (a.tech < b.tech) {
		return -1;
	  }
	  return 0;
	});
     console.log(ObjetosComTecnologiasOrdenados);
	return ObjetosComTecnologiasOrdenados;
  }
// Desafio 11
function generatePhoneNumber(array) {
	let n = [];
	if (array.length !== 11) {
	  return "Array com tamanho incorreto.";
	}
	for (let posicao of array) {
	  if (posicao < 0 || posicao > 9) {
		return "não é possível gerar um número de telefone com esses valores";
	  }
	}
	let contagem = {};
	for (let i in array) {
	  if (contagem[array[i]]) {
		contagem[array[i]] += 1;
	  } else {
		contagem[array[i]] = 1;
	  }
	}
	for (let numero in contagem) {
	  console.log(contagem[numero])
	  if (contagem[numero] >= 3) {
		return "não é possível gerar um número de telefone com esses valores";
	  }
	}
	n = [...array];
  
	return '(' + n[0] + n[1] + ') ' + n[2] + n[3] + n[4] + n[5] + n[6] + '-' + n[7] + n[8] + n[9] + n[10];
  }
  
  // Desafio 12
  function triangleCheck(lineA, lineB, lineC) {
	let arrayDeLados = [lineA, lineB, lineC];
	let ladoMaior = Math.max(lineA, lineB, lineC);
	let somaMenores = 0;
	let contador = 0;
	for (let lado of arrayDeLados) {
	  if (Math.abs(lado) < Math.abs(ladoMaior)) {
		somaMenores += lado;
	  } else if (Math.abs(lado) === Math.abs(ladoMaior)) {
		contador += 1;
	  }
	}
	if (somaMenores > ladoMaior || contador === 3) {
	  return true;
	} else {
	  return false;
	}
  }
  
  
  // Desafio 13
  function hydrate(string) {
	let coposDeBebidas = 0;
	let yellow =  'cachaça';
	let red ='cerveja';
	if (string === 'cachaça') {
		console.log('cerveja' + ' copo de água');
	  } else {
		console.log('');
	  }
	if(string === 'cerveja'){
		console.log('cachaça' + ' copo de água')
	} else{
		console.log('');
	
}
	}
	hydrate('cerveja');
	