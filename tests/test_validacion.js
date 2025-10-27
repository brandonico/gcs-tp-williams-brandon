function validarTelefono(telefono) {
  return /^\d+$/.test(telefono);
}

// Pruebas básicas
console.assert(validarTelefono("123456789") === true, "Debe aceptar solo números");
console.assert(validarTelefono("123ABC") === false, "Debe rechazar letras");
console.assert(validarTelefono("") === false, "Debe rechazar vacío");

console.log("Todas las pruebas pasaron correctamente.");
