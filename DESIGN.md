---
name: Netcore Tres paneles
colors:
  tinta: "#111212"
  noche: "#061626"
  marino: "#0A2540"
  blanco: "#FFFFFF"
  papel: "#F4F8F6"
  verde: "#9AC77D"
  verde-fuerte: "#4F9130"
  cian: "#27ABCB"
  primario: "#47A1DD"
  enlace: "#2E6E99"
  texto: "#33423F"
typography:
  display: { fontFamily: "Bricolage Grotesque", fontWeight: 800 }
  body: { fontFamily: "Inter", fontWeight: 400 }
---

## Idea
El sitio se usa como una aplicación de tres paneles. A la izquierda, el menú fijo con los cinco servicios y el botón de WhatsApp. Al medio, el texto: corto, concreto, en listas separadas por líneas finas. A la derecha, un panel oscuro fijo con la red de un negocio de ejemplo: el negocio en el centro y lo que conectamos alrededor (WiFi, cámaras, caja, WhatsApp, sistema, depósito). La portada muestra toda la red andando; cada página de servicio enciende su parte y cambia la frase del panel.

Pablo eligió esta dirección el 27/11/2026 entre seis portadas. Antes descartó «Hablemos» y «El plano».

Público: dueños de PyME de Asunción. Trabajo de la página: que entiendan qué hace Netcore y escriban por WhatsApp.

## Color
Blanco para el menú y el texto. Noche para el panel de la red. El verde marca la acción del menú, la página actual y lo que se enciende en la red. Cian y primario viven dentro de la red. Todos los colores salen de los tokens de `:root` en `app/globals.css`; no se escriben valores sueltos. Nunca `#00D1FF`.

## Tipografía
Dos familias, las de la marca. Bricolage Grotesque 700 y 800 para títulos, con interlineado entre 1,08 y 1,2 y espaciado de -0,02em. Inter 400, 500 y 600 para el texto, con interlineado 1,5 a 1,6. Tamaños en `rem`, interlineado sin unidad, espaciado en `em`. La escala: título, sección, frase, bajada, cuerpo, chico (15 px) y nota (14 px). Ningún texto baja de 12 px, tampoco dentro de la red. La columna de texto no pasa de 44rem. Sin mayúsculas sostenidas, sin etiquetas sobre los títulos, sin una palabra del título en otro color.

## Composición
Tres columnas: menú de 15,5rem, texto flexible y panel de 22 a 27rem. El menú y el panel quedan fijos; solo se mueve el texto. Por debajo de 68rem todo pasa a una columna: barra con el logo y «Menú», una franja oscura con la red chica y la frase, y el texto. Las secciones se separan con espacio y una línea fina, no con tarjetas.

## Movimiento
Los pulsos viajan por los hilos de la red y el centro late. Lo demás responde a la persona: el botón sube al pasar y baja al apretar, los renglones de «Qué hacemos» se corren. Con «reducir movimiento» activado la red queda quieta. Solo se animan `transform`, `opacity`, color y trazo.

## Texto
Voseo, frases cortas, beneficios. Una sola acción con un solo nombre en todo el sitio: «Escribir por WhatsApp». No hay modo ni sección de detalle técnico: Pablo lo descartó. Los números solo aparecen en una secuencia real (los cuatro pasos).

## Reglas que no se rompen
- Los clientes solo aparecen agrupados en la portada, por nombre o logo. Nunca datos de sus obras.
- Todo ejemplo es inventado. La red del panel es un dibujo genérico, no la de un cliente.
- Sin cifras ni precios inventados. Sin testimonios inventados.
- El sitio se lee completo sin JavaScript. `public/sitio.js` solo abre y cierra el menú en celular.

## Decisiones tomadas a conciencia
- **Dibujo en lugar de fotos.** Todavía no hay fotos propias de instalaciones, y no se usan fotos de banco. Cuando haya fotos reales, van en las páginas de servicio.
- **Menú lateral fijo.** Los cinco servicios tienen que estar a mano desde cualquier página.
- **Dos botones de WhatsApp a la vista en escritorio.** El del menú acompaña siempre; el del texto cierra cada página.
