# Steph Knapp — Portfolio

A single-page portfolio for **Steph Knapp**, a B2B SaaS content writer. Built with
[Astro](https://astro.build/) and deployed to GitHub Pages.

## Page flow

Opening → Portfolio (reports + articles) → Testimonials → Domains → Contact

## Design system

| Token            | Value     | Use                          |
| ---------------- | --------- | ---------------------------- |
| Primary          | `#3d5941` | Forest green — headers, CTAs |
| Accent           | `#6b3d4a` | Wine/burgundy — links        |
| Background       | `#faf9f7` | Warm off-white               |
| Text primary     | `#2a2a2a` | Warm almost-black            |
| Text secondary   | `#6b6b6b` | Muted                        |

- **Display / headers:** Inter Bold
- **Body:** Crimson Text (serif)
- **UI / labels:** Inter Regular

Fonts are self-hosted via `@fontsource`, so there are no external font requests.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/stephknapp-portfolio
npm run build    # outputs to ./dist
npm run preview
```

## Contact form (Formspree)

The contact form posts to [Formspree](https://formspree.io/). Before it will work:

1. Create a form at [formspree.io](https://formspree.io/) and copy its form ID.
2. In [`src/components/Contact.astro`](src/components/Contact.astro), replace
   `YOUR_FORM_ID` in `FORMSPREE_ENDPOINT` with your ID.

Until then, submissions won't be delivered.

## Deployment

Pushing to `main` triggers the workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site
and publishes it to GitHub Pages.

**One-time setup:** In the GitHub repo, go to **Settings → Pages → Build and
deployment → Source** and select **GitHub Actions**.

The site is configured for the project path `/stephknapp-portfolio` (see `base` in
[`astro.config.mjs`](astro.config.mjs)). If you later add a custom domain, update
`site` and `base` accordingly.
