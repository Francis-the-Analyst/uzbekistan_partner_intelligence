# Prompt — Identificación de puntos de venta retail y proyectos en Uzbekistán

## GESTIÓN DE SESIÓN Y CHECKPOINTS (leer antes de empezar)

Si durante la ejecución de esta tarea alcanzas el 95% de los tokens disponibles en la sesión actual, detente inmediatamente (no intentes terminar el bloque en curso a toda prisa) y guarda un archivo `checkpoint.md` en esta misma carpeta con:
- Todos los resultados ya recopilados hasta ese momento, en tabla completa, con todos los campos extraídos por punto de venta/actor.
- Qué ciudades, tipologías y bloques (canal retail o canal proyectos New Tashkent) ya se han completado y cuáles quedan pendientes.
- El análisis ya elaborado hasta ese punto, si se ha empezado (segmentación, tabla de exposición física, mapa de posicionamiento, candidatos prioritarios).
- Un resumen claro de "próximos pasos" que indique exactamente por dónde continuar.

La ventana de tokens de la sesión se renueva en 2 horas y 20 minutos. Al reanudar la tarea en la siguiente ventana, léase primero `checkpoint.md` y úsese como punto de partida: no repetir búsquedas ni scrapes ya hechos, no perder el trabajo avanzado, y continuar completando únicamente lo pendiente hasta finalizar el informe completo (incluida la entrega final duplicada en inglés y ruso).

---

## Prompt de ejecución

