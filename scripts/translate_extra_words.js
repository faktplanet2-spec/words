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
                        temperature: 0.2
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
        } catch (err) {}
    }
    throw new Error('All Gemini candidate models failed');
}

async function main() {
    const apiKey = getApiKey();
    if (!apiKey) {
        console.error('No GEMINI_API_KEY found');
        process.exit(1);
    }

    const code = fs.readFileSync(EXTRA_FILE, 'utf8');
    const sandbox = {};
    new Function('sandbox', `${code}\nsandbox.words = EXTRA_WORDS;`)(sandbox);
    const words = sandbox.words;

    console.log(`Loaded ${words.length} words from words_extra.js.`);

    const BATCH_SIZE = 15;
    for (let i = 0; i < words.length; i += BATCH_SIZE) {
        const batch = words.slice(i, i + BATCH_SIZE);
        const needsTranslation = batch.some(w => !w.meanings || !w.meanings.de || !w.meanings.es || !w.meanings.fr || !w.meanings.it || !w.meanings.en);
        if (!needsTranslation) {
            console.log(`Batch ${i / BATCH_SIZE + 1} already translated.`);
            continue;
        }

        console.log(`⏳ Translating batch ${i / BATCH_SIZE + 1} (${batch.map(w => w.word).join(', ')})...`);

        const prompt = `You are an expert multilingual lexicographer and philologist.
For each word in the provided JSON array, provide authentic, native translations of:
1. "meaning" (explanation/definition)
2. "synonym" (1-3 modern equivalent words)
3. "etymology" (root origin)

Target languages: "ru", "en", "de", "es", "it", "fr".
Make sure each language has a natural, grammatically correct explanation in that language.
For example, for German words (e.g. "Wehr"), the German meaning should be in German (e.g. "Verteidigung, Schutz, Abwehr oder Waffe..."), English in English, Spanish in Spanish, French in French, Italian in Italian, Russian in Russian.

Words to translate:
${JSON.stringify(batch.map(w => ({ word: w.word, lang: w.lang, meaning: w.meaning, synonym: w.synonym, etymology: w.etymology })), null, 2)}

Respond with a JSON array where each object has:
{
  "word": "...",
  "meanings": {
    "ru": "...",
    "en": "...",
    "de": "...",
    "es": "...",
    "it": "...",
    "fr": "..."
  },
  "synonyms": {
    "ru": "...",
    "en": "...",
    "de": "...",
    "es": "...",
    "it": "...",
    "fr": "..."
  },
  "etymologies": {
    "ru": "...",
    "en": "...",
    "de": "...",
    "es": "...",
    "it": "...",
    "fr": "..."
  }
}`;

        try {
            const rawJson = await callGemini(apiKey, prompt);
            const translatedBatch = JSON.parse(rawJson);

            translatedBatch.forEach(t => {
                const targetWord = words.find(w => w.word.toLowerCase() === t.word.toLowerCase());
                if (targetWord) {
                    targetWord.meanings = t.meanings;
                    targetWord.synonyms = t.synonyms;
                    targetWord.etymologies = t.etymologies;
                }
            });

            // Save progress
            const fileContent = `// =============================================
//  FORGOTTEN WORDS - Extra Languages Database (${words.length} words)
//  Languages: fr, de, la, es, it, cu (Full Multilingual Explanations)
// =============================================

const EXTRA_WORDS = ${JSON.stringify(words, null, 2)};
`;
            fs.writeFileSync(EXTRA_FILE, fileContent, 'utf8');
            console.log(`✓ Batch ${i / BATCH_SIZE + 1} saved!`);
        } catch (err) {
            console.error(`Error in batch ${i / BATCH_SIZE + 1}:`, err.message);
        }

        await new Promise(r => setTimeout(r, 1200));
    }

    console.log('🎉 Finished translating words_extra.js!');
}

main().catch(console.error);
