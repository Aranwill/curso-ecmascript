/*
Los métodos privados consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral ( #). Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase.

*/

class user {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  #speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get #uAge() {
    return this.age;
  }
  set #uAge(n) {
    this.age = n;
  }
}

const bebeloper1 = new user('Hector', 36);
console.log(bebeloper1.uAge);
console.log((bebeloper1.uAge = 25));
