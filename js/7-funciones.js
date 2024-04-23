/* Funciones = Metodos */
/* Tipos de funciones -> declarativas, anonimas, arrows */

/* Declarativas */
/* nombre_de_la_funcion */
/* nombreDeLaFuncion();

function nombreDeLaFuncion() {
  let nombre = "Andres";
  console.log(nombre);
}

nombreDeLaFuncion = 1;

nombreDeLaFuncion(); */

/* Anonimas */

/* const funcionAnonima = function () {
  return 1 + 1;
};

console.log(funcionAnonima());

/* Arrow */
/* const arrowFunction = () => 1 + 1;

console.log(arrowFunction()); */

/* scope - */ /* VAR - LET */
/* const nombre = "Andres";

const apellidoCOnVar = () => {
  let edad = 30;
  if (nombre) {
    var apellido = "Perlo";
  }

  console.log(apellido);
};

const apellidoCOnLet = () => {


  if (nombre) {
    let apellido = "Perlo";
  }

  console.log(apellido);
};

console.log(apellidoCOnVar()); */
/* Parametros o argumentos */

const suma = (a = 0, b = 0) => {
  console.log(a + b);
};

const formulario = (nombre = "", apellido = "") => {
  console.log(nombre, apellido);
};

/* suma();

formulario(); */

/* callback - una funcion o metodo que esta dentro de otro*/
const comenzarJuego = (numeroMaquina, numeroUsuario) => {
  if (isNaN(numeroUsuario)) {
    alert("Ingresaste una letra");
  } else if (numeroMaquina === numeroUsuario) {
    alert("Gano");
  } else {
    alert("Perdiste");
  }
};

const numeroAleatorio = () => {
  const numero = Math.round(Math.random() * 15);
  return numero;
};

const ingresarUnNumero = () => {
  const numeroUsuario = Number(prompt("Ingrese un numero")); /* "5" 54a5 */
  return numeroUsuario;
};

comenzarJuego(numeroAleatorio(), ingresarUnNumero());
