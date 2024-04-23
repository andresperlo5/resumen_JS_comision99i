/* Number */
let numero1 = "15.4214654654"; /* 15 / '15' */
console.log(parseInt(numero1));
console.log(parseFloat(numero1));
console.log(Number(numero1));
let numero2 = 30;
console.log(
  Number(numero1) + numero2
); /* parseInt ('15' -> 15) / parseFloat - Number */
/* console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
 */
/* Redondear un numero decimal*/
console.log(Math.ceil(numero1));
console.log(Math.floor(numero1));
console.log(Math.round(numero1));

/* acortar los decimales */
let nummeroFix = parseFloat(numero1).toFixed(2);

const num1 = 15;
const num2 = 20;
const num3 = 8;

console.log(Math.max(num1, num2, num3));
console.log(Math.min(num1, num2, num3));

let numeroAleatorio = Math.round(Math.random() * 30);

console.log(numeroAleatorio);
