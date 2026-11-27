# Mantenimiento del sitio

Cada cambio entra por un PR, se mira en celular y en escritorio, y Pablo decide el merge.

## Cuándo se toca

- **Cliente nuevo para mostrar:** sumar el nombre en `CLIENTES` de `lib/site.ts`. Si hay logo, va en `public/clientes/` y se completa `logo`.
- **Si cambia un dato de contacto:** solo `lib/site.ts`. Avisar también para la ficha de Google, que tiene que decir lo mismo.
- **Problemas del hero y preguntas frecuentes:** también en `lib/site.ts`. Se ajustan según lo que más consultan los clientes.
- **Una vez por mes:** revisar que el sitio abra, que los botones de WhatsApp lleguen al número correcto, que los enlaces funcionen, y mirar Search Console (consultas, páginas indexadas, errores).
- **Cada tres meses:** actualizar dependencias (`npm outdated`, `npm audit`) y revisar los textos contra lo que realmente se está vendiendo.

## Qué no se hace

- Los clientes solo aparecen agrupados en «Confían en nosotros». Nunca se publican datos de sus obras ni casos armados con su información.
- Los ejemplos son inventados y dicen «Ejemplo».
- No se publican cifras ni precios sin confirmar.
- No se escribe en técnico: se habla de lo que gana el cliente.
