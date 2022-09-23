const lesson1 = {
	materia: 'Matemática',
	numeroEstudantes: 20,
	professor: 'Maria Clara',
	turno: 'manhã',
  };
  
  const lesson2 = {
	materia: 'História',
	numeroEstudantes: 20,
	professor: 'Carlos',
  };
  
  const lesson3 = {
	materia: 'Matemática',
	numeroEstudantes: 10,
	professor: 'Maria Clara',
	turno: 'noite',
  };
  const addNewKey = (obj, key, value) => {
	obj[key] = value;
  };
  
  addNewKey(lesson2, 'turno', 'noite');
  //EXERCICIO @
// exercicio 2 errado
//   const verificarChaves = (obj) =>{
// 	  for(let i = 0; i < obj.length ;i += 1){
// 		  let arr = [];
// 		  arr.push(Object.keys(obj));
// 		  console.log(arr);
// 	  }
//   }
//   verificarChaves(lesson3);
const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson1));

//EXERCICIO 3

//exercicio 3 errado
// const  sizeObj = (obj) => {
// 	for(let i = 0;i < obj.length; i += 1){
// 		let arr = [];
// 		arr.push(obj[i]);
// 	}
// }
// console.log(sizeObj(lesson3));
const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

//EXERCICIO 4
const listValues = (obj) =>  Object.values(obj);
console.log(listValues(lesson3));

//EXERCICIO 5

//  exercicio 5 da forma errado
//  const allLessons = {};
// const allLessons1 = (obj) => Object.assign(obj,lesson1,lesson2,lesson3);
// console.log(allLessons(allLessons));
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// EXERCICIO 6

// exercicio 6 "DA CERTO SO QUE ERA USANDO O CONST DO EXE. 5"
// let soma1 =lesson1.numeroEstudantes;
// let soma2 = lesson2.numeroEstudantes;
// let soma3 = lesson3.numeroEstudantes;
// let allSoma = soma1 + soma2 + soma3;
// const somaOfAllLessons = `O total de estudantes na aula e: ${allSoma} `;
// console.log(somaOfAllLessons);
const getNumberOfStudents = (obj) => {
	let total = 0;
	const array = Object.keys(obj);
	for (index in array) {
	  total += obj[array[index]].numeroEstudantes;
	}
	return total;
  };
  console.log(getNumberOfStudents(allLessons));

//EXERCICIO 7
// exericicio 7 jeito errado
// const getValueByNumber = (obj,position) =>{
// 	objet = Object.values(obj);
// 	for(index in objet){
// 		index = position ;
// 	}
// }
// console.log(getValueByNumber(lesson1, 0));
// // Output: 'Matématica'
const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));

//EXERCICIO 8
//exercicio 8 jeito errado
// const verifyPair = (obj, key, value) =>{
// 	obj[key] = value;
// 	if(obj === true){

// 	}
// }
const verifyPair = (obj, key, value) => {
const arr = Object.entries(obj);
let isEqual= false;
for(let index in arr){
	if(arr[index][0] === key && arr[index][1] === value){
		isEqual = true;
	}
	return isEqual;
}
}
  console.log(verifyPair(lesson2,'professor','Carlos'));