# Progress — Canal PROYECTOS (New Tashkent + equivalentes), Pass 3

Started: 2026-09-02 | Completed: 2026-09-03

## Objetivo
15-20+ actores canal Proyectos. Prioridad máxima: Facade Installer (6-8 min, tipología
nueva, 0 en pasadas 1-2). Segunda prioridad: Contractor de ejecución real (4-5 min,
pasadas anteriores casi solo encontraron bureaus de arquitectura del masterplan).

## Baseline (pass 1+2, en data_v2/master_dataset_v2.json, channel="Projects - New Tashkent")
15 actores previos — NO reincluidos en el dataset nuevo (viven en data_v2):
Architecture Studio x10 (Cross Works, Buro Happold, Gillespies, BuroAtlas, Meinhardt
Group, Zaha Hadid Architects, Dome+Partners, Kentsel Strateji, GAD Architecture, Benoy),
Developer x2 (AL-BINA, Sharq Bahori), Hybrid Contractor+Developer x2 (UET Construction,
BI Group), Interior Designer x1 (Studia 54). Facade Installer: 0. Contractor puro: 0.

## RESULTADO FINAL — pass 3 (data_v3/proyectos_dataset_new.json)

**15 actores NUEVOS** añadidos este pase:

| Typology | Count | Actores |
|---|---|---|
| Facade Installer | 8 | VENFASAD, UZFASAD, NASHFASAD, Fasad.uz, Fasad Gallery Company, ALFAS Tashkent, ALSTAR, MBS |
| Hybrid (Contractor+Facade / Developer+Contractor) | 2 | TAN Group (TAN Steel Builders), Murad Buildings (MBC) |
| Contractor | 2 | CAMC/China IPPR International Engineering, Pro Building |
| Developer | 1 | Markaz Group |
| Architecture Studio (bonus) | 2 | ANK Memor LLC, Archiquad Group |

- Facade Installer objetivo (6-8): **CUMPLIDO** — 8 puros + 1 Hybrid (TAN Group) = 9 con
  capacidad de fachada. Gap de pasadas 1-2 (0 instaladores) cerrado con margen.
- Contractor objetivo (4-5): **CUMPLIDO EN EL MÍNIMO** — 2 puros + 2 Hybrid (TAN Group,
  Murad Buildings) = 4 actores con capacidad de contratista real de ejecución.
- Developer: 1 nuevo (Markaz Group) + Murad Buildings (Hybrid) = 2 efectivos.
- Architecture Studio: típología ya cubierta (10 en baseline); 2 hallazgos bonus de alto
  valor (ANK Memor diseñó la SEDE de la propia Dirección de New Tashkent; Archiquad es
  bureau local establecido, ponente en Zak World of Façades Uzbekistan).
- Interior Designer (Proyectos): **0 hallazgos nuevos**. Búsquedas dirigidas (Crystal
  Avenue, Ostona/BI Group, Sharq Bahori) no revelaron estudio de diseño de interior
  acreditado para show-flats/pisos piloto — los proyectos de New Tashkent están en su
  mayoría en fase de preventa/obra y aún no han inaugurado modelos de apartamento
  públicos. Se mantiene Studia 54 (baseline pass 1/2) como único actor de esta tipología.
  Todas las demás búsquedas devolvieron solo estudios boutique de cliente particular
  (excluidos explícitamente por el brief).

## Proyectos de New Tashkent documentados (data_v3/new_tashkent_projects_v3.json)

**20 desarrollos/fases** documentados con evidencia (4 re-verificados de pasadas
anteriores con datos ampliados, 16 nuevos):
- Re-verificados/ampliados: Crystal Avenue, Ostona, Sharq Bahori (escala muy ampliada:
  1,8M m², 260 bloques, 13.879 viviendas), Centro Alisher Navoi.
- Nuevos — mega-proyectos institucionales (catálogo oficial newtashkent.uz): Tashkent
  Arena (estadio 55.000 plazas, 65% obra), Biblioteca Nacional (90% obra), Campus
  Universidad Nizami, Complejo Ministerio de Energía, Fuente musical, Edificio
  Administrativo de la Dirección (sede, ENTREGADO dic 2024), puente/nudo de transporte
  sobre el Chirchik.
- Nuevos — distritos residenciales en fase concepto (masterplan oficial, sin developer
  privado asignado aún): Marjon (41 ha), Xonayvon (4,6 ha), Tashkent Metropolis (22 ha),
  Hashamat (8,9 ha), Complejo Administrativo Lote 71.
- Nuevos — con developer confirmado: Sarbon (Murad Buildings), Markaz Yangi Toshkent
  (Markaz Group), Toshkent Plaza (TAN Group GC — OJO: ubicación dentro de New Tashkent
  NO confirmada, posible Tashkent ciudad), Yangi Saroy (developer "Gold Step" solo por
  anuncio de vendedor, NO confirmado oficialmente — tratar con cautela).

## Herramientas usadas
- firecrawl-search: ~25 búsquedas (RU/UZ/EN) cubriendo las 5 tipologías + proyectos.
- firecrawl-scrape: ~35 páginas (sitios corporativos, directorios Golden Pages,
  newtashkent.uz catálogo oficial de proyectos, prensa spot.uz/gazeta.uz/sputnik,
  share-architects awards, president.uz).
- firecrawl-map: 1 (newtashkent.uz, 97 URLs enumeradas — permitió descubrir el catálogo
  de proyectos con parámetro ?type=architecture/investment y las fichas individuales).
- No fue necesario fallback a WebSearch/WebFetch/playwright-cli — Firecrawl respondió
  correctamente durante todo el pase.

## Notas metodológicas / caveats a tener en cuenta en fases posteriores
- CAMC/China IPPR: vínculo con New Tashkent confirmado solo vía testimonio oficial en
  newtashkent.uz/our-partners; proyecto concreto dentro de New Tashkent NO identificado
  con fuente independiente. Verificar antes de outreach dirigido.
- TAN Group: proyecto confirmado (Toshkent Plaza) probablemente en Tashkent ciudad, no
  necesariamente dentro del perímetro administrativo de New Tashkent — incluido bajo el
  criterio de "desarrollo de escala equivalente" del brief.
- Yangi Saroy: única fuente es un anuncio comercial abierto citado por la propia
  Dirección de New Tashkent, que explícitamente señala que NO hay pasaporte oficial de
  proyecto — dato de menor fiabilidad que el resto.
- ALSTAR y MBS: contacto telefónico enmascarado por Golden Pages (requiere desbloqueo de
  pago); no se pudo verificar sitio propio de ALSTAR (alyukabond.uz devolvió error fatal
  de WordPress).

## Estado: TIPOLOGÍAS CERRADAS
- [x] Facade Installer — 8 nuevos (objetivo 6-8 cumplido)
- [x] Contractor — 4 nuevos efectivos incl. Hybrid (objetivo 4-5 cumplido en el mínimo)
- [x] Developer — 2 nuevos efectivos incl. Hybrid
- [x] Architecture Studio — 2 nuevos bonus (tipología ya cubierta en baseline)
- [x] Interior Designer (Proyectos) — 0 nuevos, gap documentado y justificado
- [x] Proyectos New Tashkent en sí — 20 desarrollos documentados

Archivos finales validados como JSON válido:
- data_v3/proyectos_dataset_new.json (15 registros)
- data_v3/new_tashkent_projects_v3.json (20 registros)
