class Persona {
  constructor(nombre, apellido, domicilio) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.domicilio = domicilio);
  }

  mostrarDatos() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Domicilio: ${this.domicilio}`);
  }
}

const persona1 = new Persona("Andres", "Perlo", "Las talitas");
const persona2 = new Persona("Maxi", "Busi", "Yerba Buena");
console.log(persona1);
console.log(persona1.mostrarDatos());

console.log(persona2);
console.log(persona2.mostrarDatos());

/* Herencia */

class Administrador extends Persona {
  constructor(nombre, apellido, domicilio, role) {
    super(nombre, apellido, domicilio);
    this.role = role;
  }

  mostrarRole() {
    console.log(`Role: ${this.role}`);
  }
}

const admin1 = new Administrador("Andres", "Perlo", "Las Talitas", "Admin");
console.log(admin1.mostrarDatos());
/* console.log(persona1.mostrarRole()); */
