function Logger1(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger1
class Person1 {
  name = 'Rikus';

  constructor() {
    console.log('Creating peroject');
  }
}

const person1 = new Person1();

console.log(person1);
