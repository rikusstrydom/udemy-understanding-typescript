"use strict";
// Type Casting - either syntax's is fine
// ! tells typescript the element will not be null
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input');
userInputElement.value = 'Hello';
const userInputElement2 = document.getElementById('user-input');
if (userInputElement2) {
    userInputElement2.value = 'Hello';
}
