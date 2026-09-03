# Uzbekistan Market Study — Retail & Projects Channel Mapping for Cosentino (Silestone / Dekton / Sensa)

**Third research pass — Firecrawl Pro.** Prepared for Cosentino Export Sales — market-entry intelligence to support an aggressive-pricing placement strategy for Silestone, Dekton and Sensa surfaces across Uzbekistan's retail and projects channels.

Companion files: `data_v3/retail_dataset.json` / `.csv` (169 records), `data_v3/proyectos_dataset.json` / `.csv` (83 records), `data_v3/new_tashkent_projects.json` / `.csv` (20 developments), `data_v3/brand_brief.md` (Cosentino product/positioning reference used throughout this report). Russian version: `report_ru_v3.md`.

---

## 1. Executive Summary

This is the third and most exhaustive research pass on the Uzbek market to date. It closes the two structural gaps confirmed in passes 1–2 (105 records, zero Low-price actors, kitchens underrepresented) and adds a channel and typology the previous passes never covered: **Facade Installer**, Cosentino's own official professional category for Dekton (ventilated facades, curtain wall, bonded facades).

**Total actors identified: 252** — 169 in the Retail channel, 83 in the Projects channel — plus **20 New Tashkent developments** documented as standalone projects. This is more than double the 105 actors found across the first two passes combined, and it was achieved with full Firecrawl Pro coverage (no WebSearch/WebFetch fallback was needed at any point in this pass — every city and channel team completed its search on Firecrawl alone).

Headline corrections versus pass 2:
- **Price coverage:** Low 51 (30%) / Medium 75 (44%) / High 41 (24%) / Not determinable 2 (1%) in Retail — versus 0 Low / 40 Not determinable (38%) out of 105 in pass 2. The "no low-end" bias is fully corrected.
- **Kitchen representation:** 73 Kitchen + 16 Kitchen & Bath = **89 kitchen-related actors** (53% of Retail), up from 12/105 (11%) in pass 2, and now with real Low-price representation in every city (Tashkent, Namangan, Samarkand, Andijan all have confirmed budget kitchen fabricators).
- **New Tashkent execution capacity:** 15 Contractor records versus "almost none" in pass 2, now including a confirmed CAMC/China IPPR link to the New Tashkent Directorate and a general contractor (TAN Group) with a documented role on the Toshkent Plaza commercial complex.
- **Facade Installer:** 8 confirmed installers found from zero in prior passes — see §9 for the dedicated spotlight, since this is the tightest strategic fit with Dekton of any typology in this study.

---

## 2. Methodology

**Tooling.** Firecrawl Pro (`firecrawl-search`, `firecrawl-map`, `firecrawl-scrape`, `firecrawl-agent`) was the primary and, in this pass, the *only* tool used for discovery and extraction across all six workstreams (brand alignment, dataset consolidation, four retail-city searches, and the projects-channel search). The WebSearch/WebFetch/playwright-cli contingency defined for this pass was never triggered — no Firecrawl credit exhaustion occurred. Two of the six background research workstreams (Samarkand and Andijan retail) were interrupted mid-run by a transient infrastructure network error unrelated to Firecrawl; Andijan's incremental save had already captured its full, valid 24-record result before the interruption, and Samarkand was resumed from scratch with a tightened incremental-save cadence (write after every confirmed actor rather than every batch) and completed cleanly.

**Step 0 — Brand alignment.** Before any market search, www.cosentino.com (home, `/silestone/`, `/dekton/`, `/facades/`, `/sensa/`) was scraped to build a reference brief (`data_v3/brand_brief.md`) mapping each product line to its real applications and to the actor typologies it fits — this is what confirmed Facade Installer as a brand-legitimate category (Cosentino runs its own "Find an installer" directory for this exact role) rather than a category invented for this study, and it is what anchors the entry-angle recommendations in §8.

**Step 1 — Consolidation with prior passes.** `data_v2/master_dataset_v2.json` (145 records — the live dataset was larger than the 105-row CSV snapshot the pass-2 report was based on, reflecting a later in-pass supplementary injection of records not reflected in the original CSV export) was reclassified under this pass's channel/typology rules rather than re-searched from zero. 48 records changed channel under the new taxonomy (mechanical moves such as all "Contractor" and most "Developer"/"Architecture Studio" records shifting from the old undifferentiated "Retail" label to "Projects"), and 4 actors were tagged with a secondary channel (`canal_secundario`) because they demonstrably serve both a private-client and a developer-client base. This consolidated set became the seed for both new datasets; new search in this pass then added on top of it, city by city, with cross-checks against the existing 145 records to avoid duplicate entries.

