# netcore-landing

Landing de Netcore en Next.js (App Router) + Tailwind, desplegada en Vercel.

- `app/`: `layout.tsx` y `page.tsx`. `components/`: una sección por archivo (Navbar, Hero con InformeDemo y Marcas, Services, Proceso, Obras, WhyUs, Preguntas, Contact con FormPresupuesto, Footer; `Reveal` anima la entrada). Animaciones con CSS, íconos con `lucide-react`. `lib/site.ts`: teléfono, correos, RUC y preguntas frecuentes en un solo lugar; `app/layout.tsx`: título, descripción y datos estructurados; `app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx`.
- Verificación: `npx tsc --noEmit` y `npm run build`, los mismos que corre `.github/workflows/verificar.yml` en cada PR. Vercel arma el preview de cada PR; un cambio visual se mira ahí en celular y en escritorio antes de mergear.
- Cómo entra el trabajo: el issue «Cambio en la landing» con criterios, y el PR con `.github/pull_request_template.md`.
- Diseño para dueños de PyME: la skill `landing-netcore-pymes` (en la cuenta de Pablo) tiene la marca y el tono.
- Lo que se publica en master sale a producción en Vercel: el merge lo decide Pablo.
- Contenido: el foco es infraestructura (cableado UTP Cat6 certificado, fibra, racks, cámaras). En textos públicos se dice «certificación con equipos Fluke», sin modelo. No inventar clientes, cifras ni precios. Mantenimiento: ver `MANTENIMIENTO.md`.
