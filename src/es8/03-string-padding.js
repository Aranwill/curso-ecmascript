// STRING PADDING => rellena un string con caracteres al inicio o al final y si es necesario, repite la cantidad pedida

const string = 'Hello';

// Metodo para rellenar el inicio del string
console.log(string.padStart(6, '_'));

// Metodo para rellenar el final del string
console.log(string.padEnd(6, '_'));