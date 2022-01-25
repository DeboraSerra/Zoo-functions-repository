const data = require('../data/zoo_data');
const { species } = data;

function getSpeciesByIds(...ids) {
  const newArray = ids.map((id) => {
    return species.find((specie) => specie.id === id);
  });
  return newArray;
}

module.exports = getSpeciesByIds;
