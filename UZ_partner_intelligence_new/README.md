# Uzbekistan · Partner Intelligence 2.0

Static, dependency-free rebuild of the Cosentino Uzbekistan channel-intelligence dashboard, built to the
spec in `../promptWEBnewdesgin.MD`. No backend, no login, no build step — open any HTML file directly
in a browser, or serve the folder with any static file server (e.g. `python -m http.server` from inside
this folder, or a static Vercel deployment pointed at this directory).

## Entry point

Open **`index_R_P.html`**. It lets you pick a channel (Retail / Projects), then opens
`proposal_A.html` — **Executive Intelligence** — with that channel preloaded. This is the only live
design direction: an earlier pass explored a second, dark "Market Command Center" proposal, but per
Francisco González's explicit direction (2026-09-03) the product ships as one committed light/corporate
experience. `proposal_B.html`/`proposal_B.css` still exist in this folder as an unused historical
reference — nothing links to them, `index_R_P.html` never offers a proposal choice, and
`tests/design-contract.test.mjs` asserts this contract directly (`Switch proposal`/`proposal_B.html`
must not appear in the live pages).

## Files

| File | Purpose |
|---|---|
| `index_R_P.html` | Cover: channel picker, Cosentino brand module, EN/RU |
| `proposal_A.html` + `proposal_A.css` | **Executive Intelligence** — light, mineral, editorial. The only live design direction. |
| `proposal_B.html` + `proposal_B.css` | Unused reference only — the dark "Market Command Center" direction, not part of the live flow (see Entry point above) |
| `base.css` | Structural/behavioural CSS (layout, chips, drawer, tables, responsive, focus states) |
| `data.js` | `RETAIL_DATA` (169), `PROYECTOS_DATA` (83), `DEVELOPMENTS_DATA` (20) — generated verbatim from `../data_v3/*.json`, do not hand-edit; regenerate by re-concatenating if the source datasets change |
| `app-core.js` | All shared logic: i18n dictionary (EN/RU), state, filters, priority-scoring model, positioning-map layout with collision avoidance, drawer builder, CSV export, coverage/competitive computations, DOM mount/render |
| `assets/` | Cosentino brand images (`silestone.jpg`, `dekton.jpg`, `eclos.jpg`, `sensa.jpg` — reused from the sibling Kazakhstan project's own verified downloads, same source pages) plus the QA reference screenshots below |
| `tests/test-runner.html` | Open directly in a browser — runs in-page assertions (counts, unique ids, filter-reset integrity, map minimum separation, score determinism, CSV escaping) and reports PASS/FAIL. Currently **25/25**. |
| `tests/design-contract.test.mjs` | Node test (`node --test tests/design-contract.test.mjs`) asserting the single-proposal contract and a few structural invariants against the raw source files |
| `IMPLEMENTATION_PLAN.md` | Architecture, data model, scoring model, map algorithm, and explicitly logged scope decisions/gaps |

## Design notes

- `app-core.js` is the single source of behavior for `proposal_A.html`; `proposal_B.html` was written
  against the same element IDs and functions when both proposals were live, so it still shares the same
  logic if anyone ever revives it — but it is not exercised by tests or QA going forward.
- The priority/positioning model is fully documented in-app (drawer → "About the model") and in
  `IMPLEMENTATION_PLAN.md` §3 — every score is reproducible from the visible dataset fields.
- Missing evidence always renders literally as "Not evidenced in current research" (EN) /
  "Не подтверждено текущим исследованием" (RU) — nothing is invented, and `physical_exhibition: "Not
  determinable"` is never collapsed into "No".
- `Project developments` is a distinct 20-record decision surface. Four aligned dropdowns filter by
  project name, developer, source status, and a derived commercial horizon (execution, near-term,
  announced/concept, delivered); selecting a row opens the evidence drawer.

## QA status (see `PROJECT_STATE.md` at the project root for the full, current trail)

Verified in a real browser (2026-09-04, interactive session): `tests/test-runner.html` at 25/25 PASS,
zero console errors across cover, Retail, Projects, Project developments, drawer open/close (mouse,
Escape), EN/RU toggle, and the mobile filters panel — at all four required breakpoints (1440×900,
1280×800, 768×1024, 390×844). Reference screenshots for each are in `assets/` (`uzbekistan-*-desktop.png`,
`uzbekistan-*-mobile.png`, plus the two extra retail breakpoints). One real bug found and fixed this
session: a same-document `hashchange` (e.g. editing the URL while the app tab is already open, or
browser back/forward between channels) didn't re-render — `mount()` only parsed `location.hash` once, on
initial load. Fixed by adding a `hashchange` listener that re-parses and re-renders.
