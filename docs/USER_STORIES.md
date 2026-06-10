# Historias de Usuario — CarnivalWeb / AZARGame

**Formato:** "Como [rol], quiero [acción] para [beneficio]"
**Estimación:** escala Fibonacci — 1 (trivial) · 2 · 3 · 5 · 8 (muy complejo)

> **Criterio de priorización:** 4 historias esenciales por juego (MVP jugable) + 3 extras (mejora de experiencia).
> Las historias de nombre por juego quedan consolidadas en **US-63** (transversal).

---

## Landing Page (Todos — Sprint 1)

| ID    | Historia de usuario | Puntos | Sprint |
|-------|---------------------|--------|--------|
| US-01 | Como visitante, quiero ver una pantalla de inicio con todos los juegos disponibles para elegir a cuál jugar | 3 | 1 |
| US-02 | Como visitante, quiero hacer clic en un juego del menú para acceder directamente a él | 2 | 1 |

---

## Piedra, Papel o Tijeras — Jean

### 🟢 Esenciales — Sprint 1 (el juego debe ser jugable)

| ID    | Historia de usuario | Puntos |
|-------|---------------------|--------|
| US-52 | Como jugador, quiero que la máquina elija aleatoriamente para que el juego sea imparcial | 2 |
| US-53 | Como jugador, quiero elegir entre piedra, papel o tijera con clic para hacer mi jugada | 2 |
| US-55 | Como jugador, quiero ver el marcador actualizarse tras cada ronda para saber quién va ganando | 2 |
| US-56 | Como jugador, quiero ver una alerta final con el resultado para saber si gané la partida | 2 |

> US-52 y US-53 son el núcleo del juego: sin ellas no existe interacción.
> US-55 y US-56 son el feedback mínimo sin el que el usuario no sabe qué pasó.

### 🟡 Extras — Sprint 2 (mejoran la experiencia, no bloquean el MVP)

| ID    | Historia de usuario | Puntos | Por qué es extra |
|-------|---------------------|--------|-----------------|
| US-51 | Como jugador, quiero jugar 3 rondas por partida para tener un resultado justo | 2 | El juego funciona con 1 ronda; las 3 rondas son una mejora de estructura, no un requisito mínimo. |
| US-54 | Como jugador, quiero ver las dos elecciones revelarse al mismo tiempo con animación para que sea emocionante | 3 | La animación enriquece la experiencia pero no afecta a la jugabilidad. |
| US-57 | Como jugador, quiero ver un temporizador por ronda para que haya más presión | 3 | La presión temporal es un plus de dificultad, no una mecánica central. |

---

## Random Lucky — Claudia

### 🟢 Esenciales — Sprint 1 (el juego debe ser jugable)

| ID    | Historia de usuario | Puntos |
|-------|---------------------|--------|
| US-10 | Como usuario, quiero ingresar nombres a una lista para poder asignarles mensajes de suerte | 2 |
| US-11 | Como usuario, quiero que se asigne un mensaje de suerte aleatorio a cada nombre para descubrir mi fortuna | 3 |
| US-12 | Como usuario, quiero ver el mensaje en un aviso/popup para que el resultado sea claro y llamativo | 2 |
| US-15 | Como usuario, quiero ver un aviso de error si intento usar la app con la lista vacía para evitar confusiones | 1 |

> US-10 y US-11 son la mecánica completa: lista + asignación aleatoria. Sin ellas no hay aplicación.
> US-12 es el único punto de feedback al usuario. US-15 evita errores silenciosos que rompen la experiencia.

### 🟡 Extras — Sprint 2 (mejoran la experiencia, no bloquean el MVP)

| ID    | Historia de usuario | Puntos | Por qué es extra |
|-------|---------------------|--------|-----------------|
| US-13 | Como usuario, quiero poder editar un nombre de la lista para corregir errores | 2 | El flujo principal no requiere edición; se puede borrar y volver a añadir. |
| US-14 | Como usuario, quiero poder eliminar un nombre de la lista para gestionarla libremente | 2 | Útil pero no bloquea: el usuario puede reiniciar si comete un error. |
| US-16 | Como usuario, quiero reiniciar la aplicación para comenzar una nueva sesión | 1 | La función la cumple el botón de reinicio transversal (US-61) o recargar la página. |

---

## Trileros — Boris

### 🟢 Esenciales — Sprint 1 (el juego debe ser jugable)

