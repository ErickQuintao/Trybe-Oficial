const data = require('../data/zoo_data');
const { species } = data;
const { employees } = data;
function getOldestFromFirstSpecies(id) {
//  id.find((element) => element.responsibleFor);
//  return [name, sex, age];
const idEmployees = employees.find((element) => element.id === id);
const idAnimal = idEmployees.responsibleFor.find((element) => element[0]);
const chosenAnimal = animal[0].residents;
const olderAnimal = chosenAnimal.sort((a, b) => a.age - b.age);
const getAnimal = olderAnimal[olderAnimal.length - 1];
  return Object.values(getAnimal);
}

module.exports = getOldestFromFirstSpecies;
