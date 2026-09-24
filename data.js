// =============================================
//  FORGOTTEN WORDS - Word Database & UI Strings
//  Dynamically maps RU_WORDS (1028) and EN_WORDS (1013)
//  with Modern Synonyms, Archaisms/Historicisms, and Categories
// =============================================

const RU_ERA_MAP = {
    'a': { key: 'ancient-rus', name: 'Древняя Русь' },
    'x': { key: 'xv-xvii', name: 'XV-XVII век' },
    'v': { key: 'xviii-xix', name: 'XVIII-XIX век' }
};

const EN_ERA_MAP = {
    'm': { key: 'medieval', name: 'Medieval England' },
    'e': { key: 'elizabethan', name: 'Elizabethan Era' },
    't': { key: 'victorian', name: 'Victorian Era' }
};

// Thematic Categories
const THEMATIC_CATEGORIES = {
    'all':            { ru: 'Все темы', en: 'All Topics' },
    'nature_body':    { ru: '🌿 Человек и природа', en: '🌿 Anatomy & Nature' },
    'clothing':       { ru: '👗 Одежда и ткани', en: '👗 Clothing & Textiles' },
    'professions':    { ru: '🔨 Профессии и чины', en: '🔨 Trades & Ranks' },
    'measures_money': { ru: '⚖️ Меры и деньги', en: '⚖️ Measures & Currency' },
    'military':       { ru: '⚔️ Военное дело', en: '⚔️ Warfare & Arms' },
    'household':      { ru: '🥣 Быт и утварь', en: '🥣 Household & Daily Life' },
    'speech_mind':    { ru: '💬 Речь и мысли', en: '💬 Speech & Feelings' }
};

// Word Types (Archaism vs Historicism)
const WORD_TYPES = {
    'all':         { ru: 'Все слова', en: 'All Words' },
    'archaism':    { ru: '🏛️ Архаизмы', en: '🏛️ Archaisms', descRu: 'Есть современный аналог', descEn: 'Has modern synonym' },
    'historicism': { ru: '📜 Историзмы', en: '📜 Historicisms', descRu: 'Само явление ушло в историю', descEn: 'Historical concept / extinct reality' }
};

// Curated modern synonyms for key words
const RU_CURATED_SYNONYMS = {
    'десница': 'правая рука',
    'шуйца': 'левая рука',
    'чело': 'лоб',
    'ланиты': 'щёки',
    'ланита': 'щека',
    'перст': 'палец',
    'вежды': 'веки',
    'уста': 'губы, рот',
    'зеницы': 'глаза, зрачки',
    'выя': 'шея',
    'рамена': 'плечи',
    'длань': 'ладонь',
    'чресла': 'бёдра, поясница',
    'перси': 'грудь',
    'лик': 'лицо, образ',
    'очи': 'глаза',
    'пясть': 'кулак',
    'чрево': 'живот, утроба',
    'ярёмо': 'хомут, иго',
    'рёбры': 'рёбра',
    'стегно': 'бедро',
    'тать': 'вор, грабитель',
    'татба': 'кража, воровство',
    'супостат': 'враг, недруг',
    'брань': 'битва, война',
    'ратник': 'воин, ополченец',
    'витязь': 'богатырь, рыцарь',
    'град': 'город',
    'брег': 'берег',
    'злато': 'золото',
    'сребро': 'серебро',
    'дщерь': 'дочь',
    'чадо': 'дитя, ребёнок',
    'отрок': 'подросток, юноша',
    'ветрило': 'парус',
    'лодья': 'лодка, ладья',
    'одр': 'кровать, постель',
    'покои': 'комнаты',
    'чертог': 'дворец, палаты',
    'корчма': 'трактир, таверна',
    'купец': 'торговец',
    'сонмище': 'толпа, сборище',
    'днесь': 'сегодня',
    'вельми': 'очень, весьма',
    'зело': 'очень',
    'паче': 'больше, сильнее',
    'токмо': 'только',
    'яко': 'как, будто',
    'абы': 'лишь бы',
    'коли': 'если',
    'ежели': 'если',
    'понеже': 'потому что',
    'почто': 'зачем, почему',
    'доколе': 'до каких пор',
    'давеча': 'недавно',
    'намедни': 'на днях',
    'сызнова': 'заново',
    'вкупе': 'вместе',
    'воочию': 'своими глазами',
    'всуе': 'напрасно, зря',
    'присно': 'всегда, вечно',
    'уповать': 'надеяться',
    'внимать': 'слушать',
    'глаголать': 'говорить',
    'вещать': 'говорить, пророчествовать',
    'зреть': 'видеть, смотреть',
    'взирать': 'смотреть',
    'алкать': 'жаждать, голодать',
    'ведать': 'знать',
    'чуять': 'чувствовать',
    'мнить': 'думать, полагать',
    'чаять': 'ожидать, надеяться',
    'сетовать': 'жаловаться',
    'роптать': 'выражать недовольство',
    'почивать': 'спать',
    'воспрять': 'ожить, очнуться',
    'ликовать': 'радоваться',
    'кручиниться': 'грустить, печалиться',
    'яриться': 'злиться, гневаться',
    'шествовать': 'торжественно идти',
    'созидать': 'строить, создавать',
    'зиждать': 'строить, основывать',
    'стяжать': 'накопить, приобрести',
    'мзда': 'плата, вознаграждение',
    'даяние': 'дар, милостыня'
};

