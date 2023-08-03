"use strict";
// Optional chaining
var _a;
const fetchedUserData = {
    id: '001',
    name: 'Rikus',
    job: { title: 'CEO', description: 'My own company' },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title); // ? only try to access property if defined
