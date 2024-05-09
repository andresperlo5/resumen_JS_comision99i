/* [{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95}] 
- array
- objeto
- Number
- String
*/
/* JSON - JavaScript Object Notation */

const formulario = {
  nombre: "andres",
  apellido: "perlo",
  contrasenia: 123456789,
};

const arrayObjetos = [
  {
    id: 1,
    titulo: "libro1",
    autor: "autor1",
  },
  {
    id: 2,
    titulo: "libro2",
    autor: "autor2",
  },
  {
    id: 3,
    titulo: "libro3",
    autor: "autor3",
    objeto: {
      propiedad: "uno",
    },
    array: ["string", 0, false],
  },
];

/* console.log(formulario);
const objString = JSON.stringify(formulario);
console.log(objString);
console.log(JSON.parse(objString)); */

/* console.log(arrayObjetos);
const arrayAAtring = JSON.stringify(arrayObjetos);
console.log(arrayAAtring);
const stringAArray = JSON.parse(arrayAAtring);
console.log(stringAArray); */

let nombre = "Maxi";
let edad = 30;
