# Cosentino — Uzbekistan Retail & Projects Channel Entry Report
### Tashkent, Namangan, Samarkand, Andijan + New Tashkent Project Channel

---

## 1. Executive Summary

We identified **105 distinct businesses/actors** across Uzbekistan's four most populous cities plus the New Tashkent (Yangi Toshkent) mega-project, spanning seven typologies: kitchen studios, kitchen & bath studios, interior design studios, architecture studios, contractors/general construction companies, real estate developers, and premium material showrooms.

Key findings:
- **Physical exhibition space is confirmed for only 18 of 105 actors (17%)** — but this understates reality: 82 records are "not determinable" mainly because their websites blocked automated access (HTTP 403) or their only presence is a partially-scrapable Instagram/Telegram profile, not because exhibition space doesn't exist.
- **Tashkent dominates** (37 of 105 actors, including the 15 New Tashkent project-channel actors), consistent with its population and status as the capital and priority market.
- **Developers (24) and Architecture Studios (21) are the largest single typologies**, followed by the umbrella "Hybrid" category (21) — a sign that Uzbek market actors rarely specialize narrowly; most combine design + build, or design + supply.
- **The New Tashkent project channel is real and active today**, not speculative: the Directorate under the Cabinet of Ministers, international masterplanner Cross Works Ltd, and a consortium including Buro Happold, Gillespies, Meinhardt Group and Zaha Hadid Architects are already engaged, and at least three developers (AL-BINA, BI Group, Sharq Bahori) are actively selling units.
- **The closest existing competitor infrastructure is INTERSTONE**, a Tashkent-based multi-brand engineered-quartz/acrylic-stone showroom with its own dealer network (including Liberty in Samarkand) — both the most direct threat and the most logical first conversation.
- We recommend **12 priority candidates** for sample placement / specification agreements (detailed in Section 8), weighted toward Tashkent and Samarkand, where confirmed physical exhibition space is strongest.

---

## 2. Methodology & Coverage

Research was conducted via parallel search-and-scrape agents (one per city, plus one dedicated to the New Tashkent project channel), searching in **Russian, Uzbek, and English**, across websites, Instagram, Facebook, and Telegram. Uzbek-language searches for premium/boutique businesses returned mostly training courses rather than companies, confirming Russian and English as the dominant business languages for this segment, consistent with the original Baku (Azerbaijan) methodology this project was adapted from.

**Data-quality caveat:** several sources (blackwood.uz, studio-mint.pro, luxhouse.uz, azengroup.uz and others) blocked automated scraping (HTTP 403) or sit behind social-media login walls. Where this occurred, fields are marked "Not determinable" rather than guessed. This means the **18-of-105 confirmed-showroom figure is a floor, not a ceiling** — on-the-ground verification (a phone call, a local scout, or manual site visits) will very likely raise this number, especially in Namangan and Andijan where local business directories (Yandex Maps, Yellow Pages Uzbekistan, Golden Pages) often list only phone numbers without site-quality evidence.

Results per city/channel: Tashkent 23 (retail) + 15 (New Tashkent projects) = 38; Namangan 24; Samarkand 23; Andijan 20. Total: **105 records**, structured in a single dataset (`data/master_dataset.json` / `.csv`) ready for dashboard use (see Section 9).

---

## 3. Market Overview

| City | Population | Retail actors found | Notes |
|---|---|---|---|
| Tashkent | ~3.1M | 23 (+15 New Tashkent project-channel) | Capital, priority market, strongest showroom density |
| Namangan | ~714K | 24 | Strong Architecture/Interior Design density; weak in dedicated material showrooms |
| Samarkand | ~596K | 23 | Best-balanced typology mix; strongest secondary-city showroom evidence |
| Andijan | ~492K | 20 | Developer-heavy (11/20); almost no confirmed interior design or architecture studios |

**By typology (all 105 records):**

| Typology | Count |
|---|---|
| Developer | 24 |
| Hybrid (combined services) | 21 |
| Architecture Studio | 21 |
| Interior Designer | 14 |
| Contractor | 13 |
| Kitchen | 6 |
| Kitchen & Bath | 6 |

**By channel:** Retail = 90 · Projects (New Tashkent) = 15

---

## 4. Physical Exhibition — Cross-Tab (Typology × Exhibition)

