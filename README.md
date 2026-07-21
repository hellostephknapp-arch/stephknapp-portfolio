# Steph Knapp — Portfolio

A single-page portfolio for **Steph Knapp**, a B2B SaaS content writer. Built with
[Astro](https://astro.build/) and deployed to GitHub Pages.

## Page flow

Opening → Portfolio (reports + articles) → Testimonials → Topics → Contact

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

The site is configured for the project path `/stephknapp-portfolio` (see `base` in
[`astro.config.mjs`](astro.config.mjs)). If you later add a custom domain, update
`site` and `base` accordingly.
