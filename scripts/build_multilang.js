const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT_DIR = path.join(__dirname, '..');
const DATA_FILE = path.join(ROOT_DIR, 'data.js');
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
        console.error('No API key found in .env');
        process.exit(1);
    }

    const dataContent = fs.readFileSync(DATA_FILE, 'utf8');
    const sandbox = {};
    new Function('sandbox', `${dataContent}\nsandbox.UI = UI_STRINGS;\nsandbox.CATS = THEMATIC_CATEGORIES;\nsandbox.ERAS = ERA_LABELS;`)(sandbox);

    const baseEn = sandbox.UI.en;
    const baseRu = sandbox.UI.ru;

    const TARGET_LANGS = [
        { code: 'es', name: 'Español (Spanish)' },
        { code: 'de', name: 'Deutsch (German)' },
        { code: 'it', name: 'Italiano (Italian)' },
        { code: 'fr', name: 'Français (French)' }
    ];

    const results = {
        ru: baseRu,
        en: baseEn
    };

    for (const target of TARGET_LANGS) {
        console.log(`⏳ Translating UI strings to ${target.name}...`);
        const prompt = `You are a professional literary translator and UI localization expert for the web application "Forgotten Words" (Dictionary of Lost Words).
Translate the following English/Russian UI localization strings into ${target.name}.
Keep the same JSON keys. Ensure the tone is literary, elegant, and perfectly natural for a vintage/classical historical dictionary.
Do not use raw unescaped double quotes inside strings.

English base:
${JSON.stringify(baseEn, null, 2)}

Respond with a JSON object of translated key-value pairs for all keys.`;

        try {
            const rawJson = await callGemini(apiKey, prompt);
            const parsed = JSON.parse(rawJson);
            results[target.code] = parsed;
            console.log(`✓ Completed ${target.code} (${Object.keys(parsed).length} keys)`);
        } catch (e) {
            console.error(`Failed ${target.code}:`, e.message);
        }
        await new Promise(r => setTimeout(r, 1000));
    }

    // Now write updated UI_STRINGS into data.js
    const uiStringsRegex = /const UI_STRINGS = \{[\s\S]*?\n\};/;
    const newUIStringsCode = `const UI_STRINGS = ${JSON.stringify(results, null, 4)};`;
    
    let updatedDataContent = dataContent.replace(uiStringsRegex, newUIStringsCode);

    // Update THEMATIC_CATEGORIES to include es, de, it, fr
    const updatedCats = {
        'all':            { ru: 'Все темы', en: 'All Topics', es: 'Todos los temas', de: 'Alle Themen', it: 'Tutti i temi', fr: 'Tous les thèmes' },
        'nature_body':    { ru: '🌿 Человек и природа', en: '🌿 Anatomy & Nature', es: '🌿 Hombre y naturaleza', de: '🌿 Mensch & Natur', it: '🌿 Uomo e natura', fr: '🌿 Homme et nature' },
        'clothing':       { ru: '👗 Одежда и ткани', en: '👗 Clothing & Textiles', es: '👗 Ropa y telas', de: '👗 Kleidung & Stoffe', it: '👗 Abiti e tessuti', fr: '👗 Vêtements et tissus' },
        'professions':    { ru: '🔨 Профессии и чины', en: '🔨 Trades & Ranks', es: '🔨 Oficios y rangos', de: '🔨 Berufe & Ränge', it: '🔨 Mestieri e titoli', fr: '🔨 Métiers et rangs' },
        'measures_money': { ru: '⚖️ Меры и деньги', en: '⚖️ Measures & Currency', es: '⚖️ Medidas y moneda', de: '⚖️ Maße & Währung', it: '⚖️ Misure e moneta', fr: '⚖️ Mesures et monnaie' },
        'military':       { ru: '⚔️ Военное дело', en: '⚔️ Warfare & Arms', es: '⚔️ Arte militar y armas', de: '⚔️ Kriegskunst & Waffen', it: '⚔️ Arte militare e armi', fr: '⚔️ Art militaire et armes' },
        'household':      { ru: '🥣 Быт и утварь', en: '🥣 Household & Daily Life', es: '🥣 Vida cotidiana y hogar', de: '🥣 Alltag & Haushalt', it: '🥣 Vita quotidiana e casa', fr: '🥣 Vie quotidienne et foyer' },
        'speech_mind':    { ru: '💬 Речь и мысли', en: '💬 Speech & Feelings', es: '💬 Discurso y mente', de: '💬 Rede & Gefühle', it: '💬 Discorso e sentimenti', fr: '💬 Parole et sentiments' }
    };
    const catsRegex = /const THEMATIC_CATEGORIES = \{[\s\S]*?\n\};/;
    updatedDataContent = updatedDataContent.replace(catsRegex, `const THEMATIC_CATEGORIES = ${JSON.stringify(updatedCats, null, 4)};`);

    // Update WORD_TYPES
    const updatedWordTypes = {
        'all':         { ru: 'Все слова', en: 'All Words', es: 'Todas las palabras', de: 'Alle Wörter', it: 'Tutte le parole', fr: 'Tous les mots' },
        'archaism':    { ru: '🏛️ Архаизмы', en: '🏛️ Archaisms', es: '🏛️ Arcaísmos', de: '🏛️ Archaismen', it: '🏛️ Arcaismi', fr: '🏛️ Archaïsmes', descRu: 'Есть современный аналог', descEn: 'Has modern synonym' },
        'historicism': { ru: '📜 Историзмы', en: '📜 Historicisms', es: '📜 Historicismos', de: '📜 Historismen', it: '📜 Storicismi', fr: '📜 Historicismes', descRu: 'Само явление ушло в историю', descEn: 'Historical concept / extinct reality' }
    };
    const typesRegex = /const WORD_TYPES = \{[\s\S]*?\n\};/;
    updatedDataContent = updatedDataContent.replace(typesRegex, `const WORD_TYPES = ${JSON.stringify(updatedWordTypes, null, 4)};`);

    // Update ERA_LABELS
    const updatedEras = {
        'ancient-rus':          { ru: 'Древняя Русь', en: 'Ancient Rus', es: 'Antigua Rus', de: 'Altes Rus', it: 'Antica Rus', fr: 'Ancienne Rus\'' },
        'xv-xvii':              { ru: 'XV-XVII век', en: '15th-17th Century', es: 'Siglos XV-XVII', de: '15.-17. Jahrhundert', it: 'Secoli XV-XVII', fr: 'XVe-XVIIe siècle' },
        'xviii-xix':            { ru: 'XVIII-XIX век', en: '18th-19th Century', es: 'Siglos XVIII-XIX', de: '18.-19. Jahrhundert', it: 'Secoli XVIII-XIX', fr: 'XVIIIe-XIXe siècle' },
        'medieval':             { ru: 'Средневековье', en: 'Medieval England', es: 'Edad Media', de: 'Mittelalter', it: 'Medioevo', fr: 'Moyen Âge' },
        'elizabethan':          { ru: 'Елизаветинская эпоха', en: 'Elizabethan Era', es: 'Época isabelina', de: 'Elisabethanisches Zeitalter', it: 'Epoca elisabettiana', fr: 'Époque élisabéthaine' },
        'victorian':            { ru: 'Викторианская эпоха', en: 'Victorian Era', es: 'Época victoriana', de: 'Viktorianisches Zeitalter', it: 'Epoca vittoriana', fr: 'Époque victorienne' },
        'classical-antiquity':  { ru: 'Античность (Древний Рим)', en: 'Classical Antiquity', es: 'Antigüedad clásica', de: 'Klassische Antike', it: 'Antichità classica', fr: 'Antiquité classique' },
        'renaissance':          { ru: 'Эпоха Возрождения', en: 'Renaissance', es: 'Renacimiento', de: 'Renaissance', it: 'Rinascimento', fr: 'Renaissance' },
        'golden-age':           { ru: 'Золотой век', en: 'Golden Age (Siglo de Oro)', es: 'Siglo de Oro', de: 'Goldenes Zeitalter', it: 'Secolo d\'Oro', fr: 'Siècle d\'Or' },
        'enlightenment':        { ru: 'Эпоха Просвещения', en: 'Age of Enlightenment', es: 'Ilustración', de: 'Aufklärung', it: 'Illuminismo', fr: 'Siècle des Lumières' },
        'middle-ages':          { ru: 'Средние века', en: 'Middle Ages', es: 'Medievo', de: 'Mittelalter', it: 'Medioevo', fr: 'Moyen Âge' },
        'church-slavonic':      { ru: 'Церковнославянский', en: 'Old Church Slavonic', es: 'Eslavo eclesiástico', de: 'Altkirchenslawisch', it: 'Antico slavo ecclesiastico', fr: 'Vieux-slave' }
    };
    const erasRegex = /const ERA_LABELS = \{[\s\S]*?\n\};/;
    updatedDataContent = updatedDataContent.replace(erasRegex, `const ERA_LABELS = ${JSON.stringify(updatedEras, null, 4)};`);

    fs.writeFileSync(DATA_FILE, updatedDataContent, 'utf8');
    console.log('🎉 Successfully updated data.js with all 6 languages!');
}

main().catch(console.error);
