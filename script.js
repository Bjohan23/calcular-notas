// Obtener referencias a los elementos del formulario
var ecInput = document.getElementById("ec");
var edInput = document.getElementById("ed");
var epInput = document.getElementById("ep");
var eaInput = document.getElementById("ea");
var resultadoInput = document.getElementById("resultado");

// Agregar event listeners para el evento input en cada campo
ecInput.addEventListener("input", calcular);
edInput.addEventListener("input", calcular);
epInput.addEventListener("input", calcular);
eaInput.addEventListener("input", calcular);

function calcular() {
  // Obtener los valores de los campos
  var ec = parseFloat(ecInput.value) || 0;
  var ed = parseFloat(edInput.value) || 0;
  var ep = parseFloat(epInput.value) || 0;
  var ea = parseFloat(eaInput.value) || 0;

  // Calcular el resultado de la fórmula
  var resultado = ec * 0.25 + ed * 0.3 + ep * 0.4 + ea * 0.05;

  // Mostrar el resultado en el campo correspondiente
  resultadoInput.value = resultado.toFixed(2);
}
