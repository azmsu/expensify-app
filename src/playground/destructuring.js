//
// Object Destructuring
//

// const person = {
//   name: "Andy",
//   age: 21,
//   location: {
//     city: "Toronto",
//     temp: 10
//   }
// };

// // const name = person.name;
// // const age = person.age;

// const { name = "Anonymous", age } = person;

// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}.`);

// if (city && temperature) {
//   console.log(`It's ${temperature} degrees in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "self-published" } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

// const address = [
//   "1299 S Juniper Street",
//   "Philedelphia",
//   "Pennsylvania",
//   "19147"
// ];
// const [street, city, state = "New York"] = address;
// console.log(`You are in ${city} ${state}`);

const item = ["Coffee (iced)", "$3.00", "$3.50", "$4.00"];

const [name, , mediumPrice] = item;

console.log(`A medium ${name} costs ${mediumPrice}`);
