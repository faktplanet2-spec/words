const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT_DIR = path.join(__dirname, '..');
const RU_FILE = path.join(ROOT_DIR, 'words_ru.js');
const EN_FILE = path.join(ROOT_DIR, 'words_en.js');
const ENV_FILE = path.join(ROOT_DIR, '.env');

// 1. Get Gemini API Key
function getApiKey() {
    if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;
    try {
        if (fs.existsSync(ENV_FILE)) {
            const content = fs.readFileSync(ENV_FILE, 'utf8');
            const match = content.match(/GEMINI_API_KEY=(.+)/);
            if (match) return match[1].trim();
        }
    } catch (e) {}
    return null;
}

// 2. Load existing words
function loadExistingWords(filePath, varName) {
    const code = fs.readFileSync(filePath, 'utf8');
    const sandbox = {};
    const evalFn = new Function('sandbox', `${code}\nsandbox.words = ${varName};`);
    evalFn(sandbox);
    return sandbox.words;
}

// 3. Save words to file
function saveWordsToFile(filePath, varName, langTitle, words) {
    const header = `// =============================================
//  FORGOTTEN WORDS - ${langTitle} (${words.length} words)
//  Compact format: [word, pronunciation, eraKey, meaning, etymology, quote, source]
// =============================================

const ${varName} = ${JSON.stringify(words, null, 2)};
`;
    fs.writeFileSync(filePath, header, 'utf8');
}

