# Progress — Retail Channel, Andijan (Pass 3)

Started: 2026-09-02
Closed: 2026-09-03

## Objective
15-20+ actores retail en Andijan repartidos entre Kitchen, Kitchen & Bath, Interior Designer (Retail), Showroom.
Prioridad: reforzar Kitchen (4-6 mínimo) y cubrir gama Low/económica (antes en 0).

## Status by typology — ALL CLOSED
- Kitchen: CLOSED — 8 registros
- Kitchen & Bath: CLOSED — 4 registros
- Interior Designer (Retail): CLOSED — 6 registros
- Showroom (stone/quartz/porcelain/marble/tile): CLOSED — 6 registros

**TOTAL: 24 registros** (objetivo 15-20 superado; objetivo Kitchen+Kitchen&Bath de 4-6 superado con 12)

## Price distribution (final)
- Low: 8 (KD, Oshxona-Yorboshi, Fayzli Mebel, Oshxona Mebellarii, Sarkor Yuksak Rivoj, Stroy-Centr 555, Mir Kafelya, Orient Kerama)
- Medium: 12 (Andijon Mebel, Dream Mebel, Yusufmebel/Oshxonamebel2026, Andijon Mebel Fabrikasi, Vinev, Firat, Aybil, IMAGINE, QAL'A, Arhitektura dizayn xizmati, Sobsan Paint, Gold Klinker)
- High: 3 (LuxCeramic, Jakhon Architects, Imperial Granite/Kozimjon Mramorlari)
- Not determinable: 1 (Navruz_Design)

Sesgo de gama económica de las 2 pasadas anteriores (CERO Low) corregido: 8/24 registros (33%) en Low.

## Tool notes
- firecrawl-search / firecrawl-scrape usados como herramienta principal en todo momento; no hubo agotamiento de créditos ni caídas, por lo que no fue necesario el fallback a WebSearch/WebFetch/playwright-cli.
- Instagram no es scrapeable directamente vía firecrawl-scrape ("we do not support this site"); se resolvió extrayendo teléfono/dirección/price signal desde los snippets/highlights de firecrawl-search (campo description), que en varios casos ya incluían el teléfono completo en el bio.
- Fuente más valiosa descubierta: RemKarta.ru (directorio local de Andijan, andijan.remkarta.ru) — categorías "Мебель для кухни", "Магазины сантехники", "Керамическая плитка" y "Студии дизайна интерьера" dieron negocios locales reales con dirección, horario y nº de reseñas verificables. Recomendado como fuente prioritaria en futuras pasadas sobre otras ciudades medianas de Uzbekistán.
- Goldenpages.uz rubric "Мебель в Андижане - производство" (Id=3578) y rubric nacional de cocinas (Id=3744, sin resultados de Andijan en pág.1) también útiles para fabricantes de muebles registrados.
- ADVERTENCIA/aprendizaje: los listados de vendedores de Prom.uz bajo la URL regional ".../andizanskaya-oblast/" (ej. Akryl Oshxona Mebel, Bright Oshxona Mebel, Oshxona Mebel 813/292) resultaron ser vendedores con sede en TASHKENT que simplemente envían a la región de Andiján — descartados tras verificar la ficha de empresa ("Ташкент, Узбекистан"). No incluidos en el dataset final. Precaución para próximas pasadas: verificar siempre la ubicación real de la empresa en Prom.uz, no solo la categoría regional de la URL.
- Alania Stone (Instagram @alania_stone) descartado: confirmado como negocio de Osetia del Norte, Rusia, no de Uzbekistán — falso positivo de búsqueda por nombre genérico "камня" (piedra).
- top.uz mostró 0 resultados para Andiján en varias categorías (mármol/granito, cerámica, diseño interior/exterior) — cobertura muy débil de esta ciudad en ese directorio.

## Interior Designer (Retail) vs Proyectos — notas de clasificación
- Todos los 6 estudios incluidos (Aybil, Jakhon Architects, Navruz_Design, IMAGINE, QAL'A, Andijon Arxitektura va Dizayn Xizmatlari) muestran señales de atención a cliente particular/vivienda individual (marketing consumer-facing, "tus sueños", proyectos residenciales individuales) — ninguno mostró evidencia de trabajar mayoritariamente con developers a gran escala, por lo que no se excluyó ninguno como "posible Proyectos".
- luxhouse.uz/andizhan (bufete "Luxhouse") fue evaluado y EXCLUIDO de este archivo: es una landing page multi-ciudad (Tashkent/Andiján/Namangan/Samarcanda/Bujará/Fergana/Astaná/Almaty) de una empresa con sede real y única en Tashkent (ul. Navoi 9), sin dirección ni oficina propia confirmada en Andiján — mismo patrón que "Arhitektor.uz" ya señalado como caveat en la pasada anterior. Sigue confirmando el gap: Andiján carece de bufetes de arquitectura/interiorismo con sede física propia claramente verificable más allá de los 3 estudios listados en RemKarta.ru.
- Varios artesanos individuales listados en Ustabor.uz (marketplace de oficios: Джумашев Хуршид, Zafarov Zafar, Hidirov Akmaljon, etc.) ofrecen "Дизайн интерьера" como una de muchas habilidades (junto a fontanería, pladur, pintura) — son manitas/reformistas informales, no estudios de diseño dedicados; NO incluidos como registros individuales por no ajustarse bien a la definición de "estudio", pero confirman la existencia de una capa informal de diseño/reforma en el mercado (igual que se señaló en la pasada anterior sobre Andiján).

## Showroom — notas de clasificación
- Imperial Granite / Andijon Kozimjon Mramorlari: Golden Pages advierte explícitamente que no pudo refrescar los datos de contacto y que "posiblemente cerró" — INCLUIDO con advertencia de cautela clara en el registro (requiere verificación telefónica antes de cualquier outreach), pero es la única instalación de procesamiento de piedra natural confirmada físicamente en la ciudad de Andiján a través de las 3 pasadas.
- Orient Kerama: fabricante con sede y fábrica en Tashkent (Chilanzar), pero con línea telefónica regional dedicada a Andiján — incluido como lead de Showroom con physical_exhibition "Not determinable" y nota explícita de que el punto de venta físico local no está confirmado.

## Cierre
Las 4 tipologías están cerradas. `data_v3/retail_andijan.json` contiene 24 registros, JSON válido, ids únicos. No quedan tareas pendientes de esta tarea (canal Retail, ciudad de Andiján).
