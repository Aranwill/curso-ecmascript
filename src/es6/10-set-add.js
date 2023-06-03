////El objeto Set le permite almacenar valores únicos de cualquier tipo, ya sea valores primitivos o referencias a objetos.

const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3');

console.log(list);

const array = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9, 10]

// el metodo set permite eliminar los atributos repetidos en un array en conjunto con el spread operator

const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos)

//El objeto Set le permite almacenar valores únicos de cualquier tipo, ya sea valores primitivos o referencias a objetos.

//Crea un nuevo objeto Set.
const set = new Set();
//Añade value al objeto Set. Devuelve el objeto Set con el valor añadido.
set.add('item 1');                  
set.add('item 2').add('item 3').add('item 4').add('item 5'); 
set.has('item 2');  
//Devuelve el número de valores en el objeto Set.             
set.size;   
console.log(set);
set.size;
console.log(set.size);
//Elimina el elemento asociado a value
set.delete('item 3');                      
console.log(set);
console.log(set.size);
// //Devuelve un booleano que afirma si un elemento está presente con el valor dado en el objeto Set o no.
console.log(set.has('item 2'));
set.add('item 3'); 

// iterar sobre los elementos en Set
for (let item of set) 
console.log(item)//

// imprime en consola los elementos en el orden
for (let item of set.keys()) 
console.log(item)

// imprime en consola los elementos en el orden
for (let [key, value] of set.entries()) 
console.log(key)

// convertir el objeto Set en un objeto Array, con Array.from
const myArr = (Array.from(set))
console.log(myArr);

