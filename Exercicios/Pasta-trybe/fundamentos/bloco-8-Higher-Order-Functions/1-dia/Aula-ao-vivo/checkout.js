//exemplo de callback
const carrinho = [10,20,30,60];

const desconto10porcento =(total) => {
	return total * 0.1;
}
const desconto20reais =(total) => {
	return 20;
}

const checkout = (array, callback) => {
	let total = 0;;
	for (const item of array){
		total += item;
	}
	total -= callback(total);
	return total;
}

const criarDesconto = (porcentagem) => {
	const calculaDesconto = (total) => {
		return total * porcentagem/100;
	}
	return calculaDesconto;
}
const desconto15porcento = criarDesconto(15);
const total = checkout(carrinho, desconto15porcento);
console.log(total);