| Typology | Confirmed Yes | Confirmed No | Not determinable | Total |
|---|---|---|---|---|
| Kitchen | 2 | 0 | 4 | 6 |
| Kitchen & Bath | 3 | 0 | 3 | 6 |
| Interior Designer | 2 | 0 | 12 | 14 |
| Architecture Studio | 0 | 3 | 18 | 21 |
| Contractor | 1 | 1 | 11 | 13 |
| Developer | 2 | 0 | 22 | 24 |
| Hybrid | 8 | 1 | 12 | 21 |
| **Total** | **18** | **5** | **82** | **105** |

**Reading this table:** Materials/kitchen-adjacent "Hybrid" businesses (mostly stone/quartz/porcelain showrooms) have by far the highest confirmed-exhibition rate (8/21, 38%) — this is the segment structurally built around a physical showroom, and where Cosentino's proposition is most self-evident to the business owner. **Architecture Studios confirm zero physical exhibition space** — expected, since architects sell specification/design services, not walk-in retail; their value to Cosentino is prescriptive influence over large projects, not shelf space. Developers show only 2/24 confirmed, but this is an artifact of scraping limits — developer sales offices with show-flats are extremely common in this market and almost certainly under-counted (see Section 7).

**By city (business count per typology):**

| City | Kitchen | Kitchen&Bath | Interior Designer | Architecture | Contractor | Developer | Hybrid |
|---|---|---|---|---|---|---|---|
| Tashkent (retail) | 1 | 1 | 6 | 2 | 3 | 6 | 8 |
| Tashkent (New Tashkent projects) | 0 | 0 | 1 | 10 | 0 | 3 | 1 |
| Namangan | 3 | 2 | 5 | 5 | 5 | 2 | 2 |
| Samarkand | 0 | 3 | 3 | 3 | 1 | 5 | 8 |
| Andijan | 2 | 0 | 0 | 1 | 4 | 11 | 2 |

---

## 5. Competitive Segmentation (by real value proposition, not by name)

### Segment A — Premium Materials & Bath Showrooms (n=15)
**Who:** Multi-brand quartz/acrylic-stone showrooms (INTERSTONE, Liberty), natural-stone fabricators (Imperial Granite, Natural Stone Service, Prime Ceramics), and bathroom/tile distributors (Kale Gallery, Adavit Santehnika, ORSI Premium).
**Price range:** Mostly High or Medium-High — the most consistently premium-positioned segment alongside Developers.
**Client type:** End consumers renovating high-end apartments/villas, plus B2B fabricators buying slabs wholesale (e.g., Liberty buys quartz/acrylic from Interstone to fabricate its own kitchen countertops).
**Materials/competitors already in market:** Chinese engineered quartz (Avant Quartz, Noblle Quartz), Korean/Chinese acrylic stone (GRANDEX, NEOMARM), Italian large-format porcelain (Laminam — a direct Dekton competitor, sold via KS Lux), Spanish porcelain tile (Geolam), Turkish sanitaryware/tile (Kale), and Uzbek-quarried natural stone (granite, marble, onyx, travertine, agate).
**Repeated messages:** "high-tech solution," "expert center," "exclusive distributor," mixed with "affordable price" — a market still calibrating between luxury positioning and price competition.
**Strategic note:** INTERSTONE is the closest existing analogue to a Cosentino-style multi-brand quartz showroom, complete with a dealer network reaching Samarkand — it is simultaneously Cosentino's most direct competitor and its most logical first conversation (either as a displacement target or a distribution partner).

### Segment B — Premium Kitchen & Custom Furniture Studios (n=6)
**Who:** Custom furniture factories that sell kitchens as one line among wardrobes, bedrooms, and hallway furniture (Lux Home Mebel, STEP, Andijon Mebel).
**Price range:** Mixed — Lux Home Mebel is explicit with 3-tier pricing (Economy 8-15M UZS / Standard 15-30M UZS / Premium 30M+ UZS); others undetermined.
**Materials/competitors:** European component brands (EGGER, Kronospan boards; Blum, Hettich, DTC hardware) signal an existing import mindset that could extend naturally to countertop materials.
**Repeated messages:** "years of experience + completed-project counts," "warranty," "favorable prices."
**Strategic note:** Unlike Baku, Uzbekistan has almost no dedicated "kitchen studio" concept — kitchens are typically one product line within larger furniture factories. This is a structural market gap: Cosentino has no obvious specialist-kitchen-studio channel to plug into and must instead work through furniture factories or interior designers.

