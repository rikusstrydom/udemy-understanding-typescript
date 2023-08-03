// Works when installing @types npm package
import _ from 'lodash';
const array = _.shuffle([1, 2, 3, 4, 5]);
console.log(array);

// Use declare to tell typescript that the property exists
declare var GLOBAL: any;
console.log(GLOBAL);

// Class transformer
import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { Product } from './product.model';

// Javascript object to class
const productList = [
  { title: 'A Pen', price: 4.5 },
  { title: 'A Book', price: 9.99 },
];

const loadedProducts = plainToInstance(Product, productList);
console.log(loadedProducts);

// Class validation
import { validate } from 'class-validator';
const product = new Product('', -5);
validate(product).then((errors) => {
  if (errors.length > 0) {
    console.log('VALIDATION ERROR!');
    console.log(errors);
  } else {
    console.log(product.getInfo());
  }
});
