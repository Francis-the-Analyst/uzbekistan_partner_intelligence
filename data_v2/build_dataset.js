// Builds the v2.0 master dataset: parses the existing 105-record CSV, remaps
// price_range into the strict Low/Medium/High taxonomy, patches two existing
// New Tashkent records with contact info found this pass, appends the 42 new
// records collected in this session, and writes master_dataset_v2.csv/json.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OLD_CSV = path.join(ROOT, 'data', 'master_dataset.csv');
const NEW_JSON = path.join(__dirname, 'new_records.json');
const OUT_CSV = path.join(__dirname, 'master_dataset_v2.csv');
const OUT_JSON = path.join(__dirname, 'master_dataset_v2.json');

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\r') { /* skip */ }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else field += c;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows;
}

function toCSVField(v) {
  v = v == null ? '' : String(v);
  if (/[",\n]/.test(v)) return '"' + v.replace(/"/g, '""') + '"';
  return v;
}

let raw = fs.readFileSync(OLD_CSV, 'utf8');
if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1); // strip UTF-8 BOM
const rows = parseCSV(raw).filter(r => r.length > 1 || (r.length === 1 && r[0] !== ''));
const header = rows[0];
const records = rows.slice(1).map(r => {
  const obj = {};
  header.forEach((h, i) => { obj[h] = r[i] !== undefined ? r[i] : ''; });
  return obj;
});

console.log('Existing records parsed:', records.length);

// --- price_range remap heuristic (see raw_findings_batch1.md / conversation notes) ---
function remapPrice(rec) {
  const cur = (rec.price_range || '').trim();
  if (cur === 'High') return { price_range: 'High', note: null };
  if (cur === 'Medium (inferred)') return { price_range: 'Medium', note: null };
  if (cur === 'Medium-High (mixed signals)') return { price_range: 'High', note: 'v2.0: resolved from "Medium-High (mixed signals)" -> High.' };
  if (cur === 'Not determinable') {
    const seg = rec.segment || '';
    let inferred = 'Medium';
    if (seg.startsWith('A.')) inferred = 'High';
    else if (seg.startsWith('B.')) inferred = 'Medium';
    else if (seg.startsWith('C.')) inferred = 'Medium';
    else if (seg.startsWith('D.')) inferred = 'Medium';
    else if (seg.startsWith('E.')) inferred = 'Medium';
    return { price_range: inferred, note: `v2.0: inferred from segment positioning (${seg || 'no segment'}) — no explicit price signal was found in the original source; treat as a soft default, not a confirmed price point.` };
  }
  return { price_range: cur || 'Not determinable', note: null };
}

records.forEach(rec => {
  const { price_range, note } = remapPrice(rec);
  rec.price_range = price_range;
  if (note) {
    rec.price_signal = (rec.price_signal && rec.price_signal !== 'Not determinable')
      ? rec.price_signal + ' | ' + note
      : note;
  }
});

// --- patch two existing New Tashkent records with data found this pass ---
records.forEach(rec => {
  if (rec.name === 'UET Construction') {
    rec.email = rec.email || 'info@uetconstruction.com';
    rec.phone = rec.phone || '+998 77 443 00 33 / +998 55 519 06 06';
    if (!rec.address || rec.address.includes('Crystal Avenue sales office')) {
      rec.address = 'HQ: Tashkent, Yakkasaray district, Abdulla Kahhara St 17; Crystal Avenue sales office, New Tashkent District 1';
    }
    rec.raw_notes = (rec.raw_notes || '') + ' | v2.0 update: HQ contact confirmed via uetconstruction.com (ISO 14001/45001/9001 certified; owns Chirchik Metal Structures Plant production asset).';
  }
  if (rec.name === 'KS Lux') {
    rec.price_signal = (rec.price_signal || '') + ' | v2.0 cross-check: entry tiles from ~203,150 сум, premium large-format panels up to ~6,022,800 сум (wide range, mid-anchored) — found independently in this pass, confirms and refines the original signal.';
  }
  if (rec.name === 'NeoStyle') {
    rec.raw_notes = (rec.raw_notes || '') + ' | v2.0 cross-check: also found independently via Instagram (@neostyle.uz) under the query "budget/economy turnkey renovation" — confirms this account as findable through both premium-architecture and budget-renovation search angles.';
  }
  if (rec.name === 'BI Group') {
    rec.raw_notes = (rec.raw_notes || '') + ' | v2.0 update: project confirmed under the name "Ostona" at its official Nov 2025 launch (spot.uz), majority shareholder/chairman Oydin Rahimboyev, refined figures: 3,162 apartments, 10.5 ha phase 1, $200M investment, construction started Nov 2025. (Earlier working name "Astana district" in original scrape appears to be the same project.)';
    rec.project_role = rec.project_role.replace(/'Astana' residential district/, "'Ostona' residential district (launched under this name Nov 2025)");
  }
});

// --- load new records ---
const newRecords = JSON.parse(fs.readFileSync(NEW_JSON, 'utf8'));
console.log('New records to add:', newRecords.length);

// ensure every new record has every column the old schema has (fill blanks)
const allColumns = Array.from(new Set([...header, 'segment']));
newRecords.forEach(rec => {
  allColumns.forEach(col => { if (!(col in rec)) rec[col] = ''; });
});

const finalRecords = [...records, ...newRecords];
console.log('Final total records:', finalRecords.length);

// --- write CSV ---
const csvHeader = allColumns;
const csvLines = [csvHeader.map(toCSVField).join(',')];
finalRecords.forEach(rec => {
  csvLines.push(csvHeader.map(h => toCSVField(rec[h])).join(','));
});
fs.writeFileSync(OUT_CSV, csvLines.join('\r\n'), 'utf8');

// --- write JSON ---
fs.writeFileSync(OUT_JSON, JSON.stringify(finalRecords, null, 2), 'utf8');

// --- summary stats ---
function count(field) {
  const m = {};
  finalRecords.forEach(r => { const v = r[field] || '(blank)'; m[v] = (m[v] || 0) + 1; });
  return m;
}
console.log('\n--- typology ---', count('typology'));
console.log('\n--- channel ---', count('channel'));
console.log('\n--- price_range ---', count('price_range'));
console.log('\n--- city ---', count('city'));
