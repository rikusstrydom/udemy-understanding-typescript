function WithTemplate2(template: string, hookId: string) {
  console.log('TEMPALTE FACTORY');
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super();
        console.log('Rendering template');
        const hookElement = document.getElementById('app');
        if (hookElement) {
          hookElement.innerHTML = template;
          hookElement.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

@WithTemplate2('<h1>My Person Object</h1>', 'app')
class Person2 {
  name = 'Rikus';

  constructor() {
    console.log('Creating person object');
  }
}

const person2 = new Person2();

console.log(person2);
