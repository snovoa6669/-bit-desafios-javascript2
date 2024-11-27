/* Crear una función que reciba dos párametros, un nombre y un apellido y retorne
el nombre completo, primero el apellido y luego el nombre.*/

function desafio5(nombre, apellido) {
  return apellido + " " + nombre;
}
let nombrecompleto = desafio5("Sergio", "Novoa");
let nombrecompanero = desafio5("Alvaro", "Bahos");
console.log(nombrecompleto);
console.log(nombrecompanero);
