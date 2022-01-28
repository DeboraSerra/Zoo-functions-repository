const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const newObj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  newObj.child = entrants
    .filter((item) => item.age < 18).length;
  newObj.adult = entrants
    .filter((item) => item.age >= 18 && item.age < 50).length;
  newObj.senior = entrants
    .filter((item) => item.age >= 50).length;
  return newObj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entries = countEntrants(entrants);
  let total = 0;
  total += entries.child * prices.child;
  total += entries.adult * prices.adult;
  total += entries.senior * prices.senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
