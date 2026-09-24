const fs = require('fs');

function evalJsArray(filePath, varName) {
  if (!fs.existsSync(filePath)) {
    console.log('File does not exist:', filePath);
    return [];
  }
  const content = fs.readFileSync(filePath, 'utf8');
  try {
    const fn = new Function(content + '\n; return typeof ' + varName + ' !== "undefined" ? ' + varName + ' : [];');
    return fn();
  } catch(e) {
    console.error('Err in ' + filePath + ':', e.message);
    return [];
  }
}

function loadJson(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log('File does not exist:', filePath);
    return [];
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const ruMap = new Map();
function addRu(arr, src) {
  let count = 0;
  for (const item of arr) {
    if (Array.isArray(item) && item[0]) {
      const key = item[0].trim().toLowerCase();
      if (!ruMap.has(key)) {
        ruMap.set(key, item);
        count++;
      }
    }
  }
  console.log(`RU ${src}: added ${count}, unique total: ${ruMap.size}`);
}

addRu(evalJsArray('../words_ru.js', 'RU_WORDS'), 'words_ru.js');
addRu(evalJsArray('ru_words_extra.js', 'EXTRA_RU_WORDS'), 'ru_words_extra.js');
addRu(loadJson('ru_extra.json'), 'ru_extra.json');
addRu(evalJsArray('ru_more_350.js', 'RU_MORE_WORDS'), 'ru_more_350.js');
addRu(evalJsArray('ru_generator_final.js', 'RU_FINAL_WORDS'), 'ru_generator_final.js');
addRu(loadJson('ru_bonus.json'), 'ru_bonus.json');

const enMap = new Map();
function addEn(arr, src) {
  let count = 0;
  for (const item of arr) {
    if (Array.isArray(item) && item[0]) {
      const key = item[0].trim().toLowerCase();
      if (!enMap.has(key)) {
        enMap.set(key, item);
        count++;
      }
    }
  }
  console.log(`EN ${src}: added ${count}, unique total: ${enMap.size}`);
}

addEn(evalJsArray('../words_en.js', 'EN_WORDS'), 'words_en.js');
addEn(evalJsArray('en_lexicon.js', 'EXTRA_EN_WORDS'), 'en_lexicon.js');
addEn(evalJsArray('en_vast_lexicon.js', 'EN_VAST_WORDS'), 'en_vast_lexicon.js');
addEn(loadJson('en_catalog_full.json'), 'en_catalog_full.json');
addEn(loadJson('en_mega.json'), 'en_mega.json');
addEn(loadJson('en_final_400.json'), 'en_final_400.json');
addEn(loadJson('en_expansion_250.json'), 'en_expansion_250.json');
addEn(loadJson('en_expansion_final.json'), 'en_expansion_final.json');

console.log('\n=== CURRENT TOTALS ===');
console.log('Unique Russian words:', ruMap.size);
console.log('Unique English words:', enMap.size);
