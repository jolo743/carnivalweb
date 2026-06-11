# Backlog y configuración de vistas — Linear / GitHub Projects

> Basado en [`USER_STORIES.md`](USER_STORIES.md). Listo para copiar en Linear o cualquier board Kanban.
> Fechas: Sprint 1 = Días 1–4 · Sprint 2 = Días 5–8

---

## Vistas recomendadas

| Vista | Tipo | Agrupar por | Filtro |
|---|---|---|---|
| **Sprint 1** | Board (Kanban) | Status | Sprint = 1 |
| **Sprint 2 / Backlog** | Board (Kanban) | Status | Sprint = 2 |
| **Por miembro** | Board | Assignee | — |
| **Priority board** | Board | Priority | — |
| **Roadmap** | Timeline | Sprint | — |
| **Tiro al Blanco** | List | — | Juego = Tiro al Blanco |

---

## Priority Board — columnas P1 / P2 / P3

### P1 — Bloqueantes (el juego no existe sin estas)

| ID | Título | Assignee | Puntos | Juego |
|---|---|---|---|---|
| US-22 | Ver tres cubiletes que oculten una bolita | Boris | 5 | Trileros |
| US-23 | Ver cubiletes mezclarse con animación | Boris | 5 | Trileros |
| US-32 | Ver tablero de cartas boca abajo | Jordi | 5 | Parejas |
| US-33 | Clic en carta para voltearla | Jordi | 3 | Parejas |
| US-34 | Cartas se voltean con animación | Jordi | 3 | Parejas |
| US-52 | Máquina elige aleatoriamente | Jean | 2 | PPT |
| US-53 | Elegir entre piedra, papel o tijera con clic | Jean | 2 | PPT |
| US-10 | Ingresar nombres a una lista | Claudia | 2 | Random Lucky |
| US-11 | Asignar mensaje de suerte aleatorio a cada nombre | Claudia | 3 | Random Lucky |
| US-63 | Pantalla de inicio con campo de nombre en cada juego | Todos | 2 | Transversal |
| US-01 | Landing page con todos los juegos | Todos | 3 | Landing |
| US-02 | Clic en un juego redirige al juego | Todos | 2 | Landing |

**Total P1: 37 puntos**

---

### P2 — Feedback mínimo (el jugador no sabe qué pasó sin estas)

| ID | Título | Assignee | Puntos | Juego |
|---|---|---|---|---|
| US-24 | Seleccionar cubilete con clic | Boris | 2 | Trileros |
| US-25 | Ver inmediatamente si acertó o falló | Boris | 2 | Trileros |
| US-35 | Parejas encontradas quedan visibles | Jordi | 2 | Parejas |
| US-55 | Marcador se actualiza tras cada ronda | Jean | 2 | PPT |
| US-56 | Alerta final con el resultado de la partida | Jean | 2 | PPT |
| US-12 | Mensaje de suerte aparece en popup/aviso | Claudia | 2 | Random Lucky |
| US-15 | Aviso de error si la lista está vacía | Claudia | 1 | Random Lucky |
| US-61 | Botón de reinicio visible en cada juego | Todos | 1 | Transversal |

**Total P2: 14 puntos**

---

### P3 — Extras Sprint 2 (mejoran la experiencia, no bloquean el MVP)

| ID | Título | Assignee | Puntos | Juego |
|---|---|---|---|---|
| US-51 | 3 rondas por partida | Jean | 2 | PPT |
| US-54 | Animación al revelar las elecciones | Jean | 3 | PPT |
| US-57 | Temporizador por ronda (PPT) | Jean | 3 | PPT |
| US-13 | Editar nombre de la lista | Claudia | 2 | Random Lucky |
| US-14 | Eliminar nombre de la lista | Claudia | 2 | Random Lucky |
| US-16 | Reiniciar sesión (Random Lucky) | Claudia | 1 | Random Lucky |
| US-26 | Mostrar cubilete correcto al fallar | Boris | 2 | Trileros |
| US-27 | Temporizador durante la mezcla | Boris | 3 | Trileros |
| US-28 | Puntuación acumulada (Trileros) | Boris | 3 | Trileros |
| US-36 | Temporizador (Parejas) | Jordi | 2 | Parejas |
| US-37 | Contador de intentos (Parejas) | Jordi | 2 | Parejas |
| US-38 | Elegir nivel de dificultad | Jordi | 5 | Parejas |
| US-03 | Responsive mobile + escritorio | Todos | 3 | Transversal |
| US-62 | Animaciones y transiciones globales | Todos | 3 | Transversal |
| US-60 | Efectos de sonido en acciones clave | Todos | 3 | Transversal |

**Total P3: 39 puntos**

---

### Tiro al Blanco ⭐ — Sprint 2 si hay capacidad

> No entra en P1/P2/P3 hasta cerrar Sprint 1. Crear como epic separado.

| ID | Tipo | Título | Assignee | Puntos |
|---|---|---|---|---|
| US-42 | Esencial | Mirilla que se puede mover | Todos | 5 |
| US-43 | Esencial | Blancos en movimiento con animación | Todos | 5 |
| US-44 | Esencial | Disparar haciendo clic | Todos | 3 |
| US-45 | Esencial | Alerta al alcanzar un blanco | Todos | 2 |
| US-46 | Extra | Temporizador de partida | Todos | 2 |
| US-47 | Extra | Puntuación en tiempo real | Todos | 3 |

---

## Items eliminados del scope (no negociables)

| ID | Motivo |
|---|---|
| US-17 / US-18 | localStorage sin backend ni perfil de usuario no aporta valor |
| US-29 / US-39 / US-58 | Mismo patrón en 4 juegos: récord local sin leaderboard social |

---

## Resumen de carga por persona

| Persona | Juego | P1 | P2 | Sprint 2 | Total comprometido |
|---|---|---|---|---|---|
| Boris | Trileros | 10 | 4 | 8 | 22 |
| Jordi | Parejas | 11 | 2 | 9 | 22 |
| Jean | PPT | 4 | 4 | 8 | 16 |
| Claudia | Random Lucky | 5 | 3 | 5 | 13 |
| Todos | Landing + Transversal + Tiro | 7 | 1 | 21 | 29 |

---

## Cómo configurar las vistas en Linear

### Sprint 1 Board
1. `+ New view` → Board
2. Group by: **Status**
3. Filter: `Sprint = 1` (o label "sprint-1")
4. Columnas: `Backlog → Todo → In Progress → In Review → Done`

### Priority Board
1. `+ New view` → Board
2. Group by: **Priority**
3. Sin filtro de sprint (muestra todo)
4. Columnas: `No Priority → P1 → P2 → P3`

### By Member
1. `+ New view` → Board
2. Group by: **Assignee**
3. Sin filtro — cada columna es una persona
4. Útil para daily standup

### Roadmap
1. `+ New view` → Timeline / Roadmap
2. Group by: **Sprint**
3. Asignar fechas: Sprint 1 = Días 1–4, Sprint 2 = Días 5–8

### Tiro al Blanco (epic)
1. Crear epic "Tiro al Blanco ⭐"
2. `+ New view` → List
3. Filter: `Epic = Tiro al Blanco`
4. Status inicial de todos: `Backlog` hasta cerrar Sprint 1
