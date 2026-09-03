// Converts the 42 new flat records (new_records.json) into the bilingual,
// scored schema the existing index_retail.html DATA array expects (x/y
// positioning-map coordinates, quadrant, justifications, action text, EN+RU).
const fs = require('fs');
const path = require('path');
const newRecords = JSON.parse(fs.readFileSync(path.join(__dirname, 'new_records.json'), 'utf8'));

const CITY_RU = { Tashkent: 'Ташкент', Namangan: 'Наманган', Samarkand: 'Самарканд', Andijan: 'Андижан' };
const TYPOLOGY_RU = {
  'Kitchen': 'Кухни', 'Kitchen & Bath': 'Кухни и сантехника', 'Interior Designer': 'Дизайнер интерьера',
  'Architecture Studio': 'Архитектурное бюро', 'Contractor': 'Подрядчик', 'Developer': 'Застройщик', 'Hybrid': 'Гибрид',
};
const CHANNEL_RU = { 'Retail': 'Розница' };
const LEVEL_RU = { 'Low': 'Низкий', 'Medium': 'Средний', 'High': 'Высокий' };
const LEVEL_EN = { 2: 'Low', 3: 'Medium', 5: 'High', 4: 'High' };
const SEGMENT_RU = {
  'F. Value/Mid Kitchen & Custom Furniture Manufacturers': 'F. Мебельные фабрики эконом- и среднего сегмента (кухни)',
  'B. Premium Kitchen & Custom Furniture Studios': 'B. Студии премиальных кухонь и мебели на заказ',
  'A. Premium Materials & Bath Showrooms': 'A. Шоурумы премиальных материалов и сантехники',
  'G. Budget/Turnkey Renovation & Interior Design': 'G. Бюджетный дизайн интерьера и ремонт под ключ',
};

function priceToX(priceRange) {
  if (priceRange === 'Low') return 2;
  if (priceRange === 'Medium') return 3;
  if (priceRange === 'High') return 5;
  return 3;
}

function fitToY(rec) {
  const scope = rec.service_scope || '';
  const typ = rec.typology || '';
  const seg = rec.segment || '';
  if (seg.startsWith('A.')) {
    const brands = (rec.materials_brands_mentioned || '').toLowerCase();
    if (brands.includes('neolith') || brands.includes('laminam')) return 5;
    return 4;
  }
  if (typ === 'Kitchen' || typ === 'Kitchen & Bath') {
    if (scope === 'Design+Install+Supply') return 4;
    if (scope === 'Manufacture+Supply') return 2;
    if (scope === 'Supply only') return 3;
  }
  if (typ === 'Interior Designer') return 3;
  return 3;
}

function xLevel(x) { return x >= 4 ? 'High' : (x === 3 ? 'Medium' : 'Low'); }
function yLevel(y) { return y >= 4 ? 'High' : (y === 3 ? 'Medium' : 'Low'); }

function quadrantOf(x, y) {
  if (x >= 4 && y >= 4) return { key: 'p1', en: 'PRIORITY 1 — Engage now', ru: 'ПРИОРИТЕТ 1 — начать контакт' };
  if (x >= 4 && y < 4) return { key: 'educate', en: 'EDUCATE — technical argument needed', ru: 'ОБУЧЕНИЕ — нужен технический аргумент' };
  if (x < 4 && y >= 4) return { key: 'develop', en: 'DEVELOP — grow with them', ru: 'РАЗВИВАТЬ — расти вместе' };
  return { key: 'low', en: 'LOW PRIORITY', ru: 'НИЗКИЙ ПРИОРИТЕТ' };
}

function brandTier(rec) {
  const b = (rec.materials_brands_mentioned || '').toLowerCase();
  if (b.includes('neolith') || b.includes('laminam')) return 'direct';
  if (b.includes('grohe') || b.includes('porcelanosa') || b.includes('laufen') || b.includes('geolam') || b.includes('vibia')) return 'adjacent';
  if (b === 'not determinable' || b === '') return 'other';
  return 'other';
}

function completeness(rec) {
  const fields = [rec.address, rec.phone, rec.email, rec.price_signal, rec.materials_brands_mentioned, rec.exhibition_evidence, rec.source_url, rec.key_messages];
  let filled = 0;
  fields.forEach(f => { if (f && f !== 'Not determinable' && !/not determinable/i.test(f)) filled++; });
  return Math.round((filled / fields.length) * 100);
}

