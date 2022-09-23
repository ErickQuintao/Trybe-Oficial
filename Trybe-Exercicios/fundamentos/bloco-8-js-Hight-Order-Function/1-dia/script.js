//exercicio 1
// jeito errado do exercicio fiz no dia 25 de junho de 2022
// const criarCadastro = (nome) => {
// 	let criar = {` ${nome}, ${nome}@trybe.com`};
// 	return criar;
// };

// let pedro = criarCadastro('Pedro Guerra');
// let luiza = criarCadastro('Luiza Drumond');

const employeeGenerator = (fullName) => {
	const email = fullName.toLowerCase().split(' ').join('_');
	return { fullName, email: `${email}@trybe.com` };
  };
  
  const newEmployees = (callback) => {
	const employees = {
	  id1: callback('Pedro Guerra'),
	  id2: callback('Luiza Drumond'),
	  id3: callback('Carla Paiva'),
	};
	return employees;
  };
  
  console.log(newEmployees(employeeGenerator));

  //exercicio 2
const  Number = (myNumber, number) => myNumber === number;
	
	// if(callback === testNumber){
	// 	return 'Parabens voce ganhou';
	// } else {
	// 	return 'tente novamente';
	// }



  const sorteio = (myNumber, number) =>{
	let numbe = Math.floor((Math.random() * 5) + 1);
	return number(myNumber,number) ? 'Parabens voce ganhou' : 'tente novamente';
  };
  console.log(sorteio(2,Number));

  //exercicio 3
//   no dia 25 de junho de 2022 eu fiz do jeito errado o exercicio, eu fiz codigo
//   mais complexo e sem sentido;
//   const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// const testPoint = (myTest,theTest) => {
// 	let count = 0;
// 	for (let index = 0; index < theTest.length; index += 1){ 
// 	if(myTest[index] === theTest[index]){
// 		count += 1;
// 	} else if(myTest[index] !== theTest[index]){
// 		count -= 0.5;
// 	} else {}
// 	return count;
// };
// };
//   const Prova = (myTest,theTest,testPoint) => {
		
//   }
//   console.log(Prova(['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'],
// ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'],testPoint));
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

