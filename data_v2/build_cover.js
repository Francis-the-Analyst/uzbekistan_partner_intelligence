// Assembles the final single-file index.html: a bilingual cover/landing page
// that lets the user choose Retail or Projects, each rendered in an iframe
// whose full HTML (retail/proyectos dashboards) is embedded base64-encoded
// inline so the whole deliverable stays one self-contained file.
const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, '..', 'index_v2');

const retailHtml = fs.readFileSync(path.join(DIR, 'index_retail.html'), 'utf8');
const proyectosHtml = fs.readFileSync(path.join(DIR, 'index_proyectos.html'), 'utf8');

const retailB64 = Buffer.from(retailHtml, 'utf8').toString('base64');
const proyectosB64 = Buffer.from(proyectosHtml, 'utf8').toString('base64');

const cover = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Uzbekistan Retail & Projects — Partner Dashboard</title>
<style>
:root{
  --stone-950:#f5ecdd; --stone-900:#e6dac2; --stone-700:#c7b89f; --stone-500:#a89c87; --stone-400:#786c58;
  --stone-300:#4a3c28; --stone-200:#362b1c; --stone-150:#2b2216; --stone-100:#171109;
  --paper:#241c14; --brand:#d97a48; --brand-dark:#b8602f; --brand-light:#f0a066; --brand-wash:rgba(217,122,72,.22);
  --line:#463823;
  --font:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;
  --font-display:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,"Times New Roman",serif;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0;height:100%}
body{
  font-family:var(--font); color:var(--stone-950); background:var(--stone-100);
  background-image:
    radial-gradient(1100px 560px at 102% -10%, var(--brand-wash) 0%, transparent 55%),
    radial-gradient(900px 520px at -8% 14%, rgba(138,131,119,.15) 0%, transparent 60%);
  background-repeat:no-repeat; background-attachment:fixed;
  -webkit-font-smoothing:antialiased; line-height:1.5;
}
a{color:var(--brand)}
button{font-family:inherit}
.hidden{display:none !important}

/* ---------- switcher bar (always visible once a dashboard is open) ---------- */
#switchbar{
  position:sticky; top:0; z-index:100; display:flex; align-items:center; gap:10px;
  padding:8px 16px; background:linear-gradient(115deg,#0f0b07 0%,#170f08 65%,#1c130a 100%);
  border-bottom:1px solid var(--line); box-shadow:0 1px 0 rgba(0,0,0,.5);
}
#switchbar .swtitle{font-family:var(--font-display); font-size:13.5px; color:var(--stone-700); margin-right:auto; white-space:nowrap; overflow:hidden; text-overflow:ellipsis}
#switchbar button{
  border:1px solid rgba(245,242,238,.22); background:rgba(245,242,238,.06); color:var(--stone-900);
  padding:6px 13px; border-radius:7px; font-size:12.5px; font-weight:700; cursor:pointer; letter-spacing:.01em;
  transition:background .12s;
}
#switchbar button:hover{background:rgba(245,242,238,.14)}
#switchbar button.active{background:var(--brand); border-color:var(--brand); color:#fff}
#switchbar #langsw{margin-left:6px; display:flex; gap:2px; background:rgba(245,242,238,.08); border-radius:8px; padding:2px}
#switchbar #langsw button{border:none; padding:5px 10px; border-radius:6px}
#switchbar #langsw button.active{background:var(--stone-700); color:#1a1108}

