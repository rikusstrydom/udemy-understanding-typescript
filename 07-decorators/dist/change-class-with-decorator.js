"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function WithTemplate2(template, hookId) {
    console.log('TEMPALTE FACTORY');
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...args) {
                super();
                console.log('Rendering template');
                const hookElement = document.getElementById('app');
                if (hookElement) {
                    hookElement.innerHTML = template;
                    hookElement.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
let Person2 = class Person2 {
    constructor() {
        this.name = 'Rikus';
        console.log('Creating person object');
    }
};
Person2 = __decorate([
    WithTemplate2('<h1>My Person Object</h1>', 'app')
], Person2);
const person2 = new Person2();
console.log(person2);
