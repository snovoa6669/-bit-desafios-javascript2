/*Solicitar que el usuario ingrese un texto (cualquier) y mostrarle al usuario
el texto ingresado entre comillas sencillas.  Si el usuario no ingresa un texto
mostrarle una alerta indicando su error. */
let texto_usuario = prompt("Ingrese una palabra, frase o parrafo");
if (texto_usuario) {
  document.write(`El texto que usted ingreso es "${texto_usuario}"`);
} else {
  alert("No ingresaste ningun texto");
}
