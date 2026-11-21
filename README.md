# Ramkumar Koppula — Portfolio

Personal portfolio for **Ramkumar Koppula**, Frontend UI Engineering Lead | Senior Flutter Developer.

**Live site:** [https://rameolic.github.io/portfolio/](https://rameolic.github.io/portfolio/)

## Stack

Static HTML, CSS, and vanilla JavaScript. No build step. Hosted on GitHub Pages (`/portfolio/` project site).

## Structure

- `index.html` — main portfolio
- `case-studies/` — shareable engineering case studies
- `assets/css/portfolio.css` — design system
- `assets/js/content.js` — centralized professional metadata
- `assets/js/portfolio.js` — theme, nav, expandables, lightbox, resume resolver
- `assets/pdf/resume.pdf` — optional local resume (falls back to Google Drive if missing)

## Local preview

```bash
# from repo root
python3 -m http.server 8080
# open http://localhost:8080/
```

## Resume

Place a real PDF at `assets/pdf/resume.pdf`. Until then, Resume CTAs use the Google Drive fallback configured in `assets/js/content.js`.
