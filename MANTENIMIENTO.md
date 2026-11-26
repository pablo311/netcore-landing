# Mantenimiento del sitio

Cada cambio entra por un PR. Vercel arma la vista previa, se mira en celular y en escritorio, y Pablo decide el merge.

## Cuándo se toca

- **Si cambia un dato de contacto:** solo `lib/site.ts`. Avisar también para la ficha de Google, que tiene que decir lo mismo.
- **Una vez por mes:** revisar que el sitio abra, que el botón de WhatsApp llegue al número correcto, que los enlaces funcionen, y mirar Search Console (consultas, páginas indexadas, errores).
- **Cada tres meses:** actualizar dependencias (`npm outdated`, `npm audit`), revisar textos de servicios y preguntas frecuentes contra lo que realmente se está vendiendo.

## Qué no se hace

- Nunca se nombran clientes ni se usan datos de sus obras, ni siquiera cambiados. Los ejemplos son inventados y dicen «Ejemplo».
- No se publican cifras ni precios sin confirmar.
- No se nombra el modelo del certificador: «certificación con equipos Fluke».
