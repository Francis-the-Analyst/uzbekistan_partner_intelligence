# Uzbekistan Retail & Projects — Market Entry Report v2.0

**Prepared for:** Cosentino Export Sales — Dekton · Silestone · Sensa
**Coverage:** Tashkent, Namangan, Samarkand, Andijan (retail) + New Tashkent / Yangi Toshkent (projects)
**Dataset:** 145 records (130 retail accounts + 15 New Tashkent project actors), up from 105 in the previous pass
**Companion files:** `index_v2/index.html` (interactive dashboard), `data_v2/master_dataset_v2.csv` / `.json` (full dataset)

---

## Why this pass exists

The previous pass (105 records) was skewed in two measurable ways:

| Gap | v1/v2 figure | Cause |
|---|---|---|
| Kitchen studios | 12/105 (11%), only 2 in Tashkent | Prompt explicitly targeted "medium-to-high end", and many kitchen studios operate mainly via Instagram/Telegram without a scrapeable website |
| Price-tier coverage | 0 "Low" records, 40 "Not determinable" | Prompt explicitly excluded "low-end distributors" |

This pass corrected both by (a) running dedicated economy/mass-market queries per city and per typology, and (b) removing the low-end exclusion entirely. It also reinforced the weakest part of the New Tashkent block: contractors actually executing construction, as opposed to masterplan-stage architecture consultancies.

**Tooling note:** Firecrawl had only 249/1,000 monthly credits left when this pass started. Per the contingency plan built into the v2.0 prompt, the pass ran primarily on WebSearch (discovery) + WebFetch (extraction), with Firecrawl reserved for one page that blocked WebFetch (wallmann.uz, HTTP 403) and for a scraper-independent scan of GoldenPages/top.uz business directories.

---

## 1. Segmentation

Retail accounts group into seven value-proposition segments (not by self-declared name):

| Segment | Accounts | Typical price tier | Typical client | Competing materials seen |
|---|---|---|---|---|
| A. Premium Materials & Bath Showrooms | 18 | High | Designers, contractors, high-net-worth homeowners | **Neolith** (Premium Concept), **Laminam** (KS Lux), **Interstone** (Liberty, Samarkand), Grohe, Porcelanosa, Laufen |
| B. Premium Kitchen & Custom Furniture Studios | 9 | High | Upper-middle/premium homeowners | Egger, Kronospan, Blum, European hardware |
| C. Boutique Interior Design & Architecture Studios | 31 | Medium–High | Private clients, some commercial (HoReCa, retail, office) | Rarely disclosed; positioning-led, not brand-led |
| D. Contractors / EPC Firms | 14 | Medium | Developers, institutional clients | Not typically disclosed |
| E. Developers & Project Ecosystem | 24 | Medium–High | End buyers of residential/commercial units | Finish specs rarely public pre-sale |
| F. Value/Mid Kitchen & Custom Furniture Manufacturers | 33 | **Low–Medium** | Mass-market households, budget renovators | LDSP/LMDF/acrylic (laminate, not stone) |
| G. Budget/Turnkey Renovation & Interior Design | 1 | Low | Cost-sensitive renovation clients | Not disclosed |

Segment F (new this pass) is now the single largest segment by count — a direct, quantified correction of the previous under-representation. Recurring messages across segments: free measurement/3D design, fast turnaround (7–20 days for furniture, longer for full renovation), and — almost universally — an explicit installment/financing option (рассрочка), which matters for how Cosentino's own commercial terms should be framed locally.

---

## 2. Typology × price tier (by city)

| City | High | Medium | Low |
|---|---|---|---|
| Tashkent | 18 | 14 | 10 |
| Samarkand | 11 | 12 | 6 |
| Namangan | 7 | 17 | 8 |
| Andijan | 9 | 12 | 7 |

Namangan and Andijan skew Low/Medium more heavily than Tashkent and Samarkand — consistent with smaller local economies, but each city now has enough Low-tier volume to size a realistic "entry-level" motion, not just the premium-only motion the previous pass implied.

## Typology × physical exhibition (by city, retail only)

