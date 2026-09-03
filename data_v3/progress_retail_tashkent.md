# Progreso - Retail Tashkent (pasada v3)

Estado: **COMPLETADO** (búsqueda exhaustiva de canal Retail en Tashkent, 4 tipologías)

## Resumen de resultados

- **Total de actores nuevos identificados: 25** (todos guardados en `data_v3/retail_tashkent.json`, JSON válido verificado)
- Ninguno duplica actores ya presentes en `data_v2/master_dataset_v2.json` (se comprobó contra los 40 registros Tashkent/Retail existentes de las pasadas 1 y 2 antes de añadir cada uno)

### Reparto por tipología

| Tipología | Nº | Objetivo |
|---|---|---|
| Kitchen | 8 | — |
| Kitchen & Bath | 2 | — |
| **Kitchen + Kitchen & Bath (total)** | **10** | mínimo 6-8 ✅ superado |
| Interior Designer (Retail) | 4 | — |
| Showroom (materiales) | 10 | — |
| Hybrid (IL Home, showroom+diseño) | 1 | — |
| **TOTAL** | **25** | mínimo 20-25 ✅ cumplido |

### Reparto por franja de precio

| Precio | Nº |
|---|---|
| Low | 7 |
| Medium | 10 |
| High | 8 |

Cobertura equilibrada en las 3 franjas, incluyendo refuerzo explícito de gama económica (Comfort Mebel, New Mebel, Shaxriston Mebel Servis, Zabardast Mebel, Lider Mebel, Keramogranit Dunyosi, Keramogranituz.com).

## Tipologías cerradas

