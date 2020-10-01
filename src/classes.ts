class Department {
  // private readonly id: string; being private makes it accessible only withing the class, inheritance can't access it
  // private name: string; //default is 'public'
  protected employees: string[] = []; // 'protected' makes it accessible from classes that inherit this class

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

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report available');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Pass a valid value');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    } else {
      this.employees.push(name);
    }
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

const itDepartment = new ITDepartment('d2', ['Lola']);
itDepartment.addEmployee('Derrick');
itDepartment.addEmployee('James');
itDepartment.addEmployee('James');
itDepartment.printEmployeeInformation();
itDepartment.describe();

const accounting = new AccountingDepartment('d1', []);

accounting.mostRecentReport = 'Year end report';
accounting.addReport('Hello world');
console.log(accounting.mostRecentReport);
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
