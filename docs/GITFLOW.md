# Gitflow — CarnivalWeb

## Estructura de ramas

```
main
 └── develop
       ├── feature/random-lucky          ← Claudia
       ├── feature/trileros              ← Boris
       ├── feature/parejas               ← Jordi
       ├── feature/tiro-al-blanco        ← por asignar
       └── feature/piedra-papel-tijera   ← Jean (extra)
```

### ¿Qué hace cada rama?

| Rama        | Propósito                                                          |
|-------------|--------------------------------------------------------------------|
| `main`      | Código estable. Solo recibe merges desde `develop` en la entrega final |
| `develop`   | Rama de integración del equipo. Aquí se junta el trabajo de todos  |
| `feature/*` | Cada persona trabaja en su propia rama. Nunca se trabaja en `main` ni en `develop` directamente |

---

## Flujo de trabajo diario

### 1. Antes de empezar (solo la primera vez)
```bash
# Clona el repositorio
git clone https://github.com/jolo743/carnivalweb.git

# Cambia a develop
git checkout develop

# Crea tu rama (solo una vez)
git checkout -b feature/nombre-de-tu-juego
```

### 2. Cada día de trabajo
```bash
# 1. Actualiza develop por si hubo cambios
git checkout develop
git pull origin develop

# 2. Vuelve a tu rama y trae los cambios de develop
git checkout feature/tu-juego
git merge develop

# 3. Trabaja y guarda cambios con commits pequeños
git add .
git commit -m "feat: descripción corta de lo que hiciste"

# 4. Sube tu trabajo al final del día
git push origin feature/tu-juego
```

### 3. Cuando terminas una funcionalidad (Pull Request)
1. Sube tu rama: `git push origin feature/tu-juego`
2. Ve a GitHub → tu repo → **Pull Requests** → **New Pull Request**
3. Base: `develop` ← Compare: `feature/tu-juego`
4. Escribe un título claro y describe qué hiciste
5. Pide revisión a un compañero antes de mergear
6. Después del merge → borra la rama remota en GitHub

---

## Formato de commits

```
<tipo>: <descripción corta en inglés>
```

| Tipo       | Cuándo usarlo                                 |
|------------|-----------------------------------------------|
| `feat`     | Nueva funcionalidad                           |
| `fix`      | Corrección de un bug                          |
| `style`    | Cambios de CSS, formato visual                |
| `refactor` | Reorganización de código sin cambiar el comportamiento |
| `docs`     | Cambios en documentación                      |
| `chore`    | Configuración, estructura de archivos         |

### Ejemplos válidos
```
feat: add shuffle animation to trileros cups
fix: prevent draw button from working with empty list
style: add responsive grid layout to parejas board
docs: update user stories with sprint 2 estimates
chore: add folder structure for all games
```

---

## Reglas del equipo

1. **Nunca** hacer `push` directamente a `main` o `develop`
2. **Siempre** que un compañero revise tu PR antes de mergear
3. **Resolver conflictos** en tu feature branch antes del PR, nunca en develop
4. Si tienes dudas sobre un comando destructivo (`reset`, `rebase`, `force push`) → pregunta primero

---

## Configuración inicial del repo (solo Jordi, una vez)

```bash
# Crear rama develop y subirla
git checkout -b develop
git push origin develop

# En GitHub Settings → Branches: cambiar rama por defecto a develop
```
