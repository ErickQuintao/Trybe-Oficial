// //exercicio 1
// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A === 1
// console.log(planetDistanceFromSun(venus)); // B === 2
// console.log(planetDistanceFromSun(jupiter)); // C === 3

// // exercicio 2
// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // c
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // b


// //exercicio 3
// const getPlanet = () => {
// 	const mars = {
// 	  name: "Mars",
// 	  distanceFromSun: {
// 		value: 227900000,
// 		measurementUnit: "kilometers",
// 	  },
// 	};
// 	console.log("Returned planet: ", mars);
//   };
  
//   setTimeout(() =>  console.log(getPlanet()),4000); // imprime Marte depois de 4 segundos


// //exercicio 4
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo

// sendMarsTemperature(() => console.log(getMarsTemperature()),messageDelay); // imprime "Mars temperature is: 20 degree Celsius", por exemplo


// //exercicio 5
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// // definição da função sendMarsTemperature...
// // toFahrenheit(getMarsTemperature);
// // sendMarsTemperature(temperatureInFahrenheit(toFahrenheit)); // imprime "It is currently 47ºF at Mars", por exemplo
// // sendMarsTemperature(greet(getMarsTemperature)); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
// const sendMarsTemperature = (onSuccess) => {
// 	const currentTemperature = getMarsTemperature();
// 	setTimeout(() => onSuccess(currentTemperature), messageDelay());
//   };
  
//   sendMarsTemperature(temperatureInFahrenheit);
//   sendMarsTemperature(greet);


// //exercicio 6
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);

// // definição da função sendMarsTemperature...
// const sendMarsTemperature = (onSuccess, onError) => {
//   const currentTemperature = getMarsTemperature();
//   const messageSuccessfullySent = Math.random() <= 0.6;
//   setTimeout(() => {
//       if(messageSuccessfullySent) onSuccess(currentTemperature)
//       else onError('Robot is busy');
//   }, messageDelay());
// }

// sendMarsTemperature(temperatureInFahrenheit, handleError);
// sendMarsTemperature(greet, handleError);


// //exercicio 7
// const uppercase = (str, callback) => {
// 	setTimeout(() => {
// 	  callback(str.toUpperCase());
// 	}, 500);
//   };
//   it('uppercase "test" to equal "TEST"', (done) => {
// 	uppercase('test', (str) => {
// 	  try {
// 		expect(str).toBe('TEST');
// 		done();
// 	  } catch (error) {
// 		done(error);
// 	  }
// 	});
//   });


// //exercicio 8
// const pokemons = [
// 	{
// 	  name: 'Bulbasaur',
// 	  type: 'Grass',
// 	  ability: 'Razor Leaf',
// 	},
// 	{
// 	  name: 'Charmander',
// 	  type: 'Fire',
// 	  ability: 'Ember',
// 	},
// 	{
// 	  name: 'Squirtle',
// 	  type: 'Water',
// 	  ability: 'Water Gun',
// 	},
//   ];
  
//   function getPokemonDetails(filter, callback) {
// 	setTimeout(() => {
// 	  if (pokemons.find(filter) === undefined) {
// 		return callback(new Error('Não temos esse pokémon para você :('), null);
// 	  }
// 	  const pokemon = pokemons.find(filter);
  
// 	  const { name, type, ability } = pokemon;
  
// 	  const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
  
// 	  callback(null, messageFromProfOak);
// 	}, 2000);
//   }
  
//   getPokemonDetails(
// 	(pokemon) => pokemon.name === 'Bulbasaur',
// 	(error, message) => {
// 	  if (error) {
// 		console.log(error);
// 	  } else {
// 		console.log(message);
// 	  }
// 	}
//   );
//   module.exports = {
// 	getPokemonDetails,
//   };


// //exercicio 10 
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });
// - beforeEach // antes de cada teste
// - test // o teste
// - afterEach // depois de cada teste
// - beforeEach // antes de cada teste
// - beforeEach // antes de cada teste dentro do describe
// - test // o teste dentro do describe
// - afterEach // depois de cada teste dentro do describe
// - afterEach // depois de cada teste



