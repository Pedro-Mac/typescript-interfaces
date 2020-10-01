class Department {
  // private readonly id: string;
  // private name: string; //default is 'public'
  private employees: string[] = []; // being private makes it accessible only withing the class

  //Shorthand Initialization
  constructor(private readonly id: string, public name: string) {
    // this.id = id
    // this.name = n;
  }

  describe(this: Department) {
    //this.id = 'd2' --> It won't work becuse this.id is READ ONLY
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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

const itDepartment = new ITDepartment('d2', ['Lola']);
itDepartment.addEmployee('Derrick');
itDepartment.addEmployee('James');
itDepartment.addEmployee('James');
itDepartment.printEmployeeInformation();
itDepartment.describe();

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
