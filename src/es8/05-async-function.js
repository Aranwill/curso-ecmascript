// Function Async - Await 

const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      // respuesta cuando la promesa es aceptada
      ? setTimeout(() => resolve('AsynC!!'), 2000) // setTimeout => tiempo de espera en seg para la promesa
      // rechazo de la promesa
      : reject(new error('Error!'));
  });
}

//Async hace que una funcion se vuelva asincrona y esta siempre una promesa 
const anotherFn = async() => {
  //  Await pone en espera la ejecucion de la funcion mientras se resuelve la promesa 
  const something = await fnAsync();
  console.log(something);
  console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After!');
console.log('Esperando la promesa');



/*-------------------------------------------------------------------*/ 



const countriesList = (country) => {
  const countries = {panama: "Ciudad de panamá", venezuela: "Caracas", argentina: "Buenos Aires", colombia: "Bogotá", espana: "madrid", italia: "roma", china:"Pekín", rusia:"moscú"};

  return new Promise((resolve , reject) => {
    setTimeout(()=>{
      countries[country]
      ? resolve(`La capital de ${country} es ${countries[country]}`)
      : reject((`la capital de ${country} no se encuentra en esta lista`));     
      },2000)
  })
};


  // TRY - Catch - MANEJO DE ERRORES  
const getCapitalCountries = async (pais) => {

  // TRY se usa en funciones asincronas cuando la promesa se resuelve
  try {
    console.log("Buscando información...");
    let respuesta = await countriesList(pais);
    console.info(respuesta);
    // CATCH se usa cuando la promesa a sido rechazada 
  } catch(error) {
    console.log(error);
  }        
}

getCapitalCountries("venezuela");