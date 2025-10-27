const assert = require('assert');

function validarTelefono(telefono) {
  return /^[0-9]+$/.test(telefono);
}

// Casos de prueba
assert.strictEqual(validarTelefono("123456789"), true, "Debe aceptar solo numeros");
assert.strictEqual(validarTelefono("123ABC"), false, "Debe rechazar letras");
assert.strictEqual(validarTelefono(""), false, "Debe rechazar vacio");
assert.strictEqual(validarTelefono("0000"), true, "Debe aceptar ceros");
assert.strictEqual(validarTelefono(" 123 "), false, "Debe rechazar espacios");
assert.strictEqual(validarTelefono("123-456"), false, "Debe rechazar guiones");

console.log("Todas las pruebas pasaron correctamente.");
