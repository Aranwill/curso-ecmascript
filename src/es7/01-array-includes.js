let numbers = [1, 2, 3, 4, 7, 8, 9]

console.log(numbers.includes(5));

numbers.includes(10) ? 
console.log('Si se encuentra el num') 
: 
console.log('No se encuentra el num')

/*------------------------------------------------------*/ 
const list = ['hector', 'david', 'ana'];

console.log(list.includes('hector'));

const list2 = ["Oscar", "Pedro", "Jose"];
const newList = list2.map(item => item.toLowerCase());
console.log(newList);
console.log(newList.includes('oscar'));

/*---------------------------------------------------------*/ 

const list3 = ["Oscar", "Pedro", "Jose"];
//En esta línea, se crea un arreglo llamado list2 que contiene tres elementos de cadena.

const newList2 = list3.map(item => item.toLowerCase());
//En esta línea, se crea un nuevo arreglo llamado newList que contiene los elementos del arreglo original convertidos a minúsculas. El método map() itera sobre cada elemento del arreglo original y devuelve un nuevo arreglo con los elementos modificados según la función callback que se le pasa como argumento. En este caso, la función callback es item => item.toLowerCase(), que convierte cada elemento del arreglo original en minúsculas.

console.log(newList2);
//En esta línea, se muestra el contenido del nuevo arreglo newList en la consola.

console.log(newList2.includes('oscar'));
//En esta línea, se verifica si la cadena 'oscar' está presente en el nuevo arreglo newList. El método includes() verifica si un elemento está presente en el arreglo y devuelve un valor booleano. En este caso, se verifica si la cadena 'oscar' está presente en el nuevo arreglo y muestra el resultado en la consola.

