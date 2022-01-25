const data = require('../data/zoo_data');

const { species } = data;

function sortedAnimalsBySex(sex) {
  const newObj = {};
  species.map((specie) => {
    if (!newObj[specie.location]) {
      newObj[specie.location] = [{
        [specie.name]: specie.residents
          .filter((item) => item.sex === sex)
          .map((animal) => animal.name).sort(),
      }];
    } else {
      newObj[specie.location].push({
        [specie.name]: specie.residents
          .filter((item) => item.sex === sex)
          .map((animal) => animal.name).sort(),
      });
    }
    return true;
  });
  return newObj;
}

function mapOfAll() {
  const newObj = {};
  species.map((specie) => {
    if (!newObj[specie.location]) {
      newObj[specie.location] = [specie.name];
    } else {
      newObj[specie.location].push(specie.name);
    }
    return true;
  });
  return newObj;
}

function animalsWithNames() {
  const newObj = {};
  species.map((specie) => {
    if (!newObj[specie.location]) {
      newObj[specie.location] = [{
        [specie.name]: specie.residents.map((item) => item.name),
      }];
    } else {
      newObj[specie.location].push({
        [specie.name]: specie.residents.map((item) => item.name),
      });
    }
    return true;
  });
  return newObj;
}

function sortedAnimalsWithName(options) {
  if (options.sex) return sortedAnimalsBySex(options.sex);
  const newObj = {};
  species.map((specie) => {
    if (!newObj[specie.location]) {
      newObj[specie.location] = [{
        [specie.name]: specie.residents.map((item) => item.name).sort(),
      }];
    } else {
      newObj[specie.location].push({
        [specie.name]: specie.residents.map((item) => item.name).sort(),
      });
    }
    return true;
  });
  return newObj;
}

function animalsBySex(options) {
  if (options.sorted) return sortedAnimalsBySex(options.sex);
  const newObj = {};
  species.map((specie) => {
    if (!newObj[specie.location]) {
      newObj[specie.location] = [{
        [specie.name]: specie.residents
          .filter((item) => item.sex === options.sex).map((animal) => animal.name),
      }];
    } else {
      newObj[specie.location].push({
        [specie.name]: specie.residents
          .filter((item) => item.sex === options.sex).map((animal) => animal.name),
      });
    }
    return true;
  });
  return newObj;
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) return mapOfAll();
  const { sex, sorted } = options;
  if (sorted) return sortedAnimalsWithName(options);
  if (sex) return animalsBySex(options);
  return animalsWithNames();
}

module.exports = getAnimalMap;
