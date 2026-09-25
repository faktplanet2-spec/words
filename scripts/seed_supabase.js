const fs = require('fs');
const path = require('path');
const https = require('https');
const vm = require('vm');

const SUPABASE_URL = 'https://lqqpdmyfmamhnjdeggfu.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Q93ZriksOP7lIa0Ibut1jw_8YJQa2AE';

// 1. Load WORDS_DATABASE from data.js, words_ru.js, words_en.js
function loadWordsDatabase() {
    const rootDir = path.join(__dirname, '..');
    const ruCode = fs.readFileSync(path.join(rootDir, 'words_ru.js'), 'utf8');
    const enCode = fs.readFileSync(path.join(rootDir, 'words_en.js'), 'utf8');
    const extraCode = fs.existsSync(path.join(rootDir, 'words_extra.js')) ? fs.readFileSync(path.join(rootDir, 'words_extra.js'), 'utf8') : '';
    const dataCode = fs.readFileSync(path.join(rootDir, 'data.js'), 'utf8');

    const context = {
        localStorage: {
            getItem: () => null,
            setItem: () => {}
        }
    };
    const evalFn = new Function('ctx', `
      ${ruCode}
      ${enCode}
      ${extraCode}
      ${dataCode}
      ctx.WORDS_DATABASE = WORDS_DATABASE;
    `);

    evalFn(context);

    if (!context.WORDS_DATABASE || !Array.isArray(context.WORDS_DATABASE)) {
        throw new Error('Failed to extract WORDS_DATABASE');
    }

    return context.WORDS_DATABASE;
}

// 2. Insert batch into Supabase PostgREST
async function insertBatch(batch, batchNum, totalBatches) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify(batch);
        const url = new URL(`${SUPABASE_URL}/rest/v1/words`);

        const req = https.request(url, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal',
                'Content-Length': Buffer.byteLength(postData)
            }
        }, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    console.log(`✓ Batch ${batchNum}/${totalBatches} inserted (${batch.length} words)`);
                    resolve();
                } else {
                    reject(new Error(`HTTP ${res.statusCode}: ${body}`));
                }
            });
        });

        req.on('error', reject);
        req.write(postData);
        req.end();
    });
}

// 3. Main Seeding Process
async function main() {
    console.log('====================================================');
    console.log('⚡ SUPABASE DATABASE SEEDER');
    console.log('====================================================\n');

    console.log('📖 Loading words from data.js...');
    const words = loadWordsDatabase();
    console.log(`Found ${words.length} total words.`);

    // Map words to database schema
    const dbWords = words.map(w => ({
        word: w.word,
        transcription: w.transcription || '',
        meaning: w.meaning,
        modern_synonym: w.modernSynonym || '',
        era: w.era || '',
        era_name: w.eraName || '',
        type: w.type || '',
        category: w.category || '',
        category_name: w.categoryName || '',
        source: w.source || '',
        lang: w.lang || 'ru'
    }));

    const BATCH_SIZE = 50;
    const totalBatches = Math.ceil(dbWords.length / BATCH_SIZE);

    console.log(`\n🚀 Uploading ${dbWords.length} words to Supabase in ${totalBatches} batches...`);

    for (let i = 0; i < dbWords.length; i += BATCH_SIZE) {
        const batch = dbWords.slice(i, i + BATCH_SIZE);
        const batchNum = Math.floor(i / BATCH_SIZE) + 1;
        try {
            await insertBatch(batch, batchNum, totalBatches);
            // Small throttle to be gentle with rate limits
            await new Promise(r => setTimeout(r, 100));
        } catch (err) {
            console.error(`\n❌ Error inserting batch ${batchNum}:`, err.message);
            if (err.message.includes('PGRST205') || err.message.includes('Could not find the table')) {
                console.error('\n⚠️ The table "words" does not exist yet in Supabase!');
                console.error('Please run the SQL schema in your Supabase SQL Editor first:');
                console.error('👉 https://supabase.com/dashboard/project/lqqpdmyfmamhnjdeggfu/sql/new\n');
            }
            process.exit(1);
        }
    }

    console.log('\n🎉 ALL WORDS SUCCESSFULLY SEEDED TO SUPABASE!');
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