| Typology | Yes | No / Not determinable |
|---|---|---|
| Kitchen | 9 | 33 |
| Kitchen & Bath | 7 | 2 |
| Interior Designer | 2 | 13 |
| Architecture Studio | 0 | 11 |
| Contractor | 1 | 12 |
| Developer | 1 | 23 |
| Hybrid | 7 | 12 |

Reading this: **Kitchen & Bath** (materials/plumbing showrooms) is by far the strongest typology for confirmed physical exposure (78%) — these businesses exist specifically to display product, which is exactly Cosentino's use case. Pure **Kitchen** manufacturers confirm showrooms only 21% of the time this pass — the new records skew toward directory-sourced factories (address known, showroom unconfirmed) rather than the retail-facing studios found in the first search round. **Architecture Studio** and **Developer** are structurally weak on confirmed exhibition (design-only firms, or developments still under construction) — their value is prescription power, not display space.

---

## 3. Positioning map

Two axes, both 1–5: **X = positioning/price** of the account itself, **Y = fit** with the Dekton/Silestone/Sensa value proposition (how naturally their business already needs slab-format surfaces).

- **Priority 1 (engage now, high X + high Y):** 3 new accounts this pass — Premium Concept, Emerich, YU Mebel — all Tashkent, all with confirmed high-end positioning and a showroom already selling adjacent or directly competing surface products.
- **Develop (lower X, high Y — grow with them):** 9 accounts, mostly the new Medium/Low-tier Tashkent kitchen studios (SMebel, Best Mebel, Vashamebel, Wallmann, Lamebel, Kale Gallery, Perfect Mebel) — good category fit today, priced below premium; the "grow with volume" play, not the "engage as premium partner today" play.
- **Low priority:** the bulk of the new directory-sourced manufacturers (28) — real businesses, but with too little independently confirmed differentiation yet to prioritize outreach.

The full interactive map (with jittered points, per-account justification text, and city/typology/segment filters) is in `index_v2/index.html` → Retail → Positioning map tab.

---

## 4. New Tashkent — developers, architects, contractors

- **Developers by confirmed volume:** BI Group's **Ostona** district (10.5 ha phase 1, $200M, 3,162 apartments, construction launched 15 Nov 2025) is now the largest confirmed New Tashkent residential development by unit count, ahead of UET Construction's **Crystal Avenue** (212 units, business-class, Phase 2 sales already open). Sharq Bahori (2 phases, smart-home) is the Directorate's own showcase project but discloses no unit count.
- **Architecture concentration:** the District 1 masterplan itself is led by a 10-firm international consortium (Cross Works as lead, plus Buro Happold, Gillespies, BuroAtlas, Meinhardt Group, Zaha Hadid Architects, Dome+Partners, Kentsel Strateji, GAD Architecture, Benoy) — none based in Uzbekistan, none with a local showroom, and their role is masterplan/landmark design rather than repeatable residential unit specification.
- **Repeat contractors:** this remains the thinnest part of the dataset even after reinforcement. Beyond UET Construction (confirmed general contractor on Crystal Avenue, EPC certified, owns its own metal-structures plant), press coverage names FSK Region (Russian), Mosinzhproject (Russian, metro-line engineering — infrastructure, not building finishes) and CSCEC (Chinese) as active in Uzbekistan construction generally, but none are confirmed tied to a specific New Tashkent building project with enough evidence to add as full dataset records. **This looks like a genuine data-availability limit at this stage of the project** (construction only began in 2024, first occupancy not expected before 2027), not a search gap — worth re-checking again in 6–12 months as more contractors sign and announce.
- **Institutional progress signals:** the National Pedagogical University campus (finishing works underway) and the 55,000-seat FIFA U-20 stadium (65% complete) are the two most visibly advanced construction sites in the district — useful as evidence of real construction pace when making the case internally that New Tashkent is not just a masterplan on paper.

Full pipeline table (7 developments, bilingual, linked to actor records) is in `index_v2/index.html` → Projects → Projects pipeline tab.

---

## 5. Priority candidates (12)

Selected from a broader pool of confirmed-showroom, well-evidenced accounts, balancing typology, city, and channel. Retail candidates all have a confirmed physical showroom; the three New Tashkent picks are included for prescription/volume potential even where a public showroom isn't open yet.

