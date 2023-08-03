"use strict";
// Built in generics
const names = ['Rikus', 'Maxi']; // string[]
// names[0].split('')
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000);
});
promise.then((data) => {
    data.split(' '); // knows it should be a string
});
// Own generic function
function merge(objA, objB) {
    // T & U can be anything
    return Object.assign(objA, objB);
}
console.log(merge({ name: 'Rikus' }, { age: 28 }));
const mergedObj = merge({ name: 'Rikus' }, { age: 28 });
console.log(mergedObj.age);
const mergedObj2 = merge({ name: 'Rikus', hobbies: ['Sport'] }, { age: 28 });
console.log(mergedObj2.hobbies);
// Working with type constraints
function merge2(objA, objB) {
    // T & U should be an object
    return Object.assign(objA, objB);
}
// const mergedObj3 = merge2({ name: 'Rikus' }, 28); // does not work before U should be an object
const mergedObj3 = merge2({ name: 'Rikus' }, { age: 28 });
console.log(mergedObj3.age);
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi There!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
// typeof constraint
// make sure object has the key
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'Rikus' }, 'name'));
