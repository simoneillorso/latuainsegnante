# latuainsegnante.com

Sito di Debora Vichi — insegnante di lingue private, Firenze/online.

Stack: **Astro 5** (SSG) + **React islands** (hydration solo dove serve) + **TypeScript strict**.

## Sviluppo

```bash
npm install
npm run dev        # http://localhost:4321
npm run typecheck  # astro check (TS + Astro)
npm run build      # output in ./dist
npm run preview    # server statico su dist/
```

## Struttura

- `src/pages/` — tre pagine statiche (`/`, `/chi-sono`, `/corsi/inglese-conversazione`).
- `src/layouts/BaseLayout.astro` — head/meta/fonts, shell `Header` + `Footer`.
- `src/components/` — componenti organizzati per contesto (`shell`, `shared`, `home`, `about`, `course`).
- `src/data/` — dati tipati (lingue, corsi, testimonial, FAQ, pricing, method, credentials, etc.).
- `src/styles/tokens.css` — design tokens (colori, tipografia, spaziatura).
- `src/styles/globals.css` — classi utility condivise (`.btn-primary`, `.btn-ghost`, keyframes, `:focus-visible`, `prefers-reduced-motion`).
- `public/assets/` — immagini e icone (servite alla root `/assets`).

## Deploy

Build statico in `dist/`. Compatibile con qualsiasi host statico (Vercel, Netlify, Cloudflare Pages, S3+CloudFront, nginx).

## Note sulle CTA

Tutti i bottoni "Prenota lezione gratuita" sono placeholder (`href="#prenota"` o ancore inattive). Integrare in seguito con Cal.com/Calendly o form backend.
