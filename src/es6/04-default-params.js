function newUser(name, age, country) {
  var name = name || 'Hector';
  var age = age || 36;
  var country = country || 'Arg';
  console.log(name, age, country);
}

newUser();
newUser('David', 15, 'CO');

function newAdmin(name = 'Hector', age = 36, country= 'CL'){
  console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PE');