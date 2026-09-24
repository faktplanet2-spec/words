const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const ruCode = fs.readFileSync(path.join(rootDir, 'words_ru.js'), 'utf8');
const enCode = fs.readFileSync(path.join(rootDir, 'words_en.js'), 'utf8');

const ctx = {};
new Function('ctx', ruCode + '\n' + enCode + '\nctx.RU = RU_WORDS;\nctx.EN = EN_WORDS;')(ctx);

console.log(`Testing with ${ctx.RU.length} RU words and ${ctx.EN.length} EN words.`);

// Check first 10 RU and EN
console.log('\n--- SAMPLE RU ---');
ctx.RU.slice(0, 5).forEach(w => console.log(w[0], '->', w[3].slice(0, 45)));

console.log('\n--- SAMPLE EN ---');
ctx.EN.slice(0, 5).forEach(w => console.log(w[0], '->', w[3].slice(0, 45)));
