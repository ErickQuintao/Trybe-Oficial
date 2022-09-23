 //exercicio 1
 const testingScope = escopo => { 
	if (escopo === true) {
	  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
	  let fScope = ' ótimo, fui utilizada no escopo !';
	  console.log(`Hoje ${ifScope} ${fScope}`);

	} else {
	  let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
	  console.log(elseScope);
	}
	let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
	console.log(`${ifScope}  o que estou fazendo aqui ?: O`); // Se necessário esta linha pode ser removida.
  
 }
  testingScope(true);

  //exercicio 2

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  oddsAndEvens.sort();

  // Seu código aqui.

  console.log(`Os numeros ${oddsAndEvens} se encontram ordernados de forma crescente`); // será necessário alterar essa linha 😉