document.getElementById("form-cliente").addEventListener("submit", function (e) {
  e.preventDefault();

  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "Cliente registrado correctamente.";
  mensaje.style.color = "green";
});