// 4. Call Gemini with retry & candidate models
async function callGemini(apiKey, prompt) {
    const models = [
        'gemini-3.5-flash-lite',
        'gemini-3.5-flash',
        'gemini-flash-lite-latest',
        'gemini-flash-latest'
    ];

    for (const model of models) {
        try {
            const result = await new Promise((resolve, reject) => {
                const url = new URL(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`);
                const postData = JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        responseMimeType: "application/json",
                        temperature: 0.8,
                        maxOutputTokens: 8192
                    }
                });

                const req = https.request(url, {
                    method: 'POST',
                    timeout: 25000,
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': Buffer.byteLength(postData)
                    }
                }, (res) => {
                    let body = '';
                    res.on('data', chunk => body += chunk);
                    res.on('end', () => {
                        if (res.statusCode >= 200 && res.statusCode < 300) {
                            try {
                                const parsed = JSON.parse(body);
                                const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
                                resolve(text);
                            } catch (e) {
                                reject(e);
                            }
                        } else {
                            reject(new Error(`API Error ${res.statusCode}: ${body.slice(0, 150)}`));
                        }
                    });
                });

                req.on('timeout', () => req.destroy(new Error(`Timeout on ${model}`)));
                req.on('error', reject);
                req.write(postData);
                req.end();
            });

            if (result) return result;
        } catch (err) {
            // Wait briefly before next candidate model
            await new Promise(r => setTimeout(r, 600));
        }
    }
    throw new Error('All Gemini candidate models failed for this batch');
}

// Alphabet lists for structured, non-duplicating lexical coverage
const RU_LETTERS = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ю', 'Я'];
const EN_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y'];

const RU_DOMAINS = [
    'старинный быт, утварь, жилище, ремёсла',
    'воинское дело, оружие, доспехи, чины',
    'одежда, ткани, головные уборы, украшения',
    'старинные меры, деньги, торговля, ярмарки',
    'летописи, грамоты, обычаи, вече, законы',
    'словарь Даля, редкие забытые слова губерний'
];

const EN_DOMAINS = [
    'medieval life, castle, chivalry, feudalism',
    'historical garments, armor, textiles, heraldry',
    'maritime, nautical terms from the age of sail',
    'archaic coinage, trade, guild professions',
    'Elizabethan, Shakespearean and Jacobean prose',
    'Victorian vernacular, gothic literature, obsolete terms'
];

async function expandLanguage(lang, targetCount) {
    const isRu = lang === 'ru';
    const filePath = isRu ? RU_FILE : EN_FILE;
    const varName = isRu ? 'RU_WORDS' : 'EN_WORDS';
    const langTitle = isRu ? 'Russian Words Database' : 'English Words Database';
    const letters = isRu ? RU_LETTERS : EN_LETTERS;
    const domains = isRu ? RU_DOMAINS : EN_DOMAINS;

    let words = loadExistingWords(filePath, varName);
    const existingSet = new Set(words.map(w => w[0].trim().toLowerCase()));

    console.log(`\n====================================================`);
    console.log(`📚 Expanding ${isRu ? 'Russian' : 'English'} dictionary: Current = ${words.length}, Target = ${targetCount}`);
    console.log(`====================================================\n`);

    const REQUEST_COUNT = 45;
    let stepIndex = 0;
    let consecutiveErrors = 0;

    while (words.length < targetCount) {
        const letter = letters[stepIndex % letters.length];
        const domain = domains[Math.floor(stepIndex / letters.length) % domains.length];
        stepIndex++;

        const prompt = isRu ? `
Сгенерируй ровно ${REQUEST_COUNT} уникальных, РЕДКИХ старинных русских слов (архаизмов или историзмов) на букву "${letter}".
Тематический акцент: ${domain}.
Каждое слово ОБЯЗАНО начинаться на букву "${letter}".
Бери редкие, интересные слова из словаря Даля, древнерусских летописей, церковнославянского или классики XVIII-XIX вв.

Формат ответа: СТРОГО JSON-массив массивов без лишнего текста:
[
  [
    "Слово на букву ${letter}",
    "[транскрипция/ударение]",
    "a" (Древняя Русь), "x" (XV-XVII в.) или "v" (XVIII-XIX в.),
    "Точное историческое значение и толкование",
    "Этимология и происхождение",
    "Пример употребления (цитата из литературы, летописи или Даля)",
    "Источник цитаты (автор, произведение или словарь Даля)"
  ]
]
` : `
Generate exactly ${REQUEST_COUNT} unique, authentic archaic or forgotten English words starting with the letter "${letter}".
Domain emphasis: ${domain}.
Every word MUST start with the letter "${letter}".
Use genuine historical English words from Old English, Middle English, Elizabethan/Shakespearean, or Victorian eras.

Response format: STRICTLY JSON array of arrays without extra text:
[
  [
    "Word capitalized starting with ${letter}",
    "/pronunciation/",
    "m" (medieval), "e" (elizabethan) or "t" (victorian),
    "Precise historical definition and meaning",
    "Etymology and language origin",
    "Authentic quote or usage example",
    "Source (author, work, or historical document)"
  ]
]
`;

        try {
            const apiKey = getApiKey();
            process.stdout.write(`⏳ Letter '${letter}' [${domain.slice(0, 24)}...] (${words.length}/${targetCount}) `);
            const responseText = await callGemini(apiKey, prompt);

            let cleanJson = responseText.trim();
            if (cleanJson.startsWith('```json')) cleanJson = cleanJson.replace(/^```json\s*/, '').replace(/\s*```$/, '');
            else if (cleanJson.startsWith('```')) cleanJson = cleanJson.replace(/^```\s*/, '').replace(/\s*```$/, '');

            const batch = JSON.parse(cleanJson);
            let addedInBatch = 0;

            if (Array.isArray(batch)) {
                for (const item of batch) {
                    if (Array.isArray(item) && item.length >= 7 && item[0]) {
                        const wordStr = String(item[0]).trim();
                        const wordKey = wordStr.toLowerCase();
                        if (!existingSet.has(wordKey) && wordStr.length >= 2) {
                            existingSet.add(wordKey);
                            words.push([
                                wordStr,
                                String(item[1] || ''),
                                String(item[2] || (isRu ? 'v' : 'e')),
                                String(item[3] || ''),
                                String(item[4] || ''),
                                String(item[5] || ''),
                                String(item[6] || '')
                            ]);
                            addedInBatch++;
                            if (words.length >= targetCount) break;
                        }
                    }
                }
            }

            console.log(`-> +${addedInBatch} words added (Total: ${words.length}/${targetCount})`);
            consecutiveErrors = 0;

            // Save progress to disk after every batch
            saveWordsToFile(filePath, varName, langTitle, words);

            // Throttle slightly
            await new Promise(r => setTimeout(r, 600));

        } catch (err) {
            console.error(`\n❌ Batch error: ${err.message.slice(0, 100)}`);
            consecutiveErrors++;
            if (consecutiveErrors > 5) {
                console.error('Pausing 8s due to errors...');
                await new Promise(r => setTimeout(r, 8000));
            } else {
                await new Promise(r => setTimeout(r, 2000));
            }
        }
    }

    console.log(`\n🎉 Successfully reached ${words.length} words for ${isRu ? 'Russian' : 'English'}!`);
}

async function main() {
    const target = parseInt(process.argv[2], 10) || 5000;
    const mode = process.argv[3] || 'both'; // 'ru', 'en', 'both'

    console.log(`Starting dictionary expansion towards ${target} words per language...`);

    if (mode === 'ru' || mode === 'both') {
        await expandLanguage('ru', target);
    }
    if (mode === 'en' || mode === 'both') {
        await expandLanguage('en', target);
    }

    console.log('\n====================================================');
    console.log('🏁 EXPANSION COMPLETE!');
    console.log('====================================================');
}

main().catch(console.error);
