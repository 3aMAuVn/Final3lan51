# Hero Starry Banner — Integration Guide

## Files in this package

| File | Where it goes in your project | What it does |
|------|-------------------------------|--------------|
| `hero-starry-banner.html` | `_includes/` | The new responsive hero section |
| `page-hero.html`          | `_includes/` | Replace existing file — now delegates to the banner |
| `_hero-banner.scss`       | `_sass/pages/` | All CSS for the hero |
| `main.scss`               | `assets/css/` | Replace existing — adds the new import |
| `index.html`              | `/` (root)    | Updated home page front matter + hero include |

**No new images needed** — the banner uses `assets/logo.png`,
`assets/hat-no-background.png`, and `assets/hero-star.png` which
already exist in your project.

---

## Step-by-step instructions

### 1. Copy the files

```
_includes/hero-starry-banner.html   ← copy from this package
_includes/page-hero.html            ← replace existing
_sass/pages/_hero-banner.scss       ← copy (new file)
assets/css/main.scss                ← replace existing
index.html                          ← replace existing
```

### 2. Update inner-page front matter (optional but recommended)

Every inner page that uses `page-hero.html` can now take these
front-matter keys:

```yaml
hero_title:    "Programs"          # shown as the <h1>
kicker:        "What we offer"     # small eyebrow line above title
hero_subtitle: "A short sentence about this page."
```

`hero_title` already falls back to `page.title` if omitted, so
existing pages will work without any changes.

### 3. Enable the pills on the home page (already done in index.html)

The feature-pill grid only renders when `show_hero_pills: true` is
set in the page's front matter. It is already set in the supplied
`index.html`.

### 4. Rebuild your site

```bash
bundle exec jekyll serve
```

Open the home page and any inner page to confirm the banner renders.

---

## How to adjust things

### Colours
All hero colours are declared in `_hero-banner.scss` at the top.
The main ones:

| Variable / literal | Default | Purpose |
|--------------------|---------|---------|
| `#000b35` → `#071851` | navy gradient | background |
| `#ee8f2c` | orange | page title |
| `#ffad62` / `#68d6ff` / `#b6a6ff` | orange / cyan / purple | subtitle tags |

### Number of stars
The JS at the bottom of `hero-starry-banner.html` generates ~1 star
per 5 000 px² (max 220). Change the divisor `5000` to make it
denser or sparser.

### Pills
Add, remove, or reorder the `.mmm-pill` blocks inside the
`{% if page.show_hero_pills %}` section of `hero-starry-banner.html`.
Each pill has two inline CSS vars you can change per-pill:

```html
<div class="mmm-pill" style="--pill-bg:#86c9e9;--pill-icon-bg:#4aa1de">
```

### Removing pills from the home page
Just delete `show_hero_pills: true` from `index.html`'s front matter.

---

## Responsive behaviour

| Viewport | Layout |
|----------|--------|
| > 900 px  | Three-column: logo — copy — hat |
| 520–900 px | Logo left, copy + hat stacked right |
| < 520 px  | Logo left, copy right; hat hidden; pills 2-col grid |


---

## Version history

**v2 (fix)** — Removed invalid `{{/* ... */}}` comment syntax that was
breaking the Jekyll build. If you installed v1 and your site was
failing, replace `_includes/hero-starry-banner.html` with the v2 file
and the build will work.
