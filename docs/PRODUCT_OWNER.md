# Guía de Product Owner — CarnivalWeb

**PO asignada:** Claudia  
**Sprint actual:** Sprint 1 (Días 1 – 4)  
**Clienta:** Profesora (representa a AZARGame)

---

## Qué es el Product Owner

El Product Owner es el puente entre el equipo de desarrollo y la clienta. No decide cómo se programa, sino **qué se construye, en qué orden y con qué criterios de éxito**.

---

## Responsabilidades del PO en este proyecto

- Mantener el backlog priorizado en [`USER_STORIES.md`](USER_STORIES.md)
- Validar con la clienta qué historias entran en cada sprint
- Definir los criterios de aceptación de cada historia
- Responder dudas del equipo sobre requisitos
- Proteger al equipo de cambios de alcance no aprobados

---

## Antes de reunirte con la clienta

- [ ] Revisar el backlog y ordenarlo por prioridad
- [ ] Identificar qué historias propones para el sprint
- [ ] Tener claros los criterios de aceptación de cada una
- [ ] Preparar al menos 3 preguntas concretas

---

## Durante la reunión con la clienta

### Preguntas clave

| Objetivo | Pregunta |
|---|---|
| Validar prioridades | "¿Para ti es más importante que el juego funcione bien en móvil o que tenga efectos de sonido desde el inicio?" |
| Definir criterio de aceptación | "¿Cómo sabremos que el juego Random Lucky está terminado para el Sprint 1?" |
| Descubrir restricciones | "¿Hay algún juego que debamos entregar antes que los demás?" |
| Gestionar alcance | "El equipo propone dejar Tiro al Blanco para el Sprint 2. ¿Lo apruebas?" |

### Frases útiles

- "Según la estimación del equipo, esto cabe en el sprint / esto no cabe."
- "Podemos entregarlo en el Sprint 1 si bajamos la prioridad de X."
- "¿Puedes definirme qué significa para ti que esto esté terminado?"
- "Te traigo esto para validación, no para una decisión técnica."

---

## Lo que NO debes hacer

- No prometas fechas sin consultar al equipo primero
- No dejes que la clienta decida cómo programar o diseñar — eso es del equipo dev
- No llegues a la reunión sin el backlog ordenado
- No aceptes cambios de alcance sin evaluar el impacto con el equipo

---

## Cómo gestionar cambios de alcance

Si la clienta pide algo nuevo durante el sprint:

1. Escucha y anota el requisito
2. Responde: "Lo llevo al equipo para estimar el impacto"
3. Con el equipo: ¿cabe en el sprint o hay que sacar algo?
4. Vuelves con una propuesta: "Podemos añadir X si quitamos Y, ¿lo apruebas?"

---

## Criterios de aceptación del Sprint 1

El Sprint 1 estará completo cuando:

- La landing page (`index.html`) existe y enlaza a todos los juegos
- Cada juego tiene su estructura HTML semántica
- La lógica base de cada juego funciona en el navegador (sin estilos finales)
- El código está en su rama correspondiente y con PR abierto

---

## Selección del PO — Sprint 1

La asignación se realizó mediante algoritmo SHA-256 ponderado por nombre sobre la semilla `carnivalweb-sprint1-2026-06-10`.

| Candidata/o | Peso ASCII | Rango |
|---|---|---|
| Claudia | 691 | 0 – 690 |
| Jordi | 504 | 691 – 1194 |
| Jean | 382 | 1195 – 1576 |

Valor aleatorio obtenido: **173** → **Claudia**
