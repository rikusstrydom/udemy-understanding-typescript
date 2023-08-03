"use strict";
// Built in generics
function createCourseGoal(title, description, completeUntil) {
    let courseGoal = {}; // Partial makes all properties optional
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal;
}
const names2 = ['Rikus', 'Maxi'];
// names2.push('Anna');
// names2.pop();
