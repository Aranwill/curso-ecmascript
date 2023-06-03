// puedes evitar la configuración del JSON usando la extención .mjs, esta le indica a JavaScript que es un módulo


// 1ra opcion para expotar una funcion
const hello = () => {
  console.log('Hello!');
}

export default hello;





// 2da opcion para exportar una funcion

const hello2 = () => {
  console.log('Hello2!');
}

export {hello2};