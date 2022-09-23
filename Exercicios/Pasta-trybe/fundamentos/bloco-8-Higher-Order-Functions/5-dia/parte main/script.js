//exercicio spread Operator
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morando', 'uvas', 'guarana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['banana', 'maça', 'pera'];

const fruitSalad = (fruit, additional) => {
  let first =  [...specialFruit, ...additionalItens];
  return first;
};

// console.log(fruitSalad(specialFruit, additionalItens));
//exercicio object destructuring

const user = {
	name: 'Maria',
	age: 21,
	nationality: 'Brazilian',
  };
  
  const jobInfos = {
	profession: 'Software engineer',
	squad: 'Rocket Landing Logic',
	squadInitials: 'RLL',
  };
  const geral = {...user,...jobInfos};
  const {name, age, nationality, profession, squad, squadInitials} = geral;
//   console.log(`Hi, my name is ${name},I'm ${age} years old and I'm ${nationality}.I work as a ${profession} and my squad ${squadInitials}-${squad}.`);
//Default desturucting
const getNationality = ({ firstName, nationality = 'Brazillian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));
//exercicio property shorthand
const getPosition = (latitude, longitude) => ({
	latitude,
	longitude});
  
//   console.log(getPosition(-19.8157, -43.9542));
  //exercicio default
  const multiply = (number, value = 1) => {
	// Escreva aqui a sua função
	return number * value;
  };
  
//   console.log(multiply(8));