**Execution.** Four retail searches (Tashkent, Namangan, Samarkand, Andijan) and one projects-channel search (New Tashkent) ran as independent, parallel workstreams against the same query and classification rules defined in `prompt2_0.md`, each with continuous incremental saving to its own output file (never batching all results until the end). A final merge pass deduplicated across the seed and new-search files (4 near-duplicate Andijan records were caught and resolved by keeping the stronger of the two versions) and normalized a small number of inconsistent field values (a few Spanish-language "No determinable" values standardized to "Not determinable"; four `price_range` values of "Medium-High"/"Low-Medium" resolved to the adjacent standard tier, consistent with the resolution convention already used in pass 2).

**Data quality notes carried forward for outreach verification, not treated as blockers:**
- Two "Studia 54" records in the original v2 dataset may be the same Tashkent company under two listings — flagged, not merged, pending confirmation.
- MAG PROJECTING (Samarkand) and Prime Ceramics (Samarkand, a manufacturer/wholesaler rather than a retail placement point) carry ambiguous-fit notes from the original pass.
- Several New Tashkent masterplan-concept districts (Marjon, Xonayvon, Tashkent Metropolis, Hashamat, the Lot 71 administrative complex) have no privately assigned developer yet as of the source date — documented as concept-stage in the projects table, not actionable for outreach yet.
- Yangi Saroy is sourced from a seller listing only, not confirmed by the New Tashkent Directorate as an official development — flagged accordingly.

---

## 3. Market Overview

| | Retail channel | Projects channel | Projects: developments |
|---|---|---|---|
| **Total records** | 169 | 83 | 20 |
| **Cities covered** | Tashkent (57), Namangan (41), Samarkand (39), Andijan (32) | Tashkent/New Tashkent (43), Namangan (13), Samarkand (11), Andijan (16) | New Tashkent (Tashkent) |
| **Price split** | Low 51 · Medium 75 · High 41 · N/D 2 | Low 0 · Medium 50 · High 31 · N/D 2 | — |
| **Confirmed physical exhibition** | 79 Yes / 4 No / 86 N/D | 5 Yes / 5 No / 73 N/D | — |

