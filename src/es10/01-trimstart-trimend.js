// El método trim( ) elimina los espacios en blanco en ambos extremos del string. Los espacios en blanco en este contexto, son todos los caracteres sin contenido (espacio, tabulación, etc.) y todos los caracteres de nuevas lineas (LF,CR,etc.).

const hello = '         hello world          ';
// Elimina los espacios del string al principio
console.log(hello.trimStart());
// Elimina los espacios del string al final
console.log(hello.trimEnd());

console.log(hello);