| ID    | Historia de usuario | Puntos |
|-------|---------------------|--------|
| US-22 | Como jugador, quiero ver tres cubiletes que oculten una bolita para poder jugar | 5 |
| US-23 | Como jugador, quiero ver los cubiletes mezclarse con animación para que el juego sea emocionante | 5 |
| US-24 | Como jugador, quiero seleccionar un cubilete con clic para indicar mi elección | 2 |
| US-25 | Como jugador, quiero ver inmediatamente si acerté o fallé para obtener feedback del resultado | 2 |

> US-22 y US-23 son el juego: sin cubiletes visibles y sin mezcla animada, los trileros no existen.
> US-24 es la única interacción del usuario. US-25 es el feedback mínimo para saber si se ganó o perdió.

### 🟡 Extras — Sprint 2 (mejoran la experiencia, no bloquean el MVP)

| ID    | Historia de usuario | Puntos | Por qué es extra |
|-------|---------------------|--------|-----------------|
| US-26 | Como jugador, quiero que se muestre el cubilete correcto cuando fallo para aprender del resultado | 2 | El usuario ya sabe que perdió con US-25; mostrar el cubilete correcto es un añadido pedagógico. |
| US-27 | Como jugador, quiero ver un temporizador durante la mezcla para que el juego sea más tenso | 3 | La tensión ya la genera la animación de mezcla; el temporizador es una capa de dificultad extra. |
| US-28 | Como jugador, quiero ver mi puntuación acumulada para saber cuántas veces he acertado | 3 | Añade rejugabilidad pero el juego es completo ronda a ronda sin marcador persistente. |

---

## Parejas — Jordi

### 🟢 Esenciales — Sprint 1 (el juego debe ser jugable)

| ID    | Historia de usuario | Puntos |
|-------|---------------------|--------|
| US-32 | Como jugador, quiero ver un tablero de cartas boca abajo para empezar a buscar parejas | 5 |
| US-33 | Como jugador, quiero hacer clic en una carta para voltearla y ver su imagen | 3 |
| US-34 | Como jugador, quiero que las cartas se volteen con animación para que el juego se sienta fluido | 3 |
| US-35 | Como jugador, quiero que las parejas encontradas queden visibles para saber cuántas me faltan | 2 |

> US-32 y US-33 son el tablero y la interacción; sin ellos no hay juego.
> US-34: la animación de volteo es parte de la mecánica visual del juego de memoria, no un adorno.
> US-35 da el estado del juego en todo momento; sin ella el usuario no sabe si ha terminado.

### 🟡 Extras — Sprint 2 (mejoran la experiencia, no bloquean el MVP)

| ID    | Historia de usuario | Puntos | Por qué es extra |
|-------|---------------------|--------|-----------------|
| US-36 | Como jugador, quiero ver un temporizador para saber cuánto tiempo llevo jugando | 2 | El juego se puede completar sin medir el tiempo; el temporizador añade reto pero no es la mecánica central. |
| US-37 | Como jugador, quiero ver mi puntuación (intentos) para evaluar mi rendimiento | 2 | El juego termina cuando se encuentran todas las parejas; el contador de intentos es una métrica de mejora opcional. |
| US-38 | Como jugador, quiero elegir nivel de dificultad (más cartas) para aumentar el reto | 5 | Mayor complejidad de desarrollo (5 puntos) para un añadido que no cambia la mecánica base. Primera candidata a cortar si hay presión de tiempo. |

---

## Tiro al Blanco — Todos ⭐ JUEGO EXTRA

> Este juego es el extra del equipo. Sus historias esenciales van a Sprint 2 solo si hay capacidad.
> Tiro al Blanco es técnicamente el más complejo (colisiones, canvas/DOM animado, eventos de ratón).

### 🟢 Esenciales del extra — Sprint 2 (si hay capacidad)

| ID    | Historia de usuario | Puntos |
|-------|---------------------|--------|
| US-42 | Como jugador, quiero ver una mirilla que pueda mover para apuntar a los blancos | 5 |
| US-43 | Como jugador, quiero que los blancos se muevan con animación para que el juego sea desafiante | 5 |
| US-44 | Como jugador, quiero disparar haciendo clic para intentar derribar un blanco | 3 |
| US-45 | Como jugador, quiero recibir una alerta cuando alcance un blanco para obtener feedback inmediato | 2 |

### 🟡 Extras del extra — Solo si sobra tiempo en Sprint 2

