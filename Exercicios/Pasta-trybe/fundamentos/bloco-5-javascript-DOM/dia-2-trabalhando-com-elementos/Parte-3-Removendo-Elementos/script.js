// //criar varias elementos
// let familiaFirst =[
// 	'quintao',
// 	'turierf',
// 	'first',
// 	'second',
// 	'three'		
// ];
// let familia = document.querySelector("#primeiroFilho");
// for (let index = 0; index < familiaFirst.length; index += 1){
// 	let familiaThree = familiaFirst[index];
// 	let familiaSecond = document.createElement('p');
// 	familiaSecond.innerText = familiaThree;

// 	familia.appendChild(familiaSecond);
// }
// let ondeVoceFica = [
// 	"erick",
// 	"quintao"
// ];
// let fica = document.querySelector('#elementoOndeVoceEsta');
// for(let index = 0; index < ondeVoceFica.length; index += 1){
// 	let three = ondeVoceFica[index];
// 	let  four = document.createElement('p');
// 	four.innerText = three;
// 	fica.appendChild(four);
// }
//parte 2 do exercicio
let sonFirst = [
	"renata",
	"qui"
];
let first = document.querySelector('#primeiroFilhoDoFilho');
for(let index = 0; index < sonFirst.length; index += 1){
	let tres = sonFirst[index];
	let five= document.createElement('p');
	five.innerText = tres;
	first.appendChild(five);
}
console.log(document.querySelector('#primeiroFilhoDoFilho').nextSibling.nextSibling);

//Parte 3

let sonFirst = document.querySelectorAll("#primeiroFilhoDoFilho");
for (let index = 0;index < sonFirst.length; index += 1){
	let element = sonFirst[index];
	if(element.innerText.includes('a')){
		sonFirst.removeChild(element);
	}
}
//concluido
