# 🎡 CarnivalWeb — AZARGame

Plataforma de juegos de feria online desarrollada para **AZARGame** como MVP de su nueva línea de negocio "juegos típicos de ferias".

---

## Equipo

| Nombre  | Juego asignado              | Rama de trabajo              |
|---------|-----------------------------|------------------------------|
| Claudia | Random Lucky                | `feature/random-lucky`       |
| Boris   | Trileros                    | `feature/trileros`           |
| Jordi   | Parejas                     | `feature/parejas`            |
| Jean    | Piedra, Papel o Tijeras     | `feature/piedra-papel-tijera`|
| Todos   | Tiro al Blanco *(a definir)*| `feature/tiro-al-blanco`     |

---

## Juegos

| Juego                  | Descripción                                                        |
|------------------------|--------------------------------------------------------------------|
| Random Lucky           | Asigna mensajes de suerte aleatorios a una lista de nombres        |
| Trileros               | Adivina en qué vaso está escondida la bolita                       |
| Parejas                | Encuentra todas las parejas de cartas en el menor tiempo posible   |
| Tiro al Blanco         | Apunta y derriba los blancos en movimiento antes de que acabe el tiempo |
| Piedra, Papel o Tijeras *(extra)* | 3 rondas contra la máquina                             |

---

## Stack técnico

- **HTML5** — marcado semántico
- **CSS3** — variables, animaciones, mobile-first
- **JavaScript Vanilla** — sin frameworks ni dependencias
- **Figma** — diseño, wireframes y prototipos
- **Git / GitHub** — control de versiones con Gitflow

> No hay instalación de paquetes. El proyecto funciona directamente en el navegador.

---

## Estructura de carpetas

```
carnivalweb/
├── index.html                        ← Landing page principal
├── src/
│   ├── css/
│   │   └── style.css                 ← Estilos globales y variables CSS
│   └── js/
│       └── script.js                 ← JS global (navegación, etc.)
│
├── games/
│   ├── random-lucky/                 ← Claudia
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── trileros/                     ← Boris
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── parejas/                      ← Jordi
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── tiro-al-blanco/               ← por asignar
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   └── piedra-papel-tijera/          ← Jean (extra)
│       ├── index.html
│       ├── style.css
│       └── script.js
│
├── assets/
│   ├── images/                       ← Imágenes compartidas
│   ├── sounds/                       ← Efectos de sonido globales
│   └── fonts/                        ← Tipografías
│
└── docs/
    ├── USER_STORIES.md               ← Historias de usuario + backlog
    ├── GITFLOW.md                    ← Guía de ramas y commits
    └── FLOWCHARTS.md                 ← Algoritmos de cada juego
```

---

## Cómo ejecutar en local

No hay dependencias ni instalación. Elige una de estas opciones:

**Opción 1 — VS Code Live Server** *(recomendada)*
1. Instala la extensión **Live Server** en VS Code
2. Clic derecho sobre `index.html` → *Open with Live Server*

**Opción 2 — Python**
```bash
python3 -m http.server 3000
# Abre http://localhost:3000
```

**Opción 3 — Abrir directamente**
```bash
open index.html   # macOS
start index.html  # Windows
```

---

## Sprints

| Sprint | Fechas        | Objetivo                                      |
|--------|---------------|-----------------------------------------------|
| 1      | Días 1 – 4    | Estructura, HTML semántico, lógica base de cada juego |
| 2      | Días 5 – 8    | CSS, animaciones, sonidos, responsive, pulido |

---

## Documentación del proyecto

- Wireframes / Mockups / Prototipo → [Figma *(enlazar aquí)*]
- Flowcharts de algoritmos → [`docs/FLOWCHARTS.md`](docs/FLOWCHARTS.md)
- Historias de usuario + Product Backlog → [`docs/USER_STORIES.md`](docs/USER_STORIES.md)
- Gitflow → [`docs/GITFLOW.md`](docs/GITFLOW.md)
- GitHub Projects (Kanban) → [*(enlazar aquí)*]
- Ficha de proyecto → [*(enlazar aquí)*]

---

## Convenciones del equipo

- Commits en inglés, en imperativo: `feat:`, `fix:`, `style:`, `docs:`
- Nunca trabajar directamente en `main` ni en `develop`
- Todo PR necesita revisión de al menos un compañero antes de mergear
- Ver [`docs/GITFLOW.md`](docs/GITFLOW.md) para el flujo completo
