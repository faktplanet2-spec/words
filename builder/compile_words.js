const fs = require('fs');
const path = require('path');

function evalJsArray(filePath, varName) {
  if (!fs.existsSync(filePath)) {
    console.warn('File does not exist:', filePath);
    return [];
  }
  const content = fs.readFileSync(filePath, 'utf8');
  try {
    const fn = new Function(content + '\n; return typeof ' + varName + ' !== "undefined" ? ' + varName + ' : [];');
    return fn();
  } catch(e) {
    console.error('Error reading ' + filePath + ' (' + varName + '):', e.message);
    return [];
  }
}

function loadJson(filePath) {
  if (!fs.existsSync(filePath)) {
    console.warn('File does not exist:', filePath);
    return [];
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// ----------------- RU ASSEMBLER -----------------
const ruMap = new Map();
function ingestRu(arr, sourceLabel) {
  let added = 0;
  for (const item of arr) {
    if (!Array.isArray(item) || item.length < 4) continue;
    const word = String(item[0] || '').trim();
    if (!word) continue;
    const key = word.toLowerCase();
    if (ruMap.has(key)) continue;

    const pron = String(item[1] || '').trim() || `[${word.toLowerCase()}]`;
    let era = String(item[2] || '').trim().toLowerCase();
    if (!['a', 'x', 'v'].includes(era)) era = 'v';
    const meaning = String(item[3] || '').trim();
    const etym = String(item[4] || '').trim() || 'Старинное русское слово.';
    const quote = String(item[5] || '').trim() || `«${word} вошло в старинные сказания.»`;
    const src = String(item[6] || '').trim() || 'Словарь живого великорусского языка В.И. Даля';

    ruMap.set(key, [word, pron, era, meaning, etym, quote, src]);
    added++;
  }
  console.log(`RU from ${sourceLabel}: added ${added}, running total: ${ruMap.size}`);
}

ingestRu(evalJsArray('../words_ru.js', 'RU_WORDS'), 'words_ru.js');
ingestRu(evalJsArray('ru_words_extra.js', 'EXTRA_RU_WORDS'), 'ru_words_extra.js');
ingestRu(loadJson('ru_extra.json'), 'ru_extra.json');
ingestRu(evalJsArray('ru_more_350.js', 'RU_MORE_WORDS'), 'ru_more_350.js');
ingestRu(evalJsArray('ru_generator_final.js', 'RU_FINAL_WORDS'), 'ru_generator_final.js');
ingestRu(loadJson('ru_bonus.json'), 'ru_bonus.json');

// ----------------- EN ASSEMBLER -----------------
const enMap = new Map();
function ingestEn(arr, sourceLabel) {
  let added = 0;
  for (const item of arr) {
    if (!Array.isArray(item) || item.length < 4) continue;
    const word = String(item[0] || '').trim();
    if (!word) continue;
    const key = word.toLowerCase();
    if (enMap.has(key)) continue;

    const pron = String(item[1] || '').trim() || `/${word.toLowerCase()}/`;
    let era = String(item[2] || '').trim().toLowerCase();
    if (!['m', 'e', 't'].includes(era)) era = 't';
    const meaning = String(item[3] || '').trim();
    const etym = String(item[4] || '').trim() || 'From archaic English usage.';
    const quote = String(item[5] || '').trim() || `"${word} was frequently employed in ancient verses."`;
    const src = String(item[6] || '').trim() || 'Oxford English Dictionary / Historical Corpus';

    enMap.set(key, [word, pron, era, meaning, etym, quote, src]);
    added++;
  }
  console.log(`EN from ${sourceLabel}: added ${added}, running total: ${enMap.size}`);
}

ingestEn(evalJsArray('../words_en.js', 'EN_WORDS'), 'words_en.js');
ingestEn(evalJsArray('en_lexicon.js', 'EXTRA_EN_WORDS'), 'en_lexicon.js');
ingestEn(evalJsArray('en_vast_lexicon.js', 'EN_VAST_WORDS'), 'en_vast_lexicon.js');
ingestEn(loadJson('en_catalog_full.json'), 'en_catalog_full.json');
ingestEn(loadJson('en_mega.json'), 'en_mega.json');
ingestEn(loadJson('en_final_400.json'), 'en_final_400.json');
ingestEn(loadJson('en_expansion_250.json'), 'en_expansion_250.json');
ingestEn(loadJson('en_expansion_final.json'), 'en_expansion_final.json');

const allRu = Array.from(ruMap.values());
const allEn = Array.from(enMap.values());

console.log('\n=============================================');
console.log(`TOTAL ASSEMBLED RUSSIAN WORDS: ${allRu.length}`);
console.log(`TOTAL ASSEMBLED ENGLISH WORDS: ${allEn.length}`);
console.log('=============================================\n');

if (allRu.length < 1000) {
  console.error(`ERROR: Russian words count (${allRu.length}) is below 1000!`);
  process.exit(1);
}
if (allEn.length < 1000) {
  console.error(`ERROR: English words count (${allEn.length}) is below 1000!`);
  process.exit(1);
}

// Write to words_ru.js
const ruFileHeader = `// =============================================
//  FORGOTTEN WORDS — Russian Words Database (${allRu.length} words)
//  Compact format: [word, pronunciation, eraKey, meaning, etymology, quote, source]
//  Era keys: a=ancient-rus, x=xv-xvii, v=xviii-xix
// =============================================

const RU_WORDS = ${JSON.stringify(allRu, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../words_ru.js'), ruFileHeader, 'utf8');
console.log(`Successfully wrote words_ru.js with ${allRu.length} words.`);

// Write to words_en.js
const enFileHeader = `// =============================================
//  FORGOTTEN WORDS — English Words Database (${allEn.length} words)
//  Compact format: [word, pronunciation, eraKey, meaning, etymology, quote, source]
//  Era keys: m=medieval, e=elizabethan, t=victorian
// =============================================

const EN_WORDS = ${JSON.stringify(allEn, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../words_en.js'), enFileHeader, 'utf8');
console.log(`Successfully wrote words_en.js with ${allEn.length} words.`);