### Segment C — Boutique Interior Design & Architecture Studios (n=42, largest segment)
**Who:** The market's most fragmented segment — dozens of small, owner-operated studios marketing mainly via Instagram (Studio Mint, AI Studio, homed:t, Nova Casa, and dozens of city-level equivalents), plus a distinct high-value sub-pocket: the international masterplanning consortium for New Tashkent (Cross Works, Buro Happold, Gillespies, Zaha Hadid Architects, GAD Architecture, Benoy, and others).
**Price range:** Nominally High (luxury-class language is common) but repeated "savings vs. market" and "optimal price" messaging suggests real client base skews mid-market despite premium branding.
**Physical exhibition:** Near-zero (2/14 Interior Designers, 0/21 Architecture Studios confirmed) — these are design-service, not retail, businesses.
**Repeated messages:** "turnkey," "full-cycle from concept to finishing," project-count credibility claims (50-500+ projects), "up to 20% savings vs market."
**Strategic note:** This segment cannot be won with in-showroom sample placement — its value to Cosentino is specification influence. The New Tashkent masterplanning sub-segment is uniquely valuable: firms like Cross Works and Buro Happold have no local showroom need whatsoever, but hold prescriptive power over material choices across an entire 20,000+ hectare district.

### Segment D — Contractors / EPC Firms (n=14)
**Who:** Turnkey renovation and general construction companies (Premium Stroy, Elite Remont, Azen Group, and city-level equivalents in Namangan/Andijan).
**Price range:** Company names frequently signal "Premium," "Elite," "Elit" aspirationally, without hard evidence of premium execution quality.
**Physical exhibition:** Almost none confirmed (1/13) — these are project-execution businesses, not showroom businesses.
**Repeated messages:** "turnkey," "guarantee of transparency and quality," "European/Russian-trained management."
**Strategic note:** Best approached with a project-volume pricing model and a portable sample kit rather than a fixed showroom placement — contractors specify materials per project, not per storefront.

### Segment E — Developers & Project Ecosystem (n=28, 2nd-largest segment)
**Who:** Residential/mixed-use developers at both city scale (NRG, GABUS, Zaytun Group — Tashkent; MJ Developers, TXT Group — Namangan; SXF, Elite Building, Ulug Siymo — Samarkand; Sanderson City, Shodlik Grand — Andijan) and the New Tashkent project scale (AL-BINA, BI Group, Sharq Bahori, UET Construction).
**Price range:** The most consistently premium-branded segment (15/28 explicitly "High") — nearly every developer studied markets itself as "elite," "premium," or "business-class" regardless of city tier, suggesting marketing-led rather than execution-led differentiation across much of the market.
**Materials/competitors:** Rarely disclosed publicly, but Sharq Bahori (New Tashkent) explicitly lists laminate parquet, ceramic finishes, and German-standard joinery — a useful signal of the finishing-package quality bar developers are already setting.
**Repeated messages:** "club residence," "exclusive," "the future lives here," "smart luxury," unit-completion and delivered-square-meter counts as credibility markers.
**Strategic note:** This is the highest-leverage channel structurally — one signed specification agreement with a developer covers dozens to hundreds of units at once. TXT Group is a standout: it appears as a developer in **four separate cities** (Tashkent, Namangan, Samarkand, Andijan), making it a single point of contact with truly national reach.

---

## 6. Positioning Map — Segment × Price Range × Service Scope

| Segment | Low | Medium (inferred) | Medium-High (mixed) | High | Not determinable |
|---|---|---|---|---|---|
| A. Premium Materials & Bath Showrooms | 0 | 0 | 3 | 6 | 6 |
| B. Premium Kitchen & Custom Furniture | 0 | 0 | 1 | 1 | 4 |
| C. Boutique Interior Design & Architecture | 0 | 9 | 0 | 8 | 25 |
| D. Contractors / EPC Firms | 0 | 6 | 0 | 4 | 4 |
| E. Developers & Project Ecosystem | 0 | 11 | 1 | 15 | 1 |

**Service scope distribution (all 105):** Design+Build+Develop 26 · Design only 23 · Design+Build 20 · Design+Install+Supply 19 · Not determinable 14 · Design+Install 1 · Develop 2

**Reading the map:** No business in the dataset positions itself as explicitly "Low" price — the medium-to-high-end filter applied during search worked as intended. Segment A (Materials Showrooms) and Segment E (Developers) cluster at the top-right of the map (High price, broad service scope: Design+Install+Supply or Design+Build+Develop) — these are the two segments where Cosentino's proposition (premium material, supplied and installed/specified at scale) fits most naturally. Segment C (Design/Architecture) clusters at "Design only" or "Design+Build" with more price variance — a segment to influence via specification, not direct sale.

