/*solicitar un nombre al usuario y :
mostrar en una ventana emergente el tipo de dato ingresado
mostrar en la interfaz de usuario el nombre ingressado entre comillas dobles*/
let nombre = prompt("ingrese su nombre");
alert(`el tipo de dato ingresado es "${typeof nombre}"`);
document.write(`El valor ingresado es: "${nombre}"`);
