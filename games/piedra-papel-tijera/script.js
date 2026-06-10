// Variables globales para el marcador
let victoriasUsuario = 0;
let victoriasComputadora = 0;

function jugar(eleccionUsuario) {
  const opciones = ["piedra", "papel", "tijeras"];
  const eleccionComputadora =
    opciones[Math.floor(Math.random() * 3)];

  let mensaje = `Elegiste <b>${eleccionUsuario}</b>. La computadora eligió <b>${eleccionComputadora}</b>.<br><br>`;

  // Lógica del juego y actualización de puntos
  if (eleccionUsuario === eleccionComputadora) {
    mensaje += "¡Es un empate! 😐";
  } else if (
    (eleccionUsuario === "piedra" &&
      eleccionComputadora === "tijeras") ||
    (eleccionUsuario === "papel" &&
      eleccionComputadora === "piedra") ||
    (eleccionUsuario === "tijeras" &&
      eleccionComputadora === "papel")
  ) {
    mensaje += "¡Ganaste esta ronda! 🎉";
    victoriasUsuario++; // Suma punto al usuario
  } else {
    mensaje += "¡Perdiste esta ronda! 💀";
    victoriasComputadora++; // Suma punto a la computadora
  }

  // Actualizar los elementos HTML en la pantalla
  document.getElementById("resultado").innerHTML = mensaje;
  document.getElementById("puntos-usuario").textContent =
    victoriasUsuario;
  document.getElementById(
    "puntos-computadora"
  ).textContent = victoriasComputadora;
}

// Función para reiniciar el juego
function reiniciarJuego() {
  victoriasUsuario = 0;
  victoriasComputadora = 0;

  // Limpiar la pantalla
  document.getElementById("puntos-usuario").textContent =
    victoriasUsuario;
  document.getElementById(
    "puntos-computadora"
  ).textContent = victoriasComputadora;
  document.getElementById("resultado").innerHTML =
    "El juego se ha reiniciado. ¡Elige otra vez!";
}
