const fetch = require('node-fetch');

// const getRandomAdvice = () => {
// 	const URL = 'https://api.adviceslip.com/advice';
// 	const request = fetch(url)
// 	.then((response) => console.log(response.json()))
// 	.then((obj) => console.log(obj.slip.advice))
// 	.catch((error) => console.log(error));
// };
// getRandomAdvice();
const getRandomAdvice = async () => {
	try{
	const url = 'https://api.adviceslip.com/advice';
	const request =  await fetch(url);
	const json =  await request.json();
	const {slip} =json;
	const { id, advice} = slip;
	return advice;
	}catch(err){
		return 'always check your internet connection and your URLs.';

	}
}
getRandomAdvice();