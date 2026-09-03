# Brand assets — placement instructions

The cover page (`index_R_P.html`) links to four Cosentino product lines. Per the master prompt, these
images must be real assets downloaded from the official Cosentino pages (or already-documented local
assets) — never AI-generated art.

**Update 2026-09-03 (interactive session): filled.** `silestone.jpg`, `dekton.jpg`, `eclos.jpg` and
`sensa.jpg` now exist in this folder — reused from the sibling Kazakhstan project
(`kazahistan/KZ_retail_proyect/assets/`), which sourced them from the same official Cosentino product
pages during its own night run. Same brand, same product lines, same source pages — safe to share
across every country build rather than re-downloading per market. (The `.png` extension named below in
the original instructions was a documentation mistake — the actual markup in `index_R_P.html` has always
requested `.jpg`, which is what both this folder and Kazakhstan's now consistently use.)

Exact filenames expected by `index_R_P.html` (no HTML/CSS changes needed, they already point here):

| File | Source page | Alt text already set |
|---|---|---|
| `assets/silestone.jpg` | https://www.cosentino.com/en-gb/colours/silestone | `Silestone` |
| `assets/dekton.jpg` | https://www.cosentino.com/en-gb/colours/dekton | `Dekton` |
| `assets/eclos.jpg` | https://www.cosentino.com/en-gb/colours/eclos | `Eclos` |
| `assets/sensa.jpg` | https://www.cosentino.com/en-gb/colours/sensa | `Sensa` |

Each `<img>` has `onerror` wired to swap itself for a plain-text label tile, so the page degrades
gracefully (no broken-image icons) whether or not the files are present. Once real files are added,
that fallback simply never triggers — no HTML/CSS changes needed. Keep the images' original aspect
ratio (the `.brand-tile` frame is 140×90px and centers the image via `object-fit`-free `max-height`,
so a landscape logo/swatch crop works best).
