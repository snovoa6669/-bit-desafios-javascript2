//Crear una función que reciba 1 número, imprimir si es negativo o si es positivo o si es cero.
function numero(num) {
  if (num > 0) {
    return console.log("El numero es positivo");
  }
  if (num < 0) {
    console.log("El numero  negativo");
  } else {
    console.log("El numero es 0 y postivo negativo");
  }
}

numero(-1);
numero(5);
numero(0);
