// Patches the 2 New Tashkent actor records in index_v2/index_proyectos.html's
// DATA array with contact info / refined figures found in the v2.0 pass.
const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '..', 'index_v2', 'index_proyectos.html');

const lines = fs.readFileSync(FILE, 'utf8').split('\n');
const dLine = lines.findIndex(l => l.startsWith('const DATA = '));
const line = lines[dLine];
const data = JSON.parse(line.slice(line.indexOf('['), line.length - 1));

const uet = data.find(d => d.name === 'UET Construction');
uet.email = 'info@uetconstruction.com';
uet.phone = '+998 77 443 00 33 / +998 55 519 06 06';
uet.address = 'HQ: Tashkent, Yakkasaray district, Abdulla Kahhara St 17; Crystal Avenue sales office, New Tashkent District 1';
uet.completeness = 87;

const bi = data.find(d => d.name === 'BI Group');
bi.x_justification_en = "Active construction underway, launched under the project name \"Ostona\" (10.5 ha, $200M, 3,162 apartments planned, construction launch ceremony 15 Nov 2025); self-described '#1 Developer in Central Asia'; chairman/majority shareholder Oydin Rahimboyev; no local New Tashkent showroom yet (early construction phase).";
bi.x_justification_ru = "Ведётся активное строительство, проект запущен под названием «Ostona» (10,5 га, $200 млн, 3162 квартиры запланировано, церемония начала строительства 15.11.2025); самоопределение «застройщик №1 в Центральной Азии»; председатель/основной акционер — Ойдин Рахимбоев; локального шоурума в New Tashkent пока нет (ранняя стадия строительства).";
bi.y_justification_en = bi.y_justification_en.replace('~3,000 units', '3,162 planned units');
bi.y_justification_ru = bi.y_justification_ru.replace('~3000 квартирами', '3162 запланированными квартирами');
bi.web = bi.web + '; https://www.spot.uz/oz/2025/11/15/new-tashkent';
bi.completeness = 62;

lines[dLine] = 'const DATA = ' + JSON.stringify(data) + ';';
fs.writeFileSync(FILE, lines.join('\n'), 'utf8');
console.log('Patched UET Construction and BI Group records.');