/* ---------- cover ---------- */
#cover{
  min-height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center;
  padding:48px 24px; text-align:center;
}
#cover .eyebrow{font-size:11px; letter-spacing:.16em; text-transform:uppercase; color:var(--brand-light); font-weight:700; margin:0 0 14px}
#cover h1{font-family:var(--font-display); font-size:clamp(28px,4.2vw,44px); font-weight:600; margin:0 0 14px; max-width:820px; letter-spacing:-.01em}
#cover .subtitle{font-size:15px; color:var(--stone-700); max-width:620px; margin:0 0 6px}
#cover .byline{font-size:13px; color:var(--stone-500); max-width:620px; margin:0 0 36px}
#cover .choices{display:flex; gap:22px; flex-wrap:wrap; justify-content:center; max-width:820px}
.choice{
  width:300px; text-align:left; background:var(--paper); border:1px solid var(--line); border-radius:16px;
  padding:26px 24px 24px; cursor:pointer; box-shadow:0 1px 2px rgba(0,0,0,.4), 0 10px 28px -8px rgba(0,0,0,.55);
  transition:transform .15s, box-shadow .15s, border-color .15s;
}
.choice:hover{transform:translateY(-3px); border-color:var(--brand); box-shadow:0 6px 16px rgba(0,0,0,.45), 0 24px 48px -14px rgba(0,0,0,.65)}
.choice .icon{font-size:26px; margin-bottom:12px; display:block}
.choice h2{font-family:var(--font-display); font-size:19px; margin:0 0 8px; color:var(--stone-950)}
.choice p{font-size:12.8px; color:var(--stone-500); margin:0 0 16px; line-height:1.55}
.choice .cta{font-size:12.5px; font-weight:700; color:var(--brand-light)}
#cover .langtoggle{display:flex; gap:2px; background:rgba(245,242,238,.08); border-radius:8px; padding:2px; margin-bottom:28px}
#cover .langtoggle button{border:none; background:transparent; color:var(--stone-500); padding:6px 14px; border-radius:6px; font-size:12px; font-weight:700; cursor:pointer}
#cover .langtoggle button.active{background:var(--brand); color:#fff}
#cover .confidential{margin-top:40px; font-size:10.8px; color:var(--stone-400); max-width:560px}

#frame{position:fixed; top:41px; left:0; right:0; bottom:0; width:100%; height:calc(100% - 41px); border:none; background:var(--stone-100)}
</style>
</head>
<body>

<div id="switchbar" class="hidden">
  <span class="swtitle" id="swtitle">Uzbekistan Retail &amp; Projects</span>
  <button data-go="cover" id="btnHome">🏠 <span data-i18n="nav_home">Home</span></button>
  <button data-go="retail" id="btnRetail"><span data-i18n="nav_retail">Retail</span></button>
  <button data-go="proyectos" id="btnProyectos"><span data-i18n="nav_projects">Projects</span></button>
  <div id="langsw">
    <button data-lang="en" class="active">EN</button>
    <button data-lang="ru">RU</button>
  </div>
</div>

<div id="cover">
  <div class="langtoggle">
    <button data-lang="en" class="active">EN</button>
    <button data-lang="ru">RU</button>
  </div>
  <p class="eyebrow" data-i18n="eyebrow">Cosentino — Uzbekistan market entry</p>
  <h1 data-i18n="title">Uzbekistan Retail &amp; Projects — Partner Dashboard</h1>
  <p class="subtitle" data-i18n="subtitle">Creado por Francisco Gonzalez para Socio de Distribución y Ventas – Dekton · Silestone · Sensa · Eclos</p>
  <p class="byline" data-i18n="byline">v2.0 — 147 retail accounts and New Tashkent project actors across Tashkent, Namangan, Samarkand and Andijan, plus the New Tashkent projects pipeline.</p>
  <div class="choices">
    <div class="choice" data-go="retail">
      <span class="icon">🛋️</span>
      <h2 data-i18n="retail_title">Retail dashboard</h2>
      <p data-i18n="retail_desc">Point-of-sale accounts across the 4 priority cities — kitchen, kitchen &amp; bath, interior design, architecture, contractors, developers and material showrooms, all three price tiers.</p>
      <span class="cta" data-i18n="open">Open →</span>
    </div>
    <div class="choice" data-go="proyectos">
      <span class="icon">🏗️</span>
      <h2 data-i18n="proj_title">Projects dashboard</h2>
      <p data-i18n="proj_desc">New Tashkent developers, contractors and architecture bureaus, plus a dedicated pipeline tab listing the developments themselves.</p>
      <span class="cta" data-i18n="open">Open →</span>
    </div>
  </div>
  <p class="confidential" data-i18n="confidential">Confidential — for internal use by the partner's sales organization only. Not for external distribution.</p>
</div>

<iframe id="frame" class="hidden"></iframe>

<script id="retail-b64" type="text/plain">${retailB64}</script>
<script id="proyectos-b64" type="text/plain">${proyectosB64}</script>

