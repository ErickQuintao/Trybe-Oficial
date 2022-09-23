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
  //execicio 1
    function authorBornIn1947() {
	return books.find((book) => book.author.birthYear === 1947).author.name;
  }
  //exercicio 2
  function smallerName() {
	let nameBook;
	// escreva aqui o seu código
  
	books.forEach((book) => {
	  if (!nameBook || book.name.length < nameBook.length) {
		nameBook = book.name;
	  }
	});
	// Variável nameBook que receberá o valor do menor nome;
	return nameBook;
  }
  //exercicio 3
  function getNamedBook() {
	// escreva seu código aqui
	return books.find((book) => book.name.length === 26 );
  }
  //exercicio 4
  function booksOrderedByReleaseYearDesc() {
	return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
  }
  //exercicio 5
  const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((people) => (
	  people.author.birthYear > 1900 && people.author.birthYear <= 2000
  ));
}
//exercicio 6
const expectedResult1 = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
//   return books.some((book) => {
// 	book.author.birthYear > 1979 || book.birthYear > 1979;
//   })
return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}
//exercicio 7
const expectedResult2 = false;

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}