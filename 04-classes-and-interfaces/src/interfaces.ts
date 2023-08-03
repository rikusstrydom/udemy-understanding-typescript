// type AddFn = (a: number, b: number) => number;

// Interface with anonymise function 
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string; // optional property
}

// Can extend multiple interfaces
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 28;
  greet(phrase: string): void {
    if(this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("No name provided");
    }
  }

  constructor(name?: string) {
    if(name) {
      this.name = name;
    }
  }
}

let user1: Greetable;

user1 = new Person("Rikus");
user1.greet("Hi there");
