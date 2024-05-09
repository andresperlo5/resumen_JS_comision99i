/* localStorage */
/* crear un dato en el Localstorage */
// localStorage.setItem("nombre", "andres");
// localStorage.setItem("apellido", "perlo");
// localStorage.setItem("direccion", "las talitas");

/* traer un dato del localStorage */
//let nombre = localStorage.getItem("nombre");

/* borrar un dato del localStorage */
//localStorage.removeItem("direccion");

/* sessionStorage */
/* creo un dato en el session */
//sessionStorage.setItem("direccion", "las talitas");

/* traer un dato */
//sessionStorage.getItem("direccion");

/* borrar */
//sessionStorage.removeItem("direccion");

/* const objetoUsuario = {
  nombre: "Juan",
  apellido: "Perez",
  domicilio: "Tafi Viejo",
  usuario: "juanperez2024",
  contrasenia: "123456789",
};

const usuarios = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    domicilio: "Tafi Viejo",
    usuario: "juanperez2024",
    contrasenia: "123456789",
  },
  {
    id: 2,
    nombre: "Pedro",
    apellido: "Diaz",
    domicilio: "Loma de Tafi",
    usuario: "pedrodiaz2024",
    contrasenia: "123456789",
  },
  {
    id: 3,
    nombre: "Marcos",
    apellido: "Romano",
    domicilio: "YerbaBuena",
    usuario: "marcos2020",
    contrasenia: "123456789",
  },
]; */
/* creamos un objeto en el localstorage */
/* localStorage.setItem("usuario", JSON.stringify(objetoUsuario));
sessionStorage.setItem("usuario", JSON.stringify(objetoUsuario)); */

/* traemos un objeto del localStorage */
/* JSON.parse(localStorage.getItem("usuario"));
JSON.parse(sessionStorage.getItem("usuario")); */

/* crear un array de objetos en el localStorage */
/* localStorage.setItem("usuarios", JSON.stringify(usuarios));
sessionStorage.setItem("usuarios", JSON.stringify(usuarios)); */

/* traermos un array de objetos del localstorage */
/* let usuariosLS = JSON.parse(localStorage.getItem("usuarios"));
let usuariosSS = JSON.parse(sessionStorage.getItem("usuarios"));
console.log(usuariosLS);
console.log(usuariosSS); */

/* const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
console.log(usuarios);

const registrarse = () => {
  const nombreUsuario = prompt("Ingrese un nombre de usuario");
  const contraseniaUsuario = prompt("Ingrese una contraseña");
  const repetirContrasenia = prompt("Repita la contraseña");

  if (contraseniaUsuario === repetirContrasenia) {
    if (usuarios.length) {
      const id = crypto.randomUUID();

      const nuevoUsuario = {
        id,
        nombreUsuario,
        contraseniaUsuario,
      };

      usuarios.push(nuevoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      alert("usuario registrado");
    } else {
      const nuevoUsuario = {
        id: 1,
        nombreUsuario,
        contraseniaUsuario,
      };

      usuarios.push(nuevoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      alert("usuario registrado");
    }
  } else {
    alert("contraseñas no coinciden");
  }
}; */
