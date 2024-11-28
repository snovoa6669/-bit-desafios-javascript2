/*Crear una función que reciba cuatro párametros, un nombre, una prenda, un
color y una cantidad y retorne: ____ tiene __ ____ de color ____.
Ej entrada: pepita, camisas, azul, 2
Ej salida: Pepita tiene 2 camisas de color azul.*/

function desafio6(nombre, color, cantidad, prenda_Vestir) {
  return `${nombre} tiene ${cantidad} ${prenda_Vestir} de color ${color}`;
}
let mensaje = desafio6("Pepita", "azul", 2, "camisas");
let mensaje_propio = desafio6("Sergio", "rojo", 6, "busos");
console.log(mensaje);
console.log(mensaje_propio);