| ID    | Historia de usuario | Puntos | Por qué es extra |
|-------|---------------------|--------|-----------------|
| US-46 | Como jugador, quiero ver un temporizador para saber cuánto tiempo me queda | 2 | Sin temporizador el juego sigue siendo funcional; el límite de tiempo añade presión. |
| US-47 | Como jugador, quiero ver mi puntuación en tiempo real para saber cuántos blancos derribé | 3 | El feedback por alerta (US-45) ya informa del acierto; el marcador acumulado es un plus. |
| US-48 | Como jugador, quiero que mi puntuación se guarde en localStorage para ver mi récord | 2 | Ver razón de eliminación del patrón localStorage más abajo. |

---

## UX/UI Transversal (todos los juegos)

### 🟢 Esenciales — Sprint 1

| ID    | Historia de usuario | Puntos |
|-------|---------------------|--------|
| US-63 | Como usuario, quiero una pantalla de inicio en cada juego donde ingresar mi nombre antes de jugar | 2 |
| US-61 | Como usuario, quiero un botón de reinicio visible en cada juego para empezar de nuevo cuando quiera | 1 |

### 🟡 Extras — Sprint 2

| ID    | Historia de usuario | Puntos |
|-------|---------------------|--------|
| US-03 | Como usuario, quiero que la web funcione bien en móvil y escritorio para jugar desde cualquier dispositivo | 3 |
| US-62 | Como usuario, quiero animaciones y transiciones en toda la app para que se sienta viva y atractiva | 3 |
| US-60 | Como usuario, quiero efectos de sonido en las acciones clave para que la experiencia sea más inmersiva | 3 |

---

## Historias eliminadas del scope

Estas historias han sido retiradas del backlog y **no se negocian** — se justifica su exclusión al cliente:

| ID | Historia | Puntos | Razón |
|----|----------|--------|-------|
| US-17 | Guardar resultados en localStorage (Random Lucky) | 3 | Sin login ni perfil de usuario, guardar datos localmente no aporta valor real. Un usuario de feria no vuelve al mismo dispositivo. |
| US-18 | Historial de sorteos anteriores (Random Lucky) | 3 | Depende de US-17. Sin persistencia no hay historial posible. |
| US-29 | Guardar puntuación en localStorage (Trileros) | 2 | Sin leaderboard social ni comparativa, el récord local no genera retención. |
| US-39 | Guardar récord en localStorage (Parejas) | 2 | Misma razón que US-29. |
| US-58 | Guardar resultados en localStorage (PPT) | 2 | Misma razón. Patrón repetido en 4 juegos sin ningún backend que lo respalde. |

> **Argumento único para el cliente:** El localStorage tiene sentido si hay un perfil, un ranking o una sesión. En el MVP no hay nada de eso. Si en v2 se añade backend con usuarios, se implementa correctamente. Hacerlo ahora es trabajo que se tirará.

---

## Resumen del Product Backlog

| Área | Sprint 1 (esenciales) | Sprint 2 (extras) | Total comprometido |
|------|----------------------|-------------------|--------------------|
| Landing page | 5 | — | 5 |
| Piedra, Papel o Tijeras (Jean) | 8 | 8 | 16 |
| Random Lucky (Claudia) | 8 | 5 | 13 |
| Trileros (Boris) | 14 | 8 | 22 |
| Parejas (Jordi) | 13 | 9 | 22 |
| Tiro al Blanco ⭐ extra | — | 15 + 7 | 22 |
| UX/UI transversal | 3 | 9 | 12 |
| **TOTAL** | **51** | **61** | **112** |
| *Eliminado del scope* | | | *-10 pts* |

---

## Sprint Backlog

### Sprint 1 (Días 1–4) — Lógica base, todos los juegos jugables

- Setup del repo: ramas, estructura de carpetas, landing page
- US-63 (transversal): pantalla de nombre en cada juego
- Cada jugador implementa sus **4 historias esenciales** (lógica JS sin pulir)
- Objetivo: todos los juegos del equipo son jugables aunque sean feos

**Juegos comprometidos en Sprint 1:** Piedra/Papel/Tijeras · Random Lucky · Trileros · Parejas

### Sprint 2 (Días 5–8) — Pulido, animaciones y Tiro al Blanco

- CSS completo: diseño mobile-first, variables, responsive (US-03)
- Animaciones y transiciones (US-62) + efectos de sonido (US-60)
- Temporizadores y sistemas de puntuación (extras de cada juego)
- **Tiro al Blanco:** implementar las 4 historias esenciales entre todos
- Extras de Tiro al Blanco solo si queda tiempo
- Preparar presentación
