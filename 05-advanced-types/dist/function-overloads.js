"use strict";
//Function overloads
function addItems(a, b) {
    //Type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addItems(1, 5);
const result2 = addItems('1', '2');
const result3 = addItems(1, '2');
const result4 = addItems('1', 2);