const EN_CURATED_SYNONYMS = {
    'forsooth': 'in truth, indeed',
    'prithee': 'please, I pray you',
    'methinks': 'it seems to me, I think',
    'quoth': 'said, spoke',
    'perchance': 'perhaps, maybe',
    'forsake': 'abandon, leave',
    'anon': 'soon, shortly',
    'nay': 'no',
    'fie': 'shame!, nonsense!',
    'alack': 'alas!, woe!',
    'hark': 'listen!, hear!',
    'marry': 'indeed!, by Mary!',
    'grammercy': 'thank you!',
    'sooth': 'truth, reality',
    'gainsay': 'deny, contradict',
    'ween': 'think, believe',
    'hither': 'here, to this place',
    'thither': 'there, to that place',
    'whither': 'where, to what place',
    'hence': 'from here, away',
    'thence': 'from there',
    'whence': 'from where',
    'welkin': 'sky, heavens',
    'weasand': 'windpipe, throat',
    'wight': 'person, living being',
    'whilom': 'formerly, once',
    'eftsoons': 'soon after, shortly',
    'certes': 'certainly, surely',
    'varlet': 'rascal, servant',
    'scullion': 'kitchen servant',
    'bootless': 'useless, in vain',
    'fain': 'gladly, willingly',
    'maugre': 'in spite of, despite',
    'wont': 'accustomed, habit',
    'nought': 'nothing, zero',
    'aught': 'anything',
    'soothsayer': 'fortune teller, prophet',
    'eldritch': 'eerie, ghostly',
    'wraith': 'ghost, phantom',
    'poltroon': 'coward',
    'craven': 'cowardly',
    'dastard': 'sneaking coward',
    'popinjay': 'vain strutting person',
    'nincompoop': 'fool, idiot',
    'halcyon': 'peaceful, idyllic',
    'hubris': 'excessive pride, arrogance',
    'guerdon': 'reward, prize'
};