```
CONTEXTO: Soy Export Sales Manager de Cosentino (superficies premium: Silestone, Dekton, Sensa). Buscamos entrar en el canal retail y proyectos en Uzbekistán, colocando muestras y materiales en exposición en puntos de venta medium-to-high end, con una estrategia de precios agresiva de entrada. Cubrimos las 4 ciudades más pobladas del país: Tashkent (~3.1M hab., capital y mercado prioritario), Namangan (~714K), Samarkand (~596K) y Andiján (~492K).

Adicionalmente, en Tashkent se está desarrollando el macroproyecto NEW TASHKENT (Yangi Toshkent) — un nuevo distrito urbano de gran escala con desarrollos residenciales, comerciales y administrativos. Este proyecto abre un canal de entrada B2B/proyectos (promotoras, contratistas generales, estudios de arquitectura) independiente del canal retail tradicional, y debe tratarse como un bloque de búsqueda propio.

BÚSQUEDA — CANAL RETAIL (4 ciudades):
Busca, para cada una de las 4 ciudades, los siguientes tipos de punto de venta / actor, ampliando el alcance más allá de cocinas y baños:
- Estudios de cocina (kitchen studios)
- Estudios de cocina & baño combinados (kitchen & bath)
- Estudios/bureaus de diseño de interiores (interior design studios)
- Estudios de arquitectura (architecture studios / bureaus)
- Constructoras / contratistas generales (construction companies / general contractors)
- Promotoras inmobiliarias / developers (real estate developers)
- Showrooms de materiales premium (piedra, cuarzo, porcelánico, mármol)

Enfócate en el segmento medium-to-high end (no ferreterías genéricas ni distribuidores de gama baja).

BÚSQUEDA — CANAL PROYECTOS (New Tashkent):
Identifica específicamente actores vinculados al desarrollo de New Tashkent / Yangi Toshkent:
- Promotoras (developers) con proyectos activos o anunciados en el distrito
- Contratistas generales / constructoras ejecutando obra en la zona
- Estudios de arquitectura e ingeniería que firman o han firmado proyectos del masterplan
- Bureaus de diseño de interiores contratados para show-flats / pisos piloto / apartamentos modelo de los desarrollos residenciales

Este bloque debe tratarse como un segmento propio en el análisis (canal proyectos), no mezclado con el retail tradicional.

FUENTES: Busca tanto en páginas web como en redes sociales (Instagram, Facebook, Telegram — Telegram es muy usado en Uzbekistán para negocios B2B y de construcción), ya que muchos estudios boutique y actores del sector proyectos operan principalmente a través de redes sociales o canales de Telegram sin web propia. Si un perfil no se puede scrapear por completo (muro de login), extrae la información disponible en el snippet de búsqueda y en la bio/descripción pública.

IMPORTANTE - IDIOMAS: Realiza búsquedas en ruso, uzbeko e inglés:
- Ruso (idioma habitual de negocios en el segmento premium): "дизайн интерьера Ташкент", "кухни на заказ Ташкент", "студия дизайна Самарканд", "архитектурное бюро Ташкент", "строительная компания Ташкент", "застройщик Новый Ташкент"
- Uzbeko: "interyer dizayni studiyasi Toshkent", "oshxona studiyasi", "arxitektura byurosi", "qurilish kompaniyasi", "Yangi Toshkent loyihasi"
- Inglés: "interior design studio Tashkent", "kitchen showroom Samarkand", "architecture bureau Tashkent", "New Tashkent developer", "New Tashkent contractor"
No descartes ningún resultado por el idioma de la web o del perfil.

VOLUMEN DE RESULTADOS:
- Mínimo 15-20 resultados distintos por ciudad en el canal retail (60-80 en total entre las 4 ciudades), distribuidos entre las 6 tipologías.
- Bloque adicional de 10-15 actores específicos del canal proyectos New Tashkent (promotoras, contratistas, estudios de arquitectura, bureaus de interiorismo vinculados al desarrollo).

Para cada resultado, extrae con firecrawl_scrape el contenido completo (web y/o publicaciones/bio de red social/Telegram en formato markdown), y además:
- Nombre del negocio
- Ciudad
- Tipología: clasifícalo obligatoriamente en una de estas categorías — Kitchen / Kitchen & Bath / Interior Designer / Architecture Studio / Contractor / Developer / Híbrido (especifica qué combina si es híbrido)
- Canal: Retail o Proyectos (New Tashkent u otro proyecto identificado)
- Exposición física: indica si tiene showroom, sala de exposición o piso/apartamento modelo visible donde se podrían colocar muestras de material (Sí / No / No determinable), citando la evidencia (fotos del local, dirección física, mención explícita de "showroom", "выставочный зал" o "sample apartment / show-flat")
- Email y/o teléfono de contacto si están visibles
- Dirección
- Canal principal de publicación (web propia / Instagram / Facebook / Telegram / varios)
- Idioma en que está publicado el contenido

ANÁLISIS:
1. Agrupa los puntos de venta/actores en segmentos según su propuesta de valor real (no según el nombre): rango de precio aproximado, tipo de cliente al que se dirigen, marcas/materiales con los que ya trabajan (si se detectan competidores como cuarzo turco, granito local, porcelánico chino/turco, mármol uzbeko, etc.), y los 2-3 mensajes principales que repiten en su web o redes.
2. Cruza la tipología (Kitchen / Kitchen & Bath / Interior Designer / Architecture Studio / Contractor / Developer / Híbrido) con la variable de exposición física (Sí/No) en una tabla resumen, desglosada también por ciudad, para ver cuántos actores por tipología y ciudad tienen espacio real donde exhibir material.
3. Crea un mapa de posicionamiento de todos los actores según precio (bajo-medio-alto) y amplitud de servicio (solo diseño vs. diseño+instalación+suministro de materiales vs. diseño+construcción+promoción).
4. Dentro del bloque New Tashkent, analiza aparte: qué developers tienen mayor volumen de unidades en construcción/venta, qué estudios de arquitectura concentran más proyectos del masterplan, y qué contratistas aparecen repetidamente — esto marca a los actores con mayor capacidad de prescripción de material a gran escala.
5. Basándote en el mapa y en la tabla de exposición física, identifica los 10-12 candidatos prioritarios totales (retail + proyectos) para que Cosentino coloque muestras o firme acuerdos de prescripción, priorizando los que sí tienen exposición física confirmada y encajan en el nicho medium-to-high end, y asegurando representación de Tashkent y al menos una ciudad secundaria.
6. Para esos candidatos prioritarios, sugiere el ángulo de entrada con precios agresivos más adecuado, diferenciado por tipología:
   - Kitchen / Kitchen & Bath: exposición gratuita a cambio de exclusividad de marca en encimeras, descuento por volumen inicial
   - Interior Designer: comisión por venta referida, muestrario de bolsillo + acceso a catálogo digital para render/especificación
   - Architecture Studio: acuerdo de especificación técnica preferente en proyectos, soporte técnico y muestras para propuestas a cliente final
   - Contractor: precios de volumen para obra, condiciones de pago a proyecto
   - Developer: acuerdo marco de suministro para pisos piloto / show-flats de New Tashkent, con opción de escalar a suministro de fase completa si el material tiene buena acogida comercial

ENTREGA:
Devuelve el informe completo por duplicado en dos idiomas: inglés y ruso, con la misma estructura y contenido en ambos.

Además del informe narrativo, estructura todos los datos recopilados (ficha completa de cada punto de venta/actor, con todos los campos extraídos, más los resultados de los 6 puntos del ANÁLISIS) en un dataset limpio y normalizado (tabla única en CSV o JSON, una fila/registro por punto de venta/actor, columnas consistentes: ciudad, tipología, canal, exposición física, precio, amplitud de servicio, contacto, dirección, fuente, idioma, segmento, prioridad, ángulo de entrada, etc.). Este dataset debe quedar preparado como fuente de datos para construir después un dashboard interactivo tipo web, donde se pueda filtrar y cruzar por ciudad, tipología, canal (retail/proyectos), exposición física, rango de precio y prioridad, y consultar la ficha completa de cada punto de venta/actor.
```

