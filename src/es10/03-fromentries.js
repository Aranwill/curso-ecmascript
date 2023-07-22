const entries = new Map([
  ['name', 'hector'],
  ['age', 36],
]);
console.log(entries);
console.log(Object.fromEntries(entries));

//Cómo transformar un array de arrays en un objeto

//El método Object.fromEntries devuelve un objeto a partir de un array donde sus elementos son las entries en forma [propiedad, valor].

//Se considera la operación inversa de Object.entries().

const arrayEntries = [
  ['name', 'Hector'],
  ['email', 'aranwill@correo.com'],
  ['age', 36],
];

const usuario = Object.fromEntries(arrayEntries);

console.log(usuario);

const array = Object.entries(arrayEntries);
console.table(array);