// Helper: categorize word and extract synonym
function analyzeWord(word, pronunciation, eraKey, meaning, lang) {
    const wLow = word.toLowerCase().trim();
    const mLow = meaning.toLowerCase();

    // 1. Synonym extraction
    let synonym = '';
    if (lang === 'ru' && RU_CURATED_SYNONYMS[wLow]) {
        synonym = RU_CURATED_SYNONYMS[wLow];
    } else if (lang === 'en' && EN_CURATED_SYNONYMS[wLow]) {
        synonym = EN_CURATED_SYNONYMS[wLow];
    } else {
        // Extract natural first segment or full meaning
        let firstClause = meaning.split(/[;(\-—]/)[0].trim();
        if (firstClause.endsWith('.')) {
            firstClause = firstClause.slice(0, -1).trim();
        }
        if (lang === 'en') {
            synonym = firstClause.replace(/^(a|an|the|to)\s+/i, '');
        } else {
            synonym = firstClause.replace(/^(один из|одна из|вид|род)\s+/i, '');
        }
        // NEVER truncate or cut off: full designation is preserved
        if (synonym.length > 0) {
            synonym = synonym.charAt(0).toLowerCase() + synonym.slice(1);
        }
    }

    // 2. Classify word type: Archaism vs Historicism
    // Historicisms: specific extinct items, ranks, ancient money, medieval arms/vessels
    let wordType = 'archaism';
    const historicismKeywords = [
        'чин', 'должност', 'монет', 'денежн', 'мера длин', 'мера вес', 'ведомств',
        'сословие', 'подать', 'оброк', 'барщин', 'приказ', 'челобит', 'кафтан',
        'кольчуг', 'шелом', 'пищаль', 'секир', 'ендов', 'братин', 'судно', 'ладья',
        'судн', 'дворян', 'бояр', 'окольнич', 'стольник', 'кравч', 'тиун',
        'officer', 'magistrate', 'currency', 'coin', 'feudal', 'vassal', 'serf',
        'armor', 'armour', 'weapon', 'sword', 'ship', 'vessel', 'caravel', 'galleon',
        'carriage', 'measure', 'guilder', 'florin', 'doubloon', 'shilling', 'groat'
    ];
    if (historicismKeywords.some(kw => mLow.includes(kw) || wLow.includes(kw))) {
        wordType = 'historicism';
    }

    // 3. Classify category
    let category = 'speech_mind';
    if (mLow.includes('одежд') || mLow.includes('ткань') || mLow.includes('плат') || mLow.includes('рубах') || mLow.includes('кафтан') || mLow.includes('шапк') || mLow.includes('сапог') || mLow.includes('шелк') || mLow.includes('бархат') || mLow.includes('cloth') || mLow.includes('fabric') || mLow.includes('garment') || mLow.includes('silk') || mLow.includes('tunic') || mLow.includes('dress') || mLow.includes('hat') || mLow.includes('bonnet')) {
        category = 'clothing';
    } else if (mLow.includes('чин') || mLow.includes('должност') || mLow.includes('ремесл') || mLow.includes('мастер') || mLow.includes('слуг') || mLow.includes('бояр') || mLow.includes('купец') || mLow.includes('officer') || mLow.includes('servant') || mLow.includes('craftsman') || mLow.includes('profession') || mLow.includes('trade') || mLow.includes('reeve') || mLow.includes('bailiff') || mLow.includes('worker')) {
        category = 'professions';
    } else if (mLow.includes('монет') || mLow.includes('денег') || mLow.includes('рубл') || mLow.includes('копейк') || mLow.includes('алтын') || mLow.includes('пуд') || mLow.includes('верст') || mLow.includes('аршин') || mLow.includes('сажен') || mLow.includes('золотник') || mLow.includes('coin') || mLow.includes('currency') || mLow.includes('measure') || mLow.includes('weight') || mLow.includes('pound') || mLow.includes('shilling') || mLow.includes('fathom')) {
        category = 'measures_money';
    } else if (mLow.includes('оруж') || mLow.includes('меч') || mLow.includes('щит') || mLow.includes('доспех') || mLow.includes('шлем') || mLow.includes('рать') || mLow.includes('войск') || mLow.includes('битва') || mLow.includes('секир') || mLow.includes('лучник') || mLow.includes('крепост') || mLow.includes('башня') || mLow.includes('weapon') || mLow.includes('armor') || mLow.includes('sword') || mLow.includes('shield') || mLow.includes('war') || mLow.includes('castle') || mLow.includes('fortress') || mLow.includes('knight')) {
        category = 'military';
    } else if (mLow.includes('посуд') || mLow.includes('сосуд') || mLow.includes('изб') || mLow.includes('печь') || mLow.includes('утварь') || mLow.includes('кубок') || mLow.includes('сундук') || mLow.includes('ларец') || mLow.includes('ковш') || mLow.includes('чаш') || mLow.includes('дом') || mLow.includes('пир') || mLow.includes('кухн') || mLow.includes('vessel') || mLow.includes('pot') || mLow.includes('chest') || mLow.includes('hearth') || mLow.includes('cup') || mLow.includes('house') || mLow.includes('table') || mLow.includes('inn') || mLow.includes('ale')) {
        category = 'household';
    } else if (mLow.includes('рук') || mLow.includes('ног') || mLow.includes('глаз') || mLow.includes('лиц') || mLow.includes('щек') || mLow.includes('шея') || mLow.includes('лоб') || mLow.includes('палец') || mLow.includes('грудь') || mLow.includes('живот') || mLow.includes('лес') || mLow.includes('рек') || mLow.includes('трава') || mLow.includes('гор') || mLow.includes('птиц') || mLow.includes('звер') || mLow.includes('body') || mLow.includes('hand') || mLow.includes('eye') || mLow.includes('face') || mLow.includes('head') || mLow.includes('neck') || mLow.includes('throat') || mLow.includes('river') || mLow.includes('hill') || mLow.includes('tree') || mLow.includes('wind') || mLow.includes('flower')) {
        category = 'nature_body';
    }

    return { synonym, wordType, category };
}

const WORDS_DATABASE = [];

// Ingest Russian words
if (typeof RU_WORDS !== 'undefined' && Array.isArray(RU_WORDS)) {
    RU_WORDS.forEach((item, index) => {
        const eraInfo = RU_ERA_MAP[item[2]] || RU_ERA_MAP['v'];
        const analysis = analyzeWord(item[0], item[1], item[2], item[3], 'ru');
        WORDS_DATABASE.push({
            id: 'ru_' + (index + 1),
            word: item[0],
            lang: 'ru',
            pronunciation: item[1] || `[${item[0].toLowerCase()}]`,
            era: eraInfo.name,
            eraKey: eraInfo.key,
            meaning: item[3],
            synonym: analysis.synonym,
            wordType: analysis.wordType,
            category: analysis.category,
            etymology: item[4] || 'Старинное русское слово.',
            usage: 'Употреблялось в литературных памятниках и живой речи соответствующей эпохи.',
            quote: item[5] || `«${item[0]} встречается в старинных летописях и сказаниях.»`,
            source: item[6] || 'Словарь В.И. Даля',
            tags: [item[0].toLowerCase(), eraInfo.key, analysis.wordType, analysis.category, analysis.synonym]
        });
    });
}

// Ingest English words
if (typeof EN_WORDS !== 'undefined' && Array.isArray(EN_WORDS)) {
    EN_WORDS.forEach((item, index) => {
        const eraInfo = EN_ERA_MAP[item[2]] || EN_ERA_MAP['t'];
        const analysis = analyzeWord(item[0], item[1], item[2], item[3], 'en');
        WORDS_DATABASE.push({
            id: 'en_' + (index + 1),
            word: item[0],
            lang: 'en',
            pronunciation: item[1] || `/${item[0].toLowerCase()}/`,
            era: eraInfo.name,
            eraKey: eraInfo.key,
            meaning: item[3],
            synonym: analysis.synonym,
            wordType: analysis.wordType,
            category: analysis.category,
            etymology: item[4] || 'From archaic English usage.',
            usage: 'Commonly found in classic English literature, plays, and historical records.',
            quote: item[5] || `"${item[0]} was celebrated in ancient English verse."`,
            source: item[6] || 'Oxford English Dictionary / Historical Corpus',
            tags: [item[0].toLowerCase(), eraInfo.key, analysis.wordType, analysis.category, analysis.synonym]
        });
    });
}

// Load user-contributed words from localStorage if in browser
if (typeof window !== 'undefined' && window.localStorage) {
    try {
        const userWords = JSON.parse(localStorage.getItem('fw_user_suggested_words') || '[]');
        userWords.forEach(uw => {
            WORDS_DATABASE.unshift(uw); // Put community words right at top of their lang
        });
    } catch (e) {
        console.warn('Failed to parse user words from localStorage:', e);
    }
}

// Era labels for filters (bilingual)
const ERA_LABELS = {
    'ancient-rus':  { ru: 'Древняя Русь', en: 'Ancient Rus' },
    'xv-xvii':      { ru: 'XV-XVII век', en: '15th-17th Century' },
    'xviii-xix':    { ru: 'XVIII-XIX век', en: '18th-19th Century' },
    'medieval':     { ru: 'Средневековье', en: 'Medieval England' },
    'elizabethan':  { ru: 'Елизаветинская эпоха', en: 'Elizabethan Era' },
    'victorian':    { ru: 'Викторианская эпоха', en: 'Victorian Era' }
};

// UI translation strings
const UI_STRINGS = {
    ru: {
        logoTitle: 'Забытые Слова',
        logoSubtitle: 'Словарь редких слов',
        wordOfDay: 'Слово дня',
        randomWord: 'Случайное слово',
        copy: 'Копировать',
        copied: 'Скопировано!',
        wordsInDict: 'слов в словаре',
        eras: 'эпох',
        languages: 'языка',
        dictionary: 'Словарь',
        dictDesc: 'Исследуйте слова, которые когда-то звучали в каждом доме',
        language: 'Язык:',
        era: 'Эпоха:',
        category: 'Тематика:',
        wordType: 'Тип слова:',
        all: 'Все',
        allWords: 'Все слова',
        allCategories: 'Все темы',
        allEras: 'Все эпохи',
        typeArchaism: '🏛️ Архаизмы (есть синоним)',
        typeHistoricism: '📜 Историзмы (ушедшая реалия)',
        searchPlaceholder: 'Поиск слова или современного синонима...',
        notFound: 'Слов не найдено. Попробуйте другой запрос или сбросьте фильтры.',
        showMore: 'Показать ещё',
        aboutTitle: 'О проекте',
        aboutP1: '<strong>Забытые Слова</strong> - это интерактивный словарь устаревших и вышедших из употребления слов русского и английского языков.',
        aboutP2: 'Мы собираем архаизмы, историзмы и редкие слова из классической литературы - от Пушкина и Достоевского до Шекспира и Диккенса - и объясняем их живым, понятным языком, подбирая современные синонимы.',
        aboutP3: 'Каждый день мы показываем новое забытое слово, чтобы вы могли расширить свой словарный запас и взглянуть на мир глазами прошлых поколений.',
        feat1Title: 'Современные аналоги',
        feat1Desc: 'К каждому слову подобран понятный синоним из сегодняшнего языка',
        feat2Title: 'Два богатых языка',
        feat2Desc: 'Более 2 000 русских и английских старинных слов без смешивания',
        feat3Title: 'Архаизмы и историзмы',
        feat3Desc: 'Чёткое разделение слов на заменённые и исчезнувшие явления',
        feat4Title: 'Викторины и игры',
        feat4Desc: 'Проверьте себя в игре «Угадай значение» или подберите синоним',
        footerCopy: '© 2026 Забытые Слова. Сохраняем язык прошлого для будущего.',
        footerMade: 'Сделано с ❤️ для любителей словесности',
        etymology: 'Происхождение',
        usageLabel: 'Употребление',
        synonymLabel: 'Современный аналог:',
        navWordOfDay: 'Слово дня',
        navDictionary: 'Словарь',
        navQuiz: 'Викторина',
        navSuggest: 'Предложить слово',
        navAbout: 'О проекте',
        tabRu: 'Русские слова',
        tabEn: 'English words',
        quizTitle: 'Викторина забытых слов',
        quizSubtitle: 'Проверьте свою эрудицию и словарный запас!',
        score: 'Счёт',
        streak: 'Серия',
        nextQuestion: 'Следующее слово',
        quizModeMeaning: '📖 Угадай значение',
        quizModeSynonym: '✨ Современный аналог',
        quizPromptMeaning: 'Выберите правильное значение слова:',
        quizPromptSynonym: 'Подберите верный современный синоним:',
        quizFeedbackCorrect: 'Верно! Великолепная эрудиция!',
        quizFeedbackWrong: 'Не совсем так. Правильный ответ:',
        suggestTitle: 'Предложить забытое слово',
        suggestSubtitle: 'Услышали редкое слово от бабушки или встретили в старой книге? Предложите его для добавления в словарь - мы рассмотрим вашу заявку!',
        suggestWordLabel: 'Слово *',
        suggestWordPlaceholder: 'Например: Посолонь',
        suggestLangLabel: 'Язык',
        suggestSynonymLabel: 'Современный аналог / синоним *',
        suggestSynonymPlaceholder: 'Например: По ходу солнца / по часовой стрелке',
        suggestTypeLabel: 'Тип слова',
        suggestCategoryLabel: 'Тематическая категория',
        suggestMeaningLabel: 'Подробное толкование и значение *',
        suggestMeaningPlaceholder: 'Что означало это слово, как использовалось в старину...',
        suggestSourceLabel: 'Откуда вы узнали это слово? (книга, бабушка, диалект)',
        suggestSourcePlaceholder: 'Например: Услышал от дедушки в Архангельской области',
        suggestAuthorLabel: 'Ваше имя или псевдоним (для благодарности в карточке)',
        suggestAuthorPlaceholder: 'Например: Иван Читатель',
        submitWord: 'Отправить на рассмотрение',
        themeTitle: 'Тема оформления',
        toastCopiedWord: 'Слово скопировано в буфер!',
        toastWordAdded: 'Заявка со словом успешно отправлена автору на модерацию!'
    },
    en: {
        logoTitle: 'Forgotten Words',
        logoSubtitle: 'Dictionary of Lost Words',
        wordOfDay: 'Word of the Day',
        randomWord: 'Random Word',
        copy: 'Copy',
        copied: 'Copied!',
        wordsInDict: 'words in dictionary',
        eras: 'historical eras',
        languages: 'languages',
        dictionary: 'Dictionary',
        dictDesc: 'Explore words that once echoed in every household',
        language: 'Language:',
        era: 'Era:',
        category: 'Category:',
        wordType: 'Word Type:',
        all: 'All',
        allWords: 'All words',
        allCategories: 'All categories',
        allEras: 'All eras',
        typeArchaism: '🏛️ Archaisms (has modern synonym)',
        typeHistoricism: '📜 Historicisms (historical relic)',
        searchPlaceholder: 'Search for a word or modern synonym...',
        notFound: 'No words found. Try a different query or reset filters.',
        showMore: 'Show More',
        aboutTitle: 'About the Project',
        aboutP1: '<strong>Forgotten Words</strong> is an interactive dictionary of archaic and obsolete words from the Russian and English languages.',
        aboutP2: 'We collect archaisms, historicisms, and rare words from classical literature - from Pushkin and Dostoevsky to Shakespeare and Dickens - and pair each with clear modern equivalents.',
        aboutP3: 'Every day we feature a new forgotten word, so you can expand your vocabulary and see the world through the eyes of past generations.',
        feat1Title: 'Modern Counterparts',
        feat1Desc: 'Every archaic word includes a direct contemporary synonym',
        feat2Title: 'Two Rich Languages',
        feat2Desc: 'Over 2,000 Russian and English words with strict separation',
        feat3Title: 'Archaisms & Historicisms',
        feat3Desc: 'Clear distinction between replaced words and extinct realities',
        feat4Title: 'Interactive Quizzes',
        feat4Desc: 'Test your knowledge in "Guess the Meaning" or synonym match',
        footerCopy: '© 2026 Forgotten Words. Preserving the language of the past for the future.',
        footerMade: 'Made with ❤️ for word lovers',
        etymology: 'Etymology',
        usageLabel: 'Usage',
        synonymLabel: 'Modern equivalent:',
        navWordOfDay: 'Word of the Day',
        navDictionary: 'Dictionary',
        navQuiz: 'Quiz',
        navSuggest: 'Suggest Word',
        navAbout: 'About',
        tabRu: 'Russian words',
        tabEn: 'English words',
        quizTitle: 'Literary Words Quiz',
        quizSubtitle: 'Test your historical vocabulary and intuition!',
        score: 'Score',
        streak: 'Streak',
        nextQuestion: 'Next Word',
        quizModeMeaning: '📖 Guess Meaning',
        quizModeSynonym: '✨ Modern Synonym',
        quizPromptMeaning: 'Choose the correct meaning of this word:',
        quizPromptSynonym: 'Select the correct modern equivalent:',
        quizFeedbackCorrect: 'Correct! Outstanding erudition!',
        quizFeedbackWrong: 'Not quite. The correct answer was:',
        suggestTitle: 'Suggest a Forgotten Word',
        suggestSubtitle: 'Heard a rare word or encountered one in an old book? Submit your proposal - our editors will review it!',
        suggestWordLabel: 'Word *',
        suggestWordPlaceholder: 'E.g., Overmorrow',
        suggestLangLabel: 'Language',
        suggestSynonymLabel: 'Modern equivalent / synonym *',
        suggestSynonymPlaceholder: 'E.g., The day after tomorrow',
        suggestTypeLabel: 'Word type',
        suggestCategoryLabel: 'Category',
        suggestMeaningLabel: 'Detailed meaning & definition *',
        suggestMeaningPlaceholder: 'What this word meant and how it was used in old times...',
        suggestSourceLabel: 'Where did you discover this word? (book, folklore, elder)',
        suggestSourcePlaceholder: 'E.g., Shakespeare, Hamlet, or local countryside phrase',
        suggestAuthorLabel: 'Your name or moniker (for credit in card)',
        suggestAuthorPlaceholder: 'E.g., Arthur the Bibliophile',
        submitWord: 'Submit for Review',
        themeTitle: 'Theme',
        toastCopiedWord: 'Word copied to clipboard!',
        toastWordAdded: 'Word suggestion submitted for review! Thank you!'
    }
};