1. **Kitchen** ✅ — Refuerzo prioritario cumplido. 8 nuevos actores vía 2GIS (categoría "кухни на заказ", 5 páginas ~48 nombres únicos revisados), Golden Pages (directorio "Кухонные гарнитуры", Id=101419, distinto del usado en pasada 2), y búsquedas directas (service-eco.uz, mebelroom.uz). Incluye fábricas de gama económica (Comfort Mebel, New Mebel, Shaxriston Mebel Servis, Zabardast Mebel) y una de gama alta (Mirano - Premium Class).
2. **Kitchen & Bath** ✅ — 2 nuevos actores: Lider Mebel (cocina+baño con encimeras de cuarzo, Low) y Mir Santexniki (fontanería con línea de muebles de baño, Medium).
3. **Interior Designer (Retail)** ✅ — 4 nuevos actores vía artículo agregador domtut.uz "Top-10 diseño Tashkent" (Karavaev&Co Medium, Manakovs' High, SAYF High, Micasa High). Los ya conocidos del ranking (Мята/Studio Mint, Neostyle, ART Deco, Aistudio, Insydrium) se omitieron por duplicados.
4. **Showroom (materiales)** ✅ — 10 nuevos actores: cuarzo aglomerado local (KvarcS - competidor directo relevante), gres porcelánico (Corona Ceramic Tiles, Keramogranit Dunyosi, Keramogranituz.com), tiendas de marca importada premium (Ispaniya Kafellari, Porcelanosa oficial), piedra natural (GranLab, Art Prima Materia, Tiancheng Stone Group, Granite World). Vía Golden Pages (rubro "Керамогранит" Id=106462) y directorio top.uz ("Мрамор, гранит").

## Actores flaggeados para revisión de otro equipo (NO incluidos en este archivo)

- **AutoTechDraw** (estudio de diseño/arquitectura, Tashkent, ул. Ахмад-Югнакий 38, tel +998978300000): trabaja mayoritariamente con proyectos de gran escala (licencia EPC - Engineering Procurement Construction, "trabaja en todo Uzbekistán no solo en la capital"), aunque también hace diseño de apartamentos. **Posible Proyectos, no incluido aquí** — se recomienda que el equipo de Proyectos lo evalúe.
- **SAYF Architecture & Design Studio**: SÍ incluido en Retail (predominio residencial confirmado), pero se marca `canal_secundario = "Proyectos (menor)"` porque también trabaja oficinas/cafés/restaurantes.
- **Tiancheng Stone Group**: incluido en Showroom pero su modelo es claramente mayorista/B2B ("suministro de granito al por mayor"), con posible solapamiento con canal Proyectos — se recomienda revisión cruzada.

## Herramientas usadas

- `firecrawl search` (con `--scrape`) como herramienta principal para descubrimiento y extracción combinados — sin incidencias de créditos agotados, no fue necesario cambiar a WebSearch/WebFetch en ningún momento de esta pasada.
- `firecrawl scrape` directo sobre páginas de listado de 2GIS (`2gis.uz/tashkent/search/...`, funcionó correctamente pese a ser SPA — el HTML servido al bot de Firecrawl incluye el listado renderizado) para enumerar competidores de "кухни на заказ" (5 páginas, ~48 nombres únicos, luego cruzados con búsquedas individuales).
- Directorios de negocio (Golden Pages, top.uz) tratados como fuente estructurada para extraer nombre+dirección+teléfono de múltiples actores por página, reduciendo el número de llamadas de búsqueda individuales.
- Artículo agregador domtut.uz usado como fuente válida para 4 estudios de interiorismo con datos de contacto ya publicados (nombre, teléfono, dirección, email).
- Todos los teléfonos parcialmente enmascarados (formato `+998 XX XXX-XX-XX` con `XX` final) provienen directamente de Golden Pages, que oculta los últimos dígitos hasta hacer clic en "Mostrar teléfono"; se han dejado tal cual con la nota "(parcial, Golden Pages)" en el campo `phone`.

## Notas metodológicas / limitaciones

- No se exploraron Instagram/Telegram en profundidad porque Firecrawl no pudo renderizar la mayoría de perfiles (markdown vacío en resultados de búsqueda `--scrape`); en los casos donde el perfil de Instagram era el único resultado disponible (p. ej. algunos nombres de la lista 2GIS de cocinas) se optó por buscar el sitio web oficial en su lugar, y solo se usaron como fuente de descubrimiento del nombre, no como `source_url`.
- Prom.uz (marketplace tipo B2B) se descartó como fuente de actores individuales: la mayoría de vendedores son particulares/microvendedores sin showroom identificable ni dirección física, lo que no encaja con el schema (`physical_exhibition`, `address`). Se revisó pero no se extrajeron registros de ahí.
- OLX.uz se descartó por el mismo motivo (anuncios clasificados individuales sin identidad de negocio verificable), aunque confirma que existe un mercado informal muy amplio de cocinas de gama muy baja (anuncios desde 850.000-2.500.000 UZS por cocina completa) — señal cualitativa de que el extremo Low del mercado es aún más profundo de lo capturado aquí, pero no aporta actores identificables individualmente.
- `Keramogranituz.com` no tiene dirección física confirmada (parece operar principalmente online) — `physical_exhibition = "Not determinable"`.
- Varios teléfonos de Golden Pages están parcialmente enmascarados (últimos 2 dígitos ocultos tras "XX"); se han dejado así, marcados explícitamente en el campo `phone`.

## Qué falta / posibles próximos pasos (fuera de alcance de esta pasada)

- No se ha llegado a explorar exhaustivamente Yandex Maps con `firecrawl-map` para categorías adicionales (p. ej. "мебель для ванной", "мрамор" como búsqueda de mapa dedicada) — se cubrió Kitchen vía 2GIS scrape directo, pero Kitchen & Bath y Showroom se cubrieron principalmente vía directorios (Golden Pages, top.uz) y búsqueda web general, lo cual fue suficiente para superar el objetivo de volumen.
- Quedan pendientes de verificar directamente (llamada/visita) los teléfonos parcialmente enmascarados de Golden Pages.
- No se verificó independientemente el teléfono de Micasa (formato con un dígito de más en la fuente domtut.uz) — señalado en `raw_notes`.
