const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

// 1. Get Gemini API Key
function getApiKey() {
    if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;
    try {
        const envPath = path.join(__dirname, '..', '.env');
        if (fs.existsSync(envPath)) {
            const envContent = fs.readFileSync(envPath, 'utf8');
            const match = envContent.match(/GEMINI_API_KEY=(.+)/);
            if (match) return match[1].trim();
        }
    } catch (e) {}
    return null;
}

// 2. Get Git Diff
function getGitDiff() {
    try {
        // Try uncommitted changes
        let diff = execSync('git diff HEAD', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }).trim();
        if (diff) return { diff, context: 'Working tree changes against HEAD' };

        // Try staged changes
        diff = execSync('git diff --cached', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }).trim();
        if (diff) return { diff, context: 'Staged changes' };

        // Try last commit
        diff = execSync('git diff HEAD~1 HEAD', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }).trim();
        if (diff) return { diff, context: 'Latest commit (HEAD)' };
    } catch (err) {
        console.error('Error fetching git diff:', err.message);
    }
    return { diff: '', context: 'No changes detected' };
}

// 3. Call Gemini API with Fallback Models
async function callGemini(apiKey, prompt) {
    const candidateModels = [
        'gemini-3.5-flash-lite',
        'gemini-3.5-flash',
        'gemini-flash-lite-latest',
        'gemini-flash-latest',
        'gemini-3.8-flash'
    ];

    let lastError = null;

    for (const model of candidateModels) {
        try {
            console.log(`📡 Trying Gemini model: ${model}...`);
            const result = await new Promise((resolve, reject) => {
                const url = new URL(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`);
                const postData = JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }],
                    generationConfig: {
                        responseMimeType: "application/json",
                        temperature: 0.2,
                        topP: 0.95,
                        maxOutputTokens: 8192
                    }
                });

                const req = https.request(url, {
                    method: 'POST',
                    timeout: 12000,
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
                                reject(new Error(`Failed to parse Gemini response: ${e.message}`));
                            }
                        } else {
                            reject(new Error(`API Error ${res.statusCode}: ${body}`));
                        }
                    });
                });

                req.on('timeout', () => {
                    req.destroy(new Error(`Request to ${model} timed out after 12s`));
                });

                req.on('error', reject);
                req.write(postData);
                req.end();
            });

            if (result) {
                console.log(`✓ Model ${model} responded successfully!`);
                return result;
            }
        } catch (err) {
            console.warn(`⚠️ Model ${model} unavailable: ${err.message.slice(0, 100)}...`);
            lastError = err;
            // Short delay before trying next model
            await new Promise(r => setTimeout(r, 800));
        }
    }

    throw lastError || new Error('All Gemini candidate models failed.');
}

// 4. Main Verification & Deploy Pipeline
async function main() {
    console.log('====================================================');
    console.log('🤖 GEMINI CODE REVIEWER & VERIFICATION PIPELINE');
    console.log('====================================================\n');

    const apiKey = getApiKey();
    if (!apiKey) {
        console.error('❌ Error: GEMINI_API_KEY is not defined in .env or environment.');
        process.exit(1);
    }

    const { diff, context } = getGitDiff();
    if (!diff) {
        console.log('ℹ️ No recent git diff found to review. Everything is clean.');
        return;
    }

    console.log(`📋 Reviewing changes (${context})...`);
    console.log(`Diff size: ${diff.length} bytes.\n`);

    const reviewPrompt = `
You are an expert Senior Code Reviewer and Frontend QA for the project "Forgotten Words" (a dictionary web application for rare/archaic Russian and English words).

Here are the project requirements and critical guidelines:
1. DESIGN & RESPONSIVENESS:
   - Header must be clean, readable, two-tiered (row 1: Logo + Setting pills, row 2: Navigation).
   - Text must never clip, collide, or wrap into ugly vertical stacks.
   - Text and hero section must be pulled down with comfortable padding (never hidden behind fixed header).
   - Must support 22 Google fonts cleanly without breaking layout.
   - Must support Vintage Papyrus (sepia) as default, and Dark theme.
   - Must support Russian and English UI synchronization.
2. FUNCTIONALITY:
   - No JavaScript runtime errors or broken DOM selectors.
   - All interactive elements (theme, font, lang, quiz, suggest word) must work properly.

Here is the git diff of the changes to review:
\`\`\`diff
${diff.slice(0, 15000)}
\`\`\`

Evaluate these changes thoroughly.
You must respond in VALID JSON ONLY with this exact schema (no markdown formatting around json, or inside triple backticks json):
{
  "approved": true or false,
  "verdict": "APPROVED" or "CHANGES_REQUESTED",
  "score": 1 to 10,
  "summary": "Brief summary in Russian explaining the review",
  "visualReview": "PASSED / WARNING / FAILED - details",
  "functionalReview": "PASSED / WARNING / FAILED - details",
  "feedback": [
    "Specific issue or confirmation 1",
    "Specific issue or confirmation 2"
  ]
}
`;

    try {
        console.log('⏳ Sending diff to Gemini for review...');
        const responseText = await callGemini(apiKey, reviewPrompt);
        
        // Clean JSON formatting if wrapped in ```json
        let cleanJson = responseText.trim();
        if (cleanJson.startsWith('```json')) {
            cleanJson = cleanJson.replace(/^```json\s*/, '').replace(/\s*```$/, '');
        } else if (cleanJson.startsWith('```')) {
            cleanJson = cleanJson.replace(/^```\s*/, '').replace(/\s*```$/, '');
        }

        const review = JSON.parse(cleanJson);

        console.log('\n================ GEMINI VERDICT ================');
        console.log(`Verdict: ${review.approved ? '✅ ' + review.verdict : '❌ ' + review.verdict} (Score: ${review.score}/10)`);
        console.log(`Summary: ${review.summary}`);
        console.log(`Visual Check: ${review.visualReview}`);
        console.log(`Functional Check: ${review.functionalReview}`);
        console.log('\nFeedback:');
        review.feedback.forEach((f, i) => console.log(`  ${i + 1}. ${f}`));
        console.log('================================================\n');

        if (!review.approved) {
            console.error('⛔ Gemini requested changes. Deployment canceled until issues are resolved.');
            process.exit(1);
        }

        console.log('🚀 Changes APPROVED by Gemini! Proceeding with auto-deployment...\n');

        const dryRun = process.argv.includes('--dry-run');
        if (dryRun) {
            console.log('ℹ️ Running in --dry-run mode. Skipping git push and deployment.');
            return;
        }

        // If working directory has changes, commit them
        try {
            const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
            if (status) {
                console.log('📦 Staging and committing changes...');
                execSync('git add .');
                execSync(`git commit -m "deploy: Gemini approved changes - ${review.summary.replace(/"/g, "'").slice(0, 70)}"`);
                console.log('📤 Pushing to GitHub main...');
                execSync('git push origin main');
            }
        } catch (e) {
            console.log('Git commit/push note:', e.message);
        }

        // Deploy to Vercel
        console.log('🌐 Deploying to Vercel production...');
        const deployOut = execSync('cmd /c "npx --yes vercel --prod --yes"', { encoding: 'utf8' });
        console.log(deployOut);

        console.log('🎉 DEPLOYMENT COMPLETED SUCCESSFULLY!');
        console.log('Live Site: https://forgotten-words.vercel.app');

    } catch (err) {
        console.error('❌ Review Pipeline Error:', err.message);
        process.exit(1);
    }
}

main();