---

## Cambios clave respecto al prompt original (Bakú)

- 1 ciudad → 4 ciudades (Tashkent, Namangan, Samarkand, Andiján), con desglose por ciudad en la tabla de exposición.
- Tipologías ampliadas de 4 a 7: se añaden Estudio de Arquitectura, Constructora/Contratista y Promotora/Developer.
- Nuevo bloque "canal proyectos" dedicado a New Tashkent, con búsqueda y análisis separados del retail tradicional.
- Se añade Telegram como fuente (muy relevante en Uzbekistán para B2B/construcción) y uzbeko como tercer idioma de búsqueda.
- Volumen de resultados escalado a 4 ciudades (60-80 retail + 10-15 proyectos) en vez de 40 en una sola ciudad.
- Ángulos de entrada con precios agresivos diferenciados por las 6 tipologías (antes solo 4).

---

## Resultado de la v1 y motivo de la v2

La v1 se ejecutó completa (no hubo corte por tokens: no se generó `checkpoint.md`), pero quedó desequilibrada:

- **Cocinas muy infrarrepresentadas:** solo 6 "Kitchen" + 6 "Kitchen & Bath" = 12 de 105 registros totales, y solo 2 en Tashkent (la ciudad prioritaria) — pese a que el usuario ha visitado tiendas de cocina físicamente allí y sabe que hay más. Causa probable: estudios de cocina en Uzbekistán operan mucho vía Instagram/Telegram sin web propia, y varias webs relevantes bloquearon el scraping (blackwood.uz, studio-mint.pro, luxhouse.uz, azengroup.uz).
- **New Tashkent sesgado hacia arquitectura de masterplan, no ejecución real:** de los 15 registros del canal proyectos, 10 son bureaus internacionales del consorcio de masterplan (Cross Works, Buro Happold, Gillespies, Zaha Hadid, etc.) y solo 2 developers + 2 híbridos tocan construcción/EPC real. Contratistas generales en ejecución están casi ausentes.
- Además, en esta sesión se agotó la disponibilidad de Firecrawl, así que la v2 cambia de herramienta: **WebSearch (descubrir URLs) + WebFetch (extraer contenido de una URL ya conocida)** en vez de `firecrawl_search` / `firecrawl_scrape`.

La v2 también cambia el entregable: en vez de un único dashboard combinado (vista interna + vista partner), ahora son **dos dashboards independientes por canal** — uno de retail (puntos de venta) y otro de proyectos — cada uno con su propio mapa de posicionamiento, y el de proyectos con una pestaña adicional de listado de proyectos (obras) en sí, no solo de los actores/empresas.

