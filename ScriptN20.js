/* Solicitar al usuario que ingrese tres números, mostrarle al usuario el
resultado de las cuatro operaciones aritmeticas básicas. */

let number1 = prompt("Digite el primer numero de su eleccion");
conversion_number1 = +number1;
console.log(typeof conversion_number1);

let number2 = prompt("Digite el segundo numero de su eleccion");
conversion_number2 = +number2;
console.log(typeof conversion_number2);

let number3 = prompt("Digite el tercer numero de su eleccion");
conversion_number3 = +number3;
console.log(typeof conversion_number3);

console.log(typeof conversion_number3);
let resultado_Suma =
  conversion_number1 + conversion_number2 + conversion_number3;
let resultado_Resta =
  conversion_number1 - conversion_number2 - conversion_number3;
let resultado_Multiplicacion =
  conversion_number1 * conversion_number2 * conversion_number3;
let resultado_Division =
  conversion_number1 / conversion_number2 / conversion_number3;

document.write(
  `El resultado de la suma es :" ${resultado_Suma} <br> El resultado de la resta es :"${resultado_Resta}""  <br> El resultado de la multiplicacion es : "${resultado_Multiplicacion} <br>  El resultado de la division es : "${resultado_Division}"`
);
