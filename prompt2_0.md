# Prompt 2.0 — Identificación de puntos de venta retail y proyectos en Uzbekistán

**Revisión profesional — Firecrawl Pro activo.** Actualizado 2026-09-02. Esta revisión responde a tres cambios de contrato respecto a la versión anterior de este documento:

1. Se ha contratado el plan de pago de Firecrawl — más créditos y mejor tasa de éxito en el scraping que en las pasadas anteriores, donde el volumen de resultados se quedó corto.
2. La arquitectura del producto pasa de "dataset único con columna canal" a **dos bases de datos separadas por canal (Retail / Proyectos)**, cada una consolidada con lo ya recopilado en pasadas anteriores más lo nuevo que se encuentre ahora, que luego alimentan un único dashboard con portada de selección de canal.
3. Se redefine con precisión qué tipologías caen en cada canal (incluida una tipología nueva, **Facade Installer**), porque algunas — sobre todo Interior Designer — pueden caer en uno u otro según el tipo de cliente al que sirven.

Este documento sigue siendo, como su predecesor, **una revisión antes de lanzar nada**: no se ha ejecutado ninguna búsqueda todavía. Es para validar el prompt antes de consumir créditos de Firecrawl y tiempo de sesión, y antes de subir nada a GitHub.

---

## Contexto del encargo (para que el prompt se lea con esto en mente)

