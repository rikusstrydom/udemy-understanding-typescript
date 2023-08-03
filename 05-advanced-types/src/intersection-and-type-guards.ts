type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Intersection Types
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Rikus',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

// Intersection Type
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  //Type guard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);

  // Type guard to check in property exists
  if ('privileges' in emp) {
    console.log('Privileges:' + emp.privileges);
  }

  if ('startDate' in emp) {
    console.log('Start Date:' + emp.startDate);
  }
}

printEmployeeInfo(e1);
printEmployeeInfo({ name: 'Emp2', startDate: new Date() });

class Car {
  drive() {
    console.log('Driving a car...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ('loadCargo' in vehicle) {
  //   vehicle.loadCargo(1000);
  // }

  // Type guard for class
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
