// const hydrate = (string) =>{
// 	if(string === '1'){
// 		console.log('voce deve beber  um copo de agua');
// 	}
// 	if(string === '2'){
// 		console.log('voce deve beber  dois copos de agua');
// 	}
// 	if(string === '3'){
// 		console.log('voce deve beber   trescopos de agua');
// 	}
// 	if(string === '4'){
// 		console.log('voce deve beber   quatro copos de agua');
// 	}
// 	if(string === '5'){
// 		console.log('voce deve beber   cinco copos de agua');
// 	}
// }
// hydrate.js
const hydrate = (string) => {
	const splitString = string.split('');
	let glassesOfWater = 0;
  
	for (let index = 0; index < splitString.length; index += 1) {
	  const parsedCharacter = parseInt(splitString[index]);
  
	  if (parsedCharacter) {
		glassesOfWater += parsedCharacter;
	  }
	}
  
	let glass = 'copo';
  
	if (glassesOfWater > 1) {
	  glass = 'copos';
	}
  
	return `${glassesOfWater} ${glass} de água`;
  };
  
  module.exports = hydrate;