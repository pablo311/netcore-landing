# Mantenimiento del sitio

Cada cambio entra por un PR. Vercel arma la vista previa, se mira en celular y en escritorio, y Pablo decide el merge.

## Cuándo se toca

- **Al cerrar una obra:** sumar o actualizar la tarjeta en `components/Obras.tsx` (qué se hizo, en una o dos frases, con permiso del cliente para nombrarlo).
- **Si cambia un dato de contacto:** solo `lib/site.ts`. Avisar también para la ficha de Google, que tiene que decir lo mismo.
- **Una vez por mes:** revisar que el sitio abra, que el botón de WhatsApp llegue al número correcto, que los enlaces funcionen, y mirar Search Console (consultas, páginas indexadas, errores).
- **Cada tres meses:** actualizar dependencias (`npm outdated`, `npm audit`), revisar textos de servicios y preguntas frecuentes contra lo que realmente se está vendiendo.

## Qué no se hace

- No se publican cifras, clientes ni precios sin confirmar.
- No se nombra el modelo del certificador: «certificación con equipos Fluke».
