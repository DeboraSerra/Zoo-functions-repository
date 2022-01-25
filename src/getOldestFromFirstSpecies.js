const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const firstAnimalId = employees
    .find((employee) => employee.id === id).responsibleFor[0];
  const firstAnimal = species
    .find((specie) => specie.id === firstAnimalId).residents
    .sort((a, b) => b.age - a.age);
  return Object.values(firstAnimal[0]);
}

module.exports = getOldestFromFirstSpecies;
