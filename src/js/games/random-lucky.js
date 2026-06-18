          // ============================================
          // VARIABLES GLOBALES Y CONFIGURACIÓN
          // ============================================

          // Array con 20 mensajes positivos y divertidos
          const luckyMessages = [
              "hoy tendrás una sorpresa inesperada que te hará sonreír.",
              "la suerte está de tu lado, aprovecha este momento mágico.",
              "un viejo amigo se acordará de ti con cariño.",
              "encontrarás algo que creías perdido hace mucho tiempo.",
              "hoy es un día perfecto para empezar algo nuevo.",
              "tu carisma atraerá buenas oportunidades.",
              "recibirás una noticia que cambiará tu semana para mejor.",
              "la suerte te persigue pero tu eres más rápido",
              "alguien especial está pensando en ti ahora mismo.",
              "tu próximo deseo se cumplirá antes de lo que imaginas.",
              "hoy descubrirás un talento oculto que tienes (callarte).",
              "la energía positiva que envías volverá a ti multiplicada.",
              "deja de jugar a la ruleta y ponte a trabajar.",
              "tendrás la respuesta que llevas tiempo buscando.",
              "hoy es tu día de suerte, atrévete a soñar a lo grande.",
              "recibirás un cumplido que te alegrará el corazón.",
              "brillas por tu ausencia",
              "una aventura inesperada te espera a la vuelta de la esquina.",
              "hoy todo te saldrá bien, ¡disfrútalo al máximo!",
              "tu sonrisa tiene el poder de alegrar el día de alguien."
          ];

          // Estado de la aplicación
          let isSpinning = false;
          let spinCount = 0;
          let currentRotation = 0;

          // ============================================
          // ELEMENTOS DEL DOM
          // ============================================
          const wheelImage = document.getElementById('wheelImage');
          const spinButton = document.getElementById('spinButton');
          const nameInput = document.getElementById('nameInput');
          const errorMessage = document.getElementById('errorMessage');
          const resultContainer = document.getElementById('resultContainer');
          const resultText = document.getElementById('resultText');
          const resultClose = document.getElementById('resultClose');
          const spinCounter = document.getElementById('spinCounter');
          const nameForm = document.getElementById('nameForm');

          // ============================================
          // WEB AUDIO API - SONIDO DE GIRO
          // ============================================
          let audioContext = null;

          // Inicializa el contexto de audio al primer clic (los navegadores lo requieren)
          function initAudio() {
              if (!audioContext) {
                  audioContext = new (window.AudioContext || window.webkitAudioContext)();
              }
          }

          // Reproduce un "tick" durante el giro
          function playTick() {
              if (!audioContext) return;
              const oscillator = audioContext.createOscillator();
              const gainNode = audioContext.createGain();

              oscillator.connect(gainNode);
              gainNode.connect(audioContext.destination);

              oscillator.frequency.value = 800;
              oscillator.type = 'sine';

              gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
              gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime +
  0.05);

              oscillator.start(audioContext.currentTime);
              oscillator.stop(audioContext.currentTime + 0.05);
          }

          // Reproduce un sonido de victoria al terminar
          function playWinSound() {
              if (!audioContext) return;
              const notes = [523.25, 659.25, 783.99, 1046.50]; // Do, Mi, Sol, Do octava
              notes.forEach((freq, i) => {
                  const oscillator = audioContext.createOscillator();
                  const gainNode = audioContext.createGain();

                  oscillator.connect(gainNode);
                  gainNode.connect(audioContext.destination);

                  oscillator.frequency.value = freq;
                  oscillator.type = 'sine';

                  const startTime = audioContext.currentTime + i * 0.12;
                  gainNode.gain.setValueAtTime(0.2, startTime);
                  gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);

                  oscillator.start(startTime);
                  oscillator.stop(startTime + 0.3);
              });
          }

          // ============================================
          // LÓGICA PRINCIPAL DEL GIRO
          // ============================================
          function spinWheel() {
              // Inicializa el audio (necesario por restricciones del navegador)
              initAudio();

              // Valida que el nombre no esté vacío
              const name = nameInput.value.trim();
              if (name === '') {
                  errorMessage.textContent = '⚠️  Por favor, introduce tu nombre para continuar.';
                  nameInput.style.borderColor = '#e74c3c';
                  nameInput.focus();
                  return;
              }

              // Limpia el error si todo está bien
              errorMessage.textContent = '';
              nameInput.style.borderColor = '#ddd';

              // Deshabilita el botón mientras gira
              isSpinning = true;
              spinButton.disabled = true;
              spinButton.textContent = '🎰 Girando...';
              resultContainer.classList.remove('show');

              // Calcula un giro aleatorio (mínimo 5 vueltas completas + ángulo random)
              const extraSpins = 5;
              const randomAngle = Math.random() * 360;
              const totalRotation = (extraSpins * 360) + randomAngle;
              currentRotation += totalRotation;

              // Aplica la rotación con animación CSS. Reiniciamos la transformación
              // antes para forzar el reinicio de la transición en cada giro.
              wheelImage.style.transition = 'none';
              wheelImage.style.transform = `rotate(${currentRotation - totalRotation}deg)`;
              // Forzar reflow para que el navegador registre la posición inicial
              void wheelImage.offsetWidth;
              wheelImage.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.21, 0.99)';
              wheelImage.style.transform = `rotate(${currentRotation}deg)`;

              // Reproduce ticks durante el giro (simula el sonido de la ruleta)
              let tickInterval = setInterval(playTick, 200);

              // Cuando termina la animación (4 segundos)
              setTimeout(() => {
                  clearInterval(tickInterval);
                  isSpinning = false;
                  spinButton.disabled = false;
                  spinButton.textContent = '🎲 Girar la ruleta';

                  // Incrementa el contador
                  spinCount++;
                  spinCounter.textContent = spinCount;

                  // Selecciona un mensaje aleatorio
                  const randomMessage = luckyMessages[Math.floor(Math.random() *
  luckyMessages.length)];
                  const capitalizedName = name.charAt(0).toUpperCase() +
  name.slice(1).toLowerCase();

                  // Muestra el resultado personalizado dentro del modal
                  resultText.innerHTML = `<span class="result-name">${capitalizedName}</span>${randomMessage}`;
                  resultContainer.classList.add('show');
                  resultContainer.setAttribute('aria-hidden', 'false');
                  // Mueve el foco al botón de cerrar para usuarios de teclado/lector
                  resultClose.focus();

                  // Reproduce el sonido de victoria
                  playWinSound();
              }, 4000);
          }

          // Cierra el modal de resultado y devuelve el foco al botón de girar
          function closeResult() {
              resultContainer.classList.remove('show');
              resultContainer.setAttribute('aria-hidden', 'true');
              spinButton.focus();
          }

          // ============================================
          // EVENT LISTENERS
          // ============================================

          // Spin desde el formulario (click en el botón o Enter en el input)
          nameForm.addEventListener('submit', (e) => {
              e.preventDefault();
              spinWheel();
          });

          // Limpia el error cuando el usuario empieza a escribir
          nameInput.addEventListener('input', () => {
              if (nameInput.value.trim() !== '') {
                  errorMessage.textContent = '';
                  nameInput.style.borderColor = '#ddd';
              }
          });

          // Cierra el modal con la X
          resultClose.addEventListener('click', closeResult);

          // Cierra el modal al hacer clic fuera de la tarjeta
          resultContainer.addEventListener('click', (e) => {
              if (e.target === resultContainer) {
                  closeResult();
              }
          });

          // Cierra el modal con la tecla Escape y devuelve el foco al botón
          document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape' && resultContainer.classList.contains('show')) {
                  closeResult();
                  spinButton.focus();
              }
          });

          // ============================================
          // INICIALIZACIÓN
          // ============================================
          // La ruleta es una imagen (ruleta.png), no necesita dibujarse.