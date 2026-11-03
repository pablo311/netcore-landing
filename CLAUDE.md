# netcore-landing

Landing de Netcore en Next.js (App Router) + Tailwind, desplegada en Vercel.

- `app/`: `layout.tsx` y `page.tsx`. `components/`: una sección por archivo (Navbar, Hero, Services, Products, WhyUs, Contact, Footer).
- Verificación: `npx tsc --noEmit` y `npm run build`, los mismos que corre `.github/workflows/verificar.yml` en cada PR. Vercel arma el preview de cada PR; un cambio visual se mira ahí en celular y en escritorio antes de mergear.
- Cómo entra el trabajo: el issue «Cambio en la landing» con criterios, y el PR con `.github/pull_request_template.md`.
- Diseño para dueños de PyME: la skill `landing-netcore-pymes` (en la cuenta de Pablo) tiene la marca y el tono.
- Lo que se publica en master sale a producción en Vercel: el merge lo decide Pablo.
