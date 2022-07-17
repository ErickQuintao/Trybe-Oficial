const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
//   const obj = {};
//   const first = species.employees;
//   first.find((element) => {
// 	  if(employeeName === firstName || employeeName === lastName){
// 		  obj.push(element);
// 	  }
//   });
//   return obj;
// }
if(!employees){
	return {};
}
const Nome = employees.find((element) => 
	element.firstName === employeeName || element.lastName === employeeName);
	return Nome;
}

module.exports = getEmployeeByName;
