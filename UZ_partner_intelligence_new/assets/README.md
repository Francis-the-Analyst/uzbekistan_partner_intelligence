# Brand assets — placement instructions

The cover page (`index_R_P.html`) links to four Cosentino product lines. Per the master prompt, these
images must be real assets downloaded from the official Cosentino pages (or already-documented local
assets) — never AI-generated art. No such image files exist anywhere in this repository yet (checked
`assets/`, `.firecrawl/`, and `data_v3/.firecrawl/`; only unrelated internal-dashboard screenshots were
found), so the component is fully implemented but currently renders a text fallback tile instead of a
fabricated image.

Drop the following four files into this folder with these **exact filenames** (the markup in
`index_R_P.html` already points at them and needs no further changes once the files exist):

| File | Source page | Alt text already set |
|---|---|---|
| `assets/silestone.png` | https://www.cosentino.com/en-gb/colours/silestone | `Silestone` |
| `assets/dekton.png` | https://www.cosentino.com/en-gb/colours/dekton | `Dekton` |
| `assets/eclos.png` | https://www.cosentino.com/en-gb/colours/eclos | `Eclos` |
| `assets/sensa.png` | https://www.cosentino.com/en-gb/colours/sensa | `Sensa` |

Each `<img>` has `onerror` wired to swap itself for a plain-text label tile, so the page degrades
gracefully (no broken-image icons) whether or not the files are present. Once real files are added,
that fallback simply never triggers — no HTML/CSS changes needed. Keep the images' original aspect
ratio (the `.brand-tile` frame is 140×90px and centers the image via `object-fit`-free `max-height`,
so a landscape logo/swatch crop works best).
