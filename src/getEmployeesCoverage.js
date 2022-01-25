const data = require('../data/zoo_data');

const { employees, species: sPecies } = data;

function getCoverage(obj) {
  const { id } = obj;
  const fullName = `${obj.firstName} ${obj.lastName}`;
  const species = [];
  const locations = [];
  obj.responsibleFor.forEach((item) => {
    const animal = sPecies.find((specie) => specie.id === item);
    species.push(animal.name);
    locations.push(animal.location);
    return true;
  });
  return { id, fullName, species, locations };
}

function getEmployeesCoverage(obj) {
  if (!obj) return employees.map((employee) => getCoverage(employee));
  const employee = employees.find((item) => item.firstName === obj.name
  || item.lastName === obj.name
  || item.id === obj.id);
  if (!employee) throw new Error('Informações inválidas');
  if (employee) return getCoverage(employee);
}

module.exports = getEmployeesCoverage;
