let auto = {
  /* Clave : valor */
  marca: "Fiat" /* Propiedad */,
  modelo: "Palio",
  anio: "2020",
  encendido: false,
  /* Metodo = Funcion */
  /* This -> hace referencia al objeto en si mismo */
  encenderApagar: () => {
    if (this.encendido) {
      this.encendido = false;
      console.log(this.encendido);
    } else {
      this.encendido = true;
      console.log(this.encendido);
    }
  },
};

console.log(auto);
/* Obtener el valor de una propiedad */
console.log(auto.marca);
console.log(auto["anio"]);

/* Agregar un elemento o para editar una propiedad*/
auto.puertas = 5;
/* auto.marca = "Ford"; */
console.log(auto);

/* document.write(auto); */
/* For in */
for (const clave in auto) {
  if (clave !== "encenderApagar") {
    document.write(`${clave}: ${auto[clave]} <br>`);
  }
}

/* 
Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

const cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar: function (cantidad) {
    this.saldo += cantidad;
  },
  extraer: function (cantidad) {
    /* crear una condicion para que valide y no me permita extraer mas de lo que tengo en la cuenta */
    this.saldo -= cantidad;
  },
  informar: function () {
    console.log(`el saldo de la cuenta es: ${this.saldo}`);
  },
};

const alumnos = [
  {
    id: 1,
    nombre: "Andres",
    apellido: "Perlo",
    domicilio: "Las talitas",
  },
  {
    id: 2,
    nombre: "Maxi",
    apellido: "Busi",
    domicilio: "Yerba buena",
  },
  {
    id: 3,
    nombre: "Hugo",
    apellido: "Bravo",
    domicilio: "San Miguel de Tucuman",
  },
  {
    id: 4,
    nombre: "Jose",
    apellido: "Baza",
    domicilio: "Tafi Viejo",
  },
  {
    id: 5,
    nombre: "Milagros",
    apellido: "Nieva",
    domicilio: "San Miguel de Tucuman",
  },
];

const nuevoAlumno = () => {
  const newId = alumnos[alumnos.length - 1].id + 1;
  const nombre = prompt("Ingrese su nombre");
  const apellido = prompt("Ingrese su apellido");
  const domicilio = prompt("Ingrese su domicilio");

  const nuevoAlumno = {
    id: newId,
    nombre,
    apellido,
    domicilio,
  };

  alumnos.push(nuevoAlumno);
  console.log(alumnos);
};

const filtrarAlumno = (idAlumno) => {
  const alumno = alumnos.find((alumno) => alumno.id === idAlumno);
  console.log(alumno);
};

/* const id = crypto.randomUUID();
console.log(id); */
