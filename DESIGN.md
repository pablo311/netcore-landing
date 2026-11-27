---
name: Netcore El plano
colors:
  marino: "#0A2540"
  tinta: "#111212"
  papel: "#F4F8F6"
  hoja: "#FBFDFC"
  verde: "#9AC77D"
  cian: "#27ABCB"
  primario: "#47A1DD"
  enlace: "#2E6E99"
  texto: "#33423F"
typography:
  display: { fontFamily: "Bricolage Grotesque", fontWeight: 800 }
  body: { fontFamily: "Inter", fontWeight: 400 }
---

## Idea
El sitio es una lámina azul marino con el plano de un local de ejemplo. Todo sale del rack y cada servicio es una capa del mismo plano: el WiFi, el cableado, las cámaras, el WhatsApp que atiende solo y los sistemas. La portada muestra la red completa y cada página de servicio enciende su capa. Es la única pieza llamativa del sitio; todo lo demás es texto corto sobre papel claro.

Público: dueños de PyME de Asunción. Trabajo de la página: que entiendan qué hace Netcore y escriban por WhatsApp.

## Color
Marino para la lámina, la cabecera, el cierre y el pie. Papel y hoja para el resto. El verde se usa en un solo lugar por pantalla: la acción. Cian y primario viven dentro del plano. Todos los colores salen de los tokens de `:root` en `app/globals.css`; no se escriben valores sueltos. Nunca `#00D1FF`.

## Tipografía
Dos familias, las de la marca. Bricolage Grotesque 700 y 800 para títulos, con interlineado entre 1,05 y 1,12 y espaciado de -0,02em. Inter 400, 500 y 600 para el texto, con interlineado 1,5 a 1,6. Tamaños en `rem`, interlineado sin unidad, espaciado en `em`. La escala baja con el nivel: titular, título, sección, apartado, subtítulo, cuerpo, chico (15 px) y nota (13 px). Ningún texto baja de 12 px, tampoco dentro del plano. Los párrafos largos no pasan de 65 caracteres por línea. Sin mayúsculas sostenidas, sin etiquetas sobre los títulos, sin una palabra del título en otro color.

## Composición
Ancho máximo 1240 px con el mismo margen a izquierda y derecha. Portada en dos columnas, texto y plano, con la leyenda de los cinco servicios debajo. Cada página de servicio lleva el texto a la izquierda y el plano fijo a la derecha. En celular todo pasa a una columna. Las secciones se separan con espacio y una línea fina, no con tarjetas.

## Movimiento
El plano se dibuja una vez al cargar la portada. Después solo quedan los pulsos que viajan por los cables, que se pueden pausar con «Pausar el movimiento». Lo demás responde a la persona: el botón sube al pasar y baja al apretar, los subrayados se dibujan, la leyenda enciende su capa. Con «reducir movimiento» activado el plano queda quieto y completo. Solo se animan `transform`, `opacity`, color y trazo.

## Texto
Voseo, frases cortas, beneficios. Una sola acción con un solo nombre en todo el sitio: «Escribir por WhatsApp». Lo técnico va en «Ver detalle técnico», cerrado por defecto. Los números solo aparecen en una secuencia real (los cuatro pasos).

## Reglas que no se rompen
- Los clientes solo aparecen agrupados en la portada, por nombre o logo. Nunca datos de sus obras.
- Todo ejemplo es inventado y lo dice: bajo el plano siempre va «Plano de ejemplo».
- Sin cifras ni precios inventados. Sin testimonios inventados.
- El sitio se lee completo sin JavaScript. `public/sitio.js` solo suma el menú de celular, las capas del plano, la pausa y recordar el detalle técnico.

## Decisiones tomadas a conciencia
El diseño se revisó contra las guías frontend-design, better-typography, taste-skill y hallmark. Se apartó de ellas en cuatro puntos:
- **Dibujo en lugar de fotos.** Las guías piden fotos reales para un negocio de servicios. Todavía no hay fotos propias de instalaciones, y no se usan fotos de banco. El plano es un diagrama que funciona, no un adorno. Cuando haya fotos reales, van en las páginas de servicio.
- **Menú clásico arriba.** Los cinco servicios tienen que estar a mano desde cualquier página.
- **Texto bajo el plano.** Las guías piden no poner leyendas bajo las imágenes. «Plano de ejemplo» se queda porque todo ejemplo tiene que decir que lo es.
- **Más de una sección por pantalla.** La portada junta el titular y la leyenda en la primera pantalla para que los cinco servicios se vean sin bajar.
