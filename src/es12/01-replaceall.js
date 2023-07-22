/*
Método replaceAll

El método replaceAll retorna un nuevo string, reemplazando todos los elementos por otro.

Este método recibe dos argumentos:

El patrón a reemplazar, puede ser un string o una expresión regular.
El nuevo elemento que sustituye al reemplazado.
Este procedimiento fue creado para solucionar el problema que tenía el método replace, que realizaba la misma función de reemplazar elementos, pero solamente una sola vez por invocación.

*/

const mensaje =
  'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.';

//replaceAll(patrón, reemplazo)

console.log(mensaje.replace('JavaScript', 'Python'));
// 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'

console.log(mensaje.replaceAll('JavaScript', 'Python'));
// 'Python es maravilloso, con Python puedo crear el futuro de la web.'

mensaje.replaceAll(/a/g, '*');
// 'J*v*Script es m*r*villoso, con J*v*Script puedo cre*r el futuro de l* web.'