The Retail figure of 169 includes one legacy record geographically anchored just outside city limits (Imperial Granite, Yangiyo'l — Tashkent Region, ~30km from Tashkent city, carried forward from pass 2 and still treated as part of the Tashkent market given it actively serves it).

---

## 4. Segmentation — Real Value Proposition (Analysis point 1)

Grouping actors by what they actually sell and to whom (not by self-description) produces five recognizable retail segments and three projects segments:

**Retail:**
- **A — Budget/mass-market furniture-style kitchens** (largest group, ~51 Low-price actors across all four cities): unbranded MDF/LDSP kitchen and wardrobe fabricators, typically Instagram/Telegram-native, wholesale ("optom") pricing language, no imported hardware brands named. Direct-competitor material is domestic laminate/acrylic, not stone — the opportunity here is upsell to a stone countertop add-on, not a full-surface placement.
- **B — Mid-market kitchen & interior fabricators with imported hardware** (the largest single band, Medium price, ~75 actors): Blum/Hettich/Egger/Kronospan hardware and board brands are the recurring signal; several (FullHouse, Mebelroom.uz, Lamebel) already mention stone or acrylic countertops as an add-on, which is the natural Silestone/Sensa entry point.
- **C — Premium kitchen & bath studios with confirmed showrooms** (High price, exhibition confirmed): Lux Home Mebel, Premium Concept, Mirano, Kale Gallery Samarkand — carry international sanitaryware/tile brands (Grohe, Porcelanosa, Laufen, Kale) alongside custom cabinetry, and in one case (Premium Concept) already carry **Neolith**, Dekton's direct sintered-stone competitor.
- **D — Natural/engineered stone showrooms and fabricators** (Interstone, Imperial Granite, Natural Stone Service, KvarcS, ArtStone Namangan, KS Lux): the closest direct competitive set to Cosentino's own materials. Several already import Asian/Turkish engineered quartz (Avant Quartz, Noblle Quartz, GRANDEX) or Italian large-format porcelain (Laminam) — these are simultaneously the best comparators for competitive positioning and, for the ones without an exclusive brand commitment, plausible carriers for Silestone/Dekton.
- **E — Boutique interior design studios, private-client-facing** (32 actors, Medium-to-High, mostly walk-in or Instagram-led): commission-driven specification channel rather than a stocking channel — value is in specification influence on renovation projects, not shelf space.

**Projects:**
- **F — Volume developers** (25 actors): from single-project regional players (MJ Developers, Namangan; Reverem House, Andijan) to multi-project national groups (TXT Group, active in Tashkent, Samarkand and Namangan; NRG, 9 active Tashkent projects). Positioning language splits cleanly into "comfort-class" (mass mid-market) and explicit "premium/elite" tiers — the latter is the natural Cosentino fit.
- **G — Architecture & engineering bureaus** (24 actors): a small number carry disproportionate prescriptive weight — see §8 for the New Tashkent-specific ranking. International names (Zaha Hadid Architects, Buro Happold, Gillespies, GAD Architecture, Benoy) appear as design partners on flagship New Tashkent institutional projects, alongside a strong domestic layer (ANK Memor, Archiquad Group).
- **H — Contractors and facade installers** (15 Contractor + 8 Facade Installer + 9 Hybrid): the execution layer. Facade Installer is the newest and most strategically distinctive segment in this pass — see §9.

---

## 5. Typology × Price Range × City (Analysis point 2)

**Retail**

| Typology | Tashkent | Namangan | Samarkand | Andijan |
|---|---|---|---|---|
| Kitchen | High 3 · Med 8 · Low 12 | High 3 · Med 9 · Low 9 | Med 4 · Low 9 | Med 6 · Low 10 |
| Kitchen & Bath | High 3 · Med 2 · Low 1 | High 2 · Low 1 | High 3 · Low 1 | Med 2 · High 1 |
| Interior Designer (Retail) | High 7 · Med 2 · Low 1 | Med 8 · N/D 1 | Med 7 | Med 4 · High 1 · N/D 1 |
| Showroom | Med 5 · High 3 · Low 2 | High 1 · Med 4 · Low 1 | Med 4 · High 2 · Low 1 | Med 2 · Low 3 |
| Hybrid | High 6 · Med 2 | High 1 · Med 1 | High 4 · Med 4 | High 1 · Med 1 |

Reading: Low-price Kitchen actors are now the single largest cell in the entire retail dataset in three of four cities (Tashkent, Namangan, Andijan) — confirming both that a genuine mass-market kitchen segment exists everywhere in the country and that it was purely a prior-pass search-scope gap, not a market reality, that it went undocumented. Samarkand is the only city where Low-Kitchen (9) roughly matches rather than exceeds Medium (4) — the smallest sample of the four cities for this typology and worth a light follow-up pass if Samarkand becomes a priority market.

**Projects**

| Typology | Tashkent (incl. New Tashkent) | Namangan | Samarkand | Andijan |
|---|---|---|---|---|
| Developer | High 4 · Med 3 | High 2 | Med 3 · High 2 | Med 5 · High 6 |
| Architecture Studio | Med 12 · High 2 · N/D 1 | Med 4 · High 1 | Med 3 | Med 1 |
| Contractor | High 3 · Med 2 | Med 5 | Med 1 | Med 2 · High 2 |
| Facade Installer | Med 6 · High 1 · N/D 1 | — | — | — |
| Hybrid | High 3 · Med 3 | High 1 | High 2 | — |
| Interior Designer (Projects) | High 2 | — | — | — |

Facade Installer and Interior Designer (Projects) are Tashkent-only findings in this pass — expected, since New Tashkent construction activity and vertical-envelope specialization concentrate in the capital; a facade-specific follow-up query in Samarkand and Namangan (hotel/administrative construction) is a reasonable candidate for a fourth pass if the regional projects channel becomes a priority.

---

## 6. Typology × Physical Exhibition × City (Analysis point 3)

**Retail** — actors with a confirmed showroom/exhibition space (`Yes`), by typology:

| Typology | Tashkent | Namangan | Samarkand | Andijan | Total confirmed |
|---|---|---|---|---|---|
| Kitchen | 11 | 10 | 4 | 4 | 29 |
| Kitchen & Bath | 5 | 2 | 3 | 3 | 13 |
| Showroom | 6 | 5 | 7 | 4 | 22 |
| Hybrid | 6 | — | 4 | — | 10 |
| Interior Designer (Retail) | 2 | — | — | 3 | 5 |

Showroom and Kitchen typologies carry the strongest confirmed-exhibition rate (physical retail businesses by nature), while Interior Designer (Retail) is structurally the weakest — most operate from a design office or purely through Instagram/Telegram without a public-facing display space, so sample placement there works better as a **portable sample kit + digital catalog**, not shelf space (see §11 entry angles).

**Projects** — confirmed exhibition is rare by nature of the channel (5 of 83 total), and concentrated in Developer records with an active sales office functioning as a de facto showroom (Golden House/INFINITY, AL-BINA Development) — these are disproportionately valuable projects-channel candidates precisely because a sales office is a ready-made place to exhibit material to prospective buyers and, indirectly, to the design/build partners who furnish show-flats.

---

## 7. Positioning Maps (Analysis point 4)

Two maps are built into the interactive dashboard (`index.html`) — Price tier (Low/Medium/High) on one axis against Service Scope (Design only → Design+Install → Design+Install+Supply → Design+Build → Design+Build+Develop) on the other, plotted separately for Retail and Projects. Summary reading below; use the dashboard for the actor-level interactive view.

**Retail map.** The dominant cluster sits at Medium price / Design+Install+Supply — the fabricate-and-fit kitchen and bath studios that are structurally the easiest and fastest sample-placement conversations, since they already control both specification and installation. The High-price / Design+Install+Supply quadrant (Interstone, Premium Concept, Imperial Granite, KS Lux, Mirano) is the strategic quadrant for Cosentino: highest fit with Silestone/Dekton/Sensa positioning, already selling comparable imported material, and structurally able to install what they sell. The Low-price cluster sits almost entirely at Design+Install+Supply too, but with generic/no branded materials — the right conversation there is a cross-sell add-on (stone countertop upgrade tier), not a full placement.

**Projects map.** Developers cluster at Design+Build+Develop across the full price range (comfort to premium); Architecture Studios cluster tightly at Design only, Medium price — reflecting a fee-for-service model with no material margin of their own, meaning their leverage is pure specification influence, not stocking. Facade Installers cluster at Design+Install+Supply, Medium price, which is the ideal quadrant for a supply partnership (they already both spec and physically install envelope systems) — see §9.

---

## 8. New Tashkent Deep-Dive (Analysis point 5)

**Volume ranking (developers).** By documented unit/area scale:
1. **Sharq Bahori** — 1.8M m² built area, 260 blocks, 13,879 residential units + 1,121 commercial units. By a wide margin the largest single development found in this or prior passes, and its own branding appears on the official New Tashkent Directorate site header, suggesting flagship-project status.
2. **Ostona** — BI Group (Kazakh developer) + Murad Buildings, 3,162 planned units, $200M total investment, phase 1 launched Nov 2025.
3. **Crystal Avenue** — UET Construction + AL-BINA Development + IMAN Holding, 212 units, business-class/"smart luxury" positioning, sales phase 2 open — smaller in unit count but the clearest "smart luxury" positioning match to Cosentino's own brand language of any project found.
4. **Sarbon** (Murad Buildings) and **Markaz Yangi Toshkent** (Markaz Group) — both in early-access/pre-launch marketing, scale not yet published.

**Architecture studios with masterplan concentration.** ANK Memor LLC stands out as the only studio confirmed to have designed a **delivered** New Tashkent Directorate building (the Directorate's own 15,000m² administrative headquarters) — the single strongest institutional-trust signal in the entire projects dataset. Zaha Hadid Architects, Buro Happold, Gillespies, GAD Architecture and Benoy appear as international design partners on flagship institutional projects (the Alisher Navoi research center, Tashkent Arena, and — from the pass-2 dataset — Golden House/INFINITY). Archiquad Group and several Namangan-based bureaus (Farchitects Design Bureau, on a large-scale Namangan Resort concept) round out the recurring domestic layer.

**Contractors appearing repeatedly.** TAN Group (TAN Steel Builders) is documented as general contractor on Toshkent Plaza, a large multi-tower commercial/business complex — the clearest confirmed execution-scale contractor found in this pass. CAMC/China IPPR International Engineering is listed as an official New Tashkent Directorate partner, though its specific in-district project could not be independently confirmed in this pass and should be verified before outreach. Murad Buildings (MBC) is unusual in appearing as both developer and its own contractor across two projects (Ostona, Sarbon), which raises its supply-chain leverage relative to a pure developer.

**Full projects table** (all 20 developments, with status/scale/source) is in `data_v3/new_tashkent_projects.json` / `.csv` and browsable in the dashboard's Projects tab.

---

## 9. Facade Installer Spotlight — the sharpest new fit in this pass

Zero Facade Installers existed in the pass-1/pass-2 dataset. This pass found **8**, all in Tashkent, all Medium-to-High price, all offering Design+Install+Supply — structurally the single best-matched typology to a specific Cosentino product line (Dekton Slim / Dekton Facades) of anything in this study, because Cosentino already runs its own "Find an installer" professional directory for exactly this role (confirmed in `brand_brief.md`, §1). The two strongest candidates by service-scope and positioning signal:

- **VENFASAD (Art Granit Tashkent LLC)** — full Design+Install+Supply scope, and a company name that already signals a granite/stone-facade specialization, making a Dekton-as-upgrade conversation a natural extension of their existing material story rather than a new one.
- **ALFAS Tashkent** — High-price positioning with full Design+Install+Supply scope, the clearest "premium tier" signal among the eight.

The remaining six (UZFASAD, Nash Fasad, Fasad.uz, Fasad Gallery Company, ALSTAR/Golden Happiness, MBS) are documented in `proyectos_dataset.json` and worth a systematic outreach sweep as a group once the pilot conversation with the top two validates the pitch. One additional signal worth tracking: TAN Group (the Toshkent Plaza contractor, see §8) shows evidence of an in-house facade-repair scope, meaning at least one general contractor already active on a flagship New Tashkent commercial project could plausibly buy Dekton Facades directly rather than only through a specialist installer.

---

## 10. Priority Candidates (Analysis point 6)

12 candidates, selected on confirmed showroom/exhibition, Medium-to-High price fit, and — for the Projects channel — documented volume or institutional-trust signal. Representation spans Tashkent (8), Samarkand (1), Namangan (2) and Tashkent Region (1), i.e. the capital plus two secondary cities as required. Low-price actors are deliberately excluded from this list per the study's own priority criterion (they remain fully documented in the dataset for market-map completeness and for the possibility of a future volume-led approach) — the sole exception considered, KvarcS (a local engineered-quartz manufacturer with entry pricing), was ultimately excluded because it is a manufacturing competitor of Silestone rather than a channel partner, and is flagged instead as a competitive-intelligence entry in §4.

| # | Candidate | City | Typology / Channel | Why priority |
|---|---|---|---|---|
| 1 | **Interstone** | Tashkent | Hybrid (stone showroom + K&B) / Retail | Direct engineered-quartz competitor already running an "expert center" showroom; high price fit; imports Asian quartz brands with no exclusivity signal found |
| 2 | **Premium Concept** | Tashkent | Kitchen & Bath / Retail | Already carries Neolith (Dekton's direct sintered-stone competitor) alongside Grohe/Porcelanosa/Laufen — a replace-or-flank conversation, not a cold intro |
| 3 | **Imperial Granite** | Tashkent Region (Yangiyo'l) | Hybrid (stone showroom + fabrication) / Retail | 85 staff, 20+ years, 350+ projects — the largest-scale natural-stone fabricator found in the dataset; strong candidate for a fabrication/installation partnership beyond simple sample placement |
| 4 | **KS Lux** | Tashkent | Hybrid (materials retailer) / Retail | Carries Laminam (Italian large-format porcelain, a Dekton comparator category) — introduce Dekton as a second premium large-format line |
| 5 | **Kale Gallery Samarkand** | Samarkand | Kitchen & Bath / Retail | Confirmed exhibition, carries Kale (Turkish) + GROHE — best secondary-city Kitchen & Bath showroom found |
| 6 | **ArtStone Namangan** | Namangan | Showroom (engineered quartz/terrazzo) / Retail | Only engineered-stone manufacturer with a showroom in the entire Fergana Valley — regional exclusivity angle |
| 7 | **Mirano — Premium Class** | Tashkent | Kitchen / Retail | Premium kitchen fabricator using Blum hardware; strong showroom-led candidate for a full countertop-line placement |
| 8 | **Golden House Development (INFINITY Club House)** | Tashkent | Developer / Projects | Confirmed sales-office showroom; 35-unit exclusive club residence designed with Benoy/Chapman & Taylor — the clearest luxury show-flat opportunity in the dataset |
| 9 | **Murad Buildings (MBC)** | Tashkent (New Tashkent) | Hybrid (developer + own contractor) / Projects | Building both Ostona (with BI Group) and Sarbon inside New Tashkent itself — controls both spec and execution on two active projects |
| 10 | **ANK Memor LLC** | Tashkent | Architecture Studio / Projects | Designed the New Tashkent Directorate's own delivered headquarters building — the single strongest institutional-trust signal available |
| 11 | **VENFASAD (Art Granit Tashkent)** | Tashkent | Facade Installer / Projects | Top facade-installer candidate — full Design+Install+Supply scope, existing stone-facade positioning (see §9) |
| 12 | **TXT Group — Central Avenue Namangan** | Namangan | Developer / Projects | Explicitly premium-positioned 22-storey flagship in a secondary city, ground-floor retail/commercial space suitable as a showroom location |

---

## 11. Entry Angles (Analysis point 7)

By typology, applied to the 12 candidates above:

- **Kitchen / Kitchen & Bath** *(Premium Concept, Mirano, Kale Gallery Samarkand)*: free showroom exhibition space in exchange for countertop-brand exclusivity, plus an initial-volume discount to seed the first installed reference projects.
- **Stone/materials showrooms carrying comparator brands** *(Interstone, KS Lux, Imperial Granite, ArtStone Namangan)*: a side-by-side sample program positioned as a second/complementary premium line rather than a replacement pitch where an existing brand relationship is strong — technical comparison materials (durability, low-silica/health positioning, sustainability data from `brand_brief.md`) are the differentiator conversation.
- **Interior Designer (Retail)**: referral commission on specified projects, pocket sample kit + digital catalog access for rendering/specification (no showroom dependency — this is the right model precisely because most of this typology lacks a public-facing display space, per §6).
- **Developer** *(Golden House/INFINITY, TXT Group Namangan)*: framework supply agreement for the sales-office show-flat / model apartment, with an option to scale to full-phase supply if the material gets positive buyer reception.
- **Developer + own contractor** *(Murad Buildings)*: same framework-agreement approach, but pitched at the group level to cover both of its active in-district projects (Ostona, Sarbon) in one negotiation rather than two.
- **Architecture Studio** *(ANK Memor)*: preferred technical-specification agreement across future Directorate-adjacent commissions, technical support and sample material for client-facing proposals — leveraging the delivered-HQ credibility to open doors with other Directorate-linked studios.
- **Contractor**: volume pricing for in-progress builds, project-stage payment terms — best approached once a specification win exists upstream (developer or architect) rather than cold.
- **Facade Installer** *(VENFASAD, and the wider group of 8 once the pilot validates)*: Dekton Slim/Dekton Facades supply agreement, installer technical training (leveraging Cosentino's existing facade-installer support pipeline described in `brand_brief.md`), and a visible pilot installation on a New Tashkent development as a live showcase — Murad Buildings' Sarbon or Ostona projects (candidate #9) are a plausible first pilot site given the existing relationship angle.

---

## 12. Deliverables

- `data_v3/retail_dataset.json` / `.csv` — 169 records, full schema (see any record for field list: typology, channel, secondary channel, price range, exhibition, service scope, contact, source, etc.)
- `data_v3/proyectos_dataset.json` / `.csv` — 83 records, same schema
- `data_v3/new_tashkent_projects.json` / `.csv` — 20 developments
- `data_v3/brand_brief.md` — Cosentino product/positioning reference
- `index.html` — single-file interactive dashboard (Retail/Projects cover screen, filters, positioning maps, per-actor profile, CSV export, EN/RU toggle)
- This report and its Russian duplicate, `report_ru_v3.md`

No data has been pushed to GitHub — pending review and explicit approval, per the project's standing instruction.
