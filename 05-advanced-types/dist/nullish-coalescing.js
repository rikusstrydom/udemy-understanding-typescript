"use strict";
// Nullish coalescing
const userInput = '';
const storedData = userInput || 'DEFAULT'; // || empty string will also be false
console.log(storedData);
const userInput2 = undefined;
const storedData2 = userInput2 !== null && userInput2 !== void 0 ? userInput2 : 'DEFAULT'; // ?? only when null or undefined
console.log(storedData2);
