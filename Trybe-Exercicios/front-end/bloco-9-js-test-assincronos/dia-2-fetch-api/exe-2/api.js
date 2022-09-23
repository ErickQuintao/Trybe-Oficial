// function append (data){
// 	const ul = document.querySelector('ul');
// 	const divNome = document.createElement('div');
// 	const divValor = document.createElement('div');
// 	divNome.innerText = data.name;
// 	divValor.innerText = data.valor;
// 	const li = document.createElement('li');
// 	li.append(divNome);
// 	li.appendChild(divValor);
// 	ul.appendChild(li);
// };
// function api (){
// 	fetch('https://api.coincap.io/v2/assets')
// 	.then((response) => response.json())
// 	.then((obj) => {
// 			append({
// 				name: obj.name,
// 				valor: obj.priceUsd,
// 			});
// 	});
// }
// window.onload = api;
// api.js
const fetch = require('node-fetch');

// api.js
// api.js
// api.js
const fetchCoins = async () => {
	const url = 'https://api.coincap.io/v2/assets';
  
	const coins = await fetch(url)
	  .then((response) => response.json())
	  .then((data) => data.data)
	  .catch((error) => error.toString());
  
	return coins;
  };
  
  const fetchUsdCurrencies = async () => {
	const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
	const usdEndpoint = '/currencies/usd.min.json'
	const url = baseUrl.concat(usdEndpoint);
  
	const usdCurrencies = await fetch(url)
	  .then((response) => response.json())
	  .then((data) => data.usd)
	  .catch((error) => error.toString());
  
	return usdCurrencies;
  };
  
  const setCoins = async () => {
	const coins = await fetchCoins();
	const usdCurrencies = await fetchUsdCurrencies();
  
	const coinsList = document.getElementById('coins-list');
  
	coins
	  .filter((coin) => Number(coin.rank) <= 10)
	  .forEach((coin) => {
		const newLi = document.createElement('li');
		const usdPrice = Number(coin.priceUsd);
		const brlPrice = usdPrice * usdCurrencies.brl;
  
		newLi.innerText = `${coin.name} (${coin.symbol}): ${brlPrice.toFixed(2)}`;
  
		coinsList.appendChild(newLi);
	  });
  };
  
  window.onload = () => setCoins();
  