---

## Prompt de ejecución v2 (WebSearch + WebFetch, sin límite de resultados, dos dashboards)

```
CONTEXTO: Soy Export Sales Manager de Cosentino (superficies premium: Silestone, Dekton, Sensa). Buscamos entrar en el canal retail y proyectos en Uzbekistán, colocando muestras y materiales en exposición en puntos de venta medium-to-high end, con una estrategia de precios agresiva de entrada. Cubrimos las 4 ciudades más pobladas del país: Tashkent (~3.1M hab., capital y mercado prioritario), Namangan (~714K), Samarkand (~596K) y Andiján (~492K).

Adicionalmente, en Tashkent se está desarrollando el macroproyecto NEW TASHKENT (Yangi Toshkent) — un nuevo distrito urbano de gran escala con desarrollos residenciales, comerciales y administrativos. Este proyecto abre un canal de entrada B2B/proyectos (promotoras, contratistas generales, estudios de arquitectura) independiente del canal retail tradicional, y debe tratarse como un bloque de búsqueda propio.

HERRAMIENTAS: No hay acceso a Firecrawl en esta sesión. Usa exclusivamente:
- WebSearch para DESCUBRIR — lanza las queries en ruso/uzbeko/inglés de más abajo y reúne las URLs candidatas (sitios web, perfiles de Instagram/Facebook indexados, canales de Telegram indexados, directorios como Yandex Maps / 2GIS / Golden Pages Uzbekistan).
- WebFetch para EXTRAER — una vez tengas la URL, haz fetch de cada página candidata para sacar el contenido completo. Si una página bloquea el acceso o exige login, no la descartes: usa el snippet/descripción que WebSearch ya te devolvió como fuente de esos campos y marca el campo como "No determinable" solo si de verdad no hay dato ni en snippet ni en la página.

BÚSQUEDA — CANAL RETAIL (4 ciudades):
Busca, para cada una de las 4 ciudades, los siguientes tipos de punto de venta / actor, ampliando el alcance más allá de cocinas y baños:
- Estudios de cocina (kitchen studios) — REFUERZO PRIORITARIO: esta tipología quedó muy infrarrepresentada en la pasada anterior. Dedica queries específicas por ciudad ("кухни на заказ [ciudad]", "кухонная студия [ciudad]", "oshxona studiyasi [ciudad]", "фабрика кухонь [ciudad]", "мебель для кухни [ciudad]"), revisa directorios locales (2GIS, Yandex Maps) y hashtags de Instagram/Telegram en ruso y uzbeko, no solo webs propias.
- Estudios de cocina & baño combinados (kitchen & bath)
- Estudios/bureaus de diseño de interiores (interior design studios)
- Estudios de arquitectura (architecture studios / bureaus)
- Constructoras / contratistas generales (construction companies / general contractors)
- Promotoras inmobiliarias / developers (real estate developers)
- Showrooms de materiales premium (piedra, cuarzo, porcelánico, mármol)

Enfócate en el segmento medium-to-high end (no ferreterías genéricas ni distribuidores de gama baja).

BÚSQUEDA — CANAL PROYECTOS (New Tashkent):
Identifica específicamente actores vinculados al desarrollo de New Tashkent / Yangi Toshkent:
- Promotoras (developers) con proyectos activos o anunciados en el distrito
- Contratistas generales / constructoras ejecutando obra en la zona — REFUERZO PRIORITARIO: la pasada anterior devolvió sobre todo bureaus de arquitectura del masterplan y casi ningún contratista de ejecución real. Busca específicamente noticias de prensa rusa/uzbeka sobre inicio de obras, colocación de primera piedra, avance de construcción ("подрядчик Новый Ташкент", "строительство Нового Ташкента ход работ", "Yangi Toshkent qurilish holati"), no solo la web oficial del masterplan.
- Estudios de arquitectura e ingeniería que firman o han firmado proyectos del masterplan
- Bureaus de diseño de interiores contratados para show-flats / pisos piloto / apartamentos modelo de los desarrollos residenciales

Este bloque debe tratarse como un segmento propio en el análisis (canal proyectos), no mezclado con el retail tradicional.

Además, para el canal proyectos, identifica también los PROYECTOS EN SÍ (no solo las empresas): nombre del desarrollo/distrito/fase, promotor, ubicación dentro de New Tashkent, estado (en construcción / anunciado / en venta / entregado), escala (nº de unidades, hectáreas, fases) y fecha estimada de entrega o ejecución en los próximos años, con la fuente de esa información.

FUENTES: Busca tanto en páginas web como en redes sociales (Instagram, Facebook, Telegram — Telegram es muy usado en Uzbekistán para negocios B2B y de construcción), ya que muchos estudios boutique y actores del sector proyectos operan principalmente a través de redes sociales o canales de Telegram sin web propia. Si un perfil no se puede acceder completamente (muro de login), extrae la información disponible en el snippet de búsqueda y en la bio/descripción pública.

IMPORTANTE - IDIOMAS: Realiza búsquedas en ruso, uzbeko e inglés:
- Ruso (idioma habitual de negocios en el segmento premium): "дизайн интерьера Ташкент", "кухни на заказ Ташкент", "кухонная студия Ташкент", "студия дизайна Самарканд", "архитектурное бюро Ташкент", "строительная компания Ташкент", "застройщик Новый Ташкент", "подрядчик Новый Ташкент"
- Uzbeko: "interyer dizayni studiyasi Toshkent", "oshxona studiyasi", "arxitektura byurosi", "qurilish kompaniyasi", "Yangi Toshkent loyihasi", "Yangi Toshkent qurilish holati"
- Inglés: "interior design studio Tashkent", "kitchen showroom Samarkand", "architecture bureau Tashkent", "New Tashkent developer", "New Tashkent contractor", "New Tashkent construction progress"
No descartes ningún resultado por el idioma de la web o del perfil.

VOLUMEN DE RESULTADOS: Sin tope superior — devuélveme TODOS los actores distintos y verificables que encuentres por ciudad y tipología, no te detengas en un mínimo. Como referencia de calidad mínima (no de límite): al menos 15-20 resultados distintos por ciudad en el canal retail y 10-15 actores en el canal proyectos, pero si encuentras más, inclúyelos todos.

Para cada resultado, extrae con WebFetch el contenido completo (web y/o publicaciones/bio de red social/Telegram en formato markdown/texto), y además:
- Nombre del negocio
- Ciudad
- Tipología: clasifícalo obligatoriamente en una de estas categorías — Kitchen / Kitchen & Bath / Interior Designer / Architecture Studio / Contractor / Developer / Híbrido (especifica qué combina si es híbrido)
- Canal: Retail o Proyectos (New Tashkent u otro proyecto identificado)
- Exposición física: indica si tiene showroom, sala de exposición o piso/apartamento modelo visible donde se podrían colocar muestras de material (Sí / No / No determinable), citando la evidencia (fotos del local, dirección física, mención explícita de "showroom", "выставочный зал" o "sample apartment / show-flat")
- Email y/o teléfono de contacto si están visibles
- Dirección
- Canal principal de publicación (web propia / Instagram / Facebook / Telegram / varios)
- Idioma en que está publicado el contenido

ANÁLISIS:
1. Agrupa los puntos de venta/actores en segmentos según su propuesta de valor real (no según el nombre): rango de precio aproximado, tipo de cliente al que se dirigen, marcas/materiales con los que ya trabajan (si se detectan competidores como cuarzo turco, granito local, porcelánico chino/turco, mármol uzbeko, etc.), y los 2-3 mensajes principales que repiten en su web o redes.
2. Cruza la tipología (Kitchen / Kitchen & Bath / Interior Designer / Architecture Studio / Contractor / Developer / Híbrido) con la variable de exposición física (Sí/No) en una tabla resumen, desglosada también por ciudad, para ver cuántos actores por tipología y ciudad tienen espacio real donde exhibir material.
3. Crea un mapa de posicionamiento de todos los actores según precio (bajo-medio-alto) y amplitud de servicio (solo diseño vs. diseño+instalación+suministro de materiales vs. diseño+construcción+promoción).
4. Dentro del bloque New Tashkent, analiza aparte: qué developers tienen mayor volumen de unidades en construcción/venta, qué estudios de arquitectura concentran más proyectos del masterplan, y qué contratistas aparecen repetidamente — esto marca a los actores con mayor capacidad de prescripción de material a gran escala.
5. Basándote en el mapa y en la tabla de exposición física, identifica los 10-12 candidatos prioritarios totales (retail + proyectos) para que Cosentino coloque muestras o firme acuerdos de prescripción, priorizando los que sí tienen exposición física confirmada y encajan en el nicho medium-to-high end, y asegurando representación de Tashkent y al menos una ciudad secundaria.
6. Para esos candidatos prioritarios, sugiere el ángulo de entrada con precios agresivos más adecuado, diferenciado por tipología:
   - Kitchen / Kitchen & Bath: exposición gratuita a cambio de exclusividad de marca en encimeras, descuento por volumen inicial
   - Interior Designer: comisión por venta referida, muestrario de bolsillo + acceso a catálogo digital para render/especificación
   - Architecture Studio: acuerdo de especificación técnica preferente en proyectos, soporte técnico y muestras para propuestas a cliente final
   - Contractor: precios de volumen para obra, condiciones de pago a proyecto
   - Developer: acuerdo marco de suministro para pisos piloto / show-flats de New Tashkent, con opción de escalar a suministro de fase completa si el material tiene buena acogida comercial

ENTREGA:
Devuelve el informe completo por duplicado en dos idiomas: inglés y ruso, con la misma estructura y contenido en ambos.

Estructura todos los datos recopilados (ficha completa de cada punto de venta/actor, con todos los campos extraídos, más los resultados de los 6 puntos del ANÁLISIS, más el listado de proyectos en sí de New Tashkent) en un dataset limpio y normalizado (CSV o JSON, una fila/registro por punto de venta/actor — y una tabla aparte, una fila por proyecto/desarrollo — con columnas consistentes: ciudad, tipología, canal, exposición física, precio, amplitud de servicio, contacto, dirección, fuente, idioma, segmento, prioridad, ángulo de entrada, etc.).

Con ese dataset, construye DOS dashboards HTML interactivos independientes (no uno solo combinado):

1. `index_retail.html` — canal retail: los puntos de venta de las 4 ciudades (Kitchen, Kitchen & Bath, Interior Designer, Architecture Studio, Contractor, Developer, Showroom, Híbrido). Incluye su propio mapa de posicionamiento (precio × amplitud de servicio, o precio × fit con la propuesta de valor Dekton/Silestone/Sensa) para identificar en qué perfiles centrarse primero, filtros por ciudad/tipología/exposición física/prioridad, y ficha completa por actor.

2. `index_proyectos.html` — canal proyectos (New Tashkent y cualquier otro proyecto de la misma escala que se identifique): los actores que ejecutan, desarrollan o prescriben (developers, contratistas/constructoras, estudios de arquitectura, bureaus de interiorismo de show-flats), con su propio mapa de posicionamiento para priorizar qué perfiles abordar primero. Además, una PESTAÑA APARTE con el listado de los proyectos/desarrollos en sí (no las empresas): nombre del proyecto, promotor, ubicación, estado (en construcción / anunciado / en venta / entregado), escala y fecha estimada de ejecución en los próximos años, para ver de un vistazo qué obras están o van a estar activas y con qué actor(es) están vinculadas.

Ambos dashboards deben quedar filtrables y cruzables (ciudad, tipología, canal, exposición física, rango de precio, prioridad) y permitir consultar la ficha completa de cada punto de venta/actor o, en el caso de proyectos, de cada desarrollo.
```

