"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// return will be ignored
function LogPropertyDecorator(target, propertyName) {
    console.log('Property decorator');
    console.log(target);
    console.log(propertyName);
}
//can return something
function LogAccessorDecorator(target, name, descriptor) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// can return something
function LogMethodDecorator(target, name, descriptor) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// return will be ignored
function LogParameterDecorator(target, name, position) {
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price!');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    LogPropertyDecorator
], Product.prototype, "title", void 0);
__decorate([
    LogAccessorDecorator
], Product.prototype, "price", null);
__decorate([
    LogMethodDecorator,
    __param(0, LogParameterDecorator)
], Product.prototype, "getPriceWithTax", null);
const book1 = new Product('B1', 10);
const book2 = new Product('B2', 20);
