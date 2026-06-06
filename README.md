# Upcyclers — Homepage

A static implementation of the **Upcyclers** homepage — a challenge-led marketplace
for slow fashion (Pinterest × Depop × Instagram feel). Built from a Claude Design
handoff bundle, recreating the final chosen design (dark mode, collage hero,
center-menu header, auto-scroll feed, three-column prize, plaque hall of fame).

## What's here

Plain HTML/CSS/vanilla-JS — no build step, no framework, deployable as static files.

```
index.html        # Page structure + SVG icon sprite (unique sections authored inline)
css/
  styles.css      # Foundation: tokens, theme (light/dark), nav, buttons, cards, hero
  sections.css    # Finalists, community, marketplace, feed, discovery, featured, HoF, footer, flow
  variants.css    # Chosen section layouts (collage hero, editorial celeb, feature-list community, plaque HoF)
  app.css         # Small static-build overrides (mobile nav, icon helper)
js/
  data.js         # Content for the repeating card collections (single source of truth)
  app.js          # Renders cards, builds the auto-scroll marquees, wires theme toggle + mobile nav
  logo.js         # Wordmark inlined as a data URI, applied to .brand-logo
```

### Sections (in order)

Hero → Celebrity Drop → Top 5 Finalists → Community → Marketplace →
Recently Uploaded → Most Loved → Discovery → Featured Upcyclers → Hall of Fame → Footer.

## Run locally

It's static — open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy

Pushing to `main` triggers `.github/workflows/pages.yml`, which builds and publishes
the site to **GitHub Pages** (the workflow auto-enables Pages on first run).

## Notes

- Imagery uses royalty-free Unsplash placeholders; country flags via flagcdn.com.
  Swap in real product/creator photos when ready.
- Theme defaults to **dark**; the header toggle persists the choice in `localStorage`.
- This is the homepage only. Product/post detail pages are out of scope.
