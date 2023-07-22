// FLAT

// El método flat() crea una nueva matriz con todos los elementos de sub-arreglo concatenados recursivamente hasta la profundidad especificada.

const array = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]];
//(PROFUNDIDAD DEL ARRAY (3))
console.log(array.flat(3));

//  FLATMAP

//El método flatMap() primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz. Es idéntico a un mapa seguido de un flatten (en-US)de profundidad 1, pero flatMapes a menudo útil y la fusión de ambos en un método es ligeramente más eficiente.

const array2 = [1, 2, 3, 4, 5];
let array3 = array2.flatMap(v => [v, v * 2]);
console.log(array3);

// object.values => sirve para ver los valores del objeto
console.log(Object.values(array3));

// object.keys => sirve para ver los posiciones del objeto (devuelve un array tipo string)
console.log(Object.keys(array3));
