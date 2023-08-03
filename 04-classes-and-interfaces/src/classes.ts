// abstract classes can't be instantiated
abstract class Department {
  //   private id: string;
  //   private name: string;
  static year = 2020;
  protected employees: string[] = []; // allowes extended class to use this property

  // access modifiers will automatically create properties
  constructor(protected readonly id: string, public name: string) {
    // this.name = name;
  }

  // abstract functions forces classes to implement this function
  abstract describe(this: Department): void; //{
  // console.log(`This is the (${this.id}) ${this.name} department`);
  //   }

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// const accounting = new Department("D001", "Accounting");
// accounting.describe();
// accountingCopy.describe();
// accounting.addEmployee("Rikus");
// accounting.addEmployee("Maci");
// accounting.employees[2] = 'Anna';
// accounting.printEmployeeInfo();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// Inheritance
class AccountingDepartment extends Department {
  reports: string[];
  private lastReport: string = "";

  // singleton
  private static instance: AccountingDepartment;

  // getter
  public get mostRecentReport(): string {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  // setter
  public set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Invalid report");
    }
    this.addReport(value);
  }

  // private constructor stops you from calling new on it
  private constructor(id: string, reports: string[]) {
    // call super to initialize base class
    super(id, "Accounting");
    this.reports = reports;
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("D001", []);
    return this.instance;
  }

  describe(): void {
    console.log("Accounting Department ID:", this.id);
  }

  // override base class function
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  // extend class with new functions
  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }
  printReports() {
    console.log(this.reports);
  }
}
const accountingDep = AccountingDepartment.getInstance();

//will return the same instance
const accountingDep2 = AccountingDepartment.getInstance();

accountingDep.printReports();
accountingDep.addEmployee("Max");
accountingDep.addEmployee("Rikus");
// console.log(accountingDep);
accountingDep.addReport("Report 1");
// console.log(accountingDep.mostRecentReport);
accountingDep.mostRecentReport = "Report 2";
accountingDep.describe();

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    // call super to initialize base class
    super(id, "IT");
    this.admins = admins;
  }

  describe(): void {
    console.log("IT Department ID:", this.id);
  }
}

const it = new ITDepartment("D002", ["Max"]);
it.describe();
// console.log(it);

// static function and properties
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.year);
