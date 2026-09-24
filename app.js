// =============================================
//  FORGOTTEN WORDS — Application Logic
//  Full features: Modern Synonyms, Archaisms/Historicisms,
//  Thematic Categories, Interactive Quiz, Suggest Word Form,
//  and Three-state Themes (Dark / Sepia / Light).
// =============================================

(function () {
    'use strict';

    // === State ===
    let currentLang = 'ru';           // UI language ('ru' or 'en')
    let currentTheme = 'sepia';       // 'sepia' (Papyrus default), 'dark', 'light'
    let filterLang = 'ru';            // Active language tab: 'ru' or 'en'
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
        langToggle: $('langToggle'),
        langLabel: $('langLabel'),
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

        // Toast & Effects
        toast: $('toast'),
        particles: $('particles')
    };

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
    }

    // === Preferences (localStorage) ===
    function loadPreferences() {
        const savedTheme = localStorage.getItem('fw-theme');
        const savedLang = localStorage.getItem('fw-lang');
        if (savedTheme && ['dark', 'sepia', 'light'].includes(savedTheme)) {
            currentTheme = savedTheme;
        } else {
            currentTheme = 'sepia'; // Authentic Papyrus default
        }
        if (savedLang && ['ru', 'en'].includes(savedLang)) {
            currentLang = savedLang;
            filterLang = savedLang;
        } else {
            currentLang = 'ru';
            filterLang = 'ru';
        }
        applyTheme(currentTheme);
        els.langLabel.textContent = currentLang.toUpperCase();
        if (els.tabRu) els.tabRu.classList.toggle('active', filterLang === 'ru');
        if (els.tabEn) els.tabEn.classList.toggle('active', filterLang === 'en');
    }

    function savePreferences() {
        localStorage.setItem('fw-theme', currentTheme);
        localStorage.setItem('fw-lang', currentLang);
    }

    // === Three-State Theme Toggle (Sepia -> Dark -> Light) ===
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        currentTheme = theme;
        if (theme === 'sepia') {
            els.themeIcon.textContent = '📜';
            els.themeToggle.title = currentLang === 'ru' ? 'Тема: Винтажный папирус / пергамент' : 'Theme: Vintage Papyrus / Parchment';
        } else if (theme === 'dark') {
            els.themeIcon.textContent = '🌙';
            els.themeToggle.title = currentLang === 'ru' ? 'Тема: Тёмная (ночной манускрипт)' : 'Theme: Dark Manuscript';
        } else {
            els.themeIcon.textContent = '☀️';
            els.themeToggle.title = currentLang === 'ru' ? 'Тема: Светлая' : 'Theme: Light';
        }
    }

    function cycleTheme() {
        let newTheme = 'sepia';
        if (currentTheme === 'sepia') newTheme = 'dark';
        else if (currentTheme === 'dark') newTheme = 'light';
        else newTheme = 'sepia';

        applyTheme(newTheme);
        savePreferences();
        showToast(currentLang === 'ru' 
            ? (newTheme === 'sepia' ? '📜 Винтажный папирус' : newTheme === 'dark' ? '🌙 Тёмная тема' : '☀️ Светлая тема')
            : (newTheme === 'sepia' ? '📜 Vintage Papyrus' : newTheme === 'dark' ? '🌙 Dark theme' : '☀️ Light theme'));
    }

    // === Language Toggle: 100% TRANSLATION OF ENTIRE APP ===
    function toggleLang() {
        currentLang = currentLang === 'ru' ? 'en' : 'ru';
        filterLang = currentLang; // STRICT SYNCHRONIZATION!
        if (els.langLabel) els.langLabel.textContent = currentLang === 'ru' ? 'Русский' : 'English';
        
        if (els.tabRu) els.tabRu.classList.toggle('active', currentLang === 'ru');
        if (els.tabEn) els.tabEn.classList.toggle('active', currentLang === 'en');

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
        const list = pool.length > 0 ? pool : WORDS_DATABASE;
        const today = new Date();
        const dayIndex = today.getFullYear() * 366 + today.getMonth() * 31 + today.getDate();
        return list[dayIndex % list.length];
    }

    function renderWordOfDay(word) {
        let w = word;
        if (!w || w.lang !== filterLang) {
            w = getWordOfDay();
        }
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
            els.wodCategory.style.display = 'inline-block';
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
        els.wodQuoteSource.textContent = '— ' + w.source;

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
        currentLang = lang;
        filterLang = lang;
        filterEra = 'all';
        filterType = 'all';
        filterCategory = 'all';

        els.langLabel.textContent = currentLang.toUpperCase();
        if (els.tabRu) els.tabRu.classList.toggle('active', lang === 'ru');
        if (els.tabEn) els.tabEn.classList.toggle('active', lang === 'en');

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
                <cite>— ${w.source}</cite>
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
            <p><strong>${word.word}</strong> — ${word.meaning}</p>
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

    function handleSuggestWord(e) {
        e.preventDefault();
        const wordInput = $('suggestWordInput').value.trim();
        const langInput = $('suggestLangSelect').value;
        const synonymInput = $('suggestSynonymInput').value.trim();
        const typeInput = $('suggestTypeSelect').value;
        const categoryInput = $('suggestCategorySelect').value;
        const meaningInput = $('suggestMeaningInput').value.trim();
        const sourceInput = $('suggestSourceInput').value.trim() || (langInput === 'ru' ? 'Народное предание' : 'Oral tradition');
        const authorInput = $('suggestAuthorInput').value.trim() || (langInput === 'ru' ? 'Читатель' : 'Reader');

        if (!wordInput || !meaningInput || !synonymInput) {
            showToast('Пожалуйста, заполните обязательные поля');
            return;
        }

        const newWord = {
            id: 'user_' + Date.now(),
            word: wordInput.charAt(0).toUpperCase() + wordInput.slice(1),
            lang: langInput,
            pronunciation: `[${wordInput.toLowerCase()}]`,
            era: langInput === 'ru' ? 'Народная традиция' : 'Traditional lore',
            eraKey: langInput === 'ru' ? 'xviii-xix' : 'victorian',
            meaning: meaningInput,
            synonym: synonymInput,
            wordType: typeInput,
            category: categoryInput,
            etymology: `Слово предложено читателем (${authorInput}).`,
            usage: `Сохранено в народной памяти: ${sourceInput}.`,
            quote: `«${wordInput} — слово, записанное со слов: ${sourceInput}.»`,
            source: `${sourceInput} (записал ${authorInput})`,
            isCommunity: true,
            tags: [wordInput.toLowerCase(), typeInput, categoryInput, synonymInput.toLowerCase()]
        };

        // Add to active database at top
        WORDS_DATABASE.unshift(newWord);

        // Save to localStorage
        try {
            const saved = JSON.parse(localStorage.getItem('fw_user_suggested_words') || '[]');
            saved.unshift(newWord);
            localStorage.setItem('fw_user_suggested_words', JSON.stringify(saved));
        } catch (err) {
            console.error('Failed to save user word to storage:', err);
        }

        // Reset form & close
        els.suggestForm.reset();
        closeSuggestModal();

        // Switch to the submitted language tab and refresh grid
        switchLangTab(langInput);
        showToast(currentLang === 'ru' 
            ? `✨ Слово «${newWord.word}» добавлено в словарь!` 
            : `✨ "${newWord.word}" added to the dictionary!`);
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
        // Theme cycle (dark -> sepia -> light)
        els.themeToggle.addEventListener('click', cycleTheme);

        // Language toggle (UI)
        els.langToggle.addEventListener('click', toggleLang);

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

        // Search
        els.searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            els.searchClear.classList.toggle('visible', searchQuery.length > 0);
            renderGrid();
        });

        els.searchClear.addEventListener('click', () => {
            searchQuery = '';
            els.searchInput.value = '';
            els.searchClear.classList.remove('visible');
            renderGrid();
        });

        // Language tabs (RU / EN strict separation)
        els.langTabs.addEventListener('click', (e) => {
            const tab = e.target.closest('.lang-tab');
            if (!tab) return;
            switchLangTab(tab.dataset.lang);
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

        // Escape key to close any open modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
                closeQuizModal();
                closeSuggestModal();
            }
        });
    }

    // === Run on load ===
    document.addEventListener('DOMContentLoaded', init);
})();
