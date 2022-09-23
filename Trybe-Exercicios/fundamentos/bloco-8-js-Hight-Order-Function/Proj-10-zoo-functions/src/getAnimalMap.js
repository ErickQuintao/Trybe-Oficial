const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const sortAnimals = (name, sort) => {
	if(sort === true) {
		return name.sort();
	}
	return name;
};
const sortSex = (array, sex) => {
	if(sex === undefined || array.sex === sex) {
		return array.name;
	}
};
const listAnimlsFolder = ()=> {
	const objectRegions = {
		 NE: [],
		 NW: [],
		 SE: [],
		 SW: [], 
	}
	species.forEach((element) => { objectRegions[element.location].push(element.name); });
	return objectRegions;
};

function getAnimalMap(options) {
  // seu código aqui
 const objectRegions ={ NE: [], NW: [], SE: [], SW: [], };
 if(!options || !options.includesNames){
	 return listAnimlsFolder();
 }
 species.forEach((itemExterno) => {
	 let nomeOfanimals = [];
	 itemExterno.residents.forEach((itemInterno) => {
		 const listOfSex = sortSex(itemInterno, options.sex);
		 if(listOfSex !== undefined) {
			 nomeOfanimals.push(sortSex(itemInterno, options.sex));
		 }
	 })
	 nomeOfanimals = sortAnimals(nomeOfanimals, options.sorted);
	 const nameType = { [itemExterno.name]: nomeOfanimals};
	 objectRegions[itemExterno.location].push(nameType);
 });
 return objectRegions;
};

module.exports = getAnimalMap;
