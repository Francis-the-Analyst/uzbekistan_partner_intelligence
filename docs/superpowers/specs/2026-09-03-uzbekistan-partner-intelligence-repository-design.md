# Uzbekistan Partner Intelligence — diseño del repositorio completo

Fecha: 3 de septiembre de 2026  
Propietario: Francisco González  
Estado: pendiente de revisión y aprobación antes de implementar o publicar

## 1. Objetivo

Crear un repositorio único y trazable que conserve todo el estudio de investigación realizado sobre Uzbekistán y publique una aplicación web ejecutiva para convertir esa investigación en decisiones comerciales.

El repositorio remoto previsto es:

`git@github.com:Francis-the-Analyst/Uzbekistan_partner_intelligence.git`

La aplicación será estática, sin backend ni compilación obligatoria, y se desplegará en Vercel desde `UZ_partner_intelligence_new/`.

## 2. Alcance del repositorio

Se conservará el estudio completo, no solo la web final:

- datasets Retail, Proyectos y desarrollos, incluidas las versiones históricas;
- informes de investigación en inglés y ruso;
- notas, hallazgos, evidencias, fuentes y archivos de progreso;
- dashboards y prototipos anteriores como referencia histórica;
- scripts de preparación y transformación de datos;
- aplicación web final, documentación, pruebas y manual de uso;
- metodología del modelo de prioridad y decisiones de diseño.

Solo se excluirán mediante `.gitignore`:

- credenciales, tokens y archivos `.env`;
- logs de ejecución regenerables;
- temporales del sistema o del editor;
- dependencias o artefactos generados que puedan reconstruirse.

No se eliminará ni excluirá información sustantiva del estudio.

## 3. Estructura propuesta

La estructura actual se conservará para no perder trazabilidad. Se añadirán únicamente los archivos de publicación necesarios:

```text
Uzbekistan_partner_intelligence/
├── UZ_partner_intelligence_new/    # sitio que publicará Vercel
│   ├── index_R_P.html              # portada y selector de canal
│   ├── proposal_A.html             # Executive Intelligence
│   ├── proposal_B.html             # Market Command Center
│   ├── app-core.js                 # lógica compartida
│   ├── data.js                     # datos consolidados para la web
│   ├── base.css
│   ├── proposal_A.css
│   ├── proposal_B.css
│   ├── assets/
│   └── tests/
├── data/                           # fuentes anteriores
├── data_v2/                        # investigación y transformaciones v2
├── data_v3/                        # fuente de verdad vigente
├── index_v2/                       # versiones anteriores
├── docs/                           # diseño, método y despliegue
├── report_en*.md                   # informes en inglés
├── report_ru*.md                   # informes en ruso
├── prompt*.md                      # instrucciones y alcance histórico
├── README.md                       # entrada general al repositorio
├── vercel.json                     # configuración del despliegue
└── .gitignore
```

## 4. Portada

`UZ_partner_intelligence_new/index_R_P.html` será la entrada pública. Mostrará:

- `Uzbekistan · Partner Intelligence` como título principal;
- `From market visibility to the next partner conversation.` como propuesta de valor;
- dos accesos directos: `Retail intelligence` y `Projects intelligence`;
- 169 actores Retail, 83 actores de Proyectos, 20 desarrollos y 4 ciudades Retail;
- selector entre las propuestas A y B, identificando A como la recomendada para el Comité Ejecutivo;
- selector EN/RU con persistencia durante la sesión;
- un módulo compacto con Silestone, Dekton, Eclos y Sensa;
- animación inicial breve, desactivada cuando el sistema solicite movimiento reducido.

En la caba superior, inmediatamente después del wordmark COSENTINO, aparecerá siempre:

`Market research & dashboard created by Francisco González`

`Francisco González` aparecerá en negrita. La cabecera se mantendrá en la portada, Retail, Proyectos, desarrollos y fichas de detalle. COSENTINO enlazará a su web oficial.

## 5. Canales de inteligencia

### Retail

Usará `data_v3/retail_dataset.json` como fuente vigente de 169 actores. Incluirá:

- positioning map sin solapamiento;
- listado completo de cuentas;
- priority shortlist;
- coverage por ciudad, tipología, precio y showroom;
- competitive landscape;
- filtros combinables y búsqueda;
- exportación CSV de la vista filtrada;
- dossier lateral con evidencias, contactos, marcas detectadas y siguiente acción recomendada.

### Proyectos

Usará `data_v3/proyectos_dataset.json` como fuente vigente de 83 actores. Tendrá las mismas vistas analíticas adaptadas al canal de especificación y una pestaña adicional `Project developments`.

El modelo de prioridad valorará especialmente:

- capacidad para especificar materiales;
- papel del actor: developer, contractor, facade installer, architecture studio o interior designer;
- relación evidenciada con New Tashkent u otros desarrollos relevantes;
- escala y encaje potencial de Dekton para fachadas o cladding;
- estado y horizonte temporal;
- calidad de la evidencia y contactabilidad.