---

## 7. New Tashkent (Yangi Toshkent) Project Channel — Deep Dive

New Tashkent is a **~20,000–25,000 hectare planned district** east of Tashkent, targeting up to **2.5 million residents** on a horizon to 2045. It is led by the **New Tashkent Directorate**, under Uzbekistan's Cabinet of Ministers (Director: Davronjon Adilov). This is not a speculative future opportunity — it is an active, funded program with named actors today:

- **Masterplanner:** Cross Works Ltd (Hakan Ceyhan Agça) — District 1 Detailed Masterplan officially approved June 2024.
- **International consortium:** Buro Happold (infrastructure/sustainability strategy), Gillespies (420-hectare Central Park and landscape planning), BuroAtlas, KPMG Uzbekistan (advisory).
- **Signature architecture:** Meinhardt Group (~$1B agreement for Phase 1 masterplan design, with a joint Uzbekistan-Singapore design/engineering center); Zaha Hadid Architects (23,000–29,000 sqm cultural quarter anchor, including the Navoi State Museum of Literature); Dome+Partners, Kentsel Strateji, GAD Architecture, Benoy also engaged as named partners ("Hamkor") on the project's own partner page.
- **Active developers selling units today:** AL-BINA Development (Crystal Avenue — "the main avenue of the new capital," positioned as "smart luxury," with a strategic partnership with IMAN Holding for flexible payment plans); BI Group (Astana District — first 10-hectare phase, ~$200M project value); Sharq Bahori (a "15-minute city" concept, 100m from a planned metro station, explicit finishing-materials disclosure).
- **Contractor/co-developer:** UET Construction — shares the Crystal Avenue project office with AL-BINA and formally entered real estate development via this flagship project (project presentation held on-site at the New Tashkent Directorate, 29 Nov 2025).
- **Interior design:** Studia 54 (an international bureau with a Moscow/Dubai network) has been linked to interior work for a premium residential complex within New Tashkent, though its dedicated portfolio page could not be verified (404 error).

