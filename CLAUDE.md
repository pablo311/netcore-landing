# netcore-landing

Landing de Netcore en Next.js (App Router) + Tailwind, desplegada en Vercel.

- `app/`: `layout.tsx` (título, descripción, datos estructurados, tipografías locales en `app/fonts`), `page.tsx`, `privacidad/`, `robots.ts`, `sitemap.ts`, `opengraph-image.tsx`. `components/`: `Nav`, `Hero` (problemas + chat de ejemplo), `Clientes`, `Secciones` (QueHacemos, ComoEmpezamos, Productos, Preguntas, Cierre, Pie) y `WhatsAppFlotante`. `lib/site.ts`: contacto, problemas del hero, clientes y preguntas frecuentes en un solo lugar.
- Diseño: dirección «Hablemos», elegida por Pablo. Tokens y reglas en `DESIGN.md`; la skill `landing-netcore-pymes` (en la cuenta de Pablo) tiene la marca y el proceso para proponer cambios grandes (varias direcciones, Pablo elige, después se implementa).
- Tono: para dueños de PyME, voseo, frases cortas, beneficios y no tecnicismos (nada de categorías de cable, normas ni modelos de equipos en primer plano).
- Clientes: se pueden mostrar solo agrupados en la franja «Confían en nosotros» (nombre o logo). Nunca se usan datos de sus obras ni se arman casos con su información. Todo ejemplo es inventado y dice «Ejemplo». No inventar cifras ni precios.
- Verificación: `npx tsc --noEmit` y `npm run build`, los mismos que corre `.github/workflows/verificar.yml` en cada PR. Un cambio visual se mira en celular y en escritorio antes de mergear.
- Cómo entra el trabajo: el issue «Cambio en la landing» con criterios, y el PR con `.github/pull_request_template.md`.
- Lo que se publica en master sale a producción: el merge lo decide Pablo. Mantenimiento: ver `MANTENIMIENTO.md`.
