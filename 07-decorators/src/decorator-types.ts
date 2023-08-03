// return will be ignored
function LogPropertyDecorator(target: any, propertyName: string | symbol) {
  console.log('Property decorator');
  console.log(target);
  console.log(propertyName);
}

//can return something
function LogAccessorDecorator(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log('Accessor decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// can return something
function LogMethodDecorator(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// return will be ignored
function LogParameterDecorator(
  target: any,
  name: string | symbol,
  position: number
) {
  console.log('Parameter decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @LogPropertyDecorator
  title: string;
  private _price: number;

  @LogAccessorDecorator
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @LogMethodDecorator
  getPriceWithTax(@LogParameterDecorator tax: number) {
    return this._price * (1 + tax);
  }
}

const book1 = new Product('B1', 10);
const book2 = new Product('B2', 20);
