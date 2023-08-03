function Autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };
  return adjustedDescriptor;
}

class Printer {
  message = 'this works!';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', printer.showMessage);

// Javascript way to bind this keyword
// button.addEventListener('click', printer.showMessage.bind(printer));