## 6. Project developments y seguimiento temporal

La pestaña `Project developments` usará exclusivamente los 20 registros de `data_v3/new_tashkent_projects_v3.json`; no los mezclará con los 83 actores.

Cada proyecto mostrará:

- nombre, developer y localización;
- estado original encontrado en la investigación;
- fase normalizada para facilitar comparación: `Specification`, `Announced / concept`, `Design`, `Tender / procurement`, `On going / construction`, `Finishing`, `Completed` o `Unknown`;
- fecha o periodo estimado de entrega;
- escala, notas y fuente;
- grado de certeza de la fecha: oficial, fuente secundaria, estimación o no determinado;
- lectura de oportunidad temporal;
- riesgo o dato pendiente de validar;
- siguiente acción comercial recomendada.

La fase normalizada y las recomendaciones serán inferencias visibles y separadas de los datos verificados. Nunca se presentarán como hechos cuando la fuente no lo permita.

Los filtros incluirán estado, fase, developer y horizonte temporal. Una clasificación de timing permitirá distinguir:

- `Act now`: especificación, licitación o comienzo de obra;
- `Engage`: construcción activa con margen para acabados o fachada;
- `Monitor`: concepto, anuncio o fecha lejana;
- `Validate`: información contradictoria, insuficiente o sin fecha;
- `Closed / reference`: finalizado, útil como antecedente pero no como oportunidad abierta.

## 7. Datos, evidencia y trazabilidad

`data_v3/` será la fuente de verdad de la aplicación. Las versiones anteriores permanecerán disponibles para auditoría, pero no sustituirán datos v3.

La interfaz distinguirá siempre:

- `Verified evidence`: contenido procedente del dataset o de una fuente registrada;
- `Commercial recommendation`: interpretación o acción sugerida;
- `Not evidenced in current research`: información ausente o no confirmada.

No se inventarán contactos, webs, estados, fechas, marcas ni relaciones comerciales. Todas las fuentes accionables abrirán su URL original.

## 8. Experiencia y accesibilidad

Ambas propuestas compartirán datos, filtros, navegación y comportamiento. Solo cambiarán la dirección visual y la composición.

- Propuesta A: clara, mineral, editorial y sobria.
- Propuesta B: oscura, inmersiva y orientada a señales de mercado.

La navegación será operable con teclado, tendrá foco visible y no dependerá solo del color. El drawer se cerrará mediante botón, Escape y overlay, devolviendo el foco al elemento que lo abrió. Se comprobarán las resoluciones 1440×900, 1280×800, 768×1024 y 390×844.

## 9. Modelo técnico

La aplicación seguirá siendo HTML, CSS y JavaScript puro para poder abrirse localmente y publicarse como sitio estático. `app-core.js` concentrará:

- estado de aplicación;
- diccionario EN/RU;
- filtros y búsqueda;
- scoring transparente;
- clasificación temporal de desarrollos;
- collision avoidance del mapa;
- drawers;
- exportación CSV;
- renderizado de vistas.

Los datasets se centralizarán en un único `data.js` generado desde las fuentes v3 para evitar copias divergentes.

## 10. Validación

Antes de publicar se comprobará:

1. Conteos exactos: 169 Retail, 83 Proyectos y 20 desarrollos.
2. IDs únicos y recuperación completa al restablecer filtros.
3. Sincronización de KPI, mapas, tablas y shortlist.
4. Separación mínima de puntos y acceso a todas las cuentas.
5. Estados, fases y fechas sin alterar el significado de la fuente.
6. Diferenciación entre evidencia e inferencia comercial.
7. Funcionamiento del drawer con ratón y teclado.
8. EN/RU y persistencia durante la sesión.
9. CSV correcto para Retail, Proyectos y desarrollos.
10. Funcionamiento local y mediante servidor HTTP.
11. Ausencia de errores JavaScript en consola.
12. Capturas de portada y vistas clave en escritorio y móvil.

## 11. GitHub y Vercel

Después de la aprobación y las pruebas:

1. Se creará `.gitignore` sin excluir material de investigación.
2. Se añadirá un `README.md` general que explique el estudio y cómo navegarlo.
3. Se inicializará Git en la raíz actual.
4. Se vinculará `origin` con `git@github.com:Francis-the-Analyst/Uzbekistan_partner_intelligence.git`.
5. Se realizará un commit inicial con el repositorio completo.
6. El push se hará únicamente con autorización expresa de Francisco González.
7. Vercel publicará `UZ_partner_intelligence_new/` como sitio estático.

Para completar la publicación será necesario que esta máquina tenga acceso SSH al repositorio de GitHub y una sesión/autorización válida de Vercel. Ninguna credencial se guardará dentro del repositorio.

## 12. Fuera de alcance sin una autorización adicional

- modificar o borrar archivos históricos;
- realizar nueva investigación web para completar datos ausentes;
- convertir recomendaciones en datos verificados;
- hacer público el repositorio si contiene investigación que deba permanecer privada;
- hacer push o desplegar en Vercel antes de la aprobación final.

