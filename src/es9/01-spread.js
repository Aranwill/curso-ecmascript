const user = {username: 'Hector', age: 36, country: 'AR'};
const {username, ...values} = user;
console.log(username);
console.log(values);
