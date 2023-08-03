// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // Tuple (if you want a specific type)
// } = {
//   name: "Rikus",
//   age: 28,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, 'author']
// };

// person.role.push('admin'); // Can still push wrong types even being a tuple

// person.role[1] = 10;
// person.role = [];
// person.role = [0, 'admin', 'user'];

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR,
}

const person = {
  name: "Rikus",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

console.log(person.name);

for (const hoppy of person.hobbies) {
  console.log(hoppy.toUpperCase());
  // console.log(hoppy.map()); // knows it should be a string
}

if (person.role === Role.ADMIN) {
  console.log("User is admin!");
}
