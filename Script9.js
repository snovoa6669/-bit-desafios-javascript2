/*- Crear seis funciones, (suma, resta, multiplica, divide, módulo, potencia),
cada función debe recibir 2 números y retornar un resultado según corresponda.
- Crear otra función que reciba el nombre de la operación y 2 números,
debe imprimir el resultado.*/

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

function restar(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

function dividir(numero1, numero2) {
  if (numero2 === 0) {
    // Se modifica codigo para que no permita dividir por cero, mostrando en consola
    return console.log("No se puede dividir por cero");
  } else {
    return numero1 / numero2;
  }
}

function modulo(numero1, numero2) {
  return (resultado = numero1 % numero2);
}

function potencia(numero1, numero2) {
  return (resultado = numero1 ** numero2);
}

function operaciones(operacion, numero1, numero2) {
  let resultado;
  if (operacion === "+") {
    resultado = sumar(numero1, numero2);
  }

  if (operacion === "-") {
    resultado = restar(numero1, numero2);
  }
  if (operacion === "x") {
    resultado = multiplicar(numero1, numero2);
  }
  if (operacion === "/") {
    resultado = dividir(numero1, numero2);
  }
  if (operacion === "%") {
    resultado = modulo(numero1, numero2);
  }
  if (operacion === "^") {
    resultado = potencia(numero1, numero2);
  }
  console.log(numero1 + " " + operacion + " " + numero2 + " = " + resultado);
}

operaciones("+", 8, 4);
operaciones("-", 8, 4);
operaciones("x", 8, 4);
operaciones("/", 8, 0);
operaciones("%", 8, 4);
operaciones("^", 8, 4);
