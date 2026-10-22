# Said Hammane — BI & Data Analyst Portfolio

This repository contains a lightweight, responsive portfolio website for Said Hammane, focused on business intelligence, data modelling, reporting automation, and practical decision support.

## Highlights

- Clear BI and data positioning
- Original inventory and sales dashboard case study
- Synthetic data disclosure—no client results are implied
- Three expandable articles about dashboard design, data quality, and automation
- Responsive layout and mobile navigation
- Accessible markup, reduced-motion support, and keyboard-friendly interactions
- No framework, build step, or runtime dependency

## Project structure

```text
index.html   Page content and structure
style.css    Visual design and responsive layout
script.js    Navigation, scroll progress, and reveal interactions
robots.txt   Search-crawler rules
```

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static web server. For example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customization

- Update contact details and introductory copy in `index.html`.
- Replace the synthetic case study with verified work when publishable evidence is available.
- Edit colors and spacing through the custom properties at the top of `style.css`.
- Add new articles by following the existing cards and `<details>` structure in the blog section.

## Deployment

The project is a static site and can be deployed to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any standard web host without a build command.

## Content note

The dashboard case study uses synthetic, non-client data. Its figures illustrate the interface and analytical method rather than a real business outcome.
