// const custo = 100;
// const valor = 300;
// const imposto = 20;
// const custototal =  custo + imposto;
// console.log("custo total unidade e:" + custototal);
// console.log("valor por unidade e:" + valor);
// console.log('valor da vendas brutas sao:' + (300 * 1000));
// console.log('custototal da dos produtos sao:' + 100 * 1000);
// console.log('o lucro total e :' + (valor - custototal) *1000);

const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};
