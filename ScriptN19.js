/*Solicitar al usuario un nombre, una edad y que responda si está activo o no
- Mostrar en la consola el tipo de dato ingresado por cada entrada
- Mostrar en la interfaz de usuario el nombre ingresado entre comillas sencillas
- Mostrar en una ventana emergente si está autorizado o no entre comillas dobles
Ej entrada: Pepita 20 si
Ej salida:
- El tipo de dato ingresado para nombre es: 'string' ...
- El nombre ingresado es: 'Pepita'
- "Si" está autorizado*/

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let edad_En_Entero = parseInt(edad);
let estado = prompt(`"${nombre}" Esta activo? si o no? `);
let estado_boleano = Boolean(estado);
console.log(` El tipo de dato ingresado para nombre es:${typeof nombre}`);
console.log(` El tipo de dato ingresado para edad es:${typeof edad_En_Entero}`);
console.log(
  ` El tipo de dato ingresado para estado es:${typeof estado_boleano}`
);
document.write(`El nombre ingresado es "${nombre}"`);
alert(`${estado} esta autorizado`);
