# Steph Knapp — Portfolio

A single-page portfolio for **Steph Knapp**, a B2B SaaS content writer. Built with
[Astro](https://astro.build/) and deployed to GitHub Pages.

## Page flow

Opening → Portfolio (reports + articles) → Testimonials → Topics → Contact

## Design system

| Token            | Value     | Use                                             |
| ---------------- | --------- | ----------------------------------------------- |
| Primary          | `#709176` | Sage green — brand accent, borders, topic shine |
| Primary dark     | `#557259` | Deep sage — headings, filled sections, buttons  |
| Primary darker   | `#3f5647` | Deepest sage — hover on dark fills              |
| Accent           | `#8b4342` | Deep maroon-red — links, emphasis, highlights   |
| Accent warm      | `#98524b` | Warm maroon-brown — hover states                |
| Background       | `#faf9f7` | Warm off-white                                  |
| Text primary     | `#262626` | Warm almost-black                               |
| Text secondary   | `#6b6b6b` | Muted                                           |

Sage `#709176` is a mid-tone, so white/body text on it only reaches ~3.5:1 (below
WCAG AA). Filled areas that carry light text (the flagship card, contact block,
buttons) and headings therefore use the deepened **Primary dark** `#557259`, which
stays unmistakably sage but passes AA. Pure sage is reserved for accents and borders.

- **Display / headers:** Inter Bold
- **Body:** Crimson Text (serif)
- **UI / labels:** Inter Regular

Fonts are self-hosted via `@fontsource`, so there are no external font requests.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # outputs to ./dist
npm run preview
```

## Contact form (Formspree)

The contact form submits to [Formspree](https://formspree.io/) (form ID `mvzeqwko`)
over AJAX via [`@formspree/ajax`](https://github.com/formspree/formspree-js), so
visitors stay on the page and see an inline success message. The `action`/`method`
attributes on the form are a no-JS fallback that still posts to Formspree if the
script fails to load.

The form ID lives in two places in
[`src/components/Contact.astro`](src/components/Contact.astro): the `FORMSPREE_ID`
constant (frontmatter) and the `initForm({ formId })` call in the `<script>`. Update
both if the form ever changes.

Field errors, the success banner, and the disabled-while-submitting button are all
styled to match the design (`useDefaultStyles: false`).

## Deployment

Pushing to `main` triggers the workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site
and publishes it to GitHub Pages.

**One-time setup:** In the GitHub repo, go to **Settings → Pages → Build and
deployment → Source** and select **GitHub Actions**.

### Custom domain

The site is served from **https://stephknapp.com** (apex domain). This is wired up in
two places:

- [`astro.config.mjs`](astro.config.mjs) sets `site: 'https://stephknapp.com'` with no
  `base`, so assets resolve from the root.
- [`public/CNAME`](public/CNAME) contains `stephknapp.com`, which is copied into every
  build so GitHub Pages keeps the custom domain across Actions deploys.

DNS at the domain registrar must point the apex `stephknapp.com` to GitHub Pages via
`A` records (185.199.108–111.153) and `AAAA` records (2606:50c0:8000–8003::153). An
optional `www` `CNAME` → `hellostephknapp-arch.github.io` covers the www subdomain.
After DNS resolves, enable **Enforce HTTPS** in Settings → Pages.
