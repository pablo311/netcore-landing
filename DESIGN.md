---
version: alpha
name: Netcore
description: Sistema visual de la landing de Netcore (tecnología para dueños de PyME en Paraguay). Marca v2.1.
colors:
  primary: "#47A1DD"
  steel: "#4780A7"
  link: "#2E6E99"
  cyan: "#27ABCB"
  teal: "#0CB8B3"
  green: "#9AC77D"
  navy: "#0A2540"
  ink: "#111212"
  night: "#060E18"
  surface: "#FFFFFF"
  canvas: "#F2F5F8"
  line: "#E3E8EE"
  muted: "#5B6B7B"
typography:
  display-xl:
    fontFamily: Bricolage Grotesque
    fontSize: 4rem
    fontWeight: 800
    lineHeight: 1
    letterSpacing: -0.04em
  display-md:
    fontFamily: Bricolage Grotesque
    fontSize: 2.25rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.03em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    lineHeight: 1.6
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    lineHeight: 1.55
  label:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 600
    letterSpacing: 0.18em
  mono:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
rounded:
  sm: 8px
  md: 12px
  lg: 18px
  xl: 24px
  pill: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.navy}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 14px 22px
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: 14px 22px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 18px
  status-pill:
    rounded: "{rounded.pill}"
    padding: 4px 10px
    typography: "{typography.label}"
---

## Overview

Netcore le habla a dueños de PyME de Paraguay, no a programadores. La página tiene que mostrar el negocio funcionando solo (mensajes respondidos, cobros, resúmenes) antes de explicar la tecnología. Tono: cercano, voseo, frases cortas, cero jerga. Tres segmentos fijos: Infraestructura, Desarrollo y Automatizaciones. Portafolio: Abocato, Vendalia, Propy y CertiCarPy. Syskore y SafetyAI no aparecen.

## Colors

- **Primary (#47A1DD):** acento de marca y CTA principal sobre fondo oscuro.
- **Navy (#0A2540) / Night (#060E18):** fondos oscuros estilo "Noche"; texto sobre primary.
- **Ink (#111212):** texto principal y botón oscuro sobre fondo claro.
- **Steel y Link:** etiquetas y enlaces sobre fondo claro (primary no llega a contraste AA en texto chico sobre blanco).
- **Cyan, Teal, Green:** solo para diferenciar las tres capas o estados (verde = en producción). Nunca como fondo de texto largo.
- No usar #00D1FF ni colores de producto inventados.

## Typography

Bricolage Grotesque 800 para titulares, con tracking negativo. Inter para todo lo demás. Mono solo para horas, precios de ejemplo y datos tipo panel. Etiquetas en mayúsculas con tracking amplio.

## Layout

Contenedor de 1100–1200px, gutter de 16px en celular. Hero en dos columnas en escritorio (mensaje y prueba visual), una columna en móvil. Secciones separadas por 96px. Nada de scroll horizontal a 390px.

## Elevation & Depth

Profundidad con bordes finos (line) y sombras suaves y grandes solo en la pieza protagonista del hero (panel, teléfono, feed). Tarjetas planas con borde.

## Shapes

Esquinas generosas: 18px tarjetas, 12px botones, pills para estados. Los logos de producto van en un cuadrado redondeado con su color de fondo.

## Components

- **Feed en vivo:** notificaciones del negocio trabajando solo, con hora y etiqueta "ejemplo".
- **Tarjeta de agente:** qué hace + segmento en etiqueta.
- **Precio "desde":** solo con montos reales confirmados; si no, `[Gs …]`.
- **Proyecto:** logo, nombre, pill de estado (En producción / En desarrollo), una línea y datos simples con link directo.
- **CTA:** "Agendar charla gratis de 15 min" o WhatsApp con mensaje prearmado.

## Do's and Don'ts

- Do: mostrar resultados del dueño (tiempo, cobros, mensajes) antes que tecnología.
- Do: marcar como "ejemplo" cualquier dato de demostración.
- Don't: inventar clientes, cifras, testimonios o precios; usar `[…]`.
- Don't: mostrar Syskore ni SafetyAI.
- Don't: hero genérico de número grande sobre degradé.
