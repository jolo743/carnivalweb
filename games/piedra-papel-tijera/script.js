// Obtener referencias a los elementos del DOM
const buttons = document.querySelectorAll('.choices button');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const roundResultP = document.getElementById('round-result');
const gameStatusP = document.getElementById('game-status');
const resetButton = document.getElementById('reset');

// Constantes del juego
const CHOICES = ['piedra', 'papel', 'tijera'];
const WINNING_SCORE = 5;

// Inicializar el marcador
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

// Mapa de reglas: cada elección apunta a la jugada que la vence
const RULES = {
    piedra: 'tijera',
    papel: 'piedra',
    tijera: 'papel',
};

// Función para que la computadora elija una opción aleatoria
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomIndex];
}

// Función principal que juega una ronda
function playRound(playerChoice) {
    if (gameOver) {
        return;
    }

    const computerChoice = getComputerChoice();
    let result;

    if (playerChoice === computerChoice) {
        result = `Empate: ambos eligieron ${playerChoice}.`;
    } else if (RULES[playerChoice] === computerChoice) {
        // El jugador gana
        playerScore++;
        result = `¡Ganaste esta ronda! ${playerChoice} vence a ${computerChoice}.`;
    } else {
        // La computadora gana
        computerScore++;
        result = `Perdiste esta ronda: ${computerChoice} vence a ${playerChoice}.`;
    }

    // Actualizar el DOM con los resultados
    roundResultP.textContent = result;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    checkGameOver();
}

// Comprueba si alguien llegó al puntaje máximo y muestra el resultado final
function checkGameOver() {
    if (playerScore < WINNING_SCORE && computerScore < WINNING_SCORE) {
        return;
    }

    gameOver = true;
    buttons.forEach(button => {
        button.disabled = true;
    });
    resetButton.hidden = false;

    if (playerScore > computerScore) {
        gameStatusP.textContent = '¡Felicidades! Ganaste el juego 🎉';
    } else {
        gameStatusP.textContent = 'La computadora ganó el juego. Inténtalo de nuevo.';
    }
}

// Reinicia el marcador y vuelve a habilitar los botones
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;

    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    roundResultP.textContent = 'Elige una opción para jugar.';
    gameStatusP.textContent = '';

    buttons.forEach(button => {
        button.disabled = false;
    });
    resetButton.hidden = true;
}

// Añadir un "escuchador de eventos" a cada botón
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        playRound(playerChoice);
    });
});

// Reiniciar el juego
resetButton.addEventListener('click', resetGame);
