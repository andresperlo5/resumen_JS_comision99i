/* Clases */
const cuentas = [];

class Cuenta {
  constructor(nombre, apellido, domicilio) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.domicilio = domicilio);
    this.saldo = 0;
  }

  ingresar(dinero) {
    this.saldo += dinero;
  }

  extraer(dinero) {
    this.saldo -= dinero;
  }

  informar() {
    document.write(`Tenes como saldo: ${this.saldo}`);
  }
}

const crearCuenta = () => {
  const nombre = prompt("Ingrese su nombre");
  const apellido = prompt("Ingrese su apellido");
  const direccion = prompt("Ingrese su docmicilio");

  const cuenta = new Cuenta(nombre, apellido, direccion);
  cuentas.push(cuenta);
};

const mostrarLasCuentas = () => {
  console.log(cuentas);
};