Este estudio de mercado es un encargo interno para apoyar el desarrollo de las marcas de **Cosentino** (Silestone, Dekton, Sensa — [www.cosentino.com](https://www.cosentino.com)) en Uzbekistán. El objetivo final no es un listado de empresas por sí mismo, sino un mapa de canales de entrada — con precios agresivos — para colocar muestras físicas y firmar acuerdos de prescripción con los actores que tengan capacidad real de recomendar o instalar el material de Cosentino frente al cliente final. Por eso el prompt de ejecución incluye ahora, como primer paso, una relectura de la propia web de Cosentino antes de lanzar la búsqueda de mercado (ver "PASO 0" más abajo): mantener el vocabulario de posicionamiento de marca y los usos reales de cada línea de producto (encimeras, fachadas, pavimentos) consistentes en todo el informe y, sobre todo, en el ángulo de entrada que se propone para cada tipología.

---

## GESTIÓN DE SESIÓN Y CHECKPOINTS (leer antes de empezar)

**Guardado incremental obligatorio — no esperar al final ni al límite de tokens para persistir nada.** Cada bloque de trabajo (una ciudad del canal retail, o el canal proyectos completo) debe escribir su archivo de salida (`data_v3/retail_<ciudad>.json`, `data_v3/proyectos_dataset_new.json`, etc.) en disco de forma incremental, según se va avanzando:
- Escribe/actualiza el archivo JSON de salida después de cada tipología completada dentro de una ciudad (o cada 5-8 registros nuevos si una tipología por sí sola es muy larga), no solo una vez al terminar la ciudad entera. Usa el archivo como una lista que se reescribe con el conjunto acumulado hasta ese momento (sobrescribir con la lista completa más reciente, no ir anexando fragmentos sueltos que luego haya que volver a unir).
- Junto al dataset, mantén actualizado un `data_v3/progress_<bloque>.md` con: qué tipologías/ciudades ya están cerradas, cuántos registros lleva cada una, y qué falta — así cualquier sesión o subagente que retome el trabajo (incluido tú mismo tras un resumen de contexto) sabe exactamente por dónde seguir sin repetir búsquedas ni perder lo ya encontrado.
- Esto aplica independientemente del nivel de tokens disponibles: es una práctica continua de guardado, no una medida de emergencia solo para el 95%.

Además, si durante la ejecución de esta tarea alcanzas el 95% de los tokens disponibles en la sesión/agente actual, detente inmediatamente (no intentes terminar el bloque en curso a toda prisa) y, más allá del guardado incremental ya hecho, deja constancia en `data_v3/progress_<bloque>.md` (o en un `checkpoint.md` general en esta carpeta si eres la sesión principal que coordina varios bloques) de:
- Todos los resultados ya recopilados hasta ese momento, con todos los campos extraídos por punto de venta/actor, indicando en qué base de datos va cada uno (`retail_dataset` o `proyectos_dataset`).
- Qué ciudades, tipologías (incluida Facade Installer), franjas de precio (Low/Medium/High) y bloques (canal retail o canal proyectos New Tashkent) ya se han completado y cuáles quedan pendientes.
- El análisis ya elaborado hasta ese punto, si se ha empezado (segmentación, tabla de exposición física, tabla de franja de precio, mapa de posicionamiento, candidatos prioritarios).
- Un resumen claro de "próximos pasos" que indique exactamente por dónde continuar.

La ventana de tokens de la sesión se renueva en 2 horas y 20 minutos. Al reanudar la tarea en la siguiente ventana, léase primero `checkpoint.md` (o los `progress_<bloque>.md` correspondientes) y úsese como punto de partida: no repetir búsquedas ni scrapes ya hechos, no perder el trabajo avanzado, y continuar completando únicamente lo pendiente hasta finalizar el informe completo (incluida la entrega final duplicada en inglés y ruso).

---

## Qué cambia en esta revisión respecto a la v2.0 anterior (y por qué)

| Problema detectado | Dato / causa | Corrección en esta revisión |
|---|---|---|
| Volumen de resultados insuficiente | Firecrawl se usó en plan gratuito (créditos limitados); el propio WebSearch de Claude encuentra menos que Firecrawl en directorios locales (2GIS, Yandex Maps, Instagram/Telegram) | Firecrawl Pro ya está activo — es la herramienta principal, sin ahorrar llamadas. Se mantiene el fallback a WebSearch/WebFetch/playwright-cli solo si de verdad se agotan créditos |
| Dos bases de datos no explícitas por canal | La v2.0 pedía un único dataset con columna "canal" | Se piden expresamente **dos bases de datos separadas**, `retail_dataset` y `proyectos_dataset`, cada una consolidada con lo ya existente + hallazgos nuevos, que después alimentan el mismo dashboard |
| Frontera Retail/Proyectos ambigua para Interior Designer | Un mismo estudio de interiorismo puede diseñar tanto viviendas particulares (retail) como show-flats/hostelería para un developer (proyectos) | Se fija una regla de clasificación explícita (ver bloque de tipologías) y se permite que un mismo actor aparezca en ambas bases si opera realmente en los dos canales |
| Falta la tipología Facade Installer | Instaladores de fachadas (incl. fachadas ventiladas) no se buscaban como categoría propia, pese a ser el encaje más directo con Dekton Slim/Fachadas | Se añade como tipología propia del canal Proyectos, con queries dedicadas y ángulo de entrada específico ligado a Dekton |
| Hallazgos previos no consolidados explícitamente | `data_v2/master_dataset_v2.csv` (105 registros) existe pero el prompt anterior no indicaba cómo integrarlo con la nueva pasada | Paso explícito de carga y reclasificación del dataset existente como punto de partida de las dos bases nuevas, con deduplicación por nombre + ciudad |
| Cocinas infrarrepresentadas | 6 "Kitchen" + 6 "Kitchen & Bath" = 12/105 (11%) en la pasada v2 | Se mantiene como refuerzo prioritario (ver bloque BÚSQUEDA — CANAL RETAIL) |
| Cero puntos de gama baja/económica | 0 registros con `price_range = Low` en la pasada v2 (34 High, 26 Medium, 5 Medium-High, 40 No determinable) | Se mantiene la cobertura obligatoria de las 3 franjas Low/Medium/High |

---

## Prompt de ejecución

```
CONTEXTO: Soy Export Sales Manager de Cosentino (superficies premium: Silestone, Dekton, Sensa — www.cosentino.com). Este es un estudio de mercado interno para apoyar el desarrollo de las marcas de Cosentino en Uzbekistán. Buscamos entrar en el canal retail y en el canal proyectos, colocando muestras y materiales en exposición en puntos de venta de TODAS las franjas de mercado, con una estrategia de precios agresiva de entrada. Cubrimos las 4 ciudades más pobladas del país: Tashkent (~3.1M hab., capital y mercado prioritario), Namangan (~714K), Samarkand (~596K) y Andiján (~492K).

Adicionalmente, en Tashkent se está desarrollando el macroproyecto NEW TASHKENT (Yangi Toshkent) — un nuevo distrito urbano de gran escala con desarrollos residenciales, comerciales y administrativos. Este proyecto abre un canal de entrada B2B/proyectos (promotoras, contratistas generales, instaladores de fachadas, estudios de arquitectura) independiente del canal retail tradicional, y debe tratarse como un bloque de búsqueda propio.

Esta es la TERCERA pasada de búsqueda sobre este mercado, ahora con Firecrawl en plan de pago. Las dos pasadas anteriores (105 registros totales, en `data_v2/master_dataset_v2.csv`) dejaron sesgos confirmados que esta pasada debe corregir activamente:
1. Volumen insuficiente en general: la búsqueda anterior se apoyó en Firecrawl gratuito / WebSearch genérico, con menos alcance en directorios locales (2GIS, Yandex Maps) y en redes sociales (Instagram, Telegram) que en un scraping con Firecrawl Pro.
2. Cocinas infrarrepresentadas: solo 12 de 105 registros (6 Kitchen + 6 Kitchen & Bath), y solo 2 en Tashkent pese a existir más tiendas confirmadas por visita física.
3. Cero puntos de venta de gama baja/económica: el prompt original excluía explícitamente "distribuidores de gama baja" — esta pasada debe INCLUIRLOS.
4. Ninguna tipología dedicada a instaladores de fachadas — esta pasada la incorpora de cero (ver tipologías del canal Proyectos).

PASO 0 — ALINEACIÓN DE MARCA (antes de lanzar cualquier búsqueda de mercado): usa `firecrawl-scrape` sobre www.cosentino.com y sus páginas de producto (Silestone, Dekton — incluida la línea de fachadas/Dekton Slim, Sensa) para refrescar el vocabulario de posicionamiento de marca, las aplicaciones reales de cada línea (encimeras de cocina y baño, fachadas ventiladas, pavimentos, mobiliario) y el tono de comunicación de la marca. Usa esto para mantener consistencia terminológica en todo el informe y, sobre todo, para justificar con criterio el ángulo de entrada de cada tipología (p. ej. Dekton para fachadas es el encaje natural con la tipología Facade Installer).

PASO 1 — CONSOLIDAR CON LO YA EXISTENTE: antes de buscar nada nuevo, carga `data_v2/master_dataset_v2.csv` (105 registros de la pasada anterior, ya en esta carpeta). Reclasifica cada registro existente en el canal correcto (Retail o Proyectos) y en la tipología correcta según las definiciones de este prompt (revisa en particular si algún registro existente encaja ahora en la tipología nueva Facade Installer, y si algún Interior Designer existente debería reclasificarse según la regla de frontera Retail/Proyectos de más abajo). Usa estos 105 registros como punto de partida de las dos bases de datos nuevas — no los descartes ni los vuelvas a buscar desde cero — y en esta pasada: (a) completa los campos que quedaron como "No determinable" si ahora se puede inferir con más búsqueda (sobre todo franja de precio), y (b) añade todos los actores nuevos que encuentres, deduplicando por nombre normalizado + ciudad para no repetir un mismo actor dos veces.

HERRAMIENTAS: Usa tus skills de Firecrawl como método principal de búsqueda y extracción — el plan de pago ya está activo, así que no hay que limitar el número de llamadas para ahorrar créditos:
- `firecrawl-search` para DESCUBRIR — lanza las queries en ruso/uzbeko/inglés de más abajo.
- `firecrawl-map` para ENUMERAR — sobre un dominio o directorio ya identificado (web de un centro comercial, directorio tipo 2GIS/Yandex Maps/Golden Pages Uzbekistan, web de un developer con varios proyectos), lista todas las URLs internas relevantes antes de decidir cuáles scrapear.
- `firecrawl-scrape` para EXTRAER el contenido completo (markdown) de cada página candidata, incluida página en Instagram/Facebook/Telegram cuando sea accesible.
- `firecrawl-agent` para extracción estructurada multi-página cuando haya un listado con schema repetido (catálogo de un showroom, cartera de proyectos de un developer, directorio de contratistas o instaladores de fachadas).
- WebSearch / WebFetch como fallback únicamente cuando Firecrawl no consiga acceder a una página (login wall, bloqueo geográfico, error persistente) — en ese caso usa el snippet/descripción ya devuelto como fuente de esos campos, y marca el campo como "No determinable" solo si de verdad no hay dato ni en snippet ni en la página.

PLAN DE CONTINGENCIA — SIN CRÉDITOS FIRECRAWL: si en cualquier momento Firecrawl devuelve un error de créditos agotados (insufficient credits / 429) o deja de estar disponible, no te detengas ni esperes confirmación — cambia inmediatamente a este segundo método y continúa sin repetir páginas ya extraídas:
- `WebSearch` para descubrir (sustituye a `firecrawl-search` y `firecrawl-map`; este es el método que ya se usó con éxito en la v2 y produjo los 105 registros de la pasada anterior sin usar Firecrawl).
- `WebFetch` para extraer el contenido de una URL ya conocida (sustituye a `firecrawl-scrape`). Si la página bloquea el acceso o exige login, usa el snippet/descripción que WebSearch ya devolvió como fuente de esos campos.
- La skill `playwright-cli` para páginas que WebFetch no consiga renderizar bien: contenido cargado por JavaScript, scroll infinito en directorios tipo 2GIS/Yandex Maps (para listar comercios de una categoría/ciudad sin `firecrawl-map`), o perfiles de Instagram/Facebook que necesiten interacción mínima para mostrar el contenido público — úsala para navegar, esperar el renderizado y extraer el texto/capturas visibles.
Dejar constancia en el informe final (o en `checkpoint.md` si aplica) del punto exacto en el que se produjo el cambio de herramienta, para que quede claro con qué método se obtuvo cada parte del dataset.

TIPOLOGÍAS Y CANAL — clasificación obligatoria (cada actor va a UNA base de datos como canal principal; puede aparecer en las dos si opera realmente en ambos canales, ver regla de frontera):

CANAL RETAIL (venta/atención directa al cliente particular, con showroom o punto de venta físico o digital abierto al público):
- Kitchen — estudios de cocina
- Kitchen & Bath — estudios de cocina y baño combinados
- Interior Designer (Retail) — estudio de diseño de interiores cuyo grueso de clientes son particulares/viviendas individuales, con showroom, atención directa al público o portfolio orientado a reformas de vivienda privada
- Showroom — de materiales premium y estándar (piedra, cuarzo, porcelánico, mármol) sin encajar en las categorías anteriores

CANAL PROYECTOS (New Tashkent y otros desarrollos de escala equivalente; acuerdos de prescripción/suministro a gran escala, no venta directa al consumidor):
- Developer — promotora inmobiliaria
- Contractor — constructora / contratista general de obra
- Facade Installer — instalador de fachadas, incluidas fachadas ventiladas (tipología NUEVA en esta pasada; encaje directo con Dekton Slim/Dekton Fachadas)
- Architecture Studio — bureau de arquitectura e ingeniería que firma proyectos de escala developer
- Interior Designer (Proyectos) — estudio de diseño de interiores contratado por developers/promotoras para show-flats, pisos piloto, hostelería, oficinas o espacios comerciales de gran escala

REGLA DE FRONTERA Interior Designer: clasifícalo en Retail si su actividad principal es con clientes particulares (viviendas individuales, showroom o atención directa al público); clasifícalo en Proyectos si su actividad principal es bajo contrato con developers/promotoras (show-flats, hostelería, oficinas, gran escala). Si el estudio hace ambas cosas de forma relevante y verificable, inclúyelo en LAS DOS bases de datos con el mismo nombre normalizado (mismo `id_actor`) y un campo `canal_secundario` indicando el canal adicional, para poder cruzarlo sin duplicarlo como si fueran dos actores distintos.

Un actor que combine varias tipologías del mismo canal (p. ej. Contractor + Developer) se marca como Híbrido especificando qué combina, dentro de su canal principal.

BÚSQUEDA — CANAL RETAIL (4 ciudades):
Busca, para cada una de las 4 ciudades, los siguientes tipos de punto de venta:
- Kitchen — REFUERZO PRIORITARIO: esta tipología quedó muy infrarrepresentada en las pasadas anteriores. Dedica queries específicas por ciudad tanto de gama alta como de gama económica ("кухни на заказ [ciudad]", "кухонная студия [ciudad]", "мебель для кухни [ciudad]", "фабрика кухонь [ciudad]", "кухни эконом класса [ciudad]", "готовые кухни каталог [ciudad]", "мебель для кухни недорого [ciudad]", "oshxona studiyasi [ciudad]", "arzon oshxona mebeli [ciudad]"), revisa directorios locales (2GIS, Yandex Maps) vía `firecrawl-map` y hashtags de Instagram/Telegram en ruso y uzbeko, no solo webs propias.
- Kitchen & Bath
- Interior Designer (Retail)
- Showroom de materiales premium y estándar (piedra, cuarzo, porcelánico, mármol)

COBERTURA DE PRECIO — NO te limites al segmento medium-to-high. Cubre las 3 franjas — Low (económica/mass-market) / Medium / High (premium) — dentro de cada tipología, y busca activamente actores de gama baja con queries dedicadas (fábricas de muebles de cocina económicas, distribuidores de porcelánico/cuarzo/granito de gama baja, mobiliario en serie vs. a medida). Solo quedan excluidas las ferreterías genéricas puras (tornillería, pintura, fontanería general sin relación con cocina/baño/interiorismo/superficies). Para cada resultado, clasifica el campo de precio explícitamente como Low / Medium / High usando el mejor esfuerzo posible a partir de las señales disponibles (lenguaje de posicionamiento, menciones de precio, materiales usados, público objetivo declarado, tipo de local); usa "No determinable" solo cuando de verdad no haya ninguna señal, ni siquiera indirecta.

BÚSQUEDA — CANAL PROYECTOS (New Tashkent y equivalentes):
Identifica actores vinculados al desarrollo de New Tashkent / Yangi Toshkent (y cualquier otro desarrollo de escala equivalente que aparezca):
- Developer — promotoras con proyectos activos o anunciados en el distrito
- Contractor — REFUERZO PRIORITARIO: las pasadas anteriores devolvieron sobre todo bureaus de arquitectura del masterplan y casi ningún contratista de ejecución real. Busca específicamente noticias de prensa rusa/uzbeka sobre inicio de obras, colocación de primera piedra, avance de construcción ("подрядчик Новый Ташкент", "строительство Нового Ташкента ход работ", "Yangi Toshkent qurilish holati"), no solo la web oficial del masterplan.
- Facade Installer — tipología NUEVA, sin resultados en pasadas anteriores. Busca específicamente: "фасадные работы Ташкент", "монтаж вентилируемых фасадов Ташкент", "фасадная компания Узбекистан", "облицовка фасадов Ташкент", "fasad ishlari kompaniyasi Toshkent", "fasad montaji", "ventilyatsiyalanadigan fasad", "facade installation company Tashkent", "ventilated facade contractor Uzbekistan", "facade cladding company Tashkent". Revisa también si alguno de los contratistas/constructoras ya identificados subcontrata o ejecuta fachadas internamente.
- Architecture Studio — estudios que firman o han firmado proyectos del masterplan
- Interior Designer (Proyectos) — bureaus contratados para show-flats / pisos piloto / apartamentos modelo de los desarrollos residenciales

Usa `firecrawl-map` sobre directorios locales (2GIS, Yandex Maps, Golden Pages Uzbekistan) y sobre la web oficial de New Tashkent para enumerar developers/contratistas/instaladores listados antes de decidir qué scrapear, y `firecrawl-agent` cuando una página tenga un listado estructurado (p. ej. cartera de proyectos de un developer o directorio de contratistas).

Este bloque debe tratarse como un segmento propio en el análisis (canal proyectos), no mezclado con el retail tradicional.

Además, para el canal proyectos, identifica también los PROYECTOS EN SÍ (no solo las empresas): nombre del desarrollo/distrito/fase, promotor, ubicación dentro de New Tashkent, estado (en construcción / anunciado / en venta / entregado), escala (nº de unidades, hectáreas, fases) y fecha estimada de entrega o ejecución en los próximos años, con la fuente de esa información.

FUENTES: Busca tanto en páginas web como en redes sociales (Instagram, Facebook, Telegram — Telegram es muy usado en Uzbekistán para negocios B2B y de construcción), ya que muchos estudios boutique y actores del sector proyectos operan principalmente a través de redes sociales o canales de Telegram sin web propia. Si un perfil no se puede acceder completamente (muro de login), extrae la información disponible en el snippet de búsqueda y en la bio/descripción pública.

IMPORTANTE - IDIOMAS: Realiza búsquedas en ruso, uzbeko e inglés:
- Ruso (idioma habitual de negocios en el segmento premium y también el más usado en anuncios de gama económica): "дизайн интерьера Ташкент", "кухни на заказ Ташкент", "кухонная студия Ташкент", "кухни эконом класса Ташкент", "мебель для кухни недорого Ташкент", "студия дизайна Самарканд", "архитектурное бюро Ташкент", "строительная компания Ташкент", "застройщик Новый Ташкент", "подрядчик Новый Ташкент", "фасадные работы Ташкент", "монтаж вентилируемых фасадов Ташкент"
- Uzbeko: "interyer dizayni studiyasi Toshkent", "oshxona studiyasi", "arzon oshxona mebeli", "arxitektura byurosi", "qurilish kompaniyasi", "Yangi Toshkent loyihasi", "Yangi Toshkent qurilish holati", "fasad ishlari kompaniyasi"
- Inglés: "interior design studio Tashkent", "kitchen showroom Samarkand", "budget kitchen furniture Tashkent", "architecture bureau Tashkent", "New Tashkent developer", "New Tashkent contractor", "New Tashkent construction progress", "facade installation company Tashkent"
No descartes ningún resultado por el idioma de la web o del perfil, ni por su franja de precio.

VOLUMEN DE RESULTADOS: Sin tope superior — devuélveme TODOS los actores distintos y verificables que encuentres por ciudad y tipología, no te detengas en un mínimo. Con Firecrawl Pro activo, el objetivo de calidad mínima sube respecto a la pasada anterior (referencia, no límite):
- Al menos 20-25 resultados distintos por ciudad en el canal retail, repartidos entre las 3 franjas de precio (no solo Medium/High).
- Al menos 6-8 estudios de cocina / cocina&baño por ciudad (mínimo 24-32 en total), incluyendo representación explícita de gama económica y de gama alta.
- Al menos 15-20 actores en el canal proyectos a nivel país.
- Al menos 6-8 Facade Installer identificados (tipología nueva, foco en Tashkent/New Tashkent, pero sin descartar las otras 3 ciudades).
Si encuentras más, inclúyelos todos.

Para cada resultado, extrae con `firecrawl-scrape` (o `firecrawl-agent` si hay varias páginas con el mismo schema) el contenido completo (web y/o publicaciones/bio de red social/Telegram en formato markdown/texto), y además:
- Nombre del negocio
- Ciudad
- Tipología: Kitchen / Kitchen & Bath / Interior Designer (Retail) / Interior Designer (Proyectos) / Architecture Studio / Contractor / Developer / Facade Installer / Showroom / Híbrido (especifica qué combina si es híbrido)
- Canal: Retail o Proyectos (más `canal_secundario` si opera en ambos, ver regla de frontera)
- Franja de precio: Low / Medium / High (ver criterio de clasificación arriba — evitar "No determinable" salvo ausencia total de señal)
- Exposición física: indica si tiene showroom, sala de exposición o piso/apartamento modelo visible donde se podrían colocar muestras de material (Sí / No / No determinable), citando la evidencia (fotos del local, dirección física, mención explícita de "showroom", "выставочный зал" o "sample apartment / show-flat")
- Email y/o teléfono de contacto si están visibles
- Dirección
- Canal principal de publicación (web propia / Instagram / Facebook / Telegram / varios)
- Idioma en que está publicado el contenido
- Fuente exacta del registro: si viene del dataset previo consolidado en el PASO 1 o es un hallazgo nuevo de esta pasada, y con qué herramienta se obtuvo (Firecrawl o fallback)

ANÁLISIS:
1. Agrupa los puntos de venta/actores en segmentos según su propuesta de valor real (no según el nombre): rango de precio aproximado, tipo de cliente al que se dirigen, marcas/materiales con los que ya trabajan (si se detectan competidores como cuarzo turco, granito local, porcelánico chino/turco, mármol uzbeko, etc.), y los 2-3 mensajes principales que repiten en su web o redes.
2. Cruza la tipología (incluida Facade Installer) con la franja de precio (Low / Medium / High) en una tabla resumen, desglosada también por ciudad y por canal (Retail/Proyectos), para verificar que esta pasada corrige el sesgo de las anteriores (0 registros Low, 40 No determinable de 105).
3. Cruza la tipología con la variable de exposición física (Sí/No) en una tabla resumen, desglosada también por ciudad, para ver cuántos actores por tipología y ciudad tienen espacio real donde exhibir material.
4. Crea un mapa de posicionamiento de todos los actores según precio (Low/Medium/High) y amplitud de servicio (solo diseño vs. diseño+instalación+suministro de materiales vs. diseño+construcción+promoción), uno para Retail y otro para Proyectos.
5. Dentro del bloque New Tashkent, analiza aparte: qué developers tienen mayor volumen de unidades en construcción/venta, qué estudios de arquitectura concentran más proyectos del masterplan, qué contratistas aparecen repetidamente, y qué instaladores de fachadas están mejor posicionados para un acuerdo de suministro de Dekton — esto marca a los actores con mayor capacidad de prescripción de material a gran escala.
6. Basándote en el mapa y en la tabla de exposición física, identifica los 10-12 candidatos prioritarios totales (retail + proyectos) para que Cosentino coloque muestras o firme acuerdos de prescripción. Aunque el dataset ahora cubre las 3 franjas de precio para tener panorama de mercado completo, los candidatos prioritarios deben seguir priorizando el ajuste medium-to-high con Silestone/Dekton/Sensa y la exposición física confirmada, asegurando representación de Tashkent, al menos una ciudad secundaria, y al menos un Facade Installer si la evidencia lo justifica. Los actores de gama baja se documentan y analizan pero solo entran como candidato prioritario si hay una razón táctica específica (p. ej. volumen muy alto, señales claras de estar subiendo de gama).
7. Para esos candidatos prioritarios, sugiere el ángulo de entrada con precios agresivos más adecuado, diferenciado por tipología:
   - Kitchen / Kitchen & Bath: exposición gratuita a cambio de exclusividad de marca en encimeras, descuento por volumen inicial
   - Interior Designer (Retail): comisión por venta referida, muestrario de bolsillo + acceso a catálogo digital para render/especificación
   - Interior Designer (Proyectos): acuerdo de especificación técnica preferente en show-flats/hostelería/oficinas, soporte técnico y muestras para propuestas a cliente final
   - Architecture Studio: acuerdo de especificación técnica preferente en proyectos, soporte técnico y muestras para propuestas a cliente final
   - Contractor: precios de volumen para obra, condiciones de pago a proyecto
   - Developer: acuerdo marco de suministro para pisos piloto / show-flats de New Tashkent, con opción de escalar a suministro de fase completa si el material tiene buena acogida comercial
   - Facade Installer: acuerdo de suministro de Dekton para fachadas ventiladas (línea Dekton Slim/Fachadas), soporte técnico de instalación, formación del equipo instalador, y un proyecto piloto visible en un desarrollo de New Tashkent como escaparate comercial

ENTREGA:
Devuelve el informe completo por duplicado en dos idiomas: inglés y ruso, con la misma estructura y contenido en ambos.

Estructura todos los datos recopilados en DOS bases de datos separadas por canal, cada una consolidada según el PASO 1 (dataset previo + hallazgos nuevos, deduplicado):
- `retail_dataset` (CSV y JSON): una fila/registro por punto de venta del canal Retail, con todos los campos extraídos (incluida la franja de precio Low/Medium/High).
- `proyectos_dataset` (CSV y JSON): una fila/registro por actor del canal Proyectos, con los mismos campos.
- Una tabla aparte, una fila por proyecto/desarrollo de New Tashkent (no por empresa), con los campos descritos en el bloque de proyectos en sí.
- Los resultados de los 7 puntos del ANÁLISIS.

Con esas dos bases de datos, construye UN ÚNICO dashboard HTML interactivo (`index.html`), autocontenido (CSS/JS embebido, sin dependencias externas):

- PANTALLA DE PORTADA (cover) al abrir el archivo: pregunta si se quiere entrar en la sección **Retail** o en la sección **Proyectos**, con un botón para cada una. Es un cambio de "modo" dentro del mismo archivo (arquitectura de pestañas/estado, sin recargar página, cargando `retail_dataset` o `proyectos_dataset` según la elección), no dos sitios distintos.
- Sección **Retail**: los puntos de venta de las 4 ciudades (Kitchen, Kitchen & Bath, Interior Designer, Showroom, Híbrido) en las 3 franjas de precio. Incluye su propio mapa de posicionamiento (precio Low/Medium/High × amplitud de servicio, o precio × fit con la propuesta de valor Dekton/Silestone/Sensa), filtros por ciudad/tipología/franja de precio/exposición física/prioridad, y ficha completa por actor.
- Sección **Proyectos**: canal proyectos (New Tashkent y cualquier otro proyecto de la misma escala que se identifique) — developers, contratistas/constructoras, instaladores de fachadas, estudios de arquitectura, bureaus de interiorismo de show-flats — con su propio mapa de posicionamiento para priorizar qué perfiles abordar primero. Incluye una PESTAÑA APARTE con el listado de los proyectos/desarrollos en sí (no las empresas): nombre del proyecto, promotor, ubicación, estado (en construcción / anunciado / en venta / entregado), escala y fecha estimada de ejecución en los próximos años.
- Un actor con `canal_secundario` (presente en ambas bases) debe ser visible y consultable desde las dos secciones, dejando claro que es el mismo actor.
- Dentro de cada sección, un enlace/botón visible para volver a la portada o cambiar de modo Retail ⇄ Proyectos sin salir del archivo.
- Ambas secciones deben quedar filtrables y cruzables (ciudad, tipología, canal, exposición física, franja de precio, prioridad), permitir consultar la ficha completa de cada punto de venta/actor o desarrollo, exportar a CSV, y ofrecer selector de idioma EN/RU.
```

---

## Antes de ejecutar

1. Revisa este `prompt2_0.md` — confirmar o ajustar el prompt de ejecución antes de lanzarlo.
2. Solo después de tu aprobación se ejecuta la búsqueda (consumirá tokens/tiempo de sesión y créditos de Firecrawl, igual que las pasadas anteriores, aunque ahora con más margen al ser plan de pago).
3. Solo después de tener resultados y de tu revisión del dashboard resultante se sube nada a GitHub — ningún push se hará sin tu confirmación explícita.

---

## Ideas a valorar (no incluidas todavía en el prompt — para decidir antes de lanzar)

- **Talleres de fabricación e instalación de encimeras** (marmolistas / stone fabricators): son quienes realmente cortan y templan la piedra en obra, y hoy quedan diluidos dentro de "Contractor" o "Showroom". Podrían merecer tipología propia dentro de Retail o Proyectos, ya que son un canal de prescripción tan directo como el instalador de fachadas.
- **Distribuidores de sanitarios/griferío de gama media-alta**: partners naturales para venta cruzada de encimeras de baño en Kitchen & Bath.
- **Sector hostelero (hoteles, restaurantes)** como sub-canal emergente de Proyectos: Dekton y Silestone se usan cada vez más en hostelería, y en Uzbekistán hay varios desarrollos hoteleros ligados a New Tashkent y al turismo en Samarkand/Bukhara.
- **Ferias y eventos sectoriales en Uzbekistán** (ferias de mobiliario/construcción tipo InterHouse Uzbekistan o similares) como fuente adicional de directorios de expositores — útil para `firecrawl-map` sobre la web de la feria en busca de listados de empresas ya segmentadas.

Dime si quieres que añada alguna de estas al prompt antes de lanzar la búsqueda, o si prefieres lanzarlo tal cual está y valorarlas en una cuarta pasada.
