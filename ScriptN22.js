/* ejercicio#23 
23. Solicitar que el usuario ingrese un nombre y una contraseña, si el usuario
no ingresa alguno de los datos mostrar una alerta con el error, si la contraseña
es diferente de "123ABC" mostrar acceso denegado de otra manera mostrar un
mensaje de bienvenida saludando al usuario.
let nombreUsuario = prompt("Ingrese su nombre");
let contrasenaUsuario = prompt("Ingrese una contraseña");*/

if (nombreUsuario && contrasenaUsuario) {
  let contrasena = prompt("ingrese su contraseña guardada");
  if (contrasena === contrasenaUsuario) {
    document.write(`Bienvenido  "${nombreUsuario}"`);
  } else {
    alert(" acceso denegado");
  }
} else {
  alert(" ERROR, Ingrese un usuario o una contraseña");
}
