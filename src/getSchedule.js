const data = require('../data/zoo_data');

const { hours, species } = data;

function availableAnimals(obj) {
  const myObj = obj;
  const keys = Object.keys(myObj);
  species.forEach((specie) => {
    keys.forEach((key) => {
      if (specie.availability.find((item) => item === key)) {
        myObj[key].exhibition.push(specie.name);
      }
    });
  });
  myObj.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return myObj;
}

function createSchedule() {
  const newObj = {};
  const keys = Object.keys(hours);
  const values = Object.values(hours);
  keys.forEach((key, index) => {
    newObj[key] = {
      officeHour: `Open from ${values[index].open}am until ${values[index].close}pm`,
      exhibition: [],
    };
  });
  return availableAnimals(newObj);
}

const days = Object.keys(hours);
const animals = species.map((specie) => specie.name);

function getSchedule(scheduleTarget) {
  const schedule = createSchedule();
  if (!scheduleTarget) return schedule;
  if (days.some((day) => scheduleTarget === day)) {
    return { [scheduleTarget]: schedule[scheduleTarget] };
  }
  if (animals.some((animal) => scheduleTarget === animal)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  return schedule;
}

console.log(getSchedule('lions'));

module.exports = getSchedule;