<script>
const I18N = {
  en: {
    nav_home:'Home', nav_retail:'Retail', nav_projects:'Projects',
    eyebrow:'Cosentino — Uzbekistan market entry',
    title:'Uzbekistan Retail &amp; Projects — Partner Dashboard',
    subtitle:'Creado por Francisco Gonzalez para Socio de Distribución y Ventas – Dekton · Silestone · Sensa · Eclos',
    byline:'v2.0 — 147 retail accounts and New Tashkent project actors across Tashkent, Namangan, Samarkand and Andijan, plus the New Tashkent projects pipeline.',
    retail_title:'Retail dashboard',
    retail_desc:'Point-of-sale accounts across the 4 priority cities — kitchen, kitchen &amp; bath, interior design, architecture, contractors, developers and material showrooms, all three price tiers.',
    proj_title:'Projects dashboard',
    proj_desc:'New Tashkent developers, contractors and architecture bureaus, plus a dedicated pipeline tab listing the developments themselves.',
    open:'Open →',
    confidential:"Confidential — for internal use by the partner's sales organization only. Not for external distribution.",
  },
  ru: {
    nav_home:'Главная', nav_retail:'Розница', nav_projects:'Проекты',
    eyebrow:'Cosentino — выход на рынок Узбекистана',
    title:'Узбекистан: розница и проекты — дашборд партнёра',
    subtitle:'Создано Франсиско Гонсалесом для партнёра по дистрибуции и отдела продаж – Dekton · Silestone · Sensa · Eclos',
    byline:'v2.0 — 147 розничных компаний и участников проекта New Tashkent в Ташкенте, Намангане, Самарканде и Андижане, плюс список проектов New Tashkent.',
    retail_title:'Дашборд розницы',
    retail_desc:'Точки продаж в 4 приоритетных городах — кухни, кухни и сантехника, дизайн интерьера, архитектура, подрядчики, застройщики и шоурумы материалов, все три ценовых сегмента.',
    proj_title:'Дашборд проектов',
    proj_desc:'Застройщики, подрядчики и архитектурные бюро New Tashkent, плюс отдельная вкладка со списком самих проектов.',
    open:'Открыть →',
    confidential:'Конфиденциально — только для внутреннего использования отделом продаж партнёра. Не для внешнего распространения.',
  }
};
let curLang = 'en';
function applyI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = I18N[curLang][key];
    if (val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('active', b.getAttribute('data-lang')===curLang));
}
document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => { curLang = b.getAttribute('data-lang'); applyI18n(); }));

function b64ToUtf8(b64){
  const binary = atob(b64);
  const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
  return new TextDecoder('utf-8').decode(bytes);
}

const frame = document.getElementById('frame');
const coverEl = document.getElementById('cover');
const switchbar = document.getElementById('switchbar');
let loadedRetail = null, loadedProyectos = null;

function show(view){
  document.querySelectorAll('#switchbar button[data-go]').forEach(b => b.classList.toggle('active', b.getAttribute('data-go')===view));
  if (view === 'cover'){
    coverEl.classList.remove('hidden');
    frame.classList.add('hidden');
    switchbar.classList.add('hidden');
    document.getElementById('swtitle').textContent = '';
    return;
  }
  coverEl.classList.add('hidden');
  frame.classList.remove('hidden');
  switchbar.classList.remove('hidden');
  if (view === 'retail'){
    document.getElementById('swtitle').textContent = curLang==='ru' ? 'Узбекистан — Розница' : 'Uzbekistan — Retail';
    if (!loadedRetail) loadedRetail = b64ToUtf8(document.getElementById('retail-b64').textContent.trim());
    frame.srcdoc = loadedRetail;
  } else if (view === 'proyectos'){
    document.getElementById('swtitle').textContent = curLang==='ru' ? 'Узбекистан — Проекты' : 'Uzbekistan — Projects';
    if (!loadedProyectos) loadedProyectos = b64ToUtf8(document.getElementById('proyectos-b64').textContent.trim());
    frame.srcdoc = loadedProyectos;
  }
}

document.querySelectorAll('[data-go]').forEach(el => el.addEventListener('click', () => show(el.getAttribute('data-go'))));

applyI18n();
show('cover');
</script>
</body>
</html>
`;

fs.writeFileSync(path.join(DIR, 'index.html'), cover, 'utf8');
console.log('Wrote index.html —', (cover.length/1024/1024).toFixed(2), 'MB total.');
