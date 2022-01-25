const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((employee) => (
    employee.managers.find((manager) => manager === id)
  ));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const employeeList = employees.filter((employee) => (
      employee.managers.find((manager) => manager === managerId)
    ));
    return employeeList.map((item) => `${item.firstName} ${item.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
