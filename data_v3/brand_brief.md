# Cosentino Brand Brief — v3.0 (Paso 0, alineación de marca)

Fuente: www.cosentino.com (home, /silestone/, /dekton/, /facades/, /sensa/), scraped via firecrawl-scrape, 2026-09-02.

## 1. Líneas de producto y aplicaciones reales

### Silestone — quartz surface (Hybriq+® technology)
- **Aplicaciones confirmadas en la web:** Kitchen (countertops), Bathroom, Furniture.
- **30+ años presente en cocinas de todo el mundo.** Posicionamiento en salud/seguridad y sostenibilidad (99% agua reciclada, ≥20% material reciclado, certificación de baja sílice cristalina).
- **Encaje de canal:** el material "de entrada" para **Kitchen / Kitchen & Bath studios** y **Interior Designers (Retail)** — showroom, encimeras de cocina y baño, mobiliario. No se posiciona para fachada.

### Dekton — ultracompact / sintered stone surface
- **Aplicaciones confirmadas en la web:** Kitchen countertops, **Facades** (página dedicada `/facades/`), **Cladding**, Flooring, Furniture.
- Formatos: slabs grandes (3200x1440mm) y pequeños (710x710mm); espesores 4mm (**Dekton Slim**), 8, 12, 20, 30mm. Dekton Slim/Optimma están explícitamente diseñados para **aplicaciones de revestimiento vertical (cladding)**.
- **Tres tipos de fachada que Cosentino soporta explícitamente:** Ventilated facades (fachada ventilada), Curtain Wall, Bonded Facades. Sistemas de fijación propios (DKT1-4, DKC, DKBG, DKR, DKB).
- Cosentino tiene una categoría profesional dedicada **"Facade Installers"** (`/professional/facade-installers/`) con servicio de "Find an installer" — confirma que este es un actor de canal reconocido oficialmente por la marca, no una categoría inventada para este estudio.
- Servicio de soporte de principio a fin: consulta inicial → especificación de material/sistema/anclaje → mock-ups → producción → logística → ejecución → posventa. Explícitamente menciona "installer recommendations" como parte del servicio a arquitectos/promotores.
- **Encaje de canal:** el material que conecta con **Facade Installers**, **Architecture Studios**, **Developers** y **Contractors** (canal Proyectos) por su uso en fachada/cladding a gran escala; y también con **Kitchen & Bath** vía encimeras (mismo material, doble uso retail+proyectos).

### Sensa — natural granite & quartzite with stain-resistant protection
- **Aplicaciones confirmadas en la web:** Kitchen Countertops, wall cladding. Garantía de 15 años, mantenimiento con solo agua y jabón.
- Se distribuye explícitamente a través de **"local kitchen shops and Sensa suppliers"** — la propia marca lo posiciona en el canal de tiendas/estudios de cocina.
- **Encaje de canal:** igual que Silestone — **Kitchen studios**, **Kitchen & Bath showrooms**, actores retail de piedra natural (ej. mostradores de mármol/granito ya presentes en el dataset de Uzbekistán).

### Resumen de encaje por tipología de actor
| Línea | Retail (Kitchen / Kitchen & Bath / Interior Designer Retail / Showroom) | Proyectos (Developer / Contractor / Facade Installer / Architecture Studio / Interior Designer Proyectos) |
|---|---|---|
| Silestone | Encimeras cocina/baño, mobiliario | Show-flats, hostelería (vía Interior Designer Proyectos) |
| Dekton | Encimeras cocina, mobiliario | **Fachadas ventiladas, curtain wall, fachadas adheridas, cladding, pavimentos de gran escala** |
| Sensa | Encimeras cocina, piedra natural | Cladding ocasional en proyectos |

## 2. Frases de posicionamiento de marca (verbatim, en inglés)

1. "We transform spaces that transform people" (Silestone)
2. "Health and safety has always been part of Silestone DNA"
3. "A revolutionary and sustainable process" (Silestone)
4. "The surface for design and architecture" (Dekton)
5. "You imagine it. Dekton makes it possible." (Dekton)
6. "Dekton is ideal for any type of facade" / "Facades that stand the test of time"
7. "Cosentino Facades: functional and timeless beauty"
8. "Personalized support from specification to on-site installation" (Facades — describe su modelo de servicio a instaladores/arquitectos)
9. "The most qualified facade installers at your fingertips" (llamada a la acción de la propia web para encontrar instaladores de fachada)
10. "Protection and superior quality in natural stone" / "Nature and innovation" (Sensa)

## 3. Glosario corto EN / RU (para búsquedas y traducción del informe final)

| EN | RU |
|---|---|
| Countertop / Worktop | Столешница |
| Kitchen countertop | Кухонная столешница |
| Bathroom vanity top | Столешница для ванной |
| Ventilated facade | Вентилируемый фасад / Навесной вентилируемый фасад (НВФ) |
| Curtain wall | Навесной фасад / система "curtain wall" |
| Wall cladding | Облицовка (стеновая облицовка) |
| Engineered quartz / quartz surface | Кварцевый агломерат / искусственный кварц |
| Sintered stone / ultracompact surface | Спечённый камень / ультракомпактная поверхность |
| Natural stone (granite/marble) | Натуральный камень (гранит/мрамор) |
| Flooring / tile | Напольное покрытие / плитка |
| Large-format slab | Крупноформатная плита |
| Showroom | Шоурум / демонстрационный зал |
| Fabricator (stone processor) | Камнеобрабатывающее предприятие / фабрикатор |
| Facade installer | Монтажник фасадов / фасадная компания |
| Developer (real estate) | Застройщик |
| General contractor | Генеральный подрядчик |
| Interior designer | Дизайнер интерьера |
| Architecture studio | Архитектурное бюро |
| Stain-resistant | Устойчивый к пятнам / антипятновое покрытие |

## 4. Nota para la búsqueda de Facade Installers en Uzbekistán

Dado que Cosentino tiene una categoría profesional oficial "Facade Installers" ligada exclusivamente a Dekton (fachada ventilada/curtain wall/bonded), y que en la reclasificación del dataset v2 (145 registros) **no se encontró ningún actor que encajara genuinamente en esta tipología** (solo fabricantes de piedra natural que hacen cladding como línea secundaria, ver `data_v3/proyectos_dataset_seed.json` y `retail_dataset_seed.json`), esta tipología debe cubrirse con búsqueda nueva: empresas de "НВФ" (навесной вентилируемый фасад), "фасадные системы", "фасадные работы", "vent fasad" / "fasad ishlari" (uzbeko), contratistas de envolvente de edificio en Tashkent/Samarkand, y distribuidores locales de sistemas de fachada (aluminio composite, porcelánico de gran formato) que podrían ampliar a Dekton.
