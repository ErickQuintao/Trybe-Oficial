const books = [
	{
	  id: 1,
	  name: 'As Crônicas de Gelo e Fogo',
	  genre: 'Fantasia',
	  author: {
		name: 'George R. R. Martin',
		birthYear: 1948,
	  },
	  releaseYear: 1991,
	},
	{
	  id: 2,
	  name: 'O Senhor dos Anéis',
	  genre: 'Fantasia',
	  author: {
		name: 'J. R. R. Tolkien',
		birthYear: 1892,
	  },
	  releaseYear: 1954,
	},
	{
	  id: 3,
	  name: 'Fundação',
	  genre: 'Ficção Científica',
	  author: {
		name: 'Isaac Asimov',
		birthYear: 1920,
	  },
	  releaseYear: 1951,
	},
	{
	  id: 4,
	  name: 'Duna',
	  genre: 'Ficção Científica',
	  author: {
		name: 'Frank Herbert',
		birthYear: 1920,
	  },
	  releaseYear: 1965,
	},
	{
	  id: 5,
	  name: 'A Coisa',
	  genre: 'Terror',
	  author: {
		name: 'Stephen King',
		birthYear: 1947,
	  },
	  releaseYear: 1986,
	},
	{
	  id: 6,
	  name: 'O Chamado de Cthulhu',
	  genre: 'Terror',
	  author: {
		name: 'H. P. Lovecraft',
		birthYear: 1890,
	  },
	  releaseYear: 1928,
	},
  ];
  //exercicio 1
//   function formatedBookNames() {
// 	// escreva seu código aqui
// 	let NOME_DO_LIVRO = books.map((book) => book.name);

// 	let GÊNERO_DO_LIVR = books.map((book) => book.genre);
// 	let NOME_DA_PESSOA_AUTORA = books.map((book) => book.author.name);
//   }
function formatedBookNames() {
	return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
  }
  //exercicio 2
//   function nameAndAge() {
// 	return books.map((book) => `${book.author.name} ${book.releaseYear}`).sort((bookA, bookB) => bookA - bookB);
//   }
function nameAndAge() {
	return books
	  .map((book) => (
		{
		  author: book.author.name,
		  age: book.releaseYear - book.author.birthYear,
		}
	  ))
	  .sort((obj1, obj2) => obj1.age - obj2.age);
  }
//exercicio 3
function fantasyOrScienceFiction() {
	return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Cientifica');
  }
//exercicio 4

// function oldBooksOrdered() {
// 	return books.filter((book) => book.releaseYear + 60 > 2020 ).sort((bookA, bookB) => bookA - bookB);
//   }
function oldBooksOrdered() {
	const currentYear = new Date().getFullYear();
	return books.filter((book) => (
	  book.releaseYear < currentYear - 60
	)).sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
  }
  //exercicio 5
  function fantasyOrScienceFictionAuthors() {
	return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Cientifica').author.name;
// 	//ou
// 	const wantedGenres = ['Fantasia', 'Ficção Científica'];
//   return books
//     .filter((book) => wantedGenres.includes(book.genre))
//     .map((book) => book.author.name).sort();
  }

//exercicio 6
function oldBooks() {
	// const currentYear = new Date().getFullYear();
	// return books.filter((book) => (
	//   book.releaseYear < currentYear - 60
	// )).sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear).name;
	const currentYear = new Date().getFullYear();
	return books
	  .filter((book) => currentYear - book.releaseYear > 60)
	  .map((book) => book.name);
  }
//exercicio 7

function authorWith3DotsOnName() {
	return books.find((book) => book.name[1] === '.' && book.name[4] === '.' && book.name[7] === '.');
  }
  