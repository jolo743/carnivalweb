# 🎡 CarnivalWeb — AZARGame

Plataforma de juegos de feria online desarrollada para **AZARGame** como MVP de su nueva línea de negocio "juegos típicos de ferias".

---

## Equipo

| Nombre  | Juego asignado              | Rama de trabajo              |
|---------|-----------------------------|------------------------------|
| Claudia | Random Lucky                | `feature/random-lucky`       |
| Claudia | Trileros                    | `feature/trileros`           |
| Jordi   | Parejas                     | `feature/parejas`            |
| Jean    | Piedra, Papel o Tijeras     | `feature/piedra-papel-tijera`|


---

## Juegos

| Juego                  | Descripción                                                        |
|------------------------|--------------------------------------------------------------------|
| Random Lucky           | Asigna mensajes de suerte aleatorios a una lista de nombres        |
| Piedra, papel o tijera | 3 rondas contra la máquina                                         |
| Parejas                | Encuentra todas las parejas de cartas en el menor tiempo posible   |
| Trileros  *(extra)*    | Adivina en qué vaso está escondida la bolita                       |

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
├── assets/
│   ├── fonts/
│   ├── images/
│   │   ├── celebration.png
│   │   ├── circus.png
│   │   ├── controller.png
│   │   ├── espalda.png
│   │   ├── parejas.png
│   │   ├── piedra-papel-tiejras.png
│   │   ├── popcorn.png
│   │   ├── rocket.png
│   │   ├── ruleta-definitiva.png
│   │   ├── ruleta.png
│   │   ├── sharp-five.png
│   │   ├── sparkle.png
│   │   ├── ticket.png
│   │   ├── tiro-al-blanco.png
│   │   └── trileros.png
│   └── sounds/
├── docs/
│   ├── BACKLOG_LINEAR.md
│   ├── DESIGN.md
│   ├── FLOWCHARTS.md
│   ├── GITFLOW.md
│   ├── PRODUCT_OWNER.md
│   └── USER_STORIES.md
├── html/
│   ├── parejas.html
│   ├── ppt.html
│   ├── random-lucky.html
│   └── trileros.html
├── src/
│   ├── css/
│   │   ├── layout/
│   │   │   ├── footer.css
│   │   │   └── navbar.css
│   │   ├── pages/
│   │   │   ├── parejas.css
│   │   │   ├── ppt.css
│   │   │   ├── random-lucky.css
│   │   │   └── trileros.css
│   │   └── style.css
│   └── js/
│       ├── games/
│       │   ├── parejas.js
│       │   ├── ppt.js
│       │   ├── random-lucky.js
│       │   └── trileros.js
│       └── script.js
├── index.html
└── README.md
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
| 2      | Días 5 – 8    | CSS, animaciones, responsive, pulido |

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
