function validarTelefono(tel) {
  return /^[0-9]+$/.test(tel);
}

document.getElementById("form-cliente").addEventListener("submit", function (e) {
  e.preventDefault();

  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje");

  if (!validarTelefono(telefono)) {
    mensaje.textContent = "Teléfono inválido. Solo números.";
    mensaje.style.color = "red";
    return;
  }

  mensaje.textContent = "Cliente registrado correctamente.";
  mensaje.style.color = "green";
});
