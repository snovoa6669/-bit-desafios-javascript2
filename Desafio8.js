/*Crear seis funciones, (sumar, restar, multiplicar, dividir, módulo, potencia), 
debe recibir 2 números e imprimir el resultado así: Ej entrada: 8, 4 Ej salida: 8 + 4 = 12
*/
function suma(numero1, numero2) {
  const resultado = numero1 + numero2;
  console.log(
    numero1 + " " + "+" + " " + numero2 + " " + "=" + " " + resultado
  );
}
suma(8, 4);
function resta(numero1, numero2) {
  const resultado = numero1 - numero2;
  console.log(
    numero1 + " " + "-" + " " + numero2 + " " + "=" + " " + resultado
  );
}
resta(8, 4);

function multiplicacion(numero1, numero2) {
  const resultado = numero1 * numero2;
  console.log(
    numero1 + " " + "x" + " " + numero2 + " " + "=" + " " + resultado
  );
}
multiplicacion(8, 4);

function division(numero1, numero2) {
  const resultado = numero1 / numero2;
  console.log(
    numero1 + " " + "/" + " " + numero2 + " " + "=" + " " + resultado
  );
}
division(8, 4);

function modulo(numero1, numero2) {
  const resultado = numero1 % numero2;
  console.log(
    numero1 + " " + "%" + " " + numero2 + " " + "=" + " " + resultado
  );
}
modulo(8, 4);

function potencia(numero1, numero2) {
  const resultado = numero1 ** numero2;
  console.log(
    numero1 + " " + "^" + " " + numero2 + " " + "=" + " " + resultado
  );
}
potencia(8, 4);
