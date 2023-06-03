// const edad = 17

// if (edad >= 18) {
//   console.log('Eres mayor de edad')
// } else if (edad >= 16) {
//   console.log('Eres casi mayor de edad')
// } else {
//   console.log('Eres menor de edad')
// }

const edad = 18;
const tieneCarnet = true;
const puedeConducir = edad >= 18 && tieneCarnet;

puedeConducir ? console.log('Puedes conducir') : console.log('No puedes conducir')


const cuentaAtras = 10
// cuentaAtras = cuentaAtras - 1
// console.log(cuentaAtras)

// iniciamos la variable fuera del bucle
// let cuentaAtras = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás en cada iteración
  console.log(cuentaAtras)
  // restamos 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}

console.log('¡Despegue! 🚀')

// let cuentaAtras = 10

while (cuentaAtras > 0) {
  console.log(cuentaAtras)
  cuentaAtras = cuentaAtras - 1

  // si la cuenta atrás es 5, salimos del bucle
  if (cuentaAtras === 5) {
    break // <---- salimos del bucle
  }
}

// let cuentaAtras = 10

while (cuentaAtras > 0) {
  cuentaAtras = cuentaAtras - 1

  // si la cuenta atrás es un número par...
  if (cuentaAtras % 2 === 0) {
    continue // <---- saltamos a la siguiente iteración
  }

  console.log(cuentaAtras)
}

const NUMERO_REVISIONES = 3
let cuentaAtras = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás
  console.log(cuentaAtras)

  // creamos una variable para contar las revisiones realizadas
  // y la inicializamos a cero
  let revisionesRealizadas = 0

  // hasta que no hayamos realizado las 3 revisiones...
  while (revisionesRealizadas < NUMERO_REVISIONES) {
    // y sumamos 1 a las revisiones realizadas
    revisionesRealizadas = revisionesRealizadas + 1
    console.log(revisionesRealizadas + ' revisiones realizadas...')
  }

  // ahora podemos restar 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}

let cuentaAtras1 = 10

while (cuentaAtras1 > 0) {
  let revisionesRealizadas = 3
  console.log(revisionesRealizadas)
  cuentaAtras1 = cuentaAtras1 - 1
}

console.log(revisionesRealizadas) // -> ERROR: ReferenceError


let drinkCoffee = 0

while (drinkCoffee < 10) {
  drinkCoffee = drinkCoffee + 1
  
  if (drinkCoffee === 8) { break }
  if (drinkCoffee === 5) { continue }

  console.log('Café')
}

/*-------------------------------------------------------------------------------------------------------*/
let edad = 25;

switch(true) {
  case (edad >= 18 && edad < 25):
    console.log("Eres mayor de edad y eres joven");
    break;
  case (edad >= 25 && edad < 40):
    console.log("Eres mayor de edad y estás en plena madurez");
    break;
  case (edad >= 40):
    console.log("Eres mayor de edad y estás en la mejor edad");
    break;
  default:
    console.log("Eres menor de edad");
}

/*-----------------------------------------------------------------------------------------------------------*/
switch (day) {
  case 0:
    console.log('Hoy es Domingo')
  case 1:
    console.log('Hoy es Lunes')
  case 2:
    console.log('Hoy es Martes')
  default:
    console.log('Es otro día')
}

/*-----------------------------------------------------------------------------------------------------------*/

let x = 5

switch (true) {
  case (x < 0):
    console.log('x es negativo')
    break
  case (x > 0):
    console.log('x es positivo')
    break
  default:
    console.log('x es cero')
}