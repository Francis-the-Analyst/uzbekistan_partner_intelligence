# Progress — Retail Channel, Namangan (Pass 3)

Started: 2026-09-02
Completed: 2026-09-02

## Objective
15-20+ actores retail en Namangan repartidos entre Kitchen, Kitchen & Bath, Interior Designer (Retail), Showroom.
Prioridad: reforzar Kitchen (4-6 minimo) y cubrir gama Low/economica (antes en 0).

## Status by typology — ALL CLOSED

- Kitchen: CLOSED — 10 registros (Sarkor, Sof Mebel, Allwood, Manner Wood, Namangan Ibroxim Mebellari,
  Sharif-Fayz-Servis, Musavvir, Yangi Hayot, Ilyosbek Lyuks Mebellari, Prestige)
- Kitchen & Bath: CLOSED — 1 registro (Magiya Dereva — unico actor de Namangan confirmado con tag
  simultaneo de fabrica de cocinas Y mueble de bano en Yellow Pages + RemKarta)
- Interior Designer (Retail): CLOSED — 4 registros (Ijodiyot, Arch_Ibragimov, Cliffs Design Group, Ultra Group)
- Showroom (piedra/cuarzo/porcelanico/marmol): CLOSED — 6 registros (ArtStone Namangan, Kafel, Zhongtao,
  Keramin, Mosaic, Mramor Granit Master)

TOTAL: 21 actores (supera el objetivo de 15-20)
Kitchen + Kitchen & Bath combinado: 11 (supera el minimo de 4-6 solicitado como refuerzo)

## Reparto Low/Medium/High conseguido
- Low: 3 (Yangi Hayot [Kitchen], Magiya Dereva [Kitchen & Bath], Mosaic [Showroom])
- Medium: 14 (mayoria — fabricas/talleres establecidos sin senal explicita de lujo ni descuento)
- High: 3 (Ilyosbek Lyuks Mebellari [nombre = "lujo"], Prestige [nombre premium], ArtStone Namangan
  [fabricante de piedra aglomerada/cuarzo, categoria tecnica superior])
- Not determinable: 1 (Ultra Group — fuente unica sin senales)

Sesgo corregido parcialmente: se paso de CERO actores Low en el dataset anterior a 3 explicitos, con
mejor esfuerzo de clasificacion en el resto. Sigue habiendo mas Medium que Low/High porque la mayoria
de fuentes (RemKarta.ru, Yandex Maps) no dan precios explicitos — clasificacion por senales indirectas
(nombre, ubicacion industrial vs. calle comercial, numero de resenas, marca importada vs. generica).

## Herramientas usadas
- firecrawl-search: consultas en ruso y uzbeko para las 4 tipologias.
- firecrawl-scrape: paginas de directorio (RemKarta.ru Namangan por categoria — mebel-na-zakaz,
  mebelnye-fabriki, dizayn-intererov, keramicheskaya-plitka, magaziny-santehniki; Yellow Pages Uzbekistan
  RU y UZ; Yandex Maps categorias furniture_store / custom_furniture / design_studio / stone_articles_and_fixtures;
  top.uz secciones mramor-granit e iskusstvennyy-kamen; texnomart.uz Naman).
- No se uso firecrawl-map ni firecrawl-agent en esta pasada — los directorios objetivo (RemKarta.ru,
  Yellow Pages) ya devuelven listados completos por categoria en una sola pagina scrapeada, sin necesidad
  de mapeo previo de URLs ni extraccion estructurada multi-pagina.
- Instagram: firecrawl-scrape fallo sistematicamente ("we do not support this site") para perfiles de
  Instagram (russkiyles1, mebell.onn) — NO fue necesario cambiar a WebSearch/WebFetch porque
  firecrawl-search con --scrape SI devolvio contenido util (captions, texto de posts) para las cuentas
  de Instagram relevantes vistas en resultados de busqueda. Ningun fallback a WebSearch/WebFetch/Playwright
  fue necesario en toda la pasada — Firecrawl respondio sin errores de creditos en todas las llamadas.

## Notas / actores descartados o no incluidos
- "Odis" (Yandex Maps, categoria "design studio", 5.0/75 resenas) — verificado via busqueda: es en
  realidad "Odis Gaming", un gaming club/club de PCs en Namangan, mal categorizado en Yandex. EXCLUIDO.
- "Hettich - шоу-рум мебельной фурнитуры" — showroom de herrajes/accesorios de mueble (marca alemana),
  no vende cocinas terminadas. NO incluido como actor propio; mencionado en raw_notes de "Prestige" como
  posible contacto B2B de herrajes.
- Tiendas de sanitarios puros (магазины сантехники, 35 en RemKarta) revisadas pero descartadas — son
  griferia/sanitarios, no mueble de cocina+bano combinado; no encajan en la tipologia "Kitchen & Bath"
  tal como se definio en el brief.
- Texnomart Naman (cadena nacional de electrodomesticos) — tiene tiendas fisicas en Namangan pero su
  categoria "Кухня" (cocina) esta vacia de productos en el momento del scrape; descartado como actor
  Kitchen por ser fundamentalmente una cadena de electronica/electrodomesticos, no de mueble de cocina.
- Varios talleres "Изготовление мебели на заказ" en RemKarta con direcciones solo en codigo catastral
  genérico (ej. "4Р113") y sin telefono ni resenas fueron descartados por baja calidad de senal (posible
  duplicado/entrada de baja fiabilidad).
- Cliffs Design Group: aparece tambien en un registro nacional de contratistas de diseno/construccion
  (ridp.uz) que mezcla estudios residenciales y firmas de mayor escala — no se pudo confirmar si su
  cartera es mayoritariamente particulares o developers. Incluido como Retail con nota de verificacion
  pendiente ("posible Proyectos, no incluido aqui" seria la alternativa si se confirma lo segundo).
- luxhouse.uz/namangan y otros actores multi-ciudad ya cubiertos en el dataset anterior (data/namangan.json)
  no se duplicaron aqui salvo cuando aportaban informacion nueva sustancial (p.ej. Magiya Dereva no estaba
  en el dataset anterior).

## Archivo de salida
`data_v3/retail_namangan.json` — 21 registros, JSON valido (verificado con ConvertFrom-Json).
