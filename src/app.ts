class Department {
  // private readonly id: string;
  // private name: string; //default is 'public'
  private employees: string[] = []; // being private makes it accessible only withing the class

  constructor(private readonly id: string, public name: string) {
    // this creates a property with the same name
    // this.id = id
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name} `);
  }

  addEmployee(this: Department, employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');
//Add employees
accounting.addEmployee('Max');
accounting.addEmployee('Rex');

accounting.printEmployeeInformation();

accounting.describe();

// const accountingCopy = {
//   describe: accounting.describe,
//   addEmployee: () => {},
//   name: 'ABCDEF',
//   employees: []
// };

// accountingCopy.describe();
