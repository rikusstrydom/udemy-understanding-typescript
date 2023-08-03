"use strict";
// abstract classes can't be instantiated
class Department {
    // access modifiers will automatically create properties
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = []; // allowes extended class to use this property
        // this.name = name;
    }
    // console.log(`This is the (${this.id}) ${this.name} department`);
    //   }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
//   private id: string;
//   private name: string;
Department.year = 2020;
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
    // private constructor stops you from calling new on it
    constructor(id, reports) {
        // call super to initialize base class
        super(id, "Accounting");
        this.lastReport = "";
        this.reports = reports;
    }
    // getter
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    // setter
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Invalid report");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("D001", []);
        return this.instance;
    }
    describe() {
        console.log("Accounting Department ID:", this.id);
    }
    // override base class function
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    // extend class with new functions
    addReport(report) {
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
    constructor(id, admins) {
        // call super to initialize base class
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department ID:", this.id);
    }
}
const it = new ITDepartment("D002", ["Max"]);
it.describe();
// console.log(it);
// static function and properties
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.year);
