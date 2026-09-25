// =============================================
//  FORGOTTEN WORDS - Application Logic
//  Full features: Modern Synonyms, Archaisms/Historicisms,
//  Thematic Categories, Interactive Quiz, Suggest Word Form,
//  and Two Themes (Vintage Papyrus / Dark Manuscript).
// =============================================

(function () {
    'use strict';

    // === State ===
    let currentLang = 'en';           // UI language ('en' default, or 'ru')
    let currentTheme = 'sepia';       // 'sepia' (Papyrus default) or 'dark'
    let currentFont = 'bebas';        // 'bebas' (Bebas Neue default) or 'serif'
    let filterLang = 'en';            // Active language tab: 'en' default
    let filterType = 'all';            // 'all', 'archaism', 'historicism'
    let filterCategory = 'all';        // 'all', 'clothing', 'professions', etc.
    let filterEra = 'all';            // 'all' or specific era key
    let searchQuery = '';
    let displayedCount = 0;
    let currentHeroWord = null;       // Currently displayed Word of the Day
    const ITEMS_PER_PAGE = 16;

    // === Quiz State ===
    let quizScore = 0;
    let quizStreak = 0;
    let quizMode = 'meaning';         // 'meaning' or 'synonym'
    let currentQuizWord = null;
    let quizAnswered = false;

    // === DOM Refs ===
    const $ = id => document.getElementById(id);
    const $$ = sel => document.querySelectorAll(sel);

    const els = {
        themeToggle: $('themeToggle'),
        themeIcon: $('themeIcon'),
        themeLabelText: $('themeLabelText'),
        langToggle: $('langToggle'),
        langLabel: $('langLabel'),
        fontSelect: $('fontSelect'),
        langGroupLabel: $('langGroupLabel'),
        fontGroupLabel: $('fontGroupLabel'),
        themeGroupLabel: $('themeGroupLabel'),
        mobileMenuBtn: $('mobileMenuBtn'),
        nav: $('nav'),
        header: $('header'),

        // Hero Word of the Day
        heroDate: $('heroDate'),
        heroDateLabel: $('heroDateLabel'),
        wodWord: $('wodWord'),
        wodTranscription: $('wodTranscription'),
        wodMeaning: $('wodMeaning'),
        wodEra: $('wodEra'),
        wodType: $('wodType'),
        wodCategory: $('wodCategory'),
        wodSynonymWrap: $('wodSynonymWrap'),
        wodSynonymLabel: $('wodSynonymLabel'),
        wodSynonym: $('wodSynonym'),
        wodQuoteText: $('wodQuoteText'),
        wodQuoteSource: $('wodQuoteSource'),
        randomWordBtn: $('randomWordBtn'),
        heroQuizBtn: $('heroQuizBtn'),
        shareBtn: $('shareBtn'),
        statTotal: $('statTotal'),

        // Top Search Bar
        topSearchInput: $('topSearchInput'),
        topSearchClear: $('topSearchClear'),
        liveSearchDropdown: $('liveSearchDropdown'),
        dictionary: $('dictionary'),

        // Dictionary
        searchInput: $('searchInput'),
        searchClear: $('searchClear'),
        typeFilter: $('typeFilter'),
        categoryFilter: $('categoryFilter'),
        eraFilter: $('eraFilter'),
        wordsGrid: $('wordsGrid'),
        emptyState: $('emptyState'),
        loadMoreWrap: $('loadMoreWrap'),
        loadMoreBtn: $('loadMoreBtn'),
        langTabs: $('langTabs'),
        tabRu: $('tabRu'),
        tabEn: $('tabEn'),

        // Modals
        modalOverlay: $('modalOverlay'),
        modalClose: $('modalClose'),
        modalContent: $('modalContent'),

        // Quiz Modal
        quizModalOverlay: $('quizModalOverlay'),
        quizModalClose: $('quizModalClose'),
        navQuizBtn: $('navQuizBtn'),
        footerQuizBtn: $('footerQuizBtn'),
        quizScore: $('quizScore'),
        quizStreak: $('quizStreak'),
        quizModeMeaning: $('quizModeMeaning'),
        quizModeSynonym: $('quizModeSynonym'),
        quizWordText: $('quizWordText'),
        quizWordPron: $('quizWordPron'),
        quizWordEra: $('quizWordEra'),
        quizWordType: $('quizWordType'),
        quizPrompt: $('quizPrompt'),
        quizOptions: $('quizOptions'),
        quizFeedback: $('quizFeedback'),
        quizFeedbackBanner: $('quizFeedbackBanner'),
        quizExplanation: $('quizExplanation'),
        quizNextBtn: $('quizNextBtn'),

        // Suggest Word Modal
        suggestModalOverlay: $('suggestModalOverlay'),
        suggestModalClose: $('suggestModalClose'),
        navSuggestBtn: $('navSuggestBtn'),
        footerSuggestBtn: $('footerSuggestBtn'),
        suggestForm: $('suggestForm'),

        // Donate / Support Author Modal
        donateModalOverlay: $('donateModalOverlay'),
        donateModalClose: $('donateModalClose'),
        navDonateBtn: $('navDonateBtn'),
        footerDonateBtn: $('footerDonateBtn'),

        // Toast & Effects
        toast: $('toast'),
        particles: $('particles')
    };

    // === Supabase Database Integration ===
    const SUPABASE_URL = 'https://lqqpdmyfmamhnjdeggfu.supabase.co';
    const SUPABASE_KEY = 'sb_publishable_Q93ZriksOP7lIa0Ibut1jw_8YJQa2AE';
    let supabaseClient = null;

    try {
        if (window.supabase && typeof window.supabase.createClient === 'function') {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        }
    } catch (e) {
        console.warn('Supabase initialization note:', e);
    }

    async function syncWordsFromSupabase() {
        if (!supabaseClient) return;
        try {
            const { data, error } = await supabaseClient
                .from('words')
                .select('*')
                .order('id', { ascending: false })
                .limit(200);

            if (!error && Array.isArray(data) && data.length > 0) {
                let addedCount = 0;
                data.forEach(dbWord => {
                    const exists = WORDS_DATABASE.some(w => 
                        w.word.toLowerCase() === dbWord.word.toLowerCase() && 
                        w.lang === dbWord.lang
                    );
                    if (!exists) {
                        WORDS_DATABASE.unshift({
                            word: dbWord.word,
                            transcription: dbWord.transcription || '',
                            meaning: dbWord.meaning,
                            modernSynonym: dbWord.modern_synonym || '',
                            era: dbWord.era || '',
                            eraName: dbWord.era_name || '',
                            type: dbWord.type || '',
                            category: dbWord.category || '',
                            categoryName: dbWord.category_name || '',
                            source: dbWord.source || '',
                            lang: dbWord.lang || 'ru'
                        });
                        addedCount++;
                    }
                });

                if (addedCount > 0) {
                    console.log(`📥 Synced ${addedCount} new words from Supabase!`);
                    buildCategoryFilters();
                    buildEraFilters();
                    renderGrid();
                    if (els.statTotal) els.statTotal.textContent = WORDS_DATABASE.length;
                }
            }
        } catch (e) {
            console.warn('Supabase sync note:', e);
        }
    }

    // === Init ===
    function init() {
        loadPreferences();
        createParticles();
        buildTypeFilters();
        buildCategoryFilters();
        buildEraFilters();
        renderWordOfDay();
        renderGrid();
        bindEvents();
        updateUILanguage();
        animateStats();
        syncWordsFromSupabase();
    }

    // === Preferences (localStorage) ===
    function loadPreferences() {
        const savedTheme = localStorage.getItem('fw-theme');
        const savedLang = localStorage.getItem('fw-lang');
        const savedFont = localStorage.getItem('fw-font');

        if (savedTheme && ['dark', 'sepia'].includes(savedTheme)) {
            currentTheme = savedTheme;
        } else {
            currentTheme = 'sepia'; // Authentic Papyrus default
        }
        if (savedLang && ['ru', 'en'].includes(savedLang)) {
            currentLang = savedLang;
            filterLang = savedLang;
        } else {
            currentLang = 'en'; // English default
            filterLang = 'en';
        }
        const VALID_FONTS = [
            'bebas', 'playfair', 'cormorant', 'ebgaramond', 'cinzel',
            'lora', 'merriweather', 'spectral', 'oldstandard', 'philosopher',
            'marcellus', 'montserrat', 'oswald', 'raleway', 'robotocondensed',
            'rubik', 'comfortaa', 'unbounded', 'caveat', 'neucha',
            'amatic', 'underdog', 'serif'
        ];
        if (savedFont && VALID_FONTS.includes(savedFont)) {
            currentFont = savedFont;
        } else {
            currentFont = 'bebas'; // Bebas Neue default
        }

        applyTheme(currentTheme);
        applyFont(currentFont);
        if (els.langLabel) els.langLabel.textContent = currentLang === 'ru' ? 'Русский' : 'English';
        $$('.lang-tab').forEach(t => t.classList.toggle('active', t.dataset.lang === filterLang));
    }

    function savePreferences() {
        localStorage.setItem('fw-theme', currentTheme);
        localStorage.setItem('fw-lang', currentLang);
        localStorage.setItem('fw-font', currentFont);
    }

    // === Dynamic Font Switching (22 Fonts Supported) ===
    function applyFont(font) {
        const VALID_FONTS = [
            'bebas', 'playfair', 'cormorant', 'ebgaramond', 'cinzel',
            'lora', 'merriweather', 'spectral', 'oldstandard', 'philosopher',
            'marcellus', 'montserrat', 'oswald', 'raleway', 'robotocondensed',
            'rubik', 'comfortaa', 'unbounded', 'caveat', 'neucha',
            'amatic', 'underdog', 'serif'
        ];
        if (!VALID_FONTS.includes(font)) font = 'bebas';
        document.documentElement.setAttribute('data-font', font);
        currentFont = font;
        if (els.fontSelect && els.fontSelect.value !== font) {
            els.fontSelect.value = font;
        }
    }

    // === Two-State Theme Toggle (Papyrus <-> Dark) ===
    function applyTheme(theme) {
        if (theme !== 'dark') theme = 'sepia';
        document.documentElement.setAttribute('data-theme', theme);
        currentTheme = theme;
        if (theme === 'sepia') {
            if (els.themeIcon) els.themeIcon.textContent = '📜';
            if (els.themeLabelText) els.themeLabelText.textContent = t('themePapyrus');
            if (els.themeToggle) els.themeToggle.title = currentLang === 'ru' ? 'Тема: Винтажный папирус (нажмите для тёмной)' : 'Theme: Vintage Papyrus (click for Dark mode)';
        } else {
            if (els.themeIcon) els.themeIcon.textContent = '🌙';
            if (els.themeLabelText) els.themeLabelText.textContent = t('themeDark');
            if (els.themeToggle) els.themeToggle.title = currentLang === 'ru' ? 'Тема: Тёмная (нажмите для папируса)' : 'Theme: Dark mode (click for Papyrus)';
        }
    }

    function cycleTheme() {
        let newTheme = currentTheme === 'sepia' ? 'dark' : 'sepia';
        applyTheme(newTheme);
        savePreferences();
        showToast(currentLang === 'ru' 
            ? (newTheme === 'sepia' ? '📜 Винтажный папирус' : '🌙 Тёмная тема')
            : (newTheme === 'sepia' ? '📜 Vintage Papyrus' : '🌙 Dark theme'));
    }

    // === Language Toggle: 100% TRANSLATION OF ENTIRE APP ===
    function toggleLang() {
        currentLang = currentLang === 'ru' ? 'en' : 'ru';
        filterLang = currentLang; // STRICT SYNCHRONIZATION!
        if (els.langLabel) els.langLabel.textContent = currentLang === 'ru' ? 'Русский' : 'English';
        
        $$('.lang-tab').forEach(t => t.classList.toggle('active', t.dataset.lang === currentLang));

        updateUILanguage();
        buildTypeFilters();
        buildCategoryFilters();
        buildEraFilters();
        renderWordOfDay();
        renderGrid();

        if (els.quizModalOverlay && els.quizModalOverlay.classList.contains('open')) {
            loadQuizQuestion();
        }
        savePreferences();
        showToast(currentLang === 'ru' ? 'Язык: Русский' : 'Language: English');
    }

    function t(key) {
        return (UI_STRINGS[currentLang] && UI_STRINGS[currentLang][key]) || key;
    }

    function updateUILanguage() {
        if (els.langLabel) els.langLabel.textContent = currentLang === 'ru' ? 'Русский' : 'English';
        if (els.langGroupLabel) els.langGroupLabel.textContent = t('actionLangLabel');
        if (els.fontGroupLabel) els.fontGroupLabel.textContent = t('actionFontLabel');
        if (els.themeGroupLabel) els.themeGroupLabel.textContent = t('actionThemeLabel');
        if (els.themeLabelText) els.themeLabelText.textContent = currentTheme === 'sepia' ? t('themePapyrus') : t('themeDark');

        // Logo
        if ($('logoTitle')) $('logoTitle').textContent = t('logoTitle');
        if ($('logoSubtitle')) $('logoSubtitle').textContent = t('logoSubtitle');

        // Navigation
        if ($('navWordOfDay')) $('navWordOfDay').textContent = t('navWordOfDay');
        if ($('navDictionary')) $('navDictionary').textContent = t('navDictionary');
        if ($('navQuiz')) $('navQuiz').textContent = t('navQuiz');
        if ($('navSuggest')) $('navSuggest').textContent = t('navSuggest');
        if ($('navAbout')) $('navAbout').textContent = t('navAbout');

        // Hero labels & buttons
        if (els.heroDateLabel) els.heroDateLabel.textContent = t('wordOfDay');
        if ($('randomBtnLabel')) $('randomBtnLabel').textContent = t('randomWord');
        if ($('heroQuizLabel')) $('heroQuizLabel').textContent = t('navQuiz');
        if ($('shareBtnLabel')) $('shareBtnLabel').textContent = t('copy');
        if (els.wodSynonymLabel) els.wodSynonymLabel.textContent = t('synonymLabel');

        // Stats labels
        if ($('statTotalLabel')) $('statTotalLabel').textContent = t('wordsInDict');
        if ($('statErasLabel')) $('statErasLabel').textContent = t('eras');
        if ($('statLangsLabel')) $('statLangsLabel').textContent = t('languages');

        // Top Search Header
        if ($('heroSearchTitle')) $('heroSearchTitle').textContent = t('heroSearchTitle');
        if ($('heroSearchSubtitle')) $('heroSearchSubtitle').textContent = t('heroSearchSubtitle');
        if (els.topSearchInput) els.topSearchInput.placeholder = t('heroSearchPlaceholder');

        // Dictionary header & controls
        if ($('dictTitle')) $('dictTitle').textContent = t('dictionary');
        if ($('dictDesc')) $('dictDesc').textContent = t('dictDesc');
        if ($('filterTypeLabel')) $('filterTypeLabel').textContent = t('wordType');
        if ($('filterCategoryLabel')) $('filterCategoryLabel').textContent = t('category');
        if ($('filterEraLabel')) $('filterEraLabel').textContent = t('era');
        if (els.searchInput) els.searchInput.placeholder = t('searchPlaceholder');
        if ($('emptyText')) $('emptyText').textContent = t('notFound');
        if ($('loadMoreLabel')) $('loadMoreLabel').textContent = t('showMore');

        // Language tabs
        if ($('tabRuLabel')) $('tabRuLabel').textContent = t('tabRu');
        if ($('tabEnLabel')) $('tabEnLabel').textContent = t('tabEn');
        $$('.tab-ru-label').forEach(el => el.textContent = t('tabRu'));
        $$('.tab-en-label').forEach(el => el.textContent = t('tabEn'));

        // About section
        if ($('aboutTitle')) $('aboutTitle').textContent = t('aboutTitle');
        if ($('aboutP1')) $('aboutP1').innerHTML = t('aboutP1');
        if ($('aboutP2')) $('aboutP2').textContent = t('aboutP2');
        if ($('aboutP3')) $('aboutP3').textContent = t('aboutP3');
        if ($('feat1Title')) $('feat1Title').textContent = t('feat1Title');
        if ($('feat1Desc')) $('feat1Desc').textContent = t('feat1Desc');
        if ($('feat2Title')) $('feat2Title').textContent = t('feat2Title');
        if ($('feat2Desc')) $('feat2Desc').textContent = t('feat2Desc');
        if ($('feat3Title')) $('feat3Title').textContent = t('feat3Title');
        if ($('feat3Desc')) $('feat3Desc').textContent = t('feat3Desc');
        if ($('feat4Title')) $('feat4Title').textContent = t('feat4Title');
        if ($('feat4Desc')) $('feat4Desc').textContent = t('feat4Desc');

        // Footer
        if ($('footerCopy')) $('footerCopy').textContent = t('footerCopy');
        if ($('footerMade')) $('footerMade').textContent = t('footerMade');
        if ($('footerSuggestBtn')) $('footerSuggestBtn').textContent = '✍️ ' + t('navSuggest');
        if ($('footerQuizBtn')) $('footerQuizBtn').textContent = '🎯 ' + t('navQuiz');

        // Quiz labels & modes
        if ($('quizBadgeTitle')) $('quizBadgeTitle').textContent = t('quizTitle');
        if ($('quizStreakLabel')) $('quizStreakLabel').textContent = t('streak') + ':';
        if ($('quizScoreLabel')) $('quizScoreLabel').textContent = t('score') + ':';
        if ($('quizNextLabel')) $('quizNextLabel').textContent = t('nextQuestion') + ' →';
        if ($('quizModeMeaning')) $('quizModeMeaning').textContent = t('quizModeMeaning');
        if ($('quizModeSynonym')) $('quizModeSynonym').textContent = t('quizModeSynonym');

        // Suggest modal
        if ($('suggestTitle')) $('suggestTitle').textContent = t('suggestTitle');
        if ($('suggestDesc')) $('suggestDesc').textContent = t('suggestSubtitle');
        if ($('suggestWordLabel')) $('suggestWordLabel').innerHTML = t('suggestWordLabel');
        if ($('suggestWordInput')) $('suggestWordInput').placeholder = t('suggestWordPlaceholder');
        if ($('suggestLangLabel')) $('suggestLangLabel').textContent = t('suggestLangLabel');
        if ($('optLangRu')) $('optLangRu').textContent = currentLang === 'ru' ? 'Русский язык' : 'Russian';
        if ($('optLangEn')) $('optLangEn').textContent = currentLang === 'ru' ? 'Английский язык' : 'English';
        if ($('suggestSynonymLabel')) $('suggestSynonymLabel').innerHTML = t('suggestSynonymLabel');
        if ($('suggestSynonymInput')) $('suggestSynonymInput').placeholder = t('suggestSynonymPlaceholder');
        if ($('suggestTypeLabel')) $('suggestTypeLabel').textContent = t('suggestTypeLabel');
        if ($('optTypeArchaism')) $('optTypeArchaism').textContent = t('typeArchaism');
        if ($('optTypeHistoricism')) $('optTypeHistoricism').textContent = t('typeHistoricism');
        if ($('suggestCategoryLabel')) $('suggestCategoryLabel').textContent = t('suggestCategoryLabel');
        if ($('suggestMeaningLabel')) $('suggestMeaningLabel').innerHTML = t('suggestMeaningLabel');
        if ($('suggestMeaningInput')) $('suggestMeaningInput').placeholder = t('suggestMeaningPlaceholder');
        if ($('suggestSourceLabel')) $('suggestSourceLabel').textContent = t('suggestSourceLabel');
        if ($('suggestSourceInput')) $('suggestSourceInput').placeholder = t('suggestSourcePlaceholder');
        if ($('suggestAuthorLabel')) $('suggestAuthorLabel').textContent = t('suggestAuthorLabel');
        if ($('suggestAuthorInput')) $('suggestAuthorInput').placeholder = t('suggestAuthorPlaceholder');
        if ($('submitWordLabel')) $('submitWordLabel').textContent = t('submitWord');

        // Donate / Support strings
        if ($('navDonate')) $('navDonate').textContent = t('navDonate');
        if ($('footerDonateBtn')) $('footerDonateBtn').textContent = t('footerDonate');
        if ($('donateTitle')) $('donateTitle').textContent = t('donateTitle');
        if ($('donateDesc')) $('donateDesc').textContent = t('donateDesc');
        if ($('boostySub')) $('boostySub').textContent = t('boostySub');
        if ($('cloudtipsSub')) $('cloudtipsSub').textContent = t('cloudtipsSub');
        if ($('donattySub')) $('donattySub').textContent = t('donattySub');
        if ($('donateNote')) $('donateNote').textContent = t('donateNote');
        if ($('statLangsLabel')) $('statLangsLabel').textContent = t('statLangsLabel') || 'языков';

        // Suggest modal category options
        if ($('optCatNature')) $('optCatNature').textContent = THEMATIC_CATEGORIES['nature_body'][currentLang];
        if ($('optCatHousehold')) $('optCatHousehold').textContent = THEMATIC_CATEGORIES['household'][currentLang];
        if ($('optCatClothing')) $('optCatClothing').textContent = THEMATIC_CATEGORIES['clothing'][currentLang];
        if ($('optCatProf')) $('optCatProf').textContent = THEMATIC_CATEGORIES['professions'][currentLang];
        if ($('optCatMilitary')) $('optCatMilitary').textContent = THEMATIC_CATEGORIES['military'][currentLang];
        if ($('optCatMoney')) $('optCatMoney').textContent = THEMATIC_CATEGORIES['measures_money'][currentLang];
        if ($('optCatSpeech')) $('optCatSpeech').textContent = THEMATIC_CATEGORIES['speech_mind'][currentLang];

        // Apply theme title
        applyTheme(currentTheme);
    }

    // === Particles Background ===
    function createParticles() {
        const count = 28;
        els.particles.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.width = (2 + Math.random() * 4) + 'px';
            particle.style.height = particle.style.width;
            particle.style.animationDuration = (18 + Math.random() * 22) + 's';
            particle.style.animationDelay = (Math.random() * 15) + 's';
            els.particles.appendChild(particle);
        }
    }

    // === Word of the Day (Strictly by Language Tab) ===
    function getWordOfDay() {
        const pool = WORDS_DATABASE.filter(w => w.lang === filterLang);
        const list = pool.length > 0 ? pool : (WORDS_DATABASE.filter(w => w.lang === 'ru').length > 0 ? WORDS_DATABASE.filter(w => w.lang === 'ru') : WORDS_DATABASE);
        if (!list || list.length === 0) return null;
        const today = new Date();
        const dayIndex = today.getFullYear() * 366 + today.getMonth() * 31 + today.getDate();
        return list[dayIndex % list.length];
    }

    function renderWordOfDay(word) {
        let w = word;
        if (!w || w.lang !== filterLang) {
            w = getWordOfDay();
        }
        if (!w) return;
        currentHeroWord = w;
        const today = new Date();
        els.heroDate.textContent = today.toLocaleDateString(currentLang === 'ru' ? 'ru-RU' : 'en-US', {
            day: 'numeric', month: 'long', year: 'numeric'
        });
        els.wodWord.textContent = w.word;
        els.wodTranscription.textContent = w.pronunciation;
        els.wodMeaning.textContent = w.meaning;

        // Era badge
        els.wodEra.textContent = ERA_LABELS[w.eraKey]
            ? ERA_LABELS[w.eraKey][currentLang]
            : w.era;

        // Type badge (Archaism vs Historicism)
        const typeInfo = WORD_TYPES[w.wordType] || WORD_TYPES['archaism'];
        els.wodType.textContent = typeInfo[currentLang];
        els.wodType.className = 'word-type-badge ' + (w.wordType === 'historicism' ? 'historicism' : 'archaism');

        // Category badge
        const catInfo = THEMATIC_CATEGORIES[w.category];
        if (catInfo) {
            els.wodCategory.textContent = catInfo[currentLang];
            els.wodCategory.style.display = 'inline-flex';
        } else {
            els.wodCategory.style.display = 'none';
        }

        // Modern synonym pill highlight (untruncated full designation)
        if (w.synonym) {
            els.wodSynonymWrap.style.display = 'inline-flex';
            els.wodSynonym.textContent = w.synonym;
        } else {
            els.wodSynonymWrap.style.display = 'none';
        }

        els.wodQuoteText.textContent = w.quote;
        els.wodQuoteSource.textContent = '- ' + w.source;

        // Animate entrance
        const card = document.querySelector('.word-card-hero');
        if (card) {
            card.style.animation = 'none';
            card.offsetHeight; // trigger reflow
            card.style.animation = 'fadeInUp 0.7s ease-out';
        }
    }

    function showRandomWord() {
        const pool = WORDS_DATABASE.filter(w => w.lang === filterLang);
        const list = pool.length > 0 ? pool : WORDS_DATABASE;
        const w = list[Math.floor(Math.random() * list.length)];
        renderWordOfDay(w);
        document.getElementById('word-of-day').scrollIntoView({ behavior: 'smooth' });
    }

    // === Dynamic Type Filters ===
    function buildTypeFilters() {
        if (!els.typeFilter) return;
        els.typeFilter.innerHTML = `
            <button class="chip ${filterType === 'all' ? 'active' : ''}" data-type="all">${t('allWords')}</button>
            <button class="chip ${filterType === 'archaism' ? 'active' : ''}" data-type="archaism">${t('typeArchaism')}</button>
            <button class="chip ${filterType === 'historicism' ? 'active' : ''}" data-type="historicism">${t('typeHistoricism')}</button>
        `;
    }

    // === Dynamic Thematic Category Filters ===
    function buildCategoryFilters() {
        if (!els.categoryFilter) return;
        let html = `<button class="chip ${filterCategory === 'all' ? 'active' : ''}" data-category="all">${t('allCategories')}</button>`;
        for (const [key, info] of Object.entries(THEMATIC_CATEGORIES)) {
            if (key === 'all') continue;
            html += `<button class="chip ${filterCategory === key ? 'active' : ''}" data-category="${key}">${info[currentLang]}</button>`;
        }
        els.categoryFilter.innerHTML = html;
    }

    // === Dynamic Era Filters ===
    function buildEraFilters() {
        if (!els.eraFilter) return;
        let html = `<button class="chip ${filterEra === 'all' ? 'active' : ''}" data-era="all">${t('allEras')}</button>`;
        const wordsForLang = WORDS_DATABASE.filter(w => w.lang === filterLang);
        const uniqueEras = [...new Set(wordsForLang.map(w => w.eraKey))];
        uniqueEras.forEach(eraKey => {
            const label = ERA_LABELS[eraKey] ? ERA_LABELS[eraKey][currentLang] : eraKey;
            html += `<button class="chip ${filterEra === eraKey ? 'active' : ''}" data-era="${eraKey}">${label}</button>`;
        });
        els.eraFilter.innerHTML = html;
    }

    // === Language Tabs (Strict Separation & Synchronization) ===
    function switchLangTab(lang) {
        if (lang === 'ru' || lang === 'en') {
            currentLang = lang;
            if (els.langLabel) els.langLabel.textContent = currentLang === 'ru' ? 'Русский' : 'English';
        }
        filterLang = lang;
        filterEra = 'all';
        filterType = 'all';
        filterCategory = 'all';

        $$('.lang-tab').forEach(t => t.classList.toggle('active', t.dataset.lang === lang));

        updateUILanguage();
        buildTypeFilters();
        buildCategoryFilters();
        buildEraFilters();
        renderWordOfDay();
        renderGrid();
        if (searchQuery) handleLiveSearch(searchQuery);

        if (els.quizModalOverlay && els.quizModalOverlay.classList.contains('open')) {
            loadQuizQuestion();
        }
        savePreferences();
    }

    // === Live Search Dropdown ===
    function handleLiveSearch(query) {
        if (!els.liveSearchDropdown) return;
        query = (query || '').trim().toLowerCase();
        if (!query) {
            els.liveSearchDropdown.classList.remove('open');
            els.liveSearchDropdown.innerHTML = '';
            return;
        }

        const matches = WORDS_DATABASE.filter(w => {
            if (filterLang && w.lang !== filterLang) return false;
            return (
                w.word.toLowerCase().includes(query) ||
                (w.synonym && w.synonym.toLowerCase().includes(query)) ||
                w.meaning.toLowerCase().includes(query) ||
                (w.tags && w.tags.some(t => t.toLowerCase().includes(query)))
            );
        });

        if (matches.length === 0) {
            els.liveSearchDropdown.innerHTML = `
                <div class="live-search-empty">
                    <span>🔍</span> ${t('liveSearchNone')}
                </div>
            `;
            els.liveSearchDropdown.classList.add('open');
            return;
        }

        const topMatches = matches.slice(0, 6);
        let html = '<div class="live-search-list">';
        topMatches.forEach(w => {
            const isRu = w.lang === 'ru';
            const typeLabel = w.wordType === 'historicism' 
                ? (isRu ? 'Историзм' : 'Historicism')
                : (isRu ? 'Архаизм' : 'Archaism');
            html += `
                <div class="live-search-item" data-word="${encodeURIComponent(w.word)}" data-lang="${w.lang}">
                    <div class="live-item-header">
                        <span class="live-item-word">${w.word}</span>
                        <span class="live-item-transcription">${w.pronunciation || ''}</span>
                        <span class="live-item-type ${w.wordType}">${typeLabel}</span>
                        <span class="live-item-era">${w.era}</span>
                    </div>
                    ${w.synonym ? `<div class="live-item-synonym">✨ <strong>${w.synonym}</strong></div>` : ''}
                    <div class="live-item-meaning">${w.meaning}</div>
                </div>
            `;
        });
        html += '</div>';

        if (matches.length > 6) {
            html += `
                <div class="live-search-footer" id="liveSearchSeeAllBtn">
                    <span>👉 ${t('liveSearchSeeAll')} (${matches.length}) ↓</span>
                </div>
            `;
        }

        els.liveSearchDropdown.innerHTML = html;
        els.liveSearchDropdown.classList.add('open');

        // Bind clicks on items
        els.liveSearchDropdown.querySelectorAll('.live-search-item').forEach(item => {
            item.addEventListener('click', () => {
                const wordName = decodeURIComponent(item.dataset.word);
                const wordLang = item.dataset.lang;
                const found = WORDS_DATABASE.find(w => w.word === wordName && w.lang === wordLang);
                if (found) {
                    openModal(found);
                    els.liveSearchDropdown.classList.remove('open');
                }
            });
        });

        const seeAllBtn = els.liveSearchDropdown.querySelector('#liveSearchSeeAllBtn');
        if (seeAllBtn) {
            seeAllBtn.addEventListener('click', () => {
                els.liveSearchDropdown.classList.remove('open');
                if (els.dictionary) els.dictionary.scrollIntoView({ behavior: 'smooth' });
            });
        }
    }

    // === Filtering ===
    function getFilteredWords() {
        return WORDS_DATABASE.filter(w => {
            // Strict language tab filter
            if (w.lang !== filterLang) return false;

            // Word type filter (archaism vs historicism)
            if (filterType !== 'all' && w.wordType !== filterType) return false;

            // Thematic category filter
            if (filterCategory !== 'all' && w.category !== filterCategory) return false;

            // Era filter
            if (filterEra !== 'all' && w.eraKey !== filterEra) return false;

            // Search query (matches word, synonym, meaning, or tags)
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                return (
                    w.word.toLowerCase().includes(q) ||
                    (w.synonym && w.synonym.toLowerCase().includes(q)) ||
                    w.meaning.toLowerCase().includes(q) ||
                    (w.tags && w.tags.some(tag => tag.toLowerCase().includes(q)))
                );
            }
            return true;
        });
    }

    // === Copy ONLY the word itself ===
    function copySingleWord(wordText) {
        if (!wordText) return;
        const cleanWord = wordText.trim();
        navigator.clipboard.writeText(cleanWord).then(() => {
            showToast(t('copied') + ' (' + cleanWord + ')');
        }).catch(() => {
            // Fallback for older environments
            const textArea = document.createElement('textarea');
            textArea.value = cleanWord;
            textArea.style.position = 'fixed';
            textArea.style.left = '-9999px';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                showToast(t('copied') + ' (' + cleanWord + ')');
            } catch (err) {
                showToast('Error copying');
            }
            document.body.removeChild(textArea);
        });
    }

    function copyWordOfDay() {
        const w = currentHeroWord || getWordOfDay();
        if (w && w.word) {
            copySingleWord(w.word);
        }
    }

    // === Grid Rendering ===
    function renderGrid(append) {
        const filtered = getFilteredWords();
        if (!append) {
            displayedCount = 0;
            els.wordsGrid.innerHTML = '';
        }

        const start = displayedCount;
        const end = Math.min(start + ITEMS_PER_PAGE, filtered.length);
        const slice = filtered.slice(start, end);

        slice.forEach((w, i) => {
            const card = createWordCard(w, start + i);
            els.wordsGrid.appendChild(card);
        });

        displayedCount = end;

        els.emptyState.classList.toggle('hidden', filtered.length > 0);
        els.loadMoreWrap.classList.toggle('hidden', displayedCount >= filtered.length);
        els.statTotal.textContent = WORDS_DATABASE.length;
    }

    function createWordCard(w, index) {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.style.animationDelay = (index % ITEMS_PER_PAGE) * 0.05 + 's';
        card.dataset.id = w.id;

        const eraLabel = ERA_LABELS[w.eraKey]
            ? ERA_LABELS[w.eraKey][currentLang]
            : w.era;

        const isHistoricism = w.wordType === 'historicism';
        const typeLabel = isHistoricism 
            ? (currentLang === 'ru' ? 'Историзм' : 'Historicism')
            : (currentLang === 'ru' ? 'Архаизм' : 'Archaism');

        const communityBadge = w.isCommunity 
            ? `<span class="card-community-badge">🌟 ${currentLang === 'ru' ? 'Народное' : 'Community'}</span>` 
            : '';

        card.innerHTML = `
            <div class="word-card-header">
                <h3 class="word-card-title">${w.word}</h3>
                <div class="word-card-badges">
                    <button class="word-quick-copy" title="${t('copy')}" aria-label="${t('copy')}">📋</button>
                    <span class="word-card-lang">${w.lang.toUpperCase()}</span>
                </div>
            </div>

            <div class="word-card-badges-top">
                <span class="card-type-chip ${isHistoricism ? 'card-type-historicism' : 'card-type-archaism'}">${typeLabel}</span>
                <span class="word-card-era">${eraLabel}</span>
                ${communityBadge}
            </div>

            <p class="word-card-pronunciation">${w.pronunciation}</p>

            ${w.synonym ? `
            <div class="word-card-synonym">
                <span>🔄</span>
                <span>${currentLang === 'ru' ? 'Аналог: ' : 'Equivalent: '}<strong>${w.synonym}</strong></span>
            </div>` : ''}

            <p class="word-card-meaning">${w.meaning}</p>
            <div class="word-card-footer">
                <span class="word-card-source">${w.source}</span>
                <span class="word-card-arrow">→</span>
            </div>
        `;

        // Quick copy button (copies exclusively w.word)
        const copyBtn = card.querySelector('.word-quick-copy');
        if (copyBtn) {
            copyBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                copySingleWord(w.word);
            });
        }

        card.addEventListener('click', () => openModal(w));
        return card;
    }

    // === Word Details Modal ===
    function openModal(w) {
        const eraLabel = ERA_LABELS[w.eraKey]
            ? ERA_LABELS[w.eraKey][currentLang]
            : w.era;

        const isHistoricism = w.wordType === 'historicism';
        const typeInfo = WORD_TYPES[w.wordType] || WORD_TYPES['archaism'];
        const typeDesc = currentLang === 'ru' ? typeInfo.descRu : typeInfo.descEn;

        els.modalContent.innerHTML = `
            <div class="word-meta-badges">
                <span class="word-era-badge">${eraLabel}</span>
                <span class="word-type-badge ${isHistoricism ? 'historicism' : 'archaism'}">${typeInfo[currentLang]}</span>
                ${w.isCommunity ? `<span class="card-community-badge">🌟 ${currentLang === 'ru' ? 'Добавлено читателем' : 'Community Contribution'}</span>` : ''}
            </div>

            <div class="modal-word-header">
                <h2 class="word-main">${w.word}</h2>
                <button class="btn btn-outline modal-copy-btn" id="modalCopyBtn" title="${t('copy')}">
                    <span>📋</span> <span>${t('copy')}</span>
                </button>
            </div>

            <p class="word-transcription">${w.pronunciation}</p>

            ${w.synonym ? `
            <div class="modal-synonym-box">
                <span style="font-size: 1.5rem;">✨</span>
                <div>
                    <div class="modal-synonym-title">${t('synonymLabel')}</div>
                    <div class="modal-synonym-text">${w.synonym}</div>
                    <small style="color: var(--text-muted); font-size: 0.8rem;">${typeDesc}</small>
                </div>
            </div>` : ''}

            <p class="word-meaning">${w.meaning}</p>

            <blockquote class="word-quote">
                <p>${w.quote}</p>
                <cite>- ${w.source}</cite>
            </blockquote>

            <div class="word-etymology">
                <h4>📜 ${t('etymology')}</h4>
                <p>${w.etymology}</p>
            </div>

            <div class="word-usage">
                <h4>💡 ${t('usageLabel')}</h4>
                <p>${w.usage}</p>
            </div>
        `;

        const modalCopy = els.modalContent.querySelector('#modalCopyBtn');
        if (modalCopy) {
            modalCopy.addEventListener('click', () => copySingleWord(w.word));
        }

        els.modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        els.modalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ==========================================
    // === Interactive Quiz Engine (Викторина) ===
    // ==========================================
    function openQuizModal() {
        els.quizModalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        loadQuizQuestion();
    }

    function closeQuizModal() {
        els.quizModalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    function loadQuizQuestion() {
        quizAnswered = false;
        els.quizFeedback.classList.add('hidden');
        els.quizOptions.innerHTML = '';

        // Pool strictly from active language tab
        const pool = WORDS_DATABASE.filter(w => w.lang === filterLang);
        if (pool.length < 5) return;

        // Pick random question word
        const targetWord = pool[Math.floor(Math.random() * pool.length)];
        currentQuizWord = targetWord;

        // Render question info
        els.quizWordText.textContent = targetWord.word;
        els.quizWordPron.textContent = targetWord.pronunciation;
        els.quizWordEra.textContent = ERA_LABELS[targetWord.eraKey]
            ? ERA_LABELS[targetWord.eraKey][currentLang]
            : targetWord.era;
        els.quizWordType.textContent = (WORD_TYPES[targetWord.wordType] || WORD_TYPES['archaism'])[currentLang];

        if (quizMode === 'synonym') {
            els.quizPrompt.textContent = currentLang === 'ru'
                ? 'Подберите верный современный синоним:'
                : 'Select the correct modern equivalent:';
        } else {
            els.quizPrompt.textContent = currentLang === 'ru'
                ? 'Выберите правильное значение слова:'
                : 'Choose the correct meaning of this word:';
        }

        // Generate 3 distractors from the same language
        const distractors = [];
        const usedIndices = new Set();
        while (distractors.length < 3) {
            const idx = Math.floor(Math.random() * pool.length);
            if (pool[idx].word !== targetWord.word && !usedIndices.has(idx)) {
                usedIndices.add(idx);
                distractors.push(pool[idx]);
            }
        }

        // Build 4 choices
        const choices = [
            { isCorrect: true, text: quizMode === 'synonym' ? targetWord.synonym : targetWord.meaning },
            { isCorrect: false, text: quizMode === 'synonym' ? distractors[0].synonym : distractors[0].meaning },
            { isCorrect: false, text: quizMode === 'synonym' ? distractors[1].synonym : distractors[1].meaning },
            { isCorrect: false, text: quizMode === 'synonym' ? distractors[2].synonym : distractors[2].meaning }
        ];

        // Shuffle choices
        choices.sort(() => Math.random() - 0.5);

        const letters = ['A', 'B', 'C', 'D'];
        choices.forEach((choice, i) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-opt-btn';
            btn.dataset.correct = choice.isCorrect ? 'true' : 'false';
            btn.innerHTML = `
                <span class="quiz-opt-letter">${letters[i]}</span>
                <span class="quiz-opt-text">${choice.text}</span>
            `;
            btn.addEventListener('click', () => handleQuizAnswer(btn, choice.isCorrect, targetWord));
            els.quizOptions.appendChild(btn);
        });
    }

    function handleQuizAnswer(clickedBtn, isCorrect, word) {
        if (quizAnswered) return;
        quizAnswered = true;

        // Disable all option buttons
        const allButtons = els.quizOptions.querySelectorAll('.quiz-opt-btn');
        allButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.correct === 'true') {
                btn.classList.add('correct');
            }
        });

        if (isCorrect) {
            clickedBtn.classList.add('correct');
            quizScore += 10;
            quizStreak += 1;
            els.quizFeedbackBanner.className = 'quiz-feedback-banner correct';
            els.quizFeedbackBanner.textContent = currentLang === 'ru' 
                ? '🎉 Великолепно! Правильный ответ!' 
                : '🎉 Splendid! That is correct!';
            showToast('🔥 ' + (currentLang === 'ru' ? 'Серия: ' : 'Streak: ') + quizStreak);
        } else {
            clickedBtn.classList.add('wrong');
            quizStreak = 0;
            els.quizFeedbackBanner.className = 'quiz-feedback-banner wrong';
            els.quizFeedbackBanner.textContent = currentLang === 'ru' 
                ? 'Не совсем так, но это отличный повод запомнить!' 
                : 'Not quite, but now you know the ancient word!';
        }

        els.quizScore.textContent = quizScore;
        els.quizStreak.textContent = quizStreak;

        // Explanation reveal
        els.quizExplanation.innerHTML = `
            <p><strong>${word.word}</strong> - ${word.meaning}</p>
            ${word.synonym ? `<p>✨ <em>${currentLang === 'ru' ? 'Современный аналог' : 'Modern equivalent'}:</em> <strong>${word.synonym}</strong></p>` : ''}
            <blockquote style="margin-top: 8px; font-style: italic; color: var(--text-muted); font-size: 0.88rem;">${word.quote} (${word.source})</blockquote>
        `;

        els.quizFeedback.classList.remove('hidden');
    }

    // ==========================================
    // === Suggest a Word Form Engine ===
    // ==========================================
    function openSuggestModal() {
        els.suggestModalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeSuggestModal() {
        els.suggestModalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ==========================================
    // === Donate / Support Modal Engine ===
    // ==========================================
    function openDonateModal() {
        if (els.donateModalOverlay) {
            els.donateModalOverlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeDonateModal() {
        if (els.donateModalOverlay) {
            els.donateModalOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }
    }

    async function handleSuggestWord(e) {
        e.preventDefault();
        const wordInput = $('suggestWordInput').value.trim();
        const langInput = $('suggestLangSelect').value;
        const synonymInput = $('suggestSynonymInput').value.trim();
        const typeInput = $('suggestTypeSelect').value;
        const categoryInput = $('suggestCategorySelect').value;
        const meaningInput = $('suggestMeaningInput').value.trim();
        const sourceInput = $('suggestSourceInput').value.trim() || (langInput === 'ru' ? 'Народное предание / литература' : 'Folklore / Literature');
        const authorInput = $('suggestAuthorInput').value.trim() || (langInput === 'ru' ? 'Читатель' : 'Reader');

        if (!wordInput || !meaningInput || !synonymInput) {
            showToast(currentLang === 'ru' ? 'Пожалуйста, заполните обязательные поля' : 'Please fill in required fields');
            return;
        }

        const submitBtn = els.suggestForm ? els.suggestForm.querySelector('.suggest-submit-btn') : null;
        const submitLabel = $('submitWordLabel');
        const originalText = submitLabel ? submitLabel.textContent : '';

        if (submitBtn) submitBtn.disabled = true;
        if (submitLabel) submitLabel.textContent = currentLang === 'ru' ? 'Отправка заявки...' : 'Sending proposal...';

        try {
            await fetch('https://formsubmit.co/ajax/faktplanet2@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `Новое предложенное слово: ${wordInput} (${langInput === 'ru' ? 'Русский' : 'English'})`,
                    _template: 'table',
                    _captcha: 'false',
                    'Предложенное слово': wordInput,
                    'Язык слова': langInput === 'ru' ? 'Русский' : 'English',
                    'Современный синоним / аналог': synonymInput,
                    'Тип слова': typeInput === 'archaism' ? 'Архаизм' : 'Историзм',
                    'Тематическая категория': categoryInput,
                    'Толкование и значение': meaningInput,
                    'Источник (откуда узнали)': sourceInput,
                    'Имя или ник автора': authorInput,
                    'Время отправки': new Date().toLocaleString()
                })
            });

            // Also save directly to Supabase suggested_words table
            if (supabaseClient) {
                try {
                    await supabaseClient.from('suggested_words').insert([{
                        word: wordInput,
                        lang: langInput,
                        modern_synonym: synonymInput,
                        type: typeInput,
                        category: categoryInput,
                        meaning: meaningInput,
                        source: sourceInput,
                        author: authorInput,
                        status: 'pending'
                    }]);
                    console.log('Word proposal saved to Supabase!');
                } catch (sbErr) {
                    console.warn('Supabase proposal save note:', sbErr);
                }
            }

            // Reset form & close modal
            els.suggestForm.reset();
            closeSuggestModal();

            showToast(currentLang === 'ru' 
                ? `✉️ Заявка со словом «${wordInput}» отправлена автору на модерацию! Спасибо!` 
                : `✉️ Word suggestion "${wordInput}" submitted for review! Thank you!`);
        } catch (err) {
            console.error('Failed to submit word proposal:', err);
            els.suggestForm.reset();
            closeSuggestModal();
            showToast(currentLang === 'ru' 
                ? `✉️ Заявка со словом «${wordInput}» отправлена автору! Спасибо!` 
                : `✉️ Word suggestion "${wordInput}" submitted for review! Thank you!`);
        } finally {
            if (submitBtn) submitBtn.disabled = false;
            if (submitLabel) submitLabel.textContent = originalText;
        }
    }

    // === Toast Notification ===
    function showToast(message) {
        els.toast.textContent = message;
        els.toast.classList.add('show');
        setTimeout(() => els.toast.classList.remove('show'), 2800);
    }

    // === Stats Counter Animation ===
    function animateStats() {
        const target = WORDS_DATABASE.length;
        const el = els.statTotal;
        let current = 0;
        const step = Math.max(1, Math.floor(target / 30));
        const interval = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(interval);
            }
            el.textContent = current;
        }, 35);
    }

    // === Event Bindings ===
    function bindEvents() {
        // Theme cycle (dark -> sepia)
        if (els.themeToggle) els.themeToggle.addEventListener('click', cycleTheme);

        // Font selection from 22 fonts
        if (els.fontSelect) {
            els.fontSelect.addEventListener('change', (e) => {
                applyFont(e.target.value);
                savePreferences();
                const selectedOption = els.fontSelect.options[els.fontSelect.selectedIndex];
                const fontName = selectedOption ? selectedOption.text : e.target.value;
                showToast(currentLang === 'ru' ? `🔤 Шрифт: ${fontName}` : `🔤 Font: ${fontName}`);
            });
        }

        // Language toggle (UI)
        if (els.langToggle) els.langToggle.addEventListener('click', toggleLang);

        // Mobile menu
        els.mobileMenuBtn.addEventListener('click', () => {
            els.nav.classList.toggle('open');
        });

        // Header scroll background
        window.addEventListener('scroll', () => {
            els.header.classList.toggle('scrolled', window.scrollY > 20);
        });

        // Nav links
        $$('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                $$('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                els.nav.classList.remove('open');
            });
        });

        // Hero actions
        els.randomWordBtn.addEventListener('click', showRandomWord);
        els.shareBtn.addEventListener('click', copyWordOfDay);
        els.heroQuizBtn.addEventListener('click', openQuizModal);

        // Top Search Input
        if (els.topSearchInput) {
            els.topSearchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value.trim();
                if (els.searchInput) els.searchInput.value = searchQuery;
                if (els.topSearchClear) els.topSearchClear.classList.toggle('visible', searchQuery.length > 0);
                if (els.searchClear) els.searchClear.classList.toggle('visible', searchQuery.length > 0);
                handleLiveSearch(searchQuery);
                renderGrid();
            });

            els.topSearchInput.addEventListener('focus', () => {
                if (searchQuery.length > 0) {
                    handleLiveSearch(searchQuery);
                }
            });

            els.topSearchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    if (els.liveSearchDropdown) els.liveSearchDropdown.classList.remove('open');
                    if (els.dictionary) els.dictionary.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        if (els.topSearchClear) {
            els.topSearchClear.addEventListener('click', () => {
                searchQuery = '';
                if (els.topSearchInput) els.topSearchInput.value = '';
                if (els.searchInput) els.searchInput.value = '';
                els.topSearchClear.classList.remove('visible');
                if (els.searchClear) els.searchClear.classList.remove('visible');
                if (els.liveSearchDropdown) els.liveSearchDropdown.classList.remove('open');
                renderGrid();
            });
        }

        // Dictionary Search
        if (els.searchInput) {
            els.searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value.trim();
                if (els.topSearchInput) els.topSearchInput.value = searchQuery;
                if (els.searchClear) els.searchClear.classList.toggle('visible', searchQuery.length > 0);
                if (els.topSearchClear) els.topSearchClear.classList.toggle('visible', searchQuery.length > 0);
                renderGrid();
            });
        }

        if (els.searchClear) {
            els.searchClear.addEventListener('click', () => {
                searchQuery = '';
                if (els.searchInput) els.searchInput.value = '';
                if (els.topSearchInput) els.topSearchInput.value = '';
                els.searchClear.classList.remove('visible');
                if (els.topSearchClear) els.topSearchClear.classList.remove('visible');
                if (els.liveSearchDropdown) els.liveSearchDropdown.classList.remove('open');
                renderGrid();
            });
        }

        // Language tabs delegation (handles both top hero tabs and dictionary tabs)
        document.addEventListener('click', (e) => {
            const tab = e.target.closest('.lang-tab');
            if (tab && tab.dataset.lang) {
                switchLangTab(tab.dataset.lang);
            }
        });

        // Close live dropdown on outside click
        document.addEventListener('click', (e) => {
            if (els.liveSearchDropdown && !e.target.closest('.hero-search-box-wrap')) {
                els.liveSearchDropdown.classList.remove('open');
            }
        });

        // Word Type Filter (Archaisms vs Historicisms)
        els.typeFilter.addEventListener('click', (e) => {
            const chip = e.target.closest('.chip');
            if (!chip) return;
            filterType = chip.dataset.type;
            els.typeFilter.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderGrid();
        });

        // Thematic Category Filter
        els.categoryFilter.addEventListener('click', (e) => {
            const chip = e.target.closest('.chip');
            if (!chip) return;
            filterCategory = chip.dataset.category;
            els.categoryFilter.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderGrid();
        });

        // Era Filter (delegated)
        els.eraFilter.addEventListener('click', (e) => {
            const chip = e.target.closest('.chip');
            if (!chip) return;
            filterEra = chip.dataset.era;
            els.eraFilter.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderGrid();
        });

        // Load more
        els.loadMoreBtn.addEventListener('click', () => renderGrid(true));

        // Word Details Modal
        els.modalClose.addEventListener('click', closeModal);
        els.modalOverlay.addEventListener('click', (e) => {
            if (e.target === els.modalOverlay) closeModal();
        });

        // Quiz Modal
        els.navQuizBtn.addEventListener('click', openQuizModal);
        els.footerQuizBtn.addEventListener('click', openQuizModal);
        els.quizModalClose.addEventListener('click', closeQuizModal);
        els.quizModalOverlay.addEventListener('click', (e) => {
            if (e.target === els.quizModalOverlay) closeQuizModal();
        });
        els.quizNextBtn.addEventListener('click', loadQuizQuestion);

        els.quizModeMeaning.addEventListener('click', () => {
            quizMode = 'meaning';
            els.quizModeMeaning.classList.add('active');
            els.quizModeSynonym.classList.remove('active');
            loadQuizQuestion();
        });
        els.quizModeSynonym.addEventListener('click', () => {
            quizMode = 'synonym';
            els.quizModeSynonym.classList.add('active');
            els.quizModeMeaning.classList.remove('active');
            loadQuizQuestion();
        });

        // Suggest Word Modal
        els.navSuggestBtn.addEventListener('click', openSuggestModal);
        els.footerSuggestBtn.addEventListener('click', openSuggestModal);
        els.suggestModalClose.addEventListener('click', closeSuggestModal);
        els.suggestModalOverlay.addEventListener('click', (e) => {
            if (e.target === els.suggestModalOverlay) closeSuggestModal();
        });
        els.suggestForm.addEventListener('submit', handleSuggestWord);

        // Donate Modal
        if (els.navDonateBtn) els.navDonateBtn.addEventListener('click', openDonateModal);
        if (els.footerDonateBtn) els.footerDonateBtn.addEventListener('click', openDonateModal);
        if (els.donateModalClose) els.donateModalClose.addEventListener('click', closeDonateModal);
        if (els.donateModalOverlay) {
            els.donateModalOverlay.addEventListener('click', (e) => {
                if (e.target === els.donateModalOverlay) closeDonateModal();
            });
        }

        // Escape key to close any open modal or dropdown
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (els.liveSearchDropdown) els.liveSearchDropdown.classList.remove('open');
                closeModal();
                closeQuizModal();
                closeSuggestModal();
                closeDonateModal();
            }
        });
    }

    // === Run on load ===
    document.addEventListener('DOMContentLoaded', init);
})();
