const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = data;
const nameSpecies = (idspecies) => species.find((element) => element.id === idspecies).name;
const localSpecies = (idspecies) => species.find((element) => element.id === idspecies).location;

const getEmployeess = (employeese) => employees.find((element) => {
	if (element.id === employeese.id) return true;
	if (element.firstName === employeese.name) return true;
	if (element.lastName === employeese.name) return true;
	return false;
  });

  const dadosReturn = (objEmployee) => ({
	id: objEmployee.id,
	fullName: `${objEmployee.firstName} ${objEmployee.lastName}`,
	locations: objEmployee.responsibleFor.map((id) => localSpecies(id)),
	species: objEmployee.responsibleFor.map((id) => nameSpecies(id)),
  });

function getEmployeesCoverage(employee) {
// // 	const obj = firstName.find((element) => element.firstName === obj) ||
// //    lastName.find((element) => element.lastName === obj) ||
// //    id.find((element) => element.id === obj);

// 		const array = {
// 			`id:${id},
// 			fullName:${firstName} ${lastName},
// 			species: ${responsibleFor},
// 			locations:`
// 		}
//    const obj1 = employees.find((element) => element.firstName === obj || element.lastName === obj || element.id === id).array;
  if (!employee) {
    return employees.map((element) => dadosReturn(element));
  }
  const helpEmployess = getEmployeess(employee);
  if (!helpEmployess) {
    throw new Error('Informações inválidas');
  }
  const get = dadosReturn(helpEmployess);
  return get;
   };
   

module.exports = getEmployeesCoverage;
