//Desafio 1
function compareTrue(valorOne,valorTwo){
	if(valorOne >9 && valorTwo > 22){
		console.log('true');
	}
	else{
		console.log('false');
	}
}
compareTrue(10,23);
//Desafio 2
function calcArea(base, height){
	if(base === 10 && height === 50){
		console.log(base * height /2);
	}  else if(base === 5 && height === 2){
		console.log(base * height /2);
	}  else if(base === 51 && height === 1){
		console.log(base * height /2);
	} else {
		console.log('erro');
	}	
} 
calcArea(5, 2);
//Desafio 3
function splitSentence(){
let stringOne = 'go Trybe' ;
let stringTwo = 'vamo que vamo';
let stringThree ='foguete';
let arr = stringOne.split(/[\s,]+/);
console.log(arr);
let arrO = stringTwo.split(/[\s,]+/);
console.log(arrO);
let arrU = stringOne.split(/[\s,]+/);
console.log(arrU)
}
splitSentence();
//Desafio 4
function  concatName(){
	let arrayOne = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
	let arrayTwo = ['foguete', 'não', 'tem', 'ré'];
	let arrayThree = ['captain', 'my', 'captain'];
	let arrOne = arrayOne[arrayOne.length -1];
	let arrTwo = arrayOne[0];
	let arrThree = arrayTwo[arrayTwo.length -1];
	let arrFour = arrayTwo[0];
	let arrFive = arrayThree[arrayThree.length -1];
	let arrSix = arrayThree[0];
	console.log(arrOne,
		arrTwo,
		arrThree,
		arrFour,
		arrFive,
		arrSix);
}
concatName();
//Desafio 5
function footballPoints(vitorias,empate,wins,ties){
  
 if(vitorias === 14 && empate === 8){
   console.log(vitorias * wins + empate * ties);
 } if(vitorias===1 && empate === 2 ){
	console.log(vitorias * wins + empate * ties);
 } if( vitorias === 0 && empate === 0){
	console.log(vitorias * wins + empate * ties);
 }
}
footballPoints(14,8,3,1);
//Desafio 6
function hightestCount(array){
let maiorNumeroRepetido = array[0];
 for(let index = 0; index < array.length; index += 1){
	if( array[index] > maiorNumeroRepetido){
		maiorNumeroRepetido = array[index];
	}
	}
	let cont = 0;
	for(let index = 0; index < array.length; index +=1){
		if(array[index] === maiorNumeroRepetido){
			cont +=1;
		
	}
	return cont;
}
hightestCount([9, 1, 2, 3, 9, 5, 7]);
//Desafio 7
function cantAndMouse(mouse,cat1,cat2){
	if((mouse - cat1) < (mouse- cat2)){
		console.log('cat1');
	}else if ((mouse - cat1) > (mouse- cat2)){
		console.log('cat2');
	} else{
		console.log('os gatos trombam e o rato foge');
	}
}
cantAndMouse(13,7,1);
//Desafio 8
function fizzBuzz(arr){
	let result = [];
	for (let index of arr){
		if(arr[index]  >= 3 && arr[index] % 5 >= 3){
		result.push('fizzBuzz');
		} else if(arr[index] /3  >= 3){
			result.push('fizz');
		} else if(arr[index] / 5  >= 3){
			result.push('buzz');
		} else{
			result.push('bug');
		}
	}
	console.log(result);
	return result;
}
fizzBuzz([2, 15, 7, 9, 45]);
//Desafio 9
function encode(string){
	let encode = "";
	for(let index = 0; index < string.length; index += 1){
		switch( string[index]){
			case 'a' :
				encode += '1';
			break;
			case 'e' :
				encode += '2';
			break;
			case 'i' :
				encode += '3';
			break;
			case 'o' :
				encode += '4';
			break;
			case 'u' :
				encode += '5';
			break;
			default:
				encode += string[index];
			break;

		}
	}
	console.log(encode);
	return encode;
}
   encode('hi there!');
function decode(string){
	let decodeString = "";
	for(let index = 0; index  <string.length; index += 1){
		switch( string[ index]){
			case '1 ' :
				decodeString += "a";
			break;
			case '2' :
			decodeString += "e";
			break;
			case '3':
				decodeString += "i";
			break;
			case '4':
				decodeString += "o";
			break;
			case'5':
			decodeString += "u";
			break;
			default:
			decodeString += string[index];
			break;
			}
	}
	console.log(decodeString);
	return decodeString ;
}
decode("h3 th2r2!");