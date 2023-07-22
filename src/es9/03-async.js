async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const other2 = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello!');

// MEJORA DEL CODIGO ANTERIOR

// Agregue un asterisco después de la function palabra clave para marcar una función como generadora.
function* anotherGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const other = anotherGenerator();

// El metodo next()regresa un objeto con las propiedades doney value. También puedes pasar un parámetro al método next para enviar un valor al generador.

console.log(other.next().value);
console.log(other.next().value);
console.log(other.next()); // Esto nos devuelve un Objecto con dos propiedades:

// Es verdadero si el iterador ya llego al final de la secuencia. En este caso valor, defina opcionalmente el valor de retorno del iterador.

// Es falso si el iterador puede dar un siguiente valor en la secuencia. Es equivalente a no definir la propiedad done.

//value => cualquier valor Javascript regresado por el iterador. Este puede ser omitido si done es verdadero.

console.log(other.next());
console.log('Hello!');
/*
1
2
{ value: 3, done: false }
{ value: undefined, done: true }
Hello!
*/

// OTRO EJEMPLO DE ASYNC

async function arrayOfNames(array) {
  for await (let value of array) {
    console.log(value);
  }
}

const names = arrayOfNames(['Oscar', 'David', 'Ana']);
console.log('After');
