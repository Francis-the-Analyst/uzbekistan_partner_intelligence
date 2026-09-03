# Progreso — Retail Samarkand (v3) — CERRADO

Última actualización: búsqueda completada, 21 registros guardados en `retail_samarkand.json`.

## Nota de herramientas
- Toda la investigación usó `firecrawl-search` + `firecrawl-scrape` (skills). No hubo caídas de crédito ni necesidad de fallback a WebSearch/WebFetch en ningún momento.
- Fuentes especialmente productivas: `goldenpages.uz` (categorías "Furniture stores in Samarkand" Id=104783 y "Furniture in Samarkand - manufacturing" Id=3582), `samcity.uz/catalog/category/mebel` (directorio local con descripciones y redes sociales), `remontpodkluch.uz` (empresa de reformas con subpáginas específicas de cocina/baño), `shatura.uz/ourShops` (localizador oficial de tiendas), 2GIS (páginas de negocio individuales — dan además "negocios similares" cercanos, útil para descubrir nombres nuevos).
- Instagram y Facebook están BLOQUEADOS para `firecrawl-scrape` directo ("we do not support this site") — se usó el contenido indexado vía `firecrawl-search` (títulos/highlights) en su lugar.
- Yandex Maps category pages (listados JS) NO se renderizan útilmente con scrape simple — devuelven solo tiles de mapa, no la lista de negocios. Se evitó ese approach tras un intento fallido; se usó 2GIS o directorios estáticos en su lugar.
- INTERSTONE (distribuidor nacional de piedra cuarzo/acrílica, marcas Avant Quartz/Noblle/Grandex/Neomarm — competidor directo de Cosentino en Uzbekistán) fue investigado pero descartado: solo tiene un punto de venta/dealer en Tashkent, sin sede ni showroom en Samarkand.

## Estado final por tipología (21 registros)

### Kitchen — 7 registros
1. Mondelux Kitchen Samarkand — Medium
2. Namuna Furniture Factory — Medium
3. Shatura Samarkand (salón en Atlas Mebel) — Medium
4. Samarqand Mebel — Medium
5. Garant Mebel — Low
6. Mebel Standart — Low
7. Pro Mebel Salon — Low

### Kitchen & Bath — 1 registro
8. Santex Master Gold — Low
(No se encontró un segundo actor Kitchen & Bath verificable con dirección específica en Samarkand — se investigó "DCO showroom santehniki" y presencia de Hansgrohe, pero no se pudo confirmar que tuvieran ubicación propia en Samarkand vs. Tashkent; se descartó por prudencia en vez de arriesgar un falso positivo.)

### Showroom (materiales) — 7 registros
9. World Stone — Medium
10. Millenium Stone — Low
11. BNB Granite — Medium
12. Mudo Concept Samarkand — High
13. Atlas Mebel Trade Complex — Medium (hub multi-marca de mobiliario)
14. Muban (tienda de plitka cerámica) — Medium
15. Travertino (distribuidor Marazzi, cerámica italiana premium) — High

### Hybrid — 2 registros
16. Mann Home Samarkand — Medium
17. ZAR Mebel — Medium

### Interior Designer (Retail) — 4 registros
18. Studio Mint / Студия Мята — Medium
19. HOME EXPERT (remontpodkluch.uz) — Medium
20. Diyora Vagizova (diseñadora freelance) — Medium
21. IMAGINE dizayn studiyasi — Medium

## Reparto Low/Medium/High final (21 registros)
- Low: 5 (Garant Mebel, Mebel Standart, Pro Mebel, Santex Master Gold, Millenium Stone)
- Medium: 14
- High: 2 (Mudo Concept Samarkand, Travertino)

## Kitchen + Kitchen & Bath combinado: 8 registros (supera el mínimo de 4-6 pedido)

## Candidatos vistos pero NO incluidos (para referencia, evitar rebuscar)
- INTERSTONE — sin sede en Samarkand (solo Tashkent), descartado.
- DCO showroom santehniki / Hansgrohe Samarkand — no se pudo confirmar ubicación física en Samarkand (posible confusión con Tashkent/Mendko.uz), descartado por falta de evidencia.
- "Custom Design Studio" (Yandex) — aparece como "Permanently closed", descartado.
- "Samarkand Design" (samarkanddesign.com) — parece ser una marca de alfombras/decoración occidental sin relación con Samarkand, Uzbekistán — descartado.
- Gran-Lab, Granit.uz, Meros, Lux Granite, Ocean, Silkcolt, Decoart, Numix, Ottocento markazi, Yitai, Soba Paint Travertin, Vivid, Kafel.bek — nombres de tiendas de piedra/plitka/decoración vistos en listados "negocios similares" de 2GIS pero sin verificar individualmente (dirección/teléfono/categoría exacta) por límite de tiempo. Quedan como pool de candidatos adicionales si se necesita ampliar en una futura pasada.

## Posible "Proyectos, no incluido aquí"
Ninguno de los estudios de diseño encontrados en esta pasada resultó ser mayormente developer/B2B — todos (Studio Mint, Home Expert, Diyora Vagizova, IMAGINE) muestran evidencia de trabajar con particulares/viviendas individuales.

## Duplicados evitados (ya presentes en v2 master dataset, NO re-añadidos)
Kale Gallery Samarkand, Brand Stone Samarkand, Adavit Santehnika, ORSI PREMIUM, Prime Ceramics, Sina Lux Tile, Liberty/Team Liberty, Global Avenue, Elite Building, Stildi Interior Studio, Studio 662, ID Studio, Renaissance Design, MAG PROJECTING, Samarkand Design Studio, ARKH BYURO Samarkand, Luxhouse.uz Samarkand, Afrosiab Mebel OOO, Ards Lux OOO, Gold Brend Mebel OOO, Motrit Mebel OOO, Osiyo Mebel TM, Shamsi Kamar TPF.

## Tarea completada
21 actores nuevos guardados, JSON válido, cubre las 3 franjas de precio y las 4 tipologías pedidas, con 7 Kitchen + 1 Kitchen & Bath (8 total, por encima del mínimo 4-6).
