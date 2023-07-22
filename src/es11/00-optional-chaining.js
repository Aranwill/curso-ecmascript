//El operador de encadenamiento opcional ( ?.) accede a la propiedad de un objeto o llama a una función. Si el objeto al que se accede o la función a la que se llama con este operador es undefinedo null, la expresión se cortocircuita y se evalúa undefinedcomo en lugar de arrojar un error.

/*----------------------------------------------------------------*/

//Cuando intentas acceder a propiedades de un objeto que no existen, JavaScript te retornará undefined

//Ejemplo
const usuario = {};
console.log(usuario.redes); // undefined

/*----------------------------------------------------------------*/

const users = {
  gndx: {
    country: 'MX',
  },
  ana: {
    country: 'CO',
  },
};

//console.log(users.gndx.country);
console.log(users?.bebeloper?.country);
