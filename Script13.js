/*Crear una función que reciba 2 números, imprimir si el primer número es
divisible por el segundo.*/
function divisible(num1, num2) {
  if (num1 % num2 == 0) {
    console.log(num1 + " es divisible por " + num2);
  } else {
    console.log(num1 + " no es divisible por " + num2);
  }
}
divisible(6, 3);
divisible(5, 2);
