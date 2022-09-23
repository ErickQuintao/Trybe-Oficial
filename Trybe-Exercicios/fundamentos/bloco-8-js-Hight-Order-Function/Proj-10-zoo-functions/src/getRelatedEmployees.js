const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const { employees} = data;
function isManager(id) {
//   employees.filter((element) => {
//   if(element.managers === []){
// 	  return false;
//   }
//   return true;
// });
const listManagers = [];
employees.forEach((element) => element.managers.forEach((ids) => listManagers.push(ids)));
return listManagers.some((element) => element === id);
}
//Parte 1: primeiro eu criei um array vazio,depois eu mandei procurar todos os gerentes e depois eu mandei
//ele pegar todos os ids e mandar no array vazio e no final e usei a .some para ver se algum
//elemento do array era igual o id(se era gerente ou não).

function getRelatedEmployees(managerId) {
//   isManager().find((element) => element.managers === id );
//   return [`${firstName} ${lastName}`];
const listPeopleResponsibleFor =[];
if(isManager(managerId) === true) {
	employees.forEach((element) => {
		if(element.managers.includes(managerId) === true) {
			listPeopleResponsibleFor.push(`${element.firstName} ${element.lastName}`);
		}
	});
}else  {
		throw new Error("o id inserido não e de uma pessoa colaborado gerente!");
	}
return listPeopleResponsibleFor;
}
//na parte 2: eu criei outro array vazio e perguntei usando a funcao anterior se o meu id do
//parametro era true e se sim no array employees mandei procura element ai criei um if e else
//if era para testar denovo e se sim retornava o objeto desejado se nao lançava o erro,e retorna
// o array.

module.exports = { isManager, getRelatedEmployees };
