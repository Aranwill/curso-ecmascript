/*
El Promise.any()

método estático toma un iterable de promesas como entrada y devuelve un solo Promise. Esta promesa devuelta se cumple cuando se cumple cualquiera de las promesas de la entrada, con este primer valor de cumplimiento. 

Rechaza cuando se rechazan todas las promesas de entrada (incluso cuando se pasa un iterable vacío), y contiene AggregateErroruna serie de motivos de rechazo.

Promise.any() es otra forma de manejar varias promesas, que retornará la primera promesa que sea resuelta y rebotará si todas las promesas son rechazadas.

*/

const promise1 = new Promise((resolve, reject) => reject('Reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve'));

Promise.any([promise1, promise2, promise3]).then(response =>
  console.log(response)
);