// English/Russian action-text templates by typology bucket
function actionText(rec, lang) {
  const isEN = lang === 'en';
  if (rec.segment && rec.segment.startsWith('A.')) {
    return isEN
      ? `Co-exhibition slot for Dekton/Silestone/Sensa slab samples alongside existing tile/sanitary display; leverage their premium-buyer foot traffic. Technical training for in-store staff on slab vs. tile/porcelain differentiation.`
      : `Совместная экспозиция образцов плит Dekton/Silestone/Sensa рядом с существующей выставкой плитки/сантехники; использовать премиальный трафик покупателей. Техническое обучение персонала по различиям между плитой и керамогранитом/плиткой.`;
  }
  if (rec.typology === 'Kitchen' && rec.service_scope === 'Manufacture+Supply') {
    return isEN
      ? `Long-horizon volume play: introductory countertop-material discount for OEM/wholesale orders once the factory adds a differentiated premium line; monitor for upgrade signals before active outreach.`
      : `Долгосрочная работа на объём: вводная скидка на материал столешниц для OEM/оптовых заказов, если фабрика введёт отдельную премиальную линию; отслеживать сигналы апгрейда перед активным контактом.`;
  }
  if (rec.typology === 'Kitchen' || rec.typology === 'Kitchen & Bath') {
    return isEN
      ? `Free Dekton/Silestone/Sensa countertop sample display in exchange for surface-material exclusivity in their showroom; introductory volume discount on first order.`
      : `Бесплатное размещение образцов столешниц Dekton/Silestone/Sensa в обмен на эксклюзивность по материалу поверхности в их шоуруме; вводная скидка за объём на первый заказ.`;
  }
  if (rec.typology === 'Interior Designer') {
    return isEN
      ? `Referral commission on specified projects; pocket sample kit plus digital catalog access for renders/specification of budget-conscious renovation projects.`
      : `Комиссия за рекомендованные проекты; карманный набор образцов и доступ к цифровому каталогу для рендеров/спецификации в бюджетных проектах ремонта.`;
  }
  return isEN
    ? `Monitor for further data (price signals, showroom confirmation) before an active outreach decision.`
    : `Отслеживать появление дополнительных данных (цена, подтверждение шоурума) перед решением об активном контакте.`;
}

function potentialLevel(x, y) {
  const score = x + y;
  if (score >= 8) return 'High';
  if (score >= 6) return 'Medium';
  return 'Low';
}
const POTENTIAL_RU = { High: 'Высокий', Medium: 'Средний', Low: 'Низкий' };

let nextId = 9000; // high range to avoid colliding with existing ids 1-105
const out = newRecords.map(rec => {
  const x = priceToX(rec.price_range);
  const y = fitToY(rec);
  const q = quadrantOf(x, y);
  const xl = xLevel(x), yl = yLevel(y);
  const pot = potentialLevel(x, y);
  const comp = completeness(rec);
  const id = nextId++;
  return {
    id,
    name: rec.name,
    city_en: rec.city, city_ru: CITY_RU[rec.city] || rec.city,
    address: rec.address,
    segment_en: rec.segment, segment_ru: SEGMENT_RU[rec.segment] || rec.segment,
    typology_en: rec.typology, typology_ru: TYPOLOGY_RU[rec.typology] || rec.typology,
    channel_en: rec.channel, channel_ru: CHANNEL_RU[rec.channel] || rec.channel,
    brands: rec.materials_brands_mentioned,
    brand_tier: brandTier(rec),
    x, y,
    x_level_en: xl, x_level_ru: LEVEL_RU[xl],
    y_level_en: yl, y_level_ru: LEVEL_RU[yl],
    x_justification_en: rec.price_signal,
    x_justification_ru: `Данные v2.0 (WebSearch/WebFetch, ${rec.source_language==='Russian'?'русскоязычный источник':'источник на английском'}): ${rec.price_signal}`,
    y_justification_en: `Typology "${rec.typology}" with service scope "${rec.service_scope}". ${rec.exhibition_evidence}`,
    y_justification_ru: `Типология «${rec.typology_ru || rec.typology}», объём услуг «${rec.service_scope}». ${rec.exhibition_evidence}`,
    quadrant_en: q.en, quadrant_ru: q.ru,
    potential_en: pot, potential_ru: POTENTIAL_RU[pot],
    potential_confirmed: comp >= 50,
    showroom_flag: rec.physical_exhibition === 'Yes' ? 'yes' : (rec.physical_exhibition === 'No determinable' ? 'other' : 'no'),
    action_en: actionText(rec, 'en'),
    action_ru: actionText(rec, 'ru'),
    email: rec.email || '',
    phone: rec.phone || '',
    web: rec.source_url || '',
    completeness: comp,
    priority_original: rec.priority_candidate === 'Yes',
  };
});

fs.writeFileSync(path.join(__dirname, 'retail_dashboard_new_records.json'), JSON.stringify(out, null, 2), 'utf8');
console.log('Converted', out.length, 'records for the retail dashboard schema.');
console.log('Quadrant distribution:', out.reduce((m,r)=>{m[r.quadrant_en]=(m[r.quadrant_en]||0)+1;return m;},{}));
