const myRemove = require('./myremove.js');
//Exercicio 2
//exercicio 2 jeito errado 
	// describe('testa a função myRemove',() =>{
	// 	const array = ([1, 2, 3, 4]);
	// 	it('deve retorna o array',() =>{
	// 		const array = ([1, 2, 3, 4]);
	// 		expect([1, 2, 3, 4]).toEqual(myRemove(array,3));
	// 	});
	// 	it('nao deve retornar o array',()=>{
	// 		expect([1, 2, 3, 4]).not.toEqual(myRemove(array,3));
	// 	});
	// 	it('deve retorna o array',() =>{
	// 		const array = ([1, 2, 3, 4]);
	// 		expect([1, 2, 3, 4]).toEqual(myRemove(array,5));
	// 	});
	// })
	//o erro e que eu em vez de colocar o array no .toEqual eu coloquei no expect;
	describe('testa a função myRemove', () => {
		it('deve retornar um array removendo o item correto', () => {
		  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
		  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
		  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
		});
	  });

