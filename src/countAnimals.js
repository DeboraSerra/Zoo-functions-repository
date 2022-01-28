const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const newObj = {};
    species.forEach((specie) => {
      newObj[specie.name] = specie.residents.length;
      return newObj;
    });
    return newObj;
  }
  const findSpecie = species
    .find((specie) => specie.name === animal.specie).residents;
  if (!animal.sex) {
    return findSpecie.length;
  }
  const findSpecieBySex = findSpecie
    .filter((item) => item.sex === animal.sex);
  return findSpecieBySex.length;
}

module.exports = countAnimals;
