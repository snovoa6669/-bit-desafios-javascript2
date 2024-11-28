/*Crear una función para saludar, si la función recibe un nombre, 
imprimir por consola: Hola, ____! Si la función no recibe un nombre, imprimir: Hola, desconocido!*/

function saludar(_nombre = "desconocido") {
  console.log("Hola," + _nombre);
}
saludar("Sergio");
saludar();