**Why this channel matters for Cosentino:** New Tashkent concentrates, in a single administrative structure, the masterplanner, the landscape architect, the flagship developer, and the flagship contractor — all reachable through one project office (Crystal Avenue) and one government Directorate. A single successful specification (e.g., kitchen/bath surfaces across Crystal Avenue's units, or public-realm cladding specified by Cross Works/Gillespies) would function as Cosentino's flagship reference case for the entire Uzbekistan market, well beyond New Tashkent itself.

---

## 8. Priority Candidates & Entry Angle Recommendations

The following 12 candidates are recommended first-contact targets, selected for **confirmed physical exhibition/sales-office presence** and fit within the medium-to-high-end niche. They are weighted toward Tashkent (8) and Samarkand (2), reflecting where evidence of exhibition space is strongest; two are anchored in the New Tashkent project channel.

| # | Business | City | Segment | Exhibition evidence | Recommended entry angle |
|---|---|---|---|---|---|
| 1 | **INTERSTONE** | Tashkent | A — Materials Showroom | Named showroom, published hours, quartz/acrylic fabrication | Most direct competitor infrastructure in-market. Approach as a **distribution partner** first: propose Cosentino as their premium tier above existing Chinese/Korean lines (Avant/Noblle Quartz, GRANDEX/NEOMARM), leveraging their existing dealer network (incl. Liberty in Samarkand). Fallback: aggressive intro pricing to win their end-customer base directly. |
| 2 | **Imperial Granite** | Tashkent Region (Yangiyo'l) | A — Materials Showroom | Production/showroom facility, 85 staff, 350+ projects, 20+ yrs | Large-scale fabricator with real cutting capacity. Pitch **co-exhibition**: place Dekton/Silestone slabs alongside their onyx/agate range as a "next-generation surface" upsell for their highest-spend clients, with volume-based intro pricing given their production scale. |
| 3 | **Natural Stone Service (marble.uz)** | Tashkent | A — Materials Showroom | Named showroom address, published contact | Free display slabs targeting their "affordable meets exclusive" messaging — position Cosentino as the price-stable entry point into engineered luxury surfaces vs. natural stone's cost variance. |
| 4 | **KS Lux** | Tashkent | A — Materials Showroom | Physical retail store, carries premium porcelain | Already sells **Laminam** (Dekton's direct competitor). Direct displacement/complement pitch: introduce Dekton as a technically superior large-format alternative, with co-marketing and aggressive intro pricing to a primed customer base. |
| 5 | **Kale Gallery Samarkand** | Samarkand | A — Materials Showroom | Named showroom, official Turkish distributor, active Telegram (1,090+ photos) | Category-expansion, not competitive: add a Cosentino countertop/surface corner within their bathroom-focused showroom. Leverage their active Telegram channel for launch content. |
| 6 | **Liberty (TEAM LIBERTY)** | Samarkand | A — Materials Showroom | Named furniture + stone showroom, existing INTERSTONE dealer | Conversion play: Liberty already fabricates countertops using Interstone's quartz for its kitchen clients. Offer to become their **premium upsell tier** above their current "affordable prices" line, with fabrication training given they already own cutting infrastructure. |
| 7 | **Lux Home Mebel** | Tashkent | B — Kitchen Studio | Named showroom, explicit 3-tier pricing incl. Premium | Component-upgrade pitch: offer Dekton/Silestone as an add-on premium countertop line within their existing "Premium" price bracket (30M+ UZS), with a free display slab + designer training, in exchange for countertop-material exclusivity. |
| 8 | **Insydrium** | Tashkent | C — Interior Design/Architecture | Named office, multi-city network (Moscow/Astana/Almaty/Bali/Istanbul), notable clients | Specification partnership, not showroom placement: pocket sample kit + digital catalog for renders, referral commission on specified volume — positioning Cosentino as their default spec surface across their **multi-country** project pipeline, not just Tashkent. |
| 9 | **Premium Stroy** | Tashkent | D — Contractor | Named office, daily walk-in hours | Volume/project pricing for countertop and cladding packages bundled into their turnkey renovation contracts; a small sample corner in their office reception (leveraging existing 09:00–22:00 walk-in hours). |
| 10 | **Golden House Development (INFINITY Club House)** | Tashkent | E — Developer | Dedicated sales office functioning as project showroom | Flagship reference project: full kitchen/bath surface specification across all 35 ultra-luxury units, at aggressive developer-grade project pricing, in exchange for exclusivity and co-branded marketing/case-study rights. |
| 11 | **AL-BINA Development** | Tashkent (New Tashkent — Crystal Avenue) | E — Developer (Projects channel) | Central + dedicated Crystal Avenue project sales office | Flagship New Tashkent specification: propose a full kitchen/bath surface package for Crystal Avenue's show-flat and sales office, positioned to become the default specified surface across all delivered units — first-project pricing to secure the reference win. |
| 12 | **UET Construction** | Tashkent (New Tashkent — Crystal Avenue) | E — Contractor/Co-developer (Projects channel) | Shares Crystal Avenue project office with AL-BINA | Approach jointly with AL-BINA for maximum leverage over the same project: position Cosentino's technical/fabrication support (specs, installation training) as part of a materials co-development partnership. |

---

## 9. Dataset for Dashboard Development

All 105 records, enriched with `segment`, `price_range`, and `priority_candidate` flags, are saved in two formats ready for dashboard ingestion:

- `data/master_dataset.json` — full nested structure (arrays preserved for `key_messages`)
- `data/master_dataset.csv` — flat table (UTF-8 with BOM, Excel-compatible)

**Schema (columns/fields):** `priority_candidate, name, city, typology, typology_detail, segment, channel, project_role, physical_exhibition, exhibition_evidence, price_range, price_signal, service_scope, email, phone, address, main_channel, source_language, source_url, materials_brands_mentioned, key_messages, raw_notes`

This structure supports the filters requested for the future interactive dashboard: **city, typology, channel (retail/projects), physical exhibition, price range, and priority**, plus a full record view per business. Individual per-city raw files (`data/tashkent.json`, `namangan.json`, `samarkand.json`, `andijan.json`, `new_tashkent_projects.json`) are retained for traceability back to original source URLs.

---

## 10. Data Quality Notes

- Physical-exhibition confirmation is a **floor, not a ceiling** — 82/105 "Not determinable" results are largely a function of blocked scraping (HTTP 403) and social-media login walls, not confirmed absence of showroom space. Manual verification (phone calls, local scouts) is recommended before final territory planning, especially for Namangan and Andijan.
- One record (Imperial Granite, Tashkent Region) sits in Yangiyo'l district, technically outside Tashkent city proper but within its immediate metro area — retained given its scale and relevance.
- All research agents encountered a TLS certificate interception issue in this environment, consistent with a corporate security proxy (Cisco Umbrella referenced in one agent's diagnostics) — this affected tooling, not data validity, and was worked around per-agent (system CA trust store or WebSearch/WebFetch fallback).
