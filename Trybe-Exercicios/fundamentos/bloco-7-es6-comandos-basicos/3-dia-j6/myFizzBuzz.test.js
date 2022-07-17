const myFizzBuzz = require('./myFizzBuzz.js');

 describe('testa a função myFizzBuzz', () =>{
	 it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado',() =>{
		 expect(myFizzBuzz(15).toBe('fizzBuzz'));
		 expect(myFizzBuzz(9)).toBe('fizz');
		 expect(myFizzBuzz(10)).toBe('buzz');
		 expect(myFizzBuzz(1)).toBe(1);
		 expect(myFizzBuzz('7')).toBe(false);
	 })
 })