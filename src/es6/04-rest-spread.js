// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);


// Object destructuring
let user = {username: 'Hector', age: 36 };
let {username, age} = user;
console.log(username, user.age);
console.log(user.age);

// spread operator

let person = {name: 'Hector', age: 36};
let country = 'MX';

let data = {id: 1, ...person, country };
console.log(data);
console.log(person);


// rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(2, 1, 2, 3);

let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)



