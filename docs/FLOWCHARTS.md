# Flowcharts de Algoritmos — CarnivalWeb

> Este documento describe el flujo lógico de cada juego en formato de pasos.
> Usad este texto como base para crear los diagramas visuales en Figma.

---

## Random Lucky — Claudia

```
INICIO
  │
  ▼
¿Lista de nombres vacía?
  ├── SÍ → Mostrar aviso "Añade al menos un nombre" → FIN
  └── NO ↓
  │
  ▼
Seleccionar nombre aleatoriamente de la lista
  │
  ▼
Seleccionar mensaje de suerte aleatoriamente del array de mensajes
  │
  ▼
Mostrar popup/modal: "[Nombre]: [Mensaje de suerte]"
  │
  ▼
¿El usuario quiere reiniciar?
  ├── SÍ → Limpiar lista → volver a INICIO
  └── NO → Cerrar modal → el usuario puede añadir/editar/eliminar nombres
  │
  ▼
FIN DE RONDA
```

**Funciones clave a implementar:**
- `addName(name)` — añade nombre al array
- `editName(index, newName)` — edita un nombre por su posición
- `deleteName(index)` — elimina un nombre por su posición
- `drawLuck()` — selecciona nombre y mensaje aleatorio, muestra modal
- `resetApp()` — limpia todo y reinicia
- *(extra)* `saveToStorage()` / `loadFromStorage()` — guarda/carga desde localStorage

---

## Trileros — Boris

```
INICIO
  │
  ▼
Pantalla de entrada: usuario escribe su nombre → click "Jugar"
  │
  ▼
Colocar bolita aleatoriamente bajo uno de los 3 vasos (índice 0, 1 o 2)
  │
  ▼
ANIMACIÓN: mezclar vasos aleatoriamente N veces
  │
  ▼
Mostrar vasos en posición final → esperar que el usuario haga clic en un vaso
  │
  ▼
¿El vaso seleccionado contiene la bolita?
  ├── SÍ → Mostrar "¡Acertaste!" + animación de celebración
  │         *(extra)* sumar punto al marcador
  └── NO → Mostrar "¡Fallaste!" + revelar el vaso correcto
  │
  ▼
¿El usuario quiere volver a jugar?
  ├── SÍ → volver a "Colocar bolita"
  └── NO → FIN
```

**Funciones clave a implementar:**
- `placeBall()` — asigna posición aleatoria a la bolita
- `shuffleCups(times)` — intercambia vasos N veces con pausa entre cada uno
- `handleCupClick(index)` — evalúa si el vaso elegido tiene la bolita
- `revealBall()` — muestra dónde estaba la bolita realmente
- `resetRound()` — reinicia para una nueva ronda

---

## Parejas — Jordi

```
INICIO
  │
  ▼
Pantalla de entrada: usuario escribe su nombre → click "Jugar"
  │
  ▼
Generar array de pares de cartas → mezclar aleatoriamente (Fisher-Yates)
  │
  ▼
Renderizar tablero con todas las cartas boca abajo
Iniciar temporizador
  │
  ▼
BUCLE DE JUEGO:
  │
  ├── Usuario hace clic en carta 1
  │     → voltear carta 1 (animación CSS)
  │
  ├── Usuario hace clic en carta 2
  │     → voltear carta 2 (animación CSS)
  │
  ├── ¿Carta 1 === Carta 2?
  │     ├── SÍ → las cartas quedan visibles, sumar punto
  │     └── NO → voltear ambas boca abajo (después de breve pausa)
  │
  └── ¿Quedan pares por encontrar?
        ├── SÍ → continuar bucle
        └── NO → detener temporizador → mostrar pantalla de victoria
  │
  ▼
FIN DE PARTIDA
```

**Funciones clave a implementar:**
- `generateBoard(pairs)` — crea el array de cartas duplicadas y las mezcla
- `flipCard(card)` — voltea una carta con animación CSS
- `checkMatch(card1, card2)` — compara las dos cartas volteadas
- `updateScore()` — actualiza el marcador de parejas encontradas
- `startTimer()` / `stopTimer()` — gestiona el temporizador

---

## Tiro al Blanco — (por asignar)

```
INICIO
  │
  ▼
Pantalla de entrada: usuario escribe su nombre → click "Jugar"
  │
  ▼
Iniciar temporizador de cuenta atrás
Spawnear blancos en posiciones aleatorias con animación de movimiento
  │
  ▼
BUCLE DE JUEGO (mientras temporizador > 0):
  │
  ├── Usuario mueve el ratón → mirilla sigue al cursor
  │
  ├── Usuario hace clic
  │     → comprobar si la mirilla está sobre un blanco
  │     ├── SÍ → mostrar alerta/efecto de impacto
  │     │        eliminar blanco, *(extra)* sumar punto
  │     │        spawnear nuevo blanco
  │     └── NO → fallo (sin efecto)
  │
  └── ¿Temporizador = 0?
        └── SÍ → detener juego → mostrar resultado final
  │
  ▼
FIN DE PARTIDA
```

**Funciones clave a implementar:**
- `spawnTarget()` — crea un blanco en posición y dirección aleatoria
- `moveCrosshair(event)` — sigue al cursor del usuario
- `shoot(event)` — detecta clic y evalúa si hay impacto
- `hitDetection(crosshair, target)` — comprueba solapamiento entre mirilla y blanco
- `startTimer()` / `stopTimer()` — gestiona el temporizador

---

## Piedra, Papel o Tijeras — Jean (extra)

```
INICIO
  │
  ▼
Pantalla de entrada: usuario escribe su nombre → click "Jugar"
  │
  ▼
BUCLE DE RONDAS (3 rondas en total):
  │
  ├── Usuario elige: Piedra / Papel / Tijera (clic)
  │
  ├── Máquina elige aleatoriamente: Piedra / Papel / Tijera
  │
  ├── ANIMACIÓN: revelar ambas elecciones al mismo tiempo
  │
  ├── Evaluar resultado de la ronda:
  │     ├── Empate → nadie puntúa
  │     ├── Usuario gana → +1 punto usuario
  │     └── Máquina gana → +1 punto máquina
  │
  ├── Mostrar resultado de la ronda
  │     └── Actualizar marcador
  │
  └── ¿Quedan rondas?
        ├── SÍ → siguiente ronda
        └── NO → evaluar ganador general
  │
  ▼
¿Usuario tiene más puntos que la máquina?
  ├── SÍ → "¡Ganaste!" (alerta/animación)
  ├── NO → "¡Perdiste!" (alerta/animación)
  └── EMPATE → "¡Empate!"
  │
  ▼
FIN DE PARTIDA
```

**Funciones clave a implementar:**
- `machineChoice()` — devuelve elección aleatoria entre ['piedra', 'papel', 'tijera']
- `evaluateRound(player, machine)` — devuelve 'player', 'machine' o 'draw'
- `updateScore(winner)` — actualiza el marcador
- `revealChoices(player, machine)` — muestra las elecciones con animación
- `endGame(playerScore, machineScore)` — muestra resultado final

---

## Reglas de evaluación — Piedra, Papel o Tijeras

| Jugador  | Máquina  | Resultado     |
|----------|----------|---------------|
| Piedra   | Tijera   | Jugador gana  |
| Piedra   | Papel    | Máquina gana  |
| Papel    | Piedra   | Jugador gana  |
| Papel    | Tijera   | Máquina gana  |
| Tijera   | Papel    | Jugador gana  |
| Tijera   | Piedra   | Máquina gana  |
| Igual    | Igual    | Empate        |
