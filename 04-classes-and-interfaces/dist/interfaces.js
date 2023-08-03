"use strict";
// type AddFn = (a: number, b: number) => number;
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name) {
        this.age = 28;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("No name provided");
        }
    }
}
let user1;
user1 = new Person("Rikus");
user1.greet("Hi there");
