//Los generadores son funciones especiales que pueden pausar su ejecución, 
//luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores.

//Estos se utilizan para guardar la totalidad de datos infinitos, 
//a través de una función matemática a valores futuros. 
//De esta manera ocupan poca memoria, 
//con respecto a si creamos un array u objeto.

//Cómo utilizar generadores
//La sintaxis de los generadores comprende lo siguiente:

//La palabra reservada function* (con el asterisco al final).

//La palabra reservada yield que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.

//Crear una variable a partir de la función generadora.

//El método next devuelve un objeto que contiene una propiedad value.

//con cada valor de yield; y otra propiedad done con el valor true o false si el generador ha terminado.

//Si el generador se lo invoca y ha retornado todos sus valores de yield, 

//entonces devolverá el objeto con las propiedades value con undefined y un done con true.


function* iterate(array) {
  for (let value of array) {
    yield value; 
  }
}

const it = iterate(['Hector', 'Bianca', 'Fai', 'Angellica']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);



//Existen dos nuevas formas de utilizar ciclos repetitivos. El bucle for valor of iterable recorre iterables, como arrays, Map, Set e incluso un generador.

//El valor es cada elemento del iterable puede tener cualquier nombre, por eso se inicia con let nombre.

const array = [5, 4, 3, 2, 1]

for (let numero of array) {
  console.log(numero) // 10 8 6 4 2
}
 
console.log(array) // [ 5, 4, 3, 2, 1 ]


//Sin embargo, debes tener en cuenta que solo podrás acceder a sus valores, y no a sus referencias, por lo que si quieres cambiar los elementos del array, necesitarás un índice array[indice].

const array2 = [5, 4, 3, 2, 1]

for (let numero of array2) {
  numero *= 2 
  console.log(numero) // 10 8 6 4 2
}
 
console.log(array2) // [ 5, 4, 3, 2, 1 ]


//Si intentas recorrer un objeto de esta forma for elemento of objeto, te ocurrirá un error, porque un objeto no es un iterable. En su lugar puedes utilizar for elemento in objeto, que recorrerá las propiedades del objeto.

const objeto = { a: 1, b: 2, c: 3 }

for (let elemento in objeto) {
  console.log(elemento) // 'a' 'b' 'c'
}

//Sin embargo, si utilizas for elemento in array, no dará un error, pero el resultado no será el esperado, ya que los arrays son un tipo de objeto donde cada propiedad es el índice del valor del array o del iterable. Por lo que debes tener cuidado.

const array3 = [5, 4, 3, 2, 1]

for (let elemento in array3) {
  console.log(elemento) // '0' '1' '2' '3' '4'
}

console.log(array3);

/* const array = {
	'0': 5,
  '1': 4,
  '2': 3,
  '3': 2,
  '4': 1
}*/