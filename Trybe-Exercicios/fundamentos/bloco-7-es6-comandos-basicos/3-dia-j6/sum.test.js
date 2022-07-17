const sum = require('./sum.js');
//exercicio 1 do jeito errado
// describe('Execicio 1', () => {
// 	it('a função sum recebe 4,5 e retornar 9', () => {
// 		expect(sum(4,5)).toBe(9);
// 	});
// 	it('a função sum recebe 0,0 e retornar 0', () =>{
// 		expect(sum(0,0)).toBe(0);
// 	});
// 	it('a função sum recebe 4 e "5" e retornar erro', () =>{
// 		expect(sum(4,"5")).toEqual
// 	})

// })
//Exercicio 1
describe('testa a função sum', () => {
  it('deve retornar o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('deve disparar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
})


