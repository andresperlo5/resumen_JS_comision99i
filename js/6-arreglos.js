/* ARRAY - Arreglo - Elementos */
const meses = ["enero", "febrero", "marzo"];
/* console.log(meses); */
/* Agregar un elemento */
/* meses.push("abril"); */

meses.splice(0, 0, "abril");
/* console.log(meses); */
/* Eliminamos un elemento */
/* console.log(meses.pop()); pop - elimina el ultimo elemento*/
/* console.log(meses); */

/* meses.splice(0, 1); splice - elegimos donde borramos*/

meses.shift(); /* shift - elimina el primer elemento */
/* console.log(meses); */

/* cantidad de un array */
/* console.log(meses.length); */

/* acceder a un dato */
/* console.log(meses[1]);
 */
/* posicion de un elemento */
/* console.log(meses.indexOf("febrero")); */
/* const posicionDelElemento = meses.indexOf("febrero");
console.log(posicionDelElemento);
meses.push("abril"); */

/* unir elementos */
/* console.log(meses.join(" "));

let palabra = "hola";

console.log(palabra.split(",")); */

/* obtener el ultimo elemento */
/* console.log(meses);
console.log(meses[meses.length - 1]);
 */
/*  */

/* const numeros = [1, 5, 8, 22, 21, 6];
const nombres = [
  "andres",
  "bernardo",
  "lucia",
  "belen",
  "alejandro",
  "lucia",
  "belen",
  "alejandro",
]; */

/* console.log(nombres.sort());
console.log(numeros.sort((a, b) => b - a)); */

/* const nombreElegido = nombres.filter((nombre) => nombre === "belen");
console.log(nombreElegido);

const numerosMapeados = numeros.map((numero) => numero * 3);
console.log(numerosMapeados); */

/* for (let contador = 0; contador < nombres.length; contador++) {
  const nombre = nombres[contador];
  console.log(nombre);
} */

/* nombres.forEach((nombre) => console.log(nombre)); */

/* 
1
12
123
1234
*/

/* for (let i = 1; i < 10; i++) {
  for (let j = 1; j < i; j++) {
    document.write(j);
  }
  document.write(`<br>`);
} */
