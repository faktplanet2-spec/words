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

    // === Sound & Audio State ===
    let soundEnabled = true;
    let audioCtx = null;

    // === DOM Refs ===
    const $ = id => document.getElementById(id);
    const $$ = sel => document.querySelectorAll(sel);

    const els = {
        themeToggle: $('themeToggle'),
        themeIcon: $('themeIcon'),
        themeLabelText: $('themeLabelText'),
        langSelect: $('langSelect'),
        langPill: $('langPill'),
        currentLangName: $('currentLangName'),
        langCustomDropdown: $('langCustomDropdown'),
        langDropdownList: $('langDropdownList'),
        langDropdownTitle: $('langDropdownTitle'),
        langDropdownSub: $('langDropdownSub'),
        fontSelect: $('fontSelect'),
        fontPill: $('fontPill'),
        currentFontName: $('currentFontName'),
        fontCustomDropdown: $('fontCustomDropdown'),
        fontDropdownList: $('fontDropdownList'),
        fontDropdownTitle: $('fontDropdownTitle'),
        fontDropdownSub: $('fontDropdownSub'),
        langGroupLabel: $('langGroupLabel'),
        fontGroupLabel: $('fontGroupLabel'),
        themeGroupLabel: $('themeGroupLabel'),
        soundToggle: $('soundToggle'),
        soundIcon: $('soundIcon'),
        soundGroupLabel: $('soundGroupLabel'),
        soundLabelText: $('soundLabelText'),
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
        eraTimelineBox: $('eraTimelineBox'),
        eraTimelineTrack: $('eraTimelineTrack'),
        timelineTitle: $('timelineTitle'),
        timelineHint: $('timelineHint'),
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
                            id: 'db_' + (dbWord.id || Math.random()),
                            word: dbWord.word,
                            pronunciation: dbWord.transcription || `[${dbWord.word}]`,
                            meaning: dbWord.meaning,
                            synonym: dbWord.modern_synonym || '',
                            era: dbWord.era_name || dbWord.era || 'Историческая эпоха',
                            eraKey: dbWord.era || 'middle-ages',
                            wordType: dbWord.type || 'archaism',
                            category: dbWord.category || 'speech_mind',
                            source: dbWord.source || 'Классический источник',
                            quote: `«${dbWord.word}»`,
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
        buildLangDropdown();
        buildFontDropdown();
        buildTypeFilters();
        buildCategoryFilters();
        buildEraFilters();
        buildEraTimeline();
        renderWordOfDay();
        renderGrid();
        bindEvents();
        updateUILanguage();
        animateStats();
        initAllCardTilts();
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
        if (savedLang && ['ru', 'en', 'es', 'de', 'it', 'fr'].includes(savedLang)) {
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
        const savedSound = localStorage.getItem('fw-sound');
        soundEnabled = savedSound !== '0';
        updateSoundUI();
        if (els.langSelect) els.langSelect.value = currentLang;
        const langObj = LANG_CATALOG.find(l => l.id === currentLang);
        if (els.currentLangName) els.currentLangName.textContent = langObj ? langObj.name : currentLang;
        $$('.lang-tab').forEach(t => t.classList.toggle('active', t.dataset.lang === filterLang));
    }

    function savePreferences() {
        localStorage.setItem('fw-theme', currentTheme);
        localStorage.setItem('fw-lang', currentLang);
        localStorage.setItem('fw-font', currentFont);
    }

    // === 22 Fonts Catalog with Authentic Live Previews ===
    const FONT_CATALOG = [
        { id: 'bebas', name: 'Bebas Neue', family: "'Bebas Neue', Impact, sans-serif", preview: 'АБВГДЕ Aa Bb — ВИНТАЖНЫЙ ТИТУЛ', tag: 'Заголовочный' },
        { id: 'playfair', name: 'Playfair Display', family: "'Playfair Display', Georgia, serif", preview: 'Аа Bb — Классическая антиква', tag: 'Антиква' },
        { id: 'cormorant', name: 'Cormorant Garamond', family: "'Cormorant Garamond', Garamond, serif", preview: 'Аа Bb — Старинный фолиант', tag: 'Ренессанс' },
        { id: 'ebgaramond', name: 'EB Garamond', family: "'EB Garamond', Georgia, serif", preview: 'Аа Bb — Французский барокко', tag: 'Классика' },
        { id: 'cinzel', name: 'Cinzel', family: "'Cinzel', Georgia, serif", preview: 'AA BB — MONUMENTALIS ANTIQUA', tag: 'Римский' },
        { id: 'lora', name: 'Lora', family: "'Lora', Georgia, serif", preview: 'Аа Bb — Литературное слово', tag: 'Книжный' },
        { id: 'merriweather', name: 'Merriweather', family: "'Merriweather', Georgia, serif", preview: 'Аа Bb — Приятное мягкое чтение', tag: 'Книжный' },
        { id: 'spectral', name: 'Spectral', family: "'Spectral', Georgia, serif", preview: 'Аа Bb — Академическая статья', tag: 'Учёный' },
        { id: 'oldstandard', name: 'Old Standard TT', family: "'Old Standard TT', Georgia, serif", preview: 'Аа Bb — Дореволюционная печать', tag: 'Исторический' },
        { id: 'philosopher', name: 'Philosopher', family: "'Philosopher', Georgia, serif", preview: 'Аа Bb — Восточные сказания', tag: 'Философский' },
        { id: 'marcellus', name: 'Marcellus', family: "'Marcellus', Georgia, serif", preview: 'Аа Bb — Латинское благородство', tag: 'Античный' },
        { id: 'montserrat', name: 'Montserrat', family: "'Montserrat', sans-serif", preview: 'Аа Bb — Современный чистый стиль', tag: 'Гротеск' },
        { id: 'oswald', name: 'Oswald', family: "'Oswald', Impact, sans-serif", preview: 'АБВГДЕ Aa Bb — Строгий плакатный', tag: 'Гротеск' },
        { id: 'raleway', name: 'Raleway', family: "'Raleway', sans-serif", preview: 'Аа Bb — Изящные тонкие линии', tag: 'Элегантный' },
        { id: 'robotocondensed', name: 'Roboto Condensed', family: "'Roboto Condensed', sans-serif", preview: 'Аа Bb — Плотный информационный', tag: 'Газетный' },
        { id: 'rubik', name: 'Rubik', family: "'Rubik', sans-serif", preview: 'Аа Bb — Мягкие скруглённые углы', tag: 'Мягкий' },
        { id: 'comfortaa', name: 'Comfortaa', family: "'Comfortaa', cursive, sans-serif", preview: 'Аа Bb — Уютный геометричный стиль', tag: 'Округлый' },
        { id: 'unbounded', name: 'Unbounded', family: "'Unbounded', sans-serif", preview: 'Аа Bb — Смелый футуристичный', tag: 'Модерн' },
        { id: 'caveat', name: 'Caveat', family: "'Caveat', cursive", preview: 'Аа Bb — Быстрый живой почерк', tag: 'Рукописный' },
        { id: 'neucha', name: 'Neucha', family: "'Neucha', cursive", preview: 'Аа Bb — Сказки и тёплые былины', tag: 'Душевный' },
        { id: 'amatic', name: 'Amatic SC', family: "'Amatic SC', cursive", preview: 'АА ББ — ВИНТАЖНЫЙ УЗКИЙ', tag: 'Рукописный' },
        { id: 'underdog', name: 'Underdog', family: "'Underdog', cursive", preview: 'Аа Bb — Рубленый самобытный', tag: 'Крафтовый' }
    ];

    function buildFontDropdown() {
        if (!els.fontDropdownList) return;
        let html = '';
        FONT_CATALOG.forEach(f => {
            const isActive = f.id === currentFont;
            html += `
                <div class="font-dropdown-item ${isActive ? 'active' : ''}" data-font="${f.id}" role="option" aria-selected="${isActive}">
                    <div class="font-item-top">
                        <span class="font-item-name">${f.name}</span>
                        <span class="font-item-badge">${f.tag}</span>
                        <span class="font-item-check">${isActive ? '✓' : ''}</span>
                    </div>
                    <div class="font-item-preview" style="font-family: ${f.family};">${f.preview}</div>
                </div>
            `;
        });
        els.fontDropdownList.innerHTML = html;

        // Bind clicks on items
        els.fontDropdownList.querySelectorAll('.font-dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const fontId = item.dataset.font;
                applyFont(fontId);
                savePreferences();
                closeFontDropdown();
                const fontObj = FONT_CATALOG.find(f => f.id === fontId);
                const fontName = fontObj ? fontObj.name : fontId;
                showToast(currentLang === 'ru' ? `🔤 Шрифт: ${fontName}` : `🔤 Font: ${fontName}`);
            });
        });
    }

    function toggleFontDropdown(e) {
        if (e) e.stopPropagation();
        if (els.fontCustomDropdown) {
            const isOpen = els.fontCustomDropdown.classList.contains('open');
            if (isOpen) {
                closeFontDropdown();
            } else {
                openFontDropdown();
            }
        }
    }

    function openFontDropdown() {
        closeLangDropdown();
        if (els.fontCustomDropdown) {
            buildFontDropdown();
            els.fontCustomDropdown.classList.add('open');
            if (els.fontPill) {
                els.fontPill.classList.add('dropdown-open');
                els.fontPill.setAttribute('aria-expanded', 'true');
            }
        }
    }

    function closeFontDropdown() {
        if (els.fontCustomDropdown) {
            els.fontCustomDropdown.classList.remove('open');
            if (els.fontPill) {
                els.fontPill.classList.remove('dropdown-open');
                els.fontPill.setAttribute('aria-expanded', 'false');
            }
        }
    }

    // === 6 Supported Languages Catalog ===
    const LANG_CATALOG = [
        { id: 'en', name: 'English', desc: 'Over 15,000 archaic words' },
        { id: 'ru', name: 'Русский', desc: 'Более 15 000 старинных слов' },
        { id: 'es', name: 'Español', desc: 'Palabras antiguas en español' },
        { id: 'de', name: 'Deutsch', desc: 'Alte und seltene deutsche Wörter' },
        { id: 'it', name: 'Italiano', desc: 'Parole arcaiche italiane' },
        { id: 'fr', name: 'Français', desc: 'Vocabulaire français ancien' }
    ];

    function buildLangDropdown() {
        if (!els.langDropdownList) return;
        let html = '';
        LANG_CATALOG.forEach(l => {
            const isActive = l.id === currentLang;
            html += `
                <div class="font-dropdown-item ${isActive ? 'active' : ''}" data-lang="${l.id}" role="option" aria-selected="${isActive}">
                    <div class="font-item-top">
                        <span class="font-item-name">${l.name}</span>
                        <span class="font-item-check">${isActive ? '✓' : ''}</span>
                    </div>
                    <div class="font-item-preview" style="font-size: 0.82rem; opacity: 0.85;">${l.desc}</div>
                </div>
            `;
        });
        els.langDropdownList.innerHTML = html;

        els.langDropdownList.querySelectorAll('.font-dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const langId = item.dataset.lang;
                setLanguage(langId);
                closeLangDropdown();
            });
        });
    }

    function toggleLangDropdown(e) {
        if (e) e.stopPropagation();
        if (els.langCustomDropdown) {
            const isOpen = els.langCustomDropdown.classList.contains('open');
            if (isOpen) {
                closeLangDropdown();
            } else {
                openLangDropdown();
            }
        }
    }

    function openLangDropdown() {
        closeFontDropdown();
        if (els.langCustomDropdown) {
            buildLangDropdown();
            els.langCustomDropdown.classList.add('open');
            if (els.langPill) {
                els.langPill.classList.add('dropdown-open');
                els.langPill.setAttribute('aria-expanded', 'true');
            }
        }
    }

    function closeLangDropdown() {
        if (els.langCustomDropdown) {
            els.langCustomDropdown.classList.remove('open');
            if (els.langPill) {
                els.langPill.classList.remove('dropdown-open');
                els.langPill.setAttribute('aria-expanded', 'false');
            }
        }
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
        const fontObj = FONT_CATALOG.find(f => f.id === font);
        if (els.currentFontName) {
            els.currentFontName.textContent = fontObj ? fontObj.name : font;
        }
        if (els.fontDropdownList) {
            els.fontDropdownList.querySelectorAll('.font-dropdown-item').forEach(item => {
                const isSel = item.dataset.font === font;
                item.classList.toggle('active', isSel);
                item.setAttribute('aria-selected', isSel);
                const check = item.querySelector('.font-item-check');
                if (check) check.textContent = isSel ? '✓' : '';
            });
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
        playPaperRustle();
        showToast(currentLang === 'ru' 
            ? (newTheme === 'sepia' ? '📜 Винтажный папирус' : '🌙 Тёмная тема')
            : (newTheme === 'sepia' ? '📜 Vintage Papyrus' : '🌙 Dark theme'));
    }

    // === Language Selector: 100% TRANSLATION OF ENTIRE APP ===
    function setLanguage(lang) {
        if (!['ru', 'en', 'es', 'de', 'it', 'fr'].includes(lang)) lang = 'ru';
        currentLang = lang;

        // Synchronize dictionary tab if words exist for this language
        const hasWords = WORDS_DATABASE.some(w => w.lang === lang);
        if (hasWords) {
            filterLang = lang;
            $$('.lang-tab').forEach(t => t.classList.toggle('active', t.dataset.lang === lang));
        }

        if (els.langSelect) els.langSelect.value = currentLang;
        const langObj = LANG_CATALOG.find(l => l.id === currentLang);
        if (els.currentLangName) {
            els.currentLangName.textContent = langObj ? langObj.name : currentLang;
        }
        if (els.langDropdownList) {
            els.langDropdownList.querySelectorAll('.font-dropdown-item').forEach(item => {
                const isSel = item.dataset.lang === currentLang;
                item.classList.toggle('active', isSel);
                item.setAttribute('aria-selected', isSel);
                const check = item.querySelector('.font-item-check');
                if (check) check.textContent = isSel ? '✓' : '';
            });
        }

        updateUILanguage();
        buildTypeFilters();
        buildCategoryFilters();
        buildEraFilters();
        buildEraTimeline();
        renderWordOfDay();
        renderGrid();
        playPaperRustle();

        if (els.quizModalOverlay && els.quizModalOverlay.classList.contains('open')) {
            loadQuizQuestion();
        }
        savePreferences();

        const langName = langObj ? langObj.name : currentLang;
        showToast((t('actionLangLabel') || 'Language:') + ' ' + langName);
    }

    function t(key) {
        if (UI_STRINGS[currentLang] && UI_STRINGS[currentLang][key]) {
            return UI_STRINGS[currentLang][key];
        }
        if (UI_STRINGS['ru'] && UI_STRINGS['ru'][key]) {
            return UI_STRINGS['ru'][key];
        }
        if (UI_STRINGS['en'] && UI_STRINGS['en'][key]) {
            return UI_STRINGS['en'][key];
        }
        return key;
    }

    function updateUILanguage() {
        if (els.langSelect) els.langSelect.value = currentLang;
        const currentLangObj = LANG_CATALOG.find(l => l.id === currentLang);
        if (els.currentLangName) els.currentLangName.textContent = currentLangObj ? currentLangObj.name : currentLang;
        if (els.langGroupLabel) els.langGroupLabel.textContent = t('actionLangLabel');
        if (els.langDropdownTitle) {
            els.langDropdownTitle.textContent = currentLang === 'ru' ? 'Язык' :
                currentLang === 'es' ? 'Idioma' :
                currentLang === 'de' ? 'Sprache' :
                currentLang === 'fr' ? 'Langue' :
                currentLang === 'it' ? 'Lingua' : 'Language';
        }
        if (els.langDropdownSub) {
            els.langDropdownSub.textContent = currentLang === 'ru' ? 'Выберите язык интерфейса' :
                currentLang === 'es' ? 'Selecciona el idioma del sitio' :
                currentLang === 'de' ? 'Sprache der Website wählen' :
                currentLang === 'fr' ? 'Choisir la langue du site' :
                currentLang === 'it' ? 'Scegli la lingua del sitio' : 'Choose website language';
        }
        if (els.fontGroupLabel) els.fontGroupLabel.textContent = t('actionFontLabel');
        if (els.fontDropdownTitle) {
            els.fontDropdownTitle.textContent = currentLang === 'ru' ? 'Примеры шрифтов' :
                currentLang === 'es' ? 'Muestras de fuentes' :
                currentLang === 'de' ? 'Schriftbeispiele' :
                currentLang === 'fr' ? 'Exemples de polices' :
                currentLang === 'it' ? 'Esempi di caratteri' : 'Font Previews';
        }
        if (els.fontDropdownSub) {
            els.fontDropdownSub.textContent = currentLang === 'ru' ? 'Выберите начертание' :
                currentLang === 'es' ? 'Selecciona una tipografía' :
                currentLang === 'de' ? 'Schriftart auswählen' :
                currentLang === 'fr' ? 'Choisir la typographie' :
                currentLang === 'it' ? 'Scegli la tipografia' : 'Select typography style';
        }
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

        // Language tabs - specific words in their respective native languages
        const NATIVE_LANG_TAB_LABELS = {
            ru: 'Русские слова',
            en: 'English words',
            fr: 'Mots français',
            de: 'Deutsche Wörter',
            la: 'Verba Latina',
            es: 'Palabras en español',
            it: 'Parole italiane',
            cu: 'Старославянские слова'
        };

        $$('.lang-tab').forEach(tab => {
            const lang = tab.dataset.lang;
            if (lang && NATIVE_LANG_TAB_LABELS[lang]) {
                const label = tab.querySelector('.lang-tab-label');
                if (label) label.textContent = NATIVE_LANG_TAB_LABELS[lang];
            }
        });

        // About section
        if ($('aboutTitle')) $('aboutTitle').textContent = t('aboutTitle');
        if ($('aboutP1')) $('aboutP1').innerHTML = t('aboutP1');
        if ($('aboutP2')) $('aboutP2').innerHTML = t('aboutP2');
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
        if ($('monobankTitle')) $('monobankTitle').textContent = t('monobankTitle');
        if ($('monobankSub')) $('monobankSub').textContent = t('monobankSub');
        if ($('cryptoTitle')) $('cryptoTitle').textContent = t('cryptoTitle');
        if ($('cryptoSub')) $('cryptoSub').textContent = t('cryptoSub');
        if ($('cryptoCopyLabel')) $('cryptoCopyLabel').textContent = t('cryptoCopy');
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

        // Sound & Era Timeline labels
        if (els.soundGroupLabel) els.soundGroupLabel.textContent = t('soundLabel');
        if (els.soundLabelText) els.soundLabelText.textContent = soundEnabled ? t('soundOn') : t('soundOff');
        if (els.timelineTitle) els.timelineTitle.textContent = t('timelineTitle');
        if (els.timelineHint) els.timelineHint.textContent = t('timelineHint');

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

    // === Multilingual Word Content Adaptation (All 6 Languages: ru, en, de, es, it, fr) ===
    const transCache = {};
    try {
        const saved = localStorage.getItem('fw_trans_cache');
        if (saved) Object.assign(transCache, JSON.parse(saved));
    } catch (e) {}

    function saveTransCache() {
        try {
            const keys = Object.keys(transCache);
            if (keys.length > 500) {
                for (let i = 0; i < 100; i++) delete transCache[keys[i]];
            }
            localStorage.setItem('fw_trans_cache', JSON.stringify(transCache));
        } catch (e) {}
    }

    function getWordMeaning(w, lang) {
        if (!w) return '';
        const l = lang || currentLang;
        if (w.meanings && w.meanings[l]) {
            return w.meanings[l];
        }
        if (l === 'ru' && (w.lang === 'ru' || !w.meanings)) return w.meaning || '';
        if (l === 'en' && w.lang === 'en') return w.meaning || '';
        const cacheKey = `${l}:m:${w.meaning}`;
        if (transCache[cacheKey]) return transCache[cacheKey];
        return w.meaning || '';
    }

    function getWordSynonym(w, lang) {
        if (!w) return '';
        const l = lang || currentLang;
        if (w.synonyms && w.synonyms[l]) {
            return w.synonyms[l];
        }
        if (l === 'ru' && (w.lang === 'ru' || !w.synonyms)) return w.synonym || '';
        if (l === 'en' && w.lang === 'en') return w.synonym || '';
        const cacheKey = `${l}:s:${w.synonym}`;
        if (transCache[cacheKey]) return transCache[cacheKey];
        return w.synonym || '';
    }

    function getWordEtymology(w, lang) {
        if (!w) return '';
        const l = lang || currentLang;
        if (w.etymologies && w.etymologies[l]) {
            return w.etymologies[l];
        }
        if (l === 'ru' && (w.lang === 'ru' || !w.etymologies)) return w.etymology || '';
        if (l === 'en' && w.lang === 'en') return w.etymology || '';
        const cacheKey = `${l}:e:${w.etymology}`;
        if (transCache[cacheKey]) return transCache[cacheKey];
        return w.etymology || '';
    }

    function hasNativeTranslation(w, field, lang) {
        if (!w) return false;
        const l = lang || currentLang;
        if (field === 'meaning') {
            return !!(w.meanings && w.meanings[l]) || (l === 'ru' && w.lang === 'ru') || (l === 'en' && w.lang === 'en');
        }
        if (field === 'synonym') {
            return !!(w.synonyms && w.synonyms[l]) || (l === 'ru' && w.lang === 'ru') || (l === 'en' && w.lang === 'en');
        }
        if (field === 'etymology') {
            return !!(w.etymologies && w.etymologies[l]) || (l === 'ru' && w.lang === 'ru') || (l === 'en' && w.lang === 'en');
        }
        return false;
    }

    async function adaptElementText(element, rawText, targetLang, fieldType = 'meaning') {
        if (!element || !rawText || !targetLang) return;
        if (targetLang === 'ru' && /[\u0400-\u04FF]/.test(rawText)) return;
        if (targetLang === 'en' && !/[\u0400-\u04FF]/.test(rawText) && !/[àáâäçéèêëíïñóöôùúüß]/i.test(rawText)) return;

        const cacheKey = `${targetLang}:${fieldType === 'synonym' ? 's' : (fieldType === 'etymology' ? 'e' : 'm')}:${rawText}`;
        if (transCache[cacheKey]) {
            element.textContent = transCache[cacheKey];
            return;
        }

        try {
            const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(rawText)}`;
            const res = await fetch(url);
            if (res.ok) {
                const data = await res.json();
                if (data && data[0]) {
                    const translated = data[0].map(s => s[0]).join('');
                    if (translated) {
                        transCache[cacheKey] = translated;
                        saveTransCache();
                        if (element.dataset.origText === rawText && currentLang === targetLang) {
                            element.textContent = translated;
                        }
                    }
                }
            }
        } catch (e) {
            // Silently fallback to current text
        }
    }

    function cleanTextForCompare(str) {
        if (!str) return '';
        return str
            .toLowerCase()
            .replace(/[«»""''.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function isRedundantSynonym(synonym, meaning) {
        if (!synonym || !meaning) return true;
        const s = cleanTextForCompare(synonym);
        const m = cleanTextForCompare(meaning);
        if (!s || !m) return true;
        if (s === m) return true;
        if (m.startsWith(s)) return true;
        if (s.startsWith(m)) return true;
        if (m.includes(s) && (s.length > 10 || s.split(' ').length >= 2)) return true;
        if (s.includes(m)) return true;
        return false;
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
        const localeMap = { ru: 'ru-RU', en: 'en-US', de: 'de-DE', es: 'es-ES', it: 'it-IT', fr: 'fr-FR' };
        els.heroDate.textContent = today.toLocaleDateString(localeMap[currentLang] || 'en-US', {
            day: 'numeric', month: 'long', year: 'numeric'
        });
        els.wodWord.textContent = w.word;
        els.wodTranscription.textContent = w.pronunciation;

        // Adapted meaning in active language
        const meaning = getWordMeaning(w, currentLang);
        els.wodMeaning.textContent = meaning;
        els.wodMeaning.dataset.origText = w.meaning;
        if (!hasNativeTranslation(w, 'meaning', currentLang)) {
            adaptElementText(els.wodMeaning, w.meaning, currentLang, 'meaning');
        }

        // Era badge
        els.wodEra.textContent = ERA_LABELS[w.eraKey]
            ? (ERA_LABELS[w.eraKey][currentLang] || ERA_LABELS[w.eraKey]['en'] || w.era)
            : w.era;

        // Type badge (Archaism vs Historicism)
        const typeInfo = WORD_TYPES[w.wordType] || WORD_TYPES['archaism'];
        els.wodType.textContent = typeInfo[currentLang] || typeInfo['en'];
        els.wodType.className = 'word-type-badge ' + (w.wordType === 'historicism' ? 'historicism' : 'archaism');

        // Category badge
        const catInfo = THEMATIC_CATEGORIES[w.category];
        if (catInfo) {
            els.wodCategory.textContent = catInfo[currentLang] || catInfo['en'];
            els.wodCategory.style.display = 'inline-flex';
        } else {
            els.wodCategory.style.display = 'none';
        }

        // Modern synonym pill highlight (hidden if redundant with meaning)
        const synonym = getWordSynonym(w, currentLang);
        const rawSyn = synonym || w.synonym;
        const showSynonym = rawSyn && !isRedundantSynonym(rawSyn, meaning);
        if (showSynonym) {
            els.wodSynonymWrap.style.display = 'inline-flex';
            els.wodSynonym.textContent = rawSyn;
            els.wodSynonym.dataset.origText = w.synonym;
            if (!hasNativeTranslation(w, 'synonym', currentLang) && w.synonym) {
                adaptElementText(els.wodSynonym, w.synonym, currentLang, 'synonym');
            }
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

    // === Dynamic Category Filters ===
    function buildCategoryFilters() {
        if (!els.categoryFilter) return;
        let html = `<button class="chip ${filterCategory === 'all' ? 'active' : ''}" data-category="all">${t('allCategories')}</button>`;
        for (const [key, info] of Object.entries(THEMATIC_CATEGORIES)) {
            if (key === 'all') continue;
            const label = info[currentLang] || info['en'] || info['ru'] || key;
            html += `<button class="chip ${filterCategory === key ? 'active' : ''}" data-category="${key}">${label}</button>`;
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
            const eraObj = ERA_LABELS[eraKey];
            const label = eraObj ? (eraObj[currentLang] || eraObj['en'] || eraObj['ru']) : eraKey;
            html += `<button class="chip ${filterEra === eraKey ? 'active' : ''}" data-era="${eraKey}">${label}</button>`;
        });
        els.eraFilter.innerHTML = html;
    }

    // === Language Tabs (Strict Separation & Synchronization) ===
    function switchLangTab(lang) {
        filterLang = lang;
        filterEra = 'all';
        filterType = 'all';
        filterCategory = 'all';

        $$('.lang-tab').forEach(t => t.classList.toggle('active', t.dataset.lang === lang));

        buildTypeFilters();
        buildCategoryFilters();
        buildEraFilters();
        buildEraTimeline();
        renderWordOfDay();
        renderGrid();
        playPaperRustle();
        if (searchQuery) handleLiveSearch(searchQuery);

        if (els.quizModalOverlay && els.quizModalOverlay.classList.contains('open')) {
            loadQuizQuestion();
        }
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
            const meaning = getWordMeaning(w, currentLang);
            const synonym = getWordSynonym(w, currentLang);
            return (
                w.word.toLowerCase().includes(query) ||
                (w.synonym && w.synonym.toLowerCase().includes(query)) ||
                (synonym && synonym.toLowerCase().includes(query)) ||
                w.meaning.toLowerCase().includes(query) ||
                (meaning && meaning.toLowerCase().includes(query)) ||
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
            const typeInfo = WORD_TYPES[w.wordType] || WORD_TYPES['archaism'];
            const typeLabel = typeInfo[currentLang] || typeInfo['en'];
            const eraLabel = ERA_LABELS[w.eraKey] ? (ERA_LABELS[w.eraKey][currentLang] || w.era) : w.era;
            const meaning = getWordMeaning(w, currentLang);
            const synonym = getWordSynonym(w, currentLang);
            html += `
                <div class="live-search-item" data-word="${encodeURIComponent(w.word)}" data-lang="${w.lang}">
                    <div class="live-item-header">
                        <span class="live-item-word">${w.word}</span>
                        <span class="live-item-transcription">${w.pronunciation || ''}</span>
                        <span class="live-item-type ${w.wordType}">${typeLabel}</span>
                        <span class="live-item-era">${eraLabel}</span>
                    </div>
                    ${(synonym || w.synonym) ? `<div class="live-item-synonym">✨ <strong>${synonym || w.synonym}</strong></div>` : ''}
                    <div class="live-item-meaning">${meaning}</div>
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

            // Search query (matches word, synonym, meaning, or tags in both original and active languages)
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                const meaning = getWordMeaning(w, currentLang);
                const synonym = getWordSynonym(w, currentLang);
                return (
                    w.word.toLowerCase().includes(q) ||
                    (w.synonym && w.synonym.toLowerCase().includes(q)) ||
                    (synonym && synonym.toLowerCase().includes(q)) ||
                    w.meaning.toLowerCase().includes(q) ||
                    (meaning && meaning.toLowerCase().includes(q)) ||
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
        initAllCardTilts();
    }

    function createWordCard(w, index) {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.style.animationDelay = (index % ITEMS_PER_PAGE) * 0.05 + 's';
        card.dataset.id = w.id;

        const eraLabel = ERA_LABELS[w.eraKey]
            ? (ERA_LABELS[w.eraKey][currentLang] || ERA_LABELS[w.eraKey]['en'] || w.era)
            : w.era;

        const isHistoricism = w.wordType === 'historicism';
        const typeInfo = WORD_TYPES[w.wordType] || WORD_TYPES['archaism'];
        const typeLabel = typeInfo[currentLang] || typeInfo['en'];

        const communityBadge = w.isCommunity 
            ? `<span class="card-community-badge">🌟 ${currentLang === 'ru' ? 'Народное' : 'Community'}</span>` 
            : '';

        const meaning = getWordMeaning(w, currentLang);
        const rawSynonym = getWordSynonym(w, currentLang) || w.synonym;
        const showSynonym = rawSynonym && !isRedundantSynonym(rawSynonym, meaning);
        const synonym = showSynonym ? rawSynonym : '';
        const synLabelPrefix = currentLang === 'ru' ? 'Аналог: ' : (currentLang === 'de' ? 'Entsprechung: ' : (currentLang === 'es' ? 'Equivalente: ' : (currentLang === 'fr' ? 'Équivalent : ' : (currentLang === 'it' ? 'Equivalente: ' : 'Equivalent: '))));

        card.innerHTML = `
            <div class="card-sheen"></div>
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

            ${synonym ? `
            <div class="word-card-synonym">
                <span>🔄</span>
                <span>${synLabelPrefix}<strong class="card-synonym-text" data-orig-text="${w.synonym}">${synonym}</strong></span>
            </div>` : ''}

            <p class="word-card-meaning" data-orig-text="${w.meaning}">${meaning}</p>
            <div class="word-card-footer">
                <span class="word-card-source">${w.source}</span>
                <span class="word-card-arrow">→</span>
            </div>
        `;

        // Async adaptation for non-native translations
        if (!hasNativeTranslation(w, 'meaning', currentLang)) {
            const mEl = card.querySelector('.word-card-meaning');
            if (mEl) adaptElementText(mEl, w.meaning, currentLang, 'meaning');
        }
        if (synonym && !hasNativeTranslation(w, 'synonym', currentLang) && w.synonym) {
            const sEl = card.querySelector('.card-synonym-text');
            if (sEl) adaptElementText(sEl, w.synonym, currentLang, 'synonym');
        }

        // Quick copy button (copies exclusively w.word)
        const copyBtn = card.querySelector('.word-quick-copy');
        if (copyBtn) {
            copyBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                copySingleWord(w.word);
            });
        }

        card.addEventListener('click', () => {
            playPaperRustle();
            openModal(w);
        });
        return card;
    }

    // === Word Details Modal ===
    function openModal(w) {
        const eraLabel = ERA_LABELS[w.eraKey]
            ? (ERA_LABELS[w.eraKey][currentLang] || ERA_LABELS[w.eraKey]['en'] || w.era)
            : w.era;

        const isHistoricism = w.wordType === 'historicism';
        const typeInfo = WORD_TYPES[w.wordType] || WORD_TYPES['archaism'];
        const typeDesc = currentLang === 'ru' ? typeInfo.descRu : (typeInfo['desc' + currentLang.toUpperCase()] || typeInfo.descEn);

        const meaning = getWordMeaning(w, currentLang);
        const rawSynonym = getWordSynonym(w, currentLang) || w.synonym;
        const showSynonym = rawSynonym && !isRedundantSynonym(rawSynonym, meaning);
        const synonym = showSynonym ? rawSynonym : '';
        const etymology = getWordEtymology(w, currentLang);

        els.modalContent.innerHTML = `
            <div class="word-meta-badges">
                <span class="word-era-badge">${eraLabel}</span>
                <span class="word-type-badge ${isHistoricism ? 'historicism' : 'archaism'}">${typeInfo[currentLang] || typeInfo['en']}</span>
                ${w.isCommunity ? `<span class="card-community-badge">🌟 ${currentLang === 'ru' ? 'Добавлено читателем' : 'Community Contribution'}</span>` : ''}
            </div>

            <div class="modal-word-header">
                <h2 class="word-main">${w.word}</h2>
                <button class="btn btn-outline modal-copy-btn" id="modalCopyBtn" title="${t('copy')}">
                    <span>📋</span> <span>${t('copy')}</span>
                </button>
            </div>

            <p class="word-transcription">${w.pronunciation}</p>

            ${synonym ? `
            <div class="modal-synonym-box">
                <span style="font-size: 1.5rem;">✨</span>
                <div>
                    <div class="modal-synonym-title">${t('synonymLabel')}</div>
                    <div class="modal-synonym-text" data-orig-text="${w.synonym}">${synonym}</div>
                    <small style="color: var(--text-muted); font-size: 0.8rem;">${typeDesc}</small>
                </div>
            </div>` : ''}

            <p class="word-meaning" data-orig-text="${w.meaning}">${meaning}</p>

            <blockquote class="word-quote">
                <p>${w.quote}</p>
                <cite>- ${w.source}</cite>
            </blockquote>

            <div class="word-etymology">
                <h4>📜 ${t('etymology')}</h4>
                <p class="modal-etymology-text" data-orig-text="${w.etymology}">${etymology}</p>
            </div>

            <div class="word-usage">
                <h4>💡 ${t('usageLabel')}</h4>
                <p>${w.usage}</p>
            </div>
        `;

        if (!hasNativeTranslation(w, 'meaning', currentLang)) {
            const mEl = els.modalContent.querySelector('.word-meaning');
            if (mEl) adaptElementText(mEl, w.meaning, currentLang, 'meaning');
        }
        if (!hasNativeTranslation(w, 'synonym', currentLang) && w.synonym) {
            const sEl = els.modalContent.querySelector('.modal-synonym-text');
            if (sEl) adaptElementText(sEl, w.synonym, currentLang, 'synonym');
        }
        if (!hasNativeTranslation(w, 'etymology', currentLang) && w.etymology) {
            const eEl = els.modalContent.querySelector('.modal-etymology-text');
            if (eEl) adaptElementText(eEl, w.etymology, currentLang, 'etymology');
        }

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
            ? (ERA_LABELS[targetWord.eraKey][currentLang] || ERA_LABELS[targetWord.eraKey]['en'] || targetWord.era)
            : targetWord.era;
        els.quizWordType.textContent = (WORD_TYPES[targetWord.wordType] || WORD_TYPES['archaism'])[currentLang] || 'Archaism';

        if (quizMode === 'synonym') {
            els.quizPrompt.textContent = t('quizPromptSynonym') || (currentLang === 'ru'
                ? 'Подберите верный современный синоним:'
                : 'Select the correct modern equivalent:');
        } else {
            els.quizPrompt.textContent = t('quizPromptMeaning') || (currentLang === 'ru'
                ? 'Выберите правильное значение слова:'
                : 'Choose the correct meaning of this word:');
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

        // Build 4 choices with localized text
        const getChoiceText = (item) => {
            if (quizMode === 'synonym') {
                const s = getWordSynonym(item, currentLang) || item.synonym;
                if (s && !isRedundantSynonym(s, getWordMeaning(item, currentLang))) return s;
                // If synonym is redundant with meaning or empty, extract concise first segment
                const m = getWordMeaning(item, currentLang) || item.meaning;
                const splitClause = /,\s*(?:а\s+также|также|то\s+есть|тож|который|которая|которое|которые|что\s+и|служивший|ведавший|предназначенный|представляющий|в\s+отличие|особенно|чаще\s+всего|в\s+знач)/i;
                const subParts = m.split(/[;(\-—]/)[0].split(splitClause);
                return (subParts[0] || m).trim();
            }
            return getWordMeaning(item, currentLang) || item.meaning;
        };

        const choices = [
            { isCorrect: true, text: getChoiceText(targetWord) },
            { isCorrect: false, text: getChoiceText(distractors[0]) },
            { isCorrect: false, text: getChoiceText(distractors[1]) },
            { isCorrect: false, text: getChoiceText(distractors[2]) }
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
            els.quizFeedbackBanner.textContent = t('quizFeedbackCorrect') || (currentLang === 'ru' 
                ? '🎉 Великолепно! Правильный ответ!' 
                : '🎉 Splendid! That is correct!');
            showToast('🔥 ' + (t('streak') || 'Streak') + ': ' + quizStreak);
        } else {
            clickedBtn.classList.add('wrong');
            quizStreak = 0;
            els.quizFeedbackBanner.className = 'quiz-feedback-banner wrong';
            els.quizFeedbackBanner.textContent = t('quizFeedbackWrong') || (currentLang === 'ru' 
                ? 'Не совсем так, но это отличный повод запомнить!' 
                : 'Not quite, but now you know the ancient word!');
        }

        els.quizScore.textContent = quizScore;
        els.quizStreak.textContent = quizStreak;

        // Explanation reveal in active language (strictly never repeats the explanation twice)
        const wordMeaning = getWordMeaning(word, currentLang);
        const rawSynonym = getWordSynonym(word, currentLang) || word.synonym;
        const showSynonym = rawSynonym && !isRedundantSynonym(rawSynonym, wordMeaning);
        const synLabelPrefix = currentLang === 'ru' ? 'Современный аналог' : (currentLang === 'de' ? 'Moderne Entsprechung' : (currentLang === 'es' ? 'Equivalente moderno' : (currentLang === 'fr' ? 'Équivalent moderne' : (currentLang === 'it' ? 'Equivalente moderno' : 'Modern equivalent'))));

        els.quizExplanation.innerHTML = `
            <p><strong>${word.word}</strong> - ${wordMeaning}</p>
            ${showSynonym ? `<p>✨ <em>${synLabelPrefix}:</em> <strong>${rawSynonym}</strong></p>` : ''}
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

    // ==============================================================
    // === Sound Engine (Procedural Web Audio API Paper Rustle) =====
    // ==============================================================
    function getAudioContext() {
        if (!audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
                audioCtx = new AudioContextClass();
            }
        }
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume().catch(() => {});
        }
        return audioCtx;
    }

    function playPaperRustle() {
        if (!soundEnabled) return;
        try {
            const ctx = getAudioContext();
            if (!ctx) return;

            const duration = 0.26;
            const bufferSize = Math.floor(ctx.sampleRate * duration);
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);

            let b0 = 0, b1 = 0, b2 = 0;
            for (let i = 0; i < bufferSize; i++) {
                const white = Math.random() * 2 - 1;
                b0 = 0.99 * b0 + white * 0.05;
                b1 = 0.96 * b1 + white * 0.11;
                b2 = 0.86 * b2 + white * 0.25;
                const modulation = Math.sin(i / 150) * 0.25 + 0.75;
                data[i] = (b0 + b1 + b2 + white * 0.15) * modulation * 0.35;
            }

            const source = ctx.createBufferSource();
            source.buffer = buffer;

            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(1500, ctx.currentTime);
            filter.Q.setValueAtTime(1.6, ctx.currentTime);

            const gainNode = ctx.createGain();
            gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.04);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

            source.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(ctx.destination);

            source.start();
            source.stop(ctx.currentTime + duration);
        } catch (e) {
            // Passive fallback
        }
    }

    function toggleSound() {
        soundEnabled = !soundEnabled;
        localStorage.setItem('fw-sound', soundEnabled ? '1' : '0');
        updateSoundUI();
        if (soundEnabled) {
            playPaperRustle();
        }
        showToast(soundEnabled 
            ? (currentLang === 'ru' ? '🔊 Звук: Вкл' : '🔊 Sound: On')
            : (currentLang === 'ru' ? '🔇 Звук: Выкл' : '🔇 Sound: Off'));
    }

    function updateSoundUI() {
        if (els.soundToggle) {
            els.soundToggle.classList.toggle('muted', !soundEnabled);
            els.soundToggle.setAttribute('aria-pressed', soundEnabled ? 'true' : 'false');
            els.soundToggle.title = currentLang === 'ru' 
                ? (soundEnabled ? 'Звук: Вкл' : 'Звук: Выкл')
                : (soundEnabled ? 'Sound: On' : 'Sound: Off');
        }
        if (els.soundIcon) {
            els.soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
        }
        if (els.soundLabelText) {
            els.soundLabelText.textContent = soundEnabled ? t('soundOn') : t('soundOff');
        }
    }

    // ==============================================================
    // === 3D Card Tilt & Dynamic Sheen Engine ======================
    // ==============================================================
    function attachCardTilt(el) {
        if (!el || el._hasTilt) return;
        el._hasTilt = true;

        if (window.matchMedia('(hover: none)').matches) return;

        let sheen = el.querySelector('.card-sheen');
        if (!sheen) {
            sheen = document.createElement('div');
            sheen.className = 'card-sheen';
            el.prepend(sheen);
        }

        let isHovered = false;
        let targetX = 0, targetY = 0;
        let currentX = 0, currentY = 0;
        let rafId = null;

        function update() {
            if (!isHovered) {
                currentX += (0 - currentX) * 0.15;
                currentY += (0 - currentY) * 0.15;
                el.style.transform = `perspective(1000px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) scale3d(1, 1, 1)`;
                if (Math.abs(currentX) > 0.05 || Math.abs(currentY) > 0.05) {
                    rafId = requestAnimationFrame(update);
                } else {
                    el.style.transform = '';
                    rafId = null;
                }
                return;
            }

            currentX += (targetX - currentX) * 0.18;
            currentY += (targetY - currentY) * 0.18;
            el.style.transform = `perspective(1000px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) translateY(-4px)`;
            rafId = requestAnimationFrame(update);
        }

        el.addEventListener('mouseenter', () => {
            isHovered = true;
            if (!rafId) rafId = requestAnimationFrame(update);
        });

        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const maxTilt = 8;
            targetX = -((y - centerY) / centerY) * maxTilt;
            targetY = ((x - centerX) / centerX) * maxTilt;

            el.style.setProperty('--mouse-x', `${x}px`);
            el.style.setProperty('--mouse-y', `${y}px`);
        });

        el.addEventListener('mouseleave', () => {
            isHovered = false;
        });
    }

    function initAllCardTilts() {
        $$('.word-card, .word-card-hero-inner, .feature-card').forEach(el => attachCardTilt(el));
    }

    // ==============================================================
    // === Historical Era Timeline Engine ===========================
    // ==============================================================
    const ERA_META = {
        'ancient-rus': { tag: 'X–XIV вв.', icon: '⚔️' },
        'xv-xvii': { tag: 'XV–XVII вв.', icon: '📜' },
        'xviii-xix': { tag: 'XVIII–XIX вв.', icon: '🕯️' },
        'medieval': { tag: '500–1500', icon: '🏰' },
        'elizabethan': { tag: '1558–1603', icon: '👑' },
        'victorian': { tag: '1837–1901', icon: '🎩' },
        'classical-antiquity': { tag: '800 BC–500 AD', icon: '🏛️' },
        'renaissance': { tag: 'XIV–XVII', icon: '🎨' },
        'golden-age': { tag: '1492–1650', icon: '⛵' },
        'enlightenment': { tag: 'XVII–XVIII', icon: '🔭' },
        'middle-ages': { tag: 'V–XV', icon: '🛡️' },
        'church-slavonic': { tag: 'IX–XX', icon: '🪶' }
    };

    function buildEraTimeline() {
        if (!els.eraTimelineTrack) return;
        const wordsForLang = WORDS_DATABASE.filter(w => w.lang === filterLang);
        const uniqueEras = [...new Set(wordsForLang.map(w => w.eraKey))];

        let html = `
            <div class="era-timeline-node ${filterEra === 'all' ? 'active' : ''}" data-era="all" role="button" tabindex="0">
                <div class="era-seal">✨</div>
                <div class="era-info">
                    <span class="era-century">${t('allEras')}</span>
                    <span class="era-name">${wordsForLang.length} ${t('wordsInDict')}</span>
                </div>
            </div>
        `;

        uniqueEras.forEach(eraKey => {
            const eraObj = ERA_LABELS[eraKey];
            const label = eraObj ? (eraObj[currentLang] || eraObj['en'] || eraObj['ru']) : eraKey;
            const meta = ERA_META[eraKey] || { tag: 'Эпоха', icon: '📜' };
            const count = wordsForLang.filter(w => w.eraKey === eraKey).length;
            const isActive = filterEra === eraKey;

            html += `
                <div class="era-timeline-node ${isActive ? 'active' : ''}" data-era="${eraKey}" role="button" tabindex="0">
                    <div class="era-seal">${meta.icon}</div>
                    <div class="era-info">
                        <span class="era-century">${meta.tag}</span>
                        <span class="era-name">${label}</span>
                    </div>
                    <span class="era-count">${count}</span>
                </div>
            `;
        });

        els.eraTimelineTrack.innerHTML = html;

        els.eraTimelineTrack.querySelectorAll('.era-timeline-node').forEach(node => {
            node.addEventListener('click', () => {
                const era = node.dataset.era;
                filterEra = era;
                playPaperRustle();

                if (els.eraFilter) {
                    els.eraFilter.querySelectorAll('.chip').forEach(c => {
                        c.classList.toggle('active', c.dataset.era === era);
                    });
                }

                els.eraTimelineTrack.querySelectorAll('.era-timeline-node').forEach(n => {
                    n.classList.toggle('active', n.dataset.era === era);
                });

                renderGrid();
            });
        });
    }

    // === Event Bindings ===
    function bindEvents() {
        // Sound toggle
        if (els.soundToggle) {
            els.soundToggle.addEventListener('click', toggleSound);
        }
        // Theme cycle (dark -> sepia)
        if (els.themeToggle) els.themeToggle.addEventListener('click', cycleTheme);

        // Language pill custom dropdown trigger
        if (els.langPill) {
            els.langPill.addEventListener('click', (e) => {
                toggleLangDropdown(e);
            });
            els.langPill.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleLangDropdown(e);
                }
            });
        }

        // Font pill custom dropdown trigger with live previews
        if (els.fontPill) {
            els.fontPill.addEventListener('click', (e) => {
                toggleFontDropdown(e);
            });
            els.fontPill.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFontDropdown(e);
                }
            });
        }

        // Close dropdowns on click outside
        document.addEventListener('click', (e) => {
            if (els.fontCustomDropdown && els.fontCustomDropdown.classList.contains('open')) {
                if (!els.fontCustomDropdown.contains(e.target) && !els.fontPill.contains(e.target)) {
                    closeFontDropdown();
                }
            }
            if (els.langCustomDropdown && els.langCustomDropdown.classList.contains('open')) {
                if (!els.langCustomDropdown.contains(e.target) && !els.langPill.contains(e.target)) {
                    closeLangDropdown();
                }
            }
        });

        // Font selection from 22 fonts (native fallback)
        if (els.fontSelect) {
            els.fontSelect.addEventListener('change', (e) => {
                applyFont(e.target.value);
                savePreferences();
                const selectedOption = els.fontSelect.options[els.fontSelect.selectedIndex];
                const fontName = selectedOption ? selectedOption.text : e.target.value;
                showToast(currentLang === 'ru' ? `🔤 Шрифт: ${fontName}` : `🔤 Font: ${fontName}`);
            });
        }

        // Language selection (native fallback)
        if (els.langSelect) {
            els.langSelect.addEventListener('change', (e) => {
                setLanguage(e.target.value);
            });
        }

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
            if (els.eraTimelineTrack) {
                els.eraTimelineTrack.querySelectorAll('.era-timeline-node').forEach(n => {
                    n.classList.toggle('active', n.dataset.era === filterEra);
                });
            }
            playPaperRustle();
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

        // Crypto Wallet Copy Handler
        const cryptoCard = $('cryptoDonateCard');
        const cryptoCopyBtn = $('cryptoCopyBtn');
        const CRYPTO_ADDR = '0x433328E8Dc1E726A3F802fF916f09277932491F7';

        function copyCryptoAddress(e) {
            if (e) e.stopPropagation();
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(CRYPTO_ADDR).then(() => {
                    showToast(t('cryptoCopied') || 'Адрес криптокошелька скопирован!');
                }).catch(() => {
                    fallbackCopyCrypto();
                });
            } else {
                fallbackCopyCrypto();
            }
        }

        function fallbackCopyCrypto() {
            const ta = document.createElement('textarea');
            ta.value = CRYPTO_ADDR;
            ta.style.position = 'fixed';
            ta.style.left = '-9999px';
            document.body.appendChild(ta);
            ta.select();
            try {
                document.execCommand('copy');
                showToast(t('cryptoCopied') || 'Адрес криптокошелька скопирован!');
            } catch (err) {
                showToast(CRYPTO_ADDR);
            }
            document.body.removeChild(ta);
        }

        if (cryptoCopyBtn) {
            cryptoCopyBtn.addEventListener('click', copyCryptoAddress);
        }
        if (cryptoCard) {
            cryptoCard.addEventListener('click', copyCryptoAddress);
            cryptoCard.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    copyCryptoAddress();
                }
            });
        }

        // Escape key to close any open modal or dropdown
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeLangDropdown();
                closeFontDropdown();
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
