//Promise.allSettled() permite manejar varias promesas, que devolverá un array de objetos con el estado y el valor de cada promesa, haya sido resuelta o rechazada.

const promise1 = new Promise((resolve, reject) => reject('Reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve'));

Promise.allSettled([promise1, promise2, promise3]).then(response =>
  console.log(response)
);

const promesa1 = Promise.reject('Ups promesa 1 falló');
const promesa2 = Promise.resolve('Promesa 2');
const promesa3 = Promise.reject('Ups promesa 3 falló');

Promise.allSettled([promesa1, promesa2, promesa3]).then(respuesta =>
  console.log(respuesta)
);
