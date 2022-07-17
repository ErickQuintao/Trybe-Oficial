const fetch = require('node-fetch');

const getRandomAdvice = () => {
	const URL = 'https://api.adviceslip.com/advice';
	const request = fetch(url)
	.then((response) => console.log(response.json()))
	.then((obj) => console.log(obj.slip.advice))
	.catch((error) => console.log(error));
};
getRandomAdvice();