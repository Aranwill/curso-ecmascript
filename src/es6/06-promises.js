const nextFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!!');
    } reject('Whoooopss!');;
  })
}   
nextFunction()
  .then(response => console.log(response))
  .catch(err => console.log(err));


// otro ejemplo de promesas


const myPromise = new Promise((resolve, reject) => {
  let condition = true ? resolve('La promesa se resolvió exitosamente') : 
  reject('La promesa fue rechazada');
})

myPromise
    .then (message => console.log(message))
    .catch(error => console.log(error))





// Definir una función que devuelve una promesa, por parametro le pasamos la consicion almacanada en una variable
const anotherFunction = () => {
  // Crear una nueva promesa
  return new Promise((resolve, reject) => { 
    // Guardamos el valor en una variable
    let verdad = true;
    // Simular una operación asíncrona
    setTimeout(() => {
      // Si la operación tiene éxito, resolver la promesa
      if (verdad) {
        resolve('Hey!!');
      } // Si la operación falla, rechazar la promesa
      
      reject('Whoooopss!');
      // tiempo de espera de resultados, expresados en seg
    }, 1000);
  });
};

// Llamar a la función y manejar el resultado
anotherFunction() 
  // Imprimir el resultado en la consola
  .then(result => console.log(result)) 
  // Imprimir el error en la consola
  .catch(error => console.error(error)) 



const myAsyncFunction = async() => {
  try {
      let myPromise = new Promise((resolve, reject) => {
        var condition = true ? 
        resolve('La promesa se resolvió exitosamente') 
         : 
        reject(`La promesa fue rechazada`);
      });
      let result = await myPromise;
      console.log(result);
  } catch (err){
      console.log(err)}; 
  }
  
  myAsyncFunction();

