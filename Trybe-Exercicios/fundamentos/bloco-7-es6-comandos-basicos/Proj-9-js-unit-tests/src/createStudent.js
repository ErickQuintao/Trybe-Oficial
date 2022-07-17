/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/
// //jeito errado que eu fiz no dia 24 de junho de 2022;
// const createStudent = (string) => {
// 	if(typeof string !== string){
// 		return undefined;
// 		}
// 	return `${string},${feedback}`;
// };
const createStudent = (nome) => {
	const objeto = {
	  name: nome,
	  feedback: () => 'Eita pessoa boa!',
   
	};
	return objeto;
   };

module.exports = createStudent;
