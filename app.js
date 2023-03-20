console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach((user) => {
  console.log(user.name);
});

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const mapUser = users.map((user) => {
  return { name: user.name, score: user.score };
});
console.log(mapUser);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

const activeUser = users.filter((user) => {
    if (user.isActive === true){
        return { name: user.name };
    }
});
console.log(activeUser);
