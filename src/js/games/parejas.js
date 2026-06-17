// ---------- Constants ----------
const CARD_ICONS = [
    'rocket',
    'controller',
    'celebration',
    'circus',
    'popcorn',
    'sharp-five',
    'sparkle',
    'ticket'
];

const CARD_BACK_SRC = '../assets/images/espalda.png';
const CARD_FRONT_PREFIX = '../assets/images/';
const CARD_FRONT_SUFFIX = '.png';

const MAX_PAIRS = CARD_ICONS.length; // 8
const FLIP_BACK_DELAY_MS = 800;

// ---------- DOM ----------
const tablero = document.getElementById('tablero');
const resultadoEl = document.getElementById('resultado');
const puntosEl = document.getElementById('puntos-usuario');
const btnReinicio = document.getElementById('btn-reinicio');

// ---------- State ----------
let cards = [];          // shuffled array of 16 icon names
let flippedCards = [];   // up to 2 .carta elements currently flipped
let matchedPairs = 0;    // count of pairs found
let intentos = 0;        // score = number of flip attempts
let isLocked = false;    // true while two cards are being compared

// ---------- Helpers ----------
function shuffle(array) {
    const a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function frontSrc(icon) {
    return CARD_FRONT_PREFIX + icon + CARD_FRONT_SUFFIX;
}

// ---------- Build & render ----------
function buildDeck() {
    cards = shuffle([...CARD_ICONS, ...CARD_ICONS]);
}

function renderBoard() {
    tablero.innerHTML = '';
    cards.forEach((icon) => {
        const carta = document.createElement('button');
        carta.type = 'button';
        carta.className = 'carta';
        carta.dataset.icon = icon;
        carta.setAttribute('aria-label', 'Carta boca abajo');

        carta.innerHTML = `
            <span class="carta-inner">
                <img class="carta-back" src="${CARD_BACK_SRC}" alt="" aria-hidden="true">
                <img class="carta-face" src="${frontSrc(icon)}" alt="${icon}" aria-hidden="true">
            </span>
        `;

        tablero.appendChild(carta);
    });
}

// ---------- Game flow ----------
function flipCard(carta) {
    if (isLocked) return;
    if (carta.classList.contains('flipped')) return;
    if (carta.classList.contains('matched')) return;

    carta.classList.add('flipped');
    carta.setAttribute('aria-label', `Carta ${carta.dataset.icon}`);
    flippedCards.push(carta);

    if (flippedCards.length === 2) {
        intentos++;
        updateScore();
        checkMatch();
    }
}

function checkMatch() {
    isLocked = true;
    const [a, b] = flippedCards;
    const isMatch = a.dataset.icon === b.dataset.icon;

    if (isMatch) {
        a.classList.add('matched');
        b.classList.add('matched');
        matchedPairs++;
        flippedCards = [];
        isLocked = false;
        if (matchedPairs === MAX_PAIRS) {
            endGame();
        }
    } else {
        setTimeout(() => {
            a.classList.remove('flipped');
            b.classList.remove('flipped');
            a.setAttribute('aria-label', 'Carta boca abajo');
            b.setAttribute('aria-label', 'Carta boca abajo');
            flippedCards = [];
            isLocked = false;
        }, FLIP_BACK_DELAY_MS);
    }
}

function endGame() {
    resultadoEl.textContent = `¡Ganaste en ${intentos} intentos! 🎉`;
}

function updateScore() {
    puntosEl.textContent = intentos;
}

function initGame() {
    matchedPairs = 0;
    flippedCards = [];
    intentos = 0;
    isLocked = false;
    buildDeck();
    renderBoard();
    updateScore();
    resultadoEl.textContent = 'Encuentra las 8 parejas.';
}

function resetGame() {
    initGame();
}

// ---------- Event wiring ----------
tablero.addEventListener('click', (e) => {
    const carta = e.target.closest('.carta');
    if (carta) flipCard(carta);
});

btnReinicio.addEventListener('click', resetGame);

initGame();