---

## Prompt — Consolidar en un único archivo + despliegue en Vercel

Nota de contexto: durante la conversación se pidió primero subir `index_retail.html` e `index_proyectos.html` a dos repositorios Git separados; a mitad de camino se cambió de idea. Este prompt sustituye esa primera indicación por la versión final. Antes de ejecutar, hay 3 puntos marcados como **A CONFIRMAR** más abajo que conviene resolver con el usuario — no asumirlos.

```
OBJETIVO: Fusionar index_retail.html e index_proyectos.html (ya construidos, tema oscuro, con mapa de posicionamiento, filtros, exportación CSV y — en el caso de proyectos — la pestaña "Projects pipeline") en un ÚNICO archivo HTML autocontenido, listo para desplegarse como sitio estático en Vercel.

PANTALLA DE PORTADA (cover):
- Mantener el título "Uzbekistan Retail & Projects — Partner Dashboard" SIN modificar (la idea inicial de añadirle "Creado por Francisco González" al final del título queda descartada a favor de lo siguiente).
- Cambiar la línea de subtítulo de "Preparado para Socio de Distribución y Ventas – Dekton · Silestone · Sensa · Eclos" a "Creado por Francisco Gonzalez para Socio de Distribución y Ventas – Dekton · Silestone · Sensa · Eclos", en todos los idiomas en los que exista esa línea (inglés y ruso — ver nota A CONFIRMAR #1 sobre el español).
- Sustituir el botón único "Panel de control abierto" / "Open dashboard" por DOS botones: uno abre el dashboard de Retail (dataset y pestañas de index_retail.html), el otro abre el dashboard de Proyectos (dataset y pestañas de index_proyectos.html, incluida la pestaña "Projects pipeline"). Todo dentro del mismo archivo, sin recargar página — es un cambio de "modo" (Retail / Proyectos) que reutiliza la arquitectura de pestañas ya existente, no una reconstrucción visual.
- Añadir dentro de cada dashboard (no solo en la portada) una forma visible de volver a la portada o cambiar de modo Retail ⇄ Proyectos.
- Conservar intacta toda la funcionalidad ya construida en ambos: mapa de posicionamiento, filtros (ciudad/categoría/segmento/cuadrante/marca competidora/rango), exportación CSV (con el mecanismo de fallback ya implementado para funcionar tanto en local como si el archivo se publica luego como Claude Artifact), selector de idioma EN/RU, panel de detalle (drawer).

ENTREGA: Un único archivo (nombrarlo `index.html` para que Vercel lo sirva sin configuración adicional) — todo el CSS/JS embebido, sin dependencias externas, igual que los archivos actuales.

DESPLIEGUE GIT:
- Esta carpeta de trabajo NO es todavía un repositorio Git — hará falta `git init`, configurar el remoto y hacer el primer commit + push.
- El repositorio final a usar (según la última indicación) se referencia como: `git remote set-url origin git@github.com:Francis-the-Analyst/nuevo-nombre.git` — ver A CONFIRMAR #2.
- El repositorio debe existir ya en GitHub (o crearse antes) y esta máquina debe tener acceso SSH configurado contra GitHub para poder hacer `git push`.
- Verificar que el resultado es compatible con Vercel: archivo estático en la raíz del repo (`index.html`), sin necesidad de build step ni `vercel.json` salvo que se quiera personalizar algo.

A CONFIRMAR ANTES DE EJECUTAR:
1. La captura de pantalla que se compartió muestra la portada en ESPAÑOL ("Preparado para...", "Panel de control abierto") — pero el archivo real solo tiene textos en inglés y ruso (EN/RU), nunca se construyó una versión en español. Es casi seguro que esa captura es una traducción automática del navegador (Chrome/Edge), no el contenido real del archivo. Confirmar: ¿el cambio de texto debe aplicarse a las cadenas EN/RU reales, o se quiere añadir además una versión en español (ES) como tercer idioma?
2. "nuevo-nombre" en la URL del repositorio — ¿es un placeholder a sustituir por el nombre real que aún falta decidir, o es literalmente el nombre del repo a usar?
3. Los dos repos mencionados al principio (`Uzbekistan_Retail`, `uzbekistan_project`) quedan descartados por la fusión en un solo archivo — confirmar que efectivamente ya no se van a usar.
```
