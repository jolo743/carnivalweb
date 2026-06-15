---
name: Electric Fairground
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#e5bcc4'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#ac878f'
  outline-variant: '#5c3f45'
  surface-tint: '#ffb1c3'
  primary: '#ffb1c3'
  on-primary: '#66002c'
  primary-container: '#ff4b89'
  on-primary-container: '#590026'
  inverse-primary: '#bb0058'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#fdbc00'
  on-tertiary: '#402d00'
  tertiary-container: '#b98900'
  on-tertiary-container: '#382700'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd9e0'
  primary-fixed-dim: '#ffb1c3'
  on-primary-fixed: '#3f0019'
  on-primary-fixed-variant: '#8f0041'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#ffdea2'
  tertiary-fixed-dim: '#fdbc00'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5c4200'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Rubik
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-sm:
    fontFamily: Rubik
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Rubik
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Rubik
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1280px
  gutter: 20px
---

## Brand & Style
The brand personality is high-octane, festive, and premium, reimagining the traditional fairground through a modern "Cyber-Carnival" lens. It targets a broad demographic seeking quick-play entertainment that feels both nostalgic and cutting-edge. 

The design style is **Glassmorphic-Neon**. It utilizes a deep, atmospheric foundation to allow vibrant accents to pop. The aesthetic balances the playful nature of a carnival with the sleekness of high-end gaming interfaces. Expect high-energy motion, glowing interactive elements, and a sense of physical depth through translucent layering.

## Colors
The palette is built on a "Midnight Base" with "Neon Fireworks." 

- **Primary (Electric Pink):** Used for primary actions, critical alerts, and branding highlights.
- **Secondary (Cyan):** Used for progress indicators, secondary buttons, and success states.
- **Tertiary (Golden Yellow):** Used for high-value rewards, currency, stars, and winner states.
- **Neutral/Background:** The deep navy (#0f172a) acts as the canvas, ensuring all neon colors meet high accessibility standards for contrast.
- **Glass Surfaces:** Use semi-transparent navy layers with a blur effect to create depth without losing the vibrant background energy.

## Typography
The typography uses a duo of modern, friendly fonts. **Rubik** provides the "Bold Carnival" feel for headlines with its rounded corners and heavy weights, while **Plus Jakarta Sans** ensures UI elements and descriptions remain highly legible and modern.

Display text should often utilize a "Neon Glow" text shadow (e.g., `0 0 10px rgba(255, 0, 122, 0.5)`) when rendered in Electric Pink or Cyan to reinforce the festive theme.

## Layout & Spacing
The layout follows a **Fluid Grid** system to accommodate the fast-paced, responsive nature of web gaming. 

- **Desktop:** 12-column grid, 24px gutters, 64px side margins.
- **Mobile:** 4-column grid, 16px gutters, 20px side margins.

Content is organized into "Attraction Zones" (sections). Spacing is generous to allow for decorative glowing elements and to prevent the UI from feeling cramped. Use `md` (24px) for internal card padding and `xl` (64px) to separate major sections.

## Elevation & Depth
Depth is achieved through a combination of **Glassmorphism** and **Outer Glows**. 

1.  **Level 0 (Base):** Deep Navy background.
2.  **Level 1 (Sectioning):** Subtle semi-transparent overlays (5% white opacity) to define large content areas.
3.  **Level 2 (Cards):** Backdrop blur (12px) with a semi-transparent navy fill (70% opacity) and a 1px "Light Leak" border (top-left white highlight).
4.  **Level 3 (Interactive/Floating):** Significant outer glows using the primary/secondary color hexes to suggest these items are "Powered On."

Shadows are never black; they are deep navy with high spread and low opacity to maintain the luminous feel.

## Shapes
The shape language is consistently **Rounded**. Sharp corners are avoided to maintain a playful, safe, and friendly atmosphere. 

- Standard components (Buttons, Inputs): 0.5rem (8px).
- Large components (Cards, Modals): 1rem (16px).
- Badges and Score Indicators: Pill-shaped (Full radius).

## Components

### Buttons & Interaction
- **Primary Button:** Electric Pink gradient background with a subtle "gloss" overlay (linear-gradient top-to-center). On hover, increase the outer glow.
- **Secondary Button:** Ghost style with a Cyan 2px border. On hover, fills with a translucent Cyan.
- **Gloss Effect:** A thin, high-positioned white semi-transparent ellipse at the top of buttons to simulate a physical plastic/glass dome.

### Game Cards
- Featured game cards use a 1px glowing border that cycles through colors or pulses.
- Backgrounds use the backdrop-blur glass effect to allow the background colors to peek through.

### Score Badges & Timers
- **Timers:** Cyan text with a "digital" font-weight, encased in a pill-shaped container with a subtle inner shadow to look recessed.
- **Score Badges:** Golden Yellow with a star icon. Always uses high-contrast dark text for legibility.

### Player Profile Header
- Circular avatar with a "level-ring" border (Cyan or Pink depending on rank).
- Background uses a horizontal glass bar that stretches across the top of the screen with a subtle bottom-border glow.

### Input Fields
- Dark navy fill with a 1px Cyan border that glows more intensely when focused. Text is always white or light cyan.