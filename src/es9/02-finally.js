// Definir una función que devuelve una promesa, por parametro le pasamos la consicion almacanada en una variable
const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!!');
    } else {
      reject('Whoooopss!');
    }
  });
};

//El método finally para promesas consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada.

anotherFunction()
  //Promesa resuelta
  .then(response => console.log(response))
  //Promesa rechazada
  .catch(err => console.error(err))
  //Código final
  .finally(() => console.log('Finaly'));