| # | Account | City | Typology | Price | Contact |
|---|---|---|---|---|---|
| 1 | **Premium Concept** | Tashkent | Kitchen & Bath (materials showroom) | High | +998 71 256 29 03 |
| 2 | **Lux Home Mebel** | Tashkent | Kitchen | High | +998 99 805 58 58 |
| 3 | **Insydrium** | Tashkent | Hybrid (interior design + architecture) | High | +998 55 588 85 88 |
| 4 | **KS Lux** | Tashkent | Hybrid (tile/materials showroom) | High | +998 78 113 88 96 |
| 5 | **YU Mebel** | Tashkent | Kitchen | High | +998 98 333-66-63 |
| 6 | **FullHouse** | Tashkent | Kitchen (shopping-center showroom) | Medium | +998 97 716-79-09 |
| 7 | **Golden House Development** (INFINITY Club House) | Tashkent | Developer | High | +998 78 150-11-11 |
| 8 | **Kale Gallery Samarkand** | Samarkand | Kitchen & Bath | High | +998 97 390 66 66 |
| 9 | **Liberty / TEAM LIBERTY** | Samarkand | Hybrid | High | +998 91 543 77 33 |
| 10 | **UET Construction** | Tashkent (New Tashkent) | Contractor/Developer | Medium | +998 77 443 00 33 |
| 11 | **AL-BINA Development** | Tashkent (New Tashkent) | Developer (sales partner) | High | +998 71 205 10 68 |
| 12 | **BI Group** | Tashkent (New Tashkent) | Developer | Medium | via bi.group |

**Why Premium Concept tops the list:** it is the one account in the entire dataset that already retails **Neolith** — Cosentino's direct sintered-stone competitor — at explicit "#1 premium in Uzbekistan" positioning, alongside Porcelanosa, Grohe and Laufen. It is simultaneously the strongest competitive-displacement opportunity and the clearest proof that a premium slab-surface retail motion is commercially viable in Tashkent today.

**Close runners-up** (confirmed showroom, priority-flagged, not in the top 12 only for space): Premium Stroy, INTERSTONE, Imperial Granite, Natural Stone Service (marble.uz), Kale Gallery (Tashkent branch), SMebel — all worth a second-wave outreach.

---

## 6. Entry angle by typology

- **Kitchen / Kitchen & Bath:** free countertop-sample display in exchange for surface-material exclusivity in-showroom; introductory volume discount on first order. For the new Low/Medium-tier factories (segment F), position as a longer-horizon volume play — introduce a differentiated premium line before pushing exclusivity.
- **Interior Designer / Architecture Studio:** referral commission on specified projects; pocket sample kit plus digital catalog access for renders/specification.
- **Contractor:** volume pricing for site-wide procurement, project-linked payment terms.
- **Developer:** framework supply agreement for show-flats/model units in New Tashkent (or any other active project), with an option to scale to full-phase supply if commercially well received. For BI Group specifically (no showroom yet), the right move is to register interest now and revisit once Ostona's first sales office opens.
- **Materials/Bath showrooms already carrying a competing surface brand (Premium Concept, KS Lux, Liberty):** the strongest angle is technical, not commercial — a comparative technical presentation (durability, UV/heat resistance, hygiene certification) positioned as a category upgrade, not a price fight, since these accounts are not price-sensitive.

---

## Methodology notes

- Discovery: WebSearch (primary) + WebFetch (extraction); Firecrawl used only for wallmann.uz (WebFetch blocked with HTTP 403) and is not otherwise a dependency of this dataset.
- Price tier (`price_range`) is a strict Low/Medium/High field. For the 105 pre-existing records, ambiguous prior values ("Medium-High (mixed signals)", "Not determinable") were resolved using the best available signal — usually the account's own segment positioning — and flagged as an inferred default in the `price_signal` field wherever no direct price evidence existed. This is a documented, reviewable judgment call, not a guess presented as fact.
- Two accounts (KS Lux, NeoStyle) were independently rediscovered this pass under different search angles than the original research; both were merged into their existing records rather than duplicated, with the new evidence added to `price_signal` / `raw_notes`.
- Directory-sourced manufacturer records (GoldenPages, top.uz) default to `physical_exhibition: No determinable` rather than "Yes" or "No" — a factory address is not evidence of a consumer-facing showroom, and none should be assumed without direct confirmation.
