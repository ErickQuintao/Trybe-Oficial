const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const countAnimals = ()=> {
// function everyAnimal () {
// 	species.forEach((element) => element.every((element) => element.name && element.resident.length));
// }
// function animalSelecter (animal) {
// species.forEach((element) => element.name === animal).resident.length;
// }
// function animalSelecterSex (animal,sex){
// 	species.forEach((element) =>  element.name === animal && element.resident.sex === 'female').resident.length;
// }
// }
 const objectQTDA = () => {
	 const animais = species.map((element) => element.name);
	 const qTDSpecies = {};
	const qTD = species.map((element) => element.residents.length);
	animais.forEach((element, i) => {
		qTDSpecies[element] = qTD[i];
	});
	return qTDSpecies;
 }
 const pAnimalSexo = (nome,sex) => {
	 const animalType = data.species.find((element) => element.name === nome.specie);
	 const animalSexo = animalType.residents.filter((element) => element.sex === sex.sex).length;
 return animalSexo;
	};
	const pegarAnimalEspecifico = (obj) => {
		const animalType = data.species.find((element) => element.name === obj.specie).residents.length;
		return animalType;
	}
	function countAnimals (animal) {
		if(typeof animal === 'object' && Object.keys(animal).length === 1) {
			return pegarAnimalEspecifico(animal);
		}
		if(typeof animal === 'object' && Object.keys(animal).length === 2){
			return pegarAnimalEspecifico(animal);
		}
		return objectQTDA();
	}

module.exports = countAnimals;
