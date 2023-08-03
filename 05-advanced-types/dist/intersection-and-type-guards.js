"use strict";
const e1 = {
    name: 'Rikus',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
    //Type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
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
    loadCargo(amount) {
        console.log('Loading cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
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
