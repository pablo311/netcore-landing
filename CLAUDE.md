# netcore-landing

Landing de Netcore en Next.js (App Router) + Tailwind, desplegada en Vercel.

- `app/`: `layout.tsx` (título, descripción, datos estructurados, tipografías locales en `app/fonts`), `page.tsx` (portada), `[servicio]/page.tsx` (una página por servicio), `contacto/`, `privacidad/`, `robots.ts`, `sitemap.ts`, `opengraph-image.tsx`. `components/`: `Marco` (los tres paneles: menú, texto y panel oscuro) y `Red` (el dibujo de la red del panel). `lib/site.ts`: contacto, clientes, marcas, pasos y preguntas frecuentes. `lib/servicios.ts`: los textos de las cinco páginas de servicio. `public/sitio.js`: solo el menú de celular.
- Diseño: dirección «Tres paneles», elegida por Pablo. No hay modo ni sección de detalle técnico. Tokens, reglas y decisiones en `DESIGN.md`. Los estilos están en `app/globals.css` con clases propias y tokens en `:root`; de Tailwind solo se usa la base. La skill `landing-netcore-pymes` (en la cuenta de Pablo) tiene la marca y el proceso para proponer cambios grandes (varias direcciones, Pablo elige, después se implementa).
- Los enlaces internos son `<a href>` comunes, no `next/link`, para que `sitio.js` corra en cada página.
- Tono: para dueños de PyME, voseo, frases cortas, beneficios y no tecnicismos (nada de categorías de cable, normas ni modelos de equipos en primer plano).
- Clientes: se pueden mostrar solo agrupados en la sección «Confían en nosotros» de la portada (nombre o logo). Nunca se usan datos de sus obras ni se arman casos con su información. Todo ejemplo es inventado y dice «Ejemplo»; la red del panel es un dibujo genérico. No inventar cifras ni precios.
- Verificación: `npx tsc --noEmit` y `npm run build`, los mismos que corre `.github/workflows/verificar.yml` en cada PR. Un cambio visual se mira en celular y en escritorio antes de mergear.
- Cómo entra el trabajo: el issue «Cambio en la landing» con criterios, y el PR con `.github/pull_request_template.md`.
- Lo que se publica en master sale a producción: el merge lo decide Pablo. Mantenimiento: ver `MANTENIMIENTO.md`.
