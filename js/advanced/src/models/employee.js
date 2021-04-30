class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName.concat(", ", this.lastName);
  }
}

module.exports = Employee;
