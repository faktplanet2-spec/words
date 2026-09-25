const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT_DIR = path.join(__dirname, '..');
const EXTRA_FILE = path.join(ROOT_DIR, 'words_extra.js');
const ENV_FILE = path.join(ROOT_DIR, '.env');

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
                        maxOutputTokens: 8192,
                        temperature: 0.3
                    }
                });

                const req = https.request(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': Buffer.byteLength(postData)
                    }
                }, (res) => {
                    let data = '';
                    res.on('data', chunk => data += chunk);
                    res.on('end', () => {
                        if (res.statusCode >= 200 && res.statusCode < 300) {
                            try {
                                const parsed = JSON.parse(data);
                                const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
                                resolve(text);
                            } catch (e) {
                                reject(e);
                            }
                        } else {
                            reject(new Error(`HTTP ${res.statusCode}: ${data}`));
                        }
                    });
                });

                req.on('error', reject);
                req.setTimeout(45000, () => {
                    req.destroy();
                    reject(new Error('Timeout'));
                });
                req.write(postData);
                req.end();
            });

            if (result) return result;
        } catch (err) {
            // try next model
        }
    }
    throw new Error('All Gemini models failed');
}

const LANGUAGES = [
    {
        code: 'cu',
        name: 'Церковнославянский / Древнерусский',
        desc: 'редкие и поэтичные старославянские слова из летописей, Остромирова Евангелия, Слова о полку Игореве и древних рукописей',
        era: 'Церковнославянский / Древнерусский',
        eraKey: 'church-slavonic'
    },
    {
        code: 'la',
        name: 'Lingua Latina (Латынь)',
        desc: 'rare, poetic, and classic ancient Latin words used by Cicero, Virgil, Ovid, Seneca, Horace with modern Russian/English meanings',
        era: 'Античность (Древний Рим)',
        eraKey: 'classical-antiquity'
    },
    {
        code: 'fr',
        name: 'Français (Старофранцузский и архаичный французский)',
        desc: 'rare, beautiful historical French words from Middle French, Renaissance and 17th-18th century literature (Molière, Rabelais, Villon, Balzac)',
        era: 'Старый порядок (XVI-XVIII в.)',
        eraKey: 'renaissance'
    },
    {
        code: 'de',
        name: 'Deutsch (Старонемецкий и исторический немецкий)',
        desc: 'fascinating archaic German words from Middle High German and 18th-19th century literature (Goethe, Schiller, Grimm)',
        era: 'Историческая Германия (XVI-XIX в.)',
        eraKey: 'middle-ages'
    },
    {
        code: 'es',
        name: 'Español (Староиспанский язык Золотого века)',
        desc: 'authentic archaic Spanish words from Siglo de Oro, Cantar de mio Cid, Cervantes, Quevedo, Góngora',
        era: 'Золотой век Испании (Siglo de Oro)',
        eraKey: 'golden-age'
    },
    {
        code: 'it',
        name: 'Italiano (Староитальянский язык Возрождения)',
        desc: 'gorgeous archaic Italian words from Rinascimento, Dante Alighieri (Divina Commedia), Petrarca, Boccaccio, Ariosto',
        era: 'Эпоха Возрождения (Rinascimento)',
        eraKey: 'renaissance'
    }
];

async function main() {
    const apiKey = getApiKey();
    if (!apiKey) {
        console.error('No GEMINI_API_KEY found');
        process.exit(1);
    }

    let allExtraWords = [];

    // Check if existing file has words
    if (fs.existsSync(EXTRA_FILE)) {
        try {
            const existingCode = fs.readFileSync(EXTRA_FILE, 'utf8');
            const sandbox = {};
            const fn = new Function('sandbox', `${existingCode}\nsandbox.words = EXTRA_WORDS;`);
            fn(sandbox);
            if (Array.isArray(sandbox.words)) {
                allExtraWords = sandbox.words;
                console.log(`Loaded ${allExtraWords.length} existing extra words.`);
            }
        } catch (e) {}
    }

    for (const lang of LANGUAGES) {
        const countForLang = allExtraWords.filter(w => w.lang === lang.code).length;
        if (countForLang >= 35) {
            console.log(`✅ ${lang.name} already has ${countForLang} words, skipping.`);
            continue;
        }

        console.log(`⏳ Generating words for ${lang.name} (${lang.code})...`);

        const prompt = `You are a world-class historical linguist and philologist.
Generate an array of 35 distinct, authentic, fascinating archaic or forgotten words for the language: ${lang.name} (${lang.desc}).

Requirements for each item:
- "word": The word in its historical/original spelling (capitalize first letter).
- "lang": "${lang.code}"
- "pronunciation": phonetic transcription (e.g. "[а́-би-е]" or "[na-gɛʁ]" or "/pul.kʰriˈtuː.doː/").
- "era": "${lang.era}"
- "eraKey": "${lang.eraKey}"
- "meaning": Accurate, evocative definition in Russian explaining what it meant in historical context.
- "synonym": 1-3 direct modern Russian words (and optionally English) that correspond to this word today (e.g. "тотчас / immediately" or "красота" or "напрасно").
- "wordType": either "archaism" (if a direct modern synonym exists) or "historicism" (if it refers to a historical object/rank/garment/custom that no longer exists).
- "category": one of: "nature_body", "clothing", "professions", "measures_money", "military", "household", "speech_mind".
- "etymology": Concise historical etymology and root origin in Russian.
- "quote": An authentic or historically faithful literary quotation featuring this word.
- "source": The author or historical literary monument (e.g. "«Слово о полку Игореве»", "Dante, Divina Commedia", "Cervantes, Don Quijote", "Cicero, De Re Publica", "Molière", "Goethe").

Respond ONLY with a JSON array of objects:
[
  {
    "word": "...",
    "lang": "${lang.code}",
    "pronunciation": "...",
    "era": "${lang.era}",
    "eraKey": "${lang.eraKey}",
    "meaning": "...",
    "synonym": "...",
    "wordType": "...",
    "category": "...",
    "etymology": "...",
    "quote": "...",
    "source": "..."
  }
]`;

        try {
            const rawJson = await callGemini(apiKey, prompt);
            const words = JSON.parse(rawJson);
            if (Array.isArray(words) && words.length > 0) {
                // Deduplicate and push
                words.forEach(w => {
                    if (!allExtraWords.some(existing => existing.word.toLowerCase() === w.word.toLowerCase() && existing.lang === w.lang)) {
                        allExtraWords.push(w);
                    }
                });
                console.log(`✨ Added ${words.length} words for ${lang.code}! Total extra words: ${allExtraWords.length}`);
            }
        } catch (err) {
            console.error(`❌ Error generating for ${lang.code}:`, err.message);
        }

        // Write progress to file immediately
        const fileContent = `// =============================================
//  FORGOTTEN WORDS - Extra Languages Database (${allExtraWords.length} words)
//  Languages: fr, de, la, es, it, cu
// =============================================

const EXTRA_WORDS = ${JSON.stringify(allExtraWords, null, 2)};
`;
        fs.writeFileSync(EXTRA_FILE, fileContent, 'utf8');
        await new Promise(r => setTimeout(r, 2000));
    }

    console.log(`🎉 Finished generating extra languages! Total words in words_extra.js: ${allExtraWords.length}`);
}

main().catch(console.error);
