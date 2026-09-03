# Uzbekistan Partner Intelligence

Complete market-research repository for Cosentino's partner intelligence work in Uzbekistan. It combines the underlying research evidence, historical datasets, written reports, transformation scripts, previous dashboards, and the current executive web application.

Market research and dashboard created by **Francisco González**.

## Open the current application

Open [`UZ_partner_intelligence_new/index_R_P.html`](UZ_partner_intelligence_new/index_R_P.html) directly in a browser.

The application is static and dependency-free. It can also be served locally:

```powershell
Set-Location .\UZ_partner_intelligence_new
python -m http.server 8000
```

Then visit `http://localhost:8000/` and open `index_R_P.html`.

## Current source-of-truth datasets

- `data_v3/retail_dataset.json`: 169 Retail actors.
- `data_v3/proyectos_dataset.json`: 83 Projects actors.
- `data_v3/new_tashkent_projects_v3.json`: 20 project developments.

Older datasets remain in the repository to preserve research history and auditability. They are not the current application source of truth.

## Repository guide

- `UZ_partner_intelligence_new/`: current EN/RU executive application, shared logic, consolidated web data, and browser tests.
- `data_v3/`: current datasets, progress notes, and supporting research evidence.
- `data_v2/` and `data/`: earlier datasets and transformation work.
- `.firecrawl/`: raw research outputs retained as source evidence.
- `report_en*.md` and `report_ru*.md`: written research reports.
- `index_v2/` and top-level dashboards: earlier interface versions retained for reference.
- `docs/superpowers/specs/`: approved product and repository design.
- `docs/superpowers/plans/`: implementation and publication plans.
- `prompt*.md`: project briefs and historical instructions.

## Main application capabilities

- Executive landing page with Retail and Projects channels.
- Two visual proposals sharing one data and interaction layer.
- Positioning map, account list, priority shortlist, coverage, and competitive landscape.
- Dedicated Project developments view with status and timing evidence.
- Combined filters, right-hand evidence drawer, EN/RU interface, and filtered CSV export.
- Transparent priority model and explicit separation between verified evidence and commercial recommendations.

## Verification

Open `UZ_partner_intelligence_new/tests/test-runner.html` in a browser to run the dependency-free data and logic checks. Manual visual and interaction verification requirements are documented in `PROJECT_STATE.md` and the design specification.

## Vercel

For deployment, import this repository into Vercel and set the project **Root Directory** to:

`UZ_partner_intelligence_new`

No framework preset, build command, or backend is required. The application entry point is `index_R_P.html`.

## Data handling

The repository preserves source evidence and research history. Credentials, local deployment state, execution logs, and editor/OS temporary files are intentionally excluded. Missing information in the application must remain marked as not evidenced; commercial interpretations must not be presented as verified facts.

