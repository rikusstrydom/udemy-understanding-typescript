"use strict";
const userName = "Rikus";
// userName = 'Nope'
let age = 28;
age = 29;
function add(a, b) {
    var result;
    result = a + b;
    return result;
}
// console.log(result);
// Will log true because isOld is available outside of the function scope
if (age > 20) {
    var isOld = true;
}
// console.log(isOld);
// Will error because isOld is only available inside the function scope
if (age > 20) {
    let isOld2 = true;
}
// console.log(isOld2);
// Arrow functions
const add2 = (a, b = 5) => {
    // Default arrg
    return a + b;
};
console.log(add2(2));
const add3 = (a, b) => a + b;
console.log(add3(2, 5));
const printOutput = (output) => {
    console.log(output);
};
console.log(printOutput("test"));
const printOutput2 = (output) => console.log(output);
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => console.log(event));
}
//Spread operator
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    name: "Rikus",
    age: 28,
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
//Rest parameters
const add4 = (...numbers) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
};
const addNumbers = add4(5, 10, 21, 50.55);
console.log(addNumbers);
//Destructuring
const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;
console.log(hobby1);
console.log(hobby2);
console.log(remainingHobbies);
const person2 = {
    name2: "Rikus",
    age2: 28,
};
const { name2: firstName, age2: userAge } = person2;
console.log(firstName, userAge);
