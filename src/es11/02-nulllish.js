// El operador coalescente nulo ( ??) es un operador lógico que devuelve su operando del lado derecho cuando su operando del lado izquierdo es nullo undefined, y de lo contrario devuelve su operando del lado izquierdo.

const anotherNumber = null;
const validate = anotherNumber ?? 5;
console.log(validate);

//El operador nullish coalescing (??) consiste en evaluar una variable si es undefined o null para asignarle un valor.

//El siguiente ejemplo se lee como: ¿usuario.name es undefined o null? Si es así, asígnale un valor por defecto "Andres", caso contrario asigna el valor de usuario.name.

const usuario1 = {};
const nombre1 = usuario1.name ?? 'Andres';

const usuario2 = { name: 'Juan' };

const nombre2 = usuario2.name ?? 'Andres';
console.log(nombre2);

console.log(nombre1);
