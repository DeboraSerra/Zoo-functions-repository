const data = require('../data/zoo_data');

const { species } = data;
console.log(species[0]);

function countAnimals(animal) {
  if (!animal) {
    const newObj = {};
    species.map((specie) => {
      newObj[specie.name] = specie.residents.length;
      return newObj;
    });
    return newObj;
  }
  if (!animal.sex) {
    const findSpecie = species
      .find((specie) => specie.name === animal.specie);
    return findSpecie.residents.length;
  }
  const findSpecieBySex = species
    .find((specie) => specie.name === animal.specie).residents
    .filter((item) => item.sex === animal.sex);
  return findSpecieBySex.length;
}

module.exports = countAnimals;
