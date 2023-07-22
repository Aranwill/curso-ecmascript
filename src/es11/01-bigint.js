// BigIntLos valores representan valores numéricos que son demasiado grandes para ser representados por la number primitiva .

// Un valor BigInt , a veces también llamado simplemente BigInt , es un bigint primitivo , creado agregando nal final de un literal entero, o llamando a la BigInt()función (sin el newoperador) y dándole un valor entero o valor de cadena.

const aBigNumber = 89745656249632563n;
const anotherBigNumber = BigInt(89745656249632563);
console.log(aBigNumber);
console.log(anotherBigNumber);

//El nuevo dato primitivo bigint permite manejar números enteros muy grandes. Existen dos formas de crear un bigint: el número entero seguido de n o mediante la función BigInt

const number1 = 45n;
const number2 = BigInt(45);

typeof 45n;
