const data = require('../data/zoo_data');

function countEntrants(entrants) {
// 	const entrants = [
// 		{ name: 'Lara Carvalho', age: 5 },
// 		{ name: 'Frederico Moreira', age: 5 },
// 		{ name: 'Pedro Henrique Carvalho', age: 5 },
// 		{ name: 'Maria Costa', age: 18 },
// 		{ name: 'Núbia Souza', age: 18 },
// 		{ name: 'Carlos Nogueira', age: 50 },
// 	  ];
// 	 let obj = {child:,
// 				adult:,
// 				senior:
// 			};
//   entrants.map((element) => {
// 		if(element.age =< 18){
// 			obj.child.push(element);
// 		} if else (element.age >= 18 && element.age =< 50){
// 				obj.adult.push(element);
// 		}
// 		if else (element.age >= 50){
// 			obj.adult.push(element);
// 		}
//   });
const child = entrants.filter((element) => element.age < 18).length;
const adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
const senior = entrants.filter((element) => element.age >= 50).length;
const objctEtario = {child, adult, senior};
return objctEtario;
};

function calculaPreço (obj, objPreço) {
	const totalKids = obj.child * objPreço.child;
	const totalAdult = obj.adult * objPreço.adult;
	const totalOld = obj.senior * objPreço.senior;
	return totalKids + totalAdult + totalOld;
};

function calculateEntry(entrants) {
  // seu código aqui
  if(entrants === 0 || Objects.keys(entrants).length === 0) {
	  return 0;
  }

const a = countEntrants(entrants);
return calculaPreço(a, data.prices);
}

module.exports = { calculateEntry, countEntrants };
