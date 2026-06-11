---
name: Crimson Pavilion
colors:
  surface: '#1d100e'
  surface-dim: '#1d100e'
  surface-bright: '#473532'
  surface-container-lowest: '#180b09'
  surface-container-low: '#261816'
  surface-container: '#2b1c19'
  surface-container-high: '#362623'
  surface-container-highest: '#42312e'
  on-surface: '#f8dcd8'
  on-surface-variant: '#e3beb8'
  inverse-surface: '#f8dcd8'
  inverse-on-surface: '#3d2c2a'
  outline: '#aa8984'
  outline-variant: '#5a403c'
  surface-tint: '#ffb4a8'
  primary: '#ffb4a8'
  on-primary: '#690000'
  primary-container: '#8b0000'
  on-primary-container: '#ff907f'
  inverse-primary: '#b52619'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#c8c8b0'
  on-tertiary: '#303221'
  tertiary-container: '#424432'
  on-tertiary-container: '#b0b19a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#920703'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e4e4cc'
  tertiary-fixed-dim: '#c8c8b0'
  on-tertiary-fixed: '#1b1d0e'
  on-tertiary-fixed-variant: '#474836'
  background: '#1d100e'
  on-background: '#f8dcd8'
  surface-variant: '#42312e'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '900'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  stripe-width: 40px
---

## Brand & Style

The design system is built upon the "Vintage Circus Arcade" aesthetic—a sophisticated, theatrical experience that eschews modern neon for the tactile warmth of a traveling carnival at dusk. It is designed to evoke nostalgia, mystery, and high-stakes excitement, targeting an audience that appreciates craft, history, and "the show."

The style is **Tactile & Ornamental**, blending Victorian-era editorial layout with early 20th-century mechanical arcade interfaces. It utilizes heavy textures (aged canvas, weathered wood, grain), ornate framing, and rhythmic vertical striping to create a sense of physical space and history. The emotional response is one of "Atmospheric Wonder"—feeling less like a digital app and more like a curated curiosity cabinet or a private backstage lounge.

## Colors

The palette is anchored in a "Midnight Midway" dark mode, using deep, warm-toned shadows instead of pure blacks.

- **Deep Crimson (#8B0000):** The primary brand color, used for structural surfaces, banners, and primary brand moments. It represents the velvet curtains of the big top.
- **Antique Gold (#D4AF37):** Used for framing, iconography, and decorative flourishes. It provides the "brass and gilt" feel of vintage arcade machinery.
- **Aged Cream (#F5F5DC):** The primary text and information color. It provides high legibility against dark backgrounds while maintaining a weathered, parchment-like quality.
- **Vibrant Pink (#FF007A):** A high-energy accent reserved strictly for interactive feedback, critical calls to action, and "winning" states. It provides a sharp, modern jolt against the vintage backdrop.
- **Dark Neutral (#1A0A0A):** The foundation background, a rich "Obsidian Wine" that keeps the UI grounded and warm.

## Typography

Typography functions as a "Playbill Hierarchy." 

- **Headlines:** Use **Playfair Display**. Its high-contrast serifs and elegant curves mimic vintage woodblock printing. Use Bold or Black weights for display text to command attention.
- **Body Text:** Use **Work Sans**. Its clean, professional, and slightly wider proportions ensure legibility against textured backgrounds.
- **Data & Labels:** Use **Space Mono**. The monospaced nature evokes the feel of a printed ticket or a mechanical score counter, reinforcing the arcade theme.

All caps should be used for labels and "Ticker-tape" announcements to enhance the circus aesthetic.

## Layout & Spacing

The layout is a **Fixed, Centered Grid** that feels like a framed stage. 

- **Grid:** Use a 12-column grid for desktop with generous 64px margins to create a "contained" feel. 
- **Vertical Rhythm:** A strict 8px baseline grid maintains order within the decorative chaos.
- **Stripes:** Incorporate a "Pavilion Stripe" pattern (alternating Deep Crimson and Obsidian) in the margins or as section dividers.
- **Frames:** Content should often be encased in "Theatrical Enclosures"—containers with defined Antique Gold borders rather than edge-to-edge fluid layouts.

## Elevation & Depth

Depth in this design system is created through **Materiality and Light**, not just shadows.

- **Textured Layers:** Use a subtle grain or canvas overlay (3-5% opacity) on all surfaces to eliminate "digital flatness."
- **Inward Glows:** Instead of drop shadows, use subtle inner glows (Antique Gold) on containers to make them look like recessed cabinets or light boxes.
- **Vignetting:** Apply a soft radial gradient to the main background, darkening the corners to draw the eye to the center "Stage."
- **Raised Accents:** Interactive elements (Buttons/Chips) use a "Skeuomorphic Press"—a slight 1px highlight on the top edge and a 2px dark "carved" shadow on the bottom.

## Shapes

The shape language is **Structured and Architectural**. 

- **Corners:** Use "Soft" (0.25rem) corners for most elements to mimic the slight wear of old wood and metal. Avoid hyper-modern pill shapes except for very specific arcade-style buttons.
- **Flourishes:** Incorporate "Inverted Scallops" (concave corners) on primary cards and modals to reference classic circus ticket shapes.
- **Borders:** All primary containers should feature a 2px "Double-Stripe" border using Antique Gold.

## Components

- **Buttons:** Primary buttons are "Theatrical Toggles." They feature a Deep Crimson base with an Antique Gold 2px border. On hover, they glow with the Vibrant Pink accent. Use all-caps Space Mono for the label.
- **Chips:** Styled as "Admission Tokens." Circular or heavy-rounded rectangles with a thin gold border and weathered background.
- **Cards:** "Showcase Cabinets." These must have a distinct header area separated by a gold filigree line. Use the vertical stripe pattern for the card's background at 10% opacity.
- **Input Fields:** Styled as "Engraved Slots." A dark, inset appearance with the Aged Cream text appearing to be "lit" from within.
- **Checkboxes/Radios:** Use a "Star-burst" motif. When selected, the center glows with a Vibrant Pink star.
- **Progress Bars:** Mimic "Strength Testers" or vintage thermometers, filling with a gradient from Crimson to Vibrant Pink.
- **Dividers:** Never use a plain line. Use a "Marquee String"—a line of small gold diamonds or stars.