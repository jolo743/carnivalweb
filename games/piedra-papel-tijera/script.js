// Variables globales para el marcador
let victoriasUsuario = 0;
let victoriasComputadora = 0;
const PUNTO_MAXIMO = 7; 

// Referencias a los elementos del DOM
const puntosUsuarioTxt = document.getElementById('puntos-usuario');
const puntosComputadoraTxt = document.getElementById('puntos-computadora');
const resultadoTxt = document.getElementById('resultado');

const btnPiedra = document.getElementById('btn-piedra');
const btnPapel = document.getElementById('btn-papel');
const btnTijeras = document.getElementById('btn-tijeras');
const btnReinicio = document.getElementById('btn-reinicio');

// Función principal del juego
function jugar(eleccionUsuario) {
    // Si ya hay un ganador definitivo, no hace nada al presionar los botones
    if (victoriasUsuario === PUNTO_MAXIMO || victoriasComputadora === PUNTO_MAXIMO) {
        return;
    }

    const opciones = ['piedra', 'papel', 'tijeras'];
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    let mensaje = `Elegiste <b>${eleccionUsuario}</b>. La computadora eligió <b>${eleccionComputadora}</b>.<br><br>`;

    // Lógica de la ronda
    if (eleccionUsuario === eleccionComputadora) {
        mensaje += "¡Es un empate! 😐";
    } else if (
        (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijeras') ||
        (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionUsuario === 'tijeras' && eleccionComputadora === 'papel')
    ) {
        mensaje += "¡Ganaste esta ronda! 🎉";
        victoriasUsuario++;
    } else {
        mensaje += "¡Perdiste esta ronda! 💀";
        victoriasComputadora++;
    }

    // Actualizar la interfaz con los puntos de la ronda
    puntosUsuarioTxt.textContent = victoriasUsuario;
    puntosComputadoraTxt.textContent = victoriasComputadora;

    // Verificar si alguien llegó al límite de puntos
    if (victoriasUsuario === PUNTO_MAXIMO) {
        mensaje = `🏆 ¡FELICIDADES! Has ganado la partida completa al llegar a ${PUNTO_MAXIMO} puntos. 🏆`;
        desactivarBotones(true);
    } else if (victoriasComputadora === PUNTO_MAXIMO) {
        mensaje = `🤖 ¡OH NO! La computadora ha ganado la partida completa al llegar a ${PUNTO_MAXIMO} puntos. 🤖`;
        desactivarBotones(true);
    }

    resultadoTxt.innerHTML = mensaje;
}

// Función para activar o desactivar los botones de juego
function desactivarBotones(estado) {
    btnPiedra.disabled = estado;
    btnPapel.disabled = estado;
    btnTijeras.disabled = estado;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    victoriasUsuario = 0;
    victoriasComputadora = 0;
    
    puntosUsuarioTxt.textContent = victoriasUsuario;
    puntosComputadoraTxt.textContent = victoriasComputadora;
    resultadoTxt.innerHTML = "El juego se ha reiniciado. ¡Elige otra vez!";
    
    // Volver a activar los botones para una nueva partida
    desactivarBotones(false);
}

// Asignar los eventos de clic a los botones
btnPiedra.addEventListener('click', () => jugar('piedra'));
btnPapel.addEventListener('click', () => jugar('papel'));
btnTijeras.addEventListener('click', () => jugar('tijeras'));
btnReinicio.addEventListener('click', reiniciarJuego);
