//exercicio 1
const fatorial = n =>{
	
if(n > 1){
	return n * fatorial(n -1)
}
return n
}
 console.log(fatorial(5));

 //recursiva
 const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

//exercicio 2
let longestWord= 'Antônio foi no banheiro e não sabemos o que aconteceu'; // retorna 'aconteceu'
let palavras = longestWord.split(" ");
for (word of palavras){
	bigFor ="";
	if(word.trim().length > bigFor.length){
		bigFor = word.trim();
	}
}
console.log(bigFor);

//exercicio 4

let soma = (string) => {
	
	let minhaFrase = `trybe ${string} aqui!`
	console.log(minhaFrase);
}
soma("bebeto");

//funcao 2 


function trybe () {
	const skills = ["js", "html"];
		let minhaSkills = `${skills[0]}  ${skills[1]}`;
		let minhaFrase = `Tryber x aqui!;
		Minhas cinco principais habilidades são: ${minhaSkills} #goTrybe.`;
		return minhaFrase;
	

}
console.log(trybe());
