// Splices the 42 new bilingual dashboard records into index_retail.html's
// embedded `const DATA = [...]` array (currently 90 records), producing
// index_v2/index_retail.html with 132 records. Also bumps the hard-coded
// "90 retail accounts" footnote counts (EN+RU) to the new total.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'index_retail.html');
const OUT_DIR = path.join(ROOT, 'index_v2');
const OUT = path.join(OUT_DIR, 'index_retail.html');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

const newRecs = JSON.parse(fs.readFileSync(path.join(__dirname, 'retail_dashboard_new_records.json'), 'utf8'));

const lines = fs.readFileSync(SRC, 'utf8').split('\n');
const lineIdx = lines.findIndex(l => l.startsWith('const DATA = ['));
if (lineIdx === -1) throw new Error('DATA line not found');
const line = lines[lineIdx];
const jsonStart = line.indexOf('[');
const jsonStr = line.slice(jsonStart, line.length - 1); // strip trailing ';'
const existing = JSON.parse(jsonStr);
console.log('existing records:', existing.length);

const merged = existing.concat(newRecs);
console.log('merged records:', merged.length);

lines[lineIdx] = 'const DATA = ' + JSON.stringify(merged) + ';';

let out = lines.join('\n');
// bump footnote counts (EN + RU), keep rest of sentence intact
out = out.replace(/\(90 retail accounts across/, `(${merged.length} retail accounts across`);
out = out.replace(/\(90 розничных компаний в/, `(${merged.length} розничных компаний в`);
// v2.0 adds segments F and G (value/mid manufacturers, budget renovation) - give them their own map colors
out = out.replace(
  "--seg-a:#5b9bec; --seg-b:#ff8f5c; --seg-c:#35d6a0; --seg-d:#d9a53c; --seg-e:#ea7aa8;",
  "--seg-a:#5b9bec; --seg-b:#ff8f5c; --seg-c:#35d6a0; --seg-d:#d9a53c; --seg-e:#ea7aa8; --seg-f:#c9c356; --seg-g:#8fd6e8;"
);
out = out.replace(
  "  'E': { color:'var(--seg-e)', shape:'cross' },\n};",
  "  'E': { color:'var(--seg-e)', shape:'cross' },\n  'F': { color:'var(--seg-f)', shape:'circle' },\n  'G': { color:'var(--seg-g)', shape:'triangle' },\n};"
);

fs.writeFileSync(OUT, out, 'utf8');
console.log('Wrote', OUT, '(', (out.length/1024).toFixed(0), 'KB )');
