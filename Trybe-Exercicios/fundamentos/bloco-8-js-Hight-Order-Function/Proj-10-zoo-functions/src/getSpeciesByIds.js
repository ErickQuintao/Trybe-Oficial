const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// function getSpeciesByIds(...ids) {
//   if(ids === 0){
// 	  return [];
//   }
//   species.find((animal) => animal === ids);
//   };
function getSpeciesByIds(...ids) {
	// seu código aqui
	const { species } = data;
	const array = [];
	species.forEach((element) => {
	  const { id } = element;
	  if (id === ids[0] || id === ids[1]) {
		array.push(element);
	  }
	});
	return array;
  }
module.exports = getSpeciesByIds;
