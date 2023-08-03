function Logger(logString: string) {
  console.log('LOGGER FACTORY');

  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPALTE FACTORY');

  return function (constructor: any) {
    // _ when you not using the param
    console.log('Rendering template');
    const hookElement = document.getElementById('app');
    const p = new constructor();
    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector('h1')!.textContent = p.name;
    }
  };
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Rikus';

  constructor() {
    console.log('Creating person object');
  }
}

const person = new Person();

console.log(person);
