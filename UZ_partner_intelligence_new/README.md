# Uzbekistan · Partner Intelligence 2.0

Static, dependency-free rebuild of the Cosentino Uzbekistan channel-intelligence dashboard, built to the
spec in `../promptWEBnewdesgin.MD`. No backend, no login, no build step — open any HTML file directly
in a browser, or serve the folder with any static file server (e.g. `python -m http.server` from inside
this folder, or a static Vercel deployment pointed at this directory).

## Entry point

Open **`index_R_P.html`**. It lets you pick a channel (Retail / Projects) and a design proposal
(A recommended, or B), then opens the corresponding proposal page with that channel preloaded.

## Files

| File | Purpose |
|---|---|
| `index_R_P.html` | Cover: channel picker, proposal picker, Cosentino brand module, EN/RU |
| `proposal_A.html` + `proposal_A.css` | **Executive Intelligence** — light, mineral, editorial. Recommended for the Executive Committee. |
| `proposal_B.html` + `proposal_B.css` | **Market Command Center** — dark, immersive, KPI-band-first composition. |
| `base.css` | Structural/behavioural CSS shared by both proposals (layout, chips, drawer, tables, responsive, focus states) |
| `data.js` | `RETAIL_DATA` (169), `PROYECTOS_DATA` (83), `DEVELOPMENTS_DATA` (20) — generated verbatim from `../data_v3/*.json`, do not hand-edit; regenerate by re-concatenating if the source datasets change |
| `app-core.js` | All shared logic: i18n dictionary (EN/RU), state, filters, priority-scoring model, positioning-map layout with collision avoidance, drawer builder, CSV export, coverage/competitive computations, DOM mount/render |
| `assets/` | Cosentino brand images go here — see `assets/README.md` (currently a documented placeholder; no fabricated art) |
| `tests/test-runner.html` | Open directly in a browser — runs in-page assertions (counts, unique ids, filter-reset integrity, map minimum separation, score determinism, CSV escaping) and reports PASS/FAIL |
| `IMPLEMENTATION_PLAN.md` | Architecture, data model, scoring model, map algorithm, and explicitly logged scope decisions/gaps |

## Design notes

- Both proposals share the exact same element IDs and are driven by the same `app-core.js` — only the
  CSS theme file and (in B) the source order of the KPI band vs. the nav band differ. This satisfies the
  "share logic, differ only in visual direction/composition" requirement without maintaining two parallel
  app trees.
- The priority/positioning model is fully documented in-app (drawer → "About the model") and in
  `IMPLEMENTATION_PLAN.md` §3 — every score is reproducible from the visible dataset fields.
- Missing evidence always renders literally as "Not evidenced in current research" (EN) /
  "Не подтверждено текущим исследованием" (RU) — nothing is invented, and `physical_exhibition: "Not
  determinable"` is never collapsed into "No".

## Known gaps (see `PROJECT_STATE.md` at the project root for the full, current list)

- Brand images not yet placed (see `assets/README.md`).
- Live browser verification (the test-runner pass/fail, keyboard/drawer walkthrough, EN/RU visual check,
  and the four responsive breakpoints) has not been executed *from this session* — the sandboxed tool
  environment could not launch a browser or Node process. Opening `tests/test-runner.html` and the two
  proposal pages directly is the fastest way to confirm before presenting.
