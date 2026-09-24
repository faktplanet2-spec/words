const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// Load words_ru.js
const ruCode = fs.readFileSync(path.join(rootDir, 'words_ru.js'), 'utf8');
const enCode = fs.readFileSync(path.join(rootDir, 'words_en.js'), 'utf8');
const dataCode = fs.readFileSync(path.join(rootDir, 'data.js'), 'utf8');

// Evaluate in a unified context
const context = {};
const evalFn = new Function('ctx', `
  ${ruCode}
  ${enCode}
  ${dataCode}
  ctx.RU_WORDS = RU_WORDS;
  ctx.EN_WORDS = EN_WORDS;
  ctx.WORDS_DATABASE = WORDS_DATABASE;
  ctx.ERA_LABELS = ERA_LABELS;
  ctx.UI_STRINGS = UI_STRINGS;
`);

evalFn(context);

console.log('=== TEST VERIFICATION RESULTS ===');
console.log(`RU_WORDS array length: ${context.RU_WORDS.length}`);
console.log(`EN_WORDS array length: ${context.EN_WORDS.length}`);
console.log(`WORDS_DATABASE length: ${context.WORDS_DATABASE.length}`);

if (context.RU_WORDS.length < 1000) {
  throw new Error(`Russian words count (${context.RU_WORDS.length}) is under 1000!`);
}
if (context.EN_WORDS.length < 1000) {
  throw new Error(`English words count (${context.EN_WORDS.length}) is under 1000!`);
}

const ruEntries = context.WORDS_DATABASE.filter(w => w.lang === 'ru');
const enEntries = context.WORDS_DATABASE.filter(w => w.lang === 'en');

console.log(`Russian entries in database: ${ruEntries.length}`);
console.log(`English entries in database: ${enEntries.length}`);

// Verify all eraKeys map to ERA_LABELS
for (const w of context.WORDS_DATABASE) {
  if (!context.ERA_LABELS[w.eraKey]) {
    throw new Error(`Missing ERA_LABEL for eraKey '${w.eraKey}' in word '${w.word}'`);
  }
  if (!w.word || !w.meaning || !w.pronunciation) {
    throw new Error(`Word entry incomplete: ${JSON.stringify(w)}`);
  }
}

console.log('ALL VERIFICATIONS PASSED SUCCESSFULLY!');
console.log('Sample Russian word:', ruEntries[0].word, '-', ruEntries[0].meaning.slice(0, 50));
console.log('Sample English word:', enEntries[0].word, '-', enEntries[0].meaning.slice(0, 50));
