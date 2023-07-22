try {
  // Manejar el código
} catch (err) {
  // Se utiliza el parámetro `err`
}

//El parámetro opcional de catch permite omitir el error si es necesario.
try {
  // Manejar el código
} catch {
  // Manejar el error sin el parámetro.
}

//Aunque siempre es recomendable manejar el error como parámetro, ya que tiene más información del problema.

const prepareIceCream = money => {
  /*PROMESA*/
  return new Promise((resolve, reject) => {
    if (money >= 500) {
      //3. Si el dinero que ingresaste es mayor o igual a 500,
      //entonces te preparamos el helado. El proceso toma 6 segundos.
      console.log('Estamos preparando tu helado...');
      setTimeout(() => {
        resolve('Aquí está tu helado 🍦');
      }, 2000);
    } else {
      //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
      reject('Ups!, creo que no tienes dinero suficiente 💰');
    }
  });
};

const buyIceCream = async money => {
  /*FUNCIÓN ASÍNCRONA*/
  try {
    console.log('Bienvenido a mundo Helados!');
    //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado
    const result = await prepareIceCream(money);
    //4. Imprimimos tu pedido! si todo salió bien.
    console.log(result);
    console.log('Gracias por tu compra!');
  } catch (e) {
    //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    console.log(e);
  }
};

buyIceCream(500); //1. llamas a la funcion comprar helado e Ingresas el dinero

/*----------------------------------------------------------------*/

//Estos ejemplos se diferencian en que uno usa try and catch en la function async para controlar el resultado de la promesa (Helados) y el otro usa un condicional ternario (Clase) el cual usa menos espacio que el condicional ordinario.

const fnAsync = () => {
  //4) Ejecuta Promesa
  return new Promise((resolve, reject) => {
    //5)Retorna uno de los 2 valores.
    true //6) Yes resolve = true, false = reject.
      ? setTimeout(() => resolve('AsynC!!'), 2000) //7) Retorna setTimeout que dentro tiene una función anonima que tiene un "String" con retraso de 2 segundos.
      : reject(new Error('Error')); //
  });
};

const anotherFn = async () => {
  //2) Ejecutar function async
  const somethig = await fnAsync(); //3) Invocando Promesa
  console.log(somethig); //8) Imprime
  console.log('Hello'); //9) Imprime
};

console.log('before');
anotherFn(); //1) Invocación
console.log('After');

/**Detallazos | Detallote**/

// `anotherFn();` se esta ejecutando y no interrumpe ni bloquea a `console.log("After");` a pesar que esta sea la 3° en ejecutarse.

// ```jsx
// before //1° Bien
// After //Aunque esta 3° anotherFn tarda 2 seg extra, entonces esta prosigue como si nada
// AsynC!! //2° Al fin llega
// Hello // **No llegó antes porque await detuvo todo dentro de la function async hasta que se completará la promesa prosiguio con todo lo demás dentro de la function async**.

// What if? | Si Hello se moviera de lugar dentro de const anotherFn = async () => {}.
// Esto pruebas le dan mucho sentido a **[un párrafo](https://www.notion.so/21-ES8-Funciones-As-ncronas-3b27e1c6a6134af8b99ff399f9c37fc8?pvs=21)**.
// ```

// Usamos `setTimeout();` para generar la tardanza a la que se enfrenta una función asíncrona.

// En el mundo laboral no necesitamos retardar, ya que hay cosas pesadas en descargarse (APIs).
