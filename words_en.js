// =============================================
//  FORGOTTEN WORDS - English Words Database (2732 words)
//  Compact format: [word, pronunciation, eraKey, meaning, etymology, quote, source]
// =============================================

const EN_WORDS = [
  [
    "Forsooth",
    "/fɔːrˈsuːθ/",
    "m",
    "In truth, indeed. Often used ironically even in its own era",
    "From OE \"forsōþ\" - for + sōþ (truth). Related to \"soothe\"",
    "\"Forsooth, a great arithmetician, one Michael Cassio\"",
    "Shakespeare, \"Othello\""
  ],
  [
    "Prithee",
    "/ˈprɪð.iː/",
    "e",
    "I pray thee; please. A polite form of request",
    "Contraction of \"I pray thee\" → \"pray thee\" → \"prithee\"",
    "\"Prithee, peace. I dare do all that may become a man\"",
    "Shakespeare, \"Macbeth\""
  ],
  [
    "Methinks",
    "/mɪˈθɪŋks/",
    "e",
    "It seems to me. \"Me\" is the object (dative), not the subject",
    "From OE \"mē þyncþ\" - it seems to me. Impersonal construction",
    "\"The lady doth protest too much, methinks\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Quoth",
    "/kwoʊθ/",
    "m",
    "Said (defective verb, always precedes its subject: \"quoth he\")",
    "From OE \"cwæþ,\" past tense of \"cweþan\" - to say",
    "\"Quoth the Raven, 'Nevermore'\"",
    "Edgar Allan Poe, \"The Raven\""
  ],
  [
    "Perchance",
    "/pərˈtʃæns/",
    "e",
    "Perhaps, possibly, by chance",
    "From Anglo-French \"par chance\" - by chance",
    "\"To sleep, perchance to dream - ay, there's the rub\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Forsake",
    "/fɔːrˈseɪk/",
    "m",
    "To abandon, renounce, give up entirely",
    "From OE \"forsacan\" - to oppose, refuse. \"For-\" (away) + \"sacan\" (strive)",
    "\"Forsake me not in mine old age\"",
    "King James Bible, Psalms"
  ],
  [
    "Anon",
    "/əˈnɒn/",
    "m",
    "Soon, shortly; at another time. \"Ever and anon\" - now and then",
    "From OE \"on ān\" - into one (moment), implying \"at once\"",
    "\"But come, anon - more of this matter\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Nay",
    "/neɪ/",
    "m",
    "No; or rather, and more than that. Emphatic negative",
    "From Old Norse \"nei\" - no, from ne (not) + ei (ever)",
    "\"Let your communication be, Yea, yea; Nay, nay\"",
    "King James Bible, Matthew 5:37"
  ],
  [
    "Fie",
    "/faɪ/",
    "e",
    "Exclamation of disgust, disapproval, or outraged propriety",
    "Probably echoic/onomatopoeic. Found in many languages: Fr. \"fi,\" Ger. \"pfui\"",
    "\"Fie, fie upon her! There's language in her eye\"",
    "Shakespeare, \"Troilus and Cressida\""
  ],
  [
    "Alack",
    "/əˈlæk/",
    "e",
    "An exclamation of sorrow, regret, or dismay",
    "Possibly from \"ah\" + \"lack\" (loss). First recorded 15th century",
    "\"Alack, there lies more peril in thine eye than twenty swords\"",
    "Shakespeare, \"Romeo and Juliet\""
  ],
  [
    "Hark",
    "/hɑːrk/",
    "m",
    "Listen! Pay attention! (imperative)",
    "From ME \"herkien\" - to listen. Related to \"hearken\"",
    "\"Hark! The herald angels sing\"",
    "Charles Wesley, Christmas hymn"
  ],
  [
    "Marry",
    "/ˈmær.i/",
    "e",
    "Indeed! (mild oath, from \"by the Virgin Mary\")",
    "Euphemistic oath: \"by Mary\" → \"marry.\" Not related to marriage",
    "\"Marry, sir, I came to fetch you to dinner\"",
    "Shakespeare, comedies"
  ],
  [
    "Grammercy",
    "/ɡrəˈmɜːr.si/",
    "m",
    "An exclamation of grateful thanks or surprise",
    "From Old French \"grand merci\" - great thanks",
    "\"Grammercy, gentle knight! Your valor has saved my honor\"",
    "From medieval romances"
  ],
  [
    "Sooth",
    "/suːθ/",
    "m",
    "Truth, reality. \"In sooth\" = in truth. \"Soothsayer\" = truth-teller",
    "From OE \"sōþ\" - true. Cognate with Old Norse \"sannr\"",
    "\"In sooth, I know not why I am so sad\"",
    "Shakespeare, \"Merchant of Venice\""
  ],
  [
    "Gainsay",
    "/ˌɡeɪnˈseɪ/",
    "m",
    "To deny, contradict, speak against",
    "ME \"gainsayen\" - \"gain-\" (against, from ON \"gegn\") + \"say\"",
    "\"This truth cannot be gainsaid, for the evidence is plain\"",
    "From legal proceedings"
  ],
  [
    "Ween",
    "/wiːn/",
    "m",
    "To think, believe, suppose, expect",
    "From OE \"wēnan\" - to think, hope. Related to Ger. \"wähnen\"",
    "\"I ween that danger lies ahead, though none can say for certain\"",
    "From medieval narratives"
  ],
  [
    "Whence",
    "/wɛns/",
    "m",
    "From where; from what source. \"From whence\" is redundant",
    "From ME \"whennes,\" from OE \"hwanon\" - from where",
    "\"Return from whence you came\"",
    "John Milton, \"Paradise Lost\""
  ],
  [
    "Hither",
    "/ˈhɪð.ər/",
    "m",
    "To this place; toward the speaker",
    "From OE \"hider.\" Related to \"here.\" Cognate with Lat. \"citra\"",
    "\"Come hither, boy. Tell me, hast thou been at court?\"",
    "Shakespeare, \"As You Like It\""
  ],
  [
    "Thither",
    "/ˈðɪð.ər/",
    "m",
    "To that place; to there. Counterpart of \"hither\"",
    "From OE \"þider\" - to that place. Related to \"there\"",
    "\"Go thither and report what thou dost find\"",
    "From medieval instructions"
  ],
  [
    "Whither",
    "/ˈwɪð.ər/",
    "m",
    "To where; to what place or end",
    "From OE \"hwider\" - to where. Part of hither/thither/whither trio",
    "\"Whither thou goest, I will go\"",
    "King James Bible, Ruth 1:16"
  ],
  [
    "Hence",
    "/hɛns/",
    "m",
    "From here; from this time; therefore",
    "From ME \"hennes,\" from OE \"heonan\" - from here",
    "\"Get thee hence!\" - Go away from here",
    "Shakespeare, various plays"
  ],
  [
    "Thence",
    "/ðɛns/",
    "m",
    "From that place; from that time; as a consequence",
    "From ME \"thennes\" - from there. Related to \"then\"",
    "\"He departed thence and went into a desert place\"",
    "King James Bible"
  ],
  [
    "Henceforth",
    "/ˌhɛnsˈfɔːrθ/",
    "m",
    "From this time on, from now forward",
    "From \"hence\" + \"forth\" (forward). Literally \"from now forward\"",
    "\"Henceforth I shall call you friend\"",
    "From medieval literature"
  ],
  [
    "Thenceforth",
    "/ˌðɛnsˈfɔːrθ/",
    "m",
    "From that time forward, after that point",
    "From \"thence\" + \"forth\" - from that point onward",
    "\"Thenceforth the kingdom knew peace for a generation\"",
    "From historical chronicles"
  ],
  [
    "Betwixt",
    "/bɪˈtwɪkst/",
    "m",
    "Between. \"Betwixt and between\" - in an intermediate state",
    "From OE \"betweohs\" - by + tweohs (two). \"-t\" added by analogy",
    "\"There is not much difference betwixt the two of them\"",
    "Defoe, \"Robinson Crusoe\""
  ],
  [
    "Twixt",
    "/twɪkst/",
    "e",
    "Between (poetic contraction of \"betwixt\")",
    "Contracted from \"betwixt\" by dropping prefix \"be-\"",
    "\"Nothing right or wrong 'twixt heaven and hell\"",
    "Paraphrase of Shakespeare"
  ],
  [
    "Yonder",
    "/ˈjɒn.dər/",
    "m",
    "Over there; at a distance but within sight",
    "From OE \"geond\" - beyond. Related to \"yon\"",
    "\"What light through yonder window breaks?\"",
    "Shakespeare, \"Romeo and Juliet\""
  ],
  [
    "Fortnight",
    "/ˈfɔːrt.naɪt/",
    "m",
    "A period of two weeks (fourteen nights)",
    "From OE \"fēowertīene niht\" - fourteen nights",
    "\"I shall return within a fortnight\"",
    "Jane Austen, \"Pride and Prejudice\""
  ],
  [
    "Sennight",
    "/ˈsɛn.aɪt/",
    "m",
    "A period of seven nights; one week",
    "From OE \"seofon nihta\" - seven nights. Germanic time-counting",
    "\"A sennight hence I shall expect thy answer\"",
    "From medieval correspondence"
  ],
  [
    "Ere",
    "/ɛər/",
    "m",
    "Before (in time). Conjunction and preposition",
    "From OE \"ǣr\" - before. Cognate with ON \"ár\" (early)",
    "\"I must be cruel only to be kind; ere all is done\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Erstwhile",
    "/ˈɜːst.waɪl/",
    "t",
    "Former, previous; at one time",
    "ME \"erst\" (formerly) + \"while\" (time). \"Erst\" from OE superlative",
    "\"His erstwhile companions had long since abandoned the venture\"",
    "Dickens, \"Our Mutual Friend\""
  ],
  [
    "Morrow",
    "/ˈmɒr.oʊ/",
    "m",
    "The next day; tomorrow. \"Good morrow\" = good morning",
    "From ME \"morwe,\" from OE \"morgen\" - morning",
    "\"Good morrow, cousin. Is the day so young?\"",
    "Shakespeare, \"Romeo and Juliet\""
  ],
  [
    "Yore",
    "/jɔːr/",
    "m",
    "Long ago, in times past. \"Of yore\" = of old",
    "From OE \"geāra\" - formerly. Related to \"year\"",
    "\"In days of yore, when knights rode forth to battle\"",
    "From medieval romances"
  ],
  [
    "Thrice",
    "/θraɪs/",
    "m",
    "Three times. Once/twice/thrice - only \"thrice\" is archaic",
    "From ME \"thries,\" from OE \"þriwa\" - three times",
    "\"Thrice the brinded cat hath mew'd\"",
    "Shakespeare, \"Macbeth\""
  ],
  [
    "Twelvemonth",
    "/ˈtwɛlv.mʌnθ/",
    "e",
    "A year; a period of twelve months",
    "Literal: twelve months. An older way of saying \"a year\"",
    "\"Within a twelvemonth and a day, the truth shall be revealed\"",
    "From legal documents"
  ],
  [
    "Eventide",
    "/ˈiːv.ən.taɪd/",
    "m",
    "Evening, the time of evening",
    "From OE \"ǣfentīd\" - evening + time/tide",
    "\"At eventide the shepherds brought their flocks home\"",
    "From pastoral poetry"
  ],
  [
    "Noontide",
    "/ˈnuːn.taɪd/",
    "m",
    "Noon, midday; the time around noon",
    "From \"noon\" + \"tide\" (= time). Like \"eventide\"",
    "\"At noontide they rested beneath the great oak\"",
    "From literary descriptions"
  ],
  [
    "Varlet",
    "/ˈvɑːr.lɪt/",
    "m",
    "Originally a page or attendant; later a rogue or scoundrel",
    "From OF \"vaslet\" - young man. Same root as \"valet\"",
    "\"Away, you varlet! You are not worth the dust\"",
    "Shakespeare, \"Taming of the Shrew\""
  ],
  [
    "Rapscallion",
    "/ræpˈskæl.jən/",
    "t",
    "A mischievous person; a rascal, often used affectionately",
    "Alteration of \"rascallion\" from \"rascal\" + \"-ion\"",
    "\"You little rapscallion! Come down from that tree!\"",
    "Dickens, \"Oliver Twist\""
  ],
  [
    "Coxcomb",
    "/ˈkɒks.koʊm/",
    "e",
    "A vain, conceited man. Also: a jester's cap shaped like a rooster's comb",
    "From \"cock's comb\" - rooster's crest. Extended to mean a fop",
    "\"He is a most notable coxcomb, full of his own importance\"",
    "Shakespeare, \"Twelfth Night\""
  ],
  [
    "Swain",
    "/sweɪn/",
    "m",
    "A young lover or suitor; a country youth courting a maiden",
    "From OE \"swān\" - swineherd. From ON \"sveinn\" - boy",
    "\"The swain declared his love beneath the evening skies\"",
    "From pastoral poetry"
  ],
  [
    "Knave",
    "/neɪv/",
    "m",
    "Originally: a boy, servant. Later: a dishonest, unscrupulous person",
    "From OE \"cnafa\" - boy, servant. Cognate with Ger. \"Knabe\"",
    "\"The knave of hearts, he stole the tarts\"",
    "Nursery rhyme / playing cards"
  ],
  [
    "Wench",
    "/wɛntʃ/",
    "m",
    "Originally: a girl, young woman. Later: a woman of low morals",
    "From OE \"wencel\" - child. Semantic deterioration over time",
    "\"A likely wench, fair-spoken and well-mannered\"",
    "Shakespeare, comedies"
  ],
  [
    "Churl",
    "/tʃɜːrl/",
    "m",
    "A rude, ill-bred person. Originally: a peasant, a man of low birth",
    "From OE \"ceorl\" - man, peasant. Related to \"Carl/Charles\"",
    "\"The churl refused to share his bread with the traveler\"",
    "From medieval tales"
  ],
  [
    "Blackguard",
    "/ˈblæɡ.ɑːrd/",
    "t",
    "A scoundrel, villain; a thoroughly dishonorable person",
    "Originally: kitchen servants (the \"black guard\" who carried pots)",
    "\"You blackguard! How dare you show your face here!\"",
    "From Victorian novels"
  ],
  [
    "Popinjay",
    "/ˈpɒp.ɪn.dʒeɪ/",
    "e",
    "A vain, talkative person. Originally: a parrot or its image used as a target",
    "From OF \"papegai\" - parrot. Arabic \"babaḡā\" via Spanish",
    "\"A certain lord, neat, trimly dress'd, fresh as a popinjay\"",
    "Shakespeare, \"Henry IV\""
  ],
  [
    "Jackanapes",
    "/ˈdʒæk.ə.neɪps/",
    "e",
    "An impudent, mischievous person; a monkey",
    "Possibly from \"Jack Napes\" (Jack of Naples) - a monkey nickname",
    "\"That jackanapes has been making sport of us all day\"",
    "From Elizabethan descriptions"
  ],
  [
    "Scullion",
    "/ˈskʌl.jən/",
    "e",
    "The lowest kitchen servant; one who scours pots and dishes",
    "From OF \"escouvillon\" - dish-mop. Related to Lat. \"scopa\" - broom",
    "\"You base football-player! You scullion! You rampallian!\"",
    "Shakespeare, \"Henry IV, Part 2\""
  ],
  [
    "Goodwife",
    "/ˈɡʊd.waɪf/",
    "m",
    "Mistress of a household; title for a married woman (like \"Mrs.\")",
    "From \"good\" + \"wife\" (= woman). Contracted to \"Goody\"",
    "\"Goodwife Brown, have you seen the parson today?\"",
    "From colonial American records"
  ],
  [
    "Yeoman",
    "/ˈjoʊ.mən/",
    "m",
    "A freeholder; a man of modest means who farms his own land",
    "From ME \"yoman\" - possibly \"young man.\" Respectable common farmer",
    "\"A yeoman's service\" - loyal, dependable work",
    "From medieval social descriptions"
  ],
  [
    "Esquire",
    "/ɪˈskwaɪər/",
    "m",
    "A young nobleman serving as a knight's attendant; later a courtesy title",
    "From OF \"escuier\" - shield-bearer. Lat. \"scutarius\"",
    "\"The esquire bore his master's shield and lance\"",
    "From chivalric romances"
  ],
  [
    "Liege",
    "/liːdʒ/",
    "m",
    "A feudal lord to whom allegiance is owed; or a loyal subject",
    "From OF \"lige\" - bound by feudal obligation. Germanic origin",
    "\"My liege, your loyal servant awaits your command\"",
    "From feudal court language"
  ],
  [
    "Physick",
    "/ˈfɪz.ɪk/",
    "e",
    "Medicine, medical treatment; the art of healing",
    "From Lat. \"physica\" - natural science. Later narrowed to medicine",
    "\"The physick did him more harm than good\"",
    "From medical records"
  ],
  [
    "Plague",
    "/pleɪɡ/",
    "m",
    "A deadly epidemic disease; a curse or torment. \"A plague upon it!\"",
    "From Lat. \"plaga\" - blow, wound. Via OF \"plage\"",
    "\"A plague o' both your houses!\"",
    "Shakespeare, \"Romeo and Juliet\""
  ],
  [
    "Pox",
    "/pɒks/",
    "e",
    "Disease marked by skin eruptions; a curse. \"A pox on you!\"",
    "Plural of \"pock\" - pustule. OE \"pocc\"",
    "\"A pox upon this howling! They are louder than the weather\"",
    "Shakespeare, \"The Tempest\""
  ],
  [
    "Dropsy",
    "/ˈdrɒp.si/",
    "m",
    "Edema; swelling caused by fluid accumulation in body tissues",
    "From OF \"idropisie,\" from Lat./Gk. \"hydrōps\" - water",
    "\"The poor man suffered from the dropsy and could scarcely walk\"",
    "From medical descriptions"
  ],
  [
    "Ague",
    "/ˈeɪ.ɡjuː/",
    "m",
    "A fever with chills and sweating, especially malaria",
    "From OF \"ague\" - acute (fever). Lat. \"acuta\" - sharp",
    "\"The ague struck him down and he shook with cold sweats\"",
    "From medical records"
  ],
  [
    "Consumption",
    "/kənˈsʌmp.ʃən/",
    "t",
    "Tuberculosis; the disease that \"consumed\" the body",
    "From Lat. \"consumptio\" - wasting away. The body wastes away",
    "\"She died of consumption, pale and wasted to nothing\"",
    "From Victorian novels"
  ],
  [
    "Apoplexy",
    "/ˈæp.ə.plɛk.si/",
    "e",
    "A stroke; sudden loss of consciousness from cerebral hemorrhage",
    "From Gk. \"apoplēxia\" - being struck down",
    "\"He was seized with apoplexy and fell senseless to the floor\"",
    "From medical descriptions"
  ],
  [
    "Pottage",
    "/ˈpɒt.ɪdʒ/",
    "m",
    "A thick soup or stew of boiled vegetables and grain",
    "From OF \"potage\" - what goes in a pot. Related to \"pot-au-feu\"",
    "\"Jacob gave Esau bread and pottage of lentils\"",
    "King James Bible, Genesis"
  ],
  [
    "Mead",
    "/miːd/",
    "m",
    "An alcoholic drink made from fermented honey and water",
    "From OE \"medu\" - honey wine. Cognate with Sanskrit \"madhu\"",
    "\"They drank mead in the great hall until the torches burned low\"",
    "From Anglo-Saxon descriptions"
  ],
  [
    "Posset",
    "/ˈpɒs.ɪt/",
    "e",
    "A warm drink of milk curdled with wine or ale, often spiced",
    "ME \"posset\" - origin uncertain. Medieval medicinal/comfort drink",
    "\"She made a posset of hot milk and sack to cure his cold\"",
    "From household recipe books"
  ],
  [
    "Marchpane",
    "/ˈmɑːrtʃ.peɪn/",
    "e",
    "Marzipan; a confection of almond paste and sugar",
    "From It. \"marzapane\" - almond paste. Medieval luxury food",
    "\"Good thou, save me a piece of marchpane\"",
    "Shakespeare, \"Romeo and Juliet\""
  ],
  [
    "Sack",
    "/sæk/",
    "e",
    "A dry white wine from Spain or the Canary Islands",
    "From Fr. \"vin sec\" - dry wine. Falstaff's favorite drink",
    "\"A good sherris-sack hath a two-fold operation in it\"",
    "Shakespeare, \"Henry IV, Part 2\""
  ],
  [
    "Gruel",
    "/ˈɡruː.əl/",
    "m",
    "A thin porridge made by boiling oatmeal in water or milk",
    "From OF \"gruel\" - coarsely ground grain. Food of the poor",
    "\"Please, sir, I want some more\" - asking for more gruel",
    "Dickens, \"Oliver Twist\""
  ],
  [
    "Syllabub",
    "/ˈsɪl.ə.bʌb/",
    "e",
    "A dessert of sweetened cream whipped with wine or cider",
    "Origin uncertain. Possibly from Champagne (Sillé) + \"bub\" (drink)",
    "\"The syllabub was light as air and sweet as summer\"",
    "From Georgian recipe books"
  ],
  [
    "Haggis",
    "/ˈhæɡ.ɪs/",
    "m",
    "Scottish dish of sheep organs mixed with oatmeal in a stomach casing",
    "From ME \"hagese\" - possibly from \"hag\" (to chop)",
    "\"Fair fa' your honest, sonsie face, great chieftain o' the puddin-race!\"",
    "Robert Burns, \"Address to a Haggis\""
  ],
  [
    "Wassail",
    "/ˈwɒs.eɪl/",
    "m",
    "A hot spiced drink; a toast to health; festive drinking",
    "From ON \"ves heill\" - be healthy. Anglo-Saxon drinking toast",
    "\"Here we come a-wassailing among the leaves so green\"",
    "Traditional Christmas carol"
  ],
  [
    "Victuals",
    "/ˈvɪt.əlz/",
    "m",
    "Food, provisions, supplies for eating",
    "From Lat. \"victualia\" - provisions. Spelling changed but pronunciation preserved",
    "\"Lay in victuals for a month - we may be besieged\"",
    "From military descriptions"
  ],
  [
    "Doublet",
    "/ˈdʌb.lɪt/",
    "e",
    "A close-fitting padded jacket worn by men from the 15th-17th century",
    "From OF \"doublet\" - something doubled (lined/padded)",
    "\"He wore a doublet of fine silk with silver buttons\"",
    "From costume descriptions"
  ],
  [
    "Jerkin",
    "/ˈdʒɜːr.kɪn/",
    "e",
    "A sleeveless leather jacket worn over the doublet",
    "Origin uncertain. Possibly from Dutch \"jurk\" - dress",
    "\"His leather jerkin was worn and patched from years of use\"",
    "From Elizabethan descriptions"
  ],
  [
    "Kirtle",
    "/ˈkɜːr.təl/",
    "m",
    "A woman's long gown or a man's tunic; a basic garment",
    "From OE \"cyrtel\" - short garment. Related to \"short\"",
    "\"She wore a kirtle of blue wool with a leather belt\"",
    "From medieval descriptions"
  ],
  [
    "Wimple",
    "/ˈwɪm.pəl/",
    "m",
    "A cloth headdress covering head, chin, and neck; worn by nuns",
    "From OE \"wimpel\" - veil, head covering",
    "\"The nun adjusted her wimple before entering the chapel\"",
    "From medieval descriptions"
  ],
  [
    "Gorget",
    "/ˈɡɔːr.dʒɪt/",
    "m",
    "Armor piece protecting the throat; later an ornamental collar",
    "From OF \"gorgete\" - throat piece. From \"gorge\" - throat",
    "\"His gorget saved him from the sword blow to his neck\"",
    "From chivalric descriptions"
  ],
  [
    "Farthingale",
    "/ˈfɑːr.ðɪŋ.ɡeɪl/",
    "e",
    "A hooped petticoat that held skirts out from the body",
    "From Sp. \"verdugado\" - rod. Stiffened with whalebone or wire",
    "\"Her farthingale was so wide she could barely pass through the door\"",
    "From Elizabethan court descriptions"
  ],
  [
    "Codpiece",
    "/ˈkɒd.piːs/",
    "e",
    "A flap or pouch attached to the front of men's breeches",
    "From ME \"cod\" (= scrotum) + \"piece.\" Originally functional, then ornamental",
    "\"His codpiece was elaborately embroidered with gold thread\"",
    "From costume history"
  ],
  [
    "Baldric",
    "/ˈbɔːl.drɪk/",
    "m",
    "A shoulder belt for carrying a sword or bugle",
    "From OE \"bealdric\" - possibly from \"bold\" + \"ric\" (power)",
    "\"His baldric bore a fine sword with a jeweled hilt\"",
    "From chivalric romances"
  ],
  [
    "Palfrey",
    "/ˈpɔːl.fri/",
    "m",
    "A small, gentle riding horse, especially for women",
    "From OF \"palefrei,\" from Lat. \"paraveredus\" - extra post-horse",
    "\"The lady rode upon a white palfrey with silken reins\"",
    "From Chaucer, \"Canterbury Tales\""
  ],
  [
    "Destrier",
    "/ˈdɛs.tri.ər/",
    "m",
    "A knight's war horse; a heavy battle charger",
    "From OF \"destrier\" - led by the right hand (squire's duty)",
    "\"The destrier was trained for battle and feared no noise\"",
    "From chivalric romances"
  ],
  [
    "Trencher",
    "/ˈtrɛn.tʃər/",
    "m",
    "A wooden plate or board for serving food; a thick slice of bread used as a plate",
    "From OF \"trencheoir\" - cutting board. From \"trenchier\" - to cut",
    "\"He piled the trencher high with meat and bread\"",
    "From medieval feast descriptions"
  ],
  [
    "Chandler",
    "/ˈtʃænd.lər/",
    "m",
    "A maker or seller of candles; later a dealer in ship supplies",
    "From OF \"chandelier\" - candle holder. Lat. \"candela\" - candle",
    "\"The chandler's shop smelled of beeswax and tallow\"",
    "From guild descriptions"
  ],
  [
    "Cordwainer",
    "/ˈkɔːrd.weɪ.nər/",
    "m",
    "A shoemaker who works with new leather (not a cobbler who repairs)",
    "From OF \"cordouanier\" - worker of Cordovan leather (from Córdoba)",
    "\"The cordwainer crafted fine leather shoes for the gentry\"",
    "From guild records"
  ],
  [
    "Fletcher",
    "/ˈflɛtʃ.ər/",
    "m",
    "A maker of arrows; one who feathers (fletches) arrows",
    "From OF \"flechier\" - arrow maker. \"Flèche\" - arrow",
    "\"The fletcher selected goose feathers for the war arrows\"",
    "From military supply records"
  ],
  [
    "Cooper",
    "/ˈkuː.pər/",
    "m",
    "A barrel maker; one who makes and repairs wooden casks",
    "From Lat. \"cupa\" - barrel, tub. Via MLat. \"cuparius\"",
    "\"The cooper hammered iron hoops around the oak barrel\"",
    "From craft descriptions"
  ],
  [
    "Farrier",
    "/ˈfær.i.ər/",
    "m",
    "A blacksmith who shoes horses; a horse doctor",
    "From Lat. \"ferrarius\" - ironworker. \"Ferrum\" - iron",
    "\"The farrier heated the horseshoe in the forge\"",
    "From rural descriptions"
  ],
  [
    "Hosier",
    "/ˈhoʊ.ʒər/",
    "m",
    "A maker or seller of stockings and socks",
    "From OE \"hosa\" - leg covering. \"Hosiery\" - stockings collectively",
    "\"The hosier sold fine silk stockings to the ladies of the court\"",
    "From trade descriptions"
  ],
  [
    "Haberdasher",
    "/ˈhæb.ər.dæʃ.ər/",
    "m",
    "A seller of small articles: buttons, thread, needles, ribbons",
    "Origin uncertain. Possibly from AF \"hapertas\" - a type of fabric",
    "\"The haberdasher displayed ribbons and buttons in his window\"",
    "From trade descriptions"
  ],
  [
    "Apothecary",
    "/əˈpɒθ.ɪ.kər.i/",
    "e",
    "A pharmacist; one who prepares and sells medicines",
    "From Lat. \"apothecarius\" - storekeeper. Gk. \"apothēkē\" - storehouse",
    "\"The apothecary mixed herbs and compounds by candlelight\"",
    "Shakespeare, \"Romeo and Juliet\""
  ],
  [
    "Whitesmith",
    "/ˈwaɪt.smɪθ/",
    "m",
    "A worker in tin or other white metals, as opposed to a blacksmith",
    "From \"white\" (tin/light metals) + \"smith\" (metalworker)",
    "\"The whitesmith fashioned pewter plates and tin lanterns\"",
    "From craft guild records"
  ],
  [
    "Mercer",
    "/ˈmɜːr.sər/",
    "m",
    "A dealer in fine fabrics, especially silk and velvet",
    "From OF \"mercier\" - merchant. Lat. \"merx\" - goods",
    "\"The mercer sold fine silks imported from the Orient\"",
    "From trade guild records"
  ],
  [
    "Scrivener",
    "/ˈskrɪv.ən.ər/",
    "m",
    "A professional writer or copyist; a notary",
    "From OF \"escrivain\" - writer. Lat. \"scribere\" - to write",
    "\"The scrivener copied the contract in his careful hand\"",
    "From legal descriptions"
  ],
  [
    "Tinker",
    "/ˈtɪŋ.kər/",
    "m",
    "An itinerant mender of pots and pans; a clumsy repairer",
    "From ME \"tinkere\" - possibly from the tinkling sound of hammering",
    "\"The tinker went from village to village mending kettles\"",
    "From descriptions of itinerant trades"
  ],
  [
    "Draymaker",
    "/ˈdreɪ.meɪ.kər/",
    "t",
    "A maker of drays (low carts without sides for heavy loads)",
    "From OE \"dræge\" - something drawn/dragged",
    "\"The draymaker built sturdy carts for the breweries\"",
    "From industrial descriptions"
  ],
  [
    "Ostler",
    "/ˈɒs.lər/",
    "m",
    "A person who looks after horses at an inn; a stable hand",
    "From OF \"hostelier\" - innkeeper. Later narrowed to horse care",
    "\"The ostler rubbed down the horses and filled the manger\"",
    "From travel descriptions"
  ],
  [
    "Costermonger",
    "/ˈkɒs.tər.mʌŋ.ɡər/",
    "t",
    "A street seller of fruits and vegetables from a barrow",
    "From \"costard\" (large apple) + \"monger\" (seller)",
    "\"Costermongers shouted their wares in the London streets\"",
    "Dickens, London descriptions"
  ],
  [
    "Resurrectionist",
    "/ˌrɛz.əˈrɛk.ʃən.ɪst/",
    "t",
    "A body snatcher; one who dug up corpses for medical study",
    "From \"resurrection\" - raising the dead. Euphemistic term",
    "\"The resurrectionists prowled the graveyards at midnight\"",
    "From Victorian crime reports"
  ],
  [
    "Wroth",
    "/rɒθ/",
    "m",
    "Angry, wrathful, furious",
    "From OE \"wrāþ\" - angry. Related to \"writhe\" and \"wreath\"",
    "\"The king was exceeding wroth, and his anger burned\"",
    "King James Bible, Esther"
  ],
  [
    "Besmirch",
    "/bɪˈsmɜːrtʃ/",
    "e",
    "To soil, stain, or damage (especially reputation)",
    "From \"be-\" (intensive) + \"smirch\" (to soil). OF \"esmorcher\"",
    "\"I will not have my honour besmirched by such accusations\"",
    "Shakespeare, \"Henry V\""
  ],
  [
    "Forsaken",
    "/fɔːrˈseɪ.kən/",
    "m",
    "Abandoned, deserted, left behind",
    "Past participle of \"forsake.\" OE \"forsacan\" - to reject",
    "\"He felt utterly forsaken, without friend or hope\"",
    "From literary descriptions"
  ],
  [
    "Beholden",
    "/bɪˈhoʊl.dən/",
    "m",
    "Indebted, obligated, owing gratitude",
    "Past participle of \"behold\" in sense of \"to hold, owe\"",
    "\"I am much beholden to you for your kindness\"",
    "From formal correspondence"
  ],
  [
    "Forlorn",
    "/fɔːrˈlɔːrn/",
    "m",
    "Pitifully sad and lonely; desolate. \"Forlorn hope\" = desperate venture",
    "From OE \"forloren\" - lost. Past participle of \"forleosan\" - to lose",
    "\"She looked so forlorn standing alone in the rain\"",
    "From literary descriptions"
  ],
  [
    "Doleful",
    "/ˈdoʊl.fəl/",
    "m",
    "Expressing grief; mournful, sorrowful",
    "From OF \"dol\" - grief. Lat. \"dolus\" - pain",
    "\"A doleful cry echoed through the empty halls of the castle\"",
    "From Gothic literature"
  ],
  [
    "Mirthful",
    "/ˈmɜːrθ.fəl/",
    "m",
    "Full of mirth; joyful, merry, cheerful",
    "From OE \"myrgþ\" - joy, pleasure. Related to \"merry\"",
    "\"The mirthful company laughed and sang through the night\"",
    "From feast descriptions"
  ],
  [
    "Woebegone",
    "/ˈwoʊ.bɪ.ɡɒn/",
    "m",
    "Looking very sad and miserable. Literally: surrounded by woe",
    "From \"woe\" + \"begone\" (= beset, surrounded). ME \"bigon\"",
    "\"His woebegone face told the tale before he spoke a word\"",
    "From literary descriptions"
  ],
  [
    "Melancholy",
    "/ˈmɛl.ən.kɒl.i/",
    "e",
    "Deep sadness; one of the four humors (black bile)",
    "From Gk. \"melankholía\" - black + bile. Humoral medicine",
    "\"I have of late - but wherefore I know not - lost all my mirth\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Wistful",
    "/ˈwɪst.fəl/",
    "t",
    "Showing vague, sad longing; yearningly thoughtful",
    "Possibly from \"wistly\" (intently) + \"-ful.\" Origin debated",
    "\"She gazed with wistful eyes at the departing ship\"",
    "From Victorian novels"
  ],
  [
    "Agog",
    "/əˈɡɒɡ/",
    "e",
    "Very eager, excited, full of anticipation",
    "From OF \"en gogues\" - in merriment, in fun",
    "\"The whole town was agog with the news of the king's visit\"",
    "From period descriptions"
  ],
  [
    "Bequeath",
    "/bɪˈkwiːð/",
    "m",
    "To leave (property) to someone by will; to hand down",
    "From OE \"becwethan\" - to say, declare (one's will). Related to \"quoth\"",
    "\"I bequeath my estate to my eldest son\"",
    "From legal wills"
  ],
  [
    "Beseech",
    "/bɪˈsiːtʃ/",
    "m",
    "To implore urgently; to beg earnestly",
    "From ME \"bisechen\" - \"be-\" (thoroughly) + \"sechen\" (to seek)",
    "\"I beseech you, hear my plea before you pass judgment\"",
    "Shakespeare, \"Merchant of Venice\""
  ],
  [
    "Smite",
    "/smaɪt/",
    "m",
    "To strike with a heavy blow; to afflict. Past tense: \"smote\"",
    "From OE \"smītan\" - to strike. Related to Ger. \"schmeißen\"",
    "\"The Lord shall smite thee with madness and blindness\"",
    "King James Bible, Deuteronomy"
  ],
  [
    "Tarry",
    "/ˈtær.i/",
    "m",
    "To stay, wait, linger; to be slow in going",
    "From ME \"tarien\" - to delay. Origin uncertain",
    "\"Tarry a while, and let us talk before you go\"",
    "Shakespeare, various plays"
  ],
  [
    "Doff",
    "/dɒf/",
    "m",
    "To remove (a hat or clothing). Opposite of \"don\"",
    "Contraction of \"do off\" - to take off",
    "\"He doffed his hat and bowed to the lady\"",
    "From polite society descriptions"
  ],
  [
    "Don",
    "/dɒn/",
    "m",
    "To put on (clothing). Opposite of \"doff\"",
    "Contraction of \"do on\" - to put on",
    "\"Don your armor, knights - we ride to battle at dawn\"",
    "From chivalric descriptions"
  ],
  [
    "Gird",
    "/ɡɜːrd/",
    "m",
    "To encircle, bind around; to prepare. \"Gird your loins\" = get ready",
    "From OE \"gyrdan\" - to encircle. Related to \"girdle\" and \"garden\"",
    "\"Gird up now thy loins like a man\"",
    "King James Bible, Job 38:3"
  ],
  [
    "Cleave",
    "/kliːv/",
    "m",
    "To split apart OR to cling to (contradictory meanings!)",
    "Two different OE verbs merged: \"clēofan\" (split) + \"clifian\" (cling)",
    "\"Therefore shall a man cleave unto his wife\"",
    "King James Bible, Genesis 2:24"
  ],
  [
    "Rend",
    "/rɛnd/",
    "m",
    "To tear violently; to split apart with force",
    "From OE \"rendan\" - to tear. Related to \"rind\"",
    "\"He rent his garments in grief when he heard the news\"",
    "King James Bible"
  ],
  [
    "Sunder",
    "/ˈsʌn.dər/",
    "m",
    "To split, separate, break apart. \"Asunder\" = into pieces",
    "From OE \"sundrian\" - to separate. Related to \"south\" (apart)",
    "\"What God hath joined together, let not man put asunder\"",
    "Wedding ceremony text"
  ],
  [
    "Alight",
    "/əˈlaɪt/",
    "m",
    "To descend, dismount, get down from; to come to rest",
    "From OE \"ālīhtan\" - to dismount. \"A-\" + \"light\" (= not heavy)",
    "\"The rider alighted from his horse at the inn door\"",
    "From travel descriptions"
  ],
  [
    "Abide",
    "/əˈbaɪd/",
    "m",
    "To dwell, remain, stay; to endure, tolerate",
    "From OE \"ābīdan\" - to wait, remain. \"A-\" + \"bīdan\" (wait)",
    "\"Abide with me; fast falls the eventide\"",
    "Henry F. Lyte, hymn"
  ],
  [
    "Assay",
    "/əˈseɪ/",
    "m",
    "To attempt, try; to test the quality of metals",
    "From OF \"assaier\" - to try. Lat. \"exagium\" - weighing",
    "\"He assayed to cross the river but the current was too strong\"",
    "From adventure narratives"
  ],
  [
    "Sup",
    "/sʌp/",
    "m",
    "To eat supper; to take liquid food. \"To sup\" = to dine",
    "From OE \"sūpan\" - to sip, drink. Related to \"sip\" and \"soup\"",
    "\"Come, let us sup together before the fire\"",
    "From medieval invitations"
  ],
  [
    "Hearken",
    "/ˈhɑːr.kən/",
    "m",
    "To listen attentively; to give heed",
    "From OE \"heorcnian\" - to listen. Related to \"hark\"",
    "\"Hearken unto my voice, O Lord, and answer me\"",
    "King James Bible, Psalms"
  ],
  [
    "Wend",
    "/wɛnd/",
    "m",
    "To go, travel, make one's way. \"Wend one's way\" - to journey",
    "From OE \"wendan\" - to turn, go. Past tense became \"went\"!",
    "\"They wended their way through the dark forest\"",
    "From narrative descriptions"
  ],
  [
    "Smote",
    "/smoʊt/",
    "m",
    "Past tense of \"smite\" - struck, hit with great force",
    "Past tense of OE \"smītan.\" Now replaced by \"struck\"",
    "\"He smote the dragon with his mighty sword\"",
    "From legend narratives"
  ],
  [
    "Begone",
    "/bɪˈɡɒn/",
    "e",
    "Go away! Leave! (imperative command to depart)",
    "From \"be\" + \"gone\" - be gone from here",
    "\"Begone, foul fiend! Trouble me no more!\"",
    "From dramatic speeches"
  ],
  [
    "Importune",
    "/ˌɪm.pɔːrˈtjuːn/",
    "e",
    "To beg persistently and urgently; to pester with requests",
    "From Lat. \"importunus\" - unsuitable, persistent",
    "\"She importuned him daily until he granted her request\"",
    "From literary descriptions"
  ],
  [
    "Firmament",
    "/ˈfɜːr.mə.mənt/",
    "m",
    "The sky, the vault of heaven; the heavens above",
    "From Lat. \"firmamentum\" - support, strengthening",
    "\"God called the firmament Heaven\"",
    "King James Bible, Genesis 1:8"
  ],
  [
    "Fen",
    "/fɛn/",
    "m",
    "A marshy, boggy area; low-lying wet ground",
    "From OE \"fenn\" - mud, mire, marsh. Related to Ger. \"Fenn\"",
    "\"The fen was treacherous - many a traveler was lost in its depths\"",
    "From geographical descriptions"
  ],
  [
    "Dale",
    "/deɪl/",
    "m",
    "A valley, especially a broad one. Common in English place names",
    "From OE \"dæl\" - valley. Cognate with Ger. \"Tal.\" Yorkshire Dales",
    "\"Through hill and dale the travelers made their weary way\"",
    "From travel narratives"
  ],
  [
    "Lea",
    "/liː/",
    "m",
    "A meadow, grassland, open field. Poetic word for pasture",
    "From OE \"lēah\" - field, clearing. Related to many \"-ley\" place names",
    "\"The sheep grazed peacefully upon the lea\"",
    "From pastoral poetry"
  ],
  [
    "Glen",
    "/ɡlɛn/",
    "m",
    "A narrow valley, especially in Scotland or Ireland",
    "From Scottish/Irish Gaelic \"gleann\" - valley",
    "\"Down in the glen, by the rushing burn, stood a lonely cottage\"",
    "From Scottish literature"
  ],
  [
    "Mere",
    "/mɪər/",
    "m",
    "A lake, pool, or body of standing water",
    "From OE \"mere\" - lake, sea. Cognate with Lat. \"mare\" - sea",
    "\"The monster rose from the mere in the dead of night\"",
    "Beowulf legend"
  ],
  [
    "Tor",
    "/tɔːr/",
    "m",
    "A high, craggy hill or rocky peak",
    "From OE \"torr\" - high rock. Possibly Celtic origin",
    "\"Upon the tor stood the ruins of an ancient castle\"",
    "From descriptions of Dartmoor"
  ],
  [
    "Knoll",
    "/noʊl/",
    "m",
    "A small, rounded hill; a mound",
    "From OE \"cnoll\" - hilltop, summit. Related to \"knell\"",
    "\"From the grassy knoll they surveyed the valley below\"",
    "From landscape descriptions"
  ],
  [
    "Copse",
    "/kɒps/",
    "m",
    "A small group of trees; a thicket",
    "From OF \"copeiz\" - cut wood. Related to \"coppice\" (managed woodland)",
    "\"The fox disappeared into the copse beyond the field\"",
    "From hunting descriptions"
  ],
  [
    "Mayhap",
    "/ˈmeɪ.hæp/",
    "e",
    "Perhaps, maybe, possibly. From \"it may hap\" (happen)",
    "From \"may\" + \"hap\" (luck/chance, from ON \"happ\")",
    "\"Mayhap the storm will pass before nightfall\"",
    "From travel narratives"
  ],
  [
    "Verily",
    "/ˈvɛr.ɪ.li/",
    "m",
    "Truly, indeed, in truth (emphatic assertion)",
    "From ME \"verray\" - true. OF \"verai.\" Lat. \"verus\"",
    "\"Verily, verily, I say unto you\"",
    "King James Bible, John 6:47"
  ],
  [
    "Peradventure",
    "/pərˈæd.vɛn.tʃər/",
    "m",
    "Perhaps, possibly; by chance",
    "From OF \"par aventure\" - by chance",
    "\"Peradventure there be fifty righteous within the city\"",
    "King James Bible, Genesis 18:24"
  ],
  [
    "Wont",
    "/wɒnt/",
    "m",
    "Accustomed; a habit. \"As was his wont\" = as was his custom",
    "From OE \"gewunod\" - accustomed. Related to Ger. \"gewohnt\"",
    "\"He was wont to speak little, but every word carried weight\"",
    "From biographical descriptions"
  ],
  [
    "Dearth",
    "/dɜːrθ/",
    "m",
    "A scarcity, lack, shortage; originally: famine",
    "From OE \"dēorþ\" - costliness. Related to \"dear\" (= expensive)",
    "\"There was a dearth of food in the land after the flood\"",
    "King James Bible"
  ],
  [
    "Weal",
    "/wiːl/",
    "m",
    "Well-being, prosperity, happiness. \"The common weal\" = public welfare",
    "From OE \"wela\" - wealth, well-being. Opposite of \"woe\"",
    "\"For the weal of the kingdom, we must make this sacrifice\"",
    "From political speeches"
  ],
  [
    "Woe",
    "/woʊ/",
    "m",
    "Grief, sorrow, distress. \"Woe is me!\" = I am sorrowful",
    "From OE \"wā\" - grief. Cognate with Lat. \"vae\" - alas",
    "\"Woe unto them that call evil good, and good evil\"",
    "King James Bible, Isaiah 5:20"
  ],
  [
    "Valour",
    "/ˈvæl.ər/",
    "m",
    "Great bravery, especially in battle; heroic courage",
    "From OF \"valour,\" Lat. \"valor\" - worth, strength",
    "\"His valour in battle was unmatched by any knight\"",
    "From chivalric romances"
  ],
  [
    "Knell",
    "/nɛl/",
    "m",
    "The sound of a bell, especially for a funeral; a signal of death",
    "From OE \"cnyll\" - sound of a bell. Related to \"knoll\"",
    "\"The knell of parting day, the lowing herd winds slowly o'er the lea\"",
    "Thomas Gray, \"Elegy\""
  ],
  [
    "Bane",
    "/beɪn/",
    "m",
    "A cause of death, ruin, or woe; poison (original meaning)",
    "From OE \"bana\" - killer, murderer. \"Wolfsbane\" = wolf poison",
    "\"He was the bane of my existence\"",
    "From literary descriptions"
  ],
  [
    "Balderdash",
    "/ˈbɔːl.dər.dæʃ/",
    "t",
    "Nonsense, foolish talk. Originally: a mixture of liquids",
    "Origin uncertain. First recorded as \"frothy liquid mixture\"",
    "\"Balderdash! I will not hear another word of this theory!\"",
    "From Victorian exclamations"
  ],
  [
    "Piffle",
    "/ˈpɪf.əl/",
    "t",
    "Nonsense, trivial or foolish talk",
    "Possibly imitative. First recorded 19th century",
    "\"What utter piffle! There is no truth in any of it\"",
    "From Victorian conversation"
  ],
  [
    "Tomfoolery",
    "/tɒmˈfuːl.ər.i/",
    "t",
    "Foolish, silly behavior; clowning around",
    "From \"Tom Fool\" (generic name for a fool) + \"-ery\"",
    "\"Enough of this tomfoolery - we have serious work to do\"",
    "From Victorian scolding"
  ],
  [
    "Hullabaloo",
    "/ˌhʌl.ə.bəˈluː/",
    "t",
    "A commotion, uproar, noisy disturbance",
    "Possibly reduplication of \"hullo\" or echoic origin",
    "\"What is all this hullabaloo about? I cannot hear myself think!\"",
    "From Victorian descriptions"
  ],
  [
    "Kerfuffle",
    "/kərˈfʌf.əl/",
    "t",
    "A fuss, commotion, disorder",
    "From Scots \"curfuffle\" - to disorder. Gaelic \"car\" - twist",
    "\"There was quite a kerfuffle when the cat got into the kitchen\"",
    "From British dialect usage"
  ],
  [
    "Assize",
    "/əˈsaɪz/",
    "m",
    "A court session; a regulation fixing prices and standards",
    "From OF \"assise\" - session, sitting. Lat. \"assidēre\" - to sit beside",
    "\"The justices arrived for the county assize\"",
    "From legal descriptions"
  ],
  [
    "Writ",
    "/rɪt/",
    "m",
    "A written command issued by a court; a legal document",
    "From OE \"writ\" - something written. From \"wrītan\" - to write",
    "\"The sheriff served the writ upon the debtor\"",
    "From legal proceedings"
  ],
  [
    "Fealty",
    "/ˈfiː.əl.ti/",
    "m",
    "Loyalty sworn to a feudal lord; faithful allegiance",
    "From OF \"feaulté,\" Lat. \"fidelitas\" - faithfulness",
    "\"He swore fealty to his liege lord upon bended knee\"",
    "From feudal ceremonies"
  ],
  [
    "Fief",
    "/fiːf/",
    "m",
    "A feudal estate held from a lord in exchange for service",
    "From OF \"fief\" - estate. Germanic origin, related to \"fee\"",
    "\"The lord granted him a fief of three hundred acres\"",
    "From feudal descriptions"
  ],
  [
    "Boon",
    "/buːn/",
    "m",
    "A favor, gift, or blessing; something beneficial",
    "From ON \"bón\" - prayer, petition. The gift granted upon request",
    "\"Grant me this boon, my lord, and I shall serve you faithfully\"",
    "From chivalric romances"
  ],
  [
    "Edict",
    "/ˈiː.dɪkt/",
    "m",
    "An official order or proclamation issued by authority",
    "From Lat. \"edictum\" - proclamation. \"E-\" (out) + \"dicere\" (say)",
    "\"The king issued an edict banning all foreign merchants\"",
    "From royal proclamations"
  ],
  [
    "Serfdom",
    "/ˈsɜːrf.dəm/",
    "m",
    "The condition of being a serf; feudal bondage to the land",
    "From OF \"serf,\" Lat. \"servus\" - slave. \"-dom\" = condition",
    "\"Serfdom bound the peasant to the land of his lord\"",
    "From feudal descriptions"
  ],
  [
    "Tithe",
    "/taɪð/",
    "m",
    "A tenth part; a tax of one-tenth paid to the church",
    "From OE \"tēoþa\" - tenth. Related to \"ten\"",
    "\"Every farmer paid his tithe to the parish church\"",
    "From church financial records"
  ],
  [
    "Eftsoons",
    "/ɛftˈsuːnz/",
    "m",
    "Soon afterwards; again, a second time",
    "From OE \"eft\" (again) + \"sōna\" (soon). Double emphasis",
    "\"He started up, and eftsoons addressed to follow the chase\"",
    "Spenser, \"Faerie Queene\""
  ],
  [
    "Fain",
    "/feɪn/",
    "m",
    "Gladly, willingly; eager, inclined",
    "From OE \"fægen\" - glad, joyful. Cognate with Ger. dialectal \"feigen\"",
    "\"I would fain go with thee, but duty keeps me here\"",
    "From literary descriptions"
  ],
  [
    "Behest",
    "/bɪˈhɛst/",
    "m",
    "A command, order; an authoritative request",
    "From OE \"behǣs\" - promise, vow. \"Be-\" + \"hǣs\" (command)",
    "\"At the king's behest, the army marched northward\"",
    "From historical narratives"
  ],
  [
    "Beset",
    "/bɪˈsɛt/",
    "m",
    "To surround, harass from all sides; to trouble persistently",
    "From OE \"besettan\" - to surround. \"Be-\" + \"set\"",
    "\"Beset by enemies on every side, they made their last stand\"",
    "From battle descriptions"
  ],
  [
    "Betroth",
    "/bɪˈtroʊθ/",
    "m",
    "To formally promise in marriage; to engage",
    "From ME \"bitreuthien\" - to pledge truth (troth)",
    "\"She was betrothed to the prince in her sixteenth year\"",
    "From marriage descriptions"
  ],
  [
    "Bemoan",
    "/bɪˈmoʊn/",
    "m",
    "To express great sadness or grief over; to lament",
    "From OE \"bemǣnan\" - to lament. \"Be-\" (about) + \"moan\"",
    "\"He bemoaned his fate and cursed the day he was born\"",
    "From literary descriptions"
  ],
  [
    "Bewitched",
    "/bɪˈwɪtʃt/",
    "e",
    "Under a magical spell; enchanted, fascinated",
    "From \"be-\" + \"witch\" - affected by witchcraft",
    "\"The prince was bewitched and slept for a hundred years\"",
    "From fairy tales"
  ],
  [
    "Yea",
    "/jeɪ/",
    "m",
    "Yes; indeed; moreover. The affirmative vote",
    "From OE \"gēa\" - yes. Cognate with Ger. \"ja\"",
    "\"Let your yea be yea, and your nay be nay\"",
    "King James Bible"
  ],
  [
    "Lo",
    "/loʊ/",
    "m",
    "Look! Behold! See! (drawing attention)",
    "From OE \"lā\" - exclamation to attract attention",
    "\"Lo, the star which they saw in the east went before them\"",
    "King James Bible, Matthew 2:9"
  ],
  [
    "Alas",
    "/əˈlæs/",
    "m",
    "An exclamation of grief, pity, or sorrow",
    "From OF \"helas\" - \"hé\" (ah) + \"las\" (weary). Lat. \"lassus\" - tired",
    "\"Alas, poor Yorick! I knew him, Horatio\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Presto",
    "/ˈprɛs.toʊ/",
    "e",
    "Quickly, immediately; used by magicians performing tricks",
    "From It. \"presto\" - quick. Lat. \"praestus\" - ready",
    "\"Hey presto! The rabbit appeared from the hat!\"",
    "From stage magic"
  ],
  [
    "Pelf",
    "/pɛlf/",
    "m",
    "Money, riches (contemptuous); ill-gotten gains",
    "From OF \"pelfre\" - booty, spoils. Related to \"pilfer\"",
    "\"He cared for nothing but pelf and worldly gain\"",
    "From morality tales"
  ],
  [
    "Thrall",
    "/θrɔːl/",
    "m",
    "A slave, bondsman; the state of being enslaved; spellbound",
    "From OE \"þrǣl,\" from ON \"þræll\" - slave",
    "\"He held the audience in thrall with his magnificent voice\"",
    "From literary descriptions"
  ],
  [
    "Welkin",
    "/ˈwɛl.kɪn/",
    "m",
    "The sky, the heavens, the vault of heaven",
    "From OE \"wolcen\" - cloud, sky. Cognate with Ger. \"Wolke\" - cloud",
    "\"The shout echoed through the welkin\"",
    "From literary descriptions"
  ],
  [
    "Leech",
    "/liːtʃ/",
    "m",
    "A physician, healer (original meaning); the bloodsucking worm",
    "From OE \"lǣce\" - healer. The worm was named after the doctor, not vice versa!",
    "\"Send for the leech - the knight is gravely wounded\"",
    "From medieval medical descriptions"
  ],
  [
    "Franklin",
    "/ˈfræŋk.lɪn/",
    "m",
    "A medieval landowner of free but not noble birth.",
    "From Anglo-Norman \"fraunclein\" (free man).",
    "\"A franklin was in his company; white was his beard as is the daisy.\"",
    "Chaucer, \"The Canterbury Tales\""
  ],
  [
    "Reeve",
    "/riːv/",
    "m",
    "An official appointed by a lord to oversee his estates and agricultural workers.",
    "From OE \"gerēfa\" - high official, magistrate (root of sheriff = shire-reeve).",
    "\"The reeve was a slender choleric man; his beard was shaved as close as any can.\"",
    "Chaucer, \"The Canterbury Tales\""
  ],
  [
    "Bailiff",
    "/ˈbeɪ.lɪf/",
    "m",
    "A feudal officer who managed a lord's manor, served legal writs, and collected rents.",
    "From OF \"baillif\" (custodian, governor), from Latin \"baiulus\" (porter, steward).",
    "\"The bailiff rode from farm to farm, taking account of the harvest.\"",
    "Medieval estate records"
  ],
  [
    "Seneschal",
    "/ˈsɛn.ə.ʃəl/",
    "m",
    "A high steward or major-domo in a medieval noble household.",
    "From Frankish *siniscalh (oldest servant). \"Sini-\" (elder) + \"scalh\" (servant).",
    "\"The seneschal ordered the tables cleared for the evening dancing.\"",
    "Chivalric romances"
  ],
  [
    "Castellan",
    "/ˈkæs.tə.lən/",
    "m",
    "The governor or warden of a medieval castle.",
    "From Latin \"castellanus\" - of a castle, from \"castellum.\"",
    "\"The castellan stood upon the battlements, surveying the advancing siege engines.\"",
    "Froissart, \"Chronicles\""
  ],
  [
    "Hayward",
    "/ˈheɪ.wərd/",
    "m",
    "A manorial officer who guarded fenced fields and enclosed crops against stray cattle.",
    "From OE \"heg\" (hay, hedge) + \"weard\" (guard).",
    "\"The hayward impounded the stray bullock in the village pinfold.\"",
    "Manorial rolls"
  ],
  [
    "Woodward",
    "/ˈwʊd.wərd/",
    "m",
    "A medieval forest officer who cared for the lord's woods and timber.",
    "From OE \"wudu\" (wood) + \"weard\" (guard).",
    "\"The woodward caught the poachers cutting down oak saplings in the royal forest.\"",
    "Forest court rolls"
  ],
  [
    "Villein",
    "/ˈvɪl.ən/",
    "m",
    "A feudal tenant holding land in exchange for menial labor; a serf tied to a manor.",
    "From OF \"vilain,\" from Late Latin \"villanus\" (farmhand on a villa). Root of \"villain.\"",
    "\"The villein was bound to perform three days of ploughing on the lord's demesne.\"",
    "Domesday Book records"
  ],
  [
    "Cottar",
    "/ˈkɒt.ər/",
    "m",
    "A peasant of the lowest feudal class, holding a cottage with little or no land.",
    "From ME \"cotere,\" from OE \"cot\" (cottage).",
    "\"The poor cottar possessed but a patch of kail and a single goat.\"",
    "Feudal surveys"
  ],
  [
    "Bordar",
    "/ˈbɔːr.dər/",
    "m",
    "A medieval smallholder peasant ranking between a cottar and a villein.",
    "From Anglo-Norman \"borde\" (wooden cottage, plank cabin).",
    "\"Twenty villeins and twelve bordars dwelt within the hamlet.\"",
    "Domesday survey of Sussex"
  ],
  [
    "Demesne",
    "/dɪˈmeɪn/",
    "m",
    "Land retained by a feudal lord for his own private use and occupation.",
    "From OF \"demeine,\" from Latin \"dominicus\" (belonging to a master, dominus).",
    "\"The lord's demesne encompassed three hundred acres of fertile loam.\"",
    "Manor records of Wiltshire"
  ],
  [
    "Carucate",
    "/ˈkær.ʊ.keɪt/",
    "m",
    "A medieval unit of land equal to what one plough team of eight oxen could till in a year.",
    "From Medieval Latin \"caruca\" (plough, wheeled carriage).",
    "\"The abbey was endowed with four carucates of arable meadow.\"",
    "Cartulary of Evesham"
  ],
  [
    "Hide",
    "/haɪd/",
    "m",
    "An ancient Anglo-Saxon unit of land measurement sufficient to support one household (~120 acres).",
    "From OE \"hīd,\" related to \"hīwan\" (household, family).",
    "\"The king assessed each hide of land for the payment of the Danegeld.\"",
    "Anglo-Saxon Chronicle"
  ],
  [
    "Virgate",
    "/ˈvɜːr.ɡeɪt/",
    "m",
    "A medieval land unit equal to a quarter of a hide (usually around 30 acres).",
    "From Latin \"virga\" (rod, yard measuring staff). Also called a \"yardland.\"",
    "\"Each virgate of arable land was required to provide one archer for the muster.\"",
    "Feudal muster rolls"
  ],
  [
    "Socage",
    "/ˈsɒk.ɪdʒ/",
    "m",
    "A feudal tenure of land in return for fixed rent or non-military agricultural services.",
    "From Anglo-Norman \"soc\" (ploughshare, from Gaulish) or OE \"socn\" (jurisdiction).",
    "\"He held the land in free and common socage, paying yearly a pound of pepper.\"",
    "Blackstone, \"Commentaries\""
  ],
  [
    "Mortmain",
    "/ˈmɔːrt.meɪn/",
    "m",
    "The inalienable possession of land by a corporation or the church (\"dead hand\").",
    "From Anglo-French \"mort\" (dead) + \"main\" (hand). Church land paid no death duties.",
    "\"The Statute of Mortmain prevented estates from falling into the perpetual hand of the church.\"",
    "Legal history of England"
  ],
  [
    "Escheat",
    "/ɪsˈtʃiːt/",
    "m",
    "The reversion of land to the lord or Crown when a tenant died without heirs.",
    "From OF \"escheoite\" (fallen, lapsed), from Latin \"excadere\" (to fall out).",
    "\"For lack of heirs of the blood, the manor reverted by escheat to the sovereign.\"",
    "Chancery proceedings"
  ],
  [
    "Burgage",
    "/ˈbɜːr.ɡɪdʒ/",
    "m",
    "A tenure of land in a borough held from the king or lord for a fixed money rent.",
    "From ME \"burg\" (town, borough) + \"-age.\"",
    "\"He purchased two burgage tenements in the high street of the market town.\"",
    "Records of Bristol"
  ],
  [
    "Heriot",
    "/ˈhɛr.i.ət/",
    "m",
    "A feudal tribute of the best beast or chattel paid to the lord on the death of a tenant.",
    "From OE \"heregeatu\" - military equipment (\"here\" army + \"geatu\" gear).",
    "\"The reeve claimed the black ox as heriot upon old Walter's death.\"",
    "Manorial court records"
  ],
  [
    "Tallage",
    "/ˈtæl.ɪdʒ/",
    "m",
    "An arbitrary tax levied by the Norman kings on boroughs and crown demesnes.",
    "From OF \"taillage,\" from \"tailler\" (to cut, slice, assess).",
    "\"The citizens of London complained bitterly against the excessive tallage.\"",
    "Chronicles of London"
  ],
  [
    "Scutage",
    "/ˈskjuː.tɪdʒ/",
    "m",
    "Money paid by a feudal vassal in lieu of personal military service (\"shield-money\").",
    "From Medieval Latin \"scutagium,\" from \"scutum\" (shield).",
    "\"Many a wealthy knight chose rather to pay scutage than sail to France.\"",
    "Historical essays"
  ],
  [
    "Frankpledge",
    "/ˈfræŋk.plɛdʒ/",
    "m",
    "A medieval system where members of a tithing (ten households) were mutually responsible for each other.",
    "From Anglo-French \"franc-plege\" - free pledge (mistranslation of OE \"friðborh\" peace pledge).",
    "\"The view of frankpledge was held twice a year before the royal sheriff.\"",
    "Legal court rolls"
  ],
  [
    "Wergild",
    "/ˈwɜːr.ɡɪld/",
    "m",
    "The compensation paid by a slayer to the family of the slain under Anglo-Saxon law.",
    "From OE \"wer\" (man) + \"gild\" (payment, gold, yield).",
    "\"The wergild of a thegn was set at twelve hundred silver shillings.\"",
    "Laws of King Alfred"
  ],
  [
    "Witenagemot",
    "/ˌwɪt.ən.ə.ɡəˈmoʊt/",
    "m",
    "The national council of wise men and nobles in Anglo-Saxon England.",
    "From OE \"witenagemōt\" - meeting of wise men (\"witan\" wise + \"mōt\" meeting).",
    "\"The witenagemot met at Winchester to elect the young prince to the throne.\"",
    "Anglo-Saxon Chronicles"
  ],
  [
    "Thane",
    "/θeɪn/",
    "m",
    "A member of the aristocratic warrior class in Anglo-Saxon England holding land by military service.",
    "From OE \"þegn\" - servant, attendant, warrior. Cognate with Ger. \"Degen.\"",
    "\"By the pricking of my thumbs, something wicked this way comes - Thane of Cawdor!\"",
    "Shakespeare, \"Macbeth\""
  ],
  [
    "Alderman",
    "/ˈɔːl.dər.mən/",
    "m",
    "Originally an Anglo-Saxon nobleman of high rank governing a shire; later a town magistrate.",
    "From OE \"ealdorman\" - elder man (\"eald\" old + \"man\").",
    "\"The alderman led the men of Wessex to battle against the Danish host.\"",
    "Chronicle of Aethelweard"
  ],
  [
    "Moot",
    "/muːt/",
    "m",
    "A public assembly or court of law for debate in Anglo-Saxon England.",
    "From OE \"mōt\" - meeting, assembly. Root of \"meet\" and \"moot point.\"",
    "\"All the freemen of the hundred were summoned to the moot under the great oak.\"",
    "Records of Hampshire"
  ],
  [
    "Carouse",
    "/kəˈraʊz/",
    "e",
    "To drink deeply and revel boisterously in good company.",
    "From German \"gar aus\" (drink all out / empty the cup) via French \"carous\".",
    "\"They spent the night in drinking and carousing at the Boar's Head Tavern.\"",
    "Shakespeare, \"Henry IV\""
  ],
  [
    "Hauberk",
    "/ˈhɔː.bɜːrk/",
    "m",
    "A long medieval coat of chain mail protecting the neck, body, and thighs.",
    "From OF \"hauberc,\" from Germanic *halsberg (neck guard: \"hals\" neck + \"berg\" guard).",
    "\"His hauberk turned the thrust of the spear, saving his breast from pierce.\"",
    "Chaucer, \"Sir Thopas\""
  ],
  [
    "Habergeon",
    "/ˈhæb.ər.dʒən/",
    "m",
    "A shorter and lighter version of the chain mail hauberk.",
    "Diminutive of \"hauberk\" via OF \"haubergeon.\"",
    "\"He wore a fustian doublet all besputtered with rust from his habergeon.\"",
    "Chaucer, \"Canterbury Tales\""
  ],
  [
    "Gambeson",
    "/ˈɡæm.bɪ.sən/",
    "m",
    "A padded, quilted cloth tunic worn under mail or alone as armor.",
    "From OF \"gambaison,\" related to Late Latin \"gamba\" (leg/stuffing).",
    "\"The archers fought in light linen gambesons stuffed with wool and horsehair.\"",
    "Froissart, \"Chronicles\""
  ],
  [
    "Aketon",
    "/ˈæk.tən/",
    "m",
    "A quilted under-jacket worn under plate armor to prevent bruising.",
    "From OF \"auqueton,\" from Arabic \"al-qutn\" (the cotton).",
    "\"Beneath his bright plate of steel he donned an aketon of padded silk.\"",
    "Malory, \"Le Morte d'Arthur\""
  ],
  [
    "Surcoat",
    "/ˈsɜːr.koʊt/",
    "m",
    "A loose tunic worn over armor, often embroidered with heraldic arms.",
    "From OF \"surcote\" - over-coat (\"sur\" above + \"coat\").",
    "\"His surcoat bore three golden leopards passant upon a field of gules.\"",
    "Heraldic records"
  ],
  [
    "Tabard",
    "/ˈtæb.ərd/",
    "m",
    "A sleeveless outer coat emblazoned with the coat of arms of a sovereign or lord; a herald's dress.",
    "From OF \"tabart\" / \"tabard,\" of uncertain Germanic origin.",
    "\"The king's herald rode forth in his resplendent velvet tabard to proclaim peace.\"",
    "Shakespeare, \"Henry V\""
  ],
  [
    "Brigandine",
    "/ˈbrɪɡ.ən.diːn/",
    "m",
    "Body armor made of small steel plates riveted between layers of leather or canvas.",
    "From Italian \"brigandina,\" from \"brigante\" (foot-soldier, brigand).",
    "\"The foot-soldiers were outfitted in sturdy brigandines with brass rivets.\"",
    "Records of the Tower of London"
  ],
  [
    "Bascinet",
    "/ˈbæs.ɪ.nɛt/",
    "m",
    "An open-faced medieval helmet with a pointed skull, later fitted with a movable visor.",
    "From OF \"bacinet\" - small basin, diminutive of \"bacin.\"",
    "\"He unclasped his bascinet and drank greedily of the mountain spring.\"",
    "Chronicles of Froissart"
  ],
  [
    "Sallet",
    "/ˈsæl.ɪt/",
    "m",
    "A 15th-century light war helmet with a rounded crown and a sweeping tail at the neck.",
    "From OF \"salade,\" from Italian \"celata,\" from Latin \"caelare\" (to engrave, conceal).",
    "\"The German knight wore a polished sallet with a narrow sight-slit.\"",
    "Muster rolls of Agincourt"
  ],
  [
    "Pauldron",
    "/ˈpɔːl.drən/",
    "m",
    "A piece of plate armor protecting the shoulder and armpit.",
    "From OF \"espalleron,\" from \"espalle\" (shoulder, Latin \"spatula\").",
    "\"The massive pauldron on his left shoulder bore the embossed image of a lion.\"",
    "Armory records"
  ],
  [
    "Vambrace",
    "/ˈvæm.breɪs/",
    "m",
    "Plate armor protecting the forearm from wrist to elbow.",
    "From Anglo-French \"avant-bras\" - fore-arm (\"avant\" before + \"bras\" arm).",
    "\"The stroke of the broadsword shattered his vambrace but left the bone whole.\"",
    "Chivalric romances"
  ],
  [
    "Gauntlet",
    "/ˈɡɔːnt.lɪt/",
    "m",
    "An armored glove protecting the hand, fingers, and wrist. \"To throw down the gauntlet.\"",
    "From OF \"gantelet,\" diminutive of \"gant\" (glove, of Germanic origin).",
    "\"He flung down his steel gauntlet upon the stone floor as a challenge to mortal combat.\"",
    "Sir Walter Scott, \"Ivanhoe\""
  ],
  [
    "Cuisse",
    "/kwɪs/",
    "m",
    "Plate armor designed to protect the thigh.",
    "From OF \"cuisse\" (thigh), from Latin \"coxa\" (hip, thigh).",
    "\"His right cuisse was dented where the crossbow bolt had struck with fury.\"",
    "Records of chivalry"
  ],
  [
    "Greave",
    "/ɡriːv/",
    "m",
    "A piece of armor protecting the leg from the knee to the ankle.",
    "From OF \"greve\" (shin, crest).",
    "\"Polished greaves of Milanese steel flashed in the morning sun.\"",
    "Froissart, \"Chronicles\""
  ],
  [
    "Sabaton",
    "/ˈsæb.ə.tɒn/",
    "m",
    "Armor covering the foot, consisting of overlapping articulated steel plates.",
    "From OF \"sabaton,\" from Provençal \"sabata\" (shoe).",
    "\"His pointed sabatons rested securely within the heavy iron stirrups.\"",
    "Armory of Henry VIII"
  ],
  [
    "Pavise",
    "/ˈpæv.ɪs/",
    "m",
    "A large convex shield carried by crossbowmen to provide cover while reloading.",
    "Named after the Italian city of Pavia, where they were celebrated.",
    "\"Behind the wall of stout pavises, the Genoese archers cranked their arbalests.\"",
    "Chronicles of Agincourt"
  ],
  [
    "Buckler",
    "/ˈbʌk.lər/",
    "m",
    "A small, round shield gripped in the fist, used in hand-to-hand swordsmanship.",
    "From OF \"bocler\" - bossed shield, from \"bocle\" (shield boss, Latin \"buccula\").",
    "\"Swashing and swashbuckling with sword and buckler in every alleyway.\"",
    "Shakespeare, \"Romeo and Juliet\""
  ],
  [
    "Claymore",
    "/ˈkleɪ.mɔːr/",
    "m",
    "A large Scottish two-handed broadsword, or later a basket-hilted broadsword.",
    "From Scottish Gaelic \"claidheamh mòr\" - great sword.",
    "\"The Highland chief swung his great claymore with both hands, cleaving shields asunder.\"",
    "Highland chronicles"
  ],
  [
    "Falchion",
    "/ˈfɔːl.tʃən/",
    "m",
    "A broad, single-edged curved sword of medieval Europe with a cleaver-like blade.",
    "From OF \"fauchon,\" from Latin \"falx\" (sickle, scythe).",
    "\"With falchion drawn, the knight hewed his way through the press of foes.\"",
    "Medieval romance poems"
  ],
  [
    "Billhook",
    "/ˈbɪl.hʊk/",
    "m",
    "A traditional cutting tool with a curved end, adapted as a vicious polearm (\"the bill\").",
    "From OE \"bill\" (sword, chopper) + \"hook.\"",
    "\"The English billmen stood shoulder to shoulder against the Scottish lances at Flodden.\"",
    "Tudor military records"
  ],
  [
    "Halberd",
    "/ˈhæl.bərd/",
    "m",
    "A combined spear and battleaxe mounted on a long six-foot pole.",
    "From Middle Dutch \"hellembaerde\" - helmet-cleaver (\"helm\" + \"baard\" axe).",
    "\"The halberdiers guarded the portal with crossed pikes of gleaming steel.\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Arbalest",
    "/ˈɑːr.bə.lɪst/",
    "m",
    "A heavy steel crossbow with a mechanical crank or windlass for drawing the bowstring.",
    "From OF \"arbaleste,\" from Late Latin \"arcuballista\" (bow-ballista).",
    "\"The bolt from an arbalest could pierce the thickest cuirass at two hundred paces.\"",
    "Military treatises of the 14th century"
  ],
  [
    "Quarrel",
    "/ˈkwɒr.əl/",
    "m",
    "A short, heavy square-headed bolt or arrow shot from a crossbow.",
    "From OF \"quarel,\" from Late Latin \"quadrellus\" (small square, four-sided bolt).",
    "\"A quarrel struck the parapet, showering the defenders with sharp splinters of stone.\"",
    "Siege records of Dover Castle"
  ],
  [
    "Mangonel",
    "/ˈmæŋ.ɡə.nɛl/",
    "m",
    "A medieval stone-throwing catapult operated by torsion or counterweight.",
    "From Anglo-Norman \"mangonel,\" diminutive of Late Latin \"mangonum\" (engine of war).",
    "\"The mangonels hurled burning casks of Greek fire over the battlements.\"",
    "Chronicles of the Crusades"
  ],
  [
    "Trebuchet",
    "/ˈtrɛb.jʊ.ʃeɪ/",
    "m",
    "A massive medieval siege engine powered by a counterweight, hurling boulders hundreds of yards.",
    "From OF \"trebuchet,\" from \"trebucher\" (to overturn, tumble).",
    "\"The monstrous trebuchet, called Warwolf, brought down the curtain wall in three days.\"",
    "Siege of Stirling Castle, 1304"
  ],
  [
    "Petard",
    "/pɪˈtɑːrd/",
    "e",
    "A small bell-shaped bomb used to blow open gates or breach walls. \"Hoist with his own petard.\"",
    "From French \"pétard,\" from \"péter\" (to fart, crack, burst with noise).",
    "\"For 'tis the sport to have the enginer hoist with his own petar.\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Metheglin",
    "/mɪˈθɛɡ.lɪn/",
    "m",
    "A spiced, medicinal variety of mead flavored with herbs, cinnamon, and cloves.",
    "From Welsh \"meddyglyn\" - medicinal liquor (\"meddyg\" physician + \"llyn\" drink).",
    "\"A warm posset of sweet metheglin comforted the traveler after his dreary ride.\"",
    "Early English domestic receipts"
  ],
  [
    "Hippocras",
    "/ˈhɪp.ə.kræs/",
    "m",
    "A cordial made of spiced red wine strained through a cloth filter called \"Hippocrates' sleeve.\"",
    "Named after ancient Greek physician Hippocrates, whose woolen strainer was used.",
    "\"At the royal wedding banquet, cups of golden hippocras were pledged to the bride.\"",
    "Tudor court receipts"
  ],
  [
    "Mazer",
    "/ˈmeɪ.zər/",
    "m",
    "A shallow drinking bowl turned from the burr wood of maple trees, often edged with silver.",
    "From ME \"maser,\" from Old Norse \"mösurr\" (maple wood with mottled grain).",
    "\"He drank a deep draught of nut-brown ale from his grandfather's carved mazer.\"",
    "Medieval poetry"
  ],
  [
    "Pipkin",
    "/ˈpɪp.kɪn/",
    "e",
    "A small earthenware pot with a handle and three little legs, used for gentle simmering on embers.",
    "Diminutive of \"pipe\" (cask, vessel).",
    "\"The broth simmered quietly in a clay pipkin upon the hearth.\"",
    "Elizabethan cookery books"
  ],
  [
    "Troubadour",
    "/ˈtruː.bə.dɔːr/",
    "m",
    "A lyric poet of southern France and England who composed poems of courtly chivalry and love.",
    "From Occitan \"trobador,\" from \"trobar\" (to find, invent poetry).",
    "\"The troubadour sang of fair Eleanor and the perilous quest for the Holy Graal.\"",
    "Chivalric romances"
  ],
  [
    "Minstrel",
    "/ˈmɪn.strəl/",
    "m",
    "A medieval singer, musician, or reciter of epic ballads who traveled from castle to castle.",
    "From OF \"menestrel,\" from Late Latin \"ministerialis\" (retainer, household official).",
    "\"The minstrel tuned his harp and struck the chords of ancient heroic deeds.\"",
    "Sir Walter Scott, \"Lay of the Last Minstrel\""
  ],
  [
    "Scop",
    "/ʃɒp/",
    "m",
    "An Old English oral bard who recited heroic alliterative poetry in the Anglo-Saxon mead-hall.",
    "From OE \"scop\" - poet, creator, maker. Related to \"shape.\"",
    "\"The scop raised his voice above the murmuring warriors, chanting of the dragon's hoard.\"",
    "Old English poetic commentaries"
  ],
  [
    "Almoner",
    "/ˈɑːl.mə.nər/",
    "m",
    "An official in a monastery, castle, or royal court who distributed alms to the needy.",
    "From OF \"almosnier,\" from Late Latin \"eleemosynarius\" (giver of alms, Greek eleos).",
    "\"The bishop's almoner distributed loaves of barley bread and silver pennies at the abbey gate.\"",
    "Monastic chronicles of Ely"
  ],
  [
    "Beadle",
    "/ˈbiː.dəl/",
    "m",
    "A ceremonial parish officer who kept order during church services and punished petty offenders.",
    "From OE \"bydel\" - messenger, herald. Related to \"bid\" (to command).",
    "\"Mr. Bumble the beadle walked with great dignity, brandishing his gold-headed cane.\"",
    "Charles Dickens, \"Oliver Twist\""
  ],
  [
    "Verger",
    "/ˈvɜːr.dʒər/",
    "m",
    "An attendant who carries the verge (wand of office) before dignitaries in cathedral processions.",
    "From Anglo-Norman \"verger,\" from Latin \"virga\" (rod, wand).",
    "\"The verger in his black cassock led the dean to the carved choir stalls.\"",
    "Victorian church descriptions"
  ],
  [
    "Anchorite",
    "/ˈæŋ.kə.raɪt/",
    "m",
    "A religious recluse who lived walled up inside a small cell attached to a church wall.",
    "From Ecclesiastical Latin \"anachoreta,\" from Greek \"anachorein\" (to withdraw into solitude).",
    "\"The holy anchorite spent thirty years in her stone cell, speaking only through a narrow grate.\"",
    "Ancrene Wisse (c. 1225)"
  ],
  [
    "Palmer",
    "/ˈpɑː.mər/",
    "m",
    "A pilgrim who carried a palm branch as a token of having visited the Holy Sepulchre in Jerusalem.",
    "From Anglo-French \"palmer,\" from Latin \"palma\" (palm tree).",
    "\"Thanne longen folk to goon on pilgrimages, and palmeres for to seken straunge strondes.\"",
    "Chaucer, \"Canterbury Tales\""
  ],
  [
    "Summoner",
    "/ˈsʌm.ə.nər/",
    "m",
    "An officer who cited delinquents to appear before the medieval ecclesiastical court.",
    "From Anglo-Norman \"somonour,\" from Latin \"summonere\" (to hint, call secretly).",
    "\"The summoner with his pimpled, fire-red cherubin face frightened little children in the lane.\"",
    "Chaucer, \"Canterbury Tales\""
  ],
  [
    "Pardoner",
    "/ˈpɑːr.dən.ər/",
    "m",
    "A medieval cleric licensed to preach and sell papal indulgences (pardons) to sinners.",
    "From Anglo-French \"pardunere,\" from \"pardon\" (Latin perdonare).",
    "\"His wallet lay before him in his lap, all full of pardons come from Rome all hot.\"",
    "Chaucer, \"Canterbury Tales\""
  ],
  [
    "Clodhopper",
    "/ˈklɒdˌhɒp.ər/",
    "e",
    "A clumsy, awkward rustic or country bumpkin who hops over ploughed clods of earth.",
    "From \"clod\" (lump of earth) + \"hopper.\"",
    "\"What can a mere clodhopper understand of courtly manners and French dances?\"",
    "Elizabethan comedies"
  ],
  [
    "Ragamuffin",
    "/ˈræɡ.əˌmʌf.ɪn/",
    "e",
    "A ragged, disreputable, dirty boy or beggar.",
    "From ME \"Ragamoffyn\" (name of a demon in \"Piers Plowman,\" c. 1362).",
    "\"A swarm of little ragamuffins ran alongside the coach, begging for coppers.\"",
    "Dickens, \"David Copperfield\""
  ],
  [
    "Beldam",
    "/ˈbɛl.dəm/",
    "e",
    "An old woman; a hag; an eccentric crone. Originally \"grandmother\" (ironic deterioration).",
    "From Anglo-French \"bele-dame\" - fair lady. Used ironically as a term of contempt.",
    "\"Have I not reason, beldams as you are, saucy and overbold?\"",
    "Shakespeare, \"Macbeth\""
  ],
  [
    "Virago",
    "/vɪˈrɑː.ɡoʊ/",
    "e",
    "A domineering, violent, bad-tempered woman; a fierce Amazonian warrior woman.",
    "From Latin \"virago\" - female warrior, heroic maiden, from \"vir\" (man).",
    "\"I am not yet so low but that my nails can reach unto thine eyes, thou termagant virago!\"",
    "Shakespeare, \"Midsummer Night's Dream\""
  ],
  [
    "Termagant",
    "/ˈtɜːr.mə.ɡənt/",
    "e",
    "A harsh, scolding, brawling, overbearing woman.",
    "From OF \"Tervagant,\" a violent imaginary pagan deity in medieval mystery plays.",
    "\"I would have such a fellow whipped for o'erdoing Termagant; it out-herods Herod.\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Strumpet",
    "/ˈstrʌm.pɪt/",
    "e",
    "A woman of loose morals; an archaic term of reproach for an unfaithful woman.",
    "From ME \"strompet,\" of obscure origin. First recorded in the 14th century.",
    "\"Out, strumpet! Weep'st thou for him to my face?\"",
    "Shakespeare, \"Othello\""
  ],
  [
    "Slattern",
    "/ˈslæt.ərn/",
    "e",
    "An untidy, slovenly, careless, and dirty woman.",
    "From obsolete English \"slat\" (to spill, slop water) + \"-ern.\"",
    "\"The kitchen was presided over by a slattern whose cap was yellow with grease.\"",
    "Victorian novels"
  ],
  [
    "Wanton",
    "/ˈwɒn.tən/",
    "e",
    "Unruly, playful; promiscuous; capricious; luxuriously luxuriant without discipline.",
    "From ME \"wantowen\" - ill-brought-up (\"wan-\" un- + \"towen\" trained, disciplined).",
    "\"Like flies to wanton boys are we to the gods; they kill us for their sport.\"",
    "Shakespeare, \"King Lear\""
  ],
  [
    "Dotard",
    "/ˈdoʊ.tərd/",
    "e",
    "An old person whose mental faculties are impaired; a foolish old doting man.",
    "From ME \"doten\" (to be silly, dote) + derogatory suffix \"-ard.\"",
    "\"Away with that old dotard, who babbles of things long forgotten!\"",
    "Shakespeare, \"Much Ado About Nothing\""
  ],
  [
    "Ruffian",
    "/ˈrʌf.i.ən/",
    "e",
    "A violent, cruel, lawless, and brutal fellow; a swaggering street bully.",
    "From OF \"rufien\" (pimp, scoundrel), from Italian \"ruffiano.\"",
    "\"A gang of drunken ruffians lurked in the shadow of the tavern archway.\"",
    "Elizabethan police records"
  ],
  [
    "Cutpurse",
    "/ˈkʌt.pɜːrs/",
    "e",
    "A pickpocket (literally one who cut purses made of leather tied to the girdle).",
    "From \"cut\" + \"purse.\" The precursor to the modern pickpocket.",
    "\"A cutpurse of the empire and the rule, that from a shelf the precious diadem stole!\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Cozen",
    "/ˈkʌz.ən/",
    "e",
    "To trick, deceive, cheat, or defraud someone by artful pretenses.",
    "Probably from Italian \"cozzone\" (horse-trader, known for sharp practices).",
    "\"I am not easily cozened by smooth words and promises whispered in corners.\"",
    "Shakespeare, \"Merry Wives of Windsor\""
  ],
  [
    "Gull",
    "/ɡʌl/",
    "e",
    "A gullible person easily cheated or duped; to trick or dupe someone.",
    "From \"gull\" (young bird, unfledged chick), which swallows anything offered.",
    "\"O gull! O dolt! As ignorant as dirt! Thou hast done a deed worthy of shame.\"",
    "Shakespeare, \"Othello\""
  ],
  [
    "Roisterer",
    "/ˈrɔɪ.stər.ər/",
    "e",
    "A noisy, swaggering, boisterous reveller who drinks and brawls through the streets.",
    "From French \"rustre\" (clown, boor, from Latin \"rusticus\" rustic).",
    "\"A band of midnight roisterers woke the entire neighborhood with their rowdy singing.\"",
    "Jacobean city comedies"
  ],
  [
    "Malapert",
    "/ˌmæl.əˈpɜːrt/",
    "e",
    "Impudent, saucy, boldly disrespectful in speech.",
    "From OF \"malapert\" - unskillful, foolish (\"mal-\" bad + \"apert\" open, clever).",
    "\"Peace, thou malapert boy! Knowest thou to whom thou speakest?\"",
    "Shakespeare, \"Twelfth Night\""
  ],
  [
    "Pickthank",
    "/ˈpɪk.θæŋk/",
    "e",
    "A sycophant, flatterer, or talebearer who seeks favor by currying favor or informing.",
    "From \"pick\" + \"thank\" (one who picks up thanks by obsequious fawning).",
    "\"Smiling pickthanks and base newsmongers had poisoned the prince's mind.\"",
    "Shakespeare, \"Henry IV, Part 1\""
  ],
  [
    "Slug-a-bed",
    "/ˈslʌɡ.ə.bɛd/",
    "e",
    "A lazy person who stays in bed late; a late riser.",
    "From \"slug\" (slow, sluggish creature) + \"in bed.\"",
    "\"Why, lamb! Why, lady! Fie, you slug-a-bed! Why, love, I say! Madam! Sweetheart!\"",
    "Shakespeare, \"Romeo and Juliet\""
  ],
  [
    "Bedlamite",
    "/ˈbɛd.ləm.aɪt/",
    "e",
    "A madman; an inmate or discharged patient of London's Bethlem Hospital.",
    "From \"Bedlam\" (popular contraction of the Hospital of St. Mary of Bethlehem).",
    "\"He ran through the market shouting gibberish like an escaped bedlamite.\"",
    "Jacobean accounts"
  ],
  [
    "Mooncalf",
    "/ˈmuːn.kɑːf/",
    "e",
    "A congenital idiot, simpleton; originally a monstrous birth thought caused by the moon.",
    "From \"moon\" (lunar influence) + \"calf\" (offspring).",
    "\"I shall laugh myself to death at this puppy-headed monster. A most scurvy monster! A mooncalf!\"",
    "Shakespeare, \"The Tempest\""
  ],
  [
    "Urchin",
    "/ˈɜːr.tʃɪn/",
    "e",
    "Originally a hedgehog; later a mischievous, ragged street child or a fairy.",
    "From Anglo-French \"herichun,\" from Latin \"ericius\" (hedgehog).",
    "\"Urchins shall, for that vast of night that they may work, all exercise on thee.\"",
    "Shakespeare, \"The Tempest\""
  ],
  [
    "Bantling",
    "/ˈbænt.lɪŋ/",
    "e",
    "A young or small child; an infant, often one born out of wedlock.",
    "Probably from German \"Bänkling\" (bench-child, child begotten on a bench).",
    "\"The poor mother held her whimpering bantling close against the winter wind.\"",
    "Victorian novels"
  ],
  [
    "Paramour",
    "/ˈpær.ə.mʊər/",
    "e",
    "An illicit lover, mistress, or secret sweetheart of a married person.",
    "From Anglo-French \"par amour\" - through love (Latin \"per amorem\").",
    "\"He kept a fair paramour in a cottage secluded within the forest.\"",
    "Chaucer, \"Reeve's Tale\""
  ],
  [
    "Inamorata",
    "/ɪˌnæm.əˈrɑː.tə/",
    "e",
    "A woman with whom someone is deeply in love; a female sweetheart.",
    "From Italian \"innamorata,\" feminine past participle of \"innamorare\" (to fall in love).",
    "\"The poet composed fifty sonnets dedicated solely to his divine inamorata.\"",
    "Elizabethan lyric collections"
  ],
  [
    "Stomacher",
    "/ˈstʌm.ə.tʃər/",
    "e",
    "A decorative V-shaped panel filling the front opening of a lady's bodice or gown.",
    "From \"stomach\" + suffix \"-er.\" Often richly embroidered with pearls and gold thread.",
    "\"The queen wore a black velvet gown with a stomacher stiffened with thousands of pearls.\"",
    "Inventories of Elizabeth I"
  ],
  [
    "Periwig",
    "/ˈpɛr.ɪ.wɪɡ/",
    "e",
    "A fashionable artificial wig worn by men in the 17th and 18th centuries.",
    "Alteration of French \"perruque.\" Later shortened to \"wig.\"",
    "\"He adjusted his powdered periwig in the gilded looking-glass before entering the drawing-room.\"",
    "Congreve, \"The Way of the World\""
  ],
  [
    "Pomander",
    "/pɒmˈæn.dər/",
    "e",
    "A perforated ball containing ambergris, cloves, and perfumes carried as a charm against pestilence.",
    "From OF \"pomme d'ambre\" - apple of ambergris.",
    "\"He held a pomander of silver filigree to his nose as he passed the open sewers of the city.\"",
    "Elizabethan plague tracts"
  ],
  [
    "Chopine",
    "/tʃəˈpiːn/",
    "e",
    "A platform shoe with an enormous cork sole worn by Venetian and Elizabethan women to keep above mud.",
    "From Spanish \"chapín\" (clog), echoic of the clacking sound made when walking.",
    "\"Your ladyship is nearer to heaven than when I saw you last, by the altitude of a chopine!\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Pattens",
    "/ˈpæt.ənz/",
    "e",
    "Wooden or iron overshoes strapped under boots to lift the feet above street mud and refuse.",
    "From OF \"patin\" (clog), related to Greek \"pateis\" (to tread).",
    "\"The ladies clicked and clattered down the cobbled alley on their iron pattens.\"",
    "Jane Austen, \"Persuasion\""
  ],
  [
    "Pettifogger",
    "/ˈpɛt.iˌfɒɡ.ər/",
    "t",
    "An unscrupulous, disreputable lawyer who deals in petty cases with sly trickery.",
    "From \"petty\" (small) + obsolete \"fogger\" (schemer, from the Fugger banking family).",
    "\"Mr. Vholes was not a pettifogger, but he pursued his client's bill of costs with relentless vigor.\"",
    "Dickens, \"Bleak House\""
  ],
  [
    "Blatherskite",
    "/ˈblæð.ərˌskaɪt/",
    "t",
    "A talkative, foolish person who speaks nonsense loudly and at endless length.",
    "From Scottish \"blather\" (to talk nonsense) + \"skate\" (contemptible person).",
    "\"Don't listen to that old blatherskite; he knows no more of finance than a newborn infant.\"",
    "Victorian parliamentary debates"
  ],
  [
    "Skulduggery",
    "/skʌlˈdʌɡ.ər.i/",
    "t",
    "Underhanded, deceitful, or unscrupulous behavior or political scheming.",
    "From Scottish \"sculduddery\" (fornication, gross obscenity), later shifted to trickery.",
    "\"The entire election was tainted by municipal skulduggery and bribery of voters.\"",
    "Victorian newspapers"
  ],
  [
    "Bamboozle",
    "/bæmˈbuː.zəl/",
    "t",
    "To deceive, perplex, confound, or practice trickery upon someone.",
    "Early 18th-century slang of unknown origin; recorded in Swift's list of vulgar neologisms.",
    "\"He completely bamboozled the magistrate with a fabricated alibi and false witnesses.\"",
    "Victorian court records"
  ],
  [
    "Flummox",
    "/ˈflʌm.əks/",
    "t",
    "To bewilder, confound, confuse utterly; to throw into perplexed helplessness.",
    "Probably dialectal English (Herefordshire/Gloucestershire \"flummock\" to agitate, defeat).",
    "\"The sudden turn of events utterly flummoxed the senior partners of the bank.\"",
    "Dickens, \"Pickwick Papers\""
  ],
  [
    "Discombobulate",
    "/ˌdɪs.kəmˈbɒb.jʊ.leɪt/",
    "t",
    "To upset, confuse, disconcert, or throw into complete disorder.",
    "American humorous mock-Latin slang from the 1830s, popularized in Victorian England.",
    "\"The loud crash of the tea-tray discombobulated the entire afternoon gathering.\"",
    "Humorous Victorian sketches"
  ],
  [
    "Collywobbles",
    "/ˈkɒl.iˌwɒb.əlz/",
    "t",
    "Bellyache, stomach distress, or intense nervousness accompanied by fluttering guts.",
    "From \"colic\" (belly pain) + \"wobble\" (shaky movement).",
    "\"I confess that the prospect of public speaking gives me an awful attack of the collywobbles.\"",
    "Victorian memoirs"
  ],
  [
    "Lollygag",
    "/ˈlɒl.i.ɡæɡ/",
    "t",
    "To dawdle, fool around, waste time, or loiter aimlessly.",
    "American/British dialect slang from the 1860s.",
    "\"Stop lollygagging by the bookshop window and deliver this parcel immediately!\"",
    "Victorian children's stories"
  ],
  [
    "Gallivant",
    "/ˈɡæl.ɪ.vænt/",
    "t",
    "To go about in search of amusement or pleasure, especially in flirtatious company.",
    "Alteration of \"gallant\" (to act the chivalrous gallant / court ladies).",
    "\"Her son was forever gallivanting across the continent while his debts accumulated at home.\"",
    "Thackeray, \"Vanity Fair\""
  ],
  [
    "Folderol",
    "/ˈfɒl.də.rɒl/",
    "t",
    "Nonsense; foolish talk or ideas; useless or showy trifles.",
    "From the nonsensical refrain of old songs: \"fol-de-rol-de-ray.\"",
    "\"I have no patience for all this modern folderol and scientific nonsense!\"",
    "Victorian drawing-room comedies"
  ],
  [
    "Poppycock",
    "/ˈpɒp.i.kɒk/",
    "t",
    "Senseless talk, complete rubbish, nonsense.",
    "From Dutch dialect \"poppekak\" - soft doll-dung (\"pop\" doll + \"kak\" excrement).",
    "\"Pure unadulterated poppycock! That man hasn't spoken a grain of truth all year.\"",
    "Victorian political journalism"
  ],
  [
    "Rigmarole",
    "/ˈrɪɡ.mə.roʊl/",
    "t",
    "A lengthy, complicated, confused, and nonsensical procedure or rambling story.",
    "Alteration of \"Ragman roll\" (a 13th-century roll of Scottish nobility's homage to Edward I).",
    "\"We had to go through a preposterous bureaucratic rigmarole merely to secure a passport.\"",
    "Victorian travel memoirs"
  ],
  [
    "Flummery",
    "/ˈflʌm.ər.i/",
    "t",
    "Empty compliment, insincere flattery, nonsense; originally a bland Welsh oatmeal pudding.",
    "From Welsh \"llymru\" (sour oatmeal jelly, porridge).",
    "\"The prime minister's speech was nothing but rhetorical flummery, signifying nothing.\"",
    "Victorian editorial essays"
  ],
  [
    "Hornswoggle",
    "/ˈhɔːrnˌswɒɡ.əl/",
    "t",
    "To cheat, bamboozle, hoax, or deceive someone cleverly.",
    "19th-century comic formation, popular in both Britain and the American frontier.",
    "\"The clever auctioneer hornswoggled the gentleman into buying a gilded lead watch.\"",
    "Victorian humorous periodicals"
  ],
  [
    "Shenanigans",
    "/ʃəˈnæn.ɪ.ɡənz/",
    "t",
    "Secret or dishonest activity, mischievous pranks, high-spirited trickery.",
    "Probably from Irish \"sionnachuighim\" (I play the fox, play tricks, from \"sionnach\" fox).",
    "\"There were too many nocturnal shenanigans going on beneath the headmaster's nose.\"",
    "Public school memoirs"
  ],
  [
    "Codswallop",
    "/ˈkɒdzˌwɒl.əp/",
    "t",
    "Complete nonsense, rubbish. Often said to relate to Hiram Codd's patented soft-drink bottles.",
    "Attributed to \"Codd\" (bottle maker) + \"wallop\" (slang for beer/drink). Meaning: fizzy rubbish.",
    "\"What absolute codswallop! Do you expect a grown man to believe such a fairy-tale?\"",
    "British colloquial speech"
  ],
  [
    "Taradiddle",
    "/ˌtær.əˈdɪd.əl/",
    "t",
    "A petty lie, a fib; pretentious nonsense.",
    "Probably related to \"diddle\" (to swindle, cheat) with playful reduplicative prefix.",
    "\"Her recount of meeting the Queen was judged by all to be a brazen taradiddle.\"",
    "Victorian domestic memoirs"
  ],
  [
    "Absquatulate",
    "/æbˈskwɒtʃ.ʊ.leɪt/",
    "t",
    "To decamp, sneak away hastily, run off, or abscond with money.",
    "Humorous mock-Latin coinage of the 1830s: \"ab-\" (away) + \"squat\" + Latinate suffix.",
    "\"The cashier absquatulated in the dead of night, taking forty thousand pounds with him.\"",
    "Punch magazine, 1850"
  ],
  [
    "Cattywampus",
    "/ˌkæt.iˈwɒm.pəs/",
    "t",
    "Askew, awry, diagonally positioned, out of alignment.",
    "Colloquial 19th-century coinage; variant of \"catawampus.\"",
    "\"The gale left the chimney-pots and garden fence looking completely cattywampus.\"",
    "Victorian dialect stories"
  ],
  [
    "Ballyhoo",
    "/ˈbæl.i.huː/",
    "t",
    "Extravagant publicity or noisy promotional uproar; sensational hype.",
    "Possibly from the Irish village Ballyhooly, famous for noisy faction fights.",
    "\"Beneath all the theatrical ballyhoo lay a performance of third-rate caliber.\"",
    "Theatrical memoirs"
  ],
  [
    "Highfalutin",
    "/ˌhaɪ.fəˈluː.tɪn/",
    "t",
    "Pompous, pretentious, bombastic, high-flown in language or manners.",
    "Probably from \"high-fluting\" (playing high notes on a flute / whistling high).",
    "\"She gave herself highfalutin airs, pretending her father had been a baronet.\"",
    "George Eliot, \"Middlemarch\""
  ],
  [
    "Cantankerous",
    "/kænˈtæŋ.kər.əs/",
    "t",
    "Bad-tempered, argumentative, uncooperative, stubbornly quarrelsome.",
    "Probably a blend of ME \"contek\" (strife, contention) + \"rancorous.\"",
    "\"The old sea-captain was a cantankerous soul who quarreled with every cabin boy.\"",
    "Victorian seafaring tales"
  ],
  [
    "Persnickety",
    "/pərˈsnɪk.ɪ.ti/",
    "t",
    "Placing excessive emphasis on trivial details; fussy, fastidious, finicky.",
    "Scottish origin (\"pernickety,\" late 18th century).",
    "\"The head clerk was so persnickety that he rejected letters for a single blotted comma.\"",
    "Victorian office reminiscences"
  ],
  [
    "Curmudgeon",
    "/kərˈmʌdʒ.ən/",
    "t",
    "A bad-tempered, crusty, ill-natured person, especially an old man.",
    "Unknown origin; Dr. Samuel Johnson amusingly suggested French \"cœur méchant\" (wicked heart).",
    "\"The landlord was an old curmudgeon who turned off the gas lamps at precisely nine.\"",
    "Dickens, \"A Christmas Carol\""
  ],
  [
    "Scalawag",
    "/ˈskæl.ə.wæɡ/",
    "t",
    "A scamp, rascal, good-for-nothing rogue, mischievous person.",
    "Originally Scalloway in the Shetland Islands (noted for diminutive cattle).",
    "\"That young scalawag has been stealing apples from the parsonage orchard again!\"",
    "Victorian rural tales"
  ],
  [
    "Sluggard",
    "/ˈslʌɡ.ərd/",
    "m",
    "A habitually lazy, sluggish person who avoids labor.",
    "From ME \"slugge\" (lazy person) + pejorative suffix \"-ard.\"",
    "\"Go to the ant, thou sluggard; consider her ways, and be wise.\"",
    "King James Bible, Proverbs 6:6"
  ],
  [
    "Recreant",
    "/ˈrɛk.ri.ənt/",
    "m",
    "Cowardly, unfaithful to a pledge, craven; a traitor to his oath.",
    "From OF \"recreant\" (yielding, crying mercy), from Latin \"recredere\" (to yield belief).",
    "\"Thou recreant knight! Thou hast stained the honor of the Round Table forever!\"",
    "Malory, \"Le Morte d'Arthur\""
  ],
  [
    "Nincompoop",
    "/ˈnɪŋ.kəm.puːp/",
    "t",
    "A foolish, stupid, or silly person; a simpleton.",
    "Recorded since the 1670s; often fancifully derived from Latin \"non compos mentis.\"",
    "\"Only an absolute nincompoop would venture onto the frozen tarn in early spring.\"",
    "Victorian school stories"
  ],
  [
    "Dandy",
    "/ˈdæn.di/",
    "t",
    "A man devoted to elegance and refined fastidiousness in dress and manners (a beau).",
    "Of uncertain origin; associated with the Scottish border and the song \"Yankee Doodle.\"",
    "\"Beau Brummell was the supreme dandy of the Regency, setting the mode for all London.\"",
    "Thackeray, \"The Book of Snobs\""
  ],
  [
    "Bluestocking",
    "/ˈbluːˌstɒk.ɪŋ/",
    "t",
    "An educated, intellectual, or literary woman (often used with patronizing irony).",
    "From the Blue Stocking Society (c. 1750), where Benjamin Stillingfleet wore blue worsted stockings.",
    "\"She was regarded as a formidable bluestocking, reading Greek before breakfast.\"",
    "George Eliot"
  ],
  [
    "Dowager",
    "/ˈdaʊ.ə.dʒər/",
    "t",
    "A widow holding property or a title derived from her deceased husband; a stately elder woman.",
    "From Anglo-Norman \"douagere,\" from \"doue\" (dower, Latin \"dotare\").",
    "\"The Dowager Duchess entered the ballroom with the majestic tread of an empress.\"",
    "Jane Austen, \"Pride and Prejudice\""
  ],
  [
    "Bedizen",
    "/bɪˈdaɪ.zən/",
    "t",
    "To dress up or decorate gaudily, showily, or in vulgar bad taste.",
    "From prefix \"be-\" + obsolete \"dizen\" (to dress a distaff with flax, dress up).",
    "\"She appeared at church bedizened with yellow ribbons, false pearls, and dyed ostrich plumes.\"",
    "Victorian novels"
  ],
  [
    "Furbelow",
    "/ˈfɜːr.bə.loʊ/",
    "t",
    "A gathered frill, flounce, or ornamental ruffle on a woman's petticoat or dress.",
    "From French \"falbala\" (flounce, ruffle) via Italian \"falfala.\"",
    "\"A whirlwind of silk and furbelows descended the grand staircase.\"",
    "Thackeray, \"Vanity Fair\""
  ],
  [
    "Crinoline",
    "/ˈkrɪn.ə.lɪn/",
    "t",
    "A stiffened petticoat or skirt structure made of horsehair fabric or steel hoops.",
    "From French \"crinoline,\" from Latin \"crinis\" (horsehair) + \"linum\" (linen).",
    "\"The ladies in their ballooning crinolines could barely fit through the pews.\"",
    "Victorian satiric sketches"
  ],
  [
    "Bustle",
    "/ˈbʌs.əl/",
    "t",
    "A padded framework or cushion worn under the back of a woman's skirt to puff it out.",
    "Probably from \"bustle\" (noisy activity, puffed-up fullness).",
    "\"The fashionable bustle of 1885 gave ladies the silhouette of a proud pouter pigeon.\"",
    "Fashion history of Victorian England"
  ],
  [
    "Reticule",
    "/ˈrɛt.ɪ.kjuːl/",
    "t",
    "A woman's small handbag or drawstring purse, often carried on the arm.",
    "From French \"réticule,\" from Latin \"reticulum\" (little network, net bag).",
    "\"She opened her beaded reticule and withdrew a lace handkerchief scented with lavender.\"",
    "Jane Austen, \"Emma\""
  ],
  [
    "Pince-nez",
    "/ˈpæns.neɪ/",
    "t",
    "Eyeglasses without sidepieces, clipped onto the bridge of the nose by a spring.",
    "From French \"pincer\" (to pinch) + \"nez\" (nose) - literally \"pinch-nose.\"",
    "\"The inspector adjusted his pince-nez and studied the smudged footprints in the snow.\"",
    "Conan Doyle, \"Sherlock Holmes\""
  ],
  [
    "Lorgnette",
    "/lɔːrˈnjɛt/",
    "t",
    "A pair of spectacles or opera glasses mounted on a long ornamental handle.",
    "From French \"lorgner\" (to squint at, look sidelong).",
    "\"The countess raised her gold-handled lorgnette and surveyed the theater box.\"",
    "Victorian society novels"
  ],
  [
    "Antimacassar",
    "/ˌæn.ti.məˈkæs.ər/",
    "t",
    "A decorative cloth placed over the back of armchairs to prevent staining from Macassar hair-oil.",
    "From \"anti-\" (against) + \"Macassar\" oil (a popular Victorian hair pomade from Indonesia).",
    "\"Every armchair in the parlor was draped with an intricately crocheted white antimacassar.\"",
    "Victorian home journals"
  ],
  [
    "Spittoon",
    "/spɪˈtuːn/",
    "t",
    "A metal or ceramic receptacle for spit, common in public places and smoking-rooms.",
    "From \"spit\" + augmentative suffix \"-oon.\"",
    "\"A polished brass spittoon stood by the legs of the billiard table.\"",
    "Victorian club records"
  ],
  [
    "Cuspidor",
    "/ˈkʌs.pɪ.dɔːr/",
    "t",
    "Another term for a spittoon, used in polite or hotel contexts.",
    "From Portuguese \"cuspidor\" (spitter, from \"cuspir\" to spit, Latin \"conspuere\").",
    "\"The porter emptied the porcelain cuspidors each morning before the guests came down.\"",
    "Hotel management records of the 1870s"
  ],
  [
    "Chiffonier",
    "/ˌʃɪf.əˈnɪər/",
    "t",
    "A tall, elegant chest of drawers, often with a mirrored back or lower cupboard.",
    "From French \"chiffonnier\" (rag-picker), from \"chiffon\" (rag, scraps of cloth).",
    "\"A silver candlestick and a bronze clock stood atop the rosewood chiffonier.\"",
    "Victorian interior descriptions"
  ],
  [
    "Mudlark",
    "/ˈmʌd.lɑːrk/",
    "t",
    "A street child or scavenger who searched the tidal mud of the Thames for scrap iron, rope, and coal.",
    "From \"mud\" + \"lark\" (ironic contrast between the bird and the dirty scavenger).",
    "\"Poor little mudlarks, wading knee-deep in the freezing ooze beneath London Bridge.\"",
    "Henry Mayhew, \"London Labour and the London Poor\""
  ],
  [
    "Knocker-up",
    "/ˈnɒk.ər.ʌp/",
    "t",
    "A person employed to wake sleeping factory workers by tapping on bedroom windows with a long pole.",
    "From the verb \"to knock up\" (to wake someone by knocking).",
    "\"The knocker-up was already tapping on the upper panes as dawn broke over Manchester.\"",
    "Industrial histories of northern England"
  ],
  [
    "Entreat",
    "/ɪnˈtriːt/",
    "m",
    "To ask earnestly; to beg; to treat or manage.",
    "From Anglo-Norman \"entreter\" - to deal with, handle (Latin \"intractare\").",
    "\"I entreat your honor to have patience with an old servant.\"",
    "Shakespeare, \"Measure for Measure\""
  ],
  [
    "Vouchsafe",
    "/ˌvaʊtʃˈseɪf/",
    "m",
    "To grant or give graciously, as a favor from a superior; to deign.",
    "From \"vouch\" + \"safe\" (to warrant as safe, guarantee protection).",
    "\"Vouchsafe, O Lord, to keep us this day without sin.\"",
    "The Book of Common Prayer, Te Deum"
  ],
  [
    "Descry",
    "/dɪˈskraɪ/",
    "m",
    "To catch sight of, discern from a distance, or detect by careful looking.",
    "From OF \"descrier\" - to proclaim, shout out upon sighting something.",
    "\"From the maintop, the lookout descried the white cliffs of Dover on the horizon.\"",
    "Hakluyt, \"Voyages\""
  ],
  [
    "Espy",
    "/ɪˈspaɪ/",
    "m",
    "To catch sight of; to glimpse something hidden or distant.",
    "From OF \"espiier\" - to watch, spy (from Germanic *spehon).",
    "\"He espied his enemy advancing through the mist between the trees.\"",
    "Malory, \"Le Morte d'Arthur\""
  ],
  [
    "Quaff",
    "/kwɒf/",
    "e",
    "To drink heartily, deeply, and with evident relish.",
    "Probably of echoic/dialectal origin; possibly related to Low German \"quassen\" (to overeat).",
    "\"They quaffed great tankards of spiced ale until the small hours of the morning.\"",
    "Scott, \"Ivanhoe\""
  ],
  [
    "Tipple",
    "/ˈtɪp.əl/",
    "e",
    "To drink intoxicating liquor habitually or in small sips.",
    "Of uncertain origin; perhaps related to dialectal \"tip\" (to tilt the cup).",
    "\"The parish clerk was known to tipple a quiet glass of port at the Green Dragon.\"",
    "Victorian village sketches"
  ],
  [
    "Languish",
    "/ˈlæŋ.ɡwɪʃ/",
    "m",
    "To grow weak, faint, or feeble; to suffer neglect or pining love in sorrow.",
    "From OF \"languir\" (to languish, Latin \"languere\").",
    "\"In the deep dungeon, the captive knight languished for seven long summers.\"",
    "Medieval romances"
  ],
  [
    "Bewail",
    "/bɪˈweɪl/",
    "m",
    "To express deep regret, sorrow, or grief over; to lament loudly.",
    "From ME \"bewailen\" - \"be-\" + \"wail\" (from Old Norse \"væla\" to lament).",
    "\"She bewept her dead lord and bewailed the fall of her ancient house.\"",
    "Chaucer, \"Troilus and Criseyde\""
  ],
  [
    "Repine",
    "/rɪˈpaɪn/",
    "e",
    "To feel or express discontent, fretfulness, or melancholy dejection.",
    "From \"re-\" + obsolete \"pine\" (to suffer, grieve, from OE \"pīnian\").",
    "\"He bore his misfortunes without a murmur, never repining against Providence.\"",
    "Jane Austen, \"Sense and Sensibility\""
  ],
  [
    "Blench",
    "/blɛntʃ/",
    "m",
    "To flinch, shrink back, or turn pale from fear, pain, or astonishment.",
    "From OE \"blencan\" - to deceive, flinch. Cognate with \"blink.\"",
    "\"If he but blench, I know my course!\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Quail",
    "/kweɪl/",
    "m",
    "To feel fear or apprehension; to cower, shrink, or lose courage.",
    "From ME \"qualen\" - to die, sicken (from OE \"cwelan\" to perish).",
    "\"The stoutest hearts quailed before the terrible thunder of the bombardment.\"",
    "Military histories"
  ],
  [
    "Fawn",
    "/fɔːn/",
    "m",
    "To court favor by groveling, flattering, and servile cringing (like a dog).",
    "From OE \"fagnian\" - to rejoice, be glad (from \"fægen\" glad).",
    "\"He hated those fawning courtiers who changed their smiles with every wind of fortune.\"",
    "Shakespeare, \"Julius Caesar\""
  ],
  [
    "Upbraid",
    "/ʌpˈbreɪd/",
    "m",
    "To reproach severely, find fault with, or scold sharply for a wrongdoing.",
    "From OE \"upbregdan\" - to lift up, brandish, bring forward as a reproach.",
    "\"She upbraided him for his reckless squandering of the family patrimony.\"",
    "Milton, \"Paradise Lost\""
  ],
  [
    "Traduce",
    "/trəˈdjuːs/",
    "e",
    "To slander, speak falsely and maliciously of; to expose to public shame.",
    "From Latin \"traducere\" - to lead across, display to ridicule, defame.",
    "\"I will not suffer my good name to be traduced by anonymous scribblers in the gazette.\"",
    "Elizabethan letters"
  ],
  [
    "Vituperate",
    "/vaɪˈtjuː.pə.reɪt/",
    "t",
    "To blame, insult, or criticize in a passionate and abusive manner.",
    "From Latin \"vituperare\" - to blame, find fault (\"vitium\" fault + \"parare\" prepare).",
    "\"The editor vituperated his political rivals in columns of unbridled invective.\"",
    "Victorian journalism"
  ],
  [
    "Flout",
    "/flaʊt/",
    "e",
    "To openly disregard, mock, insult, or treat with contemptuous disdain.",
    "Probably from Middle Dutch \"fluiten\" (to play the flute, whistle at in mockery).",
    "\"To flout at Fortune's wheel and mock the decrees of the parliament.\"",
    "Shakespeare, \"As You Like It\""
  ],
  [
    "Craven",
    "/ˈkreɪ.vən/",
    "m",
    "Contemptibly cowardly, fainthearted; a cowardly person.",
    "From Anglo-Norman \"cravant\" (vanquished, crying mercy), from Latin \"crepare\" (to crack).",
    "\"A craven knight who fled the field while his liege lord fought surrounded.\"",
    "Scott, \"Ivanhoe\""
  ],
  [
    "Debonair",
    "/ˌdɛb.əˈnɛər/",
    "m",
    "Gentle, gracious, courteous, charming, confident, and dashing in manners.",
    "From OF \"debonaire\" - of good stock, gentle (\"de bon aire\" of good lineage).",
    "\"A knight of noble bearing, debonair and courteous to all women and pilgrims.\"",
    "Chaucer, \"Book of the Duchess\""
  ],
  [
    "Blithe",
    "/blaɪð/",
    "m",
    "Joyous, merry, cheerful, carefree, lighthearted.",
    "From OE \"blīþe\" - happy, joyous, friendly. Cognate with German \"blöde\" (anciently kind).",
    "\"Hail to thee, blithe Spirit! Bird thou never wert...\"",
    "Shelley, \"To a Skylark\""
  ],
  [
    "Winsome",
    "/ˈwɪn.səm/",
    "m",
    "Attractive, charming, pleasing, endearing, sweetly winning.",
    "From OE \"wynsum\" - delightful, pleasant (from \"wyn\" joy, bliss + \"-some\").",
    "\"Her winsome smile and gentle voice softened the hardest hearts in the assembly.\"",
    "Victorian romances"
  ],
  [
    "Pulchritudinous",
    "/ˌpʌl.krɪˈtjuː.dɪ.nəs/",
    "t",
    "Characterized by breathtaking physical beauty and comeliness.",
    "From Latin \"pulchritudo\" (beauty), from \"pulcher\" (beautiful).",
    "\"The heroine was depicted as the most pulchritudinous damsel in the three shires.\"",
    "Humorous Victorian periodicals"
  ],
  [
    "Cadaverous",
    "/kəˈdæv.ər.əs/",
    "t",
    "Resembling a corpse; pale, gaunt, haggard, emaciated.",
    "From Latin \"cadaverosus,\" from \"cadaver\" (corpse, dead body).",
    "\"His cadaverous face and hollow burning eyes gave him the look of an escaped phantom.\"",
    "Poe, \"The Fall of the House of Usher\""
  ],
  [
    "Saturnine",
    "/ˈsæt.ər.naɪn/",
    "e",
    "Gloomy, dark, morose, cold, and slow in temperament (influenced by the planet Saturn).",
    "From Medieval Latin \"Saturninus\" - born under the influence of the cold planet Saturn.",
    "\"He had a saturnine complexion and rarely smiled even at the wittiest jest.\"",
    "Bronte, \"Wuthering Heights\""
  ],
  [
    "Churlish",
    "/ˈtʃɜːr.lɪʃ/",
    "m",
    "Rude, surly, ungracious, boorish, ill-mannered.",
    "From OE \"ceorlic\" - rustic, characteristic of a peasant/churl.",
    "\"It would be churlish in the extreme to refuse the hospitality of an ancient host.\"",
    "Stevenson, \"Treasure Island\""
  ],
  [
    "Coppice",
    "/ˈkɒp.ɪs/",
    "m",
    "A dense area of woodland consisting of small trees periodically cut back to ground level.",
    "From OF \"copeiz\" (cut wood), from Medieval Latin \"colpare\" (to cut). Shortened to \"copse.\"",
    "\"A pheasant rose with a loud clatter of wings from the birch coppice.\"",
    "Thomas Hardy, \"The Woodlanders\""
  ],
  [
    "Dingle",
    "/ˈdɪŋ.ɡəl/",
    "m",
    "A deep, narrow, secluded wooded valley or dell.",
    "Of uncertain ME origin; possibly related to \"dimple\" or dialectal \"ding\" (hollow).",
    "\"They rested their horses in a cool, shady dingle beside a whispering brook.\"",
    "Tolkien, \"The Lord of the Rings\""
  ],
  [
    "Fell",
    "/fɛl/",
    "m",
    "A high, barren, rocky moor or mountain upland in northern England and Scotland.",
    "From Old Norse \"fjall\" / \"fell\" (mountain, rocky hill).",
    "\"The sheep roamed the lonely windy fells under a brooding autumn sky.\"",
    "Emily Bronte, \"Wuthering Heights\""
  ],
  [
    "Tarn",
    "/tɑːrn/",
    "m",
    "A small mountain lake or pool, especially one formed in a glacial cirque.",
    "From Old Norse \"tjörn\" (small mountain lake, pond).",
    "\"The dark, fathomless waters of the tarn reflected the towering granite crags.\"",
    "Wordsworth, \"The Excursion\""
  ],
  [
    "Gloaming",
    "/ˈɡloʊ.mɪŋ/",
    "m",
    "The twilight, dusk, evening twilight after sunset.",
    "From OE \"glōmung\" (twilight), from \"glōm\" (gloom, twilight).",
    "\"In the purple gloaming, the bats began their silent, erratic flight over the pond.\"",
    "Scottish ballads"
  ],
  [
    "Suzerain",
    "/ˈsuː.zə.rɪn/",
    "m",
    "A feudal lord or sovereign power exercising control over a tributary vassal state.",
    "From French \"suzerain,\" coined on analogy with \"souverain\" (sovereign).",
    "\"The Duke acknowledged the King of France as his rightful suzerain.\"",
    "Feudal charters"
  ],
  [
    "Homage",
    "/ˈhɒm.ɪdʒ/",
    "m",
    "Formal public acknowledgment of feudal allegiance made by a vassal to his lord on bended knee.",
    "From OF \"homage,\" from \"homme\" (man, Latin \"homo\"). \"I become your man.\"",
    "\"The young earl knelt before the throne and did homage for his ancestral lands.\"",
    "Chronicles of Froissart"
  ],
  [
    "Investiture",
    "/ɪnˈvɛs.tɪ.tʃər/",
    "m",
    "The ceremonial act of conferring feudal land, office, or ecclesiastical rank.",
    "From Medieval Latin \"investitura,\" from \"investire\" (to clothe in office).",
    "\"The bishop received the ring and crozier at the solemn ceremony of investiture.\"",
    "Ecclesiastical histories"
  ],
  [
    "Justiciar",
    "/dʒʌsˈtɪʃ.i.ər/",
    "m",
    "The chief royal judicial and political officer of the realm in Norman and Angevin England.",
    "From Medieval Latin \"justitiarius\" - judge, officer of justice.",
    "\"In the king's absence beyond the sea, the Chief Justiciar governed the realm.\"",
    "Chronica Majora of Matthew Paris"
  ],
  [
    "Constable",
    "/ˈkʌn.stə.bəl/",
    "m",
    "The highest officer of the royal household, commander of the royal army and castles.",
    "From OF \"conestable,\" from Late Latin \"comes stabuli\" (count of the stable).",
    "\"The Constable of Dover Castle lowered the drawbridge at the approach of the royal train.\"",
    "Records of the Cinque Ports"
  ],
  [
    "Pursuivant",
    "/ˈpɜːr.swɪ.vənt/",
    "m",
    "A junior officer of arms attending on the heralds; a royal messenger.",
    "From OF \"poursuivant\" - follower, attendant, from \"poursuivre\" (to pursue).",
    "\"The pursuivant bore the king's letters under the signet ring to the northern shires.\"",
    "Tudor heraldic rolls"
  ],
  [
    "Chamberlain",
    "/ˈtʃeɪm.bər.lɪn/",
    "m",
    "An officer managing the household of a sovereign or great noble.",
    "From OF \"chamberlenc,\" of Germanic origin (*kamarling, chamber servant).",
    "\"The Lord Great Chamberlain carried the royal train at the coronation.\"",
    "State papers of Henry VIII"
  ],
  [
    "Portreeve",
    "/ˈpɔːrt.riːv/",
    "m",
    "The chief magistrate or governor of a medieval port town or borough.",
    "From OE \"port\" (harbor, market town) + \"gerēfa\" (reeve).",
    "\"The portreeve inspected the merchant cogs laden with Gascon wine.\"",
    "Municipal archives of Southampton"
  ],
  [
    "Catchpole",
    "/ˈkætʃ.poʊl/",
    "m",
    "A sheriff's officer or petty bailiff who arrested debtors, carrying a pole with an iron collar.",
    "From Anglo-Norman \"cachepol\" - catch-fowl (\"chacier\" to chase + \"pol\" chicken).",
    "\"The terrified debtor fled down the alley, pursued by two burly catchpoles.\"",
    "Jacobean city comedies"
  ],
  [
    "Freeholder",
    "/ˈfriːˌhoʊl.dər/",
    "m",
    "One who holds an estate in fee simple or for life, not subject to customary servile labor.",
    "From \"free\" + \"holder\" (liberum tenementum).",
    "\"The freeholders of the county were summoned to elect two knights of the shire.\"",
    "Parliamentary election rolls"
  ],
  [
    "Copyholder",
    "/ˈkɒp.iˌhoʊl.dər/",
    "m",
    "A tenant who held land by copy of the manorial court roll according to customary law.",
    "From \"copy\" (of the court roll) + \"holder.\"",
    "\"The copyholder paid a modest fine upon inheriting his father's ten acres.\"",
    "Manorial records of Norfolk"
  ],
  [
    "Danegeld",
    "/ˈdeɪn.ɡɛld/",
    "m",
    "An ancient land tax levied in Anglo-Saxon England to buy off Danish invaders or maintain a fleet.",
    "From OE \"Dene\" (Danes) + \"geld\" (payment, tribute).",
    "\"King Ethelred levied an extortionate Danegeld of thirty thousand pounds of silver.\"",
    "Anglo-Saxon Chronicles"
  ],
  [
    "Gaol-delivery",
    "/ˈdʒeɪl.dɪˌlɪv.ər.i/",
    "m",
    "A commission issued to judges to clear a prison by putting all prisoners on trial.",
    "From \"gaol\" (jail) + \"delivery\" (liberation/trial).",
    "\"The royal judges arrived at Norwich Castle for the general gaol-delivery.\"",
    "Assize court rolls"
  ],
  [
    "Compurgation",
    "/ˌkɒm.pɜːrˈɡeɪ.ʃən/",
    "m",
    "Acquittal from a criminal charge by the sworn oaths of twelve reputable neighbors (\"oath-helpers\").",
    "From Latin \"compurgare\" - to purify thoroughly (\"com-\" + \"purgare\" cleanse).",
    "\"The defendant cleared himself of the theft by the compurgation of twelve honest burgesses.\"",
    "Medieval borough customs"
  ],
  [
    "Donjon",
    "/ˈdɒn.dʒən/",
    "m",
    "The massive central fortified tower or keep of a medieval castle.",
    "From OF \"donjon,\" from Medieval Latin \"domnio\" (lord's seat, from dominus). Root of \"dungeon\"!",
    "\"The royal standard floated proudly from the summit of the great stone donjon.\"",
    "Chronicles of the Norman Conquest"
  ],
  [
    "Barbican",
    "/ˈbɑːr.bɪ.kən/",
    "m",
    "An outer fortified gatehouse defending the main entrance or drawbridge of a castle.",
    "From OF \"barbacane,\" probably of Arabic origin (bāb-al-khān, gate-house).",
    "\"The archers rained arrows from the loopholes of the barbican upon the vanguard.\"",
    "Froissart, \"Chronicles\""
  ],
  [
    "Portcullis",
    "/pɔːrtˈkʌl.ɪs/",
    "m",
    "A heavy sliding iron or oak grille dropped vertically to bar a castle gateway.",
    "From OF \"porte coleice\" - sliding door (\"porte\" door + \"coleice\" sliding).",
    "\"The chains shrieked as the iron portcullis crashed down, trapping the intruders.\"",
    "Scott, \"Marmion\""
  ],
  [
    "Machicolation",
    "/məˌtʃɪk.əˈleɪ.ʃən/",
    "m",
    "A projecting gallery atop castle walls with floor openings for dropping rocks and boiling oil.",
    "From OF \"machecol\", from \"macher\" (to crush) + \"col\" (neck).",
    "\"Boulders and scalding pitch were hurled through the machicolations upon the sappers below.\"",
    "Military architecture treatises"
  ],
  [
    "Crenellation",
    "/ˌkrɛn.əlˈeɪ.ʃən/",
    "m",
    "The indented parapet of a fortress, alternating solid merlons and open embrasures.",
    "From OF \"crenel\" (notch), from Latin \"crena\" (notch).",
    "\"The king granted a license to crenellate, permitting the manor to be fortified with towers.\"",
    "Patent rolls of Edward III"
  ],
  [
    "Merlon",
    "/ˈmɜːr.lən/",
    "m",
    "The solid, upright tooth-like part of an embattled parapet between two embrasures.",
    "From French \"merlon,\" from Italian \"merlone\" (battlement, literally big blackbird).",
    "\"The crossbowman ducked behind the stone merlon while he wound up his arbalest.\"",
    "Siege records of Harfleur"
  ],
  [
    "Bartizan",
    "/ˈbɑːr.tɪ.zən/",
    "m",
    "A small overhanging turret corbelled out from the top corner of a castle wall or tower.",
    "Alteration of obsolete \"bratticing\" (timberwork fortification), from OF \"bretesche.\"",
    "\"A sharp-eyed sentry stood watch within the stone bartizan over the gorge.\"",
    "Castles of Scotland and the Marches"
  ],
  [
    "Postern",
    "/ˈpoʊ.stərn/",
    "m",
    "A small, secluded rear or private side door of a castle or walled town.",
    "From OF \"poterne,\" from Late Latin \"posterula\" (small back door, from \"posterus\").",
    "\"Under cover of darkness, the spy slipped through the postern and vanished into the woods.\"",
    "Malory, \"Le Morte d'Arthur\""
  ],
  [
    "Caltrop",
    "/ˈkæl.trɒp/",
    "m",
    "A four-spiked iron weapon scattered on the ground so one point always faced up to maim horses.",
    "From OE \"calcatrippe\" (star-thistle, Latin \"calx\" heel + \"trappa\" trap).",
    "\"The English knights scattered bushels of iron caltrops to cripple the French charge.\"",
    "Account of the Battle of Bannockburn"
  ],
  [
    "Greatsword",
    "/ˈɡreɪt.sɔːrd/",
    "m",
    "A massive two-handed sword designed for sweeping cleaving blows in battlefield combat.",
    "Literal compound: great + sword. Required both hands on the extended hilt.",
    "\"The German landsknecht wielded his greatsword like a flail, clearing a path through the pikes.\"",
    "Renaissance warfare memoirs"
  ],
  [
    "Zweihänder",
    "/ˈtsvaɪˌhɛn.dər/",
    "m",
    "The German two-handed sword of the Renaissance with side-rings and parrying hooks.",
    "From German \"Zweihänder\" - two-hander (\"zwei\" two + \"Hand\" hand).",
    "\"The doppelner mercenary carried a six-foot Zweihänder across his broad shoulder.\"",
    "Military accounts of the Italian Wars"
  ],
  [
    "Estoc",
    "/ˈɛs.tɒk/",
    "m",
    "A rigid edgeless thrusting sword with a triangular or square blade designed to pierce armor.",
    "From French \"estoc\" (point, thrust, from Germanic *stok). In English: \"tuck.\"",
    "\"He drove the point of his estoc straight through the armpit gap in the Milanese harness.\"",
    "Chivalric duel records"
  ],
  [
    "Poignard",
    "/ˈpɒn.jərd/",
    "e",
    "A small, slender, sharply pointed dagger used for close thrusting.",
    "From French \"poignard,\" from \"poing\" (fist, Latin \"pugnus\").",
    "\"He concealed a Spanish poignard within the lining of his velvet cloak.\"",
    "Elizabethan tragedy"
  ],
  [
    "Misericorde",
    "/mɪˌzɛr.ɪˈkɔːrd/",
    "m",
    "A thin stiletto-like dagger used to deliver the death-blow of mercy to a mortally wounded knight.",
    "From French \"miséricorde\" (mercy), from Latin \"misericordia\" (pity, compassion).",
    "\"With a swift stroke of the misericorde through the visor, the dying knight's agony was ended.\"",
    "Chronicles of Agincourt"
  ],
  [
    "Rondel",
    "/ˈrɒn.dəl/",
    "m",
    "A medieval dagger with circular disc-shaped guards at both the pommel and hand-guard.",
    "From OF \"rondel\" - circular, from \"rond\" (round).",
    "\"A stout steel rondel hung from his girdle on a braided leather cord.\"",
    "Armory of the Royal Armouries"
  ],
  [
    "Glaive",
    "/ɡleɪv/",
    "m",
    "A polearm with a single-edged curved blade fixed to the end of a long staff.",
    "From OF \"glaive,\" from Latin \"gladius\" (sword).",
    "\"The guards at the palace gates crossed their gleaming glaives, barring all entrance.\"",
    "Chaucerian tales"
  ],
  [
    "Partisan",
    "/ˈpɑːr.tɪ.zən/",
    "m",
    "A polearm featuring a broad double-edged spearhead with two flaring side-projections.",
    "From French \"pertuisane,\" from Italian \"partigiana\" (weapon of the partisan/retainer).",
    "\"The king's bodyguard of yeomen bore bright partisans of damascened steel.\"",
    "Tudor court ceremonies"
  ],
  [
    "Lucerne-hammer",
    "/luːˈsɜːrnˌhæm.ər/",
    "m",
    "A three-pronged polearm combining a war hammer with a spike, celebrated in Swiss warfare.",
    "Named after the Swiss canton of Lucerne, where it was widely used.",
    "\"The Swiss infantry shattered cavalry helmets with the brutal spikes of the Lucerne-hammer.\"",
    "Swiss military annals"
  ],
  [
    "Morningstar",
    "/ˈmɔːr.nɪŋ.stɑːr/",
    "m",
    "A spiked club or mace with sharp steel spikes radiating from a heavy metal ball.",
    "Translation of German \"Morgenstern\" - named for its star-like radial spikes.",
    "\"A blow from the iron morningstar crushed the shield as though it were dry kindling.\"",
    "Medieval chronicles"
  ],
  [
    "Arquebus",
    "/ˈɑːr.kwɪ.bəs/",
    "e",
    "An early portable muzzle-loading firearm with a matchlock mechanism.",
    "From Middle Dutch \"hakebus\" - hook-gun (\"haak\" hook + \"bus\" gun, box).",
    "\"A company of Spanish arquebusiers opened fire from the hedgerow with deadly effect.\"",
    "Chronicles of the Low Countries"
  ],
  [
    "Saker",
    "/ˈseɪ.kər/",
    "e",
    "A medium-sized cannon used in 16th and 17th-century warfare and on naval vessels.",
    "Named after the saker falcon (tradition of naming ordnance after birds of prey).",
    "\"The English galleon fired a broadside of sakers into the towering Spanish carrack.\"",
    "Hakluyt, \"Principal Navigations\""
  ],
  [
    "Bombard",
    "/ˈbɒm.bɑːrd/",
    "m",
    "An early, massive iron or bronze cannon firing enormous stone cannonballs.",
    "From OF \"bombarde,\" from Latin \"bombus\" (deep humming sound, boom).",
    "\"The great bombard Mons Meg hurled stone balls weighing three hundred pounds at the castle.\"",
    "Scottish artillery records"
  ],
  [
    "Fauld",
    "/fɔːld/",
    "m",
    "A piece of plate armor consisting of curved steel hoops defending the hips and lower belly.",
    "From OF \"faude,\" of Germanic origin (cognate with \"fold\").",
    "\"The fauld was buckled over the breastplate, allowing flexible movement in the saddle.\"",
    "Armourers' company records"
  ],
  [
    "Tassets",
    "/ˈtæs.ɪts/",
    "m",
    "Steel plates suspended from the fauld to protect the upper thigh.",
    "From OF \"tassette\" - small purse or pocket, from \"tasse.\"",
    "\"The knight adjusted his articulated tassets before swinging into the heavy war-saddle.\"",
    "Tournament rules of Henry VIII"
  ],
  [
    "Aventail",
    "/ˈæv.ən.teɪl/",
    "m",
    "A curtain of chain mail attached to the rim of a bascinet helmet to protect the throat and neck.",
    "From OF \"esventail\" - air-hole, breathing vent, from \"esventer\" (to fan).",
    "\"His silvered aventail fell in graceful folds over his quilted aketon.\"",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Rerebrace",
    "/ˈrɪər.breɪs/",
    "m",
    "Armor designed to protect the upper arm between the shoulder and the elbow.",
    "From Anglo-Norman \"rere-bras\" - rear-arm (\"rere\" behind + \"bras\" arm).",
    "\"The blow glanced off the steel rerebrace, leaving the limb unharmed.\"",
    "Tournament rolls"
  ],
  [
    "Solleret",
    "/ˈsɒl.ə.rɛt/",
    "m",
    "A flexible shoe of overlapping steel plates with an elongated pointed toe.",
    "From OF \"soulier\" (shoe), diminutive \"souleret.\"",
    "\"The fashionable long pointed sollerets had to be chained to the knees during riding.\"",
    "History of medieval armor"
  ],
  [
    "Refectory",
    "/rɪˈfɛk.tər.i/",
    "m",
    "The communal dining hall of a monastery, convent, or religious house.",
    "From Late Latin \"refectorium,\" from \"reficere\" (to restore, refresh).",
    "\"The monks ate their modest meal of pottage and bread in the refectory in total silence.\"",
    "Rule of Saint Benedict"
  ],
  [
    "Scriptorium",
    "/skrɪpˈtɔːr.i.əm/",
    "m",
    "The writing-room in a medieval monastery where illuminated manuscripts were copied.",
    "From Medieval Latin \"scriptorium,\" from \"scribere\" (to write).",
    "\"Brother Thomas labored six hours a day in the scriptorium, illuminating the Gospel of John.\"",
    "Chronicles of Lindisfarne"
  ],
  [
    "Cellarer",
    "/ˈsɛl.ər.ər/",
    "m",
    "The monastic officer responsible for provisions, food supplies, wine cellars, and brewing.",
    "From Anglo-Norman \"celerer,\" from Latin \"cellarium\" (cellar, storehouse).",
    "\"The cellarer took tally of the casks of October ale stored in the vaulted undercroft.\"",
    "Abbey records of Bury St. Edmunds"
  ],
  [
    "Tonsure",
    "/ˈtɒn.ʃər/",
    "m",
    "The shaving of the crown of the head as a symbol of clerical or monastic dedication.",
    "From Latin \"tonsura\" - a shearing, clipping, from \"tondere\" (to clip).",
    "\"The young novice knelt before the abbot to receive the holy tonsure of the order.\"",
    "Bede, \"Ecclesiastical History\""
  ],
  [
    "Breviary",
    "/ˈbriː.vi.ər.i/",
    "m",
    "A liturgical book containing the daily prayers, hymns, and readings of the Divine Office.",
    "From Latin \"breviarium\" - summary, abridgment, from \"brevis\" (short).",
    "\"The priest paced the cloister garth, reading his hours from a small leather breviary.\"",
    "Chaucerian tales"
  ],
  [
    "Chantry",
    "/ˈtʃɑːn.tri/",
    "m",
    "An endowed chapel where priests sang daily masses for the souls of deceased benefactors.",
    "From OF \"chanterie,\" from \"chanter\" (to sing, Latin \"cantare\").",
    "\"The wealthy merchant bequeathed eighty pounds to endow a chantry in the parish church.\"",
    "Wills of the Prerogative Court of Canterbury"
  ],
  [
    "Reliquary",
    "/ˈrɛl.ɪ.kwər.i/",
    "m",
    "A decorative receptacle of gold, silver, or ivory used to house sacred relics of saints.",
    "From French \"reliquaire,\" from Late Latin \"reliquiae\" (remains, relics).",
    "\"The crystal reliquary contained a splinter of the True Cross encased in filigree gold.\"",
    "Inventories of Canterbury Cathedral"
  ],
  [
    "Thurible",
    "/ˈθjʊər.ɪ.bəl/",
    "m",
    "A metal censer suspended on chains in which incense is burned during solemn church rites.",
    "From OF \"thurible,\" from Latin \"thuribulum,\" from \"thus\" (incense, frankincense).",
    "\"Clouds of sweet-scented blue smoke billowed from the swinging silver thurible.\"",
    "Liturgical descriptions"
  ],
  [
    "Aspergillum",
    "/ˌæs.pərˈdʒɪl.əm/",
    "m",
    "A brush or perforated metal sphere on a handle used for sprinkling holy water.",
    "From Late Latin \"aspergillum,\" from \"aspergere\" (to sprinkle, scatter).",
    "\"The bishop dipped the silver aspergillum and sprinkled the four corners of the foundation stone.\"",
    "Consecration rites of Salisbury Cathedral"
  ],
  [
    "Angelus",
    "/ˈæn.dʒə.ləs/",
    "m",
    "A Roman Catholic devotion recited morning, noon, and evening at the sound of the church bell.",
    "From the opening Latin words: \"Angelus Domini nuntiavit Mariae\" (The Angel of the Lord declared).",
    "\"The peasants in the hayfield paused and bowed their heads at the sound of the evening Angelus.\"",
    "Millet's \"The Angelus\" commentaries"
  ],
  [
    "Shrift",
    "/ʃrɪft/",
    "m",
    "Confession made to a priest, followed by priestly absolution. \"Short shrift.\"",
    "From OE \"scrift\" - confession, penalty imposed by a priest, from \"scrīfan\" (to decree, shrive).",
    "\"Make short shrift; he longs to see your head. Dispatch, my lord.\"",
    "Shakespeare, \"Richard III\""
  ],
  [
    "Anathema",
    "/əˈnæθ.ɪ.mə/",
    "m",
    "A solemn ecclesiastical curse accompanied by excommunication from the Church.",
    "From Greek \"anathema\" - something devoted to evil, set apart for destruction.",
    "\"The Pope pronounced the dread sentence of anathema upon the defiant emperor.\"",
    "Papal bulls of the 13th century"
  ],
  [
    "Wastel-bread",
    "/ˈwɒs.təl.brɛd/",
    "m",
    "The finest, whitest wheat bread of medieval England, baked for the nobility.",
    "From OF \"gastel\" - cake, fine loaf (Modern French \"gâteau\"), from Germanic.",
    "\"She fed her lap-dogs with roast meat and wastel-bread dipped in fresh milk.\"",
    "Chaucer, \"Prologue of the Prioress\""
  ],
  [
    "Manchet",
    "/ˈmæn.tʃɪt/",
    "m",
    "A small round loaf of the finest white wheaten bread, served at the high table.",
    "Of uncertain origin; perhaps from French \"manchette\" (little cuff, handful).",
    "\"A fresh-baked manchet of wheat was set beside the golden salt-cellar for the prince.\"",
    "Tudor domestic accounts"
  ],
  [
    "Entremet",
    "/ˌɒn.trəˈmeɪ/",
    "m",
    "A decorative, theatrical dish or pageant served between courses at a great feast.",
    "From French \"entremets\" - between courses (\"entre\" between + \"mets\" dishes).",
    "\"The entremet featured a pastry castle from which live songbirds flew forth.\"",
    "Accounts of the Feast of the Pheasant"
  ],
  [
    "Malmsey",
    "/ˈmɑːm.zi/",
    "m",
    "A rich, sweet, heavy Greek white wine, famous as the vat in which Clarence was drowned.",
    "From Monemvasia (Napoli di Malvasia), a Byzantine fortress port in the Peloponnese.",
    "\"Drown him in the malmsey-butt in the next room!\"",
    "Shakespeare, \"Richard III\""
  ],
  [
    "Perry",
    "/ˈpɛr.i/",
    "m",
    "An alcoholic beverage made from the fermented juice of pears, similar to cider.",
    "From OF \"peré,\" from \"poire\" (pear, Latin \"pirum\").",
    "\"In the orchards of Worcestershire, the press groaned day and night squeezing cider and perry.\"",
    "Rural agricultural surveys"
  ],
  [
    "Mum",
    "/mʌm/",
    "e",
    "A strong, dark, spiced wheat beer originally brewed in Brunswick, Germany.",
    "From German \"Mumme,\" after the brewer Christian Mumme (c. 1492).",
    "\"A tankard of thick Brunswick mum will keep out the coldest river fog.\"",
    "Pepys, \"Diary\""
  ],
  [
    "Lamprey",
    "/ˈlæm.pri/",
    "m",
    "An eel-like jawless fish considered a supreme medieval culinary delicacy (King Henry I died of eating them).",
    "From Medieval Latin \"lampreda,\" from \"lambere\" (to lick) + \"petra\" (rock).",
    "\"King Henry I died at Saint-Denis-en-Lyons of a surfeit of lampreys against his physician's advice.\"",
    "Chronicles of Henry of Huntingdon"
  ],
  [
    "Subtlety",
    "/ˈsʌt.əl.ti/",
    "m",
    "An elaborate confection of sugar and marchpane molded into the likeness of castles, beasts, or saints.",
    "From ME \"sotelte,\" from Latin \"subtilitas\" (fine craft, ingenuity).",
    "\"The third course was crowned by a wondrous subtlety depicting Saint George slaying the dragon.\"",
    "Coronation banquet of Henry V"
  ],
  [
    "Voider",
    "/ˈvɔɪ.dər/",
    "m",
    "A large basket or wooden tray into which trenchers, scraps, and crumbs were swept from table.",
    "From Anglo-French \"voider\" (to empty, clear away).",
    "\"The pantler swept the discarded bones and broken bread into a deep wicker voider.\"",
    "Boke of Kervynge (1508)"
  ],
  [
    "Pantler",
    "/ˈpænt.lər/",
    "m",
    "The servant in charge of the pantry, bread, and table linen in a great household.",
    "From Anglo-Norman \"paneter,\" from Medieval Latin \"panetarius\" (baker, from \"panis\" bread).",
    "\"A good pantler must know how to pare the bread clean and chip the crust with neatness.\"",
    "The Babees Book"
  ],
  [
    "Ewerer",
    "/ˈjuː.ər.ər/",
    "m",
    "The household servant who brought water, ewers, and basins for the washing of hands before and after meals.",
    "From \"ewer\" (water-pitcher, Anglo-Norman \"ewere\") + \"-er.\"",
    "\"The ewerer knelt before the king, pouring rosewater over his hands into a gilded basin.\"",
    "Court ceremonial ordinances of Edward IV"
  ],
  [
    "Cup-bearer",
    "/ˈkʌpˌbɛər.ər/",
    "m",
    "An officer of high rank whose duty was to pour and serve wine to a monarch at the high table.",
    "Compound: cup + bearer. Often a position of highest trust due to poison fears.",
    "\"The king's young cup-bearer tasted the wine from the golden goblet before presenting it.\"",
    "King James Bible, Nehemiah 1:11"
  ],
  [
    "Macaroni",
    "/ˌmæk.əˈroʊ.ni/",
    "t",
    "An 18th-century English fop who affected exaggerated Continental fashions and Italian speech.",
    "From Italian \"maccheroni\" (pasta, which the young aristocrats ate on the Grand Tour).",
    "\"The macaronis strolled down St. James's with towering hair-pieces and tiny tricorn hats.\"",
    "The Spectator / 18th-century satires"
  ],
  [
    "Ramillies",
    "/ˈræm.ɪ.liːz/",
    "t",
    "A long braided wig with a large bow at top and bottom, named after Marlborough's 1706 victory.",
    "Named after the Battle of Ramillies (1706).",
    "\"The general appeared in full uniform, wearing his powdered Ramillies wig with distinction.\"",
    "Memoirs of Queen Anne's reign"
  ],
  [
    "Steinkirk",
    "/ˈsteɪn.kɜːrk/",
    "t",
    "A loosely knotted lace cravat with the ends twisted and tucked through a buttonhole.",
    "Named after the Battle of Steenkirk (1692), where French officers had no time to tie cravats.",
    "\"His Brussels lace steinkirk was tucked with studied negligence through the third buttonhole.\"",
    "Congreve, \"The Way of the World\""
  ],
  [
    "Jabot",
    "/ˈʒæb.oʊ/",
    "t",
    "A ruffle of lace or cambric worn down the front of a man's shirt.",
    "From French \"jabot\" (bird's crop, frill).",
    "\"A magnificent lace jabot spilled out from between the lapels of his embroidered velvet coat.\"",
    "Thackeray, \"Barry Lyndon\""
  ],
  [
    "Redingote",
    "/ˈrɛd.ɪŋ.ɡoʊt/",
    "t",
    "A long, heavy tailored traveling coat or riding coat with wide skirts and multiple capes.",
    "French borrowing and phonetic corruption of English \"riding-coat\"!",
    "\"He wrapped himself in a dark green redingote with triple capes against the driving rain.\"",
    "Balzac / Dickens"
  ],
  [
    "Roquelaure",
    "/ˈrɒk.ə.lɔːr/",
    "t",
    "A knee-length cloak with buttons down the front, named after the Duke of Roquelaure.",
    "Named after Antoine-Gaston de Roquelaure (1656-1738).",
    "\"Throwing his heavy roquelaure about his shoulders, he stepped out into the foggy London street.\"",
    "Dickens, \"A Tale of Two Cities\""
  ],
  [
    "Pelisse",
    "/pəˈliːs/",
    "t",
    "A woman's long, fitted outer coat, often edged or lined with fur, fashionable in the Regency.",
    "From OF \"pelisse,\" from Late Latin \"pellicia\" (fur garment, from \"pellis\" skin/pelt).",
    "\"Marianne put on her warm velvet pelisse and beaver bonnet for the morning walk to the post.\"",
    "Jane Austen, \"Sense and Sensibility\""
  ],
  [
    "Chatelaine",
    "/ˈʃæt.ə.leɪn/",
    "t",
    "A decorative clasp worn at the waist from which keys, scissors, thimbles, and watches were hung.",
    "From French \"châtelaine\" (mistress of a chateau, keeper of the castle keys).",
    "\"The jingling of her heavy silver chatelaine announced the housekeeper's approach down the passage.\"",
    "Charlotte Bronte, \"Jane Eyre\""
  ],
  [
    "Sedan-chair",
    "/sɪˈdænˌtʃɛər/",
    "t",
    "An enclosed chair for one person, carried on two horizontal poles by two chairmen.",
    "Named after the French town of Sedan, where they were first constructed.",
    "\"Two sturdy Irish chairmen bore the lady's sedan-chair through the slush of Covent Garden.\"",
    "Smollett, \"Humphry Clinker\""
  ],
  [
    "Hansom",
    "/ˈhæn.səm/",
    "t",
    "A two-wheeled horse-drawn carriage with the driver seated high behind the cab (the \"gondola of London\").",
    "Patented in 1834 by architect Joseph Aloysius Hansom.",
    "\"A hansom cab dashed up to 221B Baker Street, the horse's hooves ringing on the cobbles.\"",
    "Conan Doyle, \"A Study in Scarlet\""
  ],
  [
    "Brougham",
    "/ˈbruː.əm/",
    "t",
    "A closed, four-wheeled horse-drawn carriage for two or four passengers, named for Lord Brougham.",
    "Designed in 1838 for former Lord Chancellor Henry Brougham.",
    "\"His dark green brougham waited patiently beneath the gas lamp outside the Athenaeum Club.\"",
    "Oscar Wilde, \"The Picture of Dorian Gray\""
  ],
  [
    "Landau",
    "/ˈlæn.dɔː/",
    "t",
    "A luxury four-wheeled carriage with a divided top that could be folded back from both ends.",
    "Named after the German city of Landau, where it was first built.",
    "\"The dowager countess drove out in her barouche-landau with two powdered footmen behind.\"",
    "Jane Austen, \"Emma\""
  ],
  [
    "Phaeton",
    "/ˈfeɪ.ə.tən/",
    "t",
    "A light, open, high four-wheeled carriage, sporty and notoriously dangerous to drive.",
    "Named after Phaethon, son of Helios in Greek mythology, who crashed the chariot of the sun!",
    "\"The dashing young baronet overturned his high-perched phaeton while racing through Hyde Park.\"",
    "Regency romance novels"
  ],
  [
    "Penny-dreadful",
    "/ˈpɛn.iˌdrɛd.fəl/",
    "t",
    "A cheap, sensational weekly serial publication featuring gothic horrors, murders, and highwaymen.",
    "From its cost (one penny) + \"dreadful\" (its lurid and gruesome content).",
    "\"The boy concealed a greasy copy of a penny-dreadful beneath his Latin grammar.\"",
    "Victorian memoirs of boyhood"
  ],
  [
    "Chapbook",
    "/ˈtʃæp.bʊk/",
    "t",
    "A small, cheap paper booklet of popular ballads, tales, or folklore sold by itinerant chapmen.",
    "From \"chapman\" (peddler, OE \"cēapman\" market-man) + \"book.\"",
    "\"The peddler sold chapbooks of Robin Hood and Jack the Giant-Killer at every cottage door.\"",
    "Folklore studies"
  ],
  [
    "Flunkey",
    "/ˈflʌŋ.ki/",
    "t",
    "A male servant in livery; a fawning sycophant, obsequious hanger-on.",
    "Scottish slang, probably from \"flank\" (one who attends at one's flank/side).",
    "\"A powdered flunkey in crimson breeches opened the heavy mahogany doors with a sneer.\"",
    "Thackeray, \"Yellowplush Papers\""
  ],
  [
    "Groom",
    "/ɡruːm/",
    "m",
    "A servant who looks after horses; also an attendant of the royal household.",
    "From ME \"grom\" (boy, male servant), of uncertain Germanic origin.",
    "\"The head groom brought the chestnut hunter to the mounting block at eight sharp.\"",
    "Surtees, \"Jorrocks' Jaunts\""
  ],
  [
    "Postilion",
    "/pɒsˈtɪl.jən/",
    "t",
    "A rider mounted on the left-hand leading horse of a carriage team, guiding the horses.",
    "From French \"postillon,\" from Italian \"postiglione\" (post-boy, courier).",
    "\"The postilion cracked his whip and the four horses broke into a swift trot.\"",
    "Scott, \"The Heart of Midlothian\""
  ],
  [
    "Jarvey",
    "/ˈdʒɑːr.vi/",
    "t",
    "A hackney-coach driver in London or Dublin.",
    "From the proper name \"Jarvis\" (St. Gervase was humorously adopted as the patron of drivers).",
    "\"The old jarvey cursed the thick pea-souper fog that had blinded all traffic on the bridge.\"",
    "Victorian street sketches"
  ],
  [
    "Admonish",
    "/ədˈmɒn.ɪʃ/",
    "m",
    "To warn, counsel, or scold someone gently but firmly against a fault.",
    "From OF \"amonester,\" from Late Latin \"admonestare,\" from \"admonere\" (to warn).",
    "\"The magistrate admonished the young rogue to keep better company henceforth.\"",
    "Victorian quarter-sessions records"
  ],
  [
    "Castigate",
    "/ˈkæs.tɪ.ɡeɪt/",
    "e",
    "To punish, criticize, or reprimand severely; to scourge.",
    "From Latin \"castigare\" - to make pure, chastise (\"castus\" pure + \"agere\" drive).",
    "\"The schoolmaster castigated the truant with six stinging strokes of the birch.\"",
    "Victorian school narratives"
  ],
  [
    "Hoodwink",
    "/ˈhʊd.wɪŋk/",
    "e",
    "To deceive or trick someone (literally to blindfold someone with a hood).",
    "From \"hood\" + \"wink\" (to close the eyes). Originally used in falconry.",
    "\"I will not be hoodwinked by the fine promises of a company promoter!\"",
    "Shakespeare, \"All's Well That Ends Well\""
  ],
  [
    "Fleece",
    "/fliːs/",
    "m",
    "To strip someone of money or property through fraud or exorbitant charges (like shearing sheep).",
    "From OE \"flēos\" (wool of a sheep). Used figuratively since the 14th century.",
    "\"The gambling sharpers fleeced the greenhorn of five hundred guineas in a single night.\"",
    "Fielding, \"Tom Jones\""
  ],
  [
    "Raze",
    "/reɪz/",
    "m",
    "To completely destroy, level to the ground, or demolish a town, fortress, or building.",
    "From OF \"raser\" - to scrape clean, shave (Latin \"radere\" to scrape).",
    "\"The conqueror razed the rebellious fortress until not one stone stood upon another.\"",
    "Gibbon, \"Decline and Fall\""
  ],
  [
    "Quell",
    "/kwɛl/",
    "m",
    "To put an end to rebellion or disorder, typically by force; to suppress.",
    "From OE \"cwellan\" - to kill, slay. Cognate with German \"quälen\" (to torment).",
    "\"The king sent three thousand archers to quell the peasant uprising in Kent.\"",
    "Holinshed, \"Chronicles\""
  ],
  [
    "Abash",
    "/əˈbæʃ/",
    "m",
    "To make someone feel embarrassed, disconcerted, or ashamed.",
    "From Anglo-Norman \"abaissier\" - to lose one's composure, from OF \"esbaïr\" (to astonish).",
    "\"The impudent fellow was completely abashed by the lady's icy rebuke.\"",
    "Milton, \"Paradise Lost\""
  ],
  [
    "Lily-livered",
    "/ˈlɪl.iˌlɪv.ərd/",
    "e",
    "Cowardly, lacking courage (the liver was thought the seat of courage; a pale liver had no blood).",
    "From \"lily\" (white, bloodless) + \"livered.\"",
    "\"Go, prick thy face, and over-red thy fear, thou lily-liver'd boy!\"",
    "Shakespeare, \"Macbeth\""
  ],
  [
    "Obsequious",
    "/əbˈsiː.kwi.əs/",
    "e",
    "Obedient or attentive to an excessive or servile degree; fawningly submissive.",
    "From Latin \"obsequiosus\" - compliant, from \"obsequi\" (to follow, comply).",
    "\"An obsequious shopkeeper who rubbed his hands and bowed at every syllable.\"",
    "Dickens, \"Nicholas Nickleby\""
  ],
  [
    "Buxom",
    "/ˈbʌk.səm/",
    "m",
    "Originally obedient, pliant, gracious; later plump, healthy-looking, full-bosomed, and cheerful.",
    "From ME \"buhsum\" - pliant, yielding (from OE \"būgan\" to bend + \"-some\").",
    "\"A buxom barmaid with rosy cheeks and a laugh that rang above the clatter of tankards.\"",
    "Washington Irving, \"Sketch Book\""
  ],
  [
    "Dowdy",
    "/ˈdaʊ.di/",
    "t",
    "Unfashionable, dull, and lacking style or neatness in dress.",
    "From ME \"doude\" (an untidy, slovenly woman), of obscure origin.",
    "\"She appeared in a dowdy bombazine gown that belonged to her grandmother's era.\"",
    "Victorian society novels"
  ],
  [
    "Frowsy",
    "/ˈfraʊ.zi/",
    "t",
    "Scruffy, slovenly, uncared-for in appearance; having a stale, musty smell.",
    "17th-century colloquialism of uncertain origin.",
    "\"A frowsy old clerk peered over his spectacles from behind a mountain of dusty parchments.\"",
    "Dickens, \"Bleak House\""
  ],
  [
    "Raw-boned",
    "/ˈrɔː.boʊnd/",
    "t",
    "Having a lean, gaunt, bony frame with little flesh covering the prominent bones.",
    "Compound: raw + boned.",
    "\"A tall, raw-boned Yorkshireman who could swing an axe with the best in the parish.\"",
    "Emily Bronte, \"Wuthering Heights\""
  ],
  [
    "Portly",
    "/ˈpɔːrt.li/",
    "e",
    "Originally stately, dignified in carriage; later stout, corpulent, having a plump belly.",
    "From Anglo-Norman \"porte\" (carriage, bearing, Latin \"portare\" to carry).",
    "\"A portly gentleman in a buff waistcoat beamed upon the assembled dinner guests.\"",
    "Dickens, \"A Christmas Carol\""
  ],
  [
    "Staunch",
    "/stɔːntʃ/",
    "m",
    "Loyal, steadfast, firm, dependable; watertight and sound (of a ship).",
    "From OF \"estanche\" (watertight, firm), from \"estancher\" (to stop, staunch).",
    "\"He remained a staunch friend through all the bitter days of adversity.\"",
    "Scott, \"Rob Roy\""
  ],
  [
    "Pertinacious",
    "/ˌpɜːr.tɪˈneɪ.ʃəs/",
    "e",
    "Holding firmly to an opinion or course of action; stubbornly resolute.",
    "From Latin \"pertinax\" - tenacious, persistent (\"per-\" thorough + \"tenax\" holding).",
    "\"With pertinacious stubbornness, the old antiquary defended his pet theory.\"",
    "Walter Scott, \"The Antiquary\""
  ],
  [
    "Dolorous",
    "/ˈdɒl.ər.əs/",
    "m",
    "Feeling or expressing great sorrow, grief, or distress; mournful.",
    "From OF \"doloros,\" from Latin \"dolorosus,\" from \"dolor\" (pain, sorrow).",
    "\"A dolorous cry echoed through the vaulted corridors of the abandoned abbey.\"",
    "Malory, \"Le Morte d'Arthur\""
  ],
  [
    "Baleful",
    "/ˈbeɪl.fʊl/",
    "m",
    "Threatening harm; menacing, baneful, full of deadly malice.",
    "From OE \"bealuful\" - full of evil, ruin, destruction (\"bealu\" evil + \"ful\").",
    "\"He cast a baleful glare at his accusers as the iron gyves were locked upon his wrists.\"",
    "Milton, \"Paradise Lost\""
  ],
  [
    "Pernicious",
    "/pərˈnɪʃ.əs/",
    "e",
    "Having a harmful, destructive, or fatal effect, especially in a gradual or subtle way.",
    "From Latin \"perniciosus\" - ruinous, destructive (\"per-\" intensive + \"nex\" death).",
    "\"A pernicious doctrine that has corrupted the loyalty of thousands.\"",
    "Shakespeare, \"Henry VIII\""
  ],
  [
    "Inexorable",
    "/ɪnˈɛk.sər.ə.bəl/",
    "e",
    "Impossible to stop, prevent, or persuade by plea; relentless.",
    "From Latin \"inexorabilis\" - not to be moved by prayer (\"in-\" not + \"exorare\" to prevail upon).",
    "\"The inexorable march of time had turned the proudest palaces to dust.\"",
    "Gibbon, \"Decline and Fall\""
  ],
  [
    "Parsimonious",
    "/ˌpɑːr.sɪˈmoʊ.ni.əs/",
    "e",
    "Extremely unwilling to spend money or use resources; stingy, frugal to excess.",
    "From Latin \"parsimonia\" (thrift, frugality), from \"parcere\" (to spare).",
    "\"His parsimonious habits were such that he wrote on the margins of old letters to save paper.\"",
    "Victorian character sketches"
  ],
  [
    "Chasm",
    "/ˈkæz.əm/",
    "e",
    "A deep fissure or abyss in the earth, rock, or other surface; a profound gulf.",
    "From Latin \"chasma,\" from Greek \"chasma\" (gaping opening, wide yawn).",
    "\"A dizzying chasm yawned between the two sheer cliffs of the precipice.\"",
    "Shelley, \"Mont Blanc\""
  ],
  [
    "Aether",
    "/ˈiː.θər/",
    "m",
    "The clear upper sky, the air of the heavens beyond the clouds; divine atmosphere.",
    "From Greek \"aither\" - upper air, pure light, from \"aithein\" (to burn, shine).",
    "\"The eagle soared into the pure azure of the boundless aether.\"",
    "Milton, \"Paradise Lost\""
  ],
  [
    "Maelstrom",
    "/ˈmeɪl.strɒm/",
    "e",
    "A powerful, destructive whirlpool in a sea or river; a state of confused turmoil.",
    "From early Dutch \"maelstrom\" - grinding stream (\"malen\" to grind + \"stroom\" stream).",
    "\"The fishing skiff was drawn inexorably toward the roaring vortex of the maelstrom.\"",
    "Poe, \"A Descent into the Maelström\""
  ],
  [
    "Miasma",
    "/maɪˈæz.mə/",
    "t",
    "An unwholesome atmosphere or vapor rising from swamps and sewers, once thought to cause disease.",
    "From Greek \"miasma\" - pollution, stain, defilement, from \"miainein\" (to pollute).",
    "\"A deadly miasma hung over the stagnant fens as night fell.\"",
    "Dickens, \"Great Expectations\""
  ],
  [
    "Compline",
    "/ˈkɒm.plɪn/",
    "m",
    "The final church service of the day in Christian monastic tradition, said before retiring.",
    "From OF \"complie,\" from Late Latin \"completa\" (hora) - the completed hour.",
    "\"The tolling of the compline bell called the weary monks to their final prayers of the day.\"",
    "Monastic chronicles"
  ],
  [
    "Vassal",
    "/ˈvæs.əl/",
    "m",
    "A person granted the use of land in return for rendering homage and allegiance to a feudal lord.",
    "From Medieval Latin \"vassallus,\" from Celtic \"wasso-\" (young man, servant).",
    "\"The vassal pledged his sword, his wealth, and his life in service to the duke.\"",
    "Feudal charters of Normandy"
  ],
  [
    "Bailiwick",
    "/ˈbeɪ.lɪ.wɪk/",
    "m",
    "The district or jurisdiction of a bailiff; one's specific sphere of authority or expertise.",
    "From \"bailiff\" + \"wick\" (OE \"wīc\" village, dwelling, jurisdiction).",
    "\"This crime fell outside the bailiwick of the county sheriff.\"",
    "Blackstone, \"Commentaries\""
  ],
  [
    "Freebench",
    "/ˈfriː.bɛntʃ/",
    "m",
    "A widow's right to an estate held by copyhold during her lifetime and chaste widowhood.",
    "From \"free\" + \"bench\" (seat on the court of the manor).",
    "\"By the custom of the manor, she held her freebench in the farmstead.\"",
    "Manorial customs of Somerset"
  ],
  [
    "Pinfold",
    "/ˈpɪn.foʊld/",
    "m",
    "A village pound or enclosure for stray cattle and beasts until a fine was paid.",
    "From OE \"pund\" (pound, enclosure) + \"fold.\"",
    "\"The hayward drove the stray bullocks straight into the parish pinfold.\"",
    "Manorial court rolls"
  ],
  [
    "Tithing-man",
    "/ˈtaɪ.ðɪŋ.mæn/",
    "m",
    "The head or chief officer of a tithing under the Anglo-Saxon frankpledge system.",
    "From \"tithing\" (group of ten households) + \"man.\"",
    "\"The tithing-man presented two youths who had broken the king's peace.\"",
    "Hundred Rolls of Edward I"
  ],
  [
    "Outlawry",
    "/ˈaʊt.lɔː.ri/",
    "m",
    "The act of placing an offender outside the protection of the law (\"wolf's head\").",
    "From OE \"ūtlaga\" (outlaw, from Old Norse \"útlagi\").",
    "\"Sentence of outlawry was declared against the rebellious earl at the shire-moot.\"",
    "Legal records of Henry II"
  ],
  [
    "Sanctuary",
    "/ˈsæŋk.tʃʊ.ər.i/",
    "m",
    "A sacred place offering legal immunity to fugitives and debtors under canon law.",
    "From OF \"sanctuaire,\" from Latin \"sanctuarium,\" from \"sanctus\" (holy).",
    "\"The murderer fled into the abbey church, taking sanctuary at the high altar.\"",
    "Chronicles of Saint Albans"
  ],
  [
    "Benefit-of-clergy",
    "/ˈbɛn.ɪ.fɪt.əvˈklɜːr.dʒi/",
    "m",
    "The medieval privilege of clerics to be tried only by ecclesiastical courts, proved by reading the \"neck-verse.\"",
    "From \"benefit\" + \"clergy.\" The 51st Psalm was read to prove literacy.",
    "\"He claimed his benefit of clergy and escaped the gallows by reading the Latin verse.\"",
    "State trials of England"
  ],
  [
    "Carucage",
    "/ˈkær.ʊ.kɪdʒ/",
    "m",
    "A medieval land tax assessed on the carucate or plough-team of land.",
    "From Medieval Latin \"carucagium,\" from \"caruca\" (plough).",
    "\"King Richard levied a heavy carucage of five shillings on every ploughland.\"",
    "Chronicle of Roger of Hoveden"
  ],
  [
    "Gavelkind",
    "/ˈɡæv.əl.kaɪnd/",
    "m",
    "A land tenure system in Kent where property was divided equally among all sons upon the father's death.",
    "From OE \"gafol\" (rent, tribute) + \"gecynd\" (nature, race).",
    "\"By gavelkind, the small farm was partitioned among four brothers.\"",
    "Legal antiquities of Kent"
  ],
  [
    "Boon-work",
    "/ˈbuːn.wɜːrk/",
    "m",
    "Unpaid seasonal agricultural labor owed by serfs to their lord during harvest.",
    "From \"boon\" (favor, petition, ON \"bón\") + \"work.\"",
    "\"All the cottars were summoned for three days of boon-work in the wheat harvest.\"",
    "Manorial rolls of Ramsey Abbey"
  ],
  [
    "Corvée",
    "/kɔːrˈveɪ/",
    "m",
    "Unpaid forced labor demanded by a feudal lord or government on roads and estates.",
    "From OF \"corvee,\" from Late Latin \"corrogata\" (work demanded by request).",
    "\"The peasants were compelled to perform corvée upon the castle moat.\"",
    "Feudal records of Aquitaine"
  ],
  [
    "Chivalry",
    "/ˈʃɪv.əl.ri/",
    "m",
    "The medieval knightly system with its religious, moral, and social code of honor and courtesy.",
    "From OF \"chevalerie\" (knighthood, horsemanship), from \"cheval\" (horse).",
    "\"Chivalry demanded that a knight protect the weak and speak the truth always.\"",
    "Malory, \"Le Morte d'Arthur\""
  ],
  [
    "Heraldry",
    "/ˈhɛr.əl.dri/",
    "m",
    "The system of designing, recording, and blazoning coats of arms and badges.",
    "From OF \"heraudie,\" from \"heraut\" (herald).",
    "\"The intricacies of heraldry distinguished friend from foe in the confusion of battle.\"",
    "Guillim, \"Display of Heraldry\""
  ],
  [
    "Blazon",
    "/ˈbleɪ.zən/",
    "m",
    "A formal heraldic description or painting of a coat of arms.",
    "From OF \"blason\" (shield, coat of arms), of Germanic origin.",
    "\"He bore as his blazon a silver falcon upon an azure field.\"",
    "Froissart, \"Chronicles\""
  ],
  [
    "Escutcheon",
    "/ɪˈskʌtʃ.ən/",
    "m",
    "A shield or shield-shaped emblem bearing a coat of arms. \"A blot on the escutcheon.\"",
    "From OF \"escuchon,\" from Latin \"scutum\" (shield).",
    "\"He would suffer death rather than permit a stain upon his family's escutcheon.\"",
    "Sir Walter Scott, \"Ivanhoe\""
  ],
  [
    "Knight-errant",
    "/ˌnaɪtˈɛr.ənt/",
    "m",
    "A medieval knight wandering in search of chivalric adventures to display his valor.",
    "From \"knight\" + \"errant\" (wandering, from Latin \"errare\" to wander).",
    "\"The knight-errant rode through the perilous forest, seeking damsels in distress.\"",
    "Don Quixote / Arthurian romance"
  ],
  [
    "Paladin",
    "/ˈpæl.ə.dɪn/",
    "m",
    "One of the twelve heroic peers of Charlemagne's court; a chivalrous champion of justice.",
    "From French \"paladin,\" from Italian \"paladino,\" from Latin \"palatinus\" (of the palace).",
    "\"Roland was the greatest paladin of the Emperor, fearless in the face of death.\"",
    "Song of Roland"
  ],
  [
    "Squire",
    "/skwaɪər/",
    "m",
    "A young nobleman serving a knight as armor-bearer before knighthood; later a country gentleman.",
    "From OF \"escuier\" - shield-bearer (Latin \"scutarius,\" from \"scutum\" shield).",
    "\"The squire polished his master's helm and fed the war-horses before dawn.\"",
    "Chaucer, \"Canterbury Tales\""
  ],
  [
    "Page",
    "/peɪdʒ/",
    "m",
    "A young boy of noble birth training in courtly manners as an attendant in a castle.",
    "From OF \"page,\" from Italian \"paggio\" (servant, boy).",
    "\"The page knelt gracefully, presenting the cup of spiced wine upon a silver salver.\"",
    "Court records of Edward IV"
  ],
  [
    "Herald",
    "/ˈhɛr.əld/",
    "m",
    "An official employed to carry state messages, supervise tournaments, and record armorial bearings.",
    "From OF \"heraut,\" of Germanic origin (*harjawald, army ruler).",
    "\"The king's herald blew three long blasts upon his trumpet before reading the proclamation.\"",
    "Shakespeare, \"Henry V\""
  ],
  [
    "Seneschal-of-the-household",
    "/ˈsɛn.ə.ʃəl/",
    "m",
    "The grand officer charged with the general superintendence of a royal court.",
    "From Frankish *siniscalh (senior servant).",
    "\"The seneschal carried his white wand of office before the royal procession.\"",
    "State papers of the Plantagenets"
  ],
  [
    "Almoner-royal",
    "/ˈɑːl.mə.nər/",
    "m",
    "The high cleric appointed to distribute the sovereign's daily charity and alms to the poor.",
    "From OF \"almosnier\" (alms-giver).",
    "\"The Lord High Almoner distributed silver pennies on Maundy Thursday.\"",
    "Royal household accounts"
  ],
  [
    "Grand-pantler",
    "/ˈpænt.lər/",
    "m",
    "The hereditary officer charged with presiding over the bread, salt, and table linens at coronations.",
    "From Anglo-Norman \"paneter.\"",
    "\"The Grand Pantler presented the royal salt-cellar of gold and rubies to the newly crowned monarch.\"",
    "Coronation rolls of Westminster"
  ],
  [
    "Master-of-the-horse",
    "/ˈmæs.tər/",
    "m",
    "The great officer of state managing all matters relating to royal horses, stables, and hounds.",
    "Literal English title of state dignity.",
    "\"The Master of the Horse rode immediately behind the Queen's gilded state carriage.\"",
    "Tudor court ceremonies"
  ],
  [
    "Gleeman",
    "/ˈɡliː.mən/",
    "m",
    "An itinerant minstrel or entertainer in Anglo-Saxon and early medieval England.",
    "From OE \"glīwman\" - man of glee, music, or mirth (\"glīw\" joy + \"man\").",
    "\"The gleeman played his harp beside the roaring hearth, singing of battles won.\"",
    "Old English poetic fragments"
  ],
  [
    "Prioress",
    "/ˈpraɪ.ə.rɛs/",
    "m",
    "The female superior of a priory or second in rank to an abbess in a nunnery.",
    "From Anglo-Norman \"prioresse,\" from Latin \"prior\" (former, superior).",
    "\"There was also a Nun, a Prioress, that of her smiling was full simple and coy.\"",
    "Chaucer, \"General Prologue\""
  ],
  [
    "Ostiary",
    "/ˈɒs.ti.ər.i/",
    "m",
    "The lowest of the minor orders in the medieval Church; a door-keeper or porter.",
    "From Latin \"ostiarius\" - doorkeeper, from \"ostium\" (door, entrance).",
    "\"The ostiary opened the heavy oak church door at the first stroke of Prime.\"",
    "Ordination records of York"
  ],
  [
    "Subdeacon",
    "/sʌbˈdiː.kən/",
    "m",
    "An ordained minister ranking immediately below a deacon in the medieval liturgy.",
    "From Latin \"subdiaconus\" (\"sub-\" under + \"diaconus\" deacon).",
    "\"The subdeacon carried the book of the Epistles with reverent hands.\"",
    "Sarum Missal rubrics"
  ],
  [
    "Thurifer",
    "/ˈθjʊər.ɪ.fər/",
    "m",
    "The acolyte or altar server who carries the thurible (censer) in liturgical processions.",
    "From Latin \"thurifer\" - incense-bearer (\"thus\" incense + \"ferre\" to carry).",
    "\"The thurifer swung the smoking censer, filling the sanctuary with clouds of fragrance.\"",
    "Ceremonial of the Mass"
  ],
  [
    "Crucifer",
    "/ˈkruː.sɪ.fər/",
    "m",
    "The person appointed to carry the processional cross at the head of a religious procession.",
    "From Latin \"crucifer\" - cross-bearer (\"crux\" cross + \"ferre\" to carry).",
    "\"Behind the crucifer walked the long train of choirboys chanting the litany.\"",
    "Cathedral processionals"
  ],
  [
    "Mendicant",
    "/ˈmɛn.dɪ.kənt/",
    "m",
    "A member of a religious begging order (such as the Franciscans or Dominicans) who took vows of absolute poverty.",
    "From Latin \"mendicans,\" from \"mendicare\" (to beg, from \"mendus\" defect).",
    "\"A mendicant friar walked barefoot through the winter snow, begging bread for the sick.\"",
    "Piers Plowman"
  ],
  [
    "Scapular",
    "/ˈskæp.jʊ.lər/",
    "m",
    "A monastic garment consisting of a long strip of cloth hanging front and back from the shoulders.",
    "From Late Latin \"scapulare,\" from Latin \"scapula\" (shoulder-blade).",
    "\"The brown woolen scapular of the Carmelite habit fell almost to the sandals.\"",
    "Monastic customaries"
  ],
  [
    "Cincture",
    "/ˈsɪŋk.tʃər/",
    "m",
    "A rope, cord, or belt worn around the waist to secure a monastic habit or clerical alb.",
    "From Latin \"cinctura\" - a girding, from \"cingere\" (to gird).",
    "\"A knotted white hemp cincture bound the coarse brown robe about his loins.\"",
    "Franciscan annals"
  ],
  [
    "Antiphonary",
    "/ænˈtɪf.ə.nər.i/",
    "m",
    "A large liturgical choir book containing the responsories and antiphons sung in choir.",
    "From Medieval Latin \"antiphonarium,\" from Greek \"antiphona\" (responsive song).",
    "\"The choir monks stood around the giant illuminated antiphonary resting on the brass lectern.\"",
    "Monastic library records"
  ],
  [
    "Gradual",
    "/ˈɡrædʒ.ʊ.əl/",
    "m",
    "A liturgical book containing the musical chants of the Mass; the chant sung after the Epistle.",
    "From Medieval Latin \"graduale,\" from Latin \"gradus\" (step - sung from the pulpit steps).",
    "\"The cantor sang the gradual in a clear, resonant tenor from the lectern steps.\"",
    "Liturgical treatises"
  ],
  [
    "Pyx",
    "/pɪks/",
    "m",
    "A small round container of gold or silver in which the consecrated Eucharistic host is carried to the sick.",
    "From Latin \"pyxis,\" from Greek \"pyxis\" (boxwood box, from \"pyxos\" box tree).",
    "\"The priest bore the golden pyx close against his breast beneath his cloak.\"",
    "Sacramental manuals"
  ],
  [
    "Asperges",
    "/æsˈpɜːr.dʒiːz/",
    "m",
    "The ceremonial sprinkling of an altar, clergy, and congregation with holy water before Mass.",
    "From the opening Latin words: \"Asperges me, Domine, hyssopo\" (Thou shalt sprinkle me with hyssop).",
    "\"At the solemn Asperges, droplets of holy water fell upon the bowed heads of the faithful.\"",
    "Roman Missal"
  ],
  [
    "Lauds",
    "/lɔːdz/",
    "m",
    "The morning service of the Divine Office, sung at daybreak and characterized by psalms of praise.",
    "From Latin \"laudes\" (praises), from \"laus\" (praise).",
    "\"At the sounding of Lauds, the eastern sky grew pale behind the abbey arches.\"",
    "Rule of Saint Benedict"
  ],
  [
    "Prime",
    "/praɪm/",
    "m",
    "The liturgical office appointed for the first hour of the day (approximately 6:00 a.m.).",
    "From Latin \"prima\" (hora) - the first hour.",
    "\"After the office of Prime, the monks repaired to the chapter-house for the daily reading.\"",
    "Monastic customaries"
  ],
  [
    "Terce",
    "/tɜːrs/",
    "m",
    "The liturgical service appointed for the third hour of the day (approximately 9:00 a.m.).",
    "From Latin \"tertia\" (hora) - the third hour.",
    "\"The bell for Terce chimed sweetly across the dewy monastery orchard.\"",
    "Horarium of Fountains Abbey"
  ],
  [
    "Sext",
    "/sɛkst/",
    "m",
    "The liturgical service of the Divine Office appointed for the sixth hour (noon).",
    "From Latin \"sexta\" (hora) - the sixth hour.",
    "\"At Sext the laborers laid down their spades and ate their mid-day crust in the shade.\"",
    "Monastic labor accounts"
  ],
  [
    "Nones",
    "/noʊnz/",
    "m",
    "The liturgical hour appointed for the ninth hour of the day (approximately 3:00 p.m.).",
    "From Latin \"nona\" (hora) - the ninth hour. Root of the word \"noon\"!",
    "\"The bell for Nones was rung, recalling the hour of the Saviour's death on Calvary.\"",
    "Breviary rubrics"
  ],
  [
    "Vespers",
    "/ˈvɛs.pərz/",
    "m",
    "The evening liturgical prayer service of the Western Church, celebrated at sunset.",
    "From Latin \"vespera\" (evening), cognate with Greek \"hesperos.\"",
    "\"The solemn chanting of Vespers floated out from the illuminated windows of the cathedral.\"",
    "Chaucer, \"Second Nun's Tale\""
  ],
  [
    "Interdict",
    "/ˈɪn.tər.dɪkt/",
    "m",
    "A papal decree prohibiting church services, sacraments, and Christian burial in a rebellious country.",
    "From Latin \"interdictum\" - prohibition, from \"interdicere\" (to forbid).",
    "\"Under the dread papal interdict of King John, all church bells fell silent throughout England.\"",
    "Chronicles of Roger of Wendover"
  ],
  [
    "Chivalric",
    "/ˈʃɪv.əl.rɪk/",
    "m",
    "Relating to the knightly code of honor, courtly gallantry, and courage.",
    "From OF \"chevalerie\" (cavalry, knighthood).",
    "\"A chivalric vow forbade the knight to taste wine until he had delivered the besieged citadel.\"",
    "Sir Walter Scott"
  ],
  [
    "Querne",
    "/kwɜːrn/",
    "m",
    "A primitive stone hand-mill for grinding grain between two circular stones.",
    "From OE \"cweorn\" - mill. Cognate with German \"Kurne.\"",
    "\"She ground a measure of barley in the stone querne for the morning bread.\"",
    "Early English domestic records"
  ],
  [
    "Coif",
    "/kwɔɪf/",
    "m",
    "A close-fitting linen cap tied under the chin, worn by men, women, and judges.",
    "From OF \"coife,\" from Late Latin \"cofia\" (helmet, cap, of Germanic origin).",
    "\"The serjeant-at-law wore his white silk coif as a badge of his high legal dignity.\"",
    "Legal costume histories"
  ],
  [
    "Girdle",
    "/ˈɡɜːr.dəl/",
    "m",
    "A belt or cord worn around the waist to secure clothing and suspend a pouch or keys.",
    "From OE \"gyrdel,\" related to \"gird\" and \"garden.\"",
    "\"From her gold-embroidered girdle hung an inkhorn, a pair of shears, and a silver key.\"",
    "Medieval inventories"
  ],
  [
    "Gipsire",
    "/ˈdʒɪp.saɪər/",
    "m",
    "A pouch or purse worn suspended from the girdle in the 14th and 15th centuries.",
    "From OF \"gibeciere\" - game-bag, from \"gibe\" (bundle, game).",
    "\"An anelace and a gipsire all of silk hung at his girdle, white as morning milk.\"",
    "Chaucer, \"Canterbury Tales\""
  ],
  [
    "Samite",
    "/ˈsæm.aɪt/",
    "m",
    "A rich medieval silk fabric, often interwoven with gold or silver threads.",
    "From OF \"samit,\" from Medieval Latin \"samitum,\" from Greek \"hexamiton\" (six-threaded).",
    "\"An arm rose from the lake, clothed in white samite, mystic, wonderful.\"",
    "Tennyson, \"Morte d'Arthur\""
  ],
  [
    "Fustian",
    "/ˈfʌs.tʃən/",
    "m",
    "A thick, durable twilled cloth of cotton and linen; also bombastic, pompous speech.",
    "From OF \"fustaigne,\" from Medieval Latin \"fustaneum,\" probably from Fostat (suburb of Cairo).",
    "\"Of fustian he weared a gipon all besmutted with his habergeon.\"",
    "Chaucer, \"General Prologue\""
  ],
  [
    "Sendal",
    "/ˈsɛn.dəl/",
    "m",
    "A fine, thin, lightweight medieval silk cloth used for rich banners and linings.",
    "From OF \"sendal,\" from Medieval Latin \"cendalum\" (fine silk).",
    "\"Banners of crimson sendal fluttered in the breeze from the highest turrets.\"",
    "Medieval romances"
  ],
  [
    "Brocade",
    "/broʊˈkeɪd/",
    "e",
    "A rich fabric woven with an embossed or raised floral pattern of gold or silver threads.",
    "From Spanish \"brocado,\" from \"brocar\" (to embroider, from Italian \"brocco\" splinter, spike).",
    "\"Her gown of heavy Venice brocade stood up of its own stiffness upon the floor.\"",
    "Jacobean court descriptions"
  ],
  [
    "Lincoln-green",
    "/ˈlɪŋ.kənˌɡriːn/",
    "m",
    "A bright green woolen cloth originally dyed and manufactured in Lincoln, worn by archers.",
    "Named from the city of Lincoln, celebrated for its dyed textiles.",
    "\"Robin Hood and his merry men were all clad in suits of Lincoln green.\"",
    "Traditional ballads"
  ],
  [
    "Scrip",
    "/skrɪp/",
    "m",
    "A small bag, wallet, or satchel carried by a pilgrim, shepherd, or traveler.",
    "From Old Norse \"skreppa\" (bag, satchel). Often paired with a staff.",
    "\"Take neither purse, nor scrip, nor shoes: and salute no man by the way.\"",
    "King James Bible, Luke 10:4"
  ],
  [
    "Bourdon",
    "/ˈbʊər.dən/",
    "m",
    "A pilgrim's long staff, often fitted with a hook for a water-gourd; also a low drone.",
    "From OF \"bourdon\" (walking stick, from Late Latin \"burdo\" mule/support).",
    "\"He leaned upon his ash bourdon, foot-sore from the long mountain passes of the Alps.\"",
    "Pilgrimage chronicles"
  ],
  [
    "Cockle-shell",
    "/ˈkɒk.əl.ʃɛl/",
    "m",
    "The shell of a scallop worn in the hat as a badge of having made the pilgrimage to Santiago de Compostela.",
    "Compound: cockle + shell. Emblem of Saint James the Greater.",
    "\"By his cockle hat and staff, and his sandal shoon, you shall know a true pilgrim.\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Vernicle",
    "/ˈvɜːr.nɪ.kəl/",
    "m",
    "A miniature replica of Veronica's veil bearing Christ's face, worn by pilgrims to Rome.",
    "Diminutive of \"Veronica\" (the cloth bearing the true image, vera icon).",
    "\"A vernicle had he sewed upon his cap, that men should know that he had been at Rome.\"",
    "Chaucer, \"General Prologue\""
  ],
  [
    "Pewter",
    "/ˈpjuː.tər/",
    "m",
    "A gray alloy of tin with lead or copper, widely used for tableware and mugs.",
    "From OF \"peautre,\" of obscure origin. Medieval England was the chief producer.",
    "\"A row of bright-scoured pewter plates gleamed upon the dresser in the hall.\"",
    "Tudor domestic inventories"
  ],
  [
    "Costrel",
    "/ˈkɒs.trəl/",
    "m",
    "A small earthenware, wooden, or leather bottle with lugs for suspending from the waist.",
    "From OF \"costrel,\" from Late Latin \"costrellum\" (flagon, jar).",
    "\"The woodcutter unstrapped his leather costrel and drank deep of cold spring cider.\"",
    "Pastoral tales"
  ],
  [
    "Black-jack",
    "/ˈblæk.dʒæk/",
    "e",
    "A large leather jug or tankard coated with black pitch for serving ale.",
    "From \"black\" + \"jack\" (leather coat/vessel).",
    "\"A foamy black-jack of strong ale was passed from soldier to soldier at the guardhouse.\"",
    "Civil War memoirs"
  ],
  [
    "Tallow-dip",
    "/ˈtæl.oʊˌdɪp/",
    "m",
    "A cheap candle made by repeatedly dipping a wick of twisted rush into rendered animal fat.",
    "Compound: tallow (animal fat) + dip.",
    "\"A single smoking tallow-dip cast long, flickering shadows upon the stone walls.\"",
    "Medieval castle accounts"
  ],
  [
    "Cresset",
    "/ˈkrɛs.ɪt/",
    "m",
    "An iron basket or cage suspended on a pole or bracket to hold burning pitch or coals as a beacon.",
    "From OF \"craisset,\" from \"craisse\" (grease, fat, Latin \"crassus\").",
    "\"Iron cressets filled with blazing pine-knots illuminated the outer bailey.\"",
    "Scott, \"The Betrothed\""
  ],
  [
    "Snuffer",
    "/ˈsnʌf.ər/",
    "e",
    "A scissor-like instrument with a small box used to trim or extinguish burning candle wicks.",
    "From \"snuff\" (the charred end of a candle wick) + \"-er.\"",
    "\"The footman went from sconce to sconce with brass snuffers, trimming the wax tapers.\"",
    "Victorian interior memoirs"
  ],
  [
    "Dout",
    "/daʊt/",
    "e",
    "To extinguish or put out a fire or light (literally \"do out\").",
    "Contraction of \"do out.\"",
    "\"The sudden gust of wind douted the candle, plunging the chamber into darkness.\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Belike",
    "/bɪˈlaɪk/",
    "e",
    "Probably, perhaps, likely; as seems probable.",
    "From prefix \"be-\" + \"like\" (probable, likely).",
    "\"He hath some business in the town, belike; he will return ere nightfall.\"",
    "Shakespeare, \"Two Gentlemen of Verona\""
  ],
  [
    "Certes",
    "/ˈsɜːr.tiːz/",
    "m",
    "Certainly, in truth, assuredly (an archaic adverb of assertion).",
    "From OF \"certes,\" from Latin \"a certis\" (from certain things, surely).",
    "\"Certes, sir knight, a braver deed of arms was never witnessed in this realm.\"",
    "Chaucer, \"Knight's Tale\""
  ],
  [
    "Haply",
    "/ˈhæp.li/",
    "e",
    "Perhaps, by chance, by good fortune.",
    "From \"hap\" (chance, fortune, Old Norse \"happ\") + \"-ly.\"",
    "\"Lest haply, if they of Macedonia come with me, we should be ashamed.\"",
    "King James Bible, 2 Corinthians 9:4"
  ],
  [
    "Whilom",
    "/ˈwaɪ.ləm/",
    "m",
    "Formerly, once upon a time; at an earlier period.",
    "From OE \"hwīlum\" - at times, formerly, dative plural of \"hwīl\" (while/time).",
    "\"A clerk there was of Oxenford also, that unto logic hadde long y-go, and whilom was full poor.\"",
    "Chaucer, \"Canterbury Tales\""
  ],
  [
    "Alack-a-day",
    "/əˈlæk.ə.deɪ/",
    "e",
    "An exclamation of sorrow, regret, or dismay over the day's grief.",
    "From \"alack\" + \"on the day\" (woe worth the day).",
    "\"Alack-a-day, that ever I should live to see my master brought so low!\"",
    "Fielding, \"Tom Jones\""
  ],
  [
    "Fie-upon-thee",
    "/faɪ/",
    "e",
    "A traditional exclamation expressing indignant reproach and moral disgust.",
    "From \"fie\" (imitative of disgust) + \"upon thee.\"",
    "\"Fie upon thee, recreant! Dost thou call thyself a Christian gentleman?\"",
    "Elizabethan drama"
  ],
  [
    "Godsooth",
    "/ɡɒdˈsuːθ/",
    "e",
    "In God's truth! A mild Elizabethan religious oath of confirmation.",
    "From \"God's sooth\" (God's truth).",
    "\"Godsooth, sir, I never set eyes on the gentleman before this morning!\"",
    "Jacobean comedies"
  ],
  [
    "Gadzooks",
    "/ɡædˈzuːks/",
    "e",
    "A mild 17th-century oath expressing astonishment (contraction of \"God's hooks\" - the crucifixion nails).",
    "Euphemistic corruption of \"by God's hooks\" (the nails of the Cross).",
    "\"Gadzooks! What magnificent horses you have brought to the fair!\"",
    "Restoration comedies"
  ],
  [
    "Zounds",
    "/zaʊndz/",
    "e",
    "A vehement Elizabethan oath expressing outrage (contraction of \"by God's wounds\").",
    "Euphemistic contraction of \"God's wounds.\"",
    "\"Zounds, sir, do you think I am an instrument to be played upon by your whim?\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Marry-come-up",
    "/ˈmær.i/",
    "e",
    "An exclamation of indignant surprise, contempt, or impatience (\"Indeed! Think of that!\").",
    "From \"Marry\" (by the Virgin Mary) + \"come up\" (rise up, hoity-toity).",
    "\"Marry come up, my dirty cousin! Who made you a judge of my family's honour?\"",
    "Fielding, \"Tom Jones\""
  ],
  [
    "S'blood",
    "/zblʌd/",
    "e",
    "An oath meaning \"by God's blood\" (the Eucharistic blood of Christ).",
    "Contraction of \"God's blood.\"",
    "\"S'blood, do you think I am easier to be played on than a pipe?\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "S'death",
    "/zdɛθ/",
    "e",
    "An oath meaning \"by God's death\" (the crucifixion of Christ).",
    "Contraction of \"God's death.\"",
    "\"S'death! The villains have slipped through our fingers in the fog!\"",
    "Historical romances"
  ],
  [
    "By'r-lakin",
    "/ˌbaɪərˈleɪ.kɪn/",
    "e",
    "A diminutive oath meaning \"by our little Lady\" (the Virgin Mary).",
    "From \"by our Lady\" + diminutive suffix \"-kin.\"",
    "\"By'r lakin, a parlous fear! Will not the ladies be afeared of the lion?\"",
    "Shakespeare, \"Midsummer Night's Dream\""
  ],
  [
    "Fiddle-faddle",
    "/ˈfɪd.əlˌfæd.əl/",
    "t",
    "Nonsense, petty trifles, frivolous matters; to fuss over small details.",
    "Reduplication of \"fiddle\" (to play around).",
    "\"Don't talk to me of such fiddle-faddle when the empire is at stake!\"",
    "Victorian drawing-room conversation"
  ],
  [
    "Humbug",
    "/ˈhʌm.bʌɡ/",
    "t",
    "Deceptive or false talk or behavior; a fraud, sham, or impostor. \"Bah, humbug!\"",
    "18th-century slang of unknown origin, immortalized by Ebenezer Scrooge.",
    "\"Bah! Humbug! Every idiot who goes about with 'Merry Christmas' on his lips should be boiled with his own pudding!\"",
    "Dickens, \"A Christmas Carol\""
  ],
  [
    "Pecksniffian",
    "/pɛkˈsnɪf.i.ən/",
    "t",
    "Unctuously hypocritical, sanctimonious, and insincere under a mask of moral virtue.",
    "Named after Seth Pecksniff, the hypocritical architect in Dickens' \"Martin Chuzzlewit.\"",
    "\"His speech was full of Pecksniffian sentiments about charity, though he refused a penny to the widow.\"",
    "Victorian political journalism"
  ],
  [
    "Podsnappery",
    "/ˈpɒd.snæp.ər.i/",
    "t",
    "A complacent, self-satisfied refusal to acknowledge unpleasant facts, foreign things, or social distress.",
    "Named after Mr. Podsnap in Dickens' \"Our Mutual Friend,\" who waved away unpleasant facts.",
    "\"The foreign office treated the famine with characteristic Victorian Podsnappery.\"",
    "Social critique of the 1870s"
  ],
  [
    "Micawberish",
    "/mɪˈkɔː.bər.ɪʃ/",
    "t",
    "Habitually improvident yet eternally, cheerfully optimistic that \"something will turn up.\"",
    "Named after Wilkins Micawber in Dickens' \"David Copperfield.\"",
    "\"His financial affairs were hopeless, yet he remained splendidly Micawberish to the end.\"",
    "Biographies of Victorian gentlemen"
  ],
  [
    "Gamp",
    "/ɡæmp/",
    "t",
    "A large, clumsy, bulging umbrella, typically tied loosely in the middle.",
    "Named after the disreputable nurse Sarah Gamp in Dickens' \"Martin Chuzzlewit.\"",
    "\"The old woman brandished a battered cotton gamp against the rising gale.\"",
    "Victorian humorous sketches"
  ],
  [
    "Grundyism",
    "/ˈɡrʌn.di.ɪz.əm/",
    "t",
    "Narrow-minded, prudish conformity to social etiquette, based on fear of what \"Mrs. Grundy\" will say.",
    "From Mrs. Grundy, an unseen character constantly cited as the arbiter of propriety in Thomas Morton's play \"Speed the Plough\" (1798).",
    "\"Her life was poisoned by the stifling Grundyism of the provincial cathedral town.\"",
    "Victorian novels of manners"
  ],
  [
    "Street-arab",
    "/ˈstriːtˌær.əb/",
    "t",
    "A homeless, wandering, neglected child living on the streets of a Victorian city.",
    "From \"Arab\" (nomad, wanderer of the desert). Coined in the 1850s.",
    "\"The missionary established a night shelter for the ragged street-arabs of Whitechapel.\"",
    "Lord Shaftesbury's social papers"
  ],
  [
    "Crossing-sweeper",
    "/ˈkrɒs.ɪŋˌswiːp.ər/",
    "t",
    "A pauper who swept horse-manure and mud from pedestrian street-crossings in hopes of copper tips.",
    "From \"crossing\" + \"sweeper.\"",
    "\"Little Jo, the crossing-sweeper, knew nothing of the world beyond his broom and his beat in Holborn.\"",
    "Dickens, \"Bleak House\""
  ],
  [
    "Pure-finder",
    "/ˈpjʊərˌfaɪn.dər/",
    "t",
    "A Victorian street scavenger who collected dog-droppings (\"pure\") to sell to leather tanneries.",
    "From \"pure\" (ironic tanners' term for dog dung used to soften leather).",
    "\"The poor old woman made fourpence a day as a pure-finder in the south of London.\"",
    "Henry Mayhew, \"London Labour\""
  ],
  [
    "Tosh-hunter",
    "/ˈtɒʃˌhʌn.tər/",
    "t",
    "A scavenger who searched the mud along the Thames shore and inside sewers for scrap metal and coins.",
    "From thieves' slang \"tosh\" (copper, scrap metal).",
    "\"Tosh-hunters carried long poles with iron claws to fish bits of copper out of the mud.\"",
    "Mayhew, \"London Labour and the London Poor\""
  ],
  [
    "Bone-grubber",
    "/ˈboʊnˌɡrʌb.ər/",
    "t",
    "A street scavenger who collected discarded animal bones from dustbins and gutters to sell for fertilizer.",
    "Compound: bone + grubber (digger).",
    "\"The bone-grubber carried a greasy sack on his back, searching the alleyways before dawn.\"",
    "Victorian street chronicles"
  ],
  [
    "Sewer-hunter",
    "/ˈsuː.ərˌhʌn.tər/",
    "t",
    "A daring Victorian scavenger who waded through underground brick sewers searching for washed-away silver and gold.",
    "Compound: sewer + hunter.",
    "\"With a bull's-eye lantern strapped to his chest, the sewer-hunter braved the suffocating sewer gases.\"",
    "Mayhew, \"London Labour\""
  ],
  [
    "Nightman",
    "/ˈnaɪt.mən/",
    "t",
    "A laborer employed to empty household cesspools and privies during the night hours (\"night-soil\").",
    "From \"night\" (because the foul work was forbidden during daylight hours).",
    "\"The heavy cart of the nightman rumbled down the lane under the cover of midnight.\"",
    "Public health reports of 1848"
  ],
  [
    "Tiger",
    "/ˈtaɪ.ɡər/",
    "t",
    "A smart, liveried boy-servant who stood on the back of a gentleman's light carriage.",
    "From \"tiger\" (referring to his striped waistcoat and small, alert agility).",
    "\"Lord Verisopht was accompanied in his cabriolet by a diminutive tiger with cocked hat and top-boots.\"",
    "Dickens, \"Nicholas Nickleby\""
  ],
  [
    "Curricle",
    "/ˈkʌr.ɪ.kəl/",
    "t",
    "A fashionable, light, two-wheeled chaise drawn by two horses abreast.",
    "From Latin \"curriculum\" (running, race-chariot, from \"currere\" to run).",
    "\"The young blood drove his curricle and matched bays at breakneck speed down Bond Street.\"",
    "Jane Austen, \"Northanger Abbey\""
  ],
  [
    "Barouche",
    "/bəˈruːʃ/",
    "t",
    "A fashionable four-wheeled carriage with a collapsible hood and two double seats facing each other.",
    "From German \"Barutsche,\" from Italian \"baroccio\" (two-wheeled cart, Latin \"birotus\").",
    "\"Mrs. Elton never ceased boasting of her brother-in-law's barouche-landau.\"",
    "Jane Austen, \"Emma\""
  ],
  [
    "Tilbury",
    "/ˈtɪl.bər.i/",
    "t",
    "A light, fast two-wheeled gig with an open seat, invented by a London coachbuilder named Tilbury.",
    "Named after coachbuilder Fitzroy Tilbury (early 19th century).",
    "\"He jumped into his tilbury and whipped up his mare for the race to Epsom.\"",
    "Sporting magazines of the Regency"
  ],
  [
    "Shilling-shocker",
    "/ˈʃɪl.ɪŋˌʃɒk.ər/",
    "t",
    "A cheap sensational paperback novel sold for one shilling in late Victorian England.",
    "From its price (one shilling) + \"shocker\" (sensational story).",
    "\"The railway bookstalls were crowded with lurid shilling-shockers about train robberies and vampires.\"",
    "Publishing history of the 1880s"
  ],
  [
    "Pea-souper",
    "/ˈpiːˌsuː.pər/",
    "t",
    "A thick, yellowish-green, choking industrial fog common in Victorian London.",
    "From its thick consistency and yellow color resembling pea soup.",
    "\"A dreadful pea-souper blanketed the city, so dense that cabbies had to lead their horses by the bit.\"",
    "London memoirs of the 1880s"
  ],
  [
    "Vassalage",
    "/ˈvæs.əl.ɪdʒ/",
    "m",
    "The state or condition of being a feudal vassal; subservience.",
    "From Medieval Latin \"vassallaticum.\"",
    "\"The duke held his vast duchy in honorable vassalage from the Crown.\"",
    "Chronicles of Normandy"
  ],
  [
    "Allodium",
    "/əˈloʊ.di.əm/",
    "m",
    "Land held in absolute independence, without acknowledging any superior feudal lord.",
    "From Medieval Latin \"allodium,\" of Germanic origin (*all-ōd, entire property).",
    "\"The ancient manor was an allodium, exempt from all feudal services and scutage.\"",
    "Blackstone, \"Commentaries\""
  ],
  [
    "Boon-day",
    "/ˈbuːn.deɪ/",
    "m",
    "A day of customary unpaid labor given by a tenant to his lord in harvest time.",
    "From \"boon\" (petition, favor) + \"day.\"",
    "\"On the third boon-day, forty reapers entered the lord's barley field.\"",
    "Manorial records of Ely"
  ],
  [
    "Socman",
    "/ˈsɒk.mən/",
    "m",
    "A feudal tenant holding land by socage tenure, free from servile labor.",
    "From Anglo-Norman \"soc\" + \"man.\"",
    "\"The socman paid his annual rent of three capons at Michaelmas.\"",
    "Domesday Book of Lincolnshire"
  ],
  [
    "Hide-money",
    "/ˈhaɪdˌmʌn.i/",
    "m",
    "A tax assessed on each hide of land; also compensation paid to escape flogging.",
    "Compound: hide + money.",
    "\"The sheriff collected the hide-money throughout the three ridings.\"",
    "Pipe Rolls of Henry I"
  ],
  [
    "Virgater",
    "/ˈvɜːr.ɡə.tər/",
    "m",
    "A peasant holding a virgate (roughly thirty acres) of manorial land.",
    "From Medieval Latin \"virgata\" (virgate) + \"-er.\"",
    "\"Twelve virgaters owed suit of court at the abbot's hall every three weeks.\"",
    "Cartulary of Ramsey"
  ],
  [
    "Wapentake",
    "/ˈwɒp.ən.teɪk/",
    "m",
    "An administrative division of several northern English shires, corresponding to a hundred.",
    "From Old Norse \"vápnatak\" - weapon-taking (the touching of weapons as a sign of assent).",
    "\"The bailiff summoned the freeholders of the wapentake to the moot-hill.\"",
    "Yorkshire Assize Rolls"
  ],
  [
    "Frankalmoign",
    "/ˌfræŋk.ælˈmɔɪn/",
    "m",
    "A tenure by which religious houses held land free of earthly service in exchange for prayers.",
    "From Anglo-French \"franc aumoigne\" - free alms.",
    "\"The abbey held the meadow in pure and perpetual frankalmoign.\"",
    "Charters of Fountains Abbey"
  ],
  [
    "Mortuary",
    "/ˈmɔːr.tʃʊ.ər.i/",
    "m",
    "A customary gift or payment claimed by the parish priest from the estate of a deceased parishioner.",
    "From Medieval Latin \"mortuarium,\" from Latin \"mortuus\" (dead).",
    "\"The vicar claimed the dead farmer's second-best beast as his mortuary.\"",
    "Canons of the Church of England"
  ],
  [
    "Pound-breach",
    "/ˈpaʊnd.briːtʃ/",
    "m",
    "The illegal act of forcibly breaking into a common pound to rescue impounded cattle.",
    "Compound: pound + breach.",
    "\"The miller was fined twenty shillings for pound-breach and rescue of his swine.\"",
    "Manor court of Wakefield"
  ],
  [
    "Glebe",
    "/ɡliːb/",
    "m",
    "An area of land assigned to a parish church to support the priest.",
    "From Latin \"gleba\" (clod of earth, soil).",
    "\"The parson farmed his thirty acres of glebe land with his own hands.\"",
    "Trollope, \"Barchester Towers\""
  ],
  [
    "Advowson",
    "/ædˈvaʊ.zən/",
    "m",
    "The legal right in English law to present a clergyman to a vacant church parish living.",
    "From Anglo-French \"avoueson,\" from Latin \"advocatio\" (advocacy, defense).",
    "\"The squire purchased the perpetual advowson of the rectory for his younger son.\"",
    "Jane Austen, \"Mansfield Park\""
  ],
  [
    "Pannage",
    "/ˈpæn.ɪdʒ/",
    "m",
    "The right or privilege of pasturing swine in a lord's oak or beech forest for acorns (\"mast\").",
    "From OF \"panage,\" from Late Latin \"pastionaticum,\" from \"pastio\" (feeding).",
    "\"Each tenant paid twopence for the pannage of his hogs in the autumn woods.\"",
    "Domesday survey of the New Forest"
  ],
  [
    "Estovers",
    "/ɛsˈtoʊ.vərz/",
    "m",
    "The legal right of a tenant to take necessary timber from the lord's woods for fuel and repairs.",
    "From OF \"estovoir\" - to be necessary, from Latin \"est opus.\"",
    "\"The cottar was granted common of estovers for firewood and repair of his hedge.\"",
    "Blackstone, \"Commentaries\""
  ],
  [
    "Pinfold-keeper",
    "/ˈpɪn.foʊld/",
    "m",
    "The parish officer appointed to take charge of stray cattle in the common pound.",
    "From \"pinfold\" + \"keeper.\"",
    "\"The pinfold-keeper refused to release the sheep without payment of the customary fee.\"",
    "Parish registers of Cheshire"
  ],
  [
    "Tithingman",
    "/ˈtaɪ.ðɪŋ.mən/",
    "m",
    "A peace officer in ancient English hundreds presiding over ten families in mutual surety.",
    "Compound: tithing + man.",
    "\"The tithingman reported that all men within his tithing were in good surety of the peace.\"",
    "Hundred rolls of Wiltshire"
  ],
  [
    "Wergild-fine",
    "/ˈwɜːr.ɡɪld/",
    "m",
    "The precise monetary compensation paid according to rank for bodily harm or homicide.",
    "Compound: wergild + fine.",
    "\"The slayer paid the full wergild-fine to the kinsmen of the dead thegn.\"",
    "Laws of Ine of Wessex"
  ],
  [
    "Borough-English",
    "/ˈbʌr.əˈɪŋ.ɡlɪʃ/",
    "m",
    "A customary law of inheritance whereby the youngest son inherited the family copyhold estate.",
    "From the custom of the \"English borough\" in Nottingham (contrasted with French borough).",
    "\"By the ancient custom of Borough-English, the homestead descended to the youngest son.\"",
    "Legal antiquities of Sussex"
  ],
  [
    "Court-leet",
    "/ˈkɔːrt.liːt/",
    "m",
    "A periodic manorial court of record held by a lord for punishing petty offenses and viewing frankpledge.",
    "From \"court\" + \"leet\" (Anglo-French \"lete,\" manorial district).",
    "\"The steward opened the court-leet with three loud proclamations of 'Oyez!'\"",
    "Records of the Court Leet of Southampton"
  ],
  [
    "Court-baron",
    "/ˈkɔːrtˈbær.ən/",
    "m",
    "The assembly of the freehold tenants of a manor, presided over by the lord or his steward.",
    "From \"court\" + \"baron\" (freeman, tenant-in-chief).",
    "\"The jury of the court-baron settled the boundary dispute between the two ploughlands.\"",
    "Manor records of Colne"
  ],
  [
    "Bailiff-errant",
    "/ˈbeɪ.lɪfˈɛr.ənt/",
    "m",
    "An itinerant bailiff employed to execute legal writs and processes throughout an entire county.",
    "From \"bailiff\" + \"errant\" (traveling).",
    "\"The bailiff-errant rode forty miles across the moors to serve the royal attachment.\"",
    "Plea rolls of the King's Bench"
  ],
  [
    "Wood-reeve",
    "/ˈwʊd.riːv/",
    "m",
    "A forester appointed by an estate or monastery to manage coppicing and timber felling.",
    "Compound: wood + reeve.",
    "\"The wood-reeve marked eighty mature oaks with the broad arrow for naval felling.\"",
    "Records of Dean Forest"
  ],
  [
    "Hay-warden",
    "/ˈheɪˌwɔːr.dən/",
    "m",
    "Another term for the hayward, guardian of hedges, cattle, and meadows.",
    "Compound: hay (hedge) + warden.",
    "\"The hay-warden impounded thirteen stray sheep that had breached the common ditch.\"",
    "Manor court of Durham"
  ],
  [
    "Carnifex",
    "/ˈkɑːr.nɪ.fɛks/",
    "m",
    "A public executioner or tormentor in medieval Latin and English legal documents.",
    "From Latin \"carnifex\" - flesh-maker, executioner (\"caro\" flesh + \"facere\" to make).",
    "\"The sentence was delivered into the hands of the carnifex for swift execution.\"",
    "Medieval chronicle records"
  ],
  [
    "Camp-fight",
    "/ˈkæmp.faɪt/",
    "m",
    "The ancient trial by combat or judicial duel to determine guilt or innocence in law.",
    "From OE \"camp\" (battle, fight) + \"fight.\"",
    "\"The two knights met in solemn camp-fight before the King at Smithfield.\"",
    "Chronicles of London"
  ],
  [
    "Ordeal-by-water",
    "/ˈɔːr.diːl/",
    "m",
    "An ancient Anglo-Saxon trial where an accused person was cast into consecrated water; sinking proved innocence.",
    "From OE \"ordāl\" (judgment) + water.",
    "\"He survived the ordeal-by-water, for the cold river received him into its depths.\"",
    "Laws of Athelstan"
  ],
  [
    "Ordeal-by-fire",
    "/ˈɔːr.diːl/",
    "m",
    "An ancient trial where an accused had to walk over red-hot ploughshares or carry hot iron unharmed.",
    "From OE \"ordāl\" + fire.",
    "\"Queen Emma was said to have walked barefoot across nine glowing ploughshares unhurt.\"",
    "Chronicles of Winchester"
  ],
  [
    "Mainour",
    "/ˈmeɪ.nər/",
    "m",
    "Stolen goods found in the possession of a thief caught in the act (\"taken with the mainour\").",
    "From Anglo-Norman \"mainoure\" (handiwork, manual possession, Latin \"manu opus\").",
    "\"The thief was taken with the mainour, having the silver chalice hidden under his coat.\"",
    "Pleas of the Crown"
  ],
  [
    "Waif",
    "/weɪf/",
    "m",
    "Goods stolen and thrown away by a thief in flight, which forfeited to the lord of the manor.",
    "From Anglo-Norman \"waif\" (lost, abandoned), of Scandinavian origin.",
    "\"The sheriff claimed the abandoned horse as waif belonging to the Crown.\"",
    "Blackstone, \"Commentaries\""
  ],
  [
    "Deodand",
    "/ˈdiː.oʊ.dænd/",
    "m",
    "An instrument (horse, cart, weapon) that caused a human death, forfeited to the Crown for charitable uses.",
    "From Anglo-French \"deodande,\" from Latin \"Deo dandum\" (thing to be given to God).",
    "\"The wheel of the mill that crushed the miller's boy was condemned as a deodand.\"",
    "Coroners' rolls of Yorkshire"
  ],
  [
    "Arming-sword",
    "/ˈɑːr.mɪŋ.sɔːrd/",
    "m",
    "The standard medieval single-handed knightly sword with a crossguard and wheel pommel.",
    "Literal compound: sword worn when armed.",
    "\"His trusty arming-sword hung at his left hip, balancing the heavy dirk on his right.\"",
    "Chronicles of Crecy"
  ],
  [
    "Broadsword",
    "/ˈbrɔːd.sɔːrd/",
    "m",
    "A heavy military sword with a wide, straight, double-edged cutting blade.",
    "Compound: broad + sword.",
    "\"With a mighty sweep of his broadsword, he clove the wooden shield in twain.\"",
    "Ballads of the Scottish border"
  ],
  [
    "Colichemarde",
    "/ˌkɒl.ɪʃˈmɑːrd/",
    "t",
    "A 17th-18th century smallsword blade with a wide, rigid forte and a slender, flexible foible.",
    "Named after the German count Otto Wilhelm von Königsmarck.",
    "\"The fencing master demonstrated the lightning parry possible only with a true colichemarde.\"",
    "Treatises on the duello"
  ],
  [
    "Anelace",
    "/ˈæn.ə.leɪs/",
    "m",
    "A broad, heavy, double-edged tapering dagger worn at the girdle in the 14th century.",
    "From Anglo-Norman \"anelace,\" of obscure origin.",
    "\"An anelace and a gipsire all of silk hung at his girdle, white as morning milk.\"",
    "Chaucer, \"General Prologue\""
  ],
  [
    "Baselard",
    "/ˈbæs.ə.lɑːrd/",
    "m",
    "A medieval civilian dagger with an H-shaped hilt, popular in the 14th and 15th centuries.",
    "From OF \"baselarde,\" probably named after the Swiss city of Basel.",
    "\"The London apprentice tucked a stout baselard into his woollen sash.\"",
    "Sumptuary laws of Richard II"
  ],
  [
    "Dirk",
    "/dɜːrk/",
    "m",
    "A long straight-bladed Scottish dagger, traditionally worn with Highland dress.",
    "Of obscure origin; originally spelled \"dork\" or \"durk\" (c. 1600).",
    "\"He drove his Highland dirk into the tabletop as an oath of vengeance.\"",
    "Scott, \"Waverley\""
  ],
  [
    "Stiletto",
    "/stɪˈlɛt.oʊ/",
    "e",
    "A short dagger with a slender, tapering needle-like blade designed solely for stabbing.",
    "From Italian \"stiletto,\" diminutive of \"stilo\" (dagger, from Latin \"stilus\" stake/pen).",
    "\"A villain armed with a poison-tipped Italian stiletto lurked in the piazza.\"",
    "Webster, \"The Duchess of Malfi\""
  ],
  [
    "Poleaxe",
    "/ˈpoʊl.æks/",
    "m",
    "A massive medieval knightly weapon combining an axe, hammer, and top-spike on a stout pole.",
    "From \"poll\" (head) + \"axe\" - axe with a hammer-head (poll), later influenced by \"pole.\"",
    "\"The knights met on foot in the tournament lists, armed with heavy steel poleaxes.\"",
    "Chivalric duel records of Burgundy"
  ],
  [
    "Voulge",
    "/vuːlʒ/",
    "m",
    "An early medieval polearm resembling a heavy meat-cleaver bolted to a long staff.",
    "From OF \"voulge,\" from Late Latin \"vidubium\" (pruning-hook).",
    "\"The peasant levy braced their heavy voulges against the charging cavalry.\"",
    "Hundred Years' War accounts"
  ],
  [
    "Spetum",
    "/ˈspiː.təm/",
    "m",
    "A polearm featuring a long spearhead flanked by two sharp upward-curving crescent blades.",
    "From Italian \"spiedo\" / \"spetone\" (broad spit, from Germanic *spit).",
    "\"The Italian guards carried six-foot spetums damascened with silver arabesques.\"",
    "Medici guard records"
  ],
  [
    "Ranseur",
    "/ˈræn.sʊər/",
    "m",
    "A polearm with a central thrusting spear and two smaller lateral hooks for disarming horsemen.",
    "From French \"ranseur,\" related to \"runka\" (pitchfork).",
    "\"A hook from the ranseur caught the knight's bridle, dragging the charger to the turf.\"",
    "Military treatises of 1520"
  ],
  [
    "Guisarme",
    "/ɡɪˈzɑːrm/",
    "m",
    "A medieval polearm with a curved pruning blade and a sharp backward-pointing hook for unhorsing knights.",
    "From OF \"gisarme,\" of Germanic origin.",
    "\"The billmen hooked the stirrup with a rusty guisarme, bringing horse and rider crashing down.\"",
    "Chaucerian military poems"
  ],
  [
    "Bec-de-corbin",
    "/ˌbɛk.dəˈkɔːr.bɪn/",
    "m",
    "A pole weapon featuring a sharp beak-like hook resembling a raven's bill (\"raven's beak\").",
    "From French \"bec de corbin\" - crow's beak (\"bec\" beak + \"corbin\" raven).",
    "\"With the spiked point of the bec-de-corbin, he punctured the visor of his adversary.\"",
    "Burgundian tournament records"
  ],
  [
    "War-hammer",
    "/ˈwɔːrˌhæm.ər/",
    "m",
    "A close-combat weapon with a hammer-face and a rear pick designed to crush plate armor.",
    "Compound: war + hammer.",
    "\"The war-hammer made terrible work of the heaviest Milanese plate upon the field.\"",
    "Battle accounts of Towton"
  ],
  [
    "Goedendag",
    "/ˌɡuː.dənˈdɑːx/",
    "m",
    "A Flemish club-polearm with a steel spike, famous for defeating French knights at Courtrai (1302).",
    "From Flemish \"goedendag\" - literally \"good day\" (ironic morning greeting of rebels).",
    "\"The Flemish weavers stood firm with their goedendags, routing the flower of French chivalry.\"",
    "Chronicles of Flanders"
  ],
  [
    "Cranequin",
    "/ˈkræn.ə.kwɪn/",
    "m",
    "A toothed-wheel and ratchet mechanism used to wind up and span heavy arbalests.",
    "From OF \"crenequin,\" from Middle Dutch \"kraenekijn\" (little crane, from \"kraan\").",
    "\"He clamped the brass cranequin to the crossbow stock and began to crank the thick cord.\"",
    "Armory records of Nuremberg"
  ],
  [
    "Caliver",
    "/ˈkæl.ɪ.vər/",
    "e",
    "A lightweight, standardized-caliber matchlock firearm, lighter than the heavy musket.",
    "Corruption of \"caliber\" (from French \"pièce de calibre\" - gun of standard bore).",
    "\"A company of sixty shot, armed with calivers and flasks of fine priming powder.\"",
    "Elizabethan muster books"
  ],
  [
    "Petronel",
    "/ˈpɛt.rə.nɛl/",
    "e",
    "A large horseman's cavalry firearm, fired with the stock rested against the breast.",
    "From French \"poitrinal,\" from \"poitrine\" (chest, breast, Latin \"pectus\").",
    "\"The reiters discharged their petronels at five paces and wheeled back into line.\"",
    "Wars of Religion chronicles"
  ],
  [
    "Dag",
    "/dæɡ/",
    "e",
    "An early heavy cavalry pistol with a wheellock mechanism.",
    "Of obscure origin; perhaps from Dutch \"dagge\" (dagger).",
    "\"He drew a short dag from his holster and fired through the tavern window.\"",
    "Elizabethan crime pamphlets"
  ],
  [
    "Falconet",
    "/ˈfɔːl.kə.nɛt/",
    "e",
    "A light artillery piece throwing a small iron ball of one to two pounds.",
    "Diminutive of \"falcon\" (tradition of naming ordnance after birds of prey).",
    "\"Two bronze falconets were mounted upon the ramparts of the river bastion.\"",
    "Naval artillery inventories of Drake"
  ],
  [
    "Minion",
    "/ˈmɪn.jən/",
    "e",
    "A small cannon of three-inch bore throwing a four-pound ball, common on armed merchantmen.",
    "From French \"mignon\" (dainty, small, favorite).",
    "\"The merchantman ran out six minions to repel the Sallee rovers.\"",
    "Hakluyt's Voyages"
  ],
  [
    "Jack-of-plate",
    "/ˈdʒæk.əvˌpleɪt/",
    "m",
    "A flexible infantry armor composed of hundreds of small overlapping iron plates sewn inside canvas.",
    "From \"jack\" (short tunic) + \"plate.\"",
    "\"The border reivers rode into battle wearing greasy jacks-of-plate and steel bonnets.\"",
    "Border warfare annals"
  ],
  [
    "Plackart",
    "/ˈplæk.ɑːrt/",
    "m",
    "An extra reinforcing plate of steel strapped over the lower part of a breastplate.",
    "From OF \"placart\" (plate, tablet), from Middle Dutch \"placke\" (flat piece).",
    "\"A lance shattered upon the bright plackart of his tournament harness.\"",
    "Tournament accounts of Henry VIII"
  ],
  [
    "Burgonet",
    "/ˈbɜːr.ɡə.nɛt/",
    "e",
    "A light, open-faced Renaissance helmet with a crest, cheek-pieces, and an umbrella-like brim.",
    "From French \"bourguignotte\" - Burgundian helmet (from \"Bourgogne\" Burgundy).",
    "\"The Spanish captain wore an engraved steel burgonet adorned with a sweeping scarlet plume.\"",
    "Renaissance armory records"
  ],
  [
    "Morion",
    "/ˈmɒr.i.ən/",
    "e",
    "An open-faced helmet with a curved brim peaked at front and back and a high central comb.",
    "From Spanish \"morrión,\" from \"morra\" (crown of the head).",
    "\"The conquistadors in their high-combed morions marched into the jungle.\"",
    "Chronicles of the Indies"
  ],
  [
    "Cabasset",
    "/ˈkæb.ə.sɛt/",
    "e",
    "A pear-shaped helmet with a narrow horizontal brim and a small stalk-like projection at the apex.",
    "From Spanish \"cabacete,\" from \"cabeza\" (head). Also called a \"pear-morion.\"",
    "\"The pikemen were equipped with blackened breastplates and cheap iron cabassets.\"",
    "Armory of the Armada"
  ],
  [
    "Barbute",
    "/ˈbɑːr.bjuːt/",
    "m",
    "An Italian 15th-century open-faced helmet with a T-shaped or Y-shaped facial opening resembling ancient Corinthian helms.",
    "From Italian \"barbuta\" (bearded, perhaps because a beard showed through the opening).",
    "\"The Venetian condottiero surveyed the battlefield from beneath his polished barbute.\"",
    "Italian Wars chronicles"
  ],
  [
    "Camail",
    "/kəˈmeɪl/",
    "m",
    "A neck-guard of chain mail attached by staples to the lower edge of a helmet.",
    "From OF \"camail,\" from Provençal \"capmail\" (head-mail: \"cap\" head + \"mail\" mesh).",
    "\"The mail camail draped over his shoulders, fastened with a gilded silken cord.\"",
    "Chaucer, \"Sir Thopas\""
  ],
  [
    "Espalier",
    "/ɛsˈpæl.jər/",
    "m",
    "In medieval armor, a flexible shoulder defense made of articulated laminated plates.",
    "From Italian \"spalliera,\" from \"spalla\" (shoulder).",
    "\"His espaliers allowed free play of the arms for drawing the six-foot yew bow.\"",
    "Armory inventories"
  ],
  [
    "Couter",
    "/ˈkuː.tər/",
    "m",
    "The piece of plate armor that covers and protects the elbow joint.",
    "From OF \"coudiere,\" from \"coude\" (elbow, Latin \"cubitus\").",
    "\"A heart-shaped steel couter guarded the inside of his left elbow from spear-thrusts.\"",
    "Armor treatises of 1450"
  ],
  [
    "Poleyn",
    "/ˈpoʊ.leɪn/",
    "m",
    "The plate armor piece designed specifically to defend the knee-cap.",
    "From OF \"poulain\" (colt, pointed shoe-toe), related to \"pullus\" (young animal).",
    "\"The winged poleyns on his knees were fluted in the graceful Gothic style.\"",
    "Royal Armouries collection"
  ],
  [
    "Rondache",
    "/rɒnˈdæʃ/",
    "e",
    "A circular iron shield or buckler carried by Spanish and Italian assault foot-soldiers (\"rodeleros\").",
    "From French \"rondache,\" from Italian \"rondaccia\" (large round shield).",
    "\"The rodeleros dashed under the enemy pikes with sword and rondache, striking from below.\"",
    "Machiavelli, \"Art of War\""
  ],
  [
    "Chape",
    "/tʃeɪp/",
    "m",
    "The metal mounting or protective tip at the bottom point of a scabbard.",
    "From OF \"chape\" (cape, cover, Latin \"cappa\").",
    "\"The silver chape of his scabbard trailed on the floor as he knelt before the throne.\"",
    "Inventories of Henry VII"
  ],
  [
    "Locket",
    "/ˈlɒk.ɪt/",
    "m",
    "The metal band near the top of a sword scabbard containing the suspension rings.",
    "From OF \"loquet\" (latch, lock).",
    "\"The suspension straps were attached to two engraved brass lockets on the scabbard.\"",
    "Armourers' accounts"
  ],
  [
    "Undercroft",
    "/ˈʌn.dər.krɒft/",
    "m",
    "A vaulted underground room or crypt beneath a medieval church, monastery, or castle.",
    "Compound: under + croft (OE \"cræft\" / Latin \"crypta\" crypt).",
    "\"The monastic barrels of ale and salted herrings were stored in the vaulted undercroft.\"",
    "Chronicles of Fountains Abbey"
  ],
  [
    "Chapter-house",
    "/ˈtʃæp.tər.haʊs/",
    "m",
    "The room or hall in an abbey or cathedral where the religious community assembled daily for business.",
    "From \"chapter\" (reading a chapter of the monastic rule daily) + \"house.\"",
    "\"In the chapter-house the abbot administered correction to monks who had broken the rule.\"",
    "Customary of Saint Augustine's, Canterbury"
  ],
  [
    "Dormitory",
    "/ˈdɔːr.mɪ.tər.i/",
    "m",
    "The communal sleeping quarters of the monks or nuns in a monastery.",
    "From Latin \"dormitorium,\" from \"dormire\" (to sleep).",
    "\"A single lamp burned all night in the center of the monastic dormitory.\"",
    "Rule of Saint Benedict"
  ],
  [
    "Infirmarer",
    "/ɪnˈfɜːr.mə.rər/",
    "m",
    "The monastic monk charged with the care of the sick, elderly, and infirm brothers in the infirmary.",
    "From Latin \"infirmarius,\" from \"infirmus\" (infirm, weak).",
    "\"The infirmarer gathered yarrow and chamomile in the herb garden for the sick brethren.\"",
    "Abbey rolls of Westminster"
  ],
  [
    "Lector",
    "/ˈlɛk.tər/",
    "m",
    "A minor cleric appointed to read the sacred lessons in church services and refectories.",
    "From Latin \"lector\" - reader, from \"legere\" (to read).",
    "\"The lector climbed into the stone pulpit and read from the Homilies of Saint Gregory during dinner.\"",
    "Customs of Cluny"
  ],
  [
    "Postulant",
    "/ˈpɒs.tʃʊ.lənt/",
    "m",
    "A candidate seeking admission into a religious order before becoming a novice.",
    "From Latin \"postulans,\" from \"postulare\" (to ask, request, demand).",
    "\"The young postulant spent three days at the abbey gate before being admitted within.\"",
    "Monastic customaries"
  ],
  [
    "Antiphoner",
    "/ænˈtɪf.ə.nər/",
    "m",
    "Another term for an antiphonary, the choral book containing responsories and antiphons.",
    "From Anglo-Norman \"antiphoner.\"",
    "\"A great vellum antiphoner with illuminated capitals in gold and lapis lazuli.\"",
    "Inventories of York Minster"
  ],
  [
    "Chantry-priest",
    "/ˈtʃɑːn.tri.priːst/",
    "m",
    "A priest endowed solely to celebrate daily masses for the repose of a founder's soul.",
    "Compound: chantry + priest.",
    "\"The chantry-priest said his dawn mass at the side altar of Saint Catherine.\"",
    "Wills of medieval Londoners"
  ],
  [
    "Monstrance",
    "/ˈmɒn.strəns/",
    "m",
    "An ornate vessel of gold with radiant sun-burst rays used to display the consecrated Host.",
    "From Medieval Latin \"monstrantia,\" from Latin \"monstrare\" (to show, demonstrate).",
    "\"The bishop carried the gleaming golden monstrance beneath a canopy of cloth-of-gold.\"",
    "Feast of Corpus Christi records"
  ],
  [
    "Censer",
    "/ˈsɛn.sər/",
    "m",
    "A container in which incense is burned, especially in religious services; a thurible.",
    "From OF \"censier,\" shortened from \"encensier,\" from Latin \"incensum\" (incense).",
    "\"Sweet-smelling clouds rose from the silver censer, drifting upward into the stone groining.\"",
    "Chaucer, \"Miller's Tale\""
  ],
  [
    "Curfew",
    "/ˈkɜːr.fjuː/",
    "m",
    "An evening bell rung to signal the extinguishing of domestic hearth fires (\"cover fire\").",
    "From OF \"couvre-feu\" - cover fire (\"couvrir\" to cover + \"feu\" fire).",
    "\"The curfew tolls the knell of parting day; the lowing herd wind slowly o'er the lea.\"",
    "Thomas Gray, \"Elegy Written in a Country Churchyard\""
  ],
  [
    "Penance",
    "/ˈpɛn.əns/",
    "m",
    "A sacrament of reconciliation; a voluntary self-punishment inflicted as an outward expression of repentance.",
    "From OF \"penance,\" from Latin \"paenitentia\" (repentance, regret).",
    "\"The barefoot king performed public penance at the shrine of Thomas Becket in Canterbury.\"",
    "Chronicles of Gervase of Canterbury"
  ],
  [
    "Absolution",
    "/ˌæb.səˈluː.ʃən/",
    "m",
    "The formal release from guilt or penalty of sin pronounced by a priest in the sacrament of penance.",
    "From Latin \"absolutio\" - acquittal, freeing, from \"absolvere\" (to set free).",
    "\"The dying knight bowed his head and received solemn absolution from the prior.\"",
    "Malory, \"Le Morte d'Arthur\""
  ],
  [
    "Tallow-chandler",
    "/ˈtæl.oʊˌtʃɑːnd.lər/",
    "m",
    "A maker and seller of candles made from mutton and beef tallow.",
    "From \"tallow\" + \"chandler\" (candle-maker, from OF \"chandelier\").",
    "\"The guild of tallow-chandlers marched fourth in the Lord Mayor's pageant.\"",
    "Guild records of London"
  ],
  [
    "Wax-chandler",
    "/ˈwæksˌtʃɑːnd.lər/",
    "m",
    "A craftsman who made high-grade beeswax candles for churches and the nobility.",
    "Compound: wax + chandler.",
    "\"The wax-chandler furnished thirty pounds of pure bleached tapers for the Easter sepulchre.\"",
    "Parish churchwardens' accounts"
  ],
  [
    "Cheat-bread",
    "/ˈtʃiːt.brɛd/",
    "m",
    "A second-quality brown wheaten bread, ranking below fine manchet but above coarse tourte.",
    "From obsolete \"cheat\" (shortened from \"escheat\" / purchased flour).",
    "\"The yeomen and servants ate cheat-bread at the side tables in the hall.\"",
    "Harrison's Description of England (1577)"
  ],
  [
    "Tourte-bread",
    "/ˈtʊərt.brɛd/",
    "m",
    "A coarse, heavy brown bread made of unbolted meal and bran, eaten by peasants and kennel hounds.",
    "From OF \"tourte\" (round loaf, cake), from Late Latin \"torta\" (twisted bread).",
    "\"A crust of dry tourte-bread and a cup of sour whey was all their evening supper.\"",
    "Early agricultural accounts"
  ],
  [
    "Medlar",
    "/ˈmɛd.lər/",
    "m",
    "A fruit resembling a small apple, eaten only when decayed to soft sweetness (\"bletted\").",
    "From OF \"meslier\" (medlar tree), from Latin \"mespilum.\"",
    "\"You'll be rotten ere you be half ripe, and that's the right virtue of the medlar.\"",
    "Shakespeare, \"As You Like It\""
  ],
  [
    "Quince",
    "/kwɪns/",
    "m",
    "A hard, fragrant yellow fruit cooked into marmalade, paste, and compotes in medieval banquets.",
    "From OF \"cooin\" (plural \"quoyns\"), from Latin \"cydonium\" (Cydonian apple, from Crete).",
    "\"They call for dates and quinces in the pastry.\"",
    "Shakespeare, \"Romeo and Juliet\""
  ],
  [
    "Brawn",
    "/brɔːn/",
    "m",
    "The seasoned, boiled, and pressed meat of a boar or pig, served cold in slices as a feast delicacy.",
    "From OF \"braon\" (fleshy part, muscle, of Germanic origin *brādon roast meat).",
    "\"A noble boar's head with lemon in his teeth and brawn in thick slices was borne in with carols.\"",
    "Irving, \"Bracebridge Hall\""
  ],
  [
    "Boar's-head",
    "/ˈbɔːrz.hɛd/",
    "m",
    "The traditional centerpiece of a medieval English Christmas feast, carried in with ceremonial song.",
    "Compound: boar + head.",
    "\"The boar's head in hand bring I, with garlands gay and rosemary; I pray you all sing merrily.\"",
    "The Boar's Head Carol (1521)"
  ],
  [
    "Vernage",
    "/ˈvɜːr.nɪdʒ/",
    "m",
    "A sweet, strong Italian white wine celebrated in medieval and Chaucerian literature.",
    "From OF \"vernache,\" from Italian \"vernaccia\" (wine from Vernazza in Liguria).",
    "\"He drinketh hypocras, and clary, and vernage, of spices hot, to increase his courage.\"",
    "Chaucer, \"Merchant's Tale\""
  ],
  [
    "Clary",
    "/ˈklɛər.i/",
    "m",
    "A sweetened, clarified wine spiced with clary herbs, ginger, and honey.",
    "From Medieval Latin \"claratum,\" from Latin \"clarus\" (clear).",
    "\"He poured a horn of clary and pledged the health of the bold forester.\"",
    "Robin Hood romances"
  ],
  [
    "Piment",
    "/ˈpɪm.ənt/",
    "m",
    "An ancient wine sweetened with honey and steeped in rich aromatic spices.",
    "From OF \"piment,\" from Latin \"pigmentum\" (color, juice, spice).",
    "\"Of piment, mead, and spiced ale there was great plenty for gentle and simple alike.\"",
    "Romance of Guy of Warwick"
  ],
  [
    "Syllabub-pot",
    "/ˈsɪl.ə.bʌb/",
    "e",
    "A special dual-handled vessel with a spout for drinking the liquid and spooning the froth of a syllabub.",
    "Compound: syllabub + pot.",
    "\"The cook brought in the porcelain syllabub-pot, crowned with peaks of lemon cream.\"",
    "Old English household accounts"
  ],
  [
    "Trencher-man",
    "/ˈtrɛn.tʃər.mæn/",
    "e",
    "A person with a hearty, voracious appetite; a great eater. \"A valiant trencherman.\"",
    "Compound: trencher + man.",
    "\"He is a very valiant trencherman; he hath an excellent stomach.\"",
    "Shakespeare, \"Much Ado About Nothing\""
  ],
  [
    "Salt-cellar",
    "/ˈsɔːltˌsɛl.ər/",
    "m",
    "The massive ornamental centerpiece for salt that divided the guests of honor from inferiors (\"below the salt\").",
    "From OF \"saliere\" (salt-holder) + \"cellar\" (redundant addition from English).",
    "\"Those seated above the great silver salt-cellar were served with venison and hippocras.\"",
    "Household ordinances of Henry VII"
  ],
  [
    "Below-the-salt",
    "/sɔːlt/",
    "m",
    "Sitting among the servants and inferiors at a medieval banquet hall table.",
    "Phrase derived from the position relative to the great salt-cellar.",
    "\"Poorer kinsmen and retainers sat below the salt, eating beef and drinking small-beer.\"",
    "Social history of dining"
  ],
  [
    "Spit-boy",
    "/ˈspɪt.bɔɪ/",
    "m",
    "A young boy employed in a great kitchen to turn the heavy iron roasting spit over the fire all day.",
    "Compound: spit + boy. Also called a \"turnspit.\"",
    "\"The poor little spit-boy sat sweating before the roaring fireplace, turning the haunch of venison.\"",
    "Tudor kitchen accounts"
  ],
  [
    "Turnspit-dog",
    "/ˈtɜːrn.spɪt/",
    "e",
    "A small, short-legged breed of dog trained to run inside a wooden wheel to turn a roasting spit.",
    "Compound: turn + spit + dog.",
    "\"A comical turnspit dog trotted tirelessly within his high wooden wheel above the hearth.\"",
    "Historical breeds of Britain"
  ],
  [
    "Scullery-maid",
    "/ˈskʌl.ər.iˌmeɪd/",
    "m",
    "The lowest female servant in a great household, responsible for scouring pots and scrubbing floors.",
    "From \"scullery\" (from OF \"escuelerie\" dish-office) + \"maid.\"",
    "\"The scullery-maid had hands red and raw from scouring greasy pewter with sand and lye.\"",
    "Mayhew, \"London Labour\""
  ],
  [
    "Kitchen-knave",
    "/ˈkɪtʃ.ɪnˌneɪv/",
    "m",
    "A male menial servant or scullion employed in a medieval castle kitchen.",
    "Compound: kitchen + knave (boy/servant).",
    "\"Gareth served a year as a kitchen-knave, suffering the taunts of Sir Kay with patience.\"",
    "Malory, \"Le Morte d'Arthur\""
  ],
  [
    "Fie-on't",
    "/faɪ/",
    "e",
    "An exclamation of deep disgust and rejection. \"Fie on't! Oh fie!\"",
    "Contraction of \"fie on it.\"",
    "\"Fie on't! Ah fie! 'Tis an unweeded garden that grows to seed; things rank and gross in nature possess it merely.\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Prithee-peace",
    "/ˈprɪð.i/",
    "e",
    "A customary polite formula pleading for silence and calm (\"I pray thee, peace\").",
    "Compound: prithee + peace.",
    "\"Prithee, peace! I dare do all that may become a man; who dares do more is none.\"",
    "Shakespeare, \"Macbeth\""
  ],
  [
    "Good-morrow",
    "/ɡʊdˈmɒr.oʊ/",
    "e",
    "The standard polite morning greeting of Elizabethan England (\"Good morning\").",
    "Compound: good + morrow (morning).",
    "\"Good morrow to my sweet prince! How fares your lordship this brisk autumn day?\"",
    "Shakespeare, comedies"
  ],
  [
    "God-den",
    "/ɡɒdˈdɛn/",
    "e",
    "A contracted greeting for \"good day\" or \"good evening\" (God give you good e'en).",
    "Contraction of \"God give you good evening.\"",
    "\"God-den, good fellow. Can you read anything you see?\"",
    "Shakespeare, \"Romeo and Juliet\""
  ],
  [
    "Anan",
    "/əˈnæn/",
    "e",
    "What did you say? Pardon? Used by servants answering a call (\"Coming, sir!\").",
    "Variant of \"anon\" (immediately, at once).",
    "\"Anan, sir! Anan! Score a pint of bastard in the Half-moon!\"",
    "Shakespeare, \"Henry IV, Part 1\""
  ],
  [
    "Well-a-day",
    "/ˈwɛl.ə.deɪ/",
    "e",
    "An exclamation expressing sorrow or lamentation (equivalent to \"alas the day\").",
    "From ME \"walawei\" (woe-lo-woe, from OE \"wā lā wā\").",
    "\"Well-a-day! That ever such a disaster should overtake so noble a house!\"",
    "Shakespeare, \"Pericles\""
  ],
  [
    "By-my-troth",
    "/troʊθ/",
    "e",
    "By my sworn truth or faith; upon my honor.",
    "From \"by my\" + \"troth\" (truth, pledge, OE \"trēowþ\").",
    "\"By my troth, Nerissa, my little body is aweary of this great world.\"",
    "Shakespeare, \"Merchant of Venice\""
  ],
  [
    "In-sooth",
    "/suːθ/",
    "e",
    "In truth, truly, indeed, genuinely.",
    "From \"in\" + \"sooth\" (truth).",
    "\"In sooth, I know not why I am so sad; it wearies me; you say it wearies you.\"",
    "Shakespeare, \"Merchant of Venice\""
  ],
  [
    "Hold-thy-peace",
    "/hoʊld/",
    "e",
    "Be silent; hold your tongue; stop speaking immediately.",
    "Idiomatic command: hold thy peace.",
    "\"Hold thy peace, thou knave, knight! I shall bid thee hold thy peace, thou knave!\"",
    "Shakespeare, \"Twelfth Night\""
  ],
  [
    "Afeared",
    "/əˈfɪərd/",
    "e",
    "Frightened, afraid, seized with terror.",
    "From OE \"āfǣran\" - to terrify, frighten (\"ā-\" intensive + \"fǣran\" to frighten).",
    "\"Be not afeared; the isle is full of noises, sounds and sweet airs, that give delight and hurt not.\"",
    "Shakespeare, \"The Tempest\""
  ],
  [
    "Beslubber",
    "/bɪˈslʌb.ər/",
    "e",
    "To daub, smear, or foul with dirt or grease.",
    "From \"be-\" + \"slubber\" (to smear, soil).",
    "\"Thou clay-brained guts, thou knotty-pated fool, thou whoreson obscene greasy tallow-catch, thou beslubbered rascal!\"",
    "Shakespeare, \"Henry IV, Part 1\""
  ],
  [
    "Fustilugs",
    "/ˈfʌs.tɪˌlʌɡz/",
    "e",
    "A fat, clumsy, grossly corpulent and sluggish person.",
    "From obsolete \"fusty\" (musty, stale) + \"lugs\" (ears, heavy appendages).",
    "\"Out of my sight, thou great lumbering fustilugs, and make room for lighter heels!\"",
    "Jacobean comedies"
  ],
  [
    "Woodcock",
    "/ˈwʊd.kɒk/",
    "e",
    "The gamebird; proverbially considered stupid and easily trapped, hence a simpleton or dupe.",
    "From OE \"wuducocc.\"",
    "\"O this woodcock, what an ass it is! He falls straight into the springe set for him.\"",
    "Shakespeare, \"Taming of the Shrew\""
  ],
  [
    "Ninny-hammer",
    "/ˈnɪn.iˌhæm.ər/",
    "e",
    "A foolish, silly person; a brainless simpleton.",
    "From \"ninny\" (fool, innocent) + \"hammer\" (clumsy tool).",
    "\"You foolish ninny-hammer, could you not see that he was picking your pocket all the while?\"",
    "Elizabethan jest-books"
  ],
  [
    "Dizzard",
    "/ˈdɪz.ərd/",
    "e",
    "A blockhead, dullard, foolishly giddy simpleton.",
    "From \"dizzy\" + pejorative suffix \"-ard.\"",
    "\"No man but an utter dizzard would hazard his fortune upon the throw of a single die.\"",
    "Burton, \"Anatomy of Melancholy\""
  ],
  [
    "Cross-biter",
    "/ˈkrɒsˌbaɪ.tər/",
    "e",
    "An Elizabethan swindler or sharper who cheated victims through cozenage and false dice.",
    "Thieves' cant: \"cross-bite\" (counter-trick).",
    "\"The cross-biters lured the young country squire into an alley where two confederates lay in wait.\"",
    "Robert Greene, \"Cony-Catching Pamphlets\""
  ],
  [
    "Cony-catcher",
    "/ˈkoʊ.niˌkætʃ.ər/",
    "e",
    "An Elizabethan confidence trickster or swindler who preyed upon gullible victims (\"conies\").",
    "From \"cony\" (rabbit, dupe) + \"catcher.\"",
    "\"A Notable Discovery of Coosnage, wherein the practices of cony-catchers are fully laid open.\"",
    "Robert Greene (1591)"
  ],
  [
    "Abram-man",
    "/ˈeɪ.brəm.mæn/",
    "e",
    "A vagabond or beggar who feigned madness to extort charity from the superstitious.",
    "From Abraham Ward in Bethlehem Hospital (Bedlam).",
    "\"The abram-man wandered through the village with straws in his hair, gibbering of devils.\"",
    "Dekker, \"The Belman of London\""
  ],
  [
    "Canting-crew",
    "/ˈkæn.tɪŋ.kruː/",
    "e",
    "The underworld fraternity of beggars, gypsies, and thieves using their own secret cant language.",
    "From \"cant\" (thieves' jargon, from Latin \"cantare\" to chant) + \"crew.\"",
    "\"The King of the Canting-Crew presided over the midnight assembly in the ruins of St. Giles.\"",
    "Thomas Harman, \"Caveat for Vagabonds\""
  ],
  [
    "Foist",
    "/fɔɪst/",
    "e",
    "A pickpocket who stole purses without cutting the strings; to introduce fraudulently.",
    "Originally Dutch \"vuisten\" (to take in the fist, from \"vuist\" fist).",
    "\"A nip was a cutter of purses, but a foist was one who drew the purse forth with nimble fingers.\"",
    "Greene, \"Art of Cony-Catching\""
  ],
  [
    "Swaggerer",
    "/ˈswæɡ.ər.ər/",
    "e",
    "A noisy, blustering, arrogant bully who struts about seeking quarrels.",
    "From \"swagger\" (to strut, sway insolently, Scandinavian origin) + \"-er.\"",
    "\"I must live among my neighbors; I'll no swaggerers here. Shut the door, I pray you.\"",
    "Shakespeare, \"Henry IV, Part 2\""
  ],
  [
    "Sneak-cup",
    "/ˈsniːk.kʌp/",
    "e",
    "A paltry fellow who sneaks away from his drink or avoids paying his share of the tavern bill.",
    "Compound: sneak + cup.",
    "\"How, the prince is a Jack, a sneak-cup! S'blood, an he were here, I would cudgel him like a dog!\"",
    "Shakespeare, \"Henry IV, Part 1\""
  ],
  [
    "Mome",
    "/moʊm/",
    "e",
    "A dull, stupid, blockheaded fellow; a mute dolt.",
    "From OF \"mome\" (buffoon, mimic) or Greek \"Momos\" (god of ridicule).",
    "\"Thou drone, thou snail, thou slug, thou sot, thou mome! Dost thou not hear me call?\"",
    "Shakespeare, \"Comedy of Errors\""
  ],
  [
    "Gossip",
    "/ˈɡɒs.ɪp/",
    "e",
    "Originally a godparent (god-sibling); a close female friend invited to a birth; later a talebearer.",
    "From OE \"godsibb\" - god-related (\"god\" + \"sibb\" relative, kin).",
    "\"My noble gossips, ye have been too prodigal in gifts to my little daughter.\"",
    "Shakespeare, \"Henry VIII\""
  ],
  [
    "Cummer",
    "/ˈkʌm.ər/",
    "e",
    "A godmother, female friend, or neighbor in Scottish and northern English dialect.",
    "From French \"commère\" (godmother, female crony).",
    "\"The cummers gathered round the blazing hearth to share their winter tales and warm posset.\"",
    "Scott, \"Heart of Midlothian\""
  ],
  [
    "Kinsman",
    "/ˈkɪnz.mən/",
    "m",
    "A blood relative or cousin (especially male).",
    "Compound: kin's + man.",
    "\"A little more than kin, and less than kind.\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Grandsire",
    "/ˈɡrændˌsaɪər/",
    "m",
    "A grandfather, forefather, or venerable ancestor.",
    "From \"grand\" + \"sire\" (lord, father, OF \"sieur\").",
    "\"Thy grandsire fought beside the Black Prince at the bloody field of Poitiers.\"",
    "Shakespeare, \"Richard II\""
  ],
  [
    "Grandam",
    "/ˈɡræn.dæm/",
    "m",
    "A grandmother; an ancient female ancestor.",
    "From \"grand\" + \"dam\" (mother, lady, Latin \"domina\").",
    "\"I had a grandam who believed in the transmigration of souls into birds.\"",
    "Shakespeare, \"Twelfth Night\""
  ],
  [
    "Sire",
    "/saɪər/",
    "m",
    "A respectful form of address to a king; a father; a male parent of a beast.",
    "From OF \"sire\" (lord, master, from Latin \"senior\" elder).",
    "\"Pardon, my sovereign sire! I come with tidings of great moment.\"",
    "Shakespeare, \"Richard III\""
  ],
  [
    "Dam",
    "/dæm/",
    "m",
    "A female parent (used originally of women of rank, later of animals).",
    "From OF \"dame\" (lady, mistress, from Latin \"domina\").",
    "\"The spotted leopardess defended her cubs against the spears of the huntsmen.\"",
    "Milton, \"Paradise Lost\""
  ],
  [
    "Bawd",
    "/bɔːd/",
    "e",
    "A woman who keeps a brothel or procures women for immoral purposes; a procuress.",
    "From ME \"baude,\" of Germanic origin (cognate with \"bold\").",
    "\"Mistress Overdone, a bawd of nine years' standing in the suburbs of Vienna.\"",
    "Shakespeare, \"Measure for Measure\""
  ],
  [
    "Pander",
    "/ˈpæn.dər/",
    "e",
    "A go-between in illicit amours; a pimp; to cater to base desires.",
    "From Pandarus, the character in the Trojan tale who procured Cressida for Troilus.",
    "\"If you prove a pander, let all go-betweens be called after your name: Pandars!\"",
    "Shakespeare, \"Troilus and Cressida\""
  ],
  [
    "Malkin",
    "/ˈmɔː.kɪn/",
    "e",
    "An untidy, slovenly kitchen maid; a mop for cleaning ovens; a scarecrow.",
    "Diminutive of the name Maud/Mall (Mary) + \"-kin.\"",
    "\"The kitchen malkin pins her richest lockram 'bout her reechy neck.\"",
    "Shakespeare, \"Coriolanus\""
  ],
  [
    "Doxy",
    "/ˈdɒk.si/",
    "e",
    "A beggar's mistress or female companion in Elizabethan underworld cant.",
    "From early modern Dutch \"docke\" (doll, sweetheart).",
    "\"When daffodils begin to peer, with heigh! the doxy over the dale.\"",
    "Shakespeare, \"Winter's Tale\""
  ],
  [
    "Trull",
    "/trʌl/",
    "e",
    "A drab, slut, or low prostitute.",
    "From German \"Trulle\" (vulgar woman, trollop).",
    "\"A drunken soldier singing with a noisy trull in the taproom of the Red Lion.\"",
    "Elizabethan crime pamphlets"
  ],
  [
    "Minx",
    "/mɪŋks/",
    "e",
    "A pert, impudent, flirtatious, or mischievous young girl.",
    "Of uncertain origin; perhaps related to Low German \"minsk\" (wench, woman).",
    "\"Damn her, lewd minx! O, damn her, damn her! Come, go with me apart.\"",
    "Shakespeare, \"Othello\""
  ],
  [
    "Quean",
    "/kwiːn/",
    "m",
    "A disreputable, ill-behaved woman or jade (distinct from queen, though originally cognate!).",
    "From OE \"cwene\" - woman (cognate with \"cwen\" queen, which had a long vowel).",
    "\"Away, you scold! Away, you scurvy quean! You shall not cross my threshold again!\"",
    "Elizabethan comedy"
  ],
  [
    "Harridan",
    "/ˈhær.ɪ.dən/",
    "t",
    "A strict, bossy, scolding, or belligerent old woman.",
    "From French \"haridelle\" (a worn-out old horse, nag).",
    "\"The old harridan shook her parasol in the cabby's face and demanded her fourpence change.\"",
    "Victorian street sketches"
  ],
  [
    "Ruff",
    "/rʌf/",
    "e",
    "A wide, stiffly starched, projecting pleated collar fashionable in the 16th and 17th centuries.",
    "From \"ruff\" (pleated frill, related to \"rough\"). Stiffened with yellow or blue starch.",
    "\"Her cartwheel ruff was so stiffly starched that she could scarce turn her neck to spit.\"",
    "Stubbes, \"Anatomy of Abuses\" (1583)"
  ],
  [
    "Whisk",
    "/wɪsk/",
    "e",
    "A wide, flat, stiff standing collar of lace worn by women in the early 17th century.",
    "From \"whisk\" (something swept around).",
    "\"A broad lace whisk supported by wires stood up behind her powdered ringlets.\"",
    "Jacobean fashion plates"
  ],
  [
    "Bum-roll",
    "/ˈbʌm.roʊl/",
    "e",
    "A padded crescent-shaped roll tied around the waist under the petticoat to puff out the skirt.",
    "Compound: bum (buttocks) + roll. The Elizabethan precursor to the Victorian bustle.",
    "\"She tied on her heavy bum-roll of horsehair before stepping into her velvet kirtle.\"",
    "Elizabethan domestic records"
  ],
  [
    "Rebato",
    "/rɪˈbɑː.toʊ/",
    "e",
    "A wire support or stiff under-collar used to hold up the great ruffs and whisks of the Jacobean era.",
    "From French \"rabat\" (turned-down collar, from \"rabattre\" to beat back).",
    "\"I think your other rebato were better; this lace sits not so seemly about your throat.\"",
    "Shakespeare, \"Much Ado About Nothing\""
  ],
  [
    "Forepart",
    "/ˈfɔːr.pɑːrt/",
    "e",
    "An elaborately embroidered triangular front panel visible beneath the parted gown.",
    "Compound: fore + part.",
    "\"The queen's forepart was of silver tissue embroidered with caterpillars and butterflies.\"",
    "Inventories of Elizabeth I"
  ],
  [
    "Partlet",
    "/ˈpɑːrt.lɪt/",
    "e",
    "A sleeveless neckerchief or chemisette worn to cover the low neckline of an Elizabethan gown.",
    "From OF \"pentelet\" (little band), influenced by the proper name Dame Partlet (the hen).",
    "\"A fine linen partlet embroidered with blackwork silk protected her throat from the sun.\"",
    "Tudor costume records"
  ],
  [
    "Peascod-belly",
    "/ˈpiːz.kɒdˌbɛl.i/",
    "e",
    "A doublet style fashionable in the 1580s padded to sag over the belt like a pea-pod.",
    "From \"peascod\" (pea-pod) + \"belly.\"",
    "\"His peascod-belly doublet was stuffed with six pounds of bombast, giving him the air of a pouter pigeon.\"",
    "Stubbes, \"Anatomy of Abuses\""
  ],
  [
    "Pumpkin-breeches",
    "/ˈpʌmp.kɪnˌbrɪtʃ.ɪz/",
    "e",
    "Extremely round, puffed-out short breeches padded with bombast, fashionable in the 1570s.",
    "Compound: pumpkin + breeches.",
    "\"He strutted in crimson velvet pumpkin-breeches that made his legs look like two sticks.\"",
    "Elizabethan satires"
  ],
  [
    "Slops",
    "/slɒps/",
    "e",
    "Loose, wide, baggy breeches or trousers worn by sailors, rustics, and gallants.",
    "From ME \"sloppe\" (loose garment), related to OE \"slūpan\" (to slip).",
    "\"A German from the waist downwards, all slops, and a Spaniard from the hip upward.\"",
    "Shakespeare, \"Much Ado About Nothing\""
  ],
  [
    "Galligaskins",
    "/ˌɡæl.ɪˈɡæs.kɪnz/",
    "e",
    "Loose, wide, baggy hose or breeches worn in the 16th and 17th centuries.",
    "From French \"garguesque\" (Gallic hose, from Italian \"caliga\" shoe/boot).",
    "\"His trunk-hose and broad galligaskins flapped about his knees as he ran.\"",
    "Nashe, \"Unfortunate Traveller\""
  ],
  [
    "Venetians",
    "/vəˈniː.ʃənz/",
    "e",
    "Knee-length breeches, full at the top and narrowing to button tightly below the knee.",
    "Named from the city of Venice, where the fashion originated.",
    "\"He ordered a suit of murrey velvet with Venetians tied with points of yellow silk.\"",
    "Henslowe's Diary"
  ],
  [
    "Nether-stocks",
    "/ˈnɛð.ər.stɒks/",
    "e",
    "The lower part of the hose; stockings covering the leg below the knee.",
    "Compound: nether (lower) + stocks (hose). Counterpart to upper-stocks.",
    "\"Ere I will be out-faced by such a knave, I will wear dirty nether-stocks for a twelvemonth.\"",
    "Shakespeare, \"Henry IV, Part 1\""
  ],
  [
    "Posy-ring",
    "/ˈpoʊ.zi.rɪŋ/",
    "e",
    "A gold finger-ring with a brief poetic sentiment or motto engraved inside the band.",
    "From \"posy\" (poesy, motto, little poem).",
    "\"A hoop of gold, a paltry ring that she did give me, whose posy was for all the world like cutler's poetry: Love me and leave me not.\"",
    "Shakespeare, \"Merchant of Venice\""
  ],
  [
    "Carcanet",
    "/ˈkɑːr.kə.nɛt/",
    "e",
    "A jeweled necklace, collar, or headband worn by Renaissance ladies.",
    "From French \"carcan\" (iron collar, carcanet) + diminutive suffix \"-et.\"",
    "\"Say that I lingered with you at your shop to see the making of her carcanet.\"",
    "Shakespeare, \"Comedy of Errors\""
  ],
  [
    "Aglet",
    "/ˈæɡ.lɪt/",
    "e",
    "The metal tag on the end of a lace or point, often wrought into decorative figures of gold.",
    "From OF \"aguillette\" - little needle, diminutive of \"aguille\" (needle).",
    "\"Why, give him gold enough and marry him to a puppet or an aglet-baby.\"",
    "Shakespeare, \"Taming of the Shrew\""
  ],
  [
    "Points",
    "/pɔɪnts/",
    "e",
    "Laces tipped with metal aglets used to tie doublets to hose or fasten garments.",
    "From OF \"point\" (stitch, fastening). \"Their points being broken, down fell their hose.\"",
    "\"Their points being broken - down fell their hose!\"",
    "Shakespeare, \"Henry IV, Part 1\""
  ],
  [
    "Crisping-pin",
    "/ˈkrɪs.pɪŋ.pɪn/",
    "e",
    "A curling iron or heated metal pin used by ladies to curl the hair.",
    "From \"crisp\" (to curl, wave, Latin \"crispus\") + \"pin.\"",
    "\"The ladies heated their crisping-pins in the hearth embers to form elaborate wire-stiffened curls.\"",
    "Elizabethan toilette accounts"
  ],
  [
    "Pantofle",
    "/pænˈtuː.fəl/",
    "e",
    "A soft indoor slipper with an open back and no heel-strap.",
    "From French \"pantoufle\" (slipper), of obscure origin.",
    "\"He shuffled across the polished floor in his velvet pantofles to greet the ambassador.\"",
    "Jacobean court accounts"
  ],
  [
    "Duckbill-shoes",
    "/ˈdʌk.bɪl.ʃuːz/",
    "e",
    "Extremely wide, flat-toed shoes fashionable in the reign of Henry VIII, replacing long pointed toes.",
    "Compound: duck-bill + shoes. Also called \"bear-paw shoes.\"",
    "\"Sumptuary laws had to limit the width of duckbill-shoes to no more than six inches across the toes!\"",
    "Costume histories of the Tudors"
  ],
  [
    "Jackboots",
    "/ˈdʒæk.buːts/",
    "t",
    "Heavy cavalry boots of stiff leather rising above the knee, worn by troopers and highwaymen.",
    "From \"jack\" (leather coat/armor) + \"boot.\"",
    "\"A tall highwayman in a scarlet cloak and mud-spattered jackboots stepped into the post-house.\"",
    "Victorian historical romances"
  ],
  [
    "Rowel",
    "/ˈraʊ.əl/",
    "m",
    "The small spiked revolving wheel on the shank of a spur.",
    "From OF \"roele\" (little wheel, Latin \"rotula\").",
    "\"He drove the sharp rowels of his spurs into the stallion's flanks and leaped the hedge.\"",
    "Scott, \"Marmion\""
  ],
  [
    "Pommel",
    "/ˈpɒm.əl/",
    "m",
    "The rounded knob at the end of a sword hilt; the upward-projecting front of a saddle.",
    "From OF \"pomel\" (little apple, Latin \"pomum\").",
    "\"He leaned against the pommel of his saddle, weary from twelve hours of hard pursuit.\"",
    "Chivalric romances"
  ],
  [
    "Cantle",
    "/ˈkæn.təl/",
    "m",
    "The raised rear part of a saddle behind the rider's seat; a corner or slice.",
    "From OF \"chantel\" (corner, piece, edge, from Latin \"canthus\").",
    "\"See how this river comes me cranking in, and cuts me from the best of all my land a huge half-moon, a monstrous cantle out.\"",
    "Shakespeare, \"Henry IV, Part 1\""
  ],
  [
    "Caparison",
    "/kəˈpær.ɪ.sən/",
    "m",
    "An ornamental covering spread over the saddle and harness of a warhorse.",
    "From French \"caparaçon,\" from Spanish \"caparazón\" (pack-saddle cover).",
    "\"The charger was led forth in magnificent caparisons of scarlet cloth embroidered with lions.\"",
    "Tournament records of Crecy"
  ],
  [
    "Caravel",
    "/ˈkær.ə.vɛl/",
    "e",
    "A small, fast, highly maneuverable sailing ship developed by the Portuguese in the 15th century.",
    "From Portuguese \"caravela,\" from Late Latin \"carabus\" (small wicker boat).",
    "\"Columbus set sail across the ocean in three caravels: the Niña, Pinta, and Santa María.\"",
    "Naval history of discovery"
  ],
  [
    "Carrack",
    "/ˈkær.ək/",
    "m",
    "A large three- or four-masted ocean-going sailing ship developed in the 14th and 15th centuries.",
    "From OF \"caraque,\" from Arabic \"qaraqir\" (merchant vessels).",
    "\"The great Portuguese carrack Madre de Dios was captured laden with pearls, silks, and cloves.\"",
    "Hakluyt's Voyages"
  ],
  [
    "Galleon",
    "/ˈɡæl.i.ən/",
    "e",
    "A large, multi-decked sailing ship used as armed cargo carriers and warships from the 16th to 18th centuries.",
    "From Spanish \"galeón,\" augmentative of \"galea\" (galley).",
    "\"Drake pursued the golden galleon Nuestra Señora de la Concepción along the Pacific coast.\"",
    "Sir Francis Drake's journals"
  ],
  [
    "Shallop",
    "/ˈʃæl.əp/",
    "e",
    "A light open boat with one or two masts, used for shallow waters, exploration, and fishing.",
    "From French \"chaloupe,\" from Dutch \"sloep\" (sloop).",
    "\"The Pilgrims assembled their shallop upon the sandy beach of Cape Cod to explore the coast.\"",
    "Bradford, \"Of Plymouth Plantation\""
  ],
  [
    "Pinnace",
    "/ˈpɪn.ɪs/",
    "e",
    "A small, light two-masted vessel used as a tender to a large warship or for coastal scouting.",
    "From French \"pinasse,\" from Spanish \"pinaza,\" from Latin \"pinus\" (pine wood).",
    "\"The admiral dispatched his swift pinnace into the harbor to sound the channel.\"",
    "Raleigh, \"Discovery of Guiana\""
  ],
  [
    "Hoy",
    "/hɔɪ/",
    "e",
    "A small coastal vessel, usually rigged as a sloop, used for freight or carrying passengers.",
    "From Middle Dutch \"heie\" (coastal vessel).",
    "\"We took passage upon the Margate hoy for a summer holiday at the seaside.\"",
    "Charles Lamb, \"Essays of Elia\""
  ],
  [
    "Pink",
    "/pɪŋk/",
    "e",
    "A sailing ship with a very narrow and rounded stern, popular in the 17th and 18th centuries.",
    "From Dutch \"pink\" (small fishing boat, from \"pincke\").",
    "\"A Barbary pink of eight guns bore down upon the merchantman off Cape St. Vincent.\"",
    "Defoe, \"Robinson Crusoe\""
  ],
  [
    "Bilander",
    "/ˈbɪl.ən.dər/",
    "t",
    "A small two-masted merchant vessel used on European canals and coastal waters.",
    "From Dutch \"bijlander\" - by-lander (hugging the land).",
    "\"The bilander was moored against the canal quay, unloading Dutch cheeses.\"",
    "Maritime history of the Low Countries"
  ],
  [
    "Ketch",
    "/kɛtʃ/",
    "e",
    "A two-masted fore-and-aft-rigged sailboat with a larger mainmast and a smaller mizzen stepped forward of the rudder.",
    "From ME \"catch\" / \"keche\" (vessel for catching or carrying).",
    "\"A bomb-ketch with two heavy mortars was anchored off the fortified mole.\"",
    "Naval history of Nelson's fleet"
  ],
  [
    "Snow",
    "/snoʊ/",
    "t",
    "A small two-masted square-rigged vessel with a supplementary trysail mast stepped behind the mainmast.",
    "From Dutch \"snauw\" (snout, beak-head of a ship).",
    "\"The merchant snow had weathered the hurricane off the Grand Banks with the loss of her topmasts.\"",
    "Marryat, \"Peter Simple\""
  ],
  [
    "Cat-o'-nine-tails",
    "/ˌkæt.əˈnaɪn.teɪlz/",
    "t",
    "A multi-tailed whip made of nine knotted cords used to administer severe flogging in the Royal Navy.",
    "So called because it scratched and clawed like a vicious cat.",
    "\"The boatswain's mate laid on thirty lashes with the cat-o'-nine-tails upon the bare back.\"",
    "Dana, \"Two Years Before the Mast\""
  ],
  [
    "Marlinspike",
    "/ˈmɑːr.lɪnˌspaɪk/",
    "e",
    "A tapered iron tool used by sailors to splice rope, untie tight knots, and serve cable.",
    "From \"marline\" (two-strand cord, Dutch \"marlijn\") + \"spike.\"",
    "\"He reached for his heavy iron marlinspike to prize apart the jammed hawser.\"",
    "Melville, \"Moby-Dick\""
  ],
  [
    "Belaying-pin",
    "/bɪˈleɪ.ɪŋ.pɪn/",
    "e",
    "A removable wooden or metal pin fitted into a rail on a ship, around which ropes were fastened.",
    "From the nautical verb \"to belay\" (to fasten a running rope).",
    "\"The mutineer snatched a heavy oak belaying-pin from the pin-rail and struck down the mate.\"",
    "Stevenson, \"Treasure Island\""
  ],
  [
    "Capstan",
    "/ˈkæp.stən/",
    "m",
    "A revolving vertical wooden cylinder turned by hand-spokes to hoist anchors and heavy yardarms.",
    "From OF \"cabestan,\" from Provençal \"cabestan,\" from Latin \"capistrum\" (halter).",
    "\"The crew tramped round and round the creaking capstan, chanting a sea-shanty as the anchor rose.\"",
    "Smollett, \"Roderick Random\""
  ],
  [
    "Fathom",
    "/ˈfæð.əm/",
    "m",
    "A traditional unit of length equal to six feet (the span of a man's outstretched arms), used for water depth.",
    "From OE \"fæþm\" - embrace, outstretched arms. Cognate with German \"Faden.\"",
    "\"Full fathom five thy father lies; of his bones are coral made.\"",
    "Shakespeare, \"The Tempest\""
  ],
  [
    "Dead-reckoning",
    "/ˈdɛdˌrɛk.ən.ɪŋ/",
    "e",
    "Navigating by calculating one's current position solely from the course steered and distance run since the last fix.",
    "Abbreviation of \"deduced reckoning.\"",
    "\"Without sight of sun or star for ten days, the captain navigated solely by dead-reckoning.\"",
    "Dampier, \"Voyages\""
  ],
  [
    "Astrolabe",
    "/ˈæs.trə.leɪb/",
    "m",
    "An ancient astronomical instrument used by navigators to calculate latitude by observing star altitudes.",
    "From Greek \"astrolabon\" - star-taking (\"astron\" star + \"lambanein\" to take).",
    "\"Chaucer composed a learned Treatise on the Astrolabe for his young son Lewis in 1391.\"",
    "Geoffrey Chaucer"
  ],
  [
    "Cross-staff",
    "/ˈkrɒsˌstɑːf/",
    "e",
    "An early navigational tool used by 16th-century mariners to measure the angle of the sun above the horizon.",
    "Compound: cross + staff. Also called \"Jacob's staff.\"",
    "\"The navigator sighted through the cross-staff to determine the noon latitude of the caravel.\"",
    "Hakluyt's Voyages"
  ],
  [
    "Binnacle",
    "/ˈbɪn.ə.kəl/",
    "e",
    "A waist-high wooden stand or case on a ship's deck containing the magnetic steering compass and lamp.",
    "From Spanish \"bitácora\" / Portuguese \"bitácola,\" from Latin \"habitaculum\" (dwelling, place).",
    "\"The helmsman watched the brass needle of the compass glowing within the binnacle lamp.\"",
    "Conrad, \"Typhoon\""
  ],
  [
    "Bowsprit",
    "/ˈboʊ.sprɪt/",
    "m",
    "A massive spar or timber jutting forward from the stem of a sailing ship to carry head-sails.",
    "From Middle Dutch \"boegspriet\" (\"boeg\" bow + \"spriet\" spar).",
    "\"The green seas broke over the bowsprit, drenching the sailors out on the footropes.\"",
    "Stevenson, \"Treasure Island\""
  ],
  [
    "Topgallant",
    "/təˈɡæl.ənt/",
    "e",
    "The mast, sail, or rigging immediately above the topmast in a square-rigged ship.",
    "From \"top\" + \"gallant\" (grand, elevated above).",
    "\"All hands aloft to furl the fore-topgallant sail before the squall strikes!\"",
    "Marryat, \"Mr. Midshipman Easy\""
  ],
  [
    "Moonraker",
    "/ˈmuːnˌreɪ.kər/",
    "t",
    "A small square sail carried at the very top of a tall mast, above the skysail, in light fair winds.",
    "Humorous nautical term: so high it \"rakes the moon!\"",
    "\"Under a press of canvas up to her royal moonrakers, the tea-clipper logged sixteen knots.\"",
    "Clippers of the China Seas"
  ],
  [
    "Studdingsail",
    "/ˈstʌn.səl/",
    "e",
    "An extra auxiliary sail extended outside the square sails by booms in light trade winds.",
    "From Dutch \"stot-zeil\" / \"stoot-zeil\" (push-sail, auxiliary sail). Pronounced \"stuns'l.\"",
    "\"The captain ordered all studdingsails set alow and aloft to catch the dying breeze.\"",
    "O'Brian, \"Master and Commander\""
  ],
  [
    "Larboard",
    "/ˈlɑːr.bərd/",
    "m",
    "The left-hand side of a ship looking forward; renamed \"port\" in the 1840s to avoid confusion with starboard.",
    "From ME \"laddebord\" - loading side (from \"lade\" to load + \"board\").",
    "\"Hard-a-larboard! Keep her clear of the jagged reef on the weather bow!\"",
    "Nautical orders of Drake's navy"
  ],
  [
    "Leeward",
    "/ˈluː.ərd/",
    "m",
    "The direction toward which the wind is blowing; the sheltered downwind side.",
    "From ME \"le\" (shelter, OE \"hlēow\") + \"-ward.\"",
    "\"The disabled frigate drifted helplessly toward the rocky shore to leeward.\"",
    "Falconer, \"The Shipwreck\""
  ],
  [
    "Abaft",
    "/əˈbæft/",
    "m",
    "Toward the stern or rear end of a ship; behind. \"Abaft the beam.\"",
    "From OE \"onbæftan\" - on + by + after/behind.",
    "\"The mainmast went over the side, falling abaft the deckhouse with a resounding crash.\"",
    "Defoe, \"Captain Singleton\""
  ],
  [
    "Holystone",
    "/ˈhoʊ.liˌstoʊn/",
    "t",
    "A soft porous block of sandstone used by sailors on their knees to scrub wooden decks white.",
    "Said to be so called because sailors knelt as if in prayer to scrub, or from purloined church tombstones!",
    "\"At five in the morning, all hands were turned out to holystone the quarterdeck.\"",
    "Dana, \"Two Years Before the Mast\""
  ],
  [
    "Scuttlebutt",
    "/ˈskʌt.əl.bʌt/",
    "t",
    "A drinking-water cask on a ship deck around which sailors gathered to exchange rumors and gossip.",
    "From \"scuttle\" (hole in a cask) + \"butt\" (cask, barrel). Origin of modern slang for gossip!",
    "\"According to the latest scuttlebutt in the galley, the admiral has ordered us home.\"",
    "Melville, \"White-Jacket\""
  ],
  [
    "Rat-catcher",
    "/ˈrætˌkætʃ.ər/",
    "t",
    "A person who captured rats from sewers and basements using terriers and ferrets, selling them for rat-baiting pits.",
    "Compound: rat + catcher.",
    "\"Jack Black, the Queen's rat-catcher, strolled through Leicester Square with a cage of prize white rats.\"",
    "Henry Mayhew, \"London Labour\""
  ],
  [
    "Climbing-boy",
    "/ˈklaɪ.mɪŋ.bɔɪ/",
    "t",
    "A young boy apprentice employed by a chimney-sweep to climb naked inside narrow flue pipes.",
    "Compound: climbing + boy.",
    "\"The plight of the poor little climbing-boys led to Lord Shaftesbury's Act of Parliament.\"",
    "Victorian social reforms"
  ],
  [
    "Puddler",
    "/ˈpʌd.lər/",
    "t",
    "A skilled ironworker who stirred molten pig-iron in a reverberatory furnace to convert it to malleable wrought iron.",
    "From \"puddle\" (to stir molten metal). One of the most exhausting trades in Victorian England.",
    "\"The puddler stood before the blinding glare of the furnace, turning the heavy rabble iron with scarred hands.\"",
    "Industrial histories of the Black Country"
  ],
  [
    "Knacker",
    "/ˈnæk.ər/",
    "t",
    "A buyer of worn-out or diseased horses and cattle, slaughtered for glue, dog meat, and bone-meal.",
    "Of obscure origin; perhaps from dialectal \"knack\" (trinket, horse-harness).",
    "\"Poor old Boxer the carthorse was sold to the knacker when his legs gave out.\"",
    "Orwell, \"Animal Farm\""
  ],
  [
    "Currier",
    "/ˈkʌr.i.ər/",
    "m",
    "A craftsman who dresses, smoothes, fats, and colors tanned leather to make it supple and waterproof.",
    "From OF \"corier,\" from Latin \"coriarius\" (tanner, from \"corium\" hide, leather).",
    "\"The currier rubbed neat's-foot oil into the heavy ox-hides until they were soft as glove-leather.\"",
    "Records of the Curriers' Company of London"
  ],
  [
    "Draper",
    "/ˈdreɪ.pər/",
    "m",
    "A dealer in woolen cloths and textile fabrics.",
    "From OF \"drapier,\" from \"drap\" (cloth, Late Latin \"drappus\").",
    "\"The draper measured three yards of stout blue broadcloth with his notched yard-wand.\"",
    "Elizabethan domestic accounts"
  ],
  [
    "Tapster",
    "/ˈtæp.stər/",
    "m",
    "A person (originally a woman) who drew ale and wine from the casks for customers in an inn.",
    "From \"tap\" (cask-spigot) + feminine agent suffix \"-ster.\"",
    "\"The jolly tapster filled the great black-jack with foamy October ale until it ran over the rim.\"",
    "Chaucer, \"Canterbury Tales\""
  ],
  [
    "Potboy",
    "/ˈpɒt.bɔɪ/",
    "t",
    "A young boy employed at an alehouse to collect empty beer-pots and wash pewter tankards.",
    "Compound: pot + boy.",
    "\"The little potboy dashed from bench to bench, gathering the heavy pewter mugs as closing time chimed.\"",
    "Dickens, \"Oliver Twist\""
  ],
  [
    "Drayman",
    "/ˈdreɪ.mən/",
    "t",
    "A driver of a dray - a heavy, low, flat cart used for hauling beer barrels from breweries.",
    "From \"dray\" (low carriage, OE \"dræge\" what is dragged) + \"man.\"",
    "\"Two burly draymen lowered the three-hundred-pound hogsheads into the publican's cellar with ropes.\"",
    "Mayhew, \"London Labour\""
  ],
  [
    "Navvy",
    "/ˈnæv.i/",
    "t",
    "A manual laborer employed in the excavation of canals (\"navigations\"), railway cuttings, and docks.",
    "Shortening of \"navigator\" (navigators of the early canal excavations).",
    "\"Tens of thousands of Irish navvies dug the great railway cuttings through the Pennines with pick and shovel.\"",
    "Victorian railway histories"
  ],
  [
    "Wheelwright",
    "/ˈwiːl.raɪt/",
    "m",
    "A craftsman who built and repaired spoked wooden wheels for carts, wagons, and carriages.",
    "Compound: wheel + wright (maker, builder, OE \"wyrhta\").",
    "\"The wheelwright fitted the red-hot iron tire around the ash felloes, dousing it with water until it shrank tight.\"",
    "George Sturt, \"The Wheelwright's Shop\""
  ],
  [
    "Milliner",
    "/ˈmɪl.ɪ.nər/",
    "e",
    "A person who makes and sells women's hats, ribbons, and finery (originally from Milan, Italy).",
    "Originally \"Milaner\" - dealer in fine Milanese goods (silks, ribbons, gloves).",
    "\"The milliner's parlor was fragrant with lavender and filled with straw bonnets trimmed with silk violets.\"",
    "Austen, \"Pride and Prejudice\""
  ],
  [
    "Beguile",
    "/bɪˈɡaɪl/",
    "m",
    "To charm, enchant, or trick someone, sometimes in a deceptive way.",
    "From \"be-\" + \"guile\" (treachery, deceit, from OF \"guile\").",
    "\"With sweet words and gentle smiles she beguiled the weary hours of his captivity.\"",
    "Shakespeare, \"Twelfth Night\""
  ],
  [
    "Inveigle",
    "/ɪnˈveɪ.ɡəl/",
    "e",
    "To persuade someone to do something by means of deception or flattery; to entice.",
    "From Anglo-French \"enveugler\" (to blind, from French \"aveugle\" blind, Latin \"ab oculis\").",
    "\"He inveigled his elderly aunt into altering her will in his favor.\"",
    "Victorian inheritance novels"
  ],
  [
    "Dissemble",
    "/dɪˈsɛm.bəl/",
    "e",
    "To conceal one's true motives, feelings, or beliefs; to put on a false appearance.",
    "From Latin \"dissimulare\" - to hide, dissimulate (\"dis-\" + \"similis\" like).",
    "\"He had learned at court to smile upon those he hated and dissemble his inner ambition.\"",
    "Shakespeare, \"Othello\""
  ],
  [
    "Behoove",
    "/bɪˈhuːv/",
    "m",
    "To be appropriate, incumbent, or morally necessary for someone. \"It behooves you to speak.\"",
    "From OE \"behōfian\" - to be necessary (related to \"behoof\").",
    "\"It behooves every honest citizen to assist the magistrates in keeping the peace.\"",
    "Defoe, \"Journal of the Plague Year\""
  ],
  [
    "Betide",
    "/bɪˈtaɪd/",
    "m",
    "To happen, occur, or befall someone. \"Woe betide him!\"",
    "From ME \"bityden\" - \"be-\" + \"tide\" (to happen, from OE \"tīd\" time/occasion).",
    "\"Woe betide the traveler who crosses the forest after the curfew bell has tolled!\"",
    "Traditional ballads"
  ],
  [
    "Chide",
    "/tʃaɪd/",
    "m",
    "To scold, rebuke, or express disapproval to someone; to fret loudly.",
    "From OE \"cīdan\" - to contend, quarrel, scold. Past tense \"chid\" or \"chided.\"",
    "\"The master chid the careless apprentice for spilling ink upon the legal ledger.\"",
    "Shakespeare, \"Henry IV\""
  ],
  [
    "Berate",
    "/bɪˈreɪt/",
    "e",
    "To scold or criticize someone angrily and at great length.",
    "From \"be-\" + \"rate\" (to scold, chide, from Latin \"reri\" to reckon).",
    "\"The furious coachman berated the ostler for failing to water the horses.\"",
    "Victorian travel chronicles"
  ],
  [
    "Foreswear",
    "/fɔːrˈswɛər/",
    "m",
    "To agree to give up or do without something; to swear falsely; to perjure oneself.",
    "From OE \"forswerian\" - to swear falsely (\"for-\" away/badly + \"swerian\" swear).",
    "\"I have foresworn his company, for he is a companion of thieves and cutpurses.\"",
    "Shakespeare, \"Henry IV\""
  ],
  [
    "Imbibe",
    "/ɪmˈbaɪb/",
    "e",
    "To drink in; to absorb liquid; to assimilate ideas or principles.",
    "From Latin \"imbibere\" - to drink in (\"in-\" + \"bibere\" to drink).",
    "\"He imbibed a deep glass of Madeira before answering the commissioner's queries.\"",
    "Dickens, \"Pickwick Papers\""
  ],
  [
    "Sate",
    "/seɪt/",
    "e",
    "To satisfy a desire or appetite fully; to cloy by overabundance.",
    "Shortening of \"satiate\" or from ME \"saden\" (to make full/sad, OE \"sadian\").",
    "\"After three days of fasting, the ravenous wolf sated his hunger upon the carcass.\"",
    "Poetic descriptions"
  ],
  [
    "Ululate",
    "/ˈʌl.jʊ.leɪt/",
    "t",
    "To howl or wail as an expression of strong grief, sorrow, or triumph.",
    "From Latin \"ululare\" - to howl, wail (echoic/onomatopoeic).",
    "\"The mournful ululations of the hired keeners echoed across the Irish peat-bog.\"",
    "Victorian anthropological accounts"
  ],
  [
    "Keen",
    "/kiːn/",
    "t",
    "To make a loud wailing lament for the dead, especially in Irish and Scottish tradition.",
    "From Irish \"caoinim\" - I wail, lament for the dead.",
    "\"The women sat about the corpse, keening until the dawn broke over the mountains.\"",
    "Synge, \"Riders to the Sea\""
  ],
  [
    "Truckle",
    "/ˈtrʌk.əl/",
    "e",
    "To submit obsequiously to someone; to fawn or cringe (from sleeping on a lower trundle-bed).",
    "From \"truckle-bed\" (a low bed on wheels rolled under a higher bed for servants).",
    "\"He would never truckle to a tyrant, whatever threats were hurled against him.\"",
    "Macaulay, \"History of England\""
  ],
  [
    "Kowtow",
    "/ˌkaʊˈtaʊ/",
    "t",
    "To act in an excessively subservient or fawning manner; originally the Chinese ritual prostration.",
    "From Chinese \"kòu tóu\" - knock head (touching the forehead to the ground in homage).",
    "\"The ambitious clerk was forever kowtowing to the directors of the company.\"",
    "Victorian satires"
  ],
  [
    "Revere",
    "/rɪˈvɪər/",
    "e",
    "To feel deep respect or veneration for someone holy, noble, or ancient.",
    "From Latin \"revereri\" - to stand in awe of (\"re-\" intensive + \"vereri\" to fear).",
    "\"The villagers revered the memory of the saintly parson who had served them forty years.\"",
    "Goldsmith, \"The Deserted Village\""
  ],
  [
    "Venerate",
    "/ˈvɛn.ə.reɪt/",
    "e",
    "To regard with great respect; to revere due to age, character, or holiness.",
    "From Latin \"venerari\" - to worship, adore, from \"venus\" (love, beauty, grace).",
    "\"The ancient oak was venerated by the countryfolk as the meeting-place of their forefathers.\"",
    "Wordsworth, \"The Prelude\""
  ],
  [
    "Laud",
    "/lɔːd/",
    "m",
    "To praise, extol, or acclaim a person or achievement highly.",
    "From Latin \"laudare\" - to praise, from \"laus\" (praise, glory).",
    "\"The poets of the court lauded the Queen's virtues in allegorical verses.\"",
    "Spenser, \"The Faerie Queene\""
  ],
  [
    "Calumniate",
    "/kəˈlʌm.ni.eɪt/",
    "e",
    "To make false and defamatory statements about someone maliciously; to slander.",
    "From Latin \"calumniari\" - to attack with false accusations, from \"calumnia\" (slander).",
    "\"He had been wickedly calumniated by rivals who envied his sudden rise at court.\"",
    "Clarendon, \"History of the Rebellion\""
  ],
  [
    "Contemn",
    "/kənˈtɛm/",
    "e",
    "To treat or regard with contempt, scorn, or disdain.",
    "From Latin \"contemnere\" - to despise, scorn (\"con-\" intensive + \"temnere\" to despise).",
    "\"The haughty nobleman contemned the petitions of the starving artisans.\"",
    "Milton, \"Samson Agonistes\""
  ],
  [
    "Deride",
    "/dɪˈraɪd/",
    "e",
    "To express contempt for; to laugh at someone or something with cruel ridicule.",
    "From Latin \"deridere\" - to mock, laugh at (\"de-\" down + \"ridere\" to laugh).",
    "\"The critics derided the young poet's first volume as clumsy and bombastic.\"",
    "Byron, \"English Bards and Scotch Reviewers\""
  ],
  [
    "Twit",
    "/twɪt/",
    "e",
    "To tease, taunt, or reproach someone with a past fault or embarrassing secret.",
    "Shortened from OE \"ætwītan\" - to reproach with, blame (\"æt-\" at + \"wītan\" to blame).",
    "\"She was forever twitting her brother about his awkward dancing at the assembly ball.\"",
    "Jane Austen, \"Pride and Prejudice\""
  ],
  [
    "Slay",
    "/sleɪ/",
    "m",
    "To kill someone violently in battle; to put to death.",
    "From OE \"slēan\" - to strike, kill (cognate with German \"schlagen\"). Past tense \"slew.\"",
    "\"Saint George slew the dragon with his spear and delivered the maiden from the cave.\"",
    "The Golden Legend"
  ],
  [
    "Dastard",
    "/ˈdæs.tərd/",
    "m",
    "A dishonorable, contemptible, and malicious coward.",
    "From ME \"dastard\" (fool, dullard), related to \"daze\" (stupefied) + pejorative suffix \"-ard.\"",
    "\"A dastard who struck his adversary from behind while he lay disarmed upon the turf.\"",
    "Scott, \"Ivanhoe\""
  ],
  [
    "Fainthearted",
    "/ˌfeɪntˈhɑːr.tɪd/",
    "m",
    "Lacking courage or resolution; cowardly, timid.",
    "Compound: faint + hearted.",
    "\"Faint heart never won fair lady.\"",
    "Traditional English proverb (recorded c. 1545)"
  ],
  [
    "Lion-hearted",
    "/ˌlaɪ.ənˈhɑːr.tɪd/",
    "m",
    "Courageous and brave beyond measure; having the fearless heart of a lion.",
    "Compound: lion + hearted. Epithet of King Richard I (Cœur de Lion).",
    "\"King Richard the Lion-hearted led his knights across the burning sands of Palestine.\"",
    "Chronicles of the Crusades"
  ],
  [
    "Knightly",
    "/ˈnaɪt.li/",
    "m",
    "Befitting, characteristic of, or appropriate to a noble knight; chivalrous.",
    "From \"knight\" + \"-ly.\"",
    "\"He performed many a knightly deed of arms that won the admiration of the whole army.\"",
    "Malory, \"Le Morte d'Arthur\""
  ],
  [
    "Sprightly",
    "/ˈspraɪt.li/",
    "e",
    "Lively, full of energy, spirited, cheerful, and brisk in motion.",
    "From \"spright\" (archaic variant of \"sprite\" / spirit) + \"-ly.\"",
    "\"The old gentleman danced a sprightly jig with his granddaughter at the harvest home.\"",
    "Irving, \"Bracebridge Hall\""
  ],
  [
    "Refulgent",
    "/rɪˈfʌl.dʒənt/",
    "e",
    "Shining brightly; radiant, gleaming with brilliant light.",
    "From Latin \"refulgens,\" from \"refulgere\" (to flash back, shine brightly).",
    "\"The refulgent beams of the rising sun gilded the snowy peaks of the Alps.\"",
    "Poetic descriptions"
  ],
  [
    "Slatternly",
    "/ˈslæt.ərn.li/",
    "e",
    "Untidy, dirty, and careless in appearance or domestic habits.",
    "From \"slattern\" + \"-ly.\"",
    "\"A slatternly maid with uncombed hair and stockings down at heel opened the door.\"",
    "Dickens, \"Bleak House\""
  ],
  [
    "Emaciated",
    "/ɪˈmeɪ.ʃi.eɪ.tɪd/",
    "t",
    "Abnormally thin or weak, especially because of starvation or wasting disease.",
    "From Latin \"emaciatus,\" from \"emaciare\" (to make lean, from \"macies\" leanness).",
    "\"The captive emerged from the dungeon emaciated, his cheekbones protruding through paper-thin skin.\"",
    "Dumas, \"The Count of Monte Cristo\""
  ],
  [
    "Strapping",
    "/ˈstræp.ɪŋ/",
    "t",
    "Big, tall, robust, and strong in physical build.",
    "From \"strap\" (a stout leather thong; something large and strapping).",
    "\"A strapping country lad of nineteen who could out-wrestle any man in the riding.\"",
    "George Eliot, \"Adam Bede\""
  ],
  [
    "Sinewy",
    "/ˈsɪn.juː.i/",
    "m",
    "Lean, tough, muscular, and stringy in build; having strong cords of sinew.",
    "From \"sinew\" (tendon, OE \"sinu\") + \"-y.\"",
    "\"His sinewy forearms were browned by forty years of sun on the open deck.\"",
    "Melville, \"Moby-Dick\""
  ],
  [
    "Adamantine",
    "/ˌæd.əˈmæn.taɪn/",
    "m",
    "Unbreakable, diamond-hard, completely impenetrable; stubbornly inflexible.",
    "From Greek \"adamantinos,\" from \"adamas\" (unconquerable diamond/steel).",
    "\"The gates of Hell were bound with three massive bands of adamantine brass.\"",
    "Milton, \"Paradise Lost\""
  ],
  [
    "Refractory",
    "/rɪˈfræk.tər.i/",
    "e",
    "Stubborn, unmanageable, resisting authority, rebellious against discipline.",
    "From Latin \"refractarius\" - stubborn, obstinate, from \"refringere\" (to break back).",
    "\"The refractory schoolboy refused to recite his Greek verbs, defying the master's rod.\"",
    "Victorian school chronicles"
  ],
  [
    "Contumacious",
    "/ˌkɒn.tjuːˈmeɪ.ʃəs/",
    "e",
    "Stubbornly disobedient to authority, especially in contempt of a court of law.",
    "From Latin \"contumax\" - insolent, stubborn, from \"tumere\" (to swell with pride).",
    "\"The contumacious witness was committed to the Fleet Prison for refusing to answer the interrogation.\"",
    "Chancery court records"
  ],
  [
    "Mulish",
    "/ˈmjuː.lɪʃ/",
    "t",
    "Resembling or characteristic of a mule; unreasonably, obstinately stubborn.",
    "From \"mule\" + \"-ish.\"",
    "\"With mulish obstinacy, the old farmer refused to sell an inch of his ditch to the railway company.\"",
    "Victorian novels"
  ],
  [
    "Splenetic",
    "/splɪˈnɛt.ɪk/",
    "e",
    "Bad-tempered, irritable, spiteful, or peevish (formerly attributed to an inflamed spleen).",
    "From Late Latin \"spleneticus,\" from Greek \"splen\" (spleen).",
    "\"The splenetic old uncle cut his nephew out of his will over a difference of opinion on whist.\"",
    "Smollett, \"Humphry Clinker\""
  ],
  [
    "Choleric",
    "/ˈkɒl.ər.ɪk/",
    "m",
    "Easily moved to hot anger; irascible; hot-tempered (dominated by yellow bile in humourism).",
    "From OF \"colerique,\" from Latin \"cholericus,\" from Greek \"chole\" (bile).",
    "\"A choleric old general who turned purple in the face and roared whenever his port was late.\"",
    "Thackeray, \"Vanity Fair\""
  ],
  [
    "Peevish",
    "/ˈpiː.vɪʃ/",
    "m",
    "Easily irritated, fretful, querulous, especially by unimportant things.",
    "Of obscure ME origin; perhaps imitative of a fretful whine (\"peep\").",
    "\"She gave a peevish toss of her curls and turned her back upon the company.\"",
    "Jane Austen, \"Persuasion\""
  ],
  [
    "Querulous",
    "/ˈkwɛr.ʊ.ləs/",
    "e",
    "Complaining in a petulant, whining, or fretful manner.",
    "From Latin \"querulus\" - full of complaints, from \"queri\" (to complain).",
    "\"His querulous voice droned on through the afternoon, lamenting every draft in the room.\"",
    "Dickens, \"Bleak House\""
  ],
  [
    "Bilious",
    "/ˈbɪl.i.əs/",
    "e",
    "Spiteful, bad-tempered, or sickly from liver disorder; having a sickly yellowish complexion.",
    "From Latin \"biliosus,\" from \"bilis\" (bile).",
    "\"A bilious attack confined the gentleman to his room, where he grumbled at every footstep.\"",
    "Victorian domestic memoirs"
  ],
  [
    "Scurrilous",
    "/ˈskʌr.ɪ.ləs/",
    "e",
    "Coarsely abusive, vulgar, foul-mouthed, and offensively low in language.",
    "From Latin \"scurrilis\" - buffoon-like, from \"scurra\" (buffoon, jester).",
    "\"An anonymous pamphlet of the most scurrilous character was circulated against the candidate.\"",
    "Victorian election accounts"
  ],
  [
    "Crestfallen",
    "/ˈkrɛstˌfɔː.lən/",
    "e",
    "Sad and disappointed; humiliated, having the comb or crest lowered (from cockfighting).",
    "Compound: crest (rooster's comb/helmet plume) + fallen.",
    "\"The defeated champion returned from the lists thoroughly crestfallen and downcast.\"",
    "Shakespeare, \"Henry IV\""
  ],
  [
    "Pestilential",
    "/ˌpɛs.tɪˈlɛn.ʃəl/",
    "e",
    "Harmful or destructive like a deadly pestilence; morally corrupting; producing plague.",
    "From Late Latin \"pestilentialis,\" from \"pestilentia\" (plague).",
    "\"A foul and pestilential congregation of vapors hung over the city during the Great Plague of 1665.\"",
    "Defoe, \"Journal of the Plague Year\""
  ],
  [
    "Baneful",
    "/ˈbeɪn.fʊl/",
    "m",
    "Producing deadly destruction, harm, or ruin; poisonous.",
    "From OE \"bana\" (killer, slayer, bane) + \"-ful.\"",
    "\"The baneful weed grew rank along the edges of the poisoned well.\"",
    "Milton, \"Comus\""
  ],
  [
    "Direful",
    "/ˈdaɪər.fʊl/",
    "e",
    "Extremely dreadful, terrible, calamitous, or ominous.",
    "Compound: dire + \"-ful.\"",
    "\"Direful tidings were brought by a breathless messenger from the battlefield of Flodden.\"",
    "Shakespeare, \"Macbeth\""
  ],
  [
    "Paltry",
    "/ˈpɔːl.tri/",
    "e",
    "Petty, trivial, contemptibly small, utterly worthless or mean.",
    "Probably from Low German \"paltrig\" (ragged, torn), from \"palte\" (rag).",
    "\"He sold his ancestral birthright for a paltry sum of twenty pieces of silver.\"",
    "Shakespeare, \"Julius Caesar\""
  ],
  [
    "Sordid",
    "/ˈsɔːr.dɪd/",
    "e",
    "Involving ignoble actions and motives; morally base, vile, dirty, and squalid.",
    "From Latin \"sordidus\" - dirty, foul, mean, from \"sordere\" (to be dirty).",
    "\"The miser lived in sordid squalor, counting his golden guineas behind bolted shutters.\"",
    "Dickens, \"Our Mutual Friend\""
  ],
  [
    "Niggardly",
    "/ˈnɪɡ.ərd.li/",
    "m",
    "Stingy, parsimonious, grudging in giving, giving in wretchedly small measure.",
    "From ME \"nigon\" / \"niggard\" (miser), of Scandinavian origin (Old Norse \"hnøggr\" stingy).",
    "\"He dispensed his charity with a niggardly hand, grumbling at every farthing.\"",
    "Chaucer, \"Romaunt of the Rose\""
  ],
  [
    "Avaricious",
    "/ˌæv.əˈrɪʃ.əs/",
    "m",
    "Having or showing an extreme greed for wealth or material gain.",
    "From OF \"avaricieus,\" from Latin \"avaritia\" (greed, from \"avarus\" greedy).",
    "\"The avaricious moneylender demanded his pound of flesh according to the strict bond.\"",
    "Shakespeare, \"Merchant of Venice\""
  ],
  [
    "Brake",
    "/breɪk/",
    "m",
    "A thicket of bushes, briers, or ferns; a dense tangled undergrowth.",
    "From OE \"bracu\" (fern, bracken) or Middle Dutch \"braeke\" (brushwood).",
    "\"Through bog, through bush, through brake, through brier.\"",
    "Shakespeare, \"Midsummer Night's Dream\""
  ],
  [
    "Spinney",
    "/ˈspɪn.i/",
    "m",
    "A small area of trees and brushwood, especially one planted to shelter game.",
    "From OF \"espinei\" - thorny place, from Latin \"spinetum\" (thorn-hedge, from \"spina\" thorn).",
    "\"A fox broke cover from the birch spinney and dashed across the open stubble.\"",
    "Surtees, \"Handley Cross\""
  ],
  [
    "Dell",
    "/dɛl/",
    "m",
    "A small, secluded, deep and quiet wooded valley.",
    "From OE \"dell\" (hollow, valley). Cognate with \"dale\" and German \"Tal.\"",
    "\"In a green dell beneath the shadow of ancient yews, the holy hermit built his cell.\"",
    "Spenser, \"Faerie Queene\""
  ],
  [
    "Combe",
    "/kuːm/",
    "m",
    "A deep, sheltered hollow or small valley on the side of a hill (especially in Devon and Somerset).",
    "From OE \"cumb\" (valley), borrowed from Celtic *kumbā (valley, bowl).",
    "\"The sheep grazed on the steep green slopes of the combe, protected from the sea winds.\"",
    "R.D. Blackmore, \"Lorna Doone\""
  ],
  [
    "Slough",
    "/slaʊ/",
    "m",
    "A swamp, bog, or deep muddy place. \"The Slough of Despond.\"",
    "From OE \"slōh\" - muddy ditch, swamp.",
    "\"The cart was stuck fast to the axles in the deep mire of the village slough.\"",
    "Bunyan, \"The Pilgrim's Progress\""
  ],
  [
    "Morass",
    "/məˈræs/",
    "e",
    "An area of muddy or boggy ground; a quagmire; an overwhelming confusion.",
    "From Dutch \"moeras\" (marsh), from OF \"marais\" (marsh).",
    "\"The cavalry charged into the treacherous morass, where the horses floundered to their saddles.\"",
    "Macaulay, \"History of England\""
  ],
  [
    "Wold",
    "/woʊld/",
    "m",
    "A high, open, uncultivated tract of rolling country; the Yorkshire or Cotswold Wolds.",
    "From OE \"wald\" - forest, open upland. Cognate with German \"Wald\" (forest).",
    "\"The chilly wind blew unchecked across the lonely chalk wolds of Yorkshire.\"",
    "Tennyson, \"In Memoriam\""
  ],
  [
    "Weald",
    "/wiːld/",
    "m",
    "The wooded district comprising parts of Kent, Sussex, and Surrey (\"the Weald\").",
    "Southern Old English variant of \"wald\" (forest).",
    "\"Charcoal-burners and iron-smelters had cleared the ancient oak groves of the Sussex Weald.\"",
    "Defoe, \"Tour through Great Britain\""
  ],
  [
    "Barrow",
    "/ˈbær.oʊ/",
    "m",
    "An ancient prehistoric burial mound of earth and stones (tumulus).",
    "From OE \"beorg\" - hill, mound, mountain. Cognate with German \"Berg.\"",
    "\"The treasure of the ancient kings lay hidden within the stone chamber of the barrow.\"",
    "Epic of Beowulf"
  ],
  [
    "Cairn",
    "/kɛərn/",
    "m",
    "A mound of rough stones built as a memorial or landmark on a hilltop.",
    "From Scottish Gaelic \"càrn\" (heap of stones, rock).",
    "\"The climbers piled another granite boulder upon the summit cairn before descending.\"",
    "Highland travel narratives"
  ],
  [
    "Rill",
    "/rɪl/",
    "m",
    "A very small stream, brook, or rivulet of water.",
    "Probably of Low German or Dutch origin (\"rille\" channel, groove).",
    "\"A crystal rill bubbled up among the mossy roots of the ancient beech tree.\"",
    "Keats, \"Endymion\""
  ],
  [
    "Brooklet",
    "/ˈbrʊk.lɪt/",
    "e",
    "A tiny brook or small babbling stream.",
    "Diminutive: brook + \"-let.\"",
    "\"The tiny brooklet joined the river after winding through the watercress beds.\"",
    "Pastoral poetry"
  ],
  [
    "Freshet",
    "/ˈfrɛʃ.ɪt/",
    "e",
    "The flood of a river caused by heavy rain or melted spring snow; a stream of fresh water.",
    "From \"fresh\" + diminutive suffix \"-et.\"",
    "\"The spring freshet tore away the wooden footbridge and flooded the lower meadows.\"",
    "Thoreau, \"Walden\""
  ],
  [
    "Beck",
    "/bɛk/",
    "m",
    "A brook, stream, or rocky mountain stream in northern England.",
    "From Old Norse \"bekkr\" - stream, brook. Characteristic of Cumberland dialect.",
    "\"The trout darted into the shadowed pool beneath the waterfall of the mountain beck.\"",
    "Wordsworth, \"The Prelude\""
  ],
  [
    "Ness",
    "/nɛs/",
    "m",
    "A headland, cape, or promontory of land jutting into the sea (common in place-names: Dungeness, Sheerness).",
    "From OE \"næs\" - nose, headland. Cognate with \"nose.\"",
    "\"The lighthouse flashed its warning beacon from the rocky cliff of the stormy ness.\"",
    "Nautical charts of the North Sea"
  ],
  [
    "Zephyr",
    "/ˈzɛf.ər/",
    "m",
    "A soft, gentle, mild western breeze.",
    "From Greek \"Zephyros\" - the god of the west wind.",
    "\"A gentle zephyr rippled the surface of the lily-covered lake on that summer eve.\"",
    "Shakespeare, \"Cymbeline\""
  ],
  [
    "Boreas",
    "/ˈbɔːr.i.əs/",
    "e",
    "The god of the cold north wind; the north wind personified.",
    "From Greek \"Boreas\" - the north wind.",
    "\"Fierce Boreas with his icy breath stripped the remaining leaves from the forest boughs.\"",
    "Spenser, \"Shepheardes Calender\""
  ],
  [
    "Crepuscular",
    "/krɪˈpʌs.kjʊ.lər/",
    "t",
    "Relating to twilight; active in the dim light of dawn and dusk (of animals).",
    "From Latin \"crepusculum\" (twilight, dusk).",
    "\"Bats, moths, and other crepuscular creatures emerged into the gathering gloom of evening.\"",
    "Gilbert White, \"Natural History of Selborne\""
  ],
  [
    "Guerdon",
    "/ˈɡɜːr.dən/",
    "m",
    "A reward, recompense, or prize given for valor or loyal service.",
    "From OF \"guerdon,\" from Medieval Latin \"widerdonum\" (Germanic *wither- + Latin donum).",
    "\"He received the lady's favor as his sweetest guerdon in the tournament.\"",
    "Chaucer, \"Troilus and Criseyde\""
  ],
  [
    "Weasand",
    "/ˈwiː.zənd/",
    "m",
    "The windpipe, trachea, or throat.",
    "From OE \"wāsend\" (gullet, windpipe).",
    "\"He gripped the cutthroat firmly by the weasand until he dropped the dagger.\"",
    "Shakespeare, \"The Tempest\""
  ],
  [
    "Yclept",
    "/ɪˈklɛpt/",
    "m",
    "Called, named; by the name of (archaic past participle of \"clepe\").",
    "From OE \"ġecleopod,\" past participle of \"cleopian\" (to call, name).",
    "\"A gentle Knight was pricking on the plaine, yclept the Redcrosse Knight.\"",
    "Spenser, \"The Faerie Queene\""
  ],
  [
    "Wight",
    "/waɪt/",
    "m",
    "A human being; a living creature or person (often unfortunate or uncanny).",
    "From OE \"wiht\" (creature, thing, being). Cognate with German \"Wicht.\"",
    "\"No gentler wight ever bore shield or spur in the king's chivalry.\"",
    "Chaucer, \"The Canterbury Tales\""
  ],
  [
    "Bootless",
    "/ˈbuːt.lɪs/",
    "m",
    "Useless, fruitless, unavailing; without profit or remedy.",
    "From OE \"bōt\" (remedy, advantage, \"boot\") + \"-less.\"",
    "\"I made bootless tears in the lonely night, for the past could not be recalled.\"",
    "Shakespeare, \"Sonnet 29\""
  ],
  [
    "Maugre",
    "/ˈmɔː.ɡər/",
    "m",
    "In spite of; notwithstanding.",
    "From OF \"maugré\" (ill-will, from \"mal\" ill + \"gré\" pleasure/will, Latin gratum).",
    "\"Maugre thy strength, youth, place, and eminence, thou art a traitor!\"",
    "Shakespeare, \"King Lear\""
  ],
  [
    "Wonted",
    "/ˈwoʊn.tɪd/",
    "m",
    "Habitual, customary, usual.",
    "From \"wont\" + \"-ed.\"",
    "\"The swallow returned to its wonted eaves when April suns warmed the valley.\"",
    "Wordsworth, \"The Prelude\""
  ],
  [
    "Nought",
    "/nɔːt/",
    "m",
    "Nothing; not anything; zero.",
    "From OE \"nāwiht\" (no wight, nothing: \"ne\" not + \"ā\" ever + \"wiht\" thing).",
    "\"All his magnificent schemes and towers of ambition came to nought.\"",
    "Shakespeare, \"Richard III\""
  ],
  [
    "Aught",
    "/ɔːt/",
    "m",
    "Anything at all; whatever.",
    "From OE \"āwiht\" (ever a thing: \"ā\" ever + \"wiht\" thing).",
    "\"If aught of sorrow toucheth thy heart, reveal it freely to me.\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Soothsayer",
    "/ˈsuːθˌseɪ.ər/",
    "m",
    "A person supposed to foresee the future; a diviner or truth-teller.",
    "Compound: sooth (truth) + sayer (speaker).",
    "\"Beware the Ides of March, cried the soothsayer from the jostling crowd.\"",
    "Shakespeare, \"Julius Caesar\""
  ],
  [
    "Courser",
    "/ˈkɔːr.sər/",
    "m",
    "A swift, strong riding horse used in battle or pursuit.",
    "From OF \"corsier,\" from \"cors\" (course, running, Latin \"cursus\").",
    "\"He spurred his fiery courser through the ranks of fleeing spearmen.\"",
    "Barbour's Bruce"
  ],
  [
    "Rouncey",
    "/ˈraʊn.si/",
    "m",
    "An ordinary, all-purpose riding horse or packhorse in the Middle Ages.",
    "From OF \"roncin\" (nag, work-horse).",
    "\"A shipman was there that came from Dartmouth; he rode upon a rouncey, as he could.\"",
    "Chaucer, \"Canterbury Tales\""
  ],
  [
    "Sumpter",
    "/ˈsʌmp.tər/",
    "m",
    "A packhorse or mule used for carrying luggage and camp provisions.",
    "From OF \"sommier\" (pack-animal), from Late Latin \"sagmarius\" (pack-saddle).",
    "\"A train of twelve sumpter mules laden with wine and grain followed the regiment.\"",
    "Shakespeare, \"King Lear\""
  ],
  [
    "Barded",
    "/ˈbɑːr.dɪd/",
    "m",
    "Protected with horse-armor (barding) in medieval warfare.",
    "From French \"barde\" (armor for a horse).",
    "\"A squadron of knights on barded horses charged into the archers' lines.\"",
    "History of Agincourt"
  ],
  [
    "Cuirass",
    "/kwɪˈræs/",
    "m",
    "A piece of armor covering the torso, consisting of breastplate and backplate fastened together.",
    "From OF \"cuirace,\" originally leather armor (Latin \"coriaceus\" of leather, from \"corium\").",
    "\"The musket ball flattened itself against the polished steel of his cavalry cuirass.\"",
    "Clarendon, \"History of the Rebellion\""
  ],
  [
    "Pillion",
    "/ˈpɪl.jən/",
    "m",
    "A cushion or small pad attached behind the main saddle for a woman to ride pillion.",
    "From Scottish Gaelic \"pillean\" (pack-saddle, cushion, from Latin \"pellis\" skin/hide).",
    "\"The country maiden rode behind her father upon a soft wool pillion.\"",
    "Walter Scott, \"Heart of Midlothian\""
  ],
  [
    "Glamour",
    "/ˈɡlæm.ər/",
    "m",
    "A magic spell or enchantment that deludes the sight; bewitching charm.",
    "Scottish alteration of \"grammar\" (occult learning, Latin scholarship).",
    "\"The fairy queen cast a glamour over his eyes, so that dry leaves seemed gold sovereigns.\"",
    "Walter Scott, \"Lay of the Last Minstrel\""
  ],
  [
    "Gramarye",
    "/ˈɡræm.ə.ri/",
    "m",
    "Occult learning, magic, necromancy, enchantment.",
    "From OF \"gramaire\" (grammar, learning, Latin).",
    "\"The wizard unrolled his black parchment of gramarye beneath the crescent moon.\"",
    "Percy's Reliques of Ancient Poetry"
  ],
  [
    "Warlock",
    "/ˈwɔːr.lɒk/",
    "m",
    "A male witch, sorcerer, or practitioner of black magic; oath-breaker.",
    "From OE \"wǣrloga\" (traitor, liar: \"wǣr\" pledge/covenant + \"loga\" liar).",
    "\"The villagers whispered that the solitary scholar in the tower was an unholy warlock.\"",
    "Walter Scott, \"Waverley\""
  ],
  [
    "Eldritch",
    "/ˈɛl.drɪtʃ/",
    "m",
    "Weird, eerie, ghostly, unearthly, uncanny.",
    "From Scottish dialect; probably related to \"elf\" + \"reich\" (realm).",
    "\"An eldritch shriek ripped through the foggy midnight silence of the moor.\"",
    "Hawthorne, \"The Scarlet Letter\""
  ],
  [
    "Uncanny",
    "/ʌnˈkæn.i/",
    "e",
    "Strange, mysterious, weird, beyond ordinary human understanding.",
    "From \"un-\" + Scottish \"canny\" (shrewd, safe, knowing).",
    "\"An uncanny glow hovered over the abandoned churchyard vaults.\"",
    "Walter Scott, \"Guy Mannering\""
  ],
  [
    "Wraith",
    "/reɪθ/",
    "e",
    "A ghost, apparition, or phantom of a living or recently dead person.",
    "Of Scottish origin, probably related to \"writhe\" (twist, turn).",
    "\"He looked upon the pale wraith of his brother that stood at the foot of his bed.\"",
    "Shelley, \"Prometheus Unbound\""
  ],
  [
    "Banshee",
    "/ˈbæn.ʃiː/",
    "e",
    "A female spirit in Irish folklore whose mournful wailing foretells a death in a family.",
    "From Irish \"bean sí\" - woman of the fairy mounds (\"bean\" woman + \"sí\" fairy).",
    "\"The banshee's keening wail rose from the river marsh at midnight.\"",
    "Irish folklore collections"
  ],
  [
    "Fetch",
    "/fɛtʃ/",
    "e",
    "The apparition, double, or spectral likeness of a living person (a doppelgänger).",
    "Of obscure origin; perhaps from \"fetch\" (to bring).",
    "\"To behold one's own fetch in the dusk was an infallible sign of approaching death.\"",
    "Irish folklore traditions"
  ],
  [
    "Bogeyman",
    "/ˈboʊ.ɡi.mæn/",
    "t",
    "An imaginary monstrous figure used to frighten disobedient children.",
    "From Middle English \"bogge\" / \"bugge\" (scarecrow, monster).",
    "\"Sleep now, little ones, lest the terrible bogeyman come creeping down the chimney!\"",
    "Victorian nursery tales"
  ],
  [
    "Bugbear",
    "/ˈbʌɡˌbɛər/",
    "e",
    "A cause of obsessive fear or dread; a hobgoblin in the form of a bear.",
    "From \"bug\" (monster, goblin, Welsh \"bwg\") + \"bear.\"",
    "\"Examinations were the eternal bugbear of the schoolmaster's pupils.\"",
    "Shakespeare, \"Cymbeline\""
  ],
  [
    "Boggart",
    "/ˈbɒɡ.ərt/",
    "e",
    "A mischievous household sprite or malevolent barrow-demon in Northern English folklore.",
    "From Northern dialect \"bog\" (goblin) + diminutive suffix \"-art.\"",
    "\"The sour boggart rattled the pantry latches and turned the milk to curds overnight.\"",
    "Lancashire folklore"
  ],
  [
    "Hobgoblin",
    "/ˈhɒbˌɡɒb.lɪn/",
    "e",
    "A mischievous, puckish sprite or impish goblin.",
    "From \"Hob\" (familiar nickname for Robin/Robert, Robin Goodfellow) + \"goblin.\"",
    "\"A foolish consistency is the hobgoblin of little minds.\"",
    "Ralph Waldo Emerson"
  ],
  [
    "Brownie",
    "/ˈbraʊ.ni/",
    "e",
    "A benevolent fairy sprite who did household chores by night in exchange for milk and cake.",
    "So named from their traditional brown clothing and shaggy appearance.",
    "\"The house-brownie had swept the hearth and polished the pewter before cock-crow.\"",
    "Scottish folklore collections"
  ],
  [
    "Leprechaun",
    "/ˈlɛp.rə.kɔːn/",
    "e",
    "A diminutive Irish fairy cobbler who hoards pots of gold at the end of rainbows.",
    "From Irish \"leipreachán,\" from Old Irish \"luchorpán\" (little body: \"lu\" little + \"corp\" body).",
    "\"The leprechaun sat beneath a dock-leaf, tapping a fairy shoe with his tiny hammer.\"",
    "Irish legends"
  ],
  [
    "Pixie",
    "/ˈpɪk.si/",
    "e",
    "A small, cheerful, mischievous woodland fairy of Devon and Cornwall.",
    "Of Southwestern dialect origin, perhaps Celtic (Cornish).",
    "\"Travelers in Dartmoor were often pixie-led, wandering in circles across the peat bogs.\"",
    "West Country folklore"
  ],
  [
    "Nixie",
    "/ˈnɪk.si/",
    "t",
    "A female water sprite or river nymph in Germanic folklore.",
    "From German \"Nixe,\" feminine of \"Nix\" (water-sprite).",
    "\"The alluring song of the river nixie drew the young fisherman into the deep whirlpool.\"",
    "Grimm's Fairy Tales"
  ],
  [
    "Undine",
    "/ˈʌn.diːn/",
    "t",
    "A female water nymph who could gain a mortal soul only by marrying a human.",
    "Coined by Paracelsus from Latin \"unda\" (wave, water).",
    "\"Undine wept bitter crystal tears into the fountain as her knight broke his vows.\"",
    "Fouqué, \"Undine\""
  ],
  [
    "Sylph",
    "/sɪlf/",
    "e",
    "An elemental spirit of the air; an airy, slender, and graceful young woman.",
    "Coined by Paracelsus; blend of Latin \"silva\" (forest) + Greek \"nymphe.\"",
    "\"A bevy of slender sylphs danced across the sunlit lawn in gossamer gowns.\"",
    "Alexander Pope, \"Rape of the Lock\""
  ],
  [
    "Salamander",
    "/ˈsæl.əˌmæn.dər/",
    "m",
    "A mythical lizard believed to live in or endure fire without being burned.",
    "From Greek \"salamandra\" via Latin and OF.",
    "\"The alchemist peered into the glowing coals, hoping to behold the fiery salamander.\"",
    "Ben Jonson, \"The Alchemist\""
  ],
  [
    "Basilisk",
    "/ˈbæs.ɪ.lɪsk/",
    "m",
    "A mythical reptile whose deadly glance or breath was fatal to all who looked upon it.",
    "From Greek \"basiliskos\" - little king (\"basileus\" king), from crown-like mark on head.",
    "\"The prince held up his polished steel buckler to turn the death-ray of the basilisk.\"",
    "Pliny / Renaissance bestiaries"
  ],
  [
    "Cockatrice",
    "/ˈkɒk.ə.trɪs/",
    "m",
    "A mythical monster with the head of a rooster and body of a serpent hatched from a cock's egg.",
    "From OF \"cocatris,\" from Medieval Latin \"calcatrix\" (tracker, crocodile).",
    "\"Thy venomous words are more deadly than the glance of a cockatrice.\"",
    "Shakespeare, \"Romeo and Juliet\""
  ],
  [
    "Wyvern",
    "/ˈwaɪ.vərn/",
    "m",
    "A winged two-legged dragon with a barbed tail, frequently depicted in heraldry.",
    "From Anglo-French \"wivre,\" from Latin \"vipera\" (viper).",
    "\"The Duke's banner bore a golden wyvern rampant upon an azure field.\"",
    "Burke's General Armory"
  ],
  [
    "Ouroboros",
    "/ˌʊər.əˈbɒr.əs/",
    "e",
    "An ancient symbol depicting a serpent or dragon eating its own tail, symbolizing eternity and cyclical rebirth.",
    "From Greek \"ouroboros\" - tail-devourer (\"oura\" tail + \"bora\" food/eating).",
    "\"The alchemical crest bore the ouroboros encircled around the philosopher's stone.\"",
    "Hermetic manuscripts"
  ],
  [
    "Gryphon",
    "/ˈɡrɪf.ɪn/",
    "m",
    "A mythical beast with the head and wings of an eagle and the body of a lion.",
    "From Greek \"gryps\" (curved, hook-nosed) via Latin \"gryphus.\"",
    "\"Two marble gryphons guarded the bronze portal of the imperial palace.\"",
    "Milton, \"Paradise Lost\""
  ],
  [
    "Hippogriff",
    "/ˈhɪp.ə.ɡrɪf/",
    "e",
    "A mythical creature having the front half of an eagle and the hindquarters of a horse.",
    "From Greek \"hippos\" (horse) + \"gryps\" (griffin). Invented by Ariosto.",
    "\"Astolfo mounted the winged hippogriff and soared beyond the clouds to the sphere of the moon.\"",
    "Ariosto, \"Orlando Furioso\""
  ],
  [
    "Manticore",
    "/ˈmæn.tɪ.kɔːr/",
    "m",
    "A mythical beast having the head of a man, body of a lion, and tail of a scorpion.",
    "From Greek \"mantichoras,\" from Old Persian \"martiya-khwara\" (man-eater).",
    "\"The bestiary painted the dreadful manticore lurking in the sands of India.\"",
    "Medieval bestiaries"
  ],
  [
    "Chimera",
    "/kaɪˈmɪər.ə/",
    "m",
    "A fire-breathing monster composed of lion, goat, and serpent; an impossible illusion.",
    "From Greek \"chimaira\" - she-goat.",
    "\"All his hopes of royal patronage were but empty chimeras and smoke.\"",
    "Milton, \"Comus\""
  ],
  [
    "Gargoyle",
    "/ˈɡɑːr.ɡɔɪl/",
    "m",
    "A carved grotesque beast projecting from a cathedral gutter to spout rainwater clear of walls.",
    "From OF \"gargouille\" - throat, waterspout (echoic of gurgling).",
    "\"Grotesque granite gargoyles grinned down from the rain-washed towers of Notre-Dame.\"",
    "Victor Hugo, \"The Hunchback of Notre-Dame\""
  ],
  [
    "Damask",
    "/ˈdæm.əsk/",
    "m",
    "A rich figured woven fabric of silk, wool, or linen, originating in Damascus.",
    "From the city of Damascus (famous for fine patterned silks).",
    "\"The banqueting table was spread with snow-white linen damask and massive candlesticks.\"",
    "Evelyn, \"Diary\""
  ],
  [
    "Taffeta",
    "/ˈtæf.ɪ.tə/",
    "m",
    "A fine, crisp, lustrous silk fabric with a smooth plain weave.",
    "From OF \"taffetas,\" from Persian \"taftah\" (woven, spun).",
    "\"Her rustling skirts of lilac taffeta whispered as she entered the salon.\"",
    "Thackeray, \"Vanity Fair\""
  ],
  [
    "Sarcenet",
    "/ˈsɑːrs.nɪt/",
    "m",
    "A very fine, soft, light silk fabric used for linings, hoods, and ribbons.",
    "From Anglo-Norman \"sarsinet\" (Saracen cloth: \"Saracen\" + suffix).",
    "\"She tied her bonnet with ribbons of azure sarcenet for the assembly ball.\"",
    "Jane Austen, \"Mansfield Park\""
  ],
  [
    "Camlet",
    "/ˈkæm.lɪt/",
    "m",
    "A costly fabric originally made of camel's hair or Angora goat wool and silk.",
    "From OF \"chamelot,\" probably from Arabic \"khamlat\" (nap, pile).",
    "\"The traveler wore a warm cloak of waterproof camlet against the drenching rain.\"",
    "Pepys, \"Diary\""
  ],
  [
    "Kersey",
    "/ˈkɜːr.zi/",
    "m",
    "A coarse, ribbed woolen cloth manufactured in the village of Kersey in Suffolk.",
    "From the Suffolk village of Kersey.",
    "\"A plain countryman clad in honest hodden-gray kersey stood before the justices.\"",
    "Walter Scott, \"Kenilworth\""
  ],
  [
    "Broadcloth",
    "/ˈbrɔːd.klɒθ/",
    "m",
    "A dense, woolen fabric of superior quality, woven on a broad loom.",
    "Compound: broad + cloth.",
    "\"The village parson wore a respectable coat of black superfine broadcloth.\"",
    "Goldsmith, \"Vicar of Wakefield\""
  ],
  [
    "Cambric",
    "/ˈkeɪm.brɪk/",
    "e",
    "A very fine, thin, white linen fabric originally made at Cambrai in northern France.",
    "From the Flemish name of Cambrai (\"Kamerijk\").",
    "\"He dabbed his bleeding brow with a delicate handkerchief of cambric.\"",
    "Sterne, \"Tristram Shandy\""
  ],
  [
    "Lawn",
    "/lɔːn/",
    "e",
    "A fine, very thin, semi-transparent linen or cotton fabric used for bishop's sleeves and veils.",
    "Named from the city of Laon in northern France, a center of linen manufacture.",
    "\"The bishop in his sleeves of lawn sat upon the cathedral throne.\"",
    "Alexander Pope, \"Moral Essays\""
  ],
  [
    "Gingham",
    "/ˈɡɪŋ.əm/",
    "e",
    "A plain-woven cotton fabric featuring a striped or checkered pattern in white and a color.",
    "From Dutch \"gingang,\" from Malay \"genggang\" (striped, checkered).",
    "\"Little farm girls in aprons of blue gingham ran through the apple orchard.\"",
    "Mrs. Gaskell, \"Cranford\""
  ],
  [
    "Chintz",
    "/tʃɪnts/",
    "e",
    "A brightly glazed printed cotton fabric, originally imported from India.",
    "From Hindi \"chint\" (spotted, variegated cloth), from Sanskrit \"chitra\" (variegated).",
    "\"The drawing-room was cheerful with curtains of chintz patterned with birds of paradise.\"",
    "Jane Austen, \"Emma\""
  ],
  [
    "Calamanco",
    "/ˌkæl.əˈmæŋ.koʊ/",
    "e",
    "A glossy woolen fabric with a checkered or striped pattern and satiny finish.",
    "From Spanish \"calamaco\" or Low German.",
    "\"She purchased a bright scarlet calamanco petticoat for the Michaelmas fair.\"",
    "Defoe, \"Moll Flanders\""
  ],
  [
    "Grog",
    "/ɡrɒɡ/",
    "t",
    "A drink of rum diluted with water and lemon juice, issued to sailors in the Royal Navy.",
    "Named after British Admiral Edward Vernon, who wore a \"grogram\" coat (Old Grog).",
    "\"The boatswain piped all hands to the quarterdeck for the daily ration of grog.\"",
    "Marryat, \"Mr. Midshipman Easy\""
  ],
  [
    "Grogram",
    "/ˈɡrɒɡ.rəm/",
    "e",
    "A coarse, stiff fabric of silk mixed with wool, mohair, or camel hair.",
    "From French \"gros-grain\" (coarse grain: \"gros\" coarse + \"grain\").",
    "\"Admiral Vernon was nicknamed Old Grog from his impenetrable grogram coat.\"",
    "Naval history of the 18th century"
  ],
  [
    "Negus",
    "/ˈniː.ɡəs/",
    "t",
    "A warm drink of port wine mixed with hot water, sweetened and spiced with lemon and nutmeg.",
    "Named after Colonel Francis Negus (died 1732), who first concocted it.",
    "\"A glass of steaming negus and a biscuit restored the cold and weary traveler.\"",
    "Dickens, \"A Christmas Carol\""
  ],
  [
    "Caudle",
    "/ˈkɔː.dəl/",
    "m",
    "A warm, spiced gruel mixed with sweetened ale or wine, traditionally given to sick persons and lying-in women.",
    "From OF \"chaudel,\" from Latin \"caldus\" (warm).",
    "\"The village matrons partook of caudle and sweet cakes to toast the new mother.\"",
    "Chaucer, \"Wife of Bath's Tale\""
  ],
  [
    "Hasty-pudding",
    "/ˈheɪ.stiˌpʊd.ɪŋ/",
    "e",
    "A simple pudding made by stirring flour or oatmeal into boiling milk or water until thick.",
    "Compound: hasty + pudding (made quickly).",
    "\"The farmer ate a steaming bowl of hasty-pudding sweetened with black molasses.\"",
    "Izaak Walton, \"The Compleat Angler\""
  ],
  [
    "Revel",
    "/ˈrɛv.əl/",
    "m",
    "To take great pleasure or delight; lively and noisy festivities.",
    "From OF \"reveler\" (to rebel, riot, make merry, from Latin \"rebellare\").",
    "\"Midnight revels and masquerades filled the Venetian palazzo during carnival.\"",
    "Milton, \"L'Allegro\""
  ],
  [
    "Bacchanal",
    "/ˈbæk.ə.nəl/",
    "e",
    "A wild, drunken, riotous feast or party.",
    "From Latin \"Bacchanalia\" - the feast of Bacchus, god of wine.",
    "\"The festival ended in an untamed bacchanal of songs and dancing in the vineyard.\"",
    "Dryden, \"Alexander's Feast\""
  ],
  [
    "Dithyrambic",
    "/ˌdɪθ.ɪˈræm.bɪk/",
    "e",
    "Wildly enthusiastic, passionate, or unrestrained in speech or style.",
    "From Greek \"dithyrambos\" - a passionate wild choral hymn to Dionysus.",
    "\"He broke into a dithyrambic eulogy celebrating the genius of his poetic master.\"",
    "Victorian literary reviews"
  ],
  [
    "Rosemary",
    "/ˈroʊz.mər.i/",
    "m",
    "An evergreen aromatic shrub with fragrant needle-like leaves, symbol of remembrance.",
    "From Latin \"ros marinus\" (dew of the sea: \"ros\" dew + \"marinus\" of the sea).",
    "\"There's rosemary, that's for remembrance: pray, love, remember.\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Rue",
    "/ruː/",
    "m",
    "A bitter aromatic shrub with yellow flowers, symbol of regret and repentance; to sorrow.",
    "From OE \"hrēow\" (sorrow, grief) and OF \"rue\" (the herb, from Latin \"ruta\").",
    "\"There's rue for you; and here's some for me; we may call it herb of grace o' Sundays.\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Columbine",
    "/ˈkɒl.əm.baɪn/",
    "m",
    "A plant with delicate spurred flowers resembling clustered doves, symbol of forsaken love.",
    "From Medieval Latin \"columbina\" (dove-like, from \"columba\" dove).",
    "\"She wore wild columbines in her braided hair as a token of sorrow for her lost love.\"",
    "Elizabethan pastoral songs"
  ],
  [
    "Eglantine",
    "/ˈɛɡ.lən.tiːn/",
    "m",
    "The sweetbrier or wild rose, having fragrant foliage and delicate pink blossoms.",
    "From OF \"aiglentier,\" from Vulgar Latin *aquilentus (thorny, needle-like).",
    "\"I know a bank where the wild thyme blows... quite over-canopied with luscious woodbine and with eglantine.\"",
    "Shakespeare, \"Midsummer Night's Dream\""
  ],
  [
    "Woodbine",
    "/ˈwʊd.baɪn/",
    "m",
    "The honeysuckle vine, which clings and winds around forest trees.",
    "From OE \"wudubinde\" (\"wudu\" wood + \"binde\" binder).",
    "\"The sweet woodbine twined closely around the weathered stone porch.\"",
    "Milton, \"Lycidas\""
  ],
  [
    "Heartsease",
    "/ˈhɑːrts.iːz/",
    "e",
    "The wild pansy or viola tricolor, celebrated as a cure for love-sickness.",
    "Compound: heart's ease.",
    "\"Before milk-white, now purple with love's wound, and maidens call it love-in-idleness or heartsease.\"",
    "Shakespeare, \"Midsummer Night's Dream\""
  ],
  [
    "Asphodel",
    "/ˈæs.fə.dɛl/",
    "e",
    "An immortal flower said to carpet the Elysian Fields in Greek mythology.",
    "From Greek \"asphodelos\" - flower of the underworld meadows.",
    "\"The pale shades of ancient heroes wandered through meadows of blossoming asphodel.\"",
    "Milton, \"Comus\""
  ],
  [
    "Acanthus",
    "/əˈkæn.θəs/",
    "e",
    "A Mediterranean plant with jagged spiny leaves, classical motif for Corinthian capitals.",
    "From Greek \"akanthos\" (thorn-plant, from \"ake\" sharp point).",
    "\"The stone carver chiselled curling acanthus leaves around the marble capital.\"",
    "Ruskin, \"Stones of Venice\""
  ],
  [
    "Amphora",
    "/ˈæm.fər.ə/",
    "m",
    "An ancient Greek or Roman two-handled ceramic jar used for storing wine and olive oil.",
    "From Greek \"amphoreus\" (two-handled bearer: \"amphi\" both sides + \"pherein\" to carry).",
    "\"Two clay amphorae filled with sweet Chian wine were uncorked for the symposium.\"",
    "Keats, \"Ode on a Grecian Urn\""
  ],
  [
    "Smellfungus",
    "/ˈsmɛlˌfʌŋ.ɡəs/",
    "t",
    "A hypercritical grumbler and perpetual faultfinder who travels everywhere complaining.",
    "Coined by Laurence Sterne in \"A Sentimental Journey\" satirizing Tobias Smollett.",
    "\"The traveler was a veritable smellfungus, blind to the beauty of Florence and crying only of bad inns.\"",
    "Sterne, \"Sentimental Journey\""
  ],
  [
    "Snollygoster",
    "/ˈsnɒl.iˌɡɒs.tər/",
    "t",
    "A shrewd, unprincipled, calculating person, especially an unscrupulous politician.",
    "19th-century American and English slang, probably from \"snallygaster.\"",
    "\"The assembly was dominated by a knot of greedy snollygosters seeking railway charters.\"",
    "19th-century political debates"
  ],
  [
    "Skullduggery",
    "/skʌlˈdʌɡ.ər.i/",
    "t",
    "Underhanded, deceitful, or unscrupulous behavior; trickery.",
    "Altered from Scottish \"sculduddery\" (gross conduct, obscenity).",
    "\"The election was won through ballot-box stuffing and outrageous financial skullduggery.\"",
    "Victorian newspaper exposés"
  ],
  [
    "Hocus-pocus",
    "/ˌhoʊ.kəsˈpoʊ.kəs/",
    "e",
    "Deceptive nonsense, sleight-of-hand conjuring tricks, or meaningless incantations.",
    "17th-century conjuror's mock-Latin incantation, perhaps parodic of \"hoc est corpus.\"",
    "\"The quack's cures were nothing but theatrical hocus-pocus and sugar pills.\"",
    "Ben Jonson"
  ],
  [
    "Abracadabra",
    "/ˌæb.rə.kəˈdæb.rə/",
    "m",
    "An ancient magical formula or cabalistic charm inscribed on triangular amulets against illness.",
    "From Late Latin / Greek \"abracadabra,\" origin disputed (Hebrew / Aramaic).",
    "\"The astrologer inscribed abracadabra nine times upon a piece of virgin parchment.\"",
    "Defoe, \"Journal of the Plague Year\""
  ],
  [
    "Mumbo-jumbo",
    "/ˌmʌm.boʊˈdʒʌm.boʊ/",
    "t",
    "Meaningless language, ritual, or obfuscating nonsense designed to confuse.",
    "From Mandinka \"Maamaloombii\" (masked dancer in religious ceremonies).",
    "\"The legal contract was filled with three pages of impenetrable legalistic mumbo-jumbo.\"",
    "Dickens, \"Bleak House\""
  ],
  [
    "Galimatias",
    "/ˌɡæl.ɪˈmeɪ.ʃəs/",
    "e",
    "Nonsensical, gibberish talk; confused and meaningless jargon.",
    "From French \"galimatias,\" origin obscure.",
    "\"His speech was a hopelessly tangled web of absurd philosophic galimatias.\"",
    "Swift, \"Gulliver's Travels\""
  ],
  [
    "Nonsuch",
    "/ˈnʌn.sʌtʃ/",
    "e",
    "A person or thing having no equal; a nonpareil.",
    "Compound: none + such.",
    "\"Her Majesty deemed the new palace a true nonsuch among European dwellings.\"",
    "Elizabethan court letters"
  ],
  [
    "Flibbertigibbet",
    "/ˌflɪb.ər.tiˈdʒɪb.ɪt/",
    "e",
    "A frivolous, flighty, fickle, excessively talkative and irresponsible person.",
    "15th-century onomatopoeic creation for chattering tongues; name of a fiend in King Lear.",
    "\"She was a delightful flibbertigibbet who could never sit still for two consecutive minutes.\"",
    "Scott, \"Kenilworth\""
  ],
  [
    "Muckrake",
    "/ˈmʌkˌreɪk/",
    "e",
    "To search out and publicize scandal or corruption.",
    "From Bunyan's \"man with the muck-rake\" who looked only down at dirt.",
    "\"The journalists began to muckrake into the municipal contracts of the borough council.\"",
    "Theodore Roosevelt"
  ],
  [
    "Whippersnapper",
    "/ˈwɪp.ərˌsnæp.ər/",
    "e",
    "A young, inexperienced, yet impertinently presumptuous person.",
    "Alteration of \"whip-snapper\" (idler who snaps whips).",
    "\"How dare a young whippersnapper like you instruct an alderman in his duty!\"",
    "Goldsmith, \"She Stoops to Conquer\""
  ],
  [
    "Slubberdegullion",
    "/ˌslʌb.ər.dɪˈɡʌl.jən/",
    "e",
    "A dirty, base, slobbering, worthless fellow.",
    "From \"slubber\" (to soil, daub) + humorous mock suffix.",
    "\"Avaunt, thou greasy slubberdegullion! Out of my sight!\"",
    "Beaumont and Fletcher"
  ],
  [
    "Tatterdemalion",
    "/ˌtæt.ər.dɪˈmeɪl.i.ən/",
    "e",
    "A person dressed in ragged, tattered, torn clothing; a scarecrow of a man.",
    "From \"tatter\" + humorous formation (on analogy with Italian names).",
    "\"A troop of hungry tatterdemalions marched into the village begging for bread.\"",
    "Smollett, \"Humphry Clinker\""
  ],
  [
    "Scallywag",
    "/ˈskæl.i.wæɡ/",
    "t",
    "A rascal, rogue, or mischievous person.",
    "19th-century American and British colloquialism, originally Scalloway cattle.",
    "\"The cheeky little scallywag stole two red apples right off the greengrocer's stall.\"",
    "Victorian London street tales"
  ],
  [
    "Caitiff",
    "/ˈkeɪ.tɪf/",
    "m",
    "A despicable, base, cowardly, contemptible wretch.",
    "From OF \"caitif\" (captive, wretched, from Latin \"captivus\").",
    "\"Turn, false caitiff, and defend thy forfeited life against my blade!\"",
    "Scott, \"Ivanhoe\""
  ],
  [
    "Cockalorum",
    "/ˌkɒk.əˈlɔːr.əm/,",
    "t",
    "A diminutive, boastful man with an excessively high opinion of himself (\"high cockalorum\").",
    "From Dutch \"kockeloeren\" (to crow like a rooster).",
    "\"The petty mayor strutted about the town hall like a pompous cockalorum.\"",
    "Victorian comic papers"
  ],
  [
    "Toady",
    "/ˈtoʊ.di/",
    "t",
    "A servile sycophant or flatterer who grovels for favors.",
    "Shortening of \"toad-eater\" - a charlatan's assistant who ate supposed poisonous toads to show master's cure.",
    "\"The wealthy lord was surrounded by fawning toadies laughing at his dullest jokes.\"",
    "Thackeray, \"Book of Snobs\""
  ],
  [
    "Sycophant",
    "/ˈsɪk.ə.fænt/",
    "e",
    "A servile, self-seeking flatterer who acts obsequiously toward someone important.",
    "From Greek \"sykophantes\" - informer, false accuser (\"sykon\" fig + \"phainein\" to show).",
    "\"The court swarmed with flatterers and sycophants vying for royal favors.\"",
    "Bacon, \"Essays\""
  ],
  [
    "Shyster",
    "/ˈʃaɪ.stər/",
    "t",
    "A corrupt, fraudulent, and dishonest lawyer or business trickster.",
    "Probably from German \"Scheißer\" (vulgar term for worthless person).",
    "\"The poor widow lost her savings to an unscrupulous shyster operating in the Old Bailey.\"",
    "London police court records"
  ],
  [
    "Spindrift",
    "/ˈspɪn.drɪft/",
    "t",
    "Fine sea spray blown from cresting ocean waves during a fierce gale.",
    "Scottish variant of \"spoondrift,\" from \"spoon\" (to run before the wind) + \"drift.\"",
    "\"The spindrift stung their faces like needles as the brig plunged through the roaring surf.\"",
    "Stevenson, \"Kidnapped\""
  ],
  [
    "Seadog",
    "/ˈsiːˌdɒɡ/",
    "e",
    "An experienced, weather-beaten old sailor; an Elizabethan privateer.",
    "Compound: sea + dog.",
    "\"Sir Francis Drake and the stout seadogs of Devon swept the Spanish Main.\"",
    "Hakluyt's Voyages"
  ],
  [
    "Freebooter",
    "/ˈfriːˌbuː.tər/",
    "e",
    "A pirate, buccaneer, or marauder who plunders without government commission.",
    "From Dutch \"vrijbuiter\" (\"vrij\" free + \"buit\" booty/plunder).",
    "\"The Spanish galleon fell prey to a flotilla of lawless freebooters off Maracaibo.\"",
    "Defoe, \"Captain Singleton\""
  ],
  [
    "Corsair",
    "/ˈkɔːr.sɛər/",
    "m",
    "A privateer or pirate operating in the Mediterranean against enemy shipping.",
    "From French \"corsaire,\" from Italian \"corsaro,\" from Medieval Latin \"cursarius\" (courser, runner).",
    "\"The swift Barbary corsair slipped out of Algiers harbor under cover of night.\"",
    "Byron, \"The Corsair\""
  ],
  [
    "Buccaneer",
    "/ˌbʌk.əˈnɪər/",
    "e",
    "A Caribbean pirate or privateer of the 17th century.",
    "From French \"boucanier\" (smoker of wild meat on a \"boucan\" wooden grill).",
    "\"The buccaneers of Port Royal divided the looted sacks of Spanish silver upon the sand spit.\"",
    "Exquemelin, \"Buccaneers of America\""
  ],
  [
    "Marooner",
    "/məˈruː.nər/",
    "e",
    "A pirate who abandons mutineers on a desolate uninhabited island or sandbar.",
    "From French \"marron\" (escaped slave, from Spanish \"cimarrón\" wild/fugitive).",
    "\"The mutinous quartermaster was made a marooner on a barren coral cay with a flask of water.\"",
    "Stevenson, \"Treasure Island\""
  ],
  [
    "Privateer",
    "/ˌpraɪ.vəˈtɪər/",
    "e",
    "An armed private ship licensed by letters of marque to capture enemy vessels.",
    "From \"private\" + \"-eer.\"",
    "\"The Liverpool privateer returned to the Mersey towing two rich French prizes.\"",
    "Naval history of the Seven Years' War"
  ],
  [
    "Letter of marque",
    "/ˌlɛt.ər əv ˈmɑːrk/",
    "m",
    "A royal commission authorizing a private vessel to capture and seize enemy shipping in wartime.",
    "From OF \"lettre de marque\" (license to make reprisals across the frontier \"mark\").",
    "\"The captain showed his letter of marque signed under the Great Seal of King George.\"",
    "Smollett, \"Peregrine Pickle\""
  ],
  [
    "Doubloon",
    "/dʌbˈluːn/",
    "e",
    "A Spanish gold coin worth sixteen silver dollars or thirty-two reales.",
    "From Spanish \"doblón\" (double: because it was worth two escudos).",
    "\"Captain Ahab nailed an Ecuadorian gold doubloon to the mainmast as reward for the white whale.\"",
    "Melville, \"Moby-Dick\""
  ],
  [
    "Piece of eight",
    "/ˌpiːs əv ˈeɪt/",
    "e",
    "A Spanish silver dollar worth eight reales, marked with numeral 8; the pirate currency.",
    "Translation of Spanish \"real de a ocho.\"",
    "\"Pieces of eight! Pieces of eight! screamed the green parrot perched on Long John Silver's shoulder.\"",
    "Stevenson, \"Treasure Island\""
  ],
  [
    "Ducat",
    "/ˈdʌk.ət/",
    "m",
    "A gold coin widely used as standard trade currency throughout medieval and renaissance Europe.",
    "From Italian \"ducato\" (ducal coin, from \"duca\" duke).",
    "\"Three thousand ducats, well; for three months, well.\"",
    "Shakespeare, \"The Merchant of Venice\""
  ],
  [
    "Florin",
    "/ˈflɒr.ɪn/",
    "m",
    "A famous gold coin first struck at Florence in 1252, stamped with the Florentine lily.",
    "From Italian \"fiorino\" (little flower, from \"fiore\" flower).",
    "\"The merchants settled the accounts of the wool guild in gold florins of Florence.\"",
    "Machiavelli, \"History of Florence\""
  ],
  [
    "Guilder",
    "/ˈɡɪl.dər/",
    "m",
    "A gold or silver coin of the Netherlands and German states.",
    "From Dutch \"gulden\" (golden, from \"goud\" gold).",
    "\"He counted out two hundred Dutch guilders on the tavern table to buy the tulips.\"",
    "Dumas, \"The Black Tulip\""
  ],
  [
    "Groat",
    "/ɡroʊt/",
    "m",
    "An old English silver coin equal to four pence; a very small sum.",
    "From Middle Dutch \"groot\" (great, thick coin).",
    "\"I would not give a single groat for all his boasted learning.\"",
    "Shakespeare, \"Henry IV\""
  ],
  [
    "Farthing",
    "/ˈfɑːr.ðɪŋ/",
    "m",
    "An old British bronze coin worth a quarter of a penny.",
    "From OE \"fēorðling\" (fourth part: \"fēorða\" fourth + \"-ling\").",
    "\"He died so poor that he had not a farthing left to pay for his winding-sheet.\"",
    "Dickens, \"David Copperfield\""
  ],
  [
    "Sovereign",
    "/ˈsɒv.rɪn/",
    "e",
    "A British gold coin worth one pound sterling, first minted under Henry VII in 1489.",
    "From OF \"soverain\" (supreme, monarch).",
    "\"A purse of fifty bright gold sovereigns was given to the hero of Waterloo.\"",
    "Victorian banking records"
  ],
  [
    "Guinea",
    "/ˈɡɪn.i/",
    "e",
    "A British gold coin first minted in 1663 from Guinea gold, worth twenty-one shillings.",
    "Named after the Guinea coast of West Africa where the gold was mined.",
    "\"The gentleman tipped the head coachman half a guinea for driving through the snowdrift.\"",
    "Austen, \"Pride and Prejudice\""
  ],
  [
    "Tester",
    "/ˈtɛs.tər/",
    "e",
    "An old sixpenny silver coin bearing the sovereign's head.",
    "From OF \"teston,\" from \"teste\" (head, modern French \"tête\").",
    "\"Hold, sirrah! Here is a tester for thy trouble in carrying my cloak.\"",
    "Shakespeare, \"Henry IV\""
  ],
  [
    "Shilling",
    "/ˈʃɪl.ɪŋ/",
    "m",
    "A traditional British silver coin worth twelve pence or one twentieth of a pound.",
    "From OE \"scilling,\" an ancient Germanic monetary unit.",
    "\"The king's recruiting sergeant slipped a silver shilling into the young ploughman's palm.\"",
    "Farquhar, \"The Recruiting Officer\""
  ],
  [
    "Maundy money",
    "/ˈmɔːn.diˌmʌn.i/",
    "m",
    "Specially minted silver coins given to the poor by the British monarch on Maundy Thursday.",
    "From \"Maundy\" (washing of the feet, Latin \"mandatum novum\").",
    "\"The elderly pensioners received silver Maundy pennies from the Queen in Westminster Abbey.\"",
    "Royal ceremonies of Great Britain"
  ],
  [
    "Pusillanimous",
    "/ˌpjuː.sɪˈlæn.ɪ.məs/",
    "e",
    "Showing a lack of courage or determination; timid, faint-hearted, cowardly.",
    "From Late Latin \"pusillanimis\" (\"pusillus\" very small + \"animus\" mind/spirit).",
    "\"The general reproached his pusillanimous lieutenant for retreating before the enemy fired.\"",
    "Gibbon, \"Decline and Fall\""
  ],
  [
    "Magnanimous",
    "/mæɡˈnæn.ɪ.məs/",
    "e",
    "Generous or forgiving, especially toward a rival or someone less powerful.",
    "From Latin \"magnanimus\" (\"magnus\" great + \"animus\" mind/soul).",
    "\"He made a magnanimous speech offering full pardon to the defeated rebels.\"",
    "Macaulay, \"History of England\""
  ],
  [
    "Equanimity",
    "/ˌɛk.wəˈnɪm.ɪ.ti/",
    "e",
    "Mental calmness, composure, and evenness of temper, especially in a difficult situation.",
    "From Latin \"aequanimitas\" (\"aequus\" even, level + \"animus\" mind).",
    "\"Socrates faced his unjust sentence with unshaken philosophical equanimity.\"",
    "Boswell, \"Life of Johnson\""
  ],
  [
    "Sangfroid",
    "/sɒŋˈfrwɑː/",
    "t",
    "Composure or coolness shown in danger or under trying circumstances (\"cold blood\").",
    "From French \"sang-froid\" (\"sang\" blood + \"froid\" cold).",
    "\"The captain showed extraordinary sangfroid, smoking his cigar as shells struck the bastion.\"",
    "Thackeray, \"Vanity Fair\""
  ],
  [
    "Nonpareil",
    "/ˌnɒn.pəˈreɪl/",
    "e",
    "Having no match or equal; unrivaled, peerless.",
    "From French \"nonpareil\" (\"non\" not + \"pareil\" equal).",
    "\"The prima donna was the nonpareil of the European opera stage.\"",
    "Shakespeare, \"Twelfth Night\""
  ],
  [
    "Paragon",
    "/ˈpær.ə.ɡɒn/",
    "e",
    "A person or thing regarded as a perfect model of excellence.",
    "From Italian \"paragone\" (touchstone for testing gold).",
    "\"What a piece of work is a man! How noble in reason! In action how like an angel! The paragon of animals!\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Cynosure",
    "/ˈsaɪ.nə.ʃʊər/",
    "e",
    "A person or thing that is the center of attention or admiration; guiding star.",
    "From Greek \"Kynosoura\" (dog's tail, the constellation Ursa Minor containing the North Star).",
    "\"The young heiress was the cynosure of all eyes at the coronation ball.\"",
    "Milton, \"L'Allegro\""
  ],
  [
    "Poltroon",
    "/pɒlˈtruːn/",
    "e",
    "An utter coward; a craven, spiritless wretch.",
    "From French \"poltron,\" from Italian \"poltrone\" (sluggard, from \"poltra\" bed/couch).",
    "\"No honorable knight could endure being branded a liar and a poltroon.\"",
    "Shakespeare, \"Henry VI\""
  ],
  [
    "Milksop",
    "/ˈmɪlk.sɒp/",
    "m",
    "An unmanly, timid, spineless, or effeminate person easily dominated by others.",
    "Compound: milk + sop (bread soaked in milk).",
    "\"She complained to the neighbors that she was wedded to a poor henpecked milksop.\"",
    "Chaucer, \"Monk's Prologue\""
  ],
  [
    "Oubliette",
    "/ˌuː.bliˈɛt/",
    "m",
    "A secret dungeon with a trapdoor in the ceiling as its only entrance, where prisoners were forgotten.",
    "From French \"oubliette,\" from \"oublier\" (to forget, Latin \"oblivisci\").",
    "\"The unfortunate captive was lowered into the pitch-black abyss of the castle oubliette.\"",
    "Victor Hugo, \"Notre-Dame de Paris\""
  ],
  [
    "Arrowslit",
    "/ˈær.oʊˌslɪt/",
    "m",
    "A narrow vertical slit in a castle wall through which archers fired arrows while protected.",
    "Compound: arrow + slit.",
    "\"Through the narrow arrowslit, Robin loosed an arrow that pierced the sheriff's plume.\"",
    "Robin Hood ballads"
  ],
  [
    "Bailey",
    "/ˈbeɪ.li/",
    "m",
    "The open courtyard or ward within the defensive outer walls of a medieval castle.",
    "From OF \"baillie\" (enclosure, jurisdiction, from \"bail\" guardian).",
    "\"The knights exercised their horses and practiced tilting within the inner bailey.\"",
    "Medieval chronicles"
  ],
  [
    "Embrasure",
    "/ɪmˈbreɪ.ʒər/",
    "m",
    "An opening in a parapet or wall flared on the inside through which cannons or guns were pointed.",
    "From French \"embrasure,\" from \"embraser\" (to widen an opening).",
    "\"A brass culverin peered ominously through the embrasure of the stone battery.\"",
    "Naval history of fortifications"
  ],
  [
    "Verderer",
    "/ˈvɜːr.dər.ər/",
    "m",
    "A judicial officer who had charge of the king's royal forests and preserved the vert (greenery) and venison (deer).",
    "From Anglo-Norman \"verder,\" from OF \"vert\" (green, Latin \"viridis\").",
    "\"The Court of Verderers met in the Queen's House to judge poachers taken in the New Forest.\"",
    "Forest charters of England"
  ],
  [
    "Woodreeve",
    "/ˈwʊd.riːv/",
    "m",
    "An overseer or reeve responsible for the management, felling, and coppicing of a forest estate.",
    "Compound: wood + reeve (official, OE \"gerēfa\").",
    "\"The woodreeve marked forty seasoned oaks for the rebuilding of the parish church spire.\"",
    "Manorial account books"
  ],
  [
    "Meseems",
    "/mɪˈsiːmz/",
    "m",
    "It seems to me; so it appears to my judgment.",
    "Compound: me (dative) + seems.",
    "\"Meseems this stormy world is full of unrighteous dealings.\"",
    "Spenser, \"Faerie Queene\""
  ],
  [
    "Wot",
    "/wɒt/",
    "m",
    "Knows or know (present tense of archaic verb \"wit\"). \"I wot well.\"",
    "From OE \"wāt,\" first/third person singular of \"witan\" (to know).",
    "\"I wot well that thou art a knight of noble lineage.\"",
    "Malory, \"Le Morte d'Arthur\""
  ],
  [
    "Wist",
    "/wɪst/",
    "m",
    "Knew (past tense of archaic verb \"wit\").",
    "From OE \"wiste,\" past tense of \"witan\" (to know).",
    "\"He wist not what to answer, for great fear fell upon him.\"",
    "King James Bible (Mark 9:6)"
  ],
  [
    "Ken",
    "/kɛn/",
    "m",
    "To know, recognize, or perceive by sight; one's range of sight or understanding (\"beyond our ken\").",
    "From OE \"cennan\" (to declare, know) and Old Norse \"kenna\" (to perceive).",
    "\"A mysterious white sail hovered just beyond the sailor's ken on the foggy horizon.\"",
    "Coleridge, \"Rime of the Ancient Mariner\""
  ],
  [
    "Trow",
    "/troʊ/",
    "m",
    "To believe, think, trust, or suppose. \"I trow not.\"",
    "From OE \"trēowian\" (to trust, believe, from \"trēow\" faith/pledge).",
    "\"There is no truer heart in all Christendom, I trow.\"",
    "Shakespeare, \"Henry VIII\""
  ],
  [
    "Brook",
    "/brʊk/",
    "m",
    "To tolerate, endure, or put up with. \"He would brook no delay.\"",
    "From OE \"brūcan\" (to use, enjoy, digest). Cognate with German \"brauchen.\"",
    "\"The fiery prince would brook no contradiction from his counsellors.\"",
    "Shakespeare, \"Richard II\""
  ],
  [
    "Dally",
    "/ˈdæl.i/",
    "m",
    "To act or move slowly; to waste time frivolously; to flirt playfully.",
    "From Anglo-Norman \"dalier\" (to chat, converse playfully).",
    "\"Dally not with temptation, but turn thy eyes toward the narrow path.\"",
    "Milton, \"Paradise Regained\""
  ],
  [
    "Nightfall",
    "/ˈnaɪtˌfɔːl/",
    "m",
    "The coming of darkness at the end of the day; dusk.",
    "Compound: night + fall.",
    "\"The travelers hastened their weary strides to reach the coaching inn before nightfall.\"",
    "Walter Scott, \"Rob Roy\""
  ],
  [
    "Sundown",
    "/ˈsʌnˌdaʊn/",
    "e",
    "Sunset; the time in the evening when the sun disappears below the horizon.",
    "Compound: sun + down.",
    "\"The fortress gates were barred fast at sundown by order of the governor.\"",
    "Historical accounts of Gibraltar"
  ],
  [
    "Sunup",
    "/ˈsʌnˌʌp/",
    "e",
    "Sunrise; the time in the morning when the sun first appears.",
    "Compound: sun + up.",
    "\"The harvesters were out in the golden wheatfields from sunup till dusk.\"",
    "Thomas Hardy, \"Tess of the d'Urbervilles\""
  ],
  [
    "Moonrise",
    "/ˈmuːnˌraɪz/",
    "m",
    "The rising of the moon above the horizon.",
    "Compound: moon + rise.",
    "\"At moonrise the tide turned, and the smugglers launched their muffled cutters.\"",
    "Smuggling tales of Cornwall"
  ],
  [
    "Flagon",
    "/ˈflæɡ.ən/",
    "m",
    "A large vessel for wine or cider, typically with a handle, spout, and hinged lid.",
    "From OF \"flacon,\" from Late Latin \"flasco\" (flask/bottle).",
    "\"He emptied a two-quart pewter flagon of spiced Rhenish wine at a single draft.\"",
    "Shakespeare, \"Henry IV\""
  ],
  [
    "Goblet",
    "/ˈɡɒb.lɪt/",
    "m",
    "A drinking vessel with a foot and stem, usually of silver, gold, or Venetian glass.",
    "From OF \"gobelet,\" diminutive of \"gobel\" (cup).",
    "\"The King raised his jewel-encrusted golden goblet to toast the royal bride.\"",
    "Milton, \"Comus\""
  ],
  [
    "Ewer",
    "/ˈjuː.ər/",
    "m",
    "A large decorative jug or pitcher with a wide spout, used for carrying washing water.",
    "From Anglo-Norman \"ewer,\" from OF \"aiguiere\" (water pitcher, Latin \"aquarius\").",
    "\"The page carried a silver ewer and basin of rose-water for the guests to wash their hands.\"",
    "Shakespeare, \"Taming of the Shrew\""
  ],
  [
    "Aumbry",
    "/ˈɔːm.bri/",
    "m",
    "A small recessed cupboard or cabinet built into a wall for storing sacred vessels, linens, or food.",
    "From OF \"almarie,\" from Latin \"armarium\" (chest for arms or tools).",
    "\"The priest placed the holy chalice inside the stone aumbry beside the altar.\"",
    "Cathedral architectural surveys"
  ],
  [
    "Coffer",
    "/ˈkɒf.ər/",
    "m",
    "A strong wooden chest or metal-bound box for holding money, jewels, and deeds.",
    "From OF \"cofre,\" from Latin \"cophinus\" (basket).",
    "\"The merchant unlocked three iron-banded oak coffers filled with silver groats.\"",
    "Chaucer, \"Pardoner's Tale\""
  ],
  [
    "Casket",
    "/ˈkæs.kɪt/",
    "m",
    "A small ornamental box or chest for holding jewels, letters, or precious keepsakes.",
    "Diminutive of \"cask\" (helmet/cask) or Anglo-Norman \"cassette.\"",
    "\"She opened the cedar casket and gazed upon the faded letters of her first love.\"",
    "Shakespeare, \"Merchant of Venice\""
  ],
  [
    "Lugubrious",
    "/lʊˈɡuː.bri.əs/",
    "e",
    "Looking or sounding sad, mournful, and gloomy (often exaggeratedly).",
    "From Latin \"lugubris\" (mournful, from \"lugere\" to mourn).",
    "\"The undertaker wore a perpetually lugubrious expression that suited his black profession.\"",
    "Dickens, \"Martin Chuzzlewit\""
  ],
  [
    "Lachrymose",
    "/ˈlæk.rɪ.moʊs/",
    "e",
    "Tearful, given to weeping; inducing tears; sad.",
    "From Latin \"lacrimosus\" (tearful, from \"lacrima\" tear).",
    "\"She delivered a lachrymose monologue recounting every misfortune of her family.\"",
    "Austen, \"Northanger Abbey\""
  ],
  [
    "Phlegmatic",
    "/flɛɡˈmæt.ɪk/",
    "m",
    "Having an unemotional, calm, stolid, and sluggish disposition (from phlegm in the four humors).",
    "From Greek \"phlegmatikos\" (pertaining to phlegm).",
    "\"The Dutchman listened to the terrifying threats with phlegmatic indifference.\"",
    "Washington Irving, \"Rip Van Winkle\""
  ],
  [
    "Sanguine",
    "/ˈsæŋ.ɡwɪn/",
    "m",
    "Optimistic, confident, cheerful; ruddy-faced and robust (from blood in the four humors).",
    "From OF \"sanguin,\" from Latin \"sanguineus\" (bloody, of blood, from \"sanguis\").",
    "\"A franklin was in his company; sanguine of complexion and loving his food.\"",
    "Chaucer, \"General Prologue\""
  ],
  [
    "Mercurial",
    "/mɜːrˈkjʊər.i.əl/",
    "e",
    "Subject to sudden or unpredictable changes of mood; lively, sprightly, volatile.",
    "From Latin \"Mercurialis\" (of the god Mercury, quicksilver).",
    "\"Her mercurial temperament shifted from radiant laughter to tears within a minute.\"",
    "Shakespeare, \"Cymbeline\""
  ],
  [
    "Cabriolet",
    "/ˌkæb.ri.oʊˈleɪ/",
    "t",
    "A light, two-wheeled, one-horse carriage with a folding hood (root of \"cab\").",
    "From French \"cabriolet,\" from \"cabrioler\" (to leap like a goat, Latin \"capreolus\").",
    "\"He hailed an empty cabriolet to convey him swiftly to the Bank of England.\"",
    "Dickens, \"Sketches by Boz\""
  ],
  [
    "Hansom cab",
    "/ˈhæn.səm ˌkæb/",
    "t",
    "A two-wheeled horse-drawn carriage with the driver seated high behind the passengers.",
    "Named after Joseph Hansom, who patented the design in 1834. Disraeli called it \"the gondola of London.\"",
    "\"Sherlock Holmes jumped into the nearest hansom cab and cried: To Charing Cross, driver!\"",
    "Conan Doyle, \"A Study in Scarlet\""
  ],
  [
    "Abecedarian",
    "/ˌeɪ.biː.siːˈdɛər.i.ən/",
    "e",
    "A beginner, novice; one learning the alphabet or rudiments of any art or science.",
    "From Late Latin \"abecedarius\" (of the alphabet, from A-B-C-D).",
    "\"An abecedarian scholar struggling with the opening conjugations of Latin grammar.\"",
    "Sir Thomas Browne, \"Pseudodoxia Epidemica\""
  ],
  [
    "Adumbrate",
    "/ˈæd.əmˌbreɪt/",
    "e",
    "To foreshadow vaguely; to outline faintly in shadow or rough sketch.",
    "From Latin \"adumbrare\" (to cast a shadow on, from \"umbra\" shadow).",
    "\"The opening chapter adumbrates the tragic climax that unfolds at the ruined mill.\"",
    "Victorian literary reviews"
  ],
  [
    "Amaranthine",
    "/ˌæm.əˈræn.θɪn/",
    "e",
    "Immortal, unfading, eternally blooming like the mythical amaranth flower.",
    "From Greek \"amarantos\" (unfading: \"a-\" not + \"marainein\" to wither).",
    "\"Crowns of amaranthine blossoms were placed upon the brows of the celestial choir.\"",
    "Milton, \"Paradise Lost\""
  ],
  [
    "Anacoluthon",
    "/ˌæn.ə.kəˈluː.θɒn/",
    "e",
    "A sentence that shifts grammatical construction midway, leaving the original beginning unfinished.",
    "From Greek \"anakolouthos\" (not following, inconsistent).",
    "\"The passionate orator spoke in fiery bursts of irregular anacoluthon.\"",
    "Coleridge, \"Biographia Literaria\""
  ],
  [
    "Antediluvian",
    "/ˌæn.ti.dɪˈluː.vi.ən/",
    "e",
    "Belonging to the period before the biblical Flood; extremely old-fashioned or primitive.",
    "From Latin \"ante\" (before) + \"diluvium\" (deluge, flood).",
    "\"He harbored antediluvian notions regarding the education of young ladies.\"",
    "George Eliot, \"Middlemarch\""
  ],
  [
    "Aposiopesis",
    "/ˌæp.əˌsaɪ.əˈpiː.sɪs/",
    "e",
    "Suddenly breaking off speech in the middle of a sentence, leaving it dramatically unfinished.",
    "From Greek \"aposiopesis\" (becoming silent, from \"siopan\" to be silent).",
    "\"I will have such revenges on you both that all the world shall- I will do such things-\"",
    "Shakespeare, \"King Lear\""
  ],
  [
    "Architrave",
    "/ˈɑːr.kɪ.treɪv/",
    "m",
    "The main beam resting across the tops of classical columns; decorative molded doorframe.",
    "From Italian \"architrave\" (\"archi-\" chief + \"trave\" beam, Latin \"trabs\").",
    "\"Carved Corinthian capitals supported a massive architrave of Parian marble.\"",
    "Ruskin, \"Seven Lamps of Architecture\""
  ],
  [
    "Armillary",
    "/ˈɑːr.mɪ.lər.i/",
    "e",
    "An astronomical instrument of nested metal rings representing the celestial equator, tropics, and ecliptic.",
    "From Latin \"armilla\" (bracelet, ring).",
    "\"The royal astrologer turned the brass rings of the armillary sphere to cast the prince's horoscope.\"",
    "Elizabethan scientific records"
  ],
  [
    "Autodidact",
    "/ˌɔː.toʊˈdaɪ.dækt/",
    "t",
    "A self-taught person who has acquired extensive learning without formal instruction.",
    "From Greek \"autodidaktos\" (self-taught: \"autos\" self + \"didaktos\" taught).",
    "\"The weaver was a brilliant autodidact who mastered botany and astronomy by candlelight.\"",
    "Mrs. Gaskell, \"Mary Barton\""
  ],
  [
    "Bibliophile",
    "/ˈbɪb.li.oʊˌfaɪl/",
    "t",
    "A passionate lover or collector of rare, beautiful, and antiquarian books.",
    "From Greek \"biblion\" (book) + \"-philos\" (loving).",
    "\"The elderly bibliophile spent hours caressing the crushed morocco bindings of his incunabula.\"",
    "Dibdin, \"Bibliomania\""
  ],
  [
    "Bibliopole",
    "/ˈbɪb.li.əˌpoʊl/",
    "e",
    "A bookseller, especially a dealer in rare, antiquarian, and precious books.",
    "From Greek \"bibliopoles\" (\"biblion\" book + \"polein\" to sell).",
    "\"The dusty shop of the London bibliopole was crammed with folios and black-letter volumes.\"",
    "Lamb, \"Essays of Elia\""
  ],
  [
    "Brobdingnagian",
    "/ˌbrɒb.dɪŋˈnæɡ.i.ən/",
    "e",
    "Gigantic, colossal, of enormous size (after Jonathan Swift's fictional land of giants).",
    "Coined by Jonathan Swift in \"Gulliver's Travels\" (1726).",
    "\"The ironworks possessed a Brobdingnagian steam hammer that shook the very foundations of the city.\"",
    "Victorian industrial journals"
  ],
  [
    "Callipygian",
    "/ˌkæl.ɪˈpɪdʒ.i.ən/",
    "t",
    "Having beautifully shaped, aesthetically pleasing buttocks (applied to classical statues of Venus).",
    "From Greek \"kallipygos\" (\"kallos\" beauty + \"pyge\" buttocks).",
    "\"The marble Venus Callipyge in the museum was celebrated for the grace of its classical contour.\"",
    "Victorian art histories"
  ],
  [
    "Calumny",
    "/ˈkæl.əm.ni/",
    "e",
    "A false and malicious statement designed to injure someone's reputation; slander.",
    "From Latin \"calumnia\" (false accusation, trickery).",
    "\"Be thou as chaste as ice, as pure as snow, thou shalt not escape calumny.\"",
    "Shakespeare, \"Hamlet\""
  ],
  [
    "Cartography",
    "/kɑːrˈtɒɡ.rə.fi/",
    "t",
    "The science and art of drawing maps and nautical charts.",
    "From French \"cartographie\" (Latin \"charta\" paper + Greek \"graphein\" write).",
    "\"The Dutch masters established the golden age of European cartography with their magnificent atlases.\"",
    "History of navigation"
  ],
  [
    "Chirography",
    "/kaɪˈrɒɡ.rə.fi/",
    "e",
    "The art of beautiful handwriting or penmanship; calligraphy.",
    "From Greek \"cheirographia\" (\"cheir\" hand + \"graphein\" to write).",
    "\"His clear, elegant chirography made the legal charters a joy to decipher.\"",
    "Paston Letters"
  ],
  [
    "Cinereous",
    "/sɪˈnɪər.i.əs/",
    "e",
    "Ashen gray in color, resembling wood ash.",
    "From Latin \"cinereus\" (ashen, from \"cinis\" ash).",
    "\"The volcano spewed a dense plume of cinereous vapor across the darkened bay.\"",
    "Victorian geological travels"
  ],
  [
    "Cinnabar",
    "/ˈsɪn.əˌbɑːr/",
    "m",
    "Bright red mercuric sulphide mineral, prized since antiquity as the pigment vermilion.",
    "From Greek \"kinnabari\" via Latin and OF.",
    "\"The illuminator painted the initial letter in brilliant vermilion ground from Spanish cinnabar.\"",
    "Medieval monastic manuals"
  ],
  [
    "Clavichord",
    "/ˈklæv.ɪˌkɔːrd/",
    "m",
    "An early keyboard instrument producing delicate soft tones by brass tangents striking strings.",
    "From Medieval Latin \"clavichordium\" (\"clavis\" key + \"chorda\" string).",
    "\"Bach loved to improvise upon the clavichord in the quiet of his study late at night.\"",
    "Musical histories"
  ],
  [
    "Cloister",
    "/ˈklɔɪ.stər/",
    "m",
    "A covered walkway or colonnade surrounding an open quadrangle in a monastery or cathedral.",
    "From OF \"cloistre,\" from Latin \"claustrum\" (enclosure, bolt, from \"claudere\" to close).",
    "\"The monks paced silently through the vaulted cloister, reading their breviaries by evening light.\"",
    "Bede's Chronicles"
  ],
  [
    "Codicil",
    "/ˈkɒd.ɪ.sɪl/",
    "m",
    "A legal document that amends or supplements rather than replaces an existing will.",
    "From Latin \"codicillus\" (small writing tablet, diminutive of \"codex\" tree trunk/book).",
    "\"By a secret codicil executed on his deathbed, the uncle bequeathed all his estate to his nephew.\"",
    "Dickens, \"Bleak House\""
  ],
  [
    "Corbel",
    "/ˈkɔːr.bəl/",
    "m",
    "A projecting stone or timber bracket jutting from a wall to support an overhanging arch or parapet.",
    "From OF \"corbel,\" diminutive of \"corp\" (crow, raven, Latin \"corvus\" - like a crow's beak).",
    "\"Carved granite corbels representing snarling lions supported the castle parapet.\"",
    "Gothic architecture surveys"
  ],
  [
    "Daguerreotype",
    "/dəˈɡɛr.oʊˌtaɪp/",
    "t",
    "An early photographic process employing an iodine-sensitized silver-plated copper plate developed with mercury vapor.",
    "Named after the French inventor Louis Daguerre (1839).",
    "\"The family gathered in stiff postures to sit for their first daguerreotype portrait.\"",
    "Early history of photography"
  ],
  [
    "Deipnosophist",
    "/daɪpˈnɒs.ə.fɪst/",
    "e",
    "A master of learned, sparkling dinner-table conversation; an intellectual dining philosopher.",
    "From Greek \"Deipnosophistai\" (dinner philosophers: \"deipnon\" meal + \"sophistes\" wise man).",
    "\"Dr. Johnson shone as the supreme deipnosophist of the Literary Club at the Turk's Head.\"",
    "Boswell, \"Life of Johnson\""
  ],
  [
    "Diaphanous",
    "/daɪˈæf.ə.nəs/",
    "e",
    "Light, delicate, and translucent (of fine silk gauze, muslin, or morning mist).",
    "From Greek \"diaphanes\" (transparent: \"dia\" through + \"phainein\" to show).",
    "\"A veil of diaphanous morning mist hovered over the sleeping river.\"",
    "Shelley, \"Epipsychidion\""
  ],
  [
    "Disembogue",
    "/ˌdɪs.ɪmˈboʊɡ/",
    "e",
    "To pour forth, empty, or discharge waters into the sea or a larger body of water (of a river).",
    "From Spanish \"desembocar\" (\"des-\" un- + \"embocar\" to enter the mouth, from \"boca\" mouth).",
    "\"The mighty Orinoco disembogues into the Atlantic through fifty marshy channels.\"",
    "Raleigh, \"Discovery of Guiana\""
  ],
  [
    "Divagation",
    "/ˌdaɪ.vəˈɡeɪ.ʃən/",
    "e",
    "A straying, wandering off, or digression from the main path or subject of discussion.",
    "From Latin \"divagari\" (to wander about: \"di-\" apart + \"vagari\" to wander).",
    "\"After many delightful divagations into antiquarian lore, the author returned to his narrative.\"",
    "Hazlitt, \"Table Talk\""
  ],
  [
    "Dulcet",
    "/ˈdʌl.sɪt/",
    "m",
    "Sweet, soothing, melodious, and pleasant to the ear (especially of voice or music).",
    "From OF \"doucet,\" diminutive of \"doux\" (sweet, Latin \"dulcis\").",
    "\"Uttering such dulcet and harmonious breath that the rude sea grew civil at her song.\"",
    "Shakespeare, \"Midsummer Night's Dream\""
  ],
  [
    "Effluvium",
    "/ɪˈfluː.vi.əm/",
    "e",
    "An unpleasant, noxious vapor or foul exhalation arising from decaying organic matter.",
    "From Latin \"effluvium\" (a flowing out, from \"effluere\" to flow out).",
    "\"The foul effluvium of the Thames during the Great Stink of 1858 drove Parliament from Westminster.\"",
    "Victorian sanitary chronicles"
  ],
  [
    "Enfilade",
    "/ˈɛn.fɪˌleɪd/",
    "e",
    "A volley of gunfire directed along the length of an enemy trench or line from flank to flank.",
    "From French \"enfilade,\" from \"enfiler\" (to thread on a string, from \"fil\" thread).",
    "\"The British battery brought a murderous enfilade fire upon the advancing French columns.\"",
    "Napoleonic war records"
  ],
  [
    "Epistolary",
    "/ɪˈpɪs.təˌlɛr.i/",
    "e",
    "Relating to letters or letter-writing; a novel written in the form of a series of letters.",
    "From Latin \"epistolaris,\" from Greek \"epistole\" (letter, message).",
    "\"Richardson established the English domestic novel through the epistolary format of Clarissa.\"",
    "Literary histories"
  ],
  [
    "Evanescent",
    "/ˌɛv.əˈnɛs.ənt/",
    "e",
    "Quickly fading, fleeting, or disappearing from sight or memory like vapor.",
    "From Latin \"evanescere\" (to vanish, from \"vanus\" empty).",
    "\"The rainbow's hues were evanescent, vanishing into the gray autumn clouds.\"",
    "Keats, \"Ode on Melancholy\""
  ],
  [
    "Fatuous",
    "/ˈfætʃ.u.əs/",
    "e",
    "Silly, foolish, complacent, and completely devoid of intelligence.",
    "From Latin \"fatuus\" (foolish, insipid). Root of \"fatuity.\"",
    "\"He smiled with fatuous self-satisfaction at his own feeble pun.\"",
    "Thackeray, \"Vanity Fair\""
  ],
  [
    "Festoon",
    "/fɛˈstuːn/",
    "e",
    "A decorative chain or garland of flowers, leaves, or ribbons hung in graceful hanging curves.",
    "From French \"feston,\" from Italian \"festone\" (festive ornament, from \"festa\" feast).",
    "\"Garlands of holly and ivy were festooned around the great hearth of the hall.\"",
    "Dickens, \"The Cricket on the Hearth\""
  ],
  [
    "Filigree",
    "/ˈfɪl.ɪˌɡriː/",
    "e",
    "Delicate, ornamental lacelike openwork made of twisted fine gold or silver wire.",
    "From French \"filigrane,\" from Latin \"filum\" (thread) + \"granum\" (grain).",
    "\"The Venetian locket was wrought in exquisite filigree of pure gold.\"",
    "Benvenuto Cellini, \"Autobiography\""
  ],
  [
    "Fribble",
    "/ˈfrɪb.əl/",
    "e",
    "A frivolous, trifling, petty person; to waste precious time upon trifles.",
    "Onomatopoeic formation, perhaps blend of \"frivolous\" and \"dribble.\"",
    "\"He was an idle fribble who spent four hours each morning choosing his waistcoat ribbons.\"",
    "Garrick, \"Miss in Her Teens\""
  ],
  [
    "Gimcrack",
    "/ˈdʒɪm.kræk/",
    "e",
    "A cheap, showy, poorly made trinket or ornament; shoddy, flimsy workmanship.",
    "17th-century slang of obscure origin, perhaps alteration of \"engine\" + \"crack.\"",
    "\"The fair was crowded with stalls selling gingerbread and worthless pewter gimcracks.\"",
    "Addison, \"The Spectator\""
  ],
  [
    "Grandiloquent",
    "/ɡrænˈdɪl.ə.kwənt/",
    "e",
    "Pompous, bombastic, or extravagant in speech, style, or vocabulary.",
    "From Latin \"grandiloquus\" (\"grandis\" grand + \"loqui\" to speak).",
    "\"Mr. Micawber delivered a grandiloquent address to his family regarding his monetary expectations.\"",
    "Dickens, \"David Copperfield\""
  ],
  [
    "Halcyon",
    "/ˈhæl.si.ən/",
    "e",
    "Denoting a period of time in the past that was idyllically peaceful, happy, and prosperous.",
    "From Greek \"halkyon\" (kingfisher, believed to calm the sea during its nesting season).",
    "\"Those were the halcyon days of youth, before the bitter storms of political strife began.\"",
    "Milton, \"On the Morning of Christ's Nativity\""
  ],
  [
    "Hebdomadal",
    "/hɛbˈdɒm.ə.dəl/",
    "e",
    "Occurring, published, or appearing once every week; weekly.",
    "From Late Latin \"hebdomadalis,\" from Greek \"hebdomas\" (seven, a week).",
    "\"The Hebdomadal Council of Oxford University met every Monday to govern university affairs.\"",
    "Oxford historical records"
  ],
  [
    "Heliotrope",
    "/ˈhiː.li.əˌtroʊp/",
    "t",
    "A garden plant with clusters of fragrant purple flowers that turn toward the sun; a mauve-purple hue.",
    "From Greek \"heliotropion\" (\"helios\" sun + \"tropos\" turn).",
    "\"The parlor was scented with pots of flowering heliotrope and lavender.\"",
    "Proust, \"Swann's Way\""
  ],
  [
    "Histrionic",
    "/ˌhɪs.triˈɒn.ɪk/",
    "e",
    "Overly theatrical, melodramatic, or exaggerated in emotional behavior or speech.",
    "From Latin \"histrionicus,\" from \"histrio\" (actor).",
    "\"She burst into histrionic sobs, casting herself upon the drawing-room settee.\"",
    "Charlotte Brontë, \"Villette\""
  ],
  [
    "Hubris",
    "/ˈhjuː.brɪs/",
    "e",
    "Excessive pride, overweening self-confidence, or arrogance that defies the gods and leads to nemesis.",
    "From Greek \"hybris\" (wanton insolence, arrogance).",
    "\"The conqueror's blind hubris led his grand army into the fatal snows of Russia.\"",
    "Historical analyses of Napoleon"
  ],
  [
    "Iconoclast",
    "/aɪˈkɒn.əˌklæst/",
    "e",
    "A person who attacks or smashes cherished traditional beliefs, revered images, or institutions.",
    "From Greek \"eikonoklastes\" (\"eikon\" image + \"klan\" to break).",
    "\"Puritan iconoclasts smashed the medieval stained-glass windows of the cathedral with pikes.\"",
    "History of the English Civil War"
  ],
  [
    "Idiosyncrasy",
    "/ˌɪd.i.əˈsɪŋ.krə.si/",
    "e",
    "A distinctive behavioral quirk, peculiar habit, or individual characteristic of temperament.",
    "From Greek \"idiosynkrasia\" (\"idios\" one's own + \"synkrasis\" mixture of humors).",
    "\"One of Uncle Toby's harmless idiosyncrasies was recreating the siege of Namur in the garden.\"",
    "Sterne, \"Tristram Shandy\""
  ],
  [
    "Ignominious",
    "/ˌɪɡ.nəˈmɪn.i.əs/",
    "e",
    "Deserving, causing, or accompanied by public disgrace, humiliation, or dishonor.",
    "From Latin \"ignominiosus,\" from \"ignominia\" (disgrace: \"in-\" not + \"nomen\" name).",
    "\"The cowardly general suffered an ignominious court-martial and was stripped of his sword.\"",
    "Gibbon, \"Decline and Fall\""
  ],
  [
    "Abacot",
    "/ˈæbəkɒt/",
    "e",
    "A traditional double crown worn by English kings, particularly associated with Henry VI.",
    "Obscure origin, possibly a corruption of 'bicorne' or Arabic derivation.",
    "He wore upon his head an abacot set with many precious stones.",
    "Edward Hall, The Union of the Two Noble and Illustre Families of Lancastre and Yorke"
  ],
  [
    "Ablaqueate",
    "/æˈblækwieɪt/",
    "e",
    "To expose the roots of trees by digging around them to apply fertilizer or air them.",
    "From Latin ablaqueatus, past participle of ablaqueare.",
    "It is time to ablaqueate the fruit trees in the orchard before the frost.",
    "John Evelyn, Sylva, or a Discourse of Forest-Trees"
  ],
  [
    "Abuttal",
    "/əˈbʌtəl/",
    "m",
    "The boundary or border where two pieces of land touch or meet, common in feudal land grants.",
    "From Old French abuter, meaning to end at or border upon.",
    "The charter clearly defines the abuttals of the lord's manor and the common pasture.",
    "Middle English Feudal Charter Rolls"
  ],
  [
    "Accoy",
    "/əˈkɔɪ/",
    "m",
    "To soothe, pacify, appease, or subdue someone.",
    "From Old French acoier, from Vulgar Latin quietare.",
    "With gentle words she sought to accoy his fierce and wrathful mood.",
    "John Gower, Confessio Amantis"
  ],
  [
    "Accubation",
    "/ˌækjuˈbeɪʃən/",
    "t",
    "The ancient or medieval practice of reclining on couches during a meal.",
    "From Latin accubatio, from accubare, to lie down at.",
    "The grand feast featured the traditional custom of accubation for the high-ranking barons.",
    "Victorian Antiquarian Observations on Medieval Customs"
  ],
  [
    "Achate",
    "/əˈtʃeɪt/",
    "m",
    "Provisions, victuals, or the purchase of food for a household.",
    "From Old French achat, meaning purchase.",
    "The steward went to the market to buy good achates for the lord's table.",
    "Piers Plowman"
  ],
  [
    "Acidia",
    "/əˈsɪdiə/",
    "m",
    "A state of listlessness, torpor, or spiritual sloth, considered one of the deadly sins in medieval monastic life.",
    "From Late Latin acedia, from Greek akēdia.",
    "The monk fell into acidia during the long winter night watches.",
    "Chaucer, The Parson's Tale"
  ],
  [
    "Acolythe",
    "/ˈækəlaɪt/",
    "m",
    "An attendant, follower, or assistant in religious or noble court ceremonies.",
    "From Old French acolyt, from Late Latin acolythus.",
    "The young knight walked as an acolythe behind the bishop in the procession.",
    "Wycliffe Bible"
  ],
  [
    "Acop",
    "/ˈeɪkɒp/",
    "t",
    "A remedy or potion for fatigue or weariness.",
    "From Greek akopos, meaning relieving weariness.",
    "The apothecary prepared an acop to refresh the tired herald after his long ride.",
    "17th-century herbal compilation"
  ],
  [
    "Acre-fight",
    "/ˈeɪkər faɪt/",
    "m",
    "An ancient judicial duel or combat fought by champions to settle a dispute over land boundaries.",
    "From Old English æcer and fiht.",
    "The dispute over the meadow was settled by a bloody acre-fight.",
    "Ancient Border Law Chronicles"
  ],
  [
    "Acton",
    "/ˈæktən/",
    "m",
    "A quilted leather or stuffed fabric tunic worn under medieval armor to prevent chafing and absorb blows.",
    "From Old French auqueton, from Arabic al-qutn (the cotton).",
    "He donned his heavy iron helm over his stout padded acton.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Adamant",
    "/ˈædəmənt/",
    "m",
    "A legendary, impenetrable stone or diamond of supreme hardness, often used metaphorically for armor or resolve.",
    "From Old French adamant, from Greek adamas.",
    "His breastplate was forged of steel as hard as adamant.",
    "Le Morte d'Arthur"
  ],
  [
    "Addub",
    "/əˈdʌb/",
    "m",
    "To invest with knighthood, or to adorn and equip someone with armor.",
    "From Old French adouber, of Germanic origin.",
    "The king rose to addub the young squire on the blood-stained field.",
    "Chronicles of Froissart"
  ],
  [
    "Adeem",
    "/əˈdiːm/",
    "m",
    "To revoke, cancel, or take away a grant, legacy, or feudal privilege.",
    "From Old French adimer, from Latin adimere.",
    "The king threatened to adeem the rebel lord's fief and castle.",
    "English Feudal Legal Registers"
  ],
  [
    "Adhorison",
    "/ˌædhəˈraɪzən/",
    "m",
    "A sudden terror, dread, or horror seizing someone.",
    "From Latin adhorrescere.",
    "A great adhorison fell upon the garrison as the dragon breached the outer gate.",
    "Medieval Metrical Romances"
  ],
  [
    "Adjument",
    "/ˈædʒʊmənt/",
    "e",
    "An aid, help, or assistance provided in military or administrative matters.",
    "From Latin adiumentum.",
    "The timely reinforcement served as a vital adjument to the besieged garrison.",
    "State Papers of Henry VIII"
  ],
  [
    "Adjuvancy",
    "/ˈædʒʊvənsi/",
    "t",
    "Help, support, or patronage given by a feudal lord or patron.",
    "From Latin adjuvantia.",
    "Under the adjuvancy of the powerful duke, the knight secured his hereditary lands.",
    "Historical Essays on Feudalism"
  ],
  [
    "Adnichil",
    "/ædˈnɪkɪl/",
    "m",
    "To annul, cancel, or bring to nothing, especially a treaty or decree.",
    "From Medieval Latin adnihilare.",
    "The treaty was signed in good faith, only for the hostile baron to adnichil its terms.",
    "Scottish Historical Documents"
  ],
  [
    "Adoulter",
    "/əˈduːltər/",
    "m",
    "An unauthorized, illegally built castle erected during times of civil war or anarchy without royal license.",
    "From Old French adoulter, adulterine.",
    "The king commanded that all adoulters built during the war must be immediately demolished.",
    "The Anglo-Saxon Chronicle"
  ],
  [
    "Adscript",
    "/ˈædskrɪpt/",
    "m",
    "Bound to the soil; a serf or villein legally tied to a specific manor and lord.",
    "From Latin adscripticius.",
    "The peasants were adscript to the manor, unable to leave without the lord's leave.",
    "Legal tracts of Bracton"
  ],
  [
    "Adversator",
    "/ˈædvərsətər/",
    "e",
    "An opponent, adversary, or enemy in battle or tournament.",
    "From Latin adversator.",
    "He faced his adversator in the lists with lance leveled and visor down.",
    "Tudor translations of classical histories"
  ],
  [
    "Advocate",
    "/ˈædvəkət/",
    "m",
    "A protector, defender, or patron of a church, abbey, or feudal estate.",
    "From Old French avocat, from Latin advocatus.",
    "The warlike baron acted as the advocate of the monastery, defending its lands by the sword.",
    "Monasticon Anglicanum"
  ],
  [
    "Affeer",
    "/əˈfɪər/",
    "m",
    "To assess, fix, or reduce a fine or amercement in a feudal court to a reasonable sum.",
    "From Old French afeurer.",
    "The local court met to affeer the fines levied upon the villagers for trespass.",
    "Manorial Court Rolls"
  ],
  [
    "Affidation",
    "/ˌæfɪˈdeɪʃən/",
    "m",
    "A mutual oath of fidelity, fealty, or alliance taken between lords and vassals.",
    "From Medieval Latin afffidatio.",
    "The solemn affidation was sworn upon the holy relics before the assembled barons.",
    "Feudal Oath Registers"
  ],
  [
    "Affodill",
    "/ˈæfədɪl/",
    "e",
    "An archaic variant name for the asphodel flower, often associated with heraldry and gardens.",
    "From Latin asphodelus.",
    "Garlands of sweet affodill were woven for the May tournament.",
    "The Herball by John Gerard"
  ],
  [
    "Afforce",
    "/əˈfɔːrs/",
    "m",
    "To reinforce a garrison, army, or legal court with extra men or judges.",
    "From Old French aforcer.",
    "The constable sent men to afforce the castle walls before the siege began.",
    "Year Books of Edward I"
  ],
  [
    "Affray",
    "/əˈfreɪ/",
    "m",
    "A sudden attack, tumult, or armed brawl breaking the king's peace.",
    "From Old French effrayer.",
    "A bloody affray broke out in the tavern between the king's archers and the foreign mercenaries.",
    "Medieval Town Chronicles"
  ],
  [
    "Affret",
    "/əˈfrɛt/",
    "m",
    "A violent onset, charge, or attack in battle.",
    "From Old French affrete.",
    "The knights withstood the fierce affret of the heavy horsemen.",
    "Chanson de Roland translations"
  ],
  [
    "Afront",
    "/əˈfrʌnt/",
    "m",
    "Face to face, directly confronting an enemy in battle.",
    "From Old French afronter.",
    "The two battalions met afront upon the open plain.",
    "Layamon's Brut"
  ],
  [
    "Agbelt",
    "/ˈæɡbɛlt/",
    "m",
    "A belt or girdle worn around armor or tunic.",
    "From Old English prefixes combined with belt.",
    "His jeweled agbelt held his heavy arming sword securely at his side.",
    "Middle English romance literature"
  ],
  [
    "Aggrievance",
    "/əˈɡriːvəns/",
    "m",
    "A wrong, injury, or oppression suffered under feudal rule.",
    "From Old French agrevance.",
    "The peasants brought their list of grievantes and aggrievances to the visiting justice.",
    "Peasants' Revolt petitions"
  ],
  [
    "Agnation",
    "/æɡˈneɪʃən/",
    "t",
    "Descent traced exclusively through the male line, crucial for feudal inheritance laws.",
    "From Latin agnatio.",
    "The succession to the earldom was strictly governed by agnation.",
    "Legal treatises on peerage law"
  ],
  [
    "Agone",
    "/əˈɡɒn/",
    "m",
    "Ago, past, or gone by in time.",
    "From Old English agān.",
    "Many long years agone, the great castle was raised upon this lonely hill.",
    "Chaucer, Canterbury Tales"
  ],
  [
    "Aguise",
    "/əˈɡaɪz/",
    "m",
    "To dress, attire, array, or disguise oneself in fine garments or armor.",
    "From Old French aguiser.",
    "The knights aguised themselves in splendid scarlet cloaks for the royal feast.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Alablaster",
    "/ˈæləblæstər/",
    "m",
    "An archaic spelling and term for alabaster, widely used for medieval knightly effigies in churches.",
    "From Old French alabastre.",
    "Upon the tomb lay his effigy carved from fine white alablaster.",
    "Church Monument Records"
  ],
  [
    "Alane",
    "/əˈleɪn/",
    "m",
    "Alone, solitary, or unaccompanied.",
    "From Old English āna.",
    "The errant knight rode alane through the dark and perilous forest.",
    "Cursor Mundi"
  ],
  [
    "Alant",
    "/əˈlænt/",
    "m",
    "A large, ferocious breed of hunting dog, often used in medieval boar and wolf hunting.",
    "From Old French alant, from the Alani tribe.",
    "He unleashed his fierce alants upon the charging boar.",
    "Master of Game by Edward of Norwich"
  ],
  [
    "Albe",
    "/ælbi/",
    "m",
    "A long-sleeved white linen liturgical vestment worn by priests and clerics.",
    "From Latin alba.",
    "The chaplain vested himself in his pure white albe before mass.",
    "Medieval Church Inventories"
  ],
  [
    "Alchemister",
    "/ˈælkɪmɪstər/",
    "e",
    "An alchemist; one who practices alchemy in search of the philosopher's stone.",
    "From Middle English alkimistre.",
    "The lord kept a secretive alchemister in the castle tower to turn base metal to gold.",
    "Chaucer, Canon's Yeoman's Tale"
  ],
  [
    "Alerion",
    "/əˈlɪəriən/",
    "m",
    "A mythical heraldic eagle depicted without beak or feet.",
    "From Old French alerion, an anagram of liron (aerie).",
    "His shield bore three golden alerions upon a field of azure.",
    "Medieval Heraldic Rolls"
  ],
  [
    "Alestake",
    "/ˈeɪlsteɪk/",
    "m",
    "A pole or post set up outside an alehouse as a sign to travelers.",
    "From Old English ealu and staca.",
    "They found the tavern by the tall alestake standing beside the dusty road.",
    "Piers Plowman"
  ],
  [
    "Alfer",
    "/ˈælfər/",
    "m",
    "A horse, specifically a mount or warhorse.",
    "From Arabic al-farash or Spanish alfana.",
    "He mounted his trusty alfer and rode out to meet the vanguard.",
    "Middle English Alexander romances"
  ],
  [
    "Allegate",
    "/ˈælɪɡeɪt/",
    "e",
    "To adduce, allege, or cite as proof or authority in an argument.",
    "From Latin allegare.",
    "The herald did allegate ancient royal treaties to press the king's claim.",
    "State papers of Queen Elizabeth I"
  ],
  [
    "Almner",
    "/ˈɑːmnər/",
    "m",
    "An almoner; an officer responsible for distributing charity to the poor on behalf of a lord or monastery.",
    "From Old French almosnier.",
    "The royal almner distributed bread and silver to the beggars outside the castle gate.",
    "Household Ordinances of Edward II"
  ],
  [
    "Bandalore",
    "/ˈbændəˌlɔːr/",
    "t",
    "An archaic toy consisting of two disks connected by a short axle with a string wound around it, identical to a yo-yo.",
    "French *bandalore*, origin obscure",
    "The young squire amused himself in the solar with a carved wooden bandalore.",
    "Memoirs of the Late Thomas Holcroft"
  ],
  [
    "Barony",
    "/ˈbærəni/",
    "m",
    "The domain, rank, or jurisdiction of a baron within the feudal hierarchy.",
    "Middle English, from Old French *baronie*",
    "He pledged his loyalty to the king for the lands comprising his newly granted barony.",
    "Domesday Survey"
  ],
  [
    "Basken",
    "/ˈbæskən/",
    "e",
    "To wallow, lounge, or take pleasure in warmth or comfort.",
    "Variant of bask, from Old Norse *baðask*",
    "The weary men-at-arms basken by the hearth fire after the siege.",
    "Spenser, The Faerie Queene"
  ],
  [
    "Baudkin",
    "/ˈbɔːdkɪn/",
    "m",
    "A rich, costly fabric woven with silk and gold threads, imported from Baghdad and used for royal vestments.",
    "Middle English *baudekine*, from Medieval Latin *Baldacinus* (Baghdad)",
    "The bishop wore a magnificent cope of red baudkin for the coronation ceremony.",
    "Chaucer, The Canterbury Tales"
  ],
  [
    "Bayard",
    "/ˈbeɪərd/",
    "m",
    "A bay-colored horse, specifically celebrated in medieval romance as a magic steed; also used to denote a blind, reckless person.",
    "Old French *baiart*, from *bai* (bay-colored)",
    "He rode forth upon Bayard, his armor gleaming in the morning sun.",
    "The Song of Roland"
  ],
  [
    "Beaumont",
    "/ˈboʊmɒnt/",
    "m",
    "A high mound or defensive earthwork constructed within a fortification.",
    "Old French *beau* (fair) + *mont* (mount)",
    "Sentinels kept watch over the countryside from the high beaumont of the fortress.",
    "Anglo-Norman Chronicle"
  ],
  [
    "Bedel",
    "/bɪˈdɛl/",
    "m",
    "An administrative officer in medieval universities or guilds.",
    "Old English *bēdel*",
    "The university bedel led the procession carrying the mace of office.",
    "Oxford University Archives"
  ],
  [
    "Behight",
    "/bɪˈhaɪt/",
    "m",
    "To promise, vow, entrust, or commit oneself to a course of action.",
    "Old English *behātan*",
    "He behight his sword and service to the noble lady of the castle.",
    "Chaucer, Troilus and Criseyde"
  ],
  [
    "Belamie",
    "/ˈbɛləmi/",
    "e",
    "A friend, companion, or term of affectionate address meaning 'good friend'.",
    "Old French *bel ami*",
    "Well met, belamie, let us share a flagon of ale at the tavern.",
    "Shakespeare, Henry IV, Part 2"
  ],
  [
    "Belyve",
    "/bɪˈlaɪv/",
    "m",
    "Quickly, speedily, immediately, or forthwith.",
    "Middle English *bi live* (in life, actively)",
    "The squires brought forward the fresh destriers belyve.",
    "Sir Orfeo"
  ],
  [
    "Benefice",
    "/ˈbɛnɪfɪs/",
    "m",
    "A church office endowed with fixed revenues or property, held by a clergyman in the feudal church system.",
    "Latin *beneficium* (a favor or grant)",
    "The young cleric was granted a lucrative benefice in the northern diocese.",
    "Ecclesiastical Records of Lincoln"
  ],
  [
    "Bergander",
    "/ˈbɜːrɡændər/",
    "t",
    "An archaic regional term for the shelduck, hunted for sport and feathers in medieval coastal fens.",
    "Middle English, from Dutch *berch-gander*",
    "The falconer loosed his tiercel after a wild bergander rising from the reeds.",
    "The Book of St Albans"
  ],
  [
    "Berobber",
    "/bɪˈrɒbər/",
    "e",
    "To rob, plunder, or strip of possessions violently.",
    "Middle English *be-* + *robben*",
    "Bandits lurked along the forest tracks to berobber traveling merchants.",
    "Holinshed's Chronicles"
  ],
  [
    "Besagu",
    "/ˈbɛsəɡuː/",
    "m",
    "A medieval polearm featuring a small round shield or disk beneath the spear point, or a type of flat circular brooch.",
    "Old French *besaguë*",
    "The guards stood at the gatehouse armed with long spears and besagus.",
    "Inventory of the Tower of London"
  ],
  [
    "Beshrew",
    "/bɪˈʃruː/",
    "e",
    "To invoke evil upon, curse, or express mild annoyance toward someone.",
    "Middle English *beshrewe* (to make wicked)",
    "Beshrew my heart if I did not leave my gauntlets in the armory.",
    "Shakespeare, Romeo and Juliet"
  ],
  [
    "Besmote",
    "/bɪˈsmoʊt/",
    "m",
    "Past tense of besmite; to strike, smite, or hit hard with a weapon.",
    "Old English *be-* + *smītan*",
    "The champion besmote his opponent's shield with a thunderous blow.",
    "Alliterative Morte Arthure"
  ],
  [
    "Bestead",
    "/bɪˈstɛd/",
    "e",
    "Situated in a particular plight or condition; often preceded by hard, sore, or ill.",
    "Middle English *bestedde*",
    "The garrison was hard bestead by famine and relentless bombardment.",
    "Spenser, The Faerie Queene"
  ],
  [
    "Betid",
    "/bɪˈtɪd/",
    "m",
    "To happen, occur, or befall someone as a matter of fate.",
    "Old English *betīdan*",
    "Woe is me for the sorrow that has betid our house this day.",
    "Chaucer, The Knight's Tale"
  ],
  [
    "Bevor",
    "/ˈbiːvər/",
    "m",
    "A piece of medieval plate armor designed to protect the lower face and neck.",
    "Middle English, from Old French *bevire*",
    "He adjusted his bevor before entering the lists for the afternoon joust.",
    "Wardrobe Accounts of Edward I"
  ],
  [
    "Bey",
    "/beɪ/",
    "m",
    "A feudal governor or chieftain of a district in the Ottoman Empire and eastern borderlands.",
    "Turkish *beg* (chieftain)",
    "The Christian knight engaged the Turkish bey in single combat.",
    "Knolles, Generall Historie of the Turkes"
  ],
  [
    "Bi-fore",
    "/bɪˈfɔːr/",
    "m",
    "In front of, previously, or beforehand in time or place.",
    "Old English *beforan*",
    "The lords knelt bi-fore the high throne to render their fealty.",
    "Gower, Confessio Amantis"
  ],
  [
    "Bistort",
    "/ˈbɪstɔːrt/",
    "m",
    "A medicinal herb used in medieval apothecary gardens to staunch wounds and treat fevers.",
    "Medieval Latin *bistorta*, from *bis* (twice) + *tortus* (twisted)",
    "The castle leech prepared a soothing poultice of bistort for the wounded archer.",
    "The Grete Herball"
  ],
  [
    "Blet",
    "/blɛt/",
    "m",
    "Overripe or decaying state of pulpy fruit; used metaphorically for decay.",
    "French *blet*",
    "The autumn apples lay in the orchard grass, beginning to blet.",
    "Household Rolls of a Nobleman"
  ],
  [
    "Blinkard",
    "/ˈblɪŋkərd/",
    "t",
    "A person with dim vision, or one who blinks frequently; a derogatory term for a purblind watchman.",
    "From blink + suffix *-ard*",
    "The ancient blinkard on the gatehouse tower failed to spot the approaching scouts.",
    "Scott, Ivanhoe"
  ],
  [
    "Bloomer",
    "/ˈbluːmər/",
    "m",
    "An archaic iron-smelting hearth or furnace used in medieval bloomeries to produce malleable wrought iron.",
    "Old English *blōma* (mass of metal)",
    "Smoke poured from the stone bloomer near the castle smithy day and night.",
    "Ironmongers' Guild Records"
  ],
  [
    "Bode",
    "/boʊd/",
    "m",
    "To portend, foreshadow, or act as an omen of future events.",
    "Old English *bodian* (to announce)",
    "The flight of ravens over the ramparts bodes ill for the upcoming battle.",
    "Morte Darthur"
  ],
  [
    "Bodkin",
    "/ˈbɒdkɪn/",
    "m",
    "A small, pointed instrument for piercing cloth, or a type of slender medieval arrow or dagger designed to pierce chainmail.",
    "Middle English *bodekin*",
    "The crossbowman loaded his quarrel with a hardened steel bodkin.",
    "Battle of Agincourt Archives"
  ],
  [
    "Boll",
    "/boʊl/",
    "m",
    "An old Scottish and northern English dry measure of capacity, used for grain and meal.",
    "Old Norse *bolli* (bowl)",
    "The tenant farmer paid his annual rent in ten bolls of malted barley.",
    "Scottish Exchequer Rolls"
  ],
  [
    "Boln",
    "/boʊln/",
    "e",
    "Swollen, puffed up, or tumid.",
    "Middle English *bolnen*, from Old Norse *bólga*",
    "His hand was boln and bruised from the impact of the iron mace.",
    "Surrey, Translation of Aeneid"
  ],
  [
    "Bordland",
    "/ˈbɔːrdlənd/",
    "m",
    "Land retained by a feudal lord for the direct maintenance of his household; demesne land.",
    "Old English *bord* (table, board) + *land*",
    "The serfs plowed the lord's bordland before tending their own strips.",
    "Monastic Cartulary of Ramsey"
  ],
  [
    "Bore",
    "/bɔːr/",
    "m",
    "A tidal flood wave that pushes up a narrow estuary or river channel, threatening medieval shipping.",
    "Old English *būr* or Old Norse origin",
    "The swift bore on the river Severn capsized several small fishing cogs.",
    "Waltham Chronicle"
  ],
  [
    "Bouche",
    "/buːʃ/",
    "m",
    "An allowance of food, drink, or provisions granted to retainers in a royal or noble household.",
    "Old French *bouche* (mouth)",
    "The knights of the chamber were granted bouche of court for themselves and their squires.",
    "Household Ordinance of Edward II"
  ],
  [
    "Bouget",
    "/ˈbuːdʒɪt/",
    "m",
    "A heraldic charge representing a pair of leather water-bags carried across a pack-saddle.",
    "Old French *bougette* (small bag)",
    "Three silver bougets appeared upon the azure field of the baron's shield.",
    "Roll of Arms of Henry III"
  ],
  [
    "Boutade",
    "/buːˈtɑːd/",
    "t",
    "An abrupt burst of temper, caprice, or an improvised musical flight in medieval minstrelsy.",
    "French *boutade*, from *bouter* (to thrust)",
    "The court jester broke into a lively boutade upon the lute to calm the quarrel.",
    "Chronicles of the Court"
  ],
  [
    "Bower",
    "/ˈbaʊər/",
    "m",
    "A private inner apartment, dwelling, or bedchamber, especially for a lady in a castle.",
    "Old English *būr* (cottage, chamber)",
    "The queen retired to her bower with her handmaidens to sew tapestries.",
    "Beowulf"
  ],
  [
    "Brabble",
    "/ˈbræbəl/",
    "e",
    "To quarrel noisily, argue pettily, or wrangle over minor points.",
    "Middle Dutch *brabbelen*",
    "The mercenaries began to brabble over the division of the spoils.",
    "Shakespeare, Othello"
  ],
  [
    "Chevisance",
    "/ˈtʃɛvɪzəns/",
    "m",
    "An enterprise, undertaking, or bargain, often involving financial or chivalric maneuvering.",
    "Middle English, from Old French chevisance, from chevir (to achieve).",
    "By shrewd chevisance in the wool trade, the lord acquired vast estates.",
    "Geoffrey Chaucer, The Canterbury Tales"
  ],
  [
    "Curtal",
    "/ˈkɜːtəl/",
    "m",
    "A horse with its tail docked, or a short-barreled cannon of the medieval and Renaissance periods.",
    "Middle English, from Old French curtau, from Latin curtus (short).",
    "The knight mounted his sturdy curtal and rode out to meet the vanguard.",
    "Historical records of the Tower of London"
  ],
  [
    "Cowl-staff",
    "/ˈkaʊlˌstɑːf/",
    "e",
    "A wooden pole or stave used by two persons to carry a large tub, barrel, or load on their shoulders.",
    "Middle English, compound of cowl (vessel/tub) and staff.",
    "They bore the ale-vat between them upon a stout cowl-staff.",
    "William Shakespeare, The Merry Wives of Windsor"
  ],
  [
    "Coute",
    "/kuːt/",
    "m",
    "A piece of plate armor designed to protect the elbow joint.",
    "Middle English, from Old French coute (elbow).",
    "A well-fitted coute was essential to ensure flexibility while wielding the lance.",
    "Inventory of the Wardrobe of Edward IV"
  ],
  [
    "Carcass",
    "/ˈkɑːrkəs/",
    "m",
    "An iron hoop or framework filled with combustibles, fired from a mortar during medieval and early modern sieges.",
    "Middle English, from Old French carcasse.",
    "The defending garrison hurled a burning carcass over the castle wall into the siege engine.",
    "Chronicles of the Hundred Years' War"
  ],
  [
    "Cousin",
    "/ˈkʌzɪn/",
    "m",
    "A title of courtesy used by a sovereign to address a peer or fellow monarch.",
    "Middle English, from Old French cosin, from Latin consobrinus.",
    "Our right trusty and well-beloved cousin, we greet you well.",
    "Royal Writ of Henry V"
  ],
  [
    "Casque",
    "/kæsk/",
    "m",
    "A piece of armor used to protect the head; a helmet.",
    "Middle English, from French casque, from Spanish casco (skull/helmet).",
    "He adjusted his steel casque before entering the lists for the tournament.",
    "Sir Walter Scott, Ivanhoe"
  ],
  [
    "Chaffer",
    "/ˈtʃæfər/",
    "m",
    "To bargain, haggle, or trade goods at a medieval market or fair.",
    "Middle English, from Old English cēapian (to buy) and faru (journey).",
    "The merchants gathered in the bailey to chaffer over Flemish wool and Rhenish wine.",
    "Piers Plowman"
  ],
  [
    "Catafalque",
    "/ˈkætəfɔːlk/",
    "m",
    "A raised wooden framework or decorated platform used to support a bier or coffin during a grand funeral.",
    "Middle English, from Italian catafalco.",
    "The fallen knight lay in state upon a velvet-draped catafalque in the castle chapel.",
    "Funeral accounts of the Earl of Warwick"
  ],
  [
    "Counterpane",
    "/ˈkaʊntərˌpeɪn/",
    "m",
    "A quilted bedspread or coverlet, often richly embroidered for noble chambers.",
    "Middle English, alteration of Old French contrepoint.",
    "The lord rested his wounded limb upon a heavy counterpane of ermine and silk.",
    "Medieval Household Inventories"
  ],
  [
    "Cater-cousin",
    "/ˈkeɪtərˌkʌzɪn/",
    "e",
    "A close friend, intimate associate, or distant relative with whom one is on very good terms.",
    "Etymology uncertain, possibly from cater (four) or cater (to provide food/caterer).",
    "They are not cater-cousins, but rather bitter rivals for the earldom.",
    "John Heywood, Proverbs"
  ],
  [
    "Collogue",
    "/kəˈloʊɡ/",
    "e",
    "To converse secretly, confer, or plot together, often with a sense of flattery or deception.",
    "Late 16th century, possibly from Latin colloquium (conversation).",
    "The traitor was seen to collogue with the enemy emissary in the shadows of the keep.",
    "Christopher Marlowe, Edward II"
  ],
  [
    "Cote-hardie",
    "/koʊtˈhɑːrdi/",
    "m",
    "A close-fitting medieval outer garment with long sleeves, worn by both men and women of rank.",
    "Middle English, from Old French cote hardie (bold coat).",
    "He wore a splendid cote-hardie of party-colored green and gold.",
    "The Romaunt of the Rose"
  ],
  [
    "Cri de guerre",
    "/ˌkriː də ˈɡɛər/",
    "m",
    "A battle cry shouted by knights and men-at-arms during a charge or melee.",
    "Old French, literally 'cry of war'.",
    "With the traditional cri de guerre of their house, the knights spurred their chargers forward.",
    "Jean Froissart, Chronicles"
  ],
  [
    "Coterel",
    "/ˈkɒtərɛl/",
    "m",
    "A peasant holding a small cottage and land, or a term for a mercenary soldier.",
    "Middle English, diminutive of Old English cot (cottage).",
    "The local coterels were required to provide labor services three days a week.",
    "Manorial Court Rolls"
  ],
  [
    "Curtana",
    "/kɜːrˈtɑːnə/",
    "m",
    "The Sword of Mercy, a blunted ceremonial sword borne before English monarchs during coronation.",
    "Middle English, from Old French curtane, from Latin curtus (short).",
    "The peer carried the blessed Curtana with great reverence in the procession.",
    "Coronation Rolls of Richard II"
  ],
  [
    "Cheval",
    "/ʃəˈvæl/",
    "m",
    "A horse, specifically a warhorse or charger used in chivalric warfare.",
    "Middle English, from Old French cheval, from Latin caballus.",
    "He proved his worth upon his trusty cheval against the Saracen host.",
    "Chanson de Roland (English translation)"
  ],
  [
    "Chivaler",
    "/ʃɪvəˈleɪ/",
    "m",
    "To engage in knightly combat, ride to war, or perform feats of arms.",
    "Middle English, from Old French chevalier.",
    "The young squire yearned to chivaler in the French wars under the Black Prince.",
    "Gower, Confessio Amantis"
  ],
  [
    "Cowl",
    "/kaʊl/",
    "m",
    "A hooded cloak worn by medieval monks or friars.",
    "Old English cugele, from Late Latin cucullus.",
    "The humble monk drew his woolen cowl over his face as he crossed the bailey.",
    "Chaucer, The Summoner's Tale"
  ],
  [
    "Cramp-ring",
    "/ˈkræmpˌrɪŋ/",
    "m",
    "A ring blessed by English monarchs on Good Friday, believed to cure cramps and epilepsy.",
    "Middle English, compound of cramp and ring.",
    "The afflicted pilgrim sought a royal cramp-ring from the hands of the king.",
    "Household Ordinance of Henry VII"
  ],
  [
    "Clarion",
    "/ˈklæriən/",
    "m",
    "A shrill-sounding medieval trumpet used for signals in battle or ceremonies.",
    "Middle English, from Old French clarion, from Latin clarus (clear).",
    "The blast of the clarion summoned the knights to the assembly tent.",
    "John Lydgate, Siege of Thebes"
  ],
  [
    "Chafe",
    "/tʃeɪf/",
    "m",
    "To make sore by rubbing, or to become angry, fret, or fume under restraint.",
    "Middle English, from Old French chaufer (to heat/warm), from Latin calefacere.",
    "The fiery stallion began to chafe at the bit while waiting for the tournament to start.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Coutel",
    "/ˈkuːtɛl/",
    "m",
    "A short dagger, knife, or cutlass used as a backup weapon by medieval soldiers.",
    "Middle English, from Old French coutel, from Latin cultellus.",
    "He drew his trusty coutel when the enemy closed in for hand-to-hand combat.",
    "Accounts of the Wardrobe"
  ],
  [
    "Confraternity",
    "/kənˌfrætərˈnɪti/",
    "m",
    "A medieval religious brotherhood or guild formed for pious works and mutual aid.",
    "Middle English, from Medieval Latin confraternitas.",
    "He joined the merchant confraternity to secure protection and spiritual solace.",
    "Guild Ordinances of London"
  ],
  [
    "Catafalque-bearer",
    "/ˈkætəfɔːlkˌbɛərər/",
    "m",
    "A nobleman or knight appointed to carry or escort the funeral platform of a high-ranking person.",
    "Middle English, compound of catafalque and bearer.",
    "Four senior barons served as catafalque-bearers for the deceased duke.",
    "Ceremonial Books of the Royal Household"
  ],
  [
    "Chivauchee",
    "/ʃɪvɒʊˈʃeɪ/",
    "m",
    "A medieval military raid or cavalry expedition intended to pillage and devastate enemy territory.",
    "Old French chevauchée, from cheval (horse).",
    "The prince led a swift chivauchee through the fertile lands of Normandy.",
    "Froissart, Chronicles"
  ],
  [
    "Chevisaunce",
    "/ˈtʃɛvɪzəns/",
    "m",
    "A remedy, expedient, or legal agreement; an alternative spelling of chevisance.",
    "Middle English, variant of chevisance.",
    "The monks sought a legal chevisaunce to protect their tithes from the crown.",
    "Monastic Cartularies"
  ],
  [
    "Coudou",
    "/ˈkuːduː/",
    "m",
    "A medieval defensive shield or buckler, or an elbow armor plate.",
    "Middle English, variant of coute.",
    "The soldier braced his coudou against the thrust of the pike.",
    "Armory Rolls"
  ],
  [
    "Crossbow",
    "/ˈkrɒsboʊ/",
    "m",
    "A powerful medieval missile weapon consisting of a bow mounted transversely on a wooden stock.",
    "Middle English, compound of cross and bow.",
    "Genoese crossbowmen lined the ridge, their deadly bolts ready to loose.",
    "Chronicles of the Crusade"
  ],
  [
    "Curtal-axe",
    "/ˈkɜːtəlˌæks/",
    "e",
    "A short-handled battle-ax or cutlass used in medieval and Elizabethan combat.",
    "Middle English, alteration of cutlass or curtal axe.",
    "He laid about him fiercely with a heavy curtal-axe.",
    "Spenser, The Faerie Queene"
  ],
  [
    "Cope",
    "/koʊp/",
    "m",
    "A long ecclesiastical vestment resembling a cape, worn by clergy in processions.",
    "Middle English, from Late Latin cappa.",
    "The abbot wore a gold-embroidered cope during the high mass.",
    "Ecclesiastical Inventories"
  ],
  [
    "Cotland",
    "/ˈkɒtlænd/",
    "m",
    "Land held by a cottar or peasant tenant in a feudal manor.",
    "Old English cotslǣd, from cot and land.",
    "The tenant worked his small cotland in exchange for feudal obligations.",
    "Domesday Book"
  ],
  [
    "Counterscarp",
    "/ˈkaʊntərˌskɑːrp/",
    "m",
    "The outer wall or slope of a defensive ditch surrounding a medieval castle or fortification.",
    "Late 16th century, from French contrescarpe.",
    "The attackers attempted to scale the counterscarp under a hail of arrows.",
    "Military Treatises of the Renaissance"
  ],
  [
    "Coronal",
    "/kəˈroʊnəl/",
    "m",
    "A crown or circlet worn as a mark of nobility, or the blunt multi-pronged tip of a tournament lance.",
    "Middle English, from Old French coronal, from Latin corona.",
    "The heralds affixed a safe coronal to the tip of every jousting lance.",
    "Tournament Ordinances of Edward III"
  ],
  [
    "Chainmail",
    "/ˈtʃeɪnˌmeɪl/",
    "m",
    "Armor consisting of small interlocking metal rings linked together to form a flexible protective mesh.",
    "Middle English, from chain and mail (from Old French macle, network).",
    "The knight's heavy chainmail deflected the glancing blow of the broadsword.",
    "Gesta Stephani"
  ],
  [
    "Confrère",
    "/ˈkɒnfrɛər/",
    "m",
    "A fellow member of a guild, monastic order, or chivalric brotherhood; a colleague.",
    "Middle English, from Old French confrère, from Medieval Latin confrater.",
    "He greeted his monastic confrère with a traditional blessing.",
    "Chronicles of the Order of St. John"
  ],
  [
    "Demilance",
    "/ˈdɛmiˌlæns/",
    "e",
    "A light cavalry lance, or a horseman armed with such a weapon, common in the 16th century.",
    "French demilance, from demi (half) + lance.",
    "The company of demilances charged across the muddy field to flank the pikemen.",
    "Shakespearean military muster rolls"
  ],
  [
    "Dapifer",
    "/ˈdæpɪfər/",
    "m",
    "A high-ranking household officer, steward, or seneschal responsible for serving meat at a royal or noble table.",
    "Latin dapifer, from daps (feast, sacrificial banquet) + ferre (to bring).",
    "The dapifer carried the boar's head into the Great Hall on a silver platter.",
    "Domesday Book records"
  ],
  [
    "Douzere",
    "/ˈduːzər/",
    "m",
    "A member of the legendary twelve peers or paladins of Charlemagne.",
    "Middle English, from Old French douzere, from douze (twelve).",
    "The brave douzere fought valiantly at the Battle of Roncevaux Pass.",
    "The Song of Roland (Middle English translation)"
  ],
  [
    "Doutance",
    "/ˈdaʊtəns/",
    "m",
    "Fear, doubt, or apprehension, particularly concerning the outcome of a trial by combat or war.",
    "Middle English, from Old French doutance, from douter (to doubt).",
    "There was no doutance in his heart as he lowered his visor for the joust.",
    "Chaucer, The Canterbury Tales"
  ],
  [
    "Disarray",
    "/dɪsəˈreɪ/",
    "m",
    "The state of being stripped of armor or clothing, or general military disorder and confusion.",
    "Middle English, from Old French desareier, from des- (dis-) + areier (to array).",
    "The enemy lines fell into complete disarray after the unexpected flank attack.",
    "Froissart's Chronicles"
  ],
  [
    "Dight",
    "/daɪt/",
    "m",
    "Prepared, arrayed, dressed, or equipped, particularly regarding armor and battle gear.",
    "Old English dihtan (to direct, set in order), from Latin dictare.",
    "The knights stood fully dight in gleaming plate armor.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Disherit",
    "/dɪsˈhɛrɪt/",
    "m",
    "To disinherit; to deprive someone of their rightful feudal inheritance or fief.",
    "Middle English, from Old French desheriter, from Latin dis- + heres (heir).",
    "He swore an oath to reclaim the lands from which his family was disherited.",
    "Feudal legal rolls"
  ],
  [
    "Dole",
    "/doʊl/",
    "m",
    "A distribution of food, money, or alms to the poor or to retainers by a feudal lord.",
    "Middle English dol, from Old English dāl (portion, share).",
    "The baron distributed a daily dole of bread and ale at the castle gate.",
    "Monastic charity rolls"
  ],
  [
    "Draberc",
    "/ˈdræbərk/",
    "m",
    "An obsolete term for a coat of mail or a leather jerkin reinforced with metal rings.",
    "Middle English, regional variant related to habergeon.",
    "He pulled on his draberc before fastening his iron helm.",
    "Northern English household inventories"
  ],
  [
    "Droiture",
    "/ˈdrwɑːtjʊər/",
    "m",
    "Rightfulness, equity, or the legal right to hold a manor or title.",
    "Middle English, from Old French droiture, from droit (right, straight).",
    "The court examined the charter to determine the true droiture of the estate.",
    "Year Books of Edward I"
  ],
  [
    "Dun",
    "/dʌn/",
    "m",
    "A fortified hill fort, prehistoric stronghold, or minor castle in Celtic-influenced regions.",
    "Old English dūn (down, hill), of Celtic origin.",
    "The raiding party sought shelter behind the earthen ramparts of the old dun.",
    "Irish annals"
  ],
  [
    "Dossel",
    "/ˈdɒsəl/",
    "m",
    "A rich ornamental hanging or tapestry placed behind the dais or throne in a medieval great hall.",
    "Middle English, from Old French dossel, from dos (back).",
    "The king sat beneath a scarlet dossel embroidered with golden lions.",
    "Royal wardrobe accounts"
  ],
  [
    "Dormant",
    "/ˈdɔːrmənt/",
    "m",
    "In heraldry, a beast depicted as sleeping with its head resting upon its paws.",
    "Middle English, from Old French dormant (sleeping), present participle of dormir.",
    "Upon the shield rested a lion dormant, signifying vigilance in repose.",
    "Medieval armorial treatises"
  ],
  [
    "Dandiprat",
    "/ˈdændɪpræt/",
    "e",
    "A small coin of the Tudor era, or colloquially, an insignificant or diminutive person.",
    "Origin uncertain; perhaps related to Dutch danten or a proper name.",
    "He tossed a brass dandiprat to the stable boy for holding his mare.",
    "Tudor playwrights"
  ],
  [
    "Derrene",
    "/dɪˈriːn/",
    "m",
    "To prove, contest, or fight out a dispute, specifically through judicial combat or trial by arms.",
    "Middle English derenen, from Old French desrener, from Late Latin derationare.",
    "They met in the lists to derrene the accusation of treason.",
    "Chaucer, Knight's Tale"
  ],
  [
    "Ductor",
    "/ˈdʌktər/",
    "m",
    "A leader, commander, or military guide who leads an army through hostile territory.",
    "Middle English, from Latin ductor (leader).",
    "The local peasant served as their ductor through the treacherous mountain pass.",
    "Medieval Latin chronicles"
  ],
  [
    "Disparagement",
    "/dɪˈspærɪdʒmənt/",
    "m",
    "The marriage of a feudal ward to someone of lower social rank, violating feudal law.",
    "Anglo-Norman disparagement, from Old French desparagier.",
    "The guardian was fined heavily for the disparagement of the young heiress.",
    "Magna Carta commentary"
  ],
  [
    "Drave",
    "/dreɪv/",
    "m",
    "An old past tense of drive, or a crowd/drove of cattle or men driven forward.",
    "Old English drāf, past tense drāf.",
    "A drave of cattle was plundered from the neighboring fief by the raiding knights.",
    "Border ballad collections"
  ],
  [
    "Dryden",
    "/ˈdraɪdən/",
    "m",
    "A dry valley; an ancient geographic term used in estate charters for boundaries.",
    "Old English drīge (dry) + denu (valley).",
    "The charter boundary ran northward from the stone cross down into the dryden.",
    "Anglo-Saxon charter bounds"
  ],
  [
    "Dismay",
    "/dɪsˈmeɪ/",
    "m",
    "To defeat, subdue, or break the courage and spirit of an army in battle.",
    "Middle English, from Old French desmaier, perhaps from Germanic origin.",
    "The vanguard was utterly dismayed by the charge of the heavy cavalry.",
    "Gesta Stephani"
  ],
  [
    "Dismount",
    "/dɪsˈmaʊnt/",
    "m",
    "To force a knight from his horse, or to descend from horseback to fight on foot.",
    "Middle English, from Old French dismonter.",
    "The knight was dismount by a fierce blow from the mace.",
    "Malory's Arthurian romances"
  ],
  [
    "Defend",
    "/dɪˈfɛnd/",
    "m",
    "To prohibit, forbid, or guard legally (often used in legal contexts regarding land rights).",
    "Middle English defendren, from Old French defendre.",
    "The lord did defend all men from hunting within his private forest.",
    "Forest law statutes"
  ],
  [
    "Dispark",
    "/dɪsˈpɑːrk/",
    "e",
    "To throw open or destroy a private deer park, removing its fences or legal status.",
    "English, dis- + park.",
    "The rebellious peasants threatened to dispark the lord's enclosed hunting grounds.",
    "Tudor agrarian legal cases"
  ],
  [
    "Demigorge",
    "/ˈdɛmiˌɡɔːrdʒ/",
    "m",
    "A small piece of plate armor protecting the throat, or the raised collar of a doublet.",
    "Middle English, from French demi + gorge (throat).",
    "He buckled his demigorge tightly beneath his iron helm.",
    "Armorers' guild records"
  ],
  [
    "Deracinate",
    "/diːˈræsɪneɪt/",
    "e",
    "To uproot, tear up by the roots, or utterly destroy a noble dynasty or lineage.",
    "Middle French deraciner, from Latin de- + radix (root).",
    "The civil war threatened to deracinate the ancient house of Lancaster.",
    "Shakespeare, Henry V"
  ],
  [
    "Dossier",
    "/ˈdɒsiər/",
    "m",
    "A bundle of back-documents or parchments tied together with a label hanging down (obsolete usage).",
    "French, from dos (back).",
    "The clerk pulled the dusty dossier from the iron-bound chest.",
    "Ecclesiastical court rolls"
  ],
  [
    "Disfrock",
    "/dɪsˈfr��k/",
    "m",
    "To strip a monk, priest, or chaplain of his clerical habit as punishment for a crime.",
    "Medieval Latin disfroccare, from French.",
    "The renegade cleric was disfrocked before being handed over to the secular court.",
    "Bishop's register of offenses"
  ],
  [
    "Defait",
    "/dɪˈfeɪt/",
    "m",
    "Overcome, defeated, or ruined in battle or fortune.",
    "Middle English, from Old French defait, past participle of defaire.",
    "The rebel army lay defait upon the blood-soaked meadow.",
    "Wars of the Roses chronicles"
  ],
  [
    "Dial",
    "/ˈdaɪəl/",
    "m",
    "A portable sundial used by travelers and knights to tell time in the field.",
    "Middle English, from Medieval Latin dialis (daily), from dies (day).",
    "He consulted his pocket dial to see if midday mass had passed.",
    "Medieval travel diaries"
  ],
  [
    "Dueller",
    "/ˈduːələr/",
    "e",
    "One who engages in a formal, prearranged single combat with sword or rapier.",
    "English, duel + -er.",
    "The arrogant courtier proved to be a master dueller with the Italian rapier.",
    "Elizabethan fencing manuals"
  ],
  [
    "Defaitism",
    "/dɪˈfeɪtɪzəm/",
    "m",
    "An early term for the acceptance of defeat in a siege or war.",
    "Derived from Old French defaire.",
    "The castellan punished all talk of defaitism among the starving garrison.",
    "Siege journals"
  ],
  [
    "Dicker",
    "/ˈdɪkər/",
    "m",
    "A commercial grouping or batch of ten hides, commonly used in medieval trade and taxation.",
    "Middle English diker, from Latin decuria (group of ten).",
    "The merchant paid the castle toll in salt fish and a dicker of tanned ox-hides.",
    "Exchequer tax records"
  ],
  [
    "Douzerein",
    "/ˈduːzərɪn/",
    "m",
    "A governor or councilor of one of the twelve provinces of a realm.",
    "Old French, derivative of douzere.",
    "The king summoned his douzereins to the council chamber to discuss the crusade.",
    "Chivalric romances"
  ],
  [
    "Demitint",
    "/ˈdɛmɪtɪnt/",
    "e",
    "A half-tint or shadow in Renaissance heraldic painting and manuscript illumination.",
    "Italian tintamento, influenced by French demi.",
    "The herald used a delicate demitint to shade the golden griffin on the scroll.",
    "Guild of painters and stainers records"
  ],
  [
    "Disceptation",
    "/ˌdɪsɛpˈteɪʃən/",
    "e",
    "A formal debate, dispute, or argument, particularly over points of heraldry or chivalric law.",
    "Latin disceptatio, from disceptare (to debate).",
    "The heralds engaged in a fierce disceptation over the quartering of the shield.",
    "College of Arms manuscripts"
  ],
  [
    "Dapiferate",
    "/dəˈpɪfəreɪt/",
    "m",
    "The office, dignity, or jurisdiction of a dapifer or royal seneschal.",
    "Medieval Latin dapiferatus.",
    "He was confirmed in his dapiferate by royal charter under the great seal.",
    "Pipe Rolls of Henry II"
  ],
  [
    "Demy-culverin",
    "/ˌdɛmi ˈkʌlvərɪn/",
    "e",
    "A medium-sized sixteenth-century cannon used in siege warfare and castle defense.",
    "French demi + culverin (from colubrinus, snake-like).",
    "The gunners loaded the demy-culverin with iron shot to breach the curtain wall.",
    "Tudor artillery treatises"
  ],
  [
    "Disport",
    "/dɪsˈpɔːrt/",
    "m",
    "Recreation, amusement, or knightly entertainment such as hawking or tournaments.",
    "Middle English, from Old French desporter (to carry away, amuse).",
    "The nobles gathered in the meadow for the afternoon's disport of falconry.",
    "Gawain poet"
  ],
  [
    "Domina",
    "/ˈdɒmɪnə/",
    "m",
    "A lady, mistress of a household, or female feudal lord in Latin administrative records.",
    "Latin domina (mistress, lady).",
    "Domina Margaret held the manor in her own right during her husband's absence.",
    "Monastic cartularies"
  ],
  [
    "Donary",
    "/ˈdoʊnəri/",
    "e",
    "A place where gifts, votive offerings, or tithes are presented to a church or shrine.",
    "Latin donarium, from donum (gift).",
    "The knights laid their captured banners upon the altar in the abbey's donary.",
    "Elizabethan ecclesiastical records"
  ],
  [
    "Duress",
    "/djʊˈrɛs/",
    "m",
    "Constraint, imprisonment, or illegal violence used to force a lord or vassal to sign a charter.",
    "Middle English, from Old French duresse, from Latin duritia (hardness).",
    "He claimed the land grant was signed under duress while held in the castle dungeon.",
    "Medieval plea rolls"
  ],
  [
    "Dyvour",
    "/ˈdaɪvʊər/",
    "m",
    "A bankrupt, debtor, or fraudulent trader who could not pay feudal dues or fines.",
    "Middle Scots dyvour, from Old French devoir (to owe).",
    "The disgraced merchant was proclaimed a dyvour at the town cross.",
    "Scottish burgh court records"
  ],
  [
    "Ealdorman",
    "/ˈældɔːrmən/",
    "m",
    "A senior noble of high rank, comparable to an earl, who governed a shire or province in Anglo-Saxon England.",
    "Old English 'ealdorman', from 'ealdor' (elder, chief) + 'man'.",
    "The ealdorman summoned the fyrd to protect the shire from Viking raiders.",
    "Anglo-Saxon Chronicle"
  ],
  [
    "Eyre",
    "/ɛər/",
    "m",
    "A circuit court held by traveling justices who dispensed royal justice across the counties of medieval England.",
    "Middle English 'eire', from Old French 'eire' (journey, way), from Latin 'iter'.",
    "The king's justices arrived on their eyre to hear pleas of the crown and settle local disputes.",
    "Assize of Clarendon"
  ],
  [
    "Enfeoffment",
    "/ɪnˈfɛfmənt/",
    "m",
    "The act of granting land in exchange for pledged feudal service and allegiance.",
    "Middle English, from Anglo-Norman French 'enfeoffer'.",
    "The lord completed the enfeoffment of the new knight with the presentation of a turf of earth.",
    "Domesday Book records"
  ],
  [
    "Ermine",
    "/ˈɜːrmɪn/",
    "m",
    "The white winter fur of the stoat, used as a prestigious trimming for the robes of nobility and royalty.",
    "Middle English, from Old French 'ermin', ultimately from Armenian.",
    "His peer's robes were richly lined with ermine to signify his high station at court.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Echevins",
    "/ɪˈtʃɛvɪnz/",
    "m",
    "Magistrates or municipal judges in medieval towns, particularly within feudal communes.",
    "Middle English, from Old French 'eschevin', from Germanic roots.",
    "The town echevins met at the guildhall to assess the new merchant tariffs.",
    "Medieval Borough Records"
  ],
  [
    "Emprise",
    "/ɛmˈpraɪz/",
    "m",
    "An enterprise of chivalric adventure, daring, or martial hazard undertaken for honor.",
    "Middle English, from Old French 'emprise', past participle of 'emprendre'.",
    "He vowed to undertake any perilous emprise to win the favor of his lady.",
    "Edmund Spenser, The Faerie Queene"
  ],
  [
    "Excommunication",
    "/ɛkskəmjuːnɪˈkeɪʃən/",
    "m",
    "An ecclesiastical censure depriving a person of the sacraments and fellowship of the Church, powerful in feudal politics.",
    "Middle English, from Late Latin 'excommunicare'.",
    "The rebellious baron fell under papal excommunication, releasing his vassals from their oaths.",
    "Ecclesiastical Court Rolls"
  ],
  [
    "Eyrie",
    "/ˈɛəri/",
    "m",
    "The nest of a bird of prey, such as an eagle or falcon, often used metaphorically for a castle perched high on a crag.",
    "Middle English, from Old French 'airie'.",
    "The fortress stood upon the cliff like an eagle's eyrie overlooking the valley.",
    "Wace, Roman de Brut"
  ],
  [
    "Estover",
    "/ɪˈstoʊvər/",
    "m",
    "A tenant's legal right to take necessary wood, timber, or other materials from a lord's estate for house repair or fuel.",
    "Anglo-Norman 'estover', from Old French 'estoveir' (to be necessary).",
    "The villagers claimed their ancient estovers of dead wood within the royal forest.",
    "Charter of the Forest"
  ],
  [
    "Embrazure",
    "/ɪmˈbreɪʒər/",
    "m",
    "An opening in a parapet or wall through which archers or defenders could shoot.",
    "Middle French 'embrasure', from 'ebrazurer' (to slope).",
    "The archer notched his broadhead arrow and took aim through the stone embrasure.",
    "Military Architecture of the Middle Ages"
  ],
  [
    "Escheator",
    "/ɪˈʃiːtər/",
    "m",
    "A royal officer appointed to oversee lands and property that reverted to the crown by escheat.",
    "Middle English, from Anglo-Norman 'eschetur'.",
    "The king's escheator arrived to inventory the goods of the deceased baron.",
    "Exchequer Rolls"
  ],
  [
    "Enfief",
    "/ɛnˈfiːf/",
    "m",
    "To invest someone with a fief or landed estate under feudal tenure.",
    "Middle English, from Old French 'enfiefler'.",
    "The sovereign chose to enfief his loyal captain with the conquered lands.",
    "Feudal Law Treatises"
  ],
  [
    "Entrenchment",
    "/ɪnˈtrɛntʃmənt/",
    "m",
    "A defensive trench or earthwork constructed around a siege camp or fortification.",
    "Middle English, from Old French 'entrenchier'.",
    "The besieging army dug deep entrenchments to protect against cavalry sorties.",
    "Chronicles of the Hundred Years' War"
  ],
  [
    "Ealdor",
    "/ˈældɔːr/",
    "m",
    "An elder, chief, or leader in Anglo-Saxon society.",
    "Old English 'ealdor'.",
    "The ealdor of the clan spoke with wisdom at the witenagemot.",
    "Beowulf"
  ],
  [
    "Expeditate",
    "/ɛkˈspɛdɪteɪt/",
    "m",
    "To mutilate the claws or forefeet of a dog to prevent it from chasing deer in a royal forest.",
    "Latin 'expeditatus', from 'ex-' + 'pes' (foot).",
    "All mastiffs kept near the royal woods were required by law to be expeditated.",
    "Forest Laws of Canute"
  ],
  [
    "Ermines",
    "/ˈɜːrmɪnz/",
    "m",
    "In heraldry, a fur pattern represented by black tails on a white field.",
    "Middle English, from Old French.",
    "His coat of arms bore a field of ermines charged with a gules cross.",
    "Heraldic Rolls of Arms"
  ],
  [
    "Eyot",
    "/eɪt/",
    "m",
    "A small island, especially one in a river, often fortified or used as a mill site in medieval estates.",
    "Old English 'īget' (little island).",
    "A small fortified mill stood upon the eyot in the center of the river.",
    "Domesday Survey"
  ],
  [
    "Ensign",
    "/ˈɛnsaɪn/",
    "m",
    "A banner, flag, or standard carried into battle by medieval infantry or knights.",
    "Middle English, from Old French 'enseigne', from Latin 'insignia'.",
    "The royal ensign fluttered bravely above the thickest of the melee.",
    "Jean Froissart, Chronicles"
  ],
  [
    "Eschevinage",
    "/ɪˈʃɛvɪnɪdʒ/",
    "m",
    "The office, jurisdiction, or district of an echevin or municipal magistrate.",
    "Middle French 'echevinage'.",
    "The merchant guild petitioned the local echevinage for trade exemptions.",
    "Municipal Charters of Aquitaine"
  ],
  [
    "Erminites",
    "/ˈɜːrmɪnaɪts/",
    "m",
    "An old heraldic term relating to variations of ermine furs used in shields.",
    "Middle French heraldic terminology.",
    "The shield was quartered with erminites and azure bars.",
    "Treatise on Blazonry"
  ],
  [
    "Eald-father",
    "/ˈældˌfɑːðər/",
    "m",
    "An ancestor or forefather in Anglo-Saxon genealogy.",
    "Old English 'eald-fæder'.",
    "He swore an oath upon the tombs of his eald-fathers.",
    "Old English Homilies"
  ],
  [
    "Escalade",
    "/ˌɛskəˈleɪd/",
    "m",
    "An assault on a fortification using scaling ladders to climb the walls.",
    "French 'escalade', from Provençal 'escalada', from Latin 'scala' (ladder).",
    "The garrison repelled the nocturnal escalade by pushing the ladders from the battlements.",
    "Military Chronicles of the Crusades"
  ],
  [
    "Erminette",
    "/ˌɜːrmɪˈnɛt/",
    "m",
    "A heraldic fur resembling ermine but with inverted tinctures.",
    "French heraldic term.",
    "The blazon specified a field of erminette with a chief of gold.",
    "The Book of St Albans"
  ],
  [
    "Extents",
    "/ɪkˈstɛnts/",
    "m",
    "Detailed medieval surveys and valuations of landed estates and manorial assets.",
    "Middle English, from Anglo-Latin 'extenta'.",
    "The bailiff presented the manorial extents to the visiting lord.",
    "Manorial Court Rolls"
  ],
  [
    "Exile",
    "/ˈɛksaɪl/",
    "m",
    "The state of being banished from one's native land, a severe feudal punishment.",
    "Middle English, from Old French 'exil', from Latin 'exilium'.",
    "The treacherous knight was sentenced to perpetual exile beyond the narrow seas.",
    "Gower, Confessio Amantis"
  ],
  [
    "Ealdormanship",
    "/ˈældɔːrmənʃɪp/",
    "m",
    "The office, rank, or dignity of an ealdorman.",
    "Old English 'ealdormanscip'.",
    "He was elevated to the ealdormanship of the Northumbrian province.",
    "Wessex Chronicles"
  ],
  [
    "Enseam",
    "/ɪnˈsiːm/",
    "m",
    "To purge a hawk of grease or fat by special feeding; also used metaphorically.",
    "Middle English 'enseamen', from Old French 'enseimer'.",
    "The falconer worked to enseam the tiercel before the autumn hunting season.",
    "The Boke of Hawking, Hunting, and Blishing"
  ],
  [
    "Estrapade",
    "/ˌɛstrəˈpɑːd/",
    "m",
    "A punishment where a culprit was hoisted up and dropped suddenly by a rope.",
    "French 'estrapade', from Old Provençal.",
    "The captured spy was threatened with the estrapade if he did not confess.",
    "Medieval Penal Ordinances"
  ],
  [
    "Eald",
    "/æld/",
    "m",
    "Old, aged, or ancient; used in early medieval poetry.",
    "Old English 'eald'.",
    "They forged their weapons in the eald days of heroes.",
    "Beowulf"
  ],
  [
    "Escarmouche",
    "/ˈskɑːrmʊtʃ/",
    "m",
    "A minor engagement or skirmish between opposing feudal forces.",
    "Middle English, from Old French 'escarmouche'.",
    "A brief escarmouche broke out at the ford before the main battle commenced.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Eschevin",
    "/ˈɛʃəvɪn/",
    "m",
    "A local alderman or civic magistrate in medieval towns.",
    "Middle English 'eschevin'.",
    "The eschevin granted permission for the new market stalls.",
    "Town Guild Records"
  ],
  [
    "Entreaty",
    "/ɪnˈtriːti/",
    "m",
    "An earnest request or petition made to a lord or sovereign.",
    "Middle English 'entreten', from Old French 'entretier'.",
    "The weeping mother yielded to no entreaty to spare the castle thief.",
    "Chaucer, The Canterbury Tales"
  ],
  [
    "Erminois",
    "/ˌɜːrmɪˈnwɑː/",
    "m",
    "A heraldic fur featuring gold spots on a black field.",
    "French heraldic term.",
    "His coat displayed an escutcheon of erminois.",
    "Historic Heraldry Manuals"
  ],
  [
    "Eyne",
    "/aɪn/",
    "e",
    "An archaic plural form of the word 'eye'.",
    "Middle English 'eyen', Old English 'ēagan'.",
    "Wept from her heavenly eyne.",
    "Shakespeare, A Midsummer Night's Dream"
  ],
  [
    "Eterne",
    "/ɪˈtɜːrn/",
    "e",
    "Eternal, everlasting.",
    "Latin 'aeternus' via Old French.",
    "But in them nature's copy's not eterne.",
    "Shakespeare, Macbeth"
  ],
  [
    "Enwheel",
    "/ɪnˈhwiːl/",
    "e",
    "To encircle, encompass, or surround.",
    "English coinage from 'en-' + 'wheel'.",
    "The graces that enwheel and encircle thee.",
    "Shakespeare, Othello"
  ],
  [
    "Excise",
    "/ɛkˈsaɪz/",
    "e",
    "A tax levied on goods within the country, originating in feudal and early modern exchequers.",
    "Middle Dutch 'excijs' or Latin 'excisum'.",
    "The merchant paid the royal excise upon entering the walled city gates.",
    "Tudor State Papers"
  ],
  [
    "Enkindle",
    "/ɪnˈkɪndəl/",
    "e",
    "To rouse, spark, or stir up courage or passion.",
    "Middle English 'enkindlen'.",
    "This news shall enkindle your noble hearts for the upcoming campaign.",
    "Shakespeare, Henry IV"
  ],
  [
    "Empassion",
    "/ɪmˈpæʃən/",
    "e",
    "To move deeply with passion, emotion, or chivalric fervor.",
    "Middle English 'empassione'.",
    "His speech did empassion the knights to rush into the fray.",
    "Christopher Marlowe, Tamburlaine"
  ],
  [
    "Fardel",
    "/ˈfɑːrdəl/",
    "e",
    "A bundle, burden, or pack; a small parcel.",
    "Middle English 'fardel', from Old French 'fardeil', ultimately from Arabic 'fardah'.",
    "Who would fardels bear, to grunt and sweat under a weary life?",
    "William Shakespeare, Hamlet"
  ],
  [
    "Faytor",
    "/ˈfeɪtər/",
    "m",
    "A doer of evil deeds, a scoundrel, or a fraudulent beggar who feigns illness.",
    "Middle English 'faitour', from Old French 'faitor', Latin 'factor' (doer/maker).",
    "Many straying faitors walk the realm under the guise of holy pilgrims.",
    "Piers Plowman"
  ],
  [
    "Foin",
    "/fɔɪn/",
    "e",
    "A thrust or stab made with a pointed weapon, such as a rapier or sword.",
    "Middle English 'foynen', from Old French 'foi̇̈ndre', perhaps from Vulgar Latin.",
    "Have I lived to stand in the taunt of one misconstructor? ... At a venew too? or at a foin?",
    "William Shakespeare, The Merry Wives of Windsor"
  ],
  [
    "Frith",
    "/frɪθ/",
    "m",
    "An enclosed wood, forest, or a protected tract of woodland; also peace.",
    "Old English 'frið' (peace, security, sanctuary).",
    "The outlaw took refuge deep within the king's green frith.",
    "Middle English Chronicles"
  ],
  [
    "Fleshmonger",
    "/ˈflɛʃˌmʌŋɡər/",
    "e",
    "A dealer in flesh; specifically a pander, procurer, or slave trader.",
    "Middle English 'fleshmonger', from Old English 'flǣsc' and 'mangere'.",
    "Thou art a fleshmonge, a custom-breaker, and a slave to thy lower desires.",
    "Thomas Dekker, The Honest Whore"
  ],
  [
    "Fylfot",
    "/ˈfɪlˌfɒt/",
    "m",
    "An ancient architectural and decorative symbol, essentially the swastika, used in medieval heraldry and church decoration.",
    "Middle English 'fylfot', literally 'four-footed' (filling the foot of a stained-glass window pattern).",
    "The vestments were richly embroidered with gold fylfots and crosses.",
    "15th-century ecclesiastical inventory records"
  ],
  [
    "Fother",
    "/ˈfɒðər/",
    "m",
    "A traditional unit of weight for lead or other heavy goods, typically about one metric ton or 2,240 pounds.",
    "Old English 'fōðor' (a load or cartload).",
    "The shipment comprised twelve fothers of lead for the roofing of the keep.",
    "Exchequer Pipe Rolls"
  ],
  [
    "Frieze",
    "/friːz/",
    "m",
    "A heavy, coarse woolen cloth with a rough nap, commonly used for medieval cloaks and peasant garments.",
    "Middle English 'frise', from Old French 'frise' (from Friesland).",
    "The serf wrapped his shivering frame in a dark frieze mantle against the driving sleet.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Fub",
    "/fʌb/",
    "e",
    "To put off, deceive, or fob off; alternatively, a plump, chubby person.",
    "Obscure origin, likely related to Middle Dutch 'fubben' or dialectal English.",
    "Come, you are a tedious fool: to the purpose. What was done to Fub the merchant?",
    "Ben Jonson, Bartholomew Fair"
  ],
  [
    "Fore-rider",
    "/ˈfɔːrˌraɪdər/",
    "m",
    "An outrider, scout, or herald who rides ahead of a noble party to clear the way or announce their approach.",
    "Middle English 'forridere', from Old English 'fore' and 'rīdend'.",
    "The lord dispatched two fore-riders to ascertain if the bridge at the river-crossing remained intact.",
    "Froissart's Chronicles"
  ],
  [
    "Fay",
    "/feɪ/",
    "m",
    "Faith, truth, or allegiance (often used in oaths, as 'by my fay').",
    "Middle English 'fay', from Old French 'fei' (faith), Latin 'fides'.",
    "By my fay, gentle knight, thou hast ridden far through perilous domains today.",
    "Le Morte d'Arthur"
  ],
  [
    "Fitch",
    "/fɪtʃ/",
    "m",
    "The fur of the polecat or ferret, highly prized in medieval times for trimming noble robes.",
    "Middle English 'fitch', from Middle Dutch 'fissche' or Old French 'fische'.",
    "His winter robe of scarlet cloth was bordered with rich fitch.",
    "Medieval Sumptuary Laws"
  ],
  [
    "Fautor",
    "/ˈfɔːtər/",
    "e",
    "A patron, supporter, advocate, or abettor of a cause or person.",
    "Latin 'fautor' (protector, promoter), from 'fovere' (to warm/cherish).",
    "He was known openly as a fautor of seditious heretics within the northern earldom.",
    "State Papers of Henry VIII"
  ],
  [
    "Folkmote",
    "/ˈfoʊkmoʊt/",
    "m",
    "A general meeting of the inhabitants of a town, hundred, or shire to discuss public affairs or dispense justice.",
    "Old English 'folcgemōt' (people-meeting).",
    "The alderman summoned the freemen to assemble at the cross for the annual folkmote.",
    "Anglo-Saxon Chronicle"
  ],
  [
    "Forcelet",
    "/ˈfɔːrsəlɪt/",
    "m",
    "A small fort, stronghold, or fortified manor house.",
    "Middle English diminutive of 'force' (fortress), from Old French.",
    "The raiding band burned the outlying grange and besieged the local forcelet.",
    "Scottish Border Papers"
  ],
  [
    "Forestaller",
    "/fɔːrˈstɔːlər/",
    "m",
    "A merchant who bought up goods before they reached the open market to drive up prices.",
    "Middle English 'forestaller', from Old English 'foresteall' (ambush).",
    "The bailiff seized the grain carts and arrested the forestaller for unlawful profiteering.",
    "London Ordinance of the Guilds"
  ],
  [
    "Fayeterie",
    "/ˈfeɪtəri/",
    "m",
    "Hypocrisy, deceitfulness, or fraudulent behavior.",
    "Middle English, derived from 'faitor' (scoundrel/deceiver).",
    "Beware the smooth words of the courtier, for his entire trade is fayeterie.",
    "John Wycliffe, Sermons"
  ],
  [
    "Farsund",
    "/ˈfɑːrsʌnd/",
    "m",
    "A safe harbor or shelter for ships along a coast.",
    "Old Norse 'farsund' (passage-sound).",
    "The cog dropped anchor within the sheltered farsund before the gale broke.",
    "Norse-Scottish Trade Records"
  ],
  [
    "Fallow-star",
    "/ˈfæloʊ stɑːr/",
    "m",
    "An archaic astronomical term for a pale or dim star, or sometimes applied to Saturn.",
    "Old English 'fealu' (dusky/pale) and 'steorra'.",
    "As the fallow-star rose above the battlements, the night watch changed.",
    "Middle English Astronomical Treatise"
  ],
  [
    "Frass",
    "/fræs/",
    "m",
    "Dry wood dust or powder created by wood-boring insects destroying structural timbers.",
    "German 'fraß' (gnawing), adopted into dialectal English building trades.",
    "The master carpenter inspected the roof beams, finding them weakened by worm-frass.",
    "Medieval Builder's Guild Accounts"
  ],
  [
    "Flasket",
    "/ˈflæskɪt/",
    "e",
    "A long shallow washing basket, or a kind of small flagon or flask.",
    "Middle English 'flaskett', diminutive of 'flask'.",
    "She carried the damp linens out to the drying green in a woven willow flasket.",
    "Spenser, The Faerie Queene"
  ],
  [
    "Frampold",
    "/ˈfræmpoʊld/",
    "e",
    "Fretful, cross-grained, disagreeable, or quarrelsome.",
    "Etymology uncertain, perhaps a corruption of 'framp' or dialectal root.",
    "He is a very frampold man; he can never abide any good company.",
    "Shakespeare, The Merry Wives of Windsor"
  ],
  [
    "Fubbery",
    "/ˈfʌbəri/",
    "e",
    "Trickery, cheating, or imposition.",
    "Derived from the verb 'fub' (to put off or cheat).",
    "We will endure no more of his financial fubbery within our guild.",
    "Elizabethan Court Records"
  ],
  [
    "Fard",
    "/fɑːrd/",
    "e",
    "To paint the face with cosmetics; facial makeup.",
    "French 'farder', of Germanic origin.",
    "With fard and face-physic she strives to hide the ravages of passing years.",
    "John Webster, The Duchess of Malfi"
  ],
  [
    "Faineance",
    "/ˈfeɪniəns/",
    "m",
    "Idleness, slothfulness, or failure to perform one's duties.",
    "Middle French 'fainéance', from 'fainéant' (do-nothing).",
    "The knight was accused of faineance for lingering in the pavilion while the tournament raged.",
    "Chivalric Court Proceedings"
  ],
  [
    "Foutre",
    "/ˈfuːtər/",
    "e",
    "An expression of contempt; an exclamation meaning 'a fig for!' or damn it.",
    "French 'foutre' (to fuck, or as a vulgar oath).",
    "A foutre for the world and worldlings base! I speak of Africa and golden joys.",
    "Shakespeare, Henry IV, Part 2"
  ],
  [
    "Framp",
    "/fræmp/",
    "m",
    "To scold, fret, or grumble peevishly.",
    "Middle English, perhaps imitative of a snap or growl.",
    "The steward began to framp at the serving boys for spilling the spiced wine.",
    "Household Ordinances of a Noble Estate"
  ],
  [
    "Fleshy",
    "/ˈflɛʃi/",
    "m",
    "Relating to mortal flesh, corporeal, or earthly as opposed to spiritual.",
    "Old English 'flǣsciġ'.",
    "We must subdue our fleshy appetites through fasting and prayer.",
    "Ancrene Wisse"
  ],
  [
    "Fyrd",
    "/fɪərd/",
    "m",
    "The Anglo-Saxon national militia mobilized from local freemen to repel invasions.",
    "Old English 'fyrd' (military expedition, army).",
    "The earl summoned the local fyrd to assemble at the ford with spears and shields.",
    "Anglo-Saxon Chronicle"
  ],
  [
    "Fell-monger",
    "/ˈfɛlˌmʌŋɡər/",
    "m",
    "A dealer in hides, skins, or sheep-fells, who separates wool from the pelts.",
    "Middle English 'fellmonger', from 'fell' (animal skin) and 'monger'.",
    "The stench of the fell-monger's yard hung heavy over the lower ward of the town.",
    "Assize Rolls of Northampton"
  ],
  [
    "Fub-face",
    "/ˈfʌb feɪs/",
    "e",
    "A term of abuse or endearment for someone with a round, chubby face.",
    "From 'fub' (plump) and 'face'.",
    "Away, you chubby fub-face, before I call the constable upon you.",
    "Thomas Dekker, The Shoemaker's Holiday"
  ],
  [
    "For-think",
    "/fɔːrˈθɪŋk/",
    "m",
    "To regret, repent, or be displeased with an action.",
    "Old English 'forþyncan' (to seem unpleasing to).",
    "If thou slayest an innocent man, thy heart shall for-think it bitterly hereafter.",
    "Cursor Mundi"
  ],
  [
    "Fruiterer",
    "/ˈfruːtərər/",
    "m",
    "A medieval merchant who dealt in fresh and dried fruits, nuts, and exotic produce.",
    "Middle English 'fruiterer', from Old French 'fruitier'.",
    "The royal fruiterer brought fresh figs and pomegranates from the southern ports.",
    "Household Book of Edward IV"
  ],
  [
    "For-let",
    "/fɔːrˈlɛt/",
    "m",
    "To abandon, forsake, give up, or let go.",
    "Old English 'forlǣtan' (to let go, abandon).",
    "The monk vowed never to for-let his holy devotions, come what may.",
    "Hali Meiðhad"
  ],
  [
    "Fals-latin",
    "/ˈfɔːls ˈlætɪn/",
    "m",
    "Incorrectly written or ungrammatical Latin, often used mockingly by clerks or scholars.",
    "Middle English 'fals' and 'latin'.",
    "The village priest was rebuked by the bishop for his constant use of fals-latin in the liturgy.",
    "Ecclesiastical Visitation Records"
  ],
  [
    "Fyrd-wite",
    "/ˈfɪərd ˈwaɪtə/",
    "m",
    "The financial penalty or fine imposed upon an Anglo-Saxon subject who failed to join the fyrd when summoned.",
    "Old English 'fyrdwīte'.",
    "The thane exacted a heavy fyrd-wite from the churls who stayed home from the muster.",
    "Laws of Cnut"
  ],
  [
    "For-pined",
    "/fɔːrˈpaɪnd/",
    "m",
    "Wasted away, tormented, or exhausted by severe suffering or grief.",
    "Middle English 'forpyned', from Old English 'forpynan'.",
    "The captive knight was pale and for-pined after a year in the castle dungeon.",
    "Chaucer, The Knight's Tale"
  ],
  [
    "Flittermouse",
    "/ˈflɪtərˌmaʊs/",
    "e",
    "A bat; a flying mouse.",
    "Germanic origin, mirrored in Middle English 'flutter-mouse' or German 'Fledermaus'.",
    "Once let me recall the night-hag and the flittermouse that haunt the ruined chapel.",
    "Ben Jonson, The Sad Shepherd"
  ],
  [
    "For-waste",
    "/fɔːrˈweɪst/",
    "m",
    "To lay waste entirely, ravage, or destroy utterly.",
    "Old English 'forwēstan'.",
    "The marauding army did for-waste the entire valley before the king's host arrived.",
    "The Owl and the Nightingale"
  ],
  [
    "Frank-pledge",
    "/ˈfræŋkˌplɛdʒ/",
    "m",
    "A medieval system of English local government where all male heads of households were grouped into tithings responsible for each other's good behavior.",
    "Anglo-French 'franche-plegge' (free pledge/surety).",
    "Every freeman aged twelve and above was required to be enrolled in the view of frank-pledge.",
    "Magna Carta commentary / Assize of Clarendon"
  ],
  [
    "Fay-craft",
    "/ˈfeɪˌkrɑːft/",
    "m",
    "Magic, sorcery, or enchantment associated with fairies or elven lore.",
    "Middle English 'fay' and 'craft'.",
    "The villagers whispered that the strange healing ointment was made by fay-craft.",
    "Medieval Romance of Sir Launfal"
  ],
  [
    "For-wandered",
    "/fɔːrˈwɒndərd/",
    "m",
    "Tired out or lost from excessive wandering in strange lands.",
    "Middle English 'forwandred', from 'for-' (intensive) and 'wandren'.",
    "The for-wandered pilgrims sought shelter beneath the abbey gates as twilight fell.",
    "Piers Plowman"
  ],
  [
    "Gaberlunzie",
    "/ˌɡæbərˈlʌnzi/",
    "m",
    "A beggar, specifically a licensed or wandering beggar.",
    "Scots origin, of uncertain etymology, perhaps from Old French.",
    "A gaberlunzie man came to our door.",
    "Traditional Scottish Ballad"
  ],
  [
    "Gadling",
    "/ˈɡædlɪŋ/",
    "m",
    "An idle wanderer, vagabond, or companion/comrade in arms.",
    "Old English gædeling (companion, kinsman).",
    "He called the knights base gadlings who fled the fray.",
    "Middle English Chronicle"
  ],
  [
    "Gaillard",
    "/ˈɡeɪlərd/",
    "e",
    "Brisk, lively, merry, or valiant; also a spirited dance.",
    "Old French gaillard.",
    "He was young and gaillard, ready for the tournament.",
    "Geoffrey Chaucer, The Canterbury Tales"
  ],
  [
    "Gale",
    "/ɡeɪl/",
    "e",
    "A jest, merriment, or source of laughter.",
    "Old Norse geil or related Germanic roots.",
    "They made great gale at the feast.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Galliard",
    "/ˈɡæljərd/",
    "e",
    "A lively court dance of the 16th century characterized by leaps.",
    "French galliard.",
    "He capered upright in the galliard.",
    "William Shakespeare, Twelfth Night"
  ],
  [
    "Gan",
    "/ɡæn/",
    "m",
    "An auxiliary verb meaning 'began' or 'did'.",
    "Middle English contraction of ginnen.",
    "And aye the minstrel gan to sing.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Gane",
    "/ɡeɪn/",
    "m",
    "Useful, profitable, or direct (Scots/Northern Middle English).",
    "Old Norse gegn (direct, ready).",
    "That path is not gane for a burdened horse.",
    "Border Ballads"
  ],
  [
    "Gar",
    "/ɡɑːr/",
    "m",
    "To compel, make, or cause someone to do something.",
    "Old Norse gora, gera.",
    "It shall gar you repent your harsh words.",
    "John Barbour, The Brus"
  ],
  [
    "Gardevin",
    "/ˈɡɑːrdəvɪn/",
    "m",
    "A bottle or small wooden cask for holding wine.",
    "Old French garde-vin.",
    "Fill the gardevin with the finest Gascon wine.",
    "Household Ordinances of Edward II"
  ],
  [
    "Garland",
    "/ˈɡɑːrlənd/",
    "m",
    "A wreath of flowers, or a collection of poems/ballads.",
    "Old French garlande.",
    "She wore a garland of fresh roses upon her helm.",
    "Chivalric Romance"
  ],
  [
    "Garner",
    "/ˈɡɑːrnər/",
    "m",
    "A granary or storehouse for grain.",
    "Latin granarium via Old French.",
    "The castle garner was stocked against the siege.",
    "Piers Plowman"
  ],
  [
    "Garth",
    "/ɡɑːrθ/",
    "m",
    "A small enclosure, yard, or garden, often attached to a cloister.",
    "Old Norse garthr (yard, fence).",
    "The monks walked silently in the herb garth.",
    "Monastic Records"
  ],
  [
    "Gate",
    "/ɡeɪt/",
    "m",
    "A way, path, street, or manner of proceeding.",
    "Old Norse gata.",
    "They went their gate toward the keep.",
    "Cursor Mundi"
  ],
  [
    "Gaunt",
    "/ɡɔːnt/",
    "e",
    "A protective armored glove; a gauntlet.",
    "Old French gantelet.",
    "He cast his gaunt upon the stone floor as a challenge.",
    "Malory's Arthurian Tales"
  ],
  [
    "Gaunter",
    "/ˈɡɔːntər/",
    "m",
    "A glover, or maker of armor gloves.",
    "Old French gantiier.",
    "The royal gaunter supplied steel-plated gloves for the knights.",
    "Guild Records of London"
  ],
  [
    "Gavel",
    "/ˈɡævəl/",
    "m",
    "Tribute, rent, or tax paid in feudal times.",
    "Old English gafol.",
    "The villagers brought their annual gavel of corn.",
    "Domesday Book"
  ],
  [
    "Gawain",
    "/ˈɡɑːwɪn/",
    "m",
    "Exemplar of courtesy and knightly virtue in Arthurian lore.",
    "Welsh Gwalchmai.",
    "Sir Gawain accepted the green knight's challenge.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Gaze-hound",
    "/ˈɡeɪz.haʊnd/",
    "e",
    "A hound that hunts by sight rather than scent.",
    "Middle English gaze + hound.",
    "The swift gaze-hound pursued the fleeing stag across the clearing.",
    "The Master of Game"
  ],
  [
    "Geason",
    "/ˈɡiːzən/",
    "e",
    "Rare, scarce, uncommon, or hard to find.",
    "Old English gēsne (destitute, void, rare).",
    "True knights are geason in these degenerate times.",
    "Edmund Spenser, The Faerie Queene"
  ],
  [
    "Gebur",
    "/ˈɡɛbʊr/",
    "m",
    "An Anglo-Saxon peasant or serf of higher status than a slave.",
    "Old English gebūr.",
    "The gebur owed weekly labor service to the lord.",
    "Rectitudines Singularum Personarum"
  ],
  [
    "Geck",
    "/ɡɛk/",
    "e",
    "A fool, dupe, or object of scorn; to mock.",
    "Low German or Dutch gek.",
    "And made him the geck and scorn the other day.",
    "William Shakespeare, Cymbeline"
  ],
  [
    "Ged",
    "/ɡɛd/",
    "m",
    "A pike (the fish).",
    "Old Norse gedda.",
    "They caught a great ged in the castle moat.",
    "Scots Chronicles"
  ],
  [
    "Geneat",
    "/ɡɪˈnæɑːt/",
    "m",
    "A mounted retainer or vassal in Anglo-Saxon society.",
    "Old English ġenēat (companion).",
    "The king rewarded his faithful geneat with a hide of land.",
    "Anglo-Saxon Charter"
  ],
  [
    "Gent",
    "/dʒɛnt/",
    "m",
    "Noble, courteous, gentle, or graceful.",
    "Old French gentil.",
    "A knight so gent and full of victory.",
    "Geoffrey Chaucer, Knight's Tale"
  ],
  [
    "German",
    "/ˈdʒɜːrmən/",
    "e",
    "Closely related by blood; a full sibling or cousin.",
    "Latin germanus.",
    "He is my brother German by the selfsame mother.",
    "William Shakespeare, Titus Andronicus"
  ],
  [
    "Gess",
    "/ɡɛs/",
    "m",
    "A leash or strap tied around the leg of a hawk.",
    "Old French gestes / gistes.",
    "The falconer loosed the gess from the falcon's leg.",
    "The Boke of St. Albans"
  ],
  [
    "Geustning",
    "/ˈɡɛstnɪŋ/",
    "m",
    "The feudal right of hospitality or lodging demanded by a lord.",
    "Old English ġestniung.",
    "The monastery complained of the heavy burden of geustning.",
    "Monastic Cartulary"
  ],
  [
    "Gibe",
    "/dʒaɪb/",
    "e",
    "A taunt, sarcastic remark, or jeer.",
    "Origin uncertain, perhaps Old French or Celtic.",
    "He could not brook the gibes of the rival barons.",
    "Elizabethan Drama"
  ],
  [
    "Giglet",
    "/ˈɡɪɡlɪt/",
    "e",
    "A wanton, romping, or giddy girl or young woman.",
    "Middle English gigyl.",
    "Away with these giglets, let us to serious business.",
    "William Shakespeare, 1 Henry VI"
  ],
  [
    "Gillyflower",
    "/ˈdʒɪliflaʊər/",
    "e",
    "A clove-scented flower, such as the carnation or stock.",
    "Old French giroflée.",
    "The fairest flowers o' the season are our carnations and gillyflowers.",
    "William Shakespeare, The Winter's Tale"
  ],
  [
    "Gimmer",
    "/ˈɡɪmər/",
    "m",
    "A ewe lamb (Northern and Scots).",
    "Old Norse gimbr.",
    "The shepherd sheared the gimmer in the fold.",
    "Middle English Pastoral Verse"
  ],
  [
    "Gite",
    "/ɡaɪt/",
    "m",
    "A gown, robe, or tunic.",
    "Old French gite (lodging, tunic).",
    "She wore a silk gite of bright scarlet.",
    "Geoffrey Chaucer, Miller's Tale"
  ],
  [
    "Glede",
    "/ɡliːd/",
    "m",
    "A bird of prey, specifically the red kite.",
    "Old English glīda.",
    "The glede circled high above the carcass.",
    "Old English Bestiary"
  ],
  [
    "Glim",
    "/ɡlɪm/",
    "m",
    "A light, candle, or lantern.",
    "Germanic root related to gleam.",
    "Put out the glim before we approach the postern gate.",
    "Middle English Slang"
  ],
  [
    "Gloppen",
    "/ˈɡlɒpən/",
    "m",
    "To surprise, astonish, or fill with fear.",
    "Old Norse glopna.",
    "The knight was gloppened by the dragon's sudden roar.",
    "Alliterative Morte Arthure"
  ],
  [
    "Gnof",
    "/ɡnɒf/",
    "m",
    "A churl, miser, or surly fellow.",
    "Origin obscure, possibly Scandinavian.",
    "A ful boor, a gammot and a gnof.",
    "Geoffrey Chaucer, Miller's Tale"
  ],
  [
    "Godsip",
    "/ˈɡɒdsɪp/",
    "m",
    "A godparent, or a familiar crony/friend (origin of gossip).",
    "Old English godsybb.",
    "She sat by the fire with her trusty godsip.",
    "Chaucerian Manuscripts"
  ],
  [
    "Halyard",
    "/ˈhæljərd/",
    "e",
    "A rope or tackle used for hoisting or lowering a sail, flag, or yardarm on a ship.",
    "Late Middle English, alteration of halier, from hale (to pull) + -yer.",
    "Secure the banner to the main halyard before the dawn watch.",
    "Naval accounts of the Elizabethan Era"
  ],
  [
    "Housecarle",
    "/ˈhaʊskɑːrl/",
    "m",
    "A member of the elite household guard and professional standing army of Scandinavian and Anglo-Saxon lords and kings.",
    "Old English hūscarl, from Old Norse húskarll, from hús 'house' + karll 'man, freeman'.",
    "The housecarles formed an impenetrable shield-wall around the king.",
    "Anglo-Saxon Chronicle"
  ],
  [
    "Hurdle",
    "/ˈhɜːrdəl/",
    "m",
    "A wooden framework used historically for dragging condemned traitors and felons to the place of execution.",
    "Old English hyrdel, diminutive of Germanic base meaning 'woven branches'.",
    "The convicted traitor was bound to a hurdle and dragged through the muddy streets.",
    "Medieval Judicial Records"
  ],
  [
    "Hurst",
    "/hɜːrst/",
    "m",
    "A small wood, grove, or wooded hill, frequently used as a boundary marker in medieval charters.",
    "Old English hyrst 'wood, wooded eminence'.",
    "They met by the old oak at the edge of the royal hurst.",
    "Charters of the Anglo-Saxon Kings"
  ],
  [
    "Huckster",
    "/ˈhʌkstər/",
    "m",
    "A small-scale peddler, hawker, or retailer who sold provisions in medieval markets and fairs.",
    "Middle English, from Middle Dutch hokster or Low German hūkere.",
    "The huckster shouted out the price of his salted herrings in the market square.",
    "Piers Plowman by William Langland"
  ],
  [
    "Harbinger",
    "/ˈhɑːrbɪndʒər/",
    "m",
    "An officer in medieval households sent ahead to secure lodgings, provisions, and shelter for a noble retinue.",
    "Middle English herbergeour, from Old French herbergeor, from herbergier 'to lodge'.",
    "The king's harbinger arrived at the castle gate to prepare the royal chambers.",
    "Chaucer's Canterbury Tales"
  ],
  [
    "Habergeoun",
    "/ˈhæbərtʃuːn/",
    "m",
    "An alternative Middle English spelling of habergeon denoting a lightweight mail tunic.",
    "Middle English, variant of habergeon.",
    "He laced his habergeoun tight against the biting winter wind.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Hagbut",
    "/ˈhæɡbʌt/",
    "m",
    "An early portable firearm or matchlock arquebus used in late medieval and Tudor warfare.",
    "Middle French arquebuse, influenced by Middle Dutch hakebus ('hook gun').",
    "The mercenary aimed his hagbut from the ramparts toward the advancing siege tower.",
    "Scottish Border Warfare Records"
  ],
  [
    "Halsfang",
    "/ˈhælsfæŋ/",
    "m",
    "An ancient Anglo-Saxon legal term for the pillory, or the penalty of the pillory, literally meaning 'neck-catch'.",
    "Old English halsefang, from hals 'neck' + fangen 'to catch'.",
    "The dishonest baker was condemned to the halsfang for short-weight loaves.",
    "Laws of King Cnut"
  ],
  [
    "Haly-werk",
    "/ˈhɑːli wɜːrk/",
    "m",
    "Old English term for holy work, pious labor, or duties owed to the church.",
    "Old English hāligweorc.",
    "The monks dedicated their daily hours to haly-werk and prayer.",
    "Monastic Chartularies"
  ],
  [
    "Harnessed",
    "/ˈhɑːrnɪst/",
    "m",
    "Fully equipped, armored, or fitted out in defensive military gear for battle.",
    "Middle English, from Old French harnesser.",
    "The knights rode forth fully harnessed and with lances couched.",
    "Chronicles of Jean Froissart"
  ],
  [
    "Hasp",
    "/hæsp/",
    "m",
    "A strong metal fastener or clasp for a castle door, chest, or gate, secured with a pin or padlock.",
    "Old English hæpse.",
    "He lifted the heavy iron hasp to unbolt the postern gate.",
    "Medieval Architectural Inventories"
  ],
  [
    "Hattock",
    "/ˈhætək/",
    "m",
    "A shock or stook of harvested grain sheaves stacked together in a medieval field.",
    "Middle English, diminutive of hat, or related to Old High German hatuko.",
    "The peasants rested in the shadow of the hattocks during the midday heat.",
    "Manorial Agricultural Accounts"
  ],
  [
    "Haver",
    "/ˈhɑːvər/",
    "m",
    "An obsolete northern English and Scottish term for oats or oat-chaff.",
    "Old Norse hafr 'oats'.",
    "The horses were fed a mash of haver and sweet meadow hay.",
    "Northern English Manor Rolls"
  ],
  [
    "Heed",
    "/hiːd/",
    "m",
    "Careful attention, notice, or cautious regard given to warnings or feudal commands.",
    "Old English hēdan 'to take heed, guard'.",
    "Give good heed to the lord's decree regarding the forest laws.",
    "Cursor Mundi"
  ],
  [
    "Hellier",
    "/ˈhɛliər/",
    "m",
    "A regional medieval term for a slater, tiler, or Thatcher who covered roofs.",
    "Middle English helier, from helen 'to cover' (Old English helan).",
    "The hellier climbed the scaffolding to repair the damaged slate roof of the keep.",
    "West Country Guild Records"
  ],
  [
    "Henchman",
    "/ˈhɛntʃmən/",
    "e",
    "A loyal page, attendant, or squire attached to a nobleman; later generalized to mean a trusted follower or henchman.",
    "Middle English hengestman, originally 'groom leading a horse', from hengest 'stallion' + man.",
    "The young henchman held the duke's destrier by the bridle.",
    "Shakespeare, Henry VI"
  ],
  [
    "Heriotable",
    "/ˈhɛriətəbəl/",
    "m",
    "Subject to the payment of a heriot feudal due upon the death of the tenant.",
    "Medieval Latin heriotabilis, from heriot.",
    "The holding was declared heriotable under the ancient customs of the manor.",
    "Feudal Land Tenures"
  ],
  [
    "Hester",
    "/ˈhɛstər/",
    "m",
    "An old term for a young beech tree or sapling.",
    "Old French hestrie, of Germanic origin.",
    "They cut hesters from the thicket to weave wattles for the sheepfold.",
    "Forestry Rolls of the 13th Century"
  ],
  [
    "Hide-bound",
    "/ˈhaɪd baʊnd/",
    "e",
    "Having the skin tight against the body (said of emaciated livestock); metaphorically rigid, narrow-minded, or strictly bound by old customs.",
    "16th-century English, from hide (animal skin) + bound.",
    "The old feudal court remained hide-bound against all modern innovations.",
    "Elizabethan Legal Treatises"
  ],
  [
    "Hilding",
    "/ˈhɪldɪŋ/",
    "e",
    "A base, cowardly, worthless, or contemptible person.",
    "Late Middle English, perhaps from hinde (servant) or a derivative of old personal names.",
    "Away with you, you base hilding, unfit to wear the spurs of a knight!",
    "William Shakespeare, Romeo and Juliet"
  ],
  [
    "Hobbler",
    "/ˈhɒblər/",
    "m",
    "A light medieval cavalryman or mounted scout who rode a small horse (hobelin), used for rapid reconnaissance.",
    "Middle English hobeler, from Old French hobelier, from hobel 'hobby (horse)'.",
    "The hobblers brought word that the enemy vanguard was crossing the ford.",
    "Military Rolls of Edward III"
  ],
  [
    "Hoby",
    "/ˈhɒbi/",
    "m",
    "A small, strong, active horse or pony, ridden by light cavalry and couriers.",
    "Middle English hobin, of uncertain origin (possibly related to Old French hobel).",
    "He mounted his swift hoby and rode toward the castle to sound the alarm.",
    "State Papers of the 14th Century"
  ],
  [
    "Hoga",
    "/ˈhoʊɡə/",
    "m",
    "A medieval Latinized term for a hill, mound, or howe used as a landmark.",
    "Medieval Latin, from Old Norse haugr or Old English hoh.",
    "The boundary line ran directly from the stream up to the stony hoga.",
    "Monastic Boundary Charters"
  ],
  [
    "Hold",
    "/hoʊld/",
    "m",
    "A fortified stronghold, castle, fortress, or fortified place of safety.",
    "Old English heald 'stronghold, prison'.",
    "The garrison surrendered the mountain hold after a three-week siege.",
    "Annales Cambriae"
  ],
  [
    "Holdman",
    "/ˈhoʊldmən/",
    "m",
    "A freeholder or tenant holding land by military or customary tenure.",
    "Old English holdman.",
    "Every holdman was summoned to attend the court baron.",
    "Anglo-Saxon Legal Documents"
  ],
  [
    "Holour",
    "/ˈhoʊlʊər/",
    "m",
    "A Middle English derogatory term for a lecher, debauchee, or fornicator.",
    "Middle English, from holen 'to hollow out, pursue illicitly'.",
    "The friar preached against the wicked holours of the court.",
    "Chaucer, The Summoner's Tale"
  ],
  [
    "Homager",
    "/ˈhɒmədʒər/",
    "m",
    "A vassal who has done homage and sworn fealty to a feudal lord.",
    "Middle English, from Old French homagier.",
    "The rebellious baron was summoned to appear before the king as a dutiful homager.",
    "Historical Annals of Feudal England"
  ],
  [
    "Hone",
    "/hoʊn/",
    "m",
    "A fine-grained whetstone used by knights and squires for sharpening swords and daggers.",
    "Old English hān 'stone'.",
    "He drew his broadsword across the oil-soaked hone until the edge gleamed.",
    "Medieval Armory Manuals"
  ],
  [
    "Hoo",
    "/huː/",
    "m",
    "A spur of land projecting into a valley or river, or a high ridge of hills.",
    "Old English hōh 'heel, projecting ridge of land'.",
    "They camped upon the grassy hoo overlooking the winding river.",
    "Place-name studies of medieval England"
  ],
  [
    "Hoplite",
    "/ˈhɒplaɪt/",
    "e",
    "A heavily armed foot soldier of ancient Greece, occasionally referenced metaphorically by Elizabethan humanists.",
    "Greek hoplites, from hoplon 'armor, shield'.",
    "The disciplined formation resembled the phalanx of ancient hoplites.",
    "Elizabethan Translations of Classical Historians"
  ],
  [
    "Horn",
    "/hɔːrn/",
    "m",
    "A wind instrument made from an animal's horn, blown by watchmen or hunters to signal alarms or assembly.",
    "Old English horn.",
    "The watchman blew a mighty blast upon his horn from the topmost tower.",
    "Sir Tristrem (Middle English Romance)"
  ],
  [
    "Horologe",
    "/ˈhɒrəlɒdʒ/",
    "m",
    "An early mechanical clock, sundial, or time-measuring device used in medieval monasteries and castles.",
    "Middle English, from Old French horologe, from Latin horologium.",
    "The grand horologe in the great hall struck the midnight hour.",
    "Medieval Monastic Chronicles"
  ],
  [
    "Hospodar",
    "/ˈhɒspədɑːr/",
    "e",
    "A historical title for a governor, prince, or ruler in Eastern European and Danubian principalities during the late medieval and Renaissance eras.",
    "Polish gospodarz, from Old Church Slavonic gospodĭ 'lord, master'.",
    "The hospodar sent envoys to negotiate terms with the invading sultan.",
    "Travel Accounts of Elizabethan Merchants"
  ],
  [
    "Houd",
    "/huːd/",
    "m",
    "An archaic or dialectal spelling variant of hood, often worn by medieval pilgrims and monks.",
    "Old English hōd.",
    "He pulled his woolen houd low over his brow to escape recognition.",
    "Middle English Verse Narratives"
  ],
  [
    "Hovel",
    "/ˈhɒvəl/",
    "m",
    "A small, crude, humble shed or outbuilding used by serfs and peasants.",
    "Middle English hovel, diminutive of hove 'dwelling'.",
    "They sought shelter from the torrential rain inside a vacant shepherd's hovel.",
    "Piers Plowman"
  ],
  [
    "Howe",
    "/haʊ/",
    "m",
    "A burial mound, barrow, or low hill, often associated with ancient folklore and hidden treasures in medieval lore.",
    "Old Norse haugr or Old English hoh.",
    "The heroes buried the slain chieftain beneath a great turf howe.",
    "Sagas and Medieval Chronicles"
  ],
  [
    "Hucho",
    "/ˈhjuːkoʊ/",
    "e",
    "A large predatory freshwater fish of the salmon family found in European rivers, prized in medieval banquets.",
    "Middle High German hucho.",
    "The lord's steward served a magnificent hucho caught in the mountain stream.",
    "Medieval Household Feast Records"
  ],
  [
    "Huscarl",
    "/ˈhʌskɑːrl/",
    "m",
    "An alternative spelling of housecarle, denoting a member of a noble's bodyguard.",
    "Old English hūscarl.",
    "The fallen huscarl was laid to rest with his broadsword beside him.",
    "Saga Literature and Chronicles"
  ],
  [
    "Ill-usage",
    "/ɪlˈjuːzɪdʒ/",
    "e",
    "Mistreatment, abuse, or cruel physical handling by another person.",
    "Middle English, from Old French and Latin",
    "He endured much ill-usage at the hands of the tyrant knight.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Impecunious",
    "/ˌɪmpɪˈkjuːniəs/",
    "t",
    "Having little or no money; habitually penniless, common among minor squires.",
    "Latin 'impecuniosus' (im- + pecunia 'money')",
    "The impecunious baron could not afford new steel for his men-at-arms.",
    "Victorian historical lexicons"
  ],
  [
    "Impenetrable",
    "/ɪmˈpɛnɪtrəbəl/",
    "m",
    "Impervious to weapons, arrows, or scaling ladders; unbreakable armor.",
    "Latin 'impenetrabilis'",
    "His plate mail was impenetrable to standard crossbolt fire.",
    "Middle English chronicles of warfare"
  ],
  [
    "Impiety",
    "/ɪmˈpaɪəti/",
    "e",
    "Lack of reverence toward God, church authority, or the feudal lord.",
    "Latin 'impietas'",
    "To speak against the bishop during the feast was deemed gross impiety.",
    "Ecclesiastical court records"
  ],
  [
    "Impledge",
    "/ɪmˈplɛdʒ/",
    "m",
    "To pawn, mortgage, or pledge land or goods as security for a debt.",
    "Old French 'impligier'",
    "He had to impledge his vineyard to raise funds for the Third Crusade.",
    "Feudal legal rolls"
  ],
  [
    "Impower",
    "/ɪmˈpaʊər/",
    "e",
    "To invest with legal power, authority, or official dominion; empower.",
    "Middle English 'empowren'",
    "The king did impower the earl to collect taxes across the shire.",
    "Tudor state papers"
  ],
  [
    "Impawn",
    "/ɪmˈpɔːn/",
    "e",
    "To deposit something as a pledge or security; pawn.",
    "Middle English and Old French",
    "She was forced to impawn her gold ring to pay the castle blacksmith.",
    "William Shakespeare, King Richard II"
  ],
  [
    "Impeachment",
    "/ɪmˈpiːtʃmənt/",
    "m",
    "An accusation or charge brought against a public official or noble.",
    "Anglo-Norman 'empechement'",
    "The corrupt seneschal faced impeachment before the royal council.",
    "Medieval parliamentary records"
  ],
  [
    "Impenitent",
    "/ɪmˈpɛnɪtənt/",
    "m",
    "Not feeling remorse or sorrow for one's sins or feudal transgressions.",
    "Latin 'impaenitentem'",
    "The impenitent brigand refused absolution before the hangman's noose.",
    "Medieval sermon collections"
  ],
  [
    "Imperil",
    "/ɪmˈpɛrɪl/",
    "e",
    "To put at hazard, endanger, or risk life, limb, or honor.",
    "Old French 'emperillier'",
    "To challenge the champion would imperil the honor of the entire house.",
    "Edmund Spenser, The Faerie Queene"
  ],
  [
    "Imperium",
    "/ɪmˈpɪəriəm/",
    "m",
    "Absolute power, supreme dominion, or sovereign authority of a monarch.",
    "Latin 'imperium'",
    "The high king claimed imperial imperium over all lesser dukedoms.",
    "Latin-English historical treatises"
  ],
  [
    "Impetuous",
    "/ɪmˈpɛtʃuəs/",
    "e",
    "Acting or done quickly and without thought; rash, descriptive of headstrong knights.",
    "Latin 'impetuosus'",
    "His impetuous charge broke the enemy line but left his flank exposed.",
    "Christopher Marlowe, Tamburlaine"
  ],
  [
    "Implant",
    "/ɪmˈplɑːnt/",
    "e",
    "To insert, fix securely, or instill values such as loyalty into a squire.",
    "Latin 'implantare'",
    "It was the master-at-arms' duty to implant deep courage in the boys.",
    "Renaissance educational tracts"
  ],
  [
    "Implicate",
    "/ɪmˈplɪkeɪt/",
    "m",
    "To entangle, involve, or connect a noble in a treasonous plot.",
    "Latin 'implicatus'",
    "False letters were forged to implicate the lord in the rebellion.",
    "Fifteenth-century state trials"
  ],
  [
    "Implicit",
    "/ɪmˈplɪsɪt/",
    "e",
    "Understood though not directly expressed; unspoken loyalty to the crown.",
    "Latin 'implicitus'",
    "The vassal owed implicit obedience to his overlord's command.",
    "Elizabethan political treatises"
  ],
  [
    "Implorator",
    "/ɪmˈplɔːreɪtər/",
    "e",
    "One who implores, entreats, or begs earnestly, as a suppliant petitioner.",
    "Latin 'implorator'",
    "He stood at the throne room doors as an humble implorator.",
    "William Shakespeare, Hamlet"
  ],
  [
    "Imporous",
    "/ɪmˈpɔːrəs/",
    "t",
    "Compact, dense, allowing no passage of fluids; describing fine chainmail.",
    "Latin 'imporosus'",
    "The imporous weave of the tempered steel stopped the dagger thrust.",
    "Victorian antiquarian studies"
  ],
  [
    "Import",
    "/ɪmˈpɔːrt/",
    "m",
    "Significance, consequence, or the literal meaning of a royal decree.",
    "Latin 'importare'",
    "The dispatch carried great import for the defense of the border marches.",
    "Medieval bureaucratic letters"
  ],
  [
    "Importunate",
    "/ɪmˈpɔːrtʃuːnət/",
    "e",
    "Persistently asking for something; overly urgent in demands for debt payment.",
    "Latin 'importunitas'",
    "The importunate merchant demanded his coin at the castle gate.",
    "William Shakespeare, The Two Gentlemen of Verona"
  ],
  [
    "Impose",
    "/ɪmˈpoʊz/",
    "m",
    "To levy a tax, duty, or corvée labor upon the peasantry.",
    "Old French 'imposer'",
    "The lord did impose a heavy grain tax upon the village tenants.",
    "Manorial court rolls"
  ],
  [
    "Imposition",
    "/ˌɪmpəˈzɪʃən/",
    "m",
    "An excessive tax, burdensome duty, or unfair feudal exaction.",
    "Latin 'impositio'",
    "The peasants groaned beneath the new imposition laid by the sheriff.",
    "Chronicles of English peasants"
  ],
  [
    "Impotence",
    "/ˈɪmpətəns/",
    "m",
    "Lack of physical power, strength, or military capacity to resist.",
    "Latin 'impotentia'",
    "The aging knight wept at his own impotence in the melee.",
    "Chivalric romances"
  ],
  [
    "Impound",
    "/ɪmˈpaʊnd/",
    "m",
    "To shut up stray livestock in a pound until a fine is paid to the lord.",
    "Middle English 'empounden'",
    "The bailiff threatened to impound the wandering sheep of the cotters.",
    "Manorial custom books"
  ],
  [
    "Imprecation",
    "/ˌɪmprɪˈkeɪʃən/",
    "e",
    "A spoken curse invoked upon an enemy knight or faithless vassal.",
    "Latin 'imprecatio'",
    "He hurled a bitter imprecation at the coward who fled the field.",
    "Renaissance drama"
  ],
  [
    "Impregnable",
    "/ɪmˈprɛɡnəbəl/",
    "m",
    "Unable to be captured, broken into, or undermined; a strong fortress.",
    "Old French 'impregnable'",
    "The fortress wall of concentric stone was deemed impregnable.",
    "Froissart's Chronicles"
  ],
  [
    "Impress",
    "/ɪmˈprɛs/",
    "e",
    "To force men into military or naval service; press-gang soldiers.",
    "Latin 'impressare'",
    "The captain had authority to impress yeomen for the royal archers.",
    "Tudor military ordinances"
  ],
  [
    "Impressure",
    "/ɪmˈprɛʃər/",
    "e",
    "An indentation, impression, or mark left by a seal or heavy blow.",
    "Latin 'impressura'",
    "The wax bore the clear impressure of the royal signet ring.",
    "William Shakespeare, Twelfth Night"
  ],
  [
    "Impropriation",
    "/ɪmˌprɒpriˈeɪʃən/",
    "e",
    "The holding of a church benefice and its revenues by a lay lord.",
    "Latin 'impropriatio'",
    "The baron defended his impropriation of the local monastery's tithes.",
    "Ecclesiastical history"
  ],
  [
    "Impugn",
    "/ɪmˈpjuːn/",
    "m",
    "To dispute, challenge, or call into question a knight's honor.",
    "Latin 'impugnare'",
    "None dared impugn the valor of the queen's chosen champion.",
    "Chivalric code texts"
  ],
  [
    "Impune",
    "/ɪmˈpjuːn/",
    "t",
    "Unpunished, exempt from penalty; acting with impunity.",
    "Latin 'impune'",
    "No outlaw could rob upon the king's highway impune.",
    "Victorian historical glossaries"
  ],
  [
    "In-barrier",
    "/ˈɪnˌbæriər/",
    "m",
    "The inner fence or palisade surrounding the tournament lists.",
    "Middle English and Old French",
    "The squires stood ready within the in-barrier to catch stray lances.",
    "Tournament rules manuscript"
  ],
  [
    "In-dwelling",
    "/ˈɪnˌdwɛlɪŋ/",
    "m",
    "Residing within; spiritual presence inside the heart or castle chapel.",
    "Old English 'in-dwelling'",
    "They prayed for the divine in-dwelling to protect their stone keep.",
    "Middle English homilies"
  ],
  [
    "In-fare",
    "/ˈɪnˌfɛər/",
    "m",
    "A wedding feast or the entry feast held when bringing a bride home.",
    "Old English 'infaru'",
    "The lord prepared a grand in-fare to celebrate his marriage.",
    "Northern English dialect records"
  ],
  [
    "In-hold",
    "/ˈɪnˌhoʊld/",
    "m",
    "To hold possession of a fief, castle, or manor within a kingdom.",
    "Old English 'in-healdan'",
    "He claimed the right to in-hold the disputed borderlands.",
    "Anglo-Saxon legal codes"
  ],
  [
    "In-mate",
    "/ˈɪnˌmeɪt/",
    "m",
    "A joint tenant, co-occupant, or lodger within a crowded bailey cottage.",
    "Middle English 'inmate'",
    "Several poor families lived as inmates in the gatehouse chamber.",
    "Tudor social statutes"
  ],
  [
    "In-treat",
    "/ɪnˈtriːt/",
    "e",
    "To entreat, beseech, or plead earnestly with a superior.",
    "Middle English 'entreten'",
    "She did in-treat the king to spare her condemned brother.",
    "Elizabethan poetry"
  ],
  [
    "Incantation",
    "/ˌɪnkænˈteɪʃən/",
    "m",
    "A magical spell or chant, often suspected of being used by sorcerers.",
    "Latin 'incantatio'",
    "The hedge-witch was accused of whispering an evil incantation.",
    "Medieval witch-trial records"
  ],
  [
    "Incarnadine",
    "/ɪnˈkɑːrdənaɪn/",
    "e",
    "To dye blood-red; the color of fresh gore on battlefield armor.",
    "Italian 'incarnadino'",
    "The slaughter did incarnadine the waters of the moat.",
    "William Shakespeare, Macbeth"
  ],
  [
    "Incedious",
    "/ɪnˈsiːdiəs/",
    "t",
    "Proceeding or marching forward in a stately, ceremonial manner.",
    "Latin 'incedere'",
    "The procession moved incedious toward the abbey altar.",
    "Victorian scholarly glossaries"
  ],
  [
    "Incendiary",
    "/ɪnˈsɛndiɛri/",
    "e",
    "A person who sets fire to towns, crops, or siege engines maliciously.",
    "Latin 'incendiarius'",
    "The captured incendiary was condemned to burn by the castle walls.",
    "Renaissance legal definitions"
  ],
  [
    "Incentive",
    "/ɪnˈsɛntɪv/",
    "m",
    "An instigation, spur, or reward offered to encourage soldiers in battle.",
    "Latin 'incentivum'",
    "Plunder was the primary incentive for the mercenary crossbowmen.",
    "Medieval chronicles"
  ],
  [
    "Inception",
    "/ɪnˈsɛpʃən/",
    "m",
    "The establishment, beginning, or creation of a knightly order.",
    "Latin 'inceptio'",
    "From its inception, the brotherhood swore to protect pilgrims.",
    "History of the Templars"
  ],
  [
    "Inchoate",
    "/ɪnˈkoʊɪt/",
    "m",
    "Just begun, undeveloped, or in an early, unformed stage like a new levy.",
    "Latin 'inchoatus'",
    "The inchoate peasant army lacked proper discipline and gear.",
    "Historical military texts"
  ],
  [
    "Incidences",
    "/ˈɪnsɪdənsɪz/",
    "e",
    "Occurrences, happenings, or burdens falling upon a feudal estate.",
    "Latin 'incidentia'",
    "He accounted for all the yearly incidences affecting the manor.",
    "Elizabethan financial records"
  ],
  [
    "Inclemency",
    "/ɪnˈklɛmənsi/",
    "e",
    "Severe weather conditions, storms, or bitter cold during a siege.",
    "Latin 'inclementia'",
    "The besieging army suffered greatly from winter's inclemency.",
    "Historical accounts of campaigns"
  ],
  [
    "Jackman",
    "/ˈdʒækmən/",
    "m",
    "A horseman or foot soldier armed with a jack (a quilted leather jerkin reinforced with metal plates).",
    "Middle English, from 'jack' (protective tunic) + 'man'",
    "The border lords raised a company of trusty jackmen to guard the mountain pass.",
    "Border Laws and Ordinances"
  ],
  [
    "Jazerant",
    "/ˈdʒæzərənt/",
    "m",
    "A lightweight coat of mail or brigandine made of overlapping small metal plates sewn to fabric.",
    "Old French 'jaseran', via Arabic from Persian 'gazrawan'",
    "Sir Hugh fastened his jazerant over his doublet before mounting his destrier.",
    "Chivalric Romances of the 14th Century"
  ],
  [
    "Jupon",
    "/dʒuːˈpɒn/",
    "m",
    "A tight-fitting outer tunic worn over armour, emblazoned with the knight's coat of arms.",
    "Old French 'jupon', from Italian 'giubbone'",
    "The baron's jupon bore the red lion of his house, torn and bloodied from the melee.",
    "Froissart's Chronicles"
  ],
  [
    "Jambard",
    "/ˈdʒæmbɑːrd/",
    "m",
    "A piece of armour for protecting the shin; a greave.",
    "Old French 'jambe' (leg) + suffix '-ard'",
    "He adjusted his steel jambards and buckled his sollerets.",
    "Inventory of the Tower of Armoury"
  ],
  [
    "Joust",
    "/dʒaʊst/",
    "m",
    "A combat between two mounted knights riding against each other with lances.",
    "Old French 'jouster', from Vulgar Latin 'juxtare' (to meet)",
    "The herald sounded the trumpets to announce the first joust of the tournament.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Jargon",
    "/ˈdʒɑːrɡən/",
    "e",
    "The specialized terminology of a trade, chivalry, or falconry, often considered incomprehensible to outsiders.",
    "Old French 'jargon' (twittering of birds), imitative origin",
    "The master falconer spoke in the rich jargon of the mews.",
    "The Book of Saint Albans"
  ],
  [
    "Jape",
    "/dʒeɪp/",
    "m",
    "A joke, trick, or mocking jest, often performed by court jesters.",
    "Middle English 'japer' or Old French 'gaper'",
    "The fool played a merry jape upon the proud steward.",
    "Geoffrey Chaucer, The Canterbury Tales"
  ],
  [
    "Jaunce",
    "/dʒɔːns/",
    "e",
    "To prance or ride a horse proudly and restlessly.",
    "Old French 'jancer' (to stir or rush)",
    "He made his proud horse jaunce and curvet before the ladies in the gallery.",
    "William Shakespeare, Richard II"
  ],
  [
    "Jeopard",
    "/ˈdʒɛpərd/",
    "m",
    "To hazard, risk, or place in danger.",
    "Middle English 'jeoparden', from Old French 'jeu parti' (divided game)",
    "He would not jeopard his knightly honor for mere plunder.",
    "John Gower, Confessio Amantis"
  ],
  [
    "Jongleur",
    "/ʒɒŋˈɡlɜːr/",
    "m",
    "An itinerant medieval entertainer, jugurer, musician, and storyteller.",
    "Old French 'jongleur', from Latin 'joculator'",
    "A band of jongleurs entertained the feast with tumbling and songs of valor.",
    "Gesta Romanorum"
  ],
  [
    "Judicature",
    "/ˈdʒuːdɪkətʃər/",
    "e",
    "The authority or administration of justice; a court of law.",
    "Late Latin 'judicatura', from Latin 'judex'",
    "The baron held supreme judicature within his feudal demesne.",
    "Sir Edward Coke, Institutes of the Laws of England"
  ],
  [
    "Jump",
    "/dʒʌmp/",
    "e",
    "A short loose coat or tunic worn by men or women.",
    "Unknown origin, possibly related to French 'jupe'",
    "He doffed his doublet and threw on a plain canvas jump for working in the yard.",
    "The Diary of Henry Machyn"
  ],
  [
    "Jument",
    "/ˈdʒuːmənt/",
    "t",
    "A beast of burden, especially a draft horse or ass.",
    "Middle English and Latin 'jumentum' (draft animal)",
    "The peasants loaded the heavy carts upon weary juments.",
    "19th Century Glossaries of Archaic Words"
  ],
  [
    "Just-ice",
    "/ˈdʒʌstɪs/",
    "m",
    "Early spelling and concept of a magistrate or judicial administrator.",
    "Old French 'justice', from Latin 'justitia'",
    "The king's just-ice arrived to hold the county assizes.",
    "Assize of Clarendon"
  ],
  [
    "Jannock",
    "/ˈdʒænək/",
    "t",
    "Fair, straightforward, genuine, or honest; originally a kind of oat bread.",
    "Northern English dialect, origin uncertain",
    "His word was jannock, and no vassal doubted his loyalty.",
    "Dialect Dictionary of the North"
  ],
  [
    "Jet",
    "/dʒɛt/",
    "e",
    "To strut, swagger, or walk with an arrogant, stiff bearing.",
    "Old French 'jetter' or Middle English 'jetten'",
    "The young gallants began to jet about the castle courtyard.",
    "William Shakespeare, Twelfth Night"
  ],
  [
    "Jewel-house",
    "/ˈdʒuːəlhaʊs/",
    "e",
    "The royal treasury or chamber where crown jewels and regalia were kept.",
    "Middle English 'jewel' + 'hous'",
    "The royal crown was safely guarded within the castle jewel-house.",
    "Exchequer Records of Henry VIII"
  ],
  [
    "Jovial",
    "/ˈdʒoʊviəl/",
    "e",
    "Born under or influenced by the planet Jupiter; joyous, merry, and good-humored.",
    "Late Latin 'jovialis', from Latin 'Jove'",
    "The knights sat around the trestle table in jovial fellowship after the hunt.",
    "Ben Jonson, Every Man Out of His Humour"
  ],
  [
    "Jurat",
    "/ˈdʒʊəræt/",
    "m",
    "A municipal officer or sworn magistrate in certain medieval boroughs.",
    "Latin 'juratus' (sworn)",
    "The mayor and the jurats assembled at the guildhall to ratify the charter.",
    "Municipal Records of Sandwich"
  ],
  [
    "Justal",
    "/ˈdʒʌstəl/",
    "m",
    "An archaic variant of jousting or tournament combat.",
    "Old French 'joustal'",
    "Many famous knights gathered for the grand justal at Westminster.",
    "Historical Chronicles of London"
  ],
  [
    "Jamb",
    "/dʒæm/",
    "m",
    "The side post or vertical face of a doorway, castle gate, or fireplace.",
    "Old French 'jambe' (leg)",
    "The heavy iron bolts of the castle gate slid firmly into the stone jambs.",
    "Building Accounts of Edward I"
  ],
  [
    "Javelin",
    "/ˈdʒævəlɪn/",
    "m",
    "A light throwing spear used by foot soldiers and huntsmen.",
    "Old French 'javelot', diminutive of 'javel' (spear)",
    "The foresters carried hunting bows and heavy iron-tipped javelins.",
    "Forest Laws of the Medieval Realm"
  ],
  [
    "Jape-worthy",
    "/ˈdʒeɪpwɜːrði/",
    "m",
    "Deserving of mockery, ridicule, or a practical joke.",
    "Middle English 'jape' + 'worthy'",
    "The cowardly knight's boastful speech was jape-worthy.",
    "Chaucerian Apocrypha"
  ],
  [
    "Journer",
    "/ˈdʒɜːrnər/",
    "m",
    "A traveler, journeyman, or one who makes a day's journey.",
    "Old French 'journer' (to spend the day)",
    "Weary journers sought shelter within the monastery gatehouse.",
    "Monastic Guest Registers"
  ],
  [
    "Joyance",
    "/ˈdʒɔɪəns/",
    "e",
    "Mirth, festivity, or joyful celebration.",
    "Old French 'joiance'",
    "The great hall echoed with music and high joyance during the Yuletide feast.",
    "Edmund Spenser, The Faerie Queene"
  ],
  [
    "Jack-a-Lent",
    "/ˌdʒækəˈlɛnt/",
    "e",
    "A puppet or effigy thrown at during Lent, or a small, insignificant person.",
    "From the proper name Jack + Lent",
    "He treated the insolent pageboy like a mere Jack-a-Lent.",
    "William Shakespeare, The Merry Wives of Windsor"
  ],
  [
    "Jurat-court",
    "/ˈdʒʊərætˌkɔːrt/",
    "m",
    "A medieval court presided over by sworn town magistrates.",
    "Latin 'juratus' + English 'court'",
    "The dispute over the market stall was brought before the jurat-court.",
    "Channel Islands Historical Charters"
  ],
  [
    "Jossakeed",
    "/ˈdʒɒsəkiːd/",
    "t",
    "A native medicine man or healer (sometimes adapted in Victorian travel literature).",
    "Algonquian origin, recorded by 19th-century explorers",
    "The traveler met with local healers akin to foreign jossakeeds.",
    "Victorian Exploration Journals"
  ],
  [
    "Jumentous",
    "/dʒuːˈmɛntəs/",
    "t",
    "Resembling the urine of a beast of burden; thick and strong-smelling.",
    "Latin 'jumentum'",
    "The apothecary diagnosed the fever by the jumentous quality of the sample.",
    "17th-19th Century Medical Lexicons"
  ],
  [
    "Jardiniere",
    "/ˌʒɑːrdɪˈnɛər/",
    "t",
    "An ornamental pot or stand for plants and flowers in a grand manor house.",
    "French 'jardinière' (female gardener)",
    "Massive bronze jardinières filled with ferns adorned the castle orangerie.",
    "Victorian Country House Inventories"
  ],
  [
    "Jerque",
    "/dʒɜːrk/",
    "e",
    "To search a ship or cargo for uncustomed or smuggled goods.",
    "Unknown origin, used by Elizabethan customs officials",
    "The port officers boarded the merchant cog to jerque her hold.",
    "Elizabethan Admiralty Records"
  ],
  [
    "Jerquer",
    "/ˈdʒɜːrkər/",
    "e",
    "A custom-house officer who searches ships for smuggled merchandise.",
    "Derivative of 'jerque'",
    "The diligent jerquer found hidden bales of foreign wool beneath the ballast.",
    "Customs Rolls of London"
  ],
  [
    "Joist",
    "/dʒɔɪst/",
    "m",
    "One of the parallel timbers supporting a floor or ceiling in a castle great hall.",
    "Old French 'giste', from Latin 'jacere' (to lie)",
    "The carpenters hewed massive oak joists for the upper solar.",
    "Medieval Carpentry Guild Contracts"
  ],
  [
    "Journality",
    "/dʒɜːrˈnæləti/",
    "t",
    "Daily record-keeping or the routine business of a day.",
    "French 'journal'",
    "The bailiff entered the daily yields in his parchment journality.",
    "Manorial Estate Accounts"
  ],
  [
    "Jubilee",
    "/ˈdʒuːbɪliː/",
    "m",
    "A special anniversary of a sovereign's reign or a time of festive emancipation.",
    "Latin 'jubilaeus', from Hebrew 'yobhel'",
    "The king proclaimed a royal jubilee with pardons for minor felons.",
    "Chronicles of the Realm"
  ],
  [
    "Judicable",
    "/ˈdʒuːdɪkəbəl/",
    "e",
    "Capable of being judged, tried, or settled by a court of law.",
    "Late Latin 'judicabilis'",
    "The boundary dispute between the two barons was judicable by the king's council.",
    "Legal Treatises of the Realm"
  ],
  [
    "Jugulate",
    "/ˈdʒuːɡjuːleɪt/",
    "e",
    "To cut the throat of; to slay or suppress swiftly.",
    "Latin 'jugulare', from 'jugulum' (collarbone/throat)",
    "The assassin crept through the dark solar to jugulate his sleeping foe.",
    "Renaissance Historical Translations"
  ],
  [
    "Junco",
    "/ˈdʒʌŋkoʊ/",
    "t",
    "An archaic term once applied to various small migratory birds.",
    "Spanish 'junco' (rush or reed)",
    "Flocks of small juncos darted among the winter reeds by the castle moat.",
    "Ornithological Records"
  ],
  [
    "Jurisconsult",
    "/ˈdʒʊərɪsˌkɒnsʌlt/",
    "e",
    "An expert in law; a legal advisor or jurisconsultant.",
    "Latin 'jurisconsultus'",
    "The lord summoned a learned jurisconsult to interpret the ancient feudal charter.",
    "State Papers of Elizabeth I"
  ],
  [
    "Justiciary",
    "/dʒʌˈstɪʃiəri/",
    "m",
    "Relating to the administration of justice or a high magistrate.",
    "Medieval Latin 'justiciarius'",
    "The justiciary rolls recorded the fines levied in the county court.",
    "Pipe Rolls of Henry II"
  ],
  [
    "Jumentarious",
    "/ˌdʒuːmənˈtɛəriəs/",
    "t",
    "Pertaining to beasts of burden or pack animals.",
    "Latin 'jumentarius'",
    "The jumentarious train carried provisions for the royal army.",
    "Historical Lexicons of Rare English"
  ],
  [
    "Jess",
    "/dʒɛs/",
    "m",
    "A short leather strap tied around the leg of a hawk or falcon, attached to the leash.",
    "Old French 'gect' or 'jact', from Latin 'jactare'",
    "The falconer mended the silken jesses on his prized goshawk.",
    "The Boke of Hawking"
  ],
  [
    "Jump-gate",
    "/ˈdʒʌmpɡeɪt/",
    "m",
    "A fortified postern or small secondary gate in a castle wall designed for sudden sallies.",
    "Middle English 'jump' (sally) + 'gate'",
    "The garrison launched a surprise counter-attack through the castle jump-gate.",
    "Siege Accounts of the Hundred Years' War"
  ],
  [
    "Kail",
    "/keɪl/",
    "m",
    "Cabbage or colewort, a staple vegetable in medieval peasant pottage and diet.",
    "Old English cāl, from Latin caulis (stem, cabbage).",
    "They supped upon warm kail and coarse rye bread before the watch began.",
    "Middle English Household Rolls"
  ],
  [
    "Kail-yard",
    "/keɪlˌjɑːrd/",
    "m",
    "A kitchen garden or vegetable patch adjacent to a medieval cottage or manor.",
    "Scots and Northern Middle English kail + yard.",
    "The serf tended his modest kail-yard behind the timber-framed hovel.",
    "Monastic Estate Records"
  ],
  [
    "Kaleis",
    "/kəˈleɪs/",
    "m",
    "A stalk of cabbage or kale.",
    "Middle English, variant of kail.",
    "He gathered stray kaleis to toss into the iron stew pot.",
    "Piers Plowman"
  ],
  [
    "Kale-wife",
    "/keɪlˌwaɪf/",
    "m",
    "A woman who sells greens or vegetables in the medieval market.",
    "Middle English kail + wife.",
    "The loud-voiced kale-wife argued over the price of turnips.",
    "York Mystery Plays"
  ],
  [
    "Kall",
    "/kɔːl/",
    "m",
    "A woman's close-fitting cap, caul, or hairnet, often worn by noble ladies.",
    "Middle English calle, of uncertain origin.",
    "Her golden tresses were restrained beneath a jeweled kall of silk.",
    "Chaucer, The Canterbury Tales"
  ],
  [
    "Kamaunten",
    "/kəˈmaʊntən/",
    "m",
    "To command, order, or direct.",
    "Middle English, from Old French comander.",
    "The baron did kamaunten his men-at-arms to secure the bailey gate.",
    "Gawain and the Green Knight"
  ],
  [
    "Kame",
    "/keɪm/",
    "m",
    "A comb, used for grooming hair or dressing wool.",
    "Old English camb.",
    "She smoothed her long locks with an ivory kame.",
    "Cursor Mundi"
  ],
  [
    "Kamen",
    "/ˈkɑːmən/",
    "m",
    "To comb or groom.",
    "Old English cambian.",
    "The squire spent the morning to kamen the warhorse's mane.",
    "Chivalric Romances"
  ],
  [
    "Kantle",
    "/ˈkæntəl/",
    "m",
    "A corner, segment, or small slice of something, such as land or bread.",
    "Middle English cantel, from Old French cantel.",
    "He claimed a small kantle of the forest for his firewood.",
    "The Owl and the Nightingale"
  ],
  [
    "Kark",
    "/kɑːrk/",
    "m",
    "Anxiety, burden, worry, or heavy care.",
    "Old English carc, of Germanic origin.",
    "The knight bore the kark of his broken oath upon his soul.",
    "Hali Meidenhad"
  ],
  [
    "Karken",
    "/ˈkɑːrkən/",
    "m",
    "To load, burden, or afflict with worry.",
    "Old English carcian.",
    "Do not karken your mind with the threats of rival lords.",
    "Ancrene Wisse"
  ],
  [
    "Karkas",
    "/ˈkɑːrkəs/",
    "m",
    "A dead body or carcass; also an iron framework for a fire basket.",
    "Middle English carcays, from Old French carcois.",
    "The slain deer's karkas was hoisted to the castle larder.",
    "Liber Quotidianus"
  ],
  [
    "Karl",
    "/kɑːrl/",
    "m",
    "A free peasant, fellow, churl, or man of lower social rank.",
    "Old English ceorl.",
    "A sturdy karl stood at the gate holding a stout ash staff.",
    "Anglo-Saxon Chronicle"
  ],
  [
    "Karlish",
    "/ˈkɑːrlɪʃ/",
    "m",
    "Boorish, peasant-like, or churlish in manner.",
    "Old English ceorlisc.",
    "His rough, karlish behavior ill-suited the royal court.",
    "Wycliffe Bible"
  ],
  [
    "Karth",
    "/kɑːrθ/",
    "m",
    "A cart or heavy two-wheeled vehicle used for farm transport.",
    "Old English cræt, influenced by Old Norse.",
    "The harvest karth rumbled slowly over the muddy track.",
    "Domesday Book Glossary"
  ],
  [
    "Katel",
    "/ˈkætəl/",
    "m",
    "Personal property, chattels, or livestock.",
    "Middle English catel, from Old French chatel.",
    "The invading raiders seized all the village katel and grain.",
    "Pipe Rolls"
  ],
  [
    "Kater",
    "/ˈkeɪtər/",
    "m",
    "A provider of provisions, buyer of food, or caterer for a noble household.",
    "Middle English acater, from Old French achateour.",
    "The castle kater returned from the town market laden with fish and spices.",
    "Household Ordinance of Edward II"
  ],
  [
    "Kay",
    "/keɪ/",
    "m",
    "A wharf, quay, or landing place for boats by a castle moat or river.",
    "Middle English kay, from Old French kay.",
    "The supply barge docked securely at the castle kay.",
    "London Port Records"
  ],
  [
    "Keel",
    "/kiːl/",
    "m",
    "To cool a hot liquid, often by stirring; also to skim.",
    "Old English cēlan.",
    "She stood by the brew-vat to keel the boiling wort.",
    "Shakespeare, Love's Labour's Lost"
  ],
  [
    "Keep",
    "/kiːp/",
    "m",
    "The central tower or donjon of a medieval castle, serving as the last refuge.",
    "Old English cēpan (to protect, attend), later architectural sense in Middle English.",
    "The garrison retreated into the great keep as the outer wall fell.",
    "Chronicles of the Crusades"
  ],
  [
    "Keepe",
    "/kiːp/",
    "m",
    "Care, heed, notice, or attention.",
    "Old English cēp.",
    "Take good keepe of the postern gate when the fog rolls in.",
    "Gower, Confessio Amantis"
  ],
  [
    "Keight",
    "/keɪt/",
    "m",
    "Caught, seized, or captured.",
    "Middle English, past tense of kighten/catch.",
    "The fleeing felon was keight by the bailiff's hounds.",
    "Spenser, The Faerie Queene"
  ],
  [
    "Kell",
    "/kɛl/",
    "m",
    "A caul, net, or the membrane enclosing a fetus.",
    "Middle English kelled, from Old Norse.",
    "The newborn child was born within a lucky kell.",
    "Bartholomaeus Anglicus"
  ],
  [
    "Keme",
    "/kiːm/",
    "m",
    "To comb hair or flax.",
    "Old English cēman.",
    "She sat by the hearth to keme her golden hair.",
    "Cursor Mundi"
  ],
  [
    "Kennen",
    "/ˈkɛnən/",
    "m",
    "To know, recognize, perceive, or teach.",
    "Old English cennan.",
    "Few men can kennen the secret paths through the marsh.",
    "Layamon's Brut"
  ],
  [
    "Kent",
    "/kɛnt/",
    "m",
    "Known, perceived, or made known.",
    "Middle English, past participle of kennen.",
    "His prowess in the tournament was well kent across the realm.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Kerchief",
    "/ˈkɜːrtʃɪf/",
    "m",
    "A square piece of cloth worn by women on the head or neck.",
    "Middle English curchief, from Old French cuevrechief.",
    "She dropped her silken kerchief from the battlement for her knight.",
    "Chaucer, Troilus and Criseyde"
  ],
  [
    "Kern",
    "/kɜːrn/",
    "m",
    "A light-armed foot soldier, typically Irish or Highland mercenary.",
    "Middle English ceithern, from Irish cathern.",
    "The lord hired a band of wild kerns to raid the borderlands.",
    "Irish Annals"
  ],
  [
    "Kerning",
    "/ˈkɜːrnɪŋ/",
    "m",
    "Standing tall, proud, or vigorous.",
    "Middle English, of uncertain origin.",
    "The young squire rode forth looking kerning upon his steed.",
    "Alliterative Morte Arthure"
  ],
  [
    "Kessel",
    "/ˈkɛsəl/",
    "m",
    "A large iron kettle or cauldron for cooking.",
    "Old English cetel, kettel.",
    "A hearty mutton stew bubbled within the great kessel over the fire.",
    "Monastic Kitchen Inventories"
  ],
  [
    "Kettle-hat",
    "/ˈkɛtəlˌhæt/",
    "m",
    "A type of steel combat helmet with a wide brim, common among medieval infantry.",
    "Middle English ketelhāt.",
    "The footmen buckled their kettle-hats tightly before the charge.",
    "Effigy Monument Records"
  ],
  [
    "Kevel",
    "/ˈkɛvəl/",
    "m",
    "A wooden peg, bit for a horse, or heavy hammer.",
    "Old English cefel (jaw, gag).",
    "The unruly prisoner was silenced with a wooden kevel.",
    "Promptorium Parvulorum"
  ],
  [
    "Kib",
    "/kɪb/",
    "m",
    "An iron-tipped staff or walking stick.",
    "Middle English kibbe.",
    "He leaned heavily upon his stout kib as he climbed the hill.",
    "Piers Plowman"
  ],
  [
    "Kichest",
    "/ˈkɪtʃəst/",
    "m",
    "Kitchen, cooking area of a castle or manor house.",
    "Middle English kichene, variant forms.",
    "The smoke billowed forth from the great stone kichest.",
    "Household Rolls of Bishop Swinfield"
  ],
  [
    "Kid",
    "/kɪd/",
    "m",
    "A bundle of brushwood or faggots used for kindling castle fires.",
    "Middle English kidde, from Old Norse.",
    "The serf hauled a cartload of kids to fuel the bakehouse oven.",
    "Manorial Court Rolls"
  ],
  [
    "Kike",
    "/kaɪk/",
    "m",
    "To look, gaze, or peer about.",
    "Middle English kiken.",
    "He stood upon the wall to kike across the open valley.",
    "The Owl and the Nightingale"
  ],
  [
    "Kin",
    "/kɪn/",
    "m",
    "Family, blood relatives, or clan members bound by feudal ties.",
    "Old English cyn.",
    "He called upon his kin to avenge the honor of his house.",
    "Beowulf"
  ],
  [
    "Kind",
    "/kaɪnd/",
    "m",
    "Nature, natural disposition, or birthright.",
    "Old English gecynde.",
    "It is against his noble kind to flee from a fair fight.",
    "King Horn"
  ],
  [
    "Kinde",
    "/ˈkɪndə/",
    "m",
    "Naturally, by birth, or inherently.",
    "Old English gecynde.",
    "A true knight is kinde disposed to mercy and valor.",
    "Ancrene Wisse"
  ],
  [
    "Kirk",
    "/kɜːrk/",
    "m",
    "A church, place of Christian worship, especially in northern dialects.",
    "Old English cirice, influenced by Old Norse kirkja.",
    "The villagers gathered outside the stone kirk for mass.",
    "Northern Homily Cycle"
  ],
  [
    "Launce",
    "/lɔːns/",
    "m",
    "A medieval spear or heavy cavalry lance used by knights.",
    "Middle English, from Old French lance, from Latin lancea.",
    "He bare a mighty launce of steele in his hand.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Larderer",
    "/ˈlɑːrdərər/",
    "m",
    "An officer in charge of a castle's larder and meat stores.",
    "Middle English, from Anglo-Norman larderer.",
    "The larderer must oversee the salting of the winter swine.",
    "Household ordinances of Edward II"
  ],
  [
    "Largesse",
    "/lɑːrˈdʒɛs/",
    "m",
    "Liberality in bestowing gifts, expected of a noble lord or knight.",
    "Middle English, from Old French largesse, from Latin largitia.",
    "The king distributed great largesse to the visiting minstrels.",
    "Chaucer, The Canterbury Tales"
  ],
  [
    "Laton",
    "/ˈleɪtən/",
    "m",
    "A mixed metal of yellow color, resembling brass, used for monumental brasses and vessels.",
    "Middle English, from Old French laton, ultimately of Arabic origin.",
    "His effigy upon the tomb was cast in fine laton.",
    "Medieval church inventories"
  ],
  [
    "Latimer",
    "/ˈlætɪmər/",
    "m",
    "An interpreter, specifically one who translated Latin or served during the Crusades.",
    "Middle English, alteration of Old French latinier.",
    "The baron employed a skilled latimer to parley with the Saracens.",
    "Gesta Regis Henrici Secundi"
  ],
  [
    "Latticer",
    "/ˈlætɪsər/",
    "m",
    "A maker of lattice-work windows or gates for fortifications.",
    "Middle English, derivative of lattice.",
    "The latticer repaired the castle window grates before winter.",
    "London Guild Records"
  ],
  [
    "Launcegaye",
    "/ˈlɔːnsəɡeɪ/",
    "m",
    "An offensive weapon resembling a spear, banned by several medieval English statutes.",
    "Middle English, compound of lance and gay (a type of spear).",
    "No man shall ride armed with a launcegaye within the city.",
    "Statutes of the Realm, 7 Richard II"
  ],
  [
    "Lazar",
    "/ˈleɪzər/",
    "m",
    "A leper, or a person afflicted with a loathsome contagious disease.",
    "Middle English, from Biblical Lazarus.",
    "A company of lazars sat begging outside the abbey gates.",
    "Wycliffe Bible"
  ],
  [
    "Lazarhouse",
    "/ˈleɪzərhaʊs/",
    "m",
    "A hospital or house for the reception of lepers.",
    "Middle English, lazar + hous.",
    "They endowed a lazarhouse beyond the eastern wall.",
    "Monasticon Anglicanum"
  ],
  [
    "Leaguer",
    "/ˈliːɡər/",
    "e",
    "A military camp or the siege of a fortified place.",
    "Dutch leger (camp).",
    "The royal army maintained a strict leaguer around the rebellious castle.",
    "Shakespeare, All's Well That Ends Well"
  ],
  [
    "Lecher",
    "/ˈlɛtʃər/",
    "m",
    "A debauched person, often cited in manorial court rolls for moral transgressions.",
    "Middle English, from Old French lechier.",
    "He was fined fourpence in the manor court for being a notorious lecher.",
    "Manorial Court Rolls of Wakefield"
  ],
  [
    "Leet",
    "/liːt/",
    "m",
    "A local court of record held periodically by a lord of a manor.",
    "Middle English, from Old English lǣt or Old Norse.",
    "All tenants were summoned to attend the lord's court leet.",
    "Select Pleas of the Crown"
  ],
  [
    "Leiger",
    "/ˈliːdʒər/",
    "e",
    "A resident ambassador or minister stationed at a foreign court.",
    "Middle English, variant of ledger (stationary).",
    "The English leiger sent secret dispatches concerning the Spanish fleet.",
    "Sir Henry Wotton, Letters"
  ],
  [
    "Lenticular",
    "/lɛnˈtɪkjʊlər/",
    "e",
    "Having the shape of a lens, sometimes used in early armor plating terminology.",
    "Latin lenticularis.",
    "The breastplate was forged with lenticular ridges to deflect blows.",
    "Tudor armory inventories"
  ],
  [
    "Lentil",
    "/ˈlɛntɪl/",
    "m",
    "A common pulse crop grown by medieval peasants for pottage.",
    "Middle English, from Old French lentille, from Latin lenticula.",
    "The serfs dined upon black bread and a steaming pot of lentils.",
    "Piers Plowman"
  ],
  [
    "Leod",
    "/liːd/",
    "m",
    "A people, nation, or country; also a vassal or man.",
    "Old English lēod.",
    "The brave leod defended his lord unto the death.",
    "Beowulf"
  ],
  [
    "Leodgate",
    "/ˈliːdɡeɪt/",
    "m",
    "A public gate or highway gate leading into a town or manor.",
    "Old English lēod-ġeat.",
    "They barred the leodgate against the approaching raiders.",
    "Anglo-Saxon Charters"
  ],
  [
    "Leof",
    "/liːf/",
    "m",
    "Dear, beloved, or pleasing; used as an affectionate prefix or term.",
    "Old English lēof.",
    "Come hither, my leof lord, and hear my petition.",
    "The Exeter Book"
  ],
  [
    "Lept",
    "/lɛpt/",
    "m",
    "A small coin or mite, symbolizing a tiny offering.",
    "Middle English, from Greek lepton.",
    "She gave her final lept to the building of the chapel.",
    "Middle English Sermon Collection"
  ],
  [
    "Lere",
    "/lɪər/",
    "m",
    "Learning, lore, or instruction given by a master or priest.",
    "Old English lǣr.",
    "The young squire heeded the wise lere of the veteran knight.",
    "Cursor Mundi"
  ],
  [
    "Lessen",
    "/ˈlɛsən/",
    "e",
    "To diminish or reduce in rank or feudal power.",
    "Middle English, from less + -en.",
    "The baron feared the king would lessen his ancient manorial rights.",
    "State Papers of Henry VIII"
  ],
  [
    "Leviner",
    "/lɛˈvaɪnər/",
    "m",
    "A type of medieval foot soldier or light armed warrior.",
    "Middle English, from Old French leviner.",
    "The leviner darted swiftly across the drawbridge.",
    "Chronicles of Froissart"
  ],
  [
    "Lewte",
    "/ˈluːtə/",
    "m",
    "Loyalty, fidelity, or legal rectitude.",
    "Middle English, from Old French leauté.",
    "He swore an oath of leute to his liege lord upon the altar.",
    "Gower, Confessio Amantis"
  ],
  [
    "Ley",
    "/leɪ/",
    "m",
    "Unplowed arable land or pasture; fallow land within the manorial system.",
    "Old English lēah.",
    "The sheep grazed peacefully upon the manor ley.",
    "Domesday Book terminology"
  ],
  [
    "Libell",
    "/lɪˈbɛl/",
    "m",
    "A formal written declaration, petition, or legal charge in an ecclesiastical court.",
    "Middle English, from Latin libellus.",
    "The bishop presented a formal libell against the heretic.",
    "Ecclesiastical Court Records"
  ],
  [
    "Liberat",
    "/ˈlɪbəræt/",
    "m",
    "A medieval writ issuing from the royal chancery ordering payment or delivery.",
    "Latin liberate (deliver).",
    "The sheriff received a royal liberat for the repair of the keep.",
    "Close Rolls of the Reign of King John"
  ],
  [
    "Libertie",
    "/ˈlɪbərtiː/",
    "m",
    "A district or domain held by a baron exempt from ordinary sheriff jurisdiction.",
    "Middle English, from Latin libertas.",
    "The abbot exercised full judicial rights within the abbey libertie.",
    "Charter Rolls"
  ],
  [
    "Licence",
    "/ˈlaɪsəns/",
    "m",
    "Formal permission from a king to crenellate or fortify a manor house.",
    "Middle English, from Old French licence.",
    "He obtained a royal licence to crenellate his manor in stone.",
    "Patent Rolls, Edward III"
  ],
  [
    "Lieger",
    "/ˈliːdʒər/",
    "m",
    "An ambassador or resident representative at a feudal court.",
    "Middle English variant of ledger.",
    "The duke sent a lieger to negotiate the marriage alliance.",
    "Paston Letters"
  ],
  [
    "Liegeman",
    "/ˈliːdʒmæn/",
    "m",
    "A vassal bound by oath to perform fealty and military service to a liege lord.",
    "Middle English, liege + man.",
    "Every liegeman appeared at the muster with shield and spear.",
    "Chronicles of St. Albans"
  ],
  [
    "Lief",
    "/liːf/",
    "m",
    "Beloved, cherished, or willingly.",
    "Old English lēof.",
    "I had as lief perish as surrender my honor.",
    "Chaucer, Troilus and Criseyde"
  ],
  [
    "Ligne",
    "/liːn/",
    "m",
    "Lineage, descent, or noble pedigree.",
    "Old French ligne.",
    "He was sprung from a noble ligne of crusading knights.",
    "Gesta Henrici Quinti"
  ],
  [
    "Ligurite",
    "/ˈlɪɡjʊraɪt/",
    "t",
    "An ancient gemstone mentioned in medieval lapidaries, prized for talismanic properties.",
    "Latin ligurius.",
    "The bishop's ring was set with a luminous ligurite.",
    "Medieval Lapidary Texts"
  ],
  [
    "Limiter",
    "/ˈlɪmɪtər/",
    "m",
    "A friar licensed to beg within a certain fixed district or limit.",
    "Middle English, from limit.",
    "The greasy limiter begged alms at the castle buttery.",
    "Chaucer, Summoner's Tale"
  ],
  [
    "Limner",
    "/ˈlɪmər/",
    "m",
    "An illuminator of manuscripts or painter of miniatures in medieval books.",
    "Middle English, contraction of enluminer.",
    "The master limner applied pure gold leaf to the initial letter.",
    "Monastic scriptorium records"
  ],
  [
    "Lined",
    "/laɪnd/",
    "e",
    "Strengthened, fortified, or reinforced with men and supplies.",
    "Middle English, past participle of line.",
    "The gateway was lined with pikemen to repel the assault.",
    "Shakespeare, King Henry IV"
  ],
  [
    "Lode",
    "/loʊd/",
    "m",
    "A way, course, or watercourse; also a vein of metal ore in a mine.",
    "Old English lād.",
    "The miners followed a rich lode of silver deep beneath the hill.",
    "Early mining laws of the Peak District"
  ],
  [
    "Lodeman",
    "/ˈloʊdmæn/",
    "m",
    "A pilot or guide who navigates a ship through difficult waters.",
    "Middle English, lode + man.",
    "The skilled lodeman steered the cog safely past the perilous shoals.",
    "Black Book of the Admiralty"
  ],
  [
    "Lodestar",
    "/ˈloʊdstɑːr/",
    "m",
    "The North Star, used by medieval navigators for guidance.",
    "Middle English, lode + sterre.",
    "The mariners watched the lodestar through the stormy night.",
    "Gower, Confessio Amantis"
  ],
  [
    "Logis",
    "/ˈloʊʒɪs/",
    "m",
    "Lodging, quarters, or temporary habitation for an army.",
    "Old French logis.",
    "The knights were assigned their logis within the bailey.",
    "Froissart's Chronicles"
  ],
  [
    "Lombard",
    "/ˈlɒmbɑːrd/",
    "m",
    "A medieval Italian banker or moneylender operating in England.",
    "Middle English, from Italian Lombardo.",
    "The baron borrowed heavily from the Lombard merchants of London.",
    "Statutes of Edward I"
  ],
  [
    "Longbow",
    "/ˈlɒŋboʊ/",
    "m",
    "A powerful medieval type of long wooden bow that played a decisive role in warfare.",
    "Middle English, long + bow.",
    "The archers drew their longbows with deadly precision.",
    "Froissart, Chronicles"
  ],
  [
    "Lorel",
    "/ˈlɒrəl/",
    "m",
    "A worthless person, scoundrel, or vagabond.",
    "Middle English, perhaps related to losel.",
    "Away, you wretched lorel, and trouble not the court.",
    "The Towneley Plays"
  ],
  [
    "Losel",
    "/ˈloʊzəl/",
    "m",
    "A good-for-nothing, worthless fellow or rogue.",
    "Middle English losel, from losian (to perish).",
    "The idle losel was driven from the manor bounds.",
    "Piers Plowman"
  ],
  [
    "Meinie",
    "/ˈmeɪni/",
    "m",
    "A lord's household, retinue of retainers, or body of armed followers.",
    "Middle English, from Old French megnie (household).",
    "The baron rode forth with his loyal meinie trailing behind his banner.",
    "Chaucer, The Canterbury Tales"
  ],
  [
    "Muck-ender",
    "/ˈmʌkˌɛndər/",
    "e",
    "A pocket handkerchief used for wiping away sweat, mud, or tears.",
    "Elizabethan colloquialism, combining 'muck' and 'ender'.",
    "He drew out a soiled muck-ender to wipe the soot from his brow after the siege.",
    "Thomas Dekker, The Gull's Hornbook"
  ],
  [
    "Marcher",
    "/ˈmɑːrtʃər/",
    "m",
    "A nobleman or soldier guarding the volatile borderlands or frontiers of a kingdom.",
    "Middle English, from Anglo-Norman marcher.",
    "The powerful marcher lords held vast autonomous jurisdictions along the Welsh frontier.",
    "Statutes of the Realm"
  ],
  [
    "Mantle",
    "/ˈmæntəl/",
    "m",
    "A loose, sleeveless cloak or cape worn over garments, often fastened with a jeweled brooch.",
    "Middle English, from Old French mantel, from Latin mantellum.",
    "Her velvet mantle was trimmed with ermine to signify her high noble station.",
    "Malory, Le Morte d'Arthur"
  ],
  [
    "Malison",
    "/ˈmælɪzən/",
    "m",
    "A curse, malediction, or invocation of evil upon someone.",
    "Middle English, from Old French maleïçon, from Latin maledictio.",
    "The dying king laid a bitter malison upon any who should desecrate his tomb.",
    "Cursor Mundi"
  ],
  [
    "Messager",
    "/ˈmɛsədʒər/",
    "m",
    "A formal herald, courier, or bearer of dispatch between warring castles.",
    "Middle English, variant of messenger, from Old French messagier.",
    "A swift messager arrived bearing terms of surrender from the besieged garrison.",
    "Gower, Confessio Amantis"
  ],
  [
    "Miniver",
    "/ˈmɪnɪvər/",
    "m",
    "A costly fur, consisting of white ermine mixed with grey belly fur, used to line royal garments.",
    "Middle English, from Old French miniver (menu vair, 'small variegated').",
    "His state robes were lavishly bordered with miniver and scarlet wool.",
    "Piers Plowman"
  ],
  [
    "Muck-heap",
    "/ˈmʌkˌhiːp/",
    "m",
    "A pile of dung, refuse, and manure accumulated in the castle bailey or stableyard.",
    "Middle English, from muck + heap.",
    "The rogue hid behind the castle's great muck-heap to escape the town watch.",
    "The Towneley Plays"
  ],
  [
    "Mullion",
    "/ˈmʌljən/",
    "m",
    "A vertical slender bar or pier dividing the lights of a large gothic window.",
    "Middle English, of uncertain origin, possibly from Old French moulure.",
    "The stone mullion of the chapel window was shattered by a catapult stone.",
    "Architectural Building Accounts of Westminster"
  ],
  [
    "Mortier",
    "/ˈmɔːrtieɪ/",
    "m",
    "A short, heavy medieval cannon or mortar used for lobbing stone balls over castle walls.",
    "Middle English, from Old French mortier (mortar for grinding, later the siege weapon).",
    "The engineers primed the great mortier to breach the lower barbican.",
    "Chronicles of Froissart"
  ],
  [
    "Morrow-speech",
    "/ˈmɒroʊˌspiːtʃ/",
    "m",
    "A formal meeting or council held on the morning following a feast or major event.",
    "Middle English, from morrow + speech.",
    "The guildmasters convened for a morrow-speech to address the charter grievances.",
    "Guild Records of London"
  ],
  [
    "Mull",
    "/mʌl/",
    "e",
    "To heat, sweeten, and spice wine or ale; also to ponder or study deeply.",
    "Late 16th-century English, of uncertain origin.",
    "The squires gathered by the hearth to mull claret with cloves and cinnamon.",
    "Shakespeare, Twelfth Night"
  ],
  [
    "Micher",
    "/ˈmiːtʃər/",
    "m",
    "A sneaky vagabond, pilferer, or one who skulks about in hiding to avoid work.",
    "Middle English, from Old French michier (to lurk, shirk).",
    "A wretched micher was caught trying to snip the silver buttons off a baron's doublet.",
    "Piers Plowman"
  ],
  [
    "Mandement",
    "/ˈmændəmənt/",
    "m",
    "A formal royal or papal command, mandate, or written edict.",
    "Middle English, from Old French mandement.",
    "The bailiff read out the king's mandement demanding immediate feudal tax arrears.",
    "Rotuli Parliamentorum"
  ],
  [
    "Morn-star",
    "/ˈmɔːrnˌstɑːr/",
    "m",
    "A military club featuring a spiked metal head mounted on a wooden shaft; a morningstar.",
    "Middle English, from morn + star.",
    "He swung his heavy morn-star with crushing force against the knight's iron helm.",
    "Alliterative Morte Arthure"
  ],
  [
    "Meed",
    "/miːd/",
    "m",
    "A deserved reward, recompense, or prize, often earned through martial valor or service.",
    "Old English mēd (reward, pay).",
    "The victorious champion accepted a golden circlet as his rightful meed.",
    "Beowulf"
  ],
  [
    "Mantle-tree",
    "/ˈmæntəlˌtriː/",
    "m",
    "The horizontal beam of wood or stone supporting the masonry above a great hall fireplace.",
    "Middle English, from mantle + tree (beam).",
    "Hanging broadswords were displayed proudly above the massive stone mantle-tree.",
    "Household Inventories of the Earl of Northumberland"
  ],
  [
    "Marshalsea",
    "/ˈmɑːrʃəlsiː/",
    "m",
    "A court or prison under the jurisdiction of the Earl Marshal, dealing with military offenses.",
    "Middle English, from Old French mareschaucie.",
    "The rebellious archer was cast deep into the grim cells of the Marshalsea.",
    "Patent Rolls of Edward III"
  ],
  [
    "Marrow-bone",
    "/ˈmærəˌboʊn/",
    "m",
    "A bone containing rich marrow, prized in medieval cookery for thickening potages and broths.",
    "Middle English, from marrow + bone.",
    "The castle cook added roasted marrow-bones to thicken the venison stew.",
    "The Forme of Cury"
  ],
  [
    "Malt-horse",
    "/ˈmɔːltˌhɔːrs/",
    "e",
    "A heavy, slow draft horse used for carrying sacks of malt to the mill; a dull-witted person.",
    "Elizabethan English, from malt + horse.",
    "You heavy malt-horse, lift your feet and carry this armor to the armory at once!",
    "Shakespeare, The Comedy of Errors"
  ],
  [
    "Mump",
    "/mʌmp/",
    "e",
    "To grimace, pout, or mutter sullenly; also to beg or sponge off others.",
    "Late 16th-century English, akin to Flemish momkelen (to mutter).",
    "Why do you mump and sulk by the buttery hatch when the ale flows freely?",
    "Ben Jonson, Every Man in His Humour"
  ],
  [
    "Merestone",
    "/ˈmɪərˌstoʊn/",
    "m",
    "A boundary stone marking the limits of a feudal estate, manor, or kingdom.",
    "Middle English, from mere (boundary) + stone.",
    "The peasants shifted the old merestone under cover of night to steal pasture land.",
    "John Rastell, Termes de la Ley"
  ],
  [
    "Miscreance",
    "/ˈmɪskriəns/",
    "m",
    "Unbelief, heresy, or false religious faith, particularly applied to non-Christians.",
    "Middle English, from Old French mescreance.",
    "The crusaders vowed to purge the Holy Land of all miscreance and idolatry.",
    "Gesta Romanorum"
  ],
  [
    "Monial",
    "/ˈmoʊniəl/",
    "m",
    "An archaic term for a nun or female monastic recluse.",
    "Middle English, from Old French monial, from Late Latin monialis.",
    "The pious monial offered daily prayers for the souls of fallen knights.",
    "Ancrene Wisse"
  ],
  [
    "Masterdom",
    "/ˈmɑːstərdəm/",
    "m",
    "Dominion, rule, sovereignty, or supreme authority.",
    "Middle English, from master + -dom.",
    "The rival baron contested the king's masterdom over the northern marches.",
    "John Trevisa, translation of Higden"
  ],
  [
    "Marrow",
    "/ˈmæroʊ/",
    "m",
    "A companion, mate, equal, or match in power and status.",
    "Middle English marwe, from Old Norse mǫrgr (fellow, match).",
    "Sir Lancelot had no marrow among all the knights of the Round Table.",
    "Scottish legal and literary texts"
  ],
  [
    "Multure",
    "/ˈmʌltʃər/",
    "m",
    "The toll or fee paid by a feudal tenant to the lord of the manor for grinding grain at his mill.",
    "Middle English, from Old French multure, from Latin multura.",
    "The serfs grumbled at the heavy multure demanded by the miller for a sack of rye.",
    "Scottish Manorial Rolls"
  ],
  [
    "Man-bote",
    "/ˈmænˌboʊt/",
    "m",
    "A financial compensation paid to a lord or family for the slaying of a man.",
    "Old English manbōt (man-payment).",
    "The offender was ordered to pay a hefty man-bote to appease the grieving clan.",
    "Laws of King Alfred"
  ],
  [
    "Mullock",
    "/ˈmʌlək/",
    "m",
    "Rubbish, refuse, dirt, or worthless stone excavated from a mine or quarry.",
    "Middle English, of uncertain origin.",
    "The miners cleared away the damp mullock from the tunnel entrance.",
    "Promptorium Parvulorum"
  ],
  [
    "Mote",
    "/moʊt/",
    "m",
    "A fortified castle, stronghold, or the raised earth mound upon which a keep was built (motte).",
    "Middle English, from Old French motte.",
    "Watchmen scanned the horizon from the timber tower erected atop the castle mote.",
    "Anglo-Norman Chronicles"
  ],
  [
    "Must",
    "/mʌst/",
    "m",
    "Fresh, unfermented grape juice pressed before wine-making commences.",
    "Middle English, from Old French must, from Latin mustum.",
    "The vintage was pressed early, and sweet must filled the great wooden vats.",
    "Medieval Household Accounts"
  ],
  [
    "Mell",
    "/mɛl/",
    "m",
    "To mix, mingle, or engage closely in combat or social interaction.",
    "Middle English, from Old French mesler (to mix).",
    "It is unwise for a squire to mell with seasoned mercenaries in a tavern brawl.",
    "Spenser, The Faerie Queene"
  ],
  [
    "Muck-rake",
    "/ˈmʌkˌreɪk/",
    "m",
    "A rake used for gathering dung or muck from stables and farmyards.",
    "Middle English, from muck + rake.",
    "The stable boy dropped his muck-rake and rushed to catch a glimpse of the passing king.",
    "Chaucer, Parson's Tale"
  ],
  [
    "Misproud",
    "/mɪsˈpraʊd/",
    "e",
    "Arrogant, excessively proud in an unlawful or presumptuous manner.",
    "Middle English to Elizabethan, from mis- + proud.",
    "The misproud rebel refused to bow before the royal standard.",
    "Shakespeare, Henry VI, Part 3"
  ],
  [
    "Mud-wall",
    "/ˈmʌdˌwɔːl/",
    "m",
    "A rough wall constructed from mud, straw, and clay, common in peasant cottages.",
    "Middle English, from mud + wall.",
    "The bandit kicked through the fragile mud-wall of the peasant hovel.",
    "Manorial Court Rolls"
  ],
  [
    "Mantle-piece",
    "/ˈmæntəlˌpiːs/",
    "m",
    "The decorative framework surrounding the opening of a fireplace.",
    "Middle English, from mantle + piece.",
    "Carved wooden heraldry adorned the grand mantle-piece of the great hall.",
    "Medieval Architectural Records"
  ],
  [
    "Misprize",
    "/mɪsˈpraɪz/",
    "e",
    "To undervalue, despise, scorn, or misinterpret something.",
    "Middle English, from Old French mesprisier.",
    "Do not misprize the strength of the northern archers, lest you pay dearly.",
    "Shakespeare, Much Ado About Nothing"
  ],
  [
    "Marrowless",
    "/ˈmærəʊlɪs/",
    "e",
    "Lacking bone marrow; metaphorically devoid of life, vigor, or courage.",
    "Elizabethan English, from marrow + -less.",
    "Thy bones are cold, thy blood is warm; thou hast no speculation in those marrowless eyes.",
    "Shakespeare, Macbeth"
  ],
  [
    "Mainprize",
    "/ˈmeɪnˌpraɪz/",
    "m",
    "The surrendering of a prisoner into the custody of sureties who guarantee their appearance in court.",
    "Middle English, from Anglo-Norman mainprise (hand-taking).",
    "The knight was released from the castle dungeon upon mainprize of two wealthy barons.",
    "Legal Year Books"
  ],
  [
    "Master-wight",
    "/ˈmɑːstərˌwaɪt/",
    "m",
    "A master craftsman, expert artisan, or preeminent person of skill.",
    "Middle English, from master + wight (person/creature).",
    "The master-wight forged the king's broadsword with enchanted steel.",
    "Middle English Metrical Romances"
  ],
  [
    "Naker",
    "/ˈneɪkər/",
    "m",
    "A small medieval kettledrum, often played in pairs and used in battle or ceremonial processions.",
    "Middle English, from Old French nacaire, ultimately from Arabic naqāra.",
    "With trumpets, tabors, and with nakers sown, that made the battle roar.",
    "Geoffrey Chaucer, The Knight's Tale"
  ],
  [
    "Nakers",
    "/ˈneɪkərz/",
    "m",
    "Plural form referring to military kettledrums used by horsemen during crusades and chivalric tournaments.",
    "Middle English, derived from Old French nacaires.",
    "The knight charged forward to the sound of nakers and clashing steel.",
    "Anonymous, Richard Coeur de Lion"
  ],
  [
    "Nappery",
    "/ˈnæpəri/",
    "m",
    "Household linen, especially table linen and towels used in noble manors and castles.",
    "Middle English, from Old French nape (tablecloth).",
    "The seneschal inspected the nappery before the king's great feast.",
    "Household Ordinances of Edward IV"
  ],
  [
    "Nappy",
    "/ˈnæpi/",
    "m",
    "Strong, heady, or frothy ale, favored by commoners and soldiers in feudal times.",
    "Middle English, from nap (to froth/foam).",
    "Bring us in no brown bread, neither care we, but bring us good nappy ale.",
    "Fifteenth-century drinking song"
  ],
  [
    "Nar",
    "/nɑːr/",
    "m",
    "Nearer; closer in distance or relationship.",
    "Middle English, from Old English nēar (comparative of nēah).",
    "The nar the church, the fer from God.",
    "John Heywood, Proverbes"
  ],
  [
    "Nard",
    "/nɑːrd/",
    "e",
    "An aromatic balsam or ointment highly prized in medieval apothecary and elite cosmetics.",
    "Middle English, from Latin nardus, from Greek nardos.",
    "Unguent of nard wherewith she anointed the knight's weary feet.",
    "John Wycliffe, Bible Translation"
  ],
  [
    "Nasale",
    "/nəˈzeɪli/",
    "m",
    "The vertical metal bar or nose-guard projecting downward from the front of a medieval nasal helm.",
    "Middle English, from Old French nasal.",
    "The battle-axe struck the iron nasale, shattering the helm.",
    "Chanson de Roland translation"
  ],
  [
    "Nasal",
    "/ˈneɪzəl/",
    "m",
    "A conical helm featuring a prominent nose-guard used by Anglo-Norman knights.",
    "Middle English, from Old French nasal.",
    "The knights rode forth clad in mail and nasal helms.",
    "Bayeux Tapestry documentation"
  ],
  [
    "Nask",
    "/næsk/",
    "m",
    "A prison, dungeon, or holding cell located within a castle keep.",
    "Northern Middle English dialect, origin uncertain.",
    "He cast the captured reiver deep into the castle's dark nask.",
    "Border ballads of the Scottish Marches"
  ],
  [
    "Nat",
    "/næt/",
    "m",
    "Not.",
    "Old English nā, Middle English nat.",
    "That wot I wel, it is nat to done.",
    "Geoffrey Chaucer, Troilus and Criseyde"
  ],
  [
    "Nath",
    "/næθ/",
    "m",
    "Ne hath; has not, possesses not.",
    "Old English contraction of ne + hath.",
    "He that hath two welles, and nath no grace to drink thereof.",
    "Geoffrey Chaucer, Boece"
  ],
  [
    "Natheles",
    "/ˈnæθəlɛs/",
    "m",
    "Nevertheless; notwithstanding.",
    "Old English nāthilæs.",
    "Natheles, the knight stood firm against the onslaught.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Nathemore",
    "/ˈnæθəmɔːr/",
    "m",
    "Not the more; nevertheless not any more.",
    "Middle English, from natheles + more.",
    "Nathemore would he yield his shield to the challenger.",
    "Edmund Spenser, The Faerie Queene"
  ],
  [
    "Nation",
    "/ˈneɪʃən/",
    "m",
    "A distinct fellowship or regional grouping of students or knights within a military order.",
    "Middle English, from Latin natio.",
    "The knights of the English nation gathered in the chapter house.",
    "Hospitaller Chronicle"
  ],
  [
    "Native",
    "/ˈneɪtɪv/",
    "m",
    "A serf or unfree villein bound by birth to the feudal lord's manor.",
    "Middle English, from Latin nativus (born to).",
    "Every native of the manor must render week-work to the bailiff.",
    "Manorial Extent Rolls"
  ],
  [
    "Nativitas",
    "/nəˈtɪvɪtəs/",
    "m",
    "The legal status of being born a serf or bondman on a feudal estate.",
    "Medieval Latin.",
    "The dispute concerned the proven nativitas of the runaway peasant.",
    "Legal rolls of Edward I"
  ],
  [
    "Nattily",
    "/ˈnætɪli/",
    "t",
    "Tidily, smartly, or elegantly attired, often applied to courtly dress.",
    "Victorian derivation from natty (neat/smart).",
    "The young esquire appeared nattily dressed for the royal court.",
    "Victorian historical romance"
  ],
  [
    "Natural",
    "/ˈnætʃərəl/",
    "m",
    "An illegitimate child or a court jester born with mental deficiencies.",
    "Middle English, from Latin naturalis.",
    "The lord kept a witty natural to entertain guests in the great hall.",
    "Shakespeare, King Lear"
  ],
  [
    "Naught",
    "/nɔːt/",
    "m",
    "Nothing; of no value or wickedness.",
    "Old English nāwiht.",
    "All his valiant efforts came to naught before the fortress walls.",
    "Gawain and the Green Knight"
  ],
  [
    "Naughtily",
    "/ˈnɔːtɪli/",
    "m",
    "Badly, wickedly, or in a ruined condition.",
    "Middle English, from naught.",
    "The castle wall was naughtily maintained and soon collapsed.",
    "Pleadings in Chancery"
  ],
  [
    "Naughtiness",
    "/ˈnɔːtɪnəs/",
    "m",
    "Wickedness, badness, or moral depravity.",
    "Middle English, from naughti.",
    "Repenting of his former naughtiness, he took up the crusader's cross.",
    "Caxton, Golden Legend"
  ],
  [
    "Naughty",
    "/ˈnɔːti/",
    "m",
    "Wicked, evil, or morally worthless; in feudal times, denoting something of no worth.",
    "Old English nāwihtī.",
    "A naughty knight who preys upon defenseless pilgrims.",
    "William Langland, Piers Plowman"
  ],
  [
    "Nave",
    "/neɪv/",
    "m",
    "The central long aisle of a medieval cathedral or abbey church where congregants gathered.",
    "Middle English, from Old French nabe, Latin navis (ship).",
    "The procession marched solemnly down the great nave of the cathedral.",
    "Monastic Chronicle"
  ],
  [
    "Navel",
    "/ˈneɪvəl/",
    "m",
    "The central boss or umbo of a medieval round shield.",
    "Old English nafela.",
    "The spear struck dead center upon the iron navel of his buckler.",
    "Old English poetic texts"
  ],
  [
    "Naysay",
    "/ˈneɪseɪ/",
    "m",
    "To deny, veto, or refuse a command or proposal.",
    "Middle English, from nay + say.",
    "None in the council dared to naysay the mighty baron.",
    "Chronicles of the Northern Barons"
  ],
  [
    "Ne",
    "/ne/",
    "m",
    "Nor; and not.",
    "Old English ne.",
    "Ne gold ne silver could buy his loyalty.",
    "Geoffrey Chaucer, General Prologue"
  ],
  [
    "Neif",
    "/niːf/",
    "m",
    "A female serf or bondwoman tied to a feudal manor.",
    "Middle English, from Old French neif.",
    "The lord granted freedom to his bondman and his neif.",
    "Manorial Court Rolls"
  ],
  [
    "Neif (Hand)",
    "/niːf/",
    "m",
    "A fist or hand.",
    "Old Norse hnefi.",
    "Give me thy neif, dampish friar.",
    "Shakespeare, A Midsummer Night's Dream"
  ],
  [
    "Nekke",
    "/ˈnɛkə/",
    "m",
    "The neck; part of the body vulnerable to an enemy's blade or executioner's axe.",
    "Old English hnecca, Middle English nekke.",
    "The executioner's sword descended upon his nekke.",
    "Cursor Mundi"
  ],
  [
    "Neme",
    "/ˈniːmə/",
    "m",
    "An uncle; mother's brother.",
    "Old English ēam, modified by dialect.",
    "He sought counsel from his wise neme.",
    "Middle English romance literature"
  ],
  [
    "Nempne",
    "/ˈnɛmpnə/",
    "m",
    "To name, call, or pronounce.",
    "Old English nemnan.",
    "The hero whom men do nempne Sir Gawain.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Nenna",
    "/ˈnɛnə/",
    "m",
    "A nurse or foster-mother in a noble medieval household.",
    "Middle English, nursery word.",
    "The faithful nenna cradled the young heir of the castle.",
    "Medieval domestic household records"
  ],
  [
    "Nerve",
    "/nɜːrv/",
    "m",
    "Sinew, tendon, or muscle fiber, regarded in medieval medicine as the source of physical strength.",
    "Middle English, from Latin nervus.",
    "The wound severed the nerve in his sword arm.",
    "Medieval surgical treatises"
  ],
  [
    "Nettle",
    "/ˈnɛtəl/",
    "m",
    "To provoke, sting, or irritate; also a wild plant used in medieval pottage and cloth making.",
    "Old English netele.",
    "The mocking jester nettled the proud knight.",
    "John Gower, Confessio Amantis"
  ],
  [
    "Neuk",
    "/njuːk/",
    "m",
    "A nook, corner, or hidden recess within a castle wall or fireplace.",
    "Middle English, of Scandinavian origin.",
    "He hid the stolen charter in a dark neuk of the keep.",
    "Scottish medieval records"
  ],
  [
    "Neve",
    "/ˈniːv/",
    "m",
    "A nephew or grandson.",
    "Middle English, from Latin nepos.",
    "The king appointed his loyal neve as constable of the castle.",
    "Historical chronicles of England"
  ],
  [
    "Newfangle",
    "/ˈnuːfæŋɡəl/",
    "e",
    "Fond of new things, novelties, or modern fashions in armor and court dress.",
    "Middle English, from new + fang (to take/clutch).",
    "These newfangle armors lack the stout reliability of old.",
    "Roger Ascham, Toxophilus"
  ],
  [
    "Newfangleness",
    "/ˈnuːfæŋɡəlnəs/",
    "e",
    "The love of novelty or newly introduced fashions in courtly life.",
    "Middle English, from newfangle.",
    "The court was plagued by a foolish newfangleness in attire.",
    "Sir Thomas More, Utopia"
  ],
  [
    "New-Sprout",
    "/ˈnuːspraʊt/",
    "m",
    "A newly dubbed knight or inexperienced young squire.",
    "Middle English compound.",
    "The old veterans mocked the new-sprout's shining, unblemished shield.",
    "Chivalric romances"
  ],
  [
    "Niche",
    "/nɪtʃ/",
    "m",
    "A recess in a castle wall or cathedral facade designed to hold a statue of a saint or knight.",
    "Middle English, from Old French niche.",
    "A stone niche containing the effigy of the castle's founder.",
    "Architectural rolls of medieval masonry"
  ],
  [
    "Night-Crow",
    "/ˈnaɪt kroʊ/",
    "e",
    "A nocturnal bird of ill omen, often associated with battlefield carnage and dark castle towers.",
    "Middle English, compound.",
    "The dismal night-crow shrieked from the castle battlement.",
    "Shakespeare, 3 Henry VI"
  ],
  [
    "Nighterale",
    "/ˈnaɪtərˌeɪl/",
    "m",
    "Nighttime wandering or nocturnal revelry.",
    "Middle English, from niht + ale.",
    "Given to nighterale and taverns while the castle guard slept.",
    "Chaucerian glosses"
  ],
  [
    "Nithing",
    "/ˈnɪðɪŋ/",
    "m",
    "A cowardly, infamous, or despised person; a term of utmost reproach in Anglo-Saxon society.",
    "Old English niðing, Old Norse níðingr.",
    "Cursed be the nithing who flees from the king's standard.",
    "Law of Cnut"
  ],
  [
    "Obedientiaries",
    "/oʊˌbiːdiˈɛnʃəriz/",
    "m",
    "Monks who held specific subordinate offices in a monastery, such as sacrist or cellarer.",
    "Medieval Latin obedientarius, from obedientia (obedience).",
    "The obedientiaries gathered in the chapter house to give their weekly accounts to the abbot.",
    "Monastic Constitutions of Lanfranc"
  ],
  [
    "Obeisance",
    "/oʊˈbeɪsəns/",
    "m",
    "A gesture of respect, such as a bow or curtsy, made to a feudal lord or monarch.",
    "Old French oboïssance, from oboïr (to obey).",
    "The knight made a deep obeisance before the king before accepting his new fief.",
    "Le Morte d'Arthur"
  ],
  [
    "Oberon",
    "/ˈoʊbərɒn/",
    "e",
    "King of the fairies, frequently referenced in Elizabethan courtly literature and plays.",
    "Old French Alberon, derived from Germanic elements meaning elf and bear.",
    "Ill met by moonlight, proud Oberon.",
    "A Midsummer Night's Dream"
  ],
  [
    "Obit",
    "/ˈoʊbɪt/",
    "m",
    "A religious service or mass performed on the anniversary of a person's death, often endowed by nobility.",
    "Latin obitus (departure, death), from obire.",
    "The lord left lands to the abbey to ensure an annual obit for his fallen ancestors.",
    "Historical Records of Battle Abbey"
  ],
  [
    "Objuration",
    "/ˌɒbdʒʊˈreɪʃən/",
    "e",
    "An earnest appeal, solemn entreaty, or binding oath.",
    "Latin objurare (to bind by oath), from jurare.",
    "By solemn objuration, the baron swore to protect the orphans of his slain vassal.",
    "Holinshed's Chronicles"
  ],
  [
    "Oblate",
    "/ˈɒbleɪt/",
    "m",
    "A person dedicated to a monastery or religious life, often a child offered by noble parents.",
    "Latin oblatus (offered), past participle of offerre.",
    "The young noble entered the abbey as an oblate to secure his spiritual future.",
    "Rule of Saint Benedict"
  ],
  [
    "Oblique",
    "/əˈbliːk/",
    "e",
    "Slanted or indirect; in heraldry, referring to a diagonal ordinaries or posture.",
    "Latin obliquus (slanted, sidelong).",
    "The shield bore a red cross set upon an oblique bend.",
    "The Accedence of Armorie"
  ],
  [
    "Oblivion",
    "/əˈblɪviən/",
    "e",
    "The state of being completely forgotten or unknown, common in chivalric lamentations of lost glory.",
    "Latin oblivio, from oblivisci (to forget).",
    "Many a valiant knight passed into oblivion without a chronicler to record his deeds.",
    "The Faerie Queene"
  ],
  [
    "Obloquy",
    "/ˈɒbləkwɪ/",
    "e",
    "Strong public criticism, verbal abuse, or infamy resulting from dishonorable acts.",
    "Latin obloquium, from obloqui (to speak against).",
    "The coward who fled the siege lived the rest of his days in deep obloquy.",
    "Tottel's Miscellany"
  ],
  [
    "Obsecration",
    "/ˌɒbsɪˈkreɪʃən/",
    "e",
    "A fervent supplication or prayer, often invoking divine aid during medieval trials by combat.",
    "Latin obsecratio, from obsecrare (to beseech).",
    "With pious obsecration, the queen prayed for the champion's victory in the lists.",
    "The Book of Common Prayer"
  ],
  [
    "Observant",
    "/əbˈzɜːrvənt/",
    "m",
    "Strict in adhering to monastic rules or religious duties; a branch of the Franciscan order.",
    "Latin observantem, from observare (to watch over, keep).",
    "The observant friars walked barefoot through the castle ward to collect alms.",
    "Chronicles of the Franciscan Order"
  ],
  [
    "Obsidian",
    "/əbˈsɪdiən/",
    "e",
    "A dark volcanic glass occasionally used for mirrors or decorative hilts in late medieval collections.",
    "Latin obsidianus, variant of obsidianus, supposedly after a Roman explorer Obsidius.",
    "The pommel of the dagger was inlaid with polished obsidian.",
    "Inventory of the Exchequer"
  ],
  [
    "Obumbrate",
    "/ˈɒbʌmbreɪt/",
    "e",
    "To overshadow, darken, or cast a shadow over something.",
    "Latin obumbrare (to cast a shadow over), from umbra.",
    "The great banner of the duke did obumbrate the entire courtyard.",
    "Gargantua and Pantagruel"
  ],
  [
    "Occasion",
    "/əˈkeɪʒən/",
    "m",
    "A cause, necessity, or battle encounter; a reason for taking up arms.",
    "Latin occasio (opportunity, occasion).",
    "The border dispute provided the immediate occasion for war between the houses.",
    "Froissart's Chronicles"
  ],
  [
    "Occident",
    "/ˈɒksɪdənt/",
    "m",
    "The West, particularly Christian Europe as opposed to the Orient.",
    "Latin occidens (setting sun, the west), from occidere.",
    "Crusaders marched from the Occident to reclaim the Holy Land.",
    "Gesta Francorum"
  ],
  [
    "Occult",
    "/əˈkʌlt/",
    "m",
    "Hidden, secret, or mysterious; associated with medieval alchemy and forbidden astrology.",
    "Latin occultus (hidden, concealed), from occulere.",
    "The castle alchemist practiced occult arts in the turret chamber.",
    "Secretum Philosophorum"
  ],
  [
    "Occupant",
    "/ˈɒkjʊpənt/",
    "m",
    "One who takes possession of a conquered fief, castle, or territory.",
    "Latin occupantem, from occupare (to seize, take possession).",
    "The violent occupant of the keep refused to yield to the rightful heir.",
    "Statutes of the Realm"
  ],
  [
    "Occurrence",
    "/əˈkʌrəns/",
    "e",
    "An event, incident, or hostile encounter between opposing knights.",
    "Late Latin occurrentia, from occurrere (to run to meet).",
    "Skirmishes at the outer gate were a daily occurrence during the long siege.",
    "State Papers of Henry VIII"
  ],
  [
    "Oceana",
    "/ˌoʊʃiˈɑːnə/",
    "e",
    "A poetic or idealized realm associated with sea-kingdoms or chivalric romances.",
    "Latin Oceanus, from Greek Okeanos.",
    "The sailors dreamed of reaching the mythical shores of Oceana.",
    "The Faerie Queene"
  ],
  [
    "Ochlocracy",
    "/ɒkˈlɒkrəsi/",
    "e",
    "Mob rule; government by the rabble, feared by feudal lords and monarchs.",
    "Greek oklokratia, from ochlos (mob) + kratos (rule).",
    "The uprising of the peasants threatened to plunge the shire into utter ochlocracy.",
    "Leviathan"
  ],
  [
    "Octuple",
    "/ˈɒktjʊpəl/",
    "e",
    "Multiplied by eight; having eight folds or parts, as in medieval heraldic designs.",
    "Latin octuplus, from octo (eight).",
    "The shield bore an octuple division of alternating gules and argent.",
    "The Elements of Armory"
  ],
  [
    "Oculate",
    "/ˈɒkjʊleɪt/",
    "e",
    "Having eyes or eye-like markings; observant or vigilant.",
    "Latin oculatus, from oculus (eye).",
    "The sentinels remained fiercely oculate upon the ramparts throughout the dark night.",
    "Coriolanus"
  ],
  [
    "Odhner",
    "/ˈɒdnər/",
    "m",
    "An old term for ancestral property or hereditary land tenure in northern feudal systems.",
    "Old Norse odhal (allodial property).",
    "The freeholder claimed his odhner rights against the encroachments of the local earl.",
    "Domesday Book"
  ],
  [
    "Odiferous",
    "/ˌoʊdɪˈfɛrəs/",
    "e",
    "Yielding or diffusing an odor, often sweet-smelling or fragrant with spices.",
    "Latin odorifer, from odor (smell) + ferre (to bear).",
    "The noble lady carried an odiferous pomander filled with cloves and musk.",
    "The Merry Wives of Windsor"
  ],
  [
    "Odium",
    "/ˈoʊdiəm/",
    "e",
    "Widespread hatred, blame, or contempt incurred by hateful conduct or tyranny.",
    "Latin odium (hatred), from odisse (to hate).",
    "The cruel sheriff brought great odium upon himself through his exorbitant taxes.",
    "Richard II"
  ],
  [
    "Oekil",
    "/ˈiːkɪl/",
    "m",
    "An old regional term for a standard measure of land or grain in feudal agriculture.",
    "Old English eald + Germanic roots.",
    "The bailiff demanded an oekil of barley from each cottage on the manor.",
    "Manorial Rolls of Essex"
  ],
  [
    "Oellar",
    "/ˈɛlər/",
    "m",
    "A medieval variant spelling of cellar, especially the storehouse of a great manor or castle.",
    "Old French celier, influenced by medieval Latin cellarium.",
    "The vintage wine was brought up from the dark oellar for the feast.",
    "Household Ordinances of Edward II"
  ],
  [
    "Oenology",
    "/ˌiːˈnɒlədʒi/",
    "e",
    "The study or knowledge of wines, highly prized by medieval cellarmen and castle stewards.",
    "Greek oinos (wine) + -logia (study).",
    "The master of the horse took pride in his oenology, selecting only the finest Gascon wines.",
    "The Book of St. Albans"
  ],
  [
    "Oerch",
    "/ɜːrtʃ/",
    "m",
    "An archaic form of urchin or goblin of medieval folklore.",
    "Middle English irchoun, from Old French irechon.",
    "The superstitious peasants feared the oerch that haunted the old stone bridge.",
    "Cursor Mundi"
  ],
  [
    "Offal",
    "/ˈɒfəl/",
    "m",
    "The entrails and internal organs of a butchered animal, often given to castle hounds or serfs.",
    "Middle English offal, from off + fall (what falls off).",
    "The huntsmen cast the offal to the pack of hounds after the royal stag was dressed.",
    "The Master of Game"
  ],
  [
    "Officiate",
    "/əˈfɪʃieɪt/",
    "e",
    "To perform religious rites, mass, or official duties in a chapel.",
    "Medieval Latin officiare, from Latin officium.",
    "The bishop arrived at the cathedral to officiate at the coronation ceremony.",
    "Ecclesiastical Polity"
  ],
  [
    "Offish",
    "/ˈɒfɪʃ/",
    "t",
    "Aloof, reserved, or distant in manner; standoffish.",
    "English off + -ish suffix.",
    "The visiting knight was rather offish with the lower-ranking squires.",
    "Victorian Country House Letters"
  ],
  [
    "Ogive",
    "/ˈoʊdʒaɪv/",
    "m",
    "A pointed arch characteristic of Gothic architecture in medieval cathedrals and castles.",
    "Old French augive, of uncertain origin.",
    "The master mason traced a graceful ogive above the chapel entrance.",
    "Architectural Records of Wells Cathedral"
  ],
  [
    "Ohel",
    "/ˈoʊhɛl/",
    "m",
    "A tent or pavilion, especially one used in medieval military encampments during crusades.",
    "Hebrew ohel (tent, dwelling).",
    "The sultan rested within a silk ohel pitched in the center of the camp.",
    "Travels of Sir John Mandeville"
  ],
  [
    "Oime",
    "/ˈɔɪmi/",
    "e",
    "An archaic exclamation of grief, lament, or woe.",
    "Italian oimè, from oh me (oh, woe is me).",
    "Oime! That ever I should see such slaughter among the chivalry of France.",
    "The Spanish Tragedy"
  ],
  [
    "Ointment",
    "/ˈɔɪntmənt/",
    "m",
    "A medicinal salve or unguent used by castle healers to treat battle wounds.",
    "Old French oignement, from oindre (to anoint).",
    "The chirurgeon applied a soothing ointment to the knight's sword-cut.",
    "Theodoric's Surgery"
  ],
  [
    "Oldcastle",
    "/ˈoʊldˌkɑːsəl/",
    "e",
    "A surname associated with historical Lollard knights, famously linked to Shakespeare's Falstaff.",
    "Middle English old + castle.",
    "Sir John Oldcastle stood firm in his religious convictions despite royal displeasure.",
    "Holinshed's Chronicles"
  ],
  [
    "Oleaginous",
    "/ˌoʊliˈædʒɪnəs/",
    "e",
    "Oily, greasy, or having the smooth, flattering manner of a treacherous courtier.",
    "Latin oleaginus (of the olive tree), from olea.",
    "The royal flatterer spoke in oleaginous tones to win the ear of the gullible earl.",
    "Discoveries Made upon Men and Matter"
  ],
  [
    "Oligarchy",
    "/ˈɒlɪˌɡɑːrki/",
    "e",
    "Government by a small group of powerful nobles or feudal lords.",
    "Greek oligarchia, from oligos (few) + archein (to rule).",
    "The free city was ruled by an oligarchy of wealthy merchant princes.",
    "The History of the World"
  ],
  [
    "Olitory",
    "/ˈɒlɪtəri/",
    "e",
    "Pertaining to kitchen gardens or vegetables grown for the castle table.",
    "Latin olitorius, from olitor (vegetable gardener).",
    "The castle gardener tended the olitory with great care to supply the winter stores.",
    "Garden of Cyrus"
  ],
  [
    "Olympiad",
    "/əˈlɪmpiæd/",
    "e",
    "A period of four years, or a grand tournament mirroring ancient athletic contests.",
    "Greek olympias, from Olympia.",
    "The grand tournament was held like a chivalric olympiad before the assembled courts.",
    "Poly-Olbion"
  ],
  [
    "Ombudsman",
    "/ˈɒmbʊdzmən/",
    "t",
    "An official appointed to investigate complaints against abuses of power in feudal governance.",
    "Swedish ombudsman, from Old Norse umbodhsmaðr.",
    "The king appointed an arbiter to act as an ombudsman for the oppressed tenant farmers.",
    "Legal History of Scandinavia"
  ],
  [
    "Omineous",
    "/ˈɒmɪnəs/",
    "e",
    "Spelled variously in early prints; portending evil or disaster before a battle.",
    "Latin ominosus, from omen (foreboding).",
    "A flight of ravens crossed the sun, an omineous sign for the advancing army.",
    "King Henry VI"
  ],
  [
    "Omophorion",
    "/ˌɒməˈfɔːriɒn/",
    "m",
    "A wide vestment worn by bishops in Eastern Christian medieval liturgies.",
    "Greek omophorion, from omos (shoulder) + pherein (to bear).",
    "The patriarch wore the ornate omophorion embroidered with golden crosses.",
    "Byzantine Liturgical Ordinances"
  ],
  [
    "Onager",
    "/ˈɒnədʒər/",
    "m",
    "A powerful medieval military catapult used to hurl stones at castle walls during a siege.",
    "Latin onager (wild ass, so called from its kicking motion), from Greek onagros.",
    "The engineers cranked back the heavy onager to breach the outer barbican.",
    "De Re Militari"
  ],
  [
    "Pavior",
    "/ˈpeɪ.vi.ər/",
    "e",
    "A heavy shield, large enough to cover the entire body, often used by medieval foot soldiers and archers.",
    "Middle English pavais, from Old French pavazo, from Italian pavese (shield from Pavia)",
    "The archers crouched safely behind their great paviors while the enemy rained arrows upon them.",
    "Chronicles of Froissart"
  ],
  [
    "Poulaine",
    "/puːˈlɛn/",
    "m",
    "A long, pointed toe on a medieval shoe, often stuffed with moss or wool to keep its shape.",
    "Middle English poulaine, from Old French, literally 'Polish' (referring to a style from Poland)",
    "He tripped over his own extravagant poulaines as he knelt before the high table.",
    "Chaucer, The Canterbury Tales"
  ],
  [
    "Passegard",
    "/ˈpæs.ɡɑːrd/",
    "e",
    "A plate or ridge added to armor at the shoulder or elbow to protect the wearer's neck and face from downward sword blows.",
    "French passe-garde, from passer (to pass) + garder (to guard)",
    "The master blacksmith adjusted the passegard to ensure full freedom of movement for the arm.",
    "Inventory of Royal Armoury"
  ],
  [
    "Puisne",
    "/ˈpjuː.ni/",
    "m",
    "Born later; younger or of lower rank, specifically applied to junior judges or knights banneret of lesser standing.",
    "Middle English puisne, from Old French puisné, from Latin post natus (born after)",
    "The puisne judge listened intently while the senior magistrate delivered the verdict.",
    "Year Books of Edward II"
  ],
  [
    "Porc-epique",
    "/ˌpɔːrk.əˈpiːk/",
    "e",
    "An ornamental spiked ridge or plate on armor, resembling a porcupine, designed to prevent grappling.",
    "Old French porc-epique, from Latin porcus (pig) + spica (spike)",
    "His breastplate was adorned with a fierce porc-epique that deterred any wrestler from seizing him.",
    "Tudor Tournament Rolls"
  ],
  [
    "Palliard",
    "/ˈpæl.jɑːrd/",
    "e",
    "A vagabond, beggar, or rogue who slept on straw beds in barns, often associated with thieves' cant.",
    "French palliard, from palliard (lewd), related to paille (straw)",
    "A ragged palliard crept out from the hayloft to beg for scraps at the castle gate.",
    "Thomas Harman, A Caveat for Common Cursitors"
  ],
  [
    "Pike",
    "/paɪk/",
    "m",
    "A long thrusting spear used by infantry formations against cavalry charges.",
    "Middle English pike, perhaps from Old Norse or Old French pic",
    "The footmen lowered a bristling wall of pikes to repel the charging horsemen.",
    "Battle Chronicle of Bannockburn"
  ],
  [
    "Pennon",
    "/ˈpɛn.ən/",
    "m",
    "A small, tapering flag or streamer borne by a knight on his lance.",
    "Middle English penoun, from Old French, diminutive of penne (feather/wing)",
    "The wind whipped the crimson pennon tied beneath the point of his heavy lance.",
    "Froissart's Chronicles"
  ],
  [
    "Poulterer",
    "/ˈpoʊl.tər.ər/",
    "m",
    "A dealer in poultry and game birds for the lord's kitchen.",
    "Middle English poulterer, from poulter (poultry seller) + -er",
    "The poulterer delivered plump pheasants and capons for the upcoming coronation feast.",
    "London Letter Books"
  ],
  [
    "Pikeman",
    "/ˈpaɪk.mən/",
    "e",
    "A foot soldier armed with a pike as his primary weapon.",
    "Middle English pikeman, from pike + man",
    "The regiment of pikemen stood firm against the onslaught of the enemy vanguard.",
    "Military Ordinances of Henry VIII"
  ],
  [
    "Purlieu",
    "/ˈpɜːr.luː/",
    "m",
    "The outer boundary of a royal forest, or the land adjacent to a forest.",
    "Anglo-Norman puralee, from purer (to go through) + alez (gone)",
    "Poachers often lurked in the dark purlieus waiting to trap the king's deer.",
    "Forest Law Statutes"
  ],
  [
    "Paly",
    "/ˈpeɪ.li/",
    "m",
    "In heraldry, a shield divided vertically into an even number of equal-width parallel strips of alternating tinctures.",
    "Middle English paly, from Old French pale (paling/stake)",
    "His coat of arms was blazoned as paly of six, argent and azure.",
    "Treatise on Heraldry"
  ],
  [
    "Pale",
    "/peɪl/",
    "m",
    "A wooden stake or pointed fence slat; also used metaphorically to mean a jurisdiction or boundary.",
    "Middle English pale, from Latin palus (stake)",
    "They hastily drove wooden pales into the mud to construct a temporary stockade.",
    "Chronicles of St. Albans"
  ],
  [
    "Purveyance",
    "/pərˈveɪ.əns/",
    "m",
    "The feudal right of the king or his officers to requisition provisions and transport at below-market prices.",
    "Anglo-Norman purveance, from Old French purveier",
    "The villagers groaned when the royal purveyors arrived to seize their grain and carts.",
    "Statutes of the Realm"
  ],
  [
    "Prick",
    "/prɪk/",
    "m",
    "To spur a horse forward; in historical texts, to ride fast or gallop.",
    "Old English prician (to prick or puncture)",
    "Prick on, brave knight, lest the damsel perish before we reach the tower.",
    "Edmund Spenser, The Faerie Queene"
  ],
  [
    "Palfrey-man",
    "/ˈpɔːl.fri.mæn/",
    "m",
    "A groom or attendant responsible for looking after a knight's riding horses.",
    "Middle English palfrey + man",
    "The palfrey-man brushed down the bay mare and polished her leather harness.",
    "Household Ordinances of Edward II"
  ],
  [
    "Pavisier",
    "/ˈpæv.ɪ.zɪər/",
    "m",
    "A foot soldier equipped with a large pavis shield to protect crossbowmen during a siege.",
    "Middle English pavaisier, from Old French",
    "The pavisier planted his heavy wooden shield in the earth and braced himself against the gale.",
    "Froissart's Chronicles"
  ],
  [
    "Pourpoint",
    "/ˈpʊər.pɔɪnt/",
    "m",
    "A close-fitting quilted doublet or jacket worn under armor or as fashionable civilian dress by men.",
    "Old French pourpoint, from Vulgar Latin *perpunctum (quilted)",
    "He wore a rich velvet pourpoint embroidered with gold thread beneath his steel harness.",
    "Inventory of Charles V of France"
  ],
  [
    "Perron",
    "/pəˈrɒn/",
    "m",
    "An exterior flight of steps leading to the main entrance of a medieval hall or castle.",
    "Old French perron, from pierre (stone)",
    "The herald stood upon the castle perron to read the king's proclamation to the crowd.",
    "Chronicles of the Low Countries"
  ],
  [
    "Prance",
    "/præns/",
    "m",
    "To ride a horse in a high-stepping, ostentatious manner during a procession or tournament.",
    "Middle English prancen, of uncertain origin",
    "The proud baron caused his warhorse to prance before the royal reviewing stand.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Pugil",
    "/ˈpjuː.dʒɪl/",
    "e",
    "A pinch; a small handful of medicinal herbs, salt, or dry ingredients used in castle apothecary.",
    "Latin pugillus, a handful, from pugnus (fist)",
    "Add a pugil of dried sage and two cloves to the healing broth.",
    "The Grete Herball"
  ],
  [
    "Parget",
    "/ˈpɑːr.dʒɪt/",
    "e",
    "To plaster or stucco walls, especially with ornamental or decorative patterns in timber-framed manor houses.",
    "Middle English pargeten, perhaps from Old French pargeter (to throw about)",
    "The craftsmen worked swiftly to parget the exterior timber walls with white lime.",
    "Tudor Building Accounts"
  ],
  [
    "Portgreve",
    "/ˈpɔːrt.ɡriːv/",
    "m",
    "A chief magistrate or municipal officer of a medieval English town or port.",
    "Old English portgerēfa, from port (town/market) + gerēfa (reeve)",
    "The portgreve collected the customs duties from the foreign merchants at the dock.",
    "Anglo-Saxon Chronicle"
  ],
  [
    "Prick-spur",
    "/ˈprɪk.spɜːr/",
    "m",
    "An early medieval type of spur featuring a single pointed goad rather than a revolving rowel.",
    "Middle English prik-spur, from prick + spur",
    "He dug his iron prick-spurs deep into the flanks of his destrier.",
    "Excavation Records of London"
  ],
  [
    "Palfrey-cloth",
    "/ˈpɔːl.fri.klɒθ/",
    "m",
    "An expensive decorative housing or blanket draped over a noble riding horse.",
    "Middle English palfrey + cloth",
    "The velvet palfrey-cloth was embroidered with the family's heraldic lions.",
    "Royal Wardrobe Accounts"
  ],
  [
    "Palliardise",
    "/ˈpæl.jər.daɪz/",
    "e",
    "Lechery, fornication, or debauchery, often cited in ecclesiastical court records.",
    "Middle French palliardise, from palliard (lewd person)",
    "The wandering friar was accused of palliardise and summoned before the bishop's court.",
    "Ecclesiastical Court Rolls"
  ],
  [
    "Pavis",
    "/ˈpæv.ɪs/",
    "m",
    "An alternative spelling of pavior; a tall, convex shield held by foot soldiers.",
    "Middle English pavais, from Old French",
    "The cross-bowmen rested their heavy weapons atop their tall wooden pavises.",
    "Chronicles of Jean Froissart"
  ],
  [
    "Paternoster",
    "/ˌpæ.tərˈnɒs.tər/",
    "m",
    "The Lord's Prayer, or a string of beads (early rosary) used to count prayers.",
    "Latin paternoster (Our Father), the opening words of the prayer",
    "She clutched her bone paternoster and whispered prayers for her husband fighting in France.",
    "Chaucer, The Prioress's Tale"
  ],
  [
    "Pike-man-at-arms",
    "/ˈpaɪk.mən.æt.ɑːrmz/",
    "m",
    "A heavily armored soldier wielding a pike in medieval battle arrays.",
    "Middle English pike + man + at + arms",
    "Each pike-man-at-arms wore a steel bascinet and a coat of plates.",
    "Battle Rolls of Agincourt"
  ],
  [
    "Purlin",
    "/ˈpɜːr.lɪn/",
    "m",
    "A horizontal structural timber in a castle roof, supporting the common rafters.",
    "Anglo-Norman purlyne, of uncertain origin",
    "The carpenters hoisted the heavy oak purlins into place to secure the Great Hall's roof.",
    "Medieval Carpentry Guild Records"
  ],
  [
    "Poulter",
    "/ˈpoʊl.tər/",
    "m",
    "A medieval merchant who sold poultry, eggs, and small game.",
    "Middle English poulter, from Old French poulet (chicken)",
    "The king's poulter brought fresh geese and ducks to the castle kitchens.",
    "Liber Quotidianus Garderobae"
  ],
  [
    "Pikestaff",
    "/ˈpaɪk.stæf/",
    "m",
    "The wooden shaft of a pike; also used in the idiom 'plain as a pikestaff' indicating obviousness.",
    "Middle English pikestaf, from pike + staff",
    "The truth of the treason was as plain as a pikestaff to everyone in the court.",
    "John Heywood, Proverbs"
  ],
  [
    "Portate",
    "/pɔːrˈteɪt/",
    "m",
    "In heraldry, an ordinary (such as a cross) represented as borne lying diagonally across the shield rather than upright.",
    "Latin portatus (carried)",
    "His shield bore a cross portate in honor of his pilgrimage to Jerusalem.",
    "Roll of Arms of Henry III"
  ],
  [
    "Quag",
    "/kwæɡ/",
    "m",
    "A quagmire or bog; treacherous marshy ground capable of swallowing a mounted knight.",
    "Middle English, likely of Scandinavian origin related to Old Norse quaka (to tremble)",
    "The heavy destrier sank hoof-deep into the treacherous quag near the castle moat.",
    "Middle English Chronicles"
  ],
  [
    "Quagswag",
    "/ˈkwæɡ.swæɡ/",
    "e",
    "To shake or sway to and fro; to dangle or wag in an unsteady manner.",
    "English colloquial formation from quag and swag, Elizabethan era",
    "The heavy iron chandelier did quagswag above the banqueting hall during the fierce gale.",
    "Elizabethan Vernacular"
  ],
  [
    "Quaint",
    "/kweɪnt/",
    "m",
    "Skilful, clever, cunning, or intricately crafted; of refined workmanship.",
    "Old French cointe, from Latin cognitus (known, familiar)",
    "The artificer wrought a quaint device of brass and gears to secure the castle postern.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Quake-breech",
    "/kweɪk briːtʃ/",
    "e",
    "A coward or timorous person who trembles with fear.",
    "English compound of quake and breech (trousers)",
    "Away, you trembling quake-breech, leave the defense of the bailey to braver men!",
    "Thomas Dekker, The Shoemaker's Holiday"
  ],
  [
    "Qualm",
    "/kwɑːm/",
    "m",
    "A sudden attack of sickly feeling, faintness, or a prick of conscience regarding a misdeed.",
    "Old English cwcalm, cwealm (pain, destruction, pestilence)",
    "He felt no qualm of conscience when relieving the wealthy merchant of his toll.",
    "Cursor Mundi"
  ],
  [
    "Quame",
    "/kweɪm/",
    "m",
    "Pleasure, quiet, satisfaction, or tranquility.",
    "Old English cwēme (agreeable, pleasant)",
    "The weary lord sought quame within the secluded solar far from the courtly clamor.",
    "Ancrene Wisse"
  ],
  [
    "Quan",
    "/kwɑːn/",
    "m",
    "When; at what time or whenever.",
    "Middle English variant of when, influenced by Old Northern dialects",
    "Quan the drawbridge is raised, no stranger may enter the inner ward.",
    "York Mystery Plays"
  ],
  [
    "Quandary",
    "/ˈkwɑːn.də.ri/",
    "e",
    "A state of perplexity, doubt, or uncertainty, especially in a delicate political dilemma.",
    "Origin uncertain, perhaps an alteration of Old French quand y a-t-il (when is there)",
    "The baron was cast into a grievous quandary upon receiving the contradictory royal writs.",
    "Shakespeare, King Henry VI"
  ],
  [
    "Quantity",
    "/ˈkwɑːn.tɪ.ti/",
    "m",
    "A large amount, bulk, or considerable body of armed men.",
    "Middle English quantite, from Latin quantitas",
    "A great quantity of men-at-arms gathered beneath the banner of the Earl.",
    "The Brut Chronicle"
  ],
  [
    "Quappe",
    "/kwæp/",
    "m",
    "To palpitate, beat rapidly, or tremble with fear or excitement.",
    "Middle English imitative origin",
    "His heart did quappe within his breast as the tournament herald sounded the charge.",
    "Wycliffe Bible"
  ],
  [
    "Quar",
    "/kwɑːr/",
    "e",
    "A quarry; a pit or excavation from which stone is hewn for castle building.",
    "Middle French quarriere, shortened in early modern English usage",
    "The master mason drew fine blocks of limestone straight from the royal quar.",
    "State Papers of Henry VIII"
  ],
  [
    "Quarantine",
    "/ˈkwɔːr.ən.tiːn/",
    "m",
    "A custom or legal right by which a widow was entitled to remain in her husband's chief mansion for forty days after his death.",
    "Old French quarantaine, from Latin quadraginta (forty)",
    "By ancient feudal law, the bereaved lady claimed her quarantine within the manor house.",
    "Magna Carta commentary"
  ],
  [
    "Quarel",
    "/ˈkwɑːr.əl/",
    "m",
    "A square-headed bolt or arrow shot from a crossbow.",
    "Old French quarrel, from Latin quadrum (square)",
    "The arbalester notched a heavy steel quarel and took aim at the battlement.",
    "Layamon's Brut"
  ],
  [
    "Quarry",
    "/ˈkwɔːr.i/",
    "m",
    "The entrails of a beast given to the hounds after a successful hunt; also, the hunted game itself.",
    "Old French cuirée, from cuir (hide)",
    "The huntsman blew the mort, and the hounds tore eagerly into the rich quarry.",
    "The Master of Game"
  ],
  [
    "Quart",
    "/kwɑːrt/",
    "m",
    "A measure of capacity for ale or wine, equivalent to one-fourth of a gallon, served in castles.",
    "Old French quarte, from Latin quartus (fourth)",
    "The thirsty squire called for a quart of strong ale to wash down the salt mutton.",
    "Piers Plowman"
  ],
  [
    "Quarter",
    "/ˈkwɔːr.tər/",
    "m",
    "Mercy granted to a defeated enemy, or the division of a city or castle ward.",
    "Old French quartier, from Latin quartus",
    "The garrison begged for quarter, but the conquering captain denied them mercy.",
    "Froissart's Chronicles"
  ],
  [
    "Quash",
    "/kwɑːʃ/",
    "m",
    "To suppress, annul, crush, or utterly overthrow a rebellion or decree.",
    "Old French quasser, from Latin quassare (to shake, shatter)",
    "The king sent his marshals swiftly to quash the peasant uprising in the north.",
    "Parliament Rolls"
  ],
  [
    "Quasimodo",
    "/ˌkwɑː.ziˈmoʊ.doʊ/",
    "m",
    "Low Sunday, the first Sunday after Easter, named from the introit of the day.",
    "Latin quasimodo geniti infantes (as newborn babes), opening words of the liturgy",
    "The tournament of the sovereign lords was appointed for the octave of Quasimodo.",
    "Medieval Liturgical Calendar"
  ],
  [
    "Quat",
    "/kwɑːt/",
    "e",
    "A pimple, pustule, or contemptible, annoying fellow.",
    "Variant of dialect quat (squashed, satiated), used metaphorically by Elizabethan writers",
    "I've rubbed this young quat almost to the sense, and he grows angry.",
    "Shakespeare, Othello"
  ],
  [
    "Quatch",
    "/kwɑːtʃ/",
    "e",
    "Squat, flat, or crouching low to the ground.",
    "Middle English variant of squatch or squat",
    "The poacher lay quatch in the thick fern as the forester rode past on his bay stallion.",
    "Tottel's Miscellany"
  ],
  [
    "Quater-cousin",
    "/ˌkwɑː.tər ˈkʌz.ən/",
    "e",
    "A distant relation; fourth cousin, or colloquially, anyone on familiar, friendly terms.",
    "French quartier cousin (related within four degrees)",
    "Though they bickered at court, the two barons were quater-cousins by marriage.",
    "John Heywood, Proverbs"
  ],
  [
    "Quatrain",
    "/ˈkwɑː.treɪn/",
    "e",
    "A stanza of four lines, often used in courtly verse and romantic ballads sung before lords.",
    "French quatrain, from quatre (four)",
    "The wandering minstrel sang a sweet quatrain in praise of the lady's golden hair.",
    "Elizabethan Sonnet Collections"
  ],
  [
    "Quave",
    "/kweɪv/",
    "m",
    "To shake, quake, tremble, or vibrate.",
    "Middle English quaven, related to Old English cwafian",
    "The massive stone keep did quave upon its foundations when the petard exploded.",
    "Alliterative Morte Arthure"
  ],
  [
    "Quay",
    "/kiː/",
    "m",
    "A solid landing place or stone wharf built along a river or harbor for unloading merchant cogs.",
    "Middle English kay, from Old French cai",
    "The cargo of spice and wine casks was hoisted swiftly from the ship onto the busy quay.",
    "London Port Records"
  ],
  [
    "Queach",
    "/kwiːtʃ/",
    "e",
    "A thicket, bushy place, or overgrown tangle of brambles near a royal forest.",
    "Middle English quicche, from Old English cwice (couch-grass, quickset)",
    "Outlaws lurked within the dark queach waiting to ambush the royal tax collector.",
    "Spenser, The Faerie Queene"
  ],
  [
    "Queachy",
    "/ˈkwiː.tʃi/",
    "e",
    "Marshy, boggy, shaking underfoot like a quagmire.",
    "Derivative of queach",
    "The horses labored hard across the queachy meadow beneath the castle walls.",
    "Michael Drayton, Poly-Olbion"
  ],
  [
    "Queasy",
    "/ˈkwiː.zi/",
    "m",
    "Fastidious, squeamish, over-delicate, or causing nausea and uneasiness.",
    "Origin obscure, possibly related to Old Norse kvika or Middle English queise",
    "He possessed a queasy stomach and could not abide the rich spiced dishes of the feast.",
    "Mankind Morality Play"
  ],
  [
    "Queintise",
    "/ˈkwɛn.tɪ.zə/",
    "m",
    "Cleverness, cunning device, elegance of attire, or ornamentation.",
    "Old French cointise",
    "The noblewoman wore a gown of marvelous queintise embroidered with golden thread.",
    "Romance of the Rose (Middle English translation)"
  ],
  [
    "Queller",
    "/ˈkwɛl.ər/",
    "m",
    "A killer, slayer, murderer, or executioner (often used as a compound like mansqueller).",
    "Old English cwellere, from cwellan (to kill)",
    "He bore the title of blood-queller among the fierce tribes of the borderlands.",
    "Ælfric's Homilies"
  ],
  [
    "Quench",
    "/kwɛntʃ/",
    "m",
    "To put out a fire, extinguish a light, or suppress a thirst or passion.",
    "Old English cwencan (to cause to be extinguished)",
    "Buckets of water were passed along the line to quench the flames of the burning gatehouse.",
    "Ancrene Wisse"
  ],
  [
    "Quern",
    "/kwɜːrn/",
    "m",
    "A hand-mill used by peasants and castle servants for grinding grain into flour.",
    "Old English cweorn",
    "The maidservant turned the heavy stone quern to grind the rye for the morning loaf.",
    "Ælfric's Colloquy"
  ],
  [
    "Quest",
    "/kwɛst/",
    "m",
    "An expedition or enterprise undertaken by a knight to achieve a noble goal; also a judicial inquiry.",
    "Old French queste, from Latin quaestere",
    "Sir Lancelot set forth upon a perilous quest to recover the stolen holy relic.",
    "Malory, Le Morte d'Arthur"
  ],
  [
    "Questmonger",
    "/ˈkwɛstˌmʌŋ.ɡər/",
    "e",
    "One who makes a business of bringing lawsuits or arranging inquiries for profit.",
    "English compound of quest and monger (dealer)",
    "The corrupt bailiff was known throughout the shire as a notorious questmonger.",
    "Robert Greene, Awakenings"
  ],
  [
    "Queue",
    "/kjuː/",
    "m",
    "The tail of a beast, or a twisted knot of hair worn by men in late medieval fashion.",
    "Old French cue, from Latin cauda (tail)",
    "The fashionable courtier wore his hair tied back in a neat queue adorned with ribbons.",
    "Medieval Court Dress Rolls"
  ],
  [
    "Quib",
    "/kwɪb/",
    "e",
    "A petty evasion, clever turn of phrase, or sarcastic quip.",
    "Shortened form of Latin quibus (used in legal quibbles)",
    "The cunning advocate defended his client with many a subtle quibble and quib.",
    "Elizabethan Legal Satire"
  ],
  [
    "Quick",
    "/kwɪk/",
    "m",
    "Living, alive; sensitive flesh beneath the fingernails or wound.",
    "Old English cwic (living, alive)",
    "The knight's lance struck him so fiercely that it pierced straight to the quick.",
    "Cursor Mundi"
  ],
  [
    "Quicken",
    "/ˈkwɪk.ən/",
    "m",
    "To make alive, revive, or restore to animation and vigor.",
    "Old English cwician",
    "The cool spring water served to quicken the weary traveler after his long march.",
    "Wycliffe Bible"
  ],
  [
    "Quickset",
    "/ˈkwɪk.sɛt/",
    "m",
    "A living hedge planted with growing hawthorn or shrubs to enclose a manor or field.",
    "Old English cwicsett",
    "A thick quickset hedge protected the lord's orchard from wandering cattle and thieves.",
    "Piers Plowman"
  ],
  [
    "Quid",
    "/kwɪd/",
    "m",
    "A cud of tobacco, or a speech, essence, or substance of a matter.",
    "Variant of quid (what), or corruption of Latin quid (the thing)",
    "The old veteran chewed his quid of tobacco while keeping watch upon the rampart.",
    "Early Modern English Dialects"
  ],
  [
    "Quiddity",
    "/ˈkwɪd.ɪ.ti/",
    "m",
    "The essence, nature, or fundamental quality of a thing, debated by medieval scholars.",
    "Medieval Latin quidditas, from quid (what)",
    "The scholastic monk lectured endlessly upon the fine quiddity of angelic substance.",
    "Chaucer, The Canon's Yeoman's Tale"
  ],
  [
    "Quillet",
    "/ˈkwɪl.ɪt/",
    "e",
    "A subtle trick in argument, legal technicality, or quibble.",
    "Altered form of Latin quidlibet (what you will)",
    "He won the manor through legal quilts and sharp quill-driving quillets.",
    "Shakespeare, Love's Labour's Lost"
  ],
  [
    "Quilt",
    "/kwɪlt/",
    "m",
    "A padded bed-cover or defensive garment stuffed with wool, worn beneath chainmail.",
    "Old French cuilte, from Latin culcita (mattress)",
    "The knight laced a thick quilted doublet beneath his iron hauberk for added protection.",
    "Inventory of Edward III"
  ],
  [
    "Quire",
    "/kwaɪr/",
    "m",
    "A gathering of four sheets of parchment folded to form eight leaves of a medieval manuscript.",
    "Old French quaier, from Latin quaternio (group of four)",
    "The scribe carefully bound the illuminated quire of vellum with stout linen thread.",
    "Monastic Scriptorium Records"
  ],
  [
    "Rampart",
    "/ˈræmpɑːrt/",
    "m",
    "A defensive wall of a castle or walled city, having a broad top with a walkway.",
    "Middle English from Old French rempart",
    "They manned the rampart with archers as the siege engines rolled into view.",
    "Chronicles of the Realm"
  ],
  [
    "Rout",
    "/raʊt/",
    "m",
    "A disastrous defeat and disorderly retreat of an army in battle.",
    "Middle English from Old French route",
    "The cavalry charge turned the skirmish into a complete rout of the rebel forces.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Rouncy",
    "/ˈraʊnsi/",
    "m",
    "A common riding horse or packhorse used in the Middle Ages, distinct from a warhorse.",
    "Middle English rounsey",
    "He mounted his trusty rouncy and rode toward the abbey gates.",
    "Geoffrey Chaucer, The Canterbury Tales"
  ],
  [
    "Rampier",
    "/ˈræmpiər/",
    "e",
    "An alternative Elizabethan form for a rampart or defensive fortification.",
    "Middle French rempart",
    "The defenders fired their matchlocks from atop the stone rampier.",
    "William Shakespeare, Othello"
  ],
  [
    "Realm",
    "/rɛlm/",
    "m",
    "A kingdom or sovereign territory ruled by a monarch.",
    "Middle English from Old French realme",
    "Peace was restored across the realm after the coronation of the young king.",
    "Magna Carta"
  ],
  [
    "Razzia",
    "/ˈræziə/",
    "e",
    "A predatory raid or pillaging expedition into enemy territory.",
    "Italian/Arabic ghazya via French",
    "The border lords launched a swift razzia across the frontier to seize cattle.",
    "Border ballad records"
  ],
  [
    "Ressort",
    "/rɪˈsɔːrt/",
    "e",
    "Jurisdiction, legal recourse, or the spring of an action.",
    "Middle French ressort",
    "The dispute over the manor fell within the royal court's ressort.",
    "State Papers of Henry VIII"
  ],
  [
    "Roturier",
    "/roʊˈtʊəriər/",
    "m",
    "A person of non-noble birth, a commoner in the feudal hierarchy.",
    "French roturier",
    "Even a wealthy merchant remained a roturier in the eyes of the high aristocracy.",
    "Feudal Law Treatises"
  ],
  [
    "Rundlet",
    "/ˈrʌndlɪt/",
    "m",
    "A small barrel or cask of varying capacity used for wine or ale.",
    "Middle English roundlet",
    "The cellarer brought up arundlet of spiced mead for the feast.",
    "Household Ordinances of Edward II"
  ],
  [
    "Ribald",
    "/ˈrɪbəld/",
    "m",
    "A low, vulgar, or scurrilous person, often a retainer of disreputable character.",
    "Middle English from Old French ribaut",
    "A band of drunken ribalds caused a commotion outside the tavern.",
    "The Peterborough Chronicle"
  ],
  [
    "Rote",
    "/roʊt/",
    "m",
    "An ancient stringed musical instrument similar to a zither or small harp, played by medieval minstrels.",
    "Old High German rota",
    "The wandering minstrel tuned his rote and sang of ancient heroes.",
    "Layamon's Brut"
  ],
  [
    "Roundel",
    "/ˈraʊndəl/",
    "m",
    "A circular shield, fortification tower, or a verse form in medieval poetry.",
    "Middle English roundel",
    "The archer took cover behind a stone roundel on the battlement.",
    "Gawain and the Green Knight"
  ],
  [
    "Rampant",
    "/ˈræmpənt/",
    "m",
    "Standing on the hind legs in a posture of attack, common in heraldic descriptions.",
    "Old French rampant",
    "The golden lion rampant gleamed upon the azure heraldic shield.",
    "Roll of Arms, 13th Century"
  ],
  [
    "Ransack",
    "/ˈrænsæk/",
    "m",
    "To search thoroughly and pillage a captured castle or village.",
    "Old Norse rannsaka",
    "The invading host threatened to ransack the monastery if ransom was not paid.",
    "Anglo-Saxon Chronicle"
  ],
  [
    "Rebut",
    "/rɪˈbʌt/",
    "m",
    "To drive back an attacking force, or to refute an accusation.",
    "Old French rebouter",
    "The knights managed to rebut the vanguard at the narrow bridge.",
    "Statutes of the Realm"
  ],
  [
    "Recure",
    "/rɪˈkjʊər/",
    "e",
    "To cure, heal, or recover health and strength.",
    "Latin recuperare via Middle English",
    "The wounded knight was brought to the abbey to recure his injuries.",
    "Edmund Spenser, The Faerie Queene"
  ],
  [
    "Redoubt",
    "/rɪˈdaʊt/",
    "m",
    "A temporary or independent outwork or fort defending a strategic pass or camp.",
    "Middle French redoute",
    "They constructed a stout redoubt to guard the approach to the royal encampment.",
    "Military accounts of the Hundred Years' War"
  ],
  [
    "Regality",
    "/rɪˈɡæləti/",
    "m",
    "Royal jurisdiction, sovereign rights, or the state of being a king.",
    "Middle English regalite",
    "The rebellious earl dared to challenge the king's regality in the northern marches.",
    "Legal rolls of Edward I"
  ],
  [
    "Reign",
    "/reɪn/",
    "m",
    "The period of royal rule exercised by a monarch.",
    "Old French reign",
    "Many castles were built throughout the realm during the reign of Henry II.",
    "Chronicles of Battle Abbey"
  ],
  [
    "Remembrance",
    "/rɪˈmɛmbrəns/",
    "m",
    "A memorial, keepsake, or written record of historical grants and deeds.",
    "Middle English remembrance",
    "The charter was entered into the king's remembrance as permanent proof of the fief.",
    "Exchequer Memoranda Rolls"
  ],
  [
    "Requital",
    "/rɪˈkwaɪtəl/",
    "e",
    "A reward or recompense given in return for service or vengeance for a wrong.",
    "Middle English requyt",
    "The king granted land in requital for the knight's valor at Agincourt.",
    "Richard Grafton, Chronicle at Large"
  ],
  [
    "Resiant",
    "/ˈrɛziənt/",
    "e",
    "Resident or dwelling permanently within a particular manor or jurisdiction.",
    "Old French resiant",
    "Every freeman resiant within the hundred was summoned to the court leet.",
    "Tudor legal statutes"
  ],
  [
    "Retinue",
    "/ˈrɛtɪnjuː/",
    "m",
    "A body of retainers, servants, or armed men following a feudal lord.",
    "Old French retenue",
    "The duke arrived at the tournament with a grand retinue of fifty knights.",
    "Froissart's Chronicles"
  ],
  [
    "Rial",
    "/ˈraɪəl/",
    "e",
    "An old English gold coin of the late medieval and Tudor periods.",
    "Middle English rial",
    "He paid the armorer three gold rials for the polished breastplate.",
    "Tudor monetary records"
  ],
  [
    "Rime",
    "/raɪm/",
    "m",
    "Frost or frozen dew covering the castle battlements on a cold morning.",
    "Old English hrīm",
    "The iron portcullis was caked in thick rime as the dawn broke.",
    "Gawain poet"
  ],
  [
    "Ringmail",
    "/ˈrɪŋmeɪl/",
    "m",
    "Armor made of interlocking metal rings sewn onto leather or fabric.",
    "Middle English ring + mail",
    "The young squire helped his lord fasten the heavy ringmail tunic.",
    "Inventory of the Tower of London"
  ],
  [
    "Ripier",
    "/ˈrɪpiər/",
    "e",
    "A person who brings fresh fish from the coast to inland markets.",
    "Middle English ripa",
    "The castle steward purchased trout from the traveling ripier at the gate.",
    "Municipal records of York"
  ],
  [
    "Rive",
    "/raɪv/",
    "m",
    "To split, tear, or cleave wood or stone apart with force.",
    "Old Norse rífa",
    "The battle-axe was heavy enough to rive an iron helm in twain.",
    "Alliterative Morte Arthure"
  ],
  [
    "Robber",
    "/ˈrɒbər/",
    "m",
    "An outlaw or thief who preys on travelers along medieval trade routes.",
    "Old French robere",
    "The sheriff sent a posse into the forest to hunt down the notorious robbers.",
    "Assize of Clarendon"
  ],
  [
    "Rod Knight",
    "/rɒd naɪt/",
    "m",
    "A feudal tenant who held land by the service of riding with his lord or serving as a messenger.",
    "Old English ridan + cniht",
    "The rod knight carried the summons across the barony without delay.",
    "Feudal tenures of medieval England"
  ],
  [
    "Roll",
    "/roʊl/",
    "m",
    "An official parchment document rolled into a scroll, recording legal pleas or tax assessments.",
    "Old French rolle",
    "The clerk unrolled the parchment roll to read the names of the taxed villeins.",
    "Pipe Rolls of Henry I"
  ],
  [
    "Rondelay",
    "/ˈrɒndəleɪ/",
    "e",
    "A short poem or song with a refrain, popular in medieval and courtly circles.",
    "French rondelay",
    "The bard performed a sweet rondelay praising the beauty of the lady of the castle.",
    "George Puttenham, The Arte of English Poesie"
  ],
  [
    "Rosary",
    "/ˈroʊzəri/",
    "m",
    "A string of beads used for counting prayers in medieval Catholic devotion.",
    "Latin rosarium",
    "The noblewoman knelt in the chapel, passing her wooden rosary beads in silent prayer.",
    "Medieval Book of Hours"
  ],
  [
    "Rother",
    "/ˈrɒðər/",
    "m",
    "An old term for horned cattle, oxen, or steers.",
    "Old English hryther",
    "The tribute demanded by the overlord included twenty head of rother.",
    "Anglo-Saxon wills"
  ],
  [
    "Round Table",
    "/raʊnd ˈteɪbəl/",
    "m",
    "The legendary table of King Arthur around which his knights sat as equals.",
    "Old French la Table Ronde",
    "The fellowship of the Round Table swore sacred oaths of chivalry and honor.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Routier",
    "/ruːˈtiːeɪ/",
    "m",
    "A professional mercenary soldier serving in wandering bands during the Hundred Years' War.",
    "Old French routier",
    "The countryside was terrorized by ruthless bands of routiers seeking plunder.",
    "Jean Froissart"
  ],
  [
    "Royal",
    "/ˈrɔɪəl/",
    "m",
    "Pertaining to a king or queen, bearing the authority of the crown.",
    "Old French roial",
    "A royal decree was nailed to the market cross announcing the new taxes.",
    "Patent Rolls of the Crown"
  ],
  [
    "Rubric",
    "/ˈruːbrɪk/",
    "m",
    "A heading or instruction written in red ink in a medieval manuscript or liturgical book.",
    "Latin rubrica",
    "The scribe carefully drew the rubric at the top of the prayer for protection.",
    "Monastic scriptorium records"
  ],
  [
    "Rudiment",
    "/ˈruːdɪmənt/",
    "e",
    "The basic element, first principle, or early training in knightly combat or letters.",
    "Latin rudimentum",
    "The young page was taught the rudiments of swordplay and horsemanship.",
    "Roger Ascham, The Scholemaster"
  ],
  [
    "Runagate",
    "/ˈrʌnəɡeɪt/",
    "e",
    "A fugitive, runaway serf, or deserter from military service.",
    "Alteration of renegate",
    "The lord posted a reward for the capture of the runagate who fled the manor.",
    "Tudor proclamation rolls"
  ],
  [
    "Rusticate",
    "/ˈrʌstɪkeɪt/",
    "t",
    "To send away temporarily to the country, or to build in a rustic architectural style.",
    "Latin rusticari",
    "The disgraced courtier was ordered to rusticate on his distant country estate.",
    "Victorian historical memoirs"
  ],
  [
    "Sacken",
    "/ˈsækən/",
    "m",
    "To plunder, pillage, or ransack a town, fortress, or castle during warfare.",
    "Middle English 'saken', from Old Norse 'saka' (to harm, accuse).",
    "The mercenary band prepared to sacken the border castle before winter fell.",
    "Gawain and the Green Knight (Middle English Romance)"
  ],
  [
    "Sacerdotalism",
    "/ˌsæsərˈdoʊtəlɪzəm/",
    "t",
    "The medieval religious belief in the divine authority of priests as essential intermediaries between God and humanity.",
    "Latin 'sacerdos' (priest) via 19th-century English theological discourse.",
    "Victorian historians debated the extent of medieval sacerdotalism in shaping feudal law.",
    "Thomas Carlyle, Latter-Day Pamphlets"
  ],
  [
    "Sachem",
    "/ˈseɪtʃəm/",
    "t",
    "A chief or supreme ruler of a Native American confederacy, occasionally applied by English chroniclers to foreign tribal nobility.",
    "Algonquian (Narragansett 'saachim')",
    "The colonial chronicler compared the indigenous leader to a European feudal sachem.",
    "Captain John Smith, Generall Historie of Virginia"
  ],
  [
    "Sackless",
    "/ˈsæklɪs/",
    "m",
    "Innocent, free from guilt, or lacking fault in a feudal legal dispute.",
    "Old English 'sacleas', from Old Norse 'saklauss'.",
    "The knight swore upon the altar that he was sackless of the treasonous plot.",
    "The Laws of King Cnut"
  ],
  [
    "Sad",
    "/sæd/",
    "m",
    "Heavy, weighty, solid, or steadfast in character or armor; not sorrowful in its earliest medieval sense.",
    "Old English 'sæd' (satiated, heavy).",
    "He struck the shield a sad blow that dented the tempered steel.",
    "Chaucer, The Canterbury Tales"
  ],
  [
    "Safeguard",
    "/ˈseɪfɡɑːrd/",
    "e",
    "A formal medieval passport, military escort, or written letter of protection granted to travelers through hostile territory.",
    "Middle English 'safe' + 'guard', adapted from Anglo-Norman legal terminology.",
    "The baron demanded to see the king's safeguard before allowing the merchants to pass the gate.",
    "Shakespeare, Richard II"
  ],
  [
    "Sain",
    "/seɪn/",
    "m",
    "To bless, heal, or cross oneself against evil spirits and malevolent magic.",
    "Old English 'sęgian' or Middle English 'sainen' (from Latin 'signare').",
    "The trembling peasant began to sain himself as the dark knight approached.",
    "Piers Plowman"
  ],
  [
    "Salaam",
    "/səˈlɑːm/",
    "e",
    "A traditional medieval and early modern Eastern bow or gesture of profound respect involving a deep bend and touching the forehead.",
    "Arabic 'salām' (peace)",
    "The foreign ambassador made a low salaam before the seated monarch.",
    "Richard Hakluyt, Principal Navigations"
  ],
  [
    "Salary",
    "/ˈsæləri/",
    "m",
    "Originally, the specific allowance or stipend paid to Roman soldiers or medieval castle guards for the purchase of salt.",
    "Latin 'salarium', from 'sal' (salt).",
    "The castellan distributed the garrison's monthly salary of coin and provisions.",
    "Medieval Exchequer Rolls"
  ],
  [
    "Sale",
    "/seɪl/",
    "m",
    "A hall, principal room, or great hall of a medieval manor or castle.",
    "Old English 'sæl' or Old High German 'sal'.",
    "The lord sat upon his high seat at the upper end of the great sale.",
    "Layamon's Brut"
  ],
  [
    "Saltant",
    "/ˈsæltənt/",
    "m",
    "In medieval heraldry, depicted in a leaping or bounding posture, usually applied to beasts of prey.",
    "Latin 'saltant-' (dancing, leaping), from 'saltare'.",
    "The coat of arms displayed a golden lion saltant upon a field of azure.",
    "Treatise on Heraldry by Nicholas Upton"
  ],
  [
    "Salutation",
    "/ˌsæljʊˈteɪʃən/",
    "e",
    "A formal courtly greeting, genuflection, or ceremonial speech exchanged between nobles.",
    "Latin 'salutationem', via Old French.",
    "The herald delivered a formal salutation from the challenger outside the castle walls.",
    "Shakespeare, Henry V"
  ],
  [
    "Samsara",
    "/sæmˈsɑːrə/",
    "t",
    "The cycle of death and rebirth, studied by Victorian scholars translating medieval Eastern chronicles.",
    "Sanskrit 'saṃsāra' (wandering through)",
    "Victorian orientalists compared feudal fatalism to the cosmic wheel of samsara.",
    "Max Muller, Sacred Books of the East"
  ],
  [
    "Sanbenito",
    "/ˌsæmbəˈniːtoʊ/",
    "e",
    "A penitential yellow scapular painted with flames and devils, forced upon heretics during the Inquisition.",
    "Spanish 'sabenito', corruption of 'saco bendito' (blessed sackcloth).",
    "The condemned heretic walked to the pyre wearing the dreaded sanbenito.",
    "Foxe's Book of Martyrs"
  ],
  [
    "Sandaled",
    "/ˈsændəld/",
    "m",
    "Wearing simple foot coverings of leather or cord, typical of medieval mendicant friars.",
    "Old English 'sandel' via Latin 'sandalium'.",
    "The sandaled monk walked quietly through the castle courtyard carrying alms.",
    "The Canterbury Tales"
  ],
  [
    "Sang",
    "/sæŋ/",
    "m",
    "Blood; an archaic variant spelling and poetic term utilized in chivalric romances.",
    "Old French 'sank' or Latin 'sanguis'.",
    "The knight's white surcoat was stained with the sang of his valiant foes.",
    "Cursor Mundi"
  ],
  [
    "Sanguinary",
    "/ˈsæŋɡwɪˌnɛri/",
    "e",
    "Bloody, murderous, or characterized by massive bloodshed, typical of medieval battles.",
    "Latin 'sanguinarius', from 'sanguis' (blood).",
    "A sanguinary conflict raged for three hours outside the castle keep.",
    "Raphael Holinshed, Chronicles"
  ],
  [
    "Sappan",
    "/ˈsæpən/",
    "m",
    "A tropical Asiatic tree yielding a red dye used in medieval cloth-making and illumination.",
    "Malay 'sapat' or Portuguese 'sapa'.",
    "The merchant's cargo included precious bundles of sappan wood for dyeing wool.",
    "The Travels of Marco Polo (Middle English translation)"
  ],
  [
    "Saraband",
    "/ˈsærəˌbænd/",
    "e",
    "A stately, slow court dance introduced to European courts during the late Renaissance.",
    "Spanish 'sarabanda'",
    "The lords and ladies performed a graceful saraband during the royal wedding feast.",
    "Ben Jonson, Masques"
  ],
  [
    "Saracen",
    "/ˈsærəsən/",
    "m",
    "A medieval European term for Muslims, Arabs, or Turks encountered during the Crusades.",
    "Latin 'Saracenus', from Greek 'Sarakēnoi'.",
    "The crusader knight engaged a fierce Saracen warrior in single combat.",
    "The Song of Roland"
  ],
  [
    "Sarplier",
    "/ˈsɑːrplɪər/",
    "m",
    "A coarse canvas or sacking cloth used in medieval trade to wrap bales of wool and merchandise.",
    "Old French 'sarpliere'.",
    "The cargo was wrapped tightly in sturdy sarplier to protect it from the sea spray.",
    "Customs Accounts of the Port of London"
  ],
  [
    "Sart",
    "/sɑːrt/",
    "t",
    "An obsolete term used by medieval trade chroniclers for merchants of Central Asia.",
    "Persian 'sart' (merchant)",
    "The caravan met many Sarts along the Silk Road trading spices and silks.",
    "Sir Richard Burton, Arabian Nights commentary"
  ],
  [
    "Sarum",
    "/ˈsɛərəm/",
    "m",
    "The medieval Latin and liturgical use of Salisbury, which set the standard for English church services.",
    "Latin 'Sarum', historical name for Salisbury.",
    "The choir chanted the liturgy according to the ancient use of Sarum.",
    "Constitutions of Bishop Richard Poore"
  ],
  [
    "Satinet",
    "/ˌsætɪˈnɛt/",
    "t",
    "A lightweight fabric woven to imitate silk satin, used in Victorian historical reenactments of medieval dress.",
    "Diminutive of satin, popularized in the 19th century.",
    "The pageant actors wore bright costumes fashioned from affordable satinet.",
    "Victorian Era Costume Journals"
  ],
  [
    "Satrap",
    "/ˈseɪtræp/",
    "e",
    "A provincial governor in ancient empires, used metaphorically by Elizabethan writers for tyrannical feudal lords.",
    "Latin 'satrapes', from Old Persian 'xšaθrapāvā'.",
    "The local baron ruled his fiefdom like an absolute Persian satrap.",
    "Sir Walter Raleigh, History of the World"
  ],
  [
    "Saunter",
    "/ˈsɔːntər/",
    "e",
    "Originally, to muse, wander aimlessly, or adventure like a knight errant (from 'sainte terre').",
    "French 's'aventurer' or association with 'Holy Land' pilgrims.",
    "The weary pilgrim began to saunter along the dusty road toward Canterbury.",
    "Geoffrey Chaucer (attributed context) / Elizabethan dictionaries"
  ],
  [
    "Saut",
    "/sɔːt/",
    "m",
    "A leap, jump, or bound; used in descriptions of battlefield agility or courtly dancing.",
    "Old French 'saut', from Latin 'saltus'.",
    "With a mighty saut, the knight vaulted over the low palisade.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Save",
    "/seɪv/",
    "m",
    "Except, unless; a common preposition in Middle English legal and chivalric texts.",
    "Old French 'sauver' or Latin 'salvare'.",
    "No man might enter the lists save those bearing the king's token.",
    "Malory's Le Morte d'Arthur"
  ],
  [
    "Savine",
    "/ˈsævɪn/",
    "m",
    "An evergreen shrub (Juniperus sabina) used in medieval herbal medicine and apothecary lore.",
    "Old French 'savine', from Latin 'sabina herba'.",
    "The castle physician brewed a poultice from crushed savine leaves.",
    "Medieval Herbal Compendium"
  ],
  [
    "Savoir-faire",
    "/ˌsævwɑːr ˈfɛər/",
    "t",
    "The ability to act or speak appropriately in sophisticated feudal court situations.",
    "French 'savoir faire' (knowing how to do)",
    "The young page displayed remarkable savoir-faire before the visiting nobility.",
    "Victorian Social Etiquette Manuals"
  ],
  [
    "Saw",
    "/sɔː/",
    "m",
    "A traditional proverb, maxim, or wise saying handed down through generations of peasants and lords.",
    "Old English 'sagu' (saying, speech).",
    "The old knight quoted an ancient saw regarding the fickleness of fortune.",
    "Shakespeare, As You Like It"
  ],
  [
    "Say",
    "/seɪ/",
    "m",
    "A type of fine woolen cloth or serge manufactured in medieval Flanders and England.",
    "Shortened from Old French 'setia' or Latin 'saeta' (bristle).",
    "The tailor cut lengths of green say to line the winter cloak.",
    "London Guildhall Letter Books"
  ],
  [
    "Scabard",
    "/ˈskæbərd/",
    "m",
    "The sheath or scabbard for a sword, often decorated with precious jewels and gold filigree.",
    "Old French 'escauberc', of Germanic origin.",
    "He drew his gleaming blade from its jeweled scabard.",
    "Chanson de Roland (English translation)"
  ],
  [
    "Scaffold",
    "/ˈskæfəld/",
    "m",
    "A temporary raised timber platform erected for tournaments, executions, or castle construction.",
    "Old French 'escafaut', from Vulgar Latin *catafalcum.",
    "Noble ladies watched the jousting tournament from a richly draped timber scaffold.",
    "Froissart's Chronicles"
  ],
  [
    "Scage",
    "/skeɪdʒ/",
    "m",
    "Tribute, tax, or protection money demanded by feudal lords or invading forces.",
    "Old Norse or Anglo-Norman legal roots.",
    "The villagers were forced to pay heavy scage to spare their homes from the torch.",
    "Medieval Exchequer Records"
  ],
  [
    "Scallop",
    "/ˈskɒləp/",
    "m",
    "A shell worn as a badge by pilgrims traveling to the shrine of Saint James at Santiago de Compostela.",
    "Old French 'escalope'.",
    "The returning traveler wore a silver scallop upon his battered hat.",
    "The Pilgrimage of Sir Richard Guylforde"
  ],
  [
    "Scandalum",
    "/ˈskændələm/",
    "m",
    "Medieval Latin legal term for slander or defamation against great lords ('scandalum magnatum').",
    "Latin 'scandalum' (offense, stumbling block).",
    "The pamphleteer was arrested under the harsh laws of scandalum magnatum.",
    "Statutes of Westminster"
  ],
  [
    "Scantling",
    "/ˈskæntlɪŋ/",
    "m",
    "A small piece of timber or stone used in medieval carpentry and castle framing.",
    "Old French 'escantillon' (sample, gauge).",
    "The carpenter measured each scantling before fitting it into the roof truss.",
    "Building Accounts of Beaumaris Castle"
  ],
  [
    "Scarlet",
    "/ˈskɑːrlɪt/",
    "m",
    "A rich, high-grade medieval cloth dyed bright red, worn exclusively by the wealthy nobility.",
    "Persian 'saqirlat' via Old French 'escarlate'.",
    "The nobleman arrived clad in a tunic of finest scarlet lined with miniver.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Targe",
    "/tɑːrdʒ/",
    "m",
    "A small, round shield used in medieval combat, often highly ornamented.",
    "Middle English, from Old Norse targa",
    "The foot soldier raised his targe to deflect the descending axe blow.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Tronage",
    "/ˈtroʊnɪdʒ/",
    "m",
    "A medieval toll or custom duty paid for weighing wool and other heavy commodities.",
    "Middle English, from Anglo-Norman trunage",
    "The merchant paid his tronage at the city gates before entering the market.",
    "Medieval Exchequer Rolls"
  ],
  [
    "Trestle",
    "/ˈtrɛsəl/",
    "m",
    "A beam connected to two pairs of legs, used to support a table top in a great hall.",
    "Middle English, from Old French tressel",
    "The servants cleared the trestle tables after the royal feast concluded.",
    "Household Ordinances of Edward IV"
  ],
  [
    "Tenture",
    "/ˈtɛntʃər/",
    "m",
    "A hanging tapestry or wall covering used to decorate castle chambers.",
    "Middle English, from Old French tenture",
    "Rich tentures depicting the hunt adorned the cold stone walls of the solar.",
    "Inventory of Humphrey de Bohun"
  ],
  [
    "Trappure",
    "/trəˈpjʊər/",
    "m",
    "Ornamental cloth covering draped over a warhorse or destrier.",
    "Middle English, from Old French trapeure",
    "The destrier was arrayed in silken trappures matching his master's crest.",
    "Le Morte d'Arthur"
  ],
  [
    "Truncheon",
    "/ˈtrʌntʃən/",
    "m",
    "A short staff, baton, or club carried by a commander or authority figure.",
    "Middle English, from Old French tronçon",
    "The marshal raised his truncheon to signal the commencement of the tournament.",
    "Chronicles of Froissart"
  ],
  [
    "Tirret",
    "/ˈtɪrɪt/",
    "m",
    "A small ring or loop on a piece of harness or armor.",
    "Middle English, from Old French tirette",
    "He adjusted the leather strap through the iron tirret of his greaves.",
    "Yorkshire Wills and Inventories"
  ],
  [
    "Timbester",
    "/ˈtɪmbɛstər/",
    "m",
    "A female dancer, tumbler, or player of the tambourine in medieval courts.",
    "Middle English, from Old English timbrian",
    "The nimble timbester entertained the lords with her graceful leaps.",
    "Wycliffe Bible"
  ],
  [
    "Toft",
    "/tɒft/",
    "m",
    "A homestead or parcel of land containing a house and outbuildings.",
    "Middle English, from Old Norse toft",
    "The peasant held a small toft and croft adjacent to the lord's manor.",
    "Domesday Book"
  ],
  [
    "Tunicle",
    "/ˈtjuːnɪkəl/",
    "m",
    "A short vestment worn by subdeacons during medieval liturgical ceremonies.",
    "Middle English, from Latin tunicula",
    "The subdeacon wore a stiff tunicle of green velvet embroidered with gold.",
    "Saruma Missal"
  ],
  [
    "Toll-bar",
    "/ˈtoʊlˌbɑːr/",
    "m",
    "A barrier blocking a feudal road or bridge where transit tolls were collected.",
    "Middle English, hybrid compound",
    "The wagon halted at the toll-bar while the carter negotiated the passage fee.",
    "Manorial Court Rolls"
  ],
  [
    "Tirrivee",
    "/ˌtɪrɪˈviː/",
    "e",
    "A fit of bad temper, a tantrum, or a rage.",
    "Scots and Northern English origin of uncertain etymology",
    "The baron flew into a fierce tirrivee when he discovered the gate was unbolted.",
    "The Complaynt of Scotland"
  ],
  [
    "Tercel",
    "/ˈtɜːrsəl/",
    "m",
    "A male hawk, particularly the peregrine or goshawk used in falconry.",
    "Middle English, from Old French tercel",
    "The falconer loosed his tercel to chase the flushed pheasant across the moor.",
    "The Boke of St. Albans"
  ],
  [
    "Trabea",
    "/ˈtrɑːbiə/",
    "m",
    "An ancient Roman robe, sometimes adopted in medieval allegorical plays.",
    "Latin trabea via Middle English",
    "The noble actor stepped onto the pageant wagon wearing a purple trabea.",
    "Middle English Mystery Plays"
  ],
  [
    "Tassel",
    "/ˈtæsəl/",
    "m",
    "A loose tuft of pendants attached to hoods, cloaks, or falcon leashes.",
    "Middle English, from Old French tassel",
    "Silk tassels hung from the hem of his velvet chaperon.",
    "Chaucer, General Prologue"
  ],
  [
    "Trivet",
    "/ˈtrɪvɪt/",
    "m",
    "A three-legged iron stand used for supporting pots over a castle hearth fire.",
    "Middle English, from Latin tripus",
    "The iron pot was set upon the trivet to simmer the pottage.",
    "Promptorium Parvulorum"
  ],
  [
    "Tressure",
    "/ˈtrɛʃər/",
    "m",
    "A narrow border running parallel to the edge of an escutcheon in heraldry.",
    "Middle English, from Old French tressure",
    "His shield displayed a double tressure flowry counter-flowry.",
    "Heraldic Rolls of Arms"
  ],
  [
    "Targe-man",
    "/ˈtɑːrdʒˌmæn/",
    "m",
    "A soldier armed with a targe shield in medieval infantry formations.",
    "Middle English compound",
    "The targe-men formed a solid wall against the enemy archers.",
    "Scottish Border Chronicles"
  ],
  [
    "Truage",
    "/ˈtruːɪdʒ/",
    "m",
    "Tribute or feudal allegiance paid by a vassal to a superior lord.",
    "Middle English, from Old French truage",
    "The petty chieftain offered truage to the invading earl to save his keep.",
    "Gesta Stephani"
  ],
  [
    "Tine",
    "/taɪn/",
    "m",
    "A prong or spike of a deer's antler, used to measure a stag's age and worth.",
    "Old English tina",
    "The stag was reckoned a noble beast of ten tines.",
    "The Master of Game"
  ],
  [
    "Tallow-catch",
    "/ˈtæloʊˌkætʃ/",
    "e",
    "A lump of tallow or a fat person, used as a term of Elizabethan derision.",
    "Shakespearean coinage",
    "Away, you stockfish, you tallow-catch!",
    "Shakespeare, Henry IV, Part 1"
  ],
  [
    "Tret",
    "/trɛt/",
    "m",
    "An allowance for waste or tare given to a buyer of wholesale goods.",
    "Middle English, from Old French tret",
    "The merchant granted a standard tret upon the consignment of spices.",
    "Customs of London"
  ],
  [
    "Trice",
    "/traɪs/",
    "m",
    "A very short space of time, an instant.",
    "Middle English, from verb trisen (to pull or hoist)",
    "In a trice, the drawbridge was raised against the approaching horsemen.",
    "Cursor Mundi"
  ],
  [
    "Tryst",
    "/trɪst/",
    "m",
    "An appointed meeting place for hunters or medieval lovers.",
    "Middle English, from Old Norse treysta",
    "They met at the designated trysting tree on the edge of the royal forest.",
    "Sir Tristrem"
  ],
  [
    "Tirawant",
    "/ˈtɪrəˌwɒnt/",
    "e",
    "A tyrant or despot, often found in Elizabethan drama.",
    "Elizabethan coinage from tyrant",
    "The cruel tirawant oppressed his realm with heavy levies.",
    "Spenser, The Faerie Queene"
  ],
  [
    "Turnkey",
    "/ˈtɜːrnkiː/",
    "m",
    "A jailer or warden responsible for the keys of a castle dungeon.",
    "Middle English, turn + key",
    "The turnkey brought a crust of bread and a cup of water to the prisoner.",
    "Medieval Jail Delivery Rolls"
  ],
  [
    "Tut-work",
    "/ˈtʌtˌwɜːrk/",
    "m",
    "Mining work paid by the piece or task rather than by time, common in stannaries.",
    "Middle English mining term",
    "The miners took on tut-work to clear the lower gallery of the tin mine.",
    "Cornish Mining Laws"
  ],
  [
    "Tipstaff",
    "/ˈtɪpˌstɑːf/",
    "m",
    "An officer of a court who carried a staff tipped with metal as a badge of office.",
    "Middle English compound",
    "The tipstaff escorted the accused knight before the royal justices.",
    "Legal Records of Edward III"
  ],
  [
    "Turret",
    "/ˈtʌrɪt/",
    "m",
    "A small tower that projects vertically from the wall or corner of a castle.",
    "Middle English, from Old French tourette",
    "An archer scanned the horizon from the parapet of the western turret.",
    "Accounts of the Tower of London"
  ],
  [
    "Traverse",
    "/trəˈvɜːrs/",
    "m",
    "A curtain or screen used to divide a medieval hall or chamber.",
    "Middle English, from Old French travers",
    "The lady withdrew behind the silk traverse to rest.",
    "Morte Arthure"
  ],
  [
    "To-year",
    "/tʊˈjɪər/",
    "m",
    "During this present year.",
    "Old English to-geare",
    "The harvest has been poor to-year throughout the barony.",
    "Piers Plowman"
  ],
  [
    "Tidife",
    "/ˈtɪdɪf/",
    "m",
    "A small bird, often identified as a titmouse or warbler, used in medieval verse.",
    "Middle English tidif",
    "The tidife sang sweetly in the orchard outside the castle gate.",
    "Chaucer, The Squire's Tale"
  ],
  [
    "Toll-booth",
    "/ˈtoʊlˌbuːθ/",
    "m",
    "A town hall, customs house, or booth where taxes and tolls were collected.",
    "Middle English compound",
    "The burgesses assembled at the toll-booth to discuss the town charter.",
    "Scottish Burgh Records"
  ],
  [
    "Tars",
    "/tɑːrz/",
    "m",
    "A costly fabric of silk, possibly originating from Tarsus, used by nobility.",
    "Middle English, shortened from Tartarin",
    "Her gown was fashioned from fine blue tars embroidered with pearls.",
    "Alliterative Morte Arthure"
  ],
  [
    "Tabouret",
    "/ˈtæbʊrɛt/",
    "m",
    "A small upholstered stool without arms or back used in high-status chambers.",
    "Middle English, from Old French tabouret",
    "She sat upon a velvet tabouret while embroidering her lord's standard.",
    "Medieval Household Accounts"
  ],
  [
    "Trine",
    "/traɪn/",
    "m",
    "An astrological aspect of heavenly bodies spaced 120 degrees apart.",
    "Middle English, from Latin trinus",
    "The astrologer declared the planet's trine favorable for the coronation.",
    "Chaucer, Troilus and Criseyde"
  ],
  [
    "Tup",
    "/tʌp/",
    "m",
    "A ram, an uncastrated adult male sheep.",
    "Middle English origin, possibly Old Norse",
    "The shepherd pastured his prized tup upon the common grazing land.",
    "Manorial Customals"
  ],
  [
    "Tyro",
    "/ˈtaɪroʊ/",
    "e",
    "A beginner, novice, or recruit in arms.",
    "Latin tiro via Renaissance English",
    "The veteran knight patiently instructed the tyro in the proper grip of the lance.",
    "Ascham, Toxophilus"
  ],
  [
    "Umber",
    "/ˈʌmbər/",
    "m",
    "A heavy, dark brown earth used as a pigment for painting or illumination in medieval manuscripts.",
    "From Old French 'ombre', from Latin 'umbra' meaning shadow.",
    "The limner ground the umber with linseed oil to shade the robes of the Virgin.",
    "Theophilus Presbyter, 'De Diversis Artibus', c. 1125"
  ],
  [
    "Umpire",
    "/ˈʌmpaɪər/",
    "m",
    "A third party chosen to decide a dispute between vassals or arbitrate a point of honor.",
    "From Middle English 'noumpere', from Old French 'nonpeer' meaning not a peer (odd one out).",
    "The two knights submitted their boundary dispute to the umpire of the local guild.",
    "Year Books of Edward I, c. 1300"
  ],
  [
    "Unaneled",
    "/ˌʌnəˈniːld/",
    "e",
    "Without having received extreme unction or the last rites before death.",
    "From Old English 'un-' (not) + 'aneld' (anointed), past participle of 'onælan'.",
    "Cut off even in the blossoms of my sin, unhouselled, disappointed, unaneled.",
    "William Shakespeare, 'Hamlet', c. 1600"
  ],
  [
    "Unarm",
    "/ʌnˈɑːrm/",
    "e",
    "To strip off armor; to take off one's defensive harness or mail.",
    "From Middle English 'unarmen', from Old French 'unarmer', based on Latin 'armare'.",
    "Unarm, Eros; the long day's task is done, and we must sleep.",
    "William Shakespeare, 'Antony and Cleopatra', c. 1606"
  ],
  [
    "Unassayed",
    "/ˌʌnəˈseɪd/",
    "m",
    "Untried, untested, or unproven in battle or trial of arms.",
    "From Old English 'un-' + Old French 'assaier' (to test or try).",
    "He left his maiden shield unassayed until the grand tourney at Camelot.",
    "Sir Thomas Malory, 'Le Morte d'Arthur', 1485"
  ],
  [
    "Unbated",
    "/ʌnˈbeɪtɪd/",
    "e",
    "Not blunted; referring to a sword point lacking the usual button or foil protection.",
    "From 'un-' + 'bate' (to reduce force or blunt), from Old French 'abatre'.",
    "You shall put a noble and arief rider on him, with an unbated sword and a stock of venom.",
    "William Shakespeare, 'Hamlet', c. 1600"
  ],
  [
    "Unbeholden",
    "/ˌʌnbɪˈhoʊldən/",
    "t",
    "Not under obligation; free from feudal ties or debt of gratitude.",
    "From Old English 'un-' + 'behealden' (to hold, behold, bind).",
    "The sturdy yeoman stood unbeholden to any lord for his patch of tillage.",
    "Sir Walter Scott, 'Ivanhoe', 1819"
  ],
  [
    "Unbeseeming",
    "/ˌʌnbɪˈsiːmɪŋ/",
    "e",
    "Unbecoming, improper, or unbefitting the dignity of a knight or noble.",
    "From 'un-' + Middle English 'beseimen' (to beseem, suit).",
    "Such unbeseeming brawls in the bailey do dishonor to the castle guard.",
    "William Shakespeare, 'Romeo and Juliet', c. 1595"
  ],
  [
    "Unbitch",
    "/ʌnˈbɪtʃ/",
    "m",
    "To unfasten or loose a hound from the leash or coupling during the chase.",
    "From Old English 'un-' + 'bicce' (female hound, bitch).",
    "The huntsman blew a merry mote upon his horn to unbitch the pack.",
    "The Master of Game, Edward of Norwich, c. 1406"
  ],
  [
    "Unbosom",
    "/ʌnˈbʊzəm/",
    "e",
    "To disclose one's innermost thoughts, secrets, or confidences to another.",
    "From Old English 'unbosmian', from 'bosm' (bosom, breast).",
    "He knelt before the friar to unbosom his treasonous intentions.",
    "William Shakespeare, 'The Winter's Tale', c. 1611"
  ],
  [
    "Unboultered",
    "/ʌnˈboʊltərd/",
    "e",
    "Freed from blood clots or matted gore upon a wound or head.",
    "From 'un-' + dialectal 'boulter' (to stain or clot with blood).",
    "His helm was cleft and his hair unboultered with the sweat of the melee.",
    "Ben Jonson, 'The Alchemist', 1610"
  ],
  [
    "Unbowed",
    "/ʌnˈbaʊd/",
    "m",
    "Not bent in submission; proudly defiant of feudal oppression.",
    "From Old English 'unbogan', past participle of 'unbogan' (to unbend).",
    "The captive Saxon stood unbowed before the Norman baron's throne.",
    "Layamon, 'Brut', c. 1200"
  ],
  [
    "Uncastle",
    "/ʌnˈkæsəl/",
    "e",
    "To drive or force an enemy out of a stronghold or castle.",
    "From 'un-' + noun 'castle', modeled after Latinized forms of siege warfare.",
    "The king's cannon played upon the wall to uncastle the rebel lords.",
    "Thomas Nashe, 'The Unfortunate Traveller', 1594"
  ],
  [
    "Uncasing",
    "/ʌnˈkeɪsɪŋ/",
    "m",
    "The removal of a protective leather or canvas sheath from a falcon, bow, or sword.",
    "From 'un-' + Old French 'chasse' (box, chest, case).",
    "At the signal of the marshal, the archers proceeded to the uncasing of their yew bows.",
    "Gaston Phoebus, 'Book of chasse', c. 1387"
  ],
  [
    "Unchapel",
    "/ʌnˈtʃæpəl/",
    "e",
    "To strip a chapel of its sacred character, altars, or holy vessels.",
    "From 'un-' + Middle English 'chapel', from Late Latin 'capella'.",
    "The marauding mercenaries did unchapel the abbey and scatter the relics.",
    "John Foxe, 'Actes and Monuments', 1563"
  ],
  [
    "Unchary",
    "/ʌnˈtʃɛəri/",
    "e",
    "Not cautious, prodigal, lavish, or unsparing in expenditure or valor.",
    "From Old English 'un-' + 'cearig' (sorrowful, anxious, careful).",
    "He was unchary of his gold when the minstrels sang in the great hall.",
    "William Shakespeare, 'Twelfth Night', c. 1601"
  ],
  [
    "Unchastised",
    "/ˌʌntʃæsˈtaɪzd/",
    "e",
    "Not punished, corrected, or disciplined for an offense against feudal law.",
    "From 'un-' + 'chastise', from Old French 'chastier'.",
    "No vassal should go unchastised who withheld his rightful scutage.",
    "Sir Walter Raleigh, 'History of the World', 1614"
  ],
  [
    "Uncloak",
    "/ʌnˈkloʊk/",
    "e",
    "To reveal one's true identity or uncover a secret conspiracy.",
    "From 'un-' + Middle English 'cloke', from medieval Latin 'clocca'.",
    "The masked rider did uncloak in the courtyard to prove his royal blood.",
    "Christopher Marlowe, 'Edward II', c. 1592"
  ],
  [
    "Uncoined",
    "/ʌnˈkɔɪnd/",
    "e",
    "Consisting of raw bullion or metal ingots rather than minted currency.",
    "From Old English 'un-' + Old French 'coignier' (to mint).",
    "The ransom was paid in uncoined silver bars marked with the bishop's seal.",
    "Richard Hakluyt, 'Principal Navigations', 1589"
  ],
  [
    "Uncouple",
    "/ʌnˈkʌpəl/",
    "m",
    "To release hounds from their leashes to begin the hunt.",
    "From Old French 'uncoupler', from Latin 'copulare'.",
    "The master of the buckhounds gave the word to uncouple the pack.",
    "The Master of Game, Edward of Norwich, c. 1406"
  ],
  [
    "Uncouth",
    "/ʌnˈkuːθ/",
    "m",
    "Unfamiliar, strange, clumsy, or lacking courtly manners and refinement.",
    "From Old English 'uncūð' (unknown, strange, unfamiliar).",
    "His manners were deemed uncouth by the ladies of the queen's chamber.",
    "Chaucer, 'Canterbury Tales', c. 1387"
  ],
  [
    "Undawned",
    "/ʌnˈdɔːnd/",
    "t",
    "Not yet illuminated by the dawn; dark and shadowy, like an early battlefield.",
    "From Old English 'un-' + 'dagian' (to dawn).",
    "The knights assembled in the undawned mist before the castle moat.",
    "Alfred Lord Tennyson, 'Idylls of the King', 1859"
  ],
  [
    "Undeck",
    "/ʌnˈdɛk/",
    "e",
    "To strip of ornaments, decorations, or rich garments.",
    "From Dutch 'ondecken' or 'un-' + decken (to cover).",
    "They set upon the captured merchant and did undeck him of his velvet mantle.",
    "Thomas Dekker, 'The Shoemaker's Holiday', 1599"
  ],
  [
    "Under-chamberlain",
    "/ˈʌndər ˈtʃeɪmbərlɪn/",
    "m",
    "A subordinate officer who assisted the chamberlain in managing a lord's household.",
    "From Old English 'under' + Old French 'chamberlain'.",
    "The under-chamberlain brought the ewer and basin for the guest's ablutions.",
    "Household Ordinance of Edward II, 1323"
  ],
  [
    "Under-cook",
    "/ˈʌndər kʊk/",
    "m",
    "A kitchen servant who labored under the master cook in medieval castle kitchens.",
    "From Old English 'under' + 'cōc'.",
    "The under-cook was scalded by hot pottage during the wedding feast prep.",
    "Liber Quotidianus Garderobae, 1299"
  ],
  [
    "Under-marshal",
    "/ˈʌndər ˈmɑːrʃəl/",
    "m",
    "An official who kept order in the castle bailey and assisted the lord marshal.",
    "From Old English 'under' + Old French 'mareschal'.",
    "The under-marshal cleared the tiltyard of stray dogs and urchins.",
    "Black Book of the Household of Edward IV, c. 1472"
  ],
  [
    "Underminer",
    "/ˈʌndərˌmaɪnər/",
    "m",
    "A sapper or military engineer whose duty was to dig beneath castle walls.",
    "From 'under' + Middle English 'minour', from Old French 'miner'.",
    "The underminer drove his props of timber into the base of the great keep.",
    "Geoffrey le Baker, 'Chronicle', c. 1360"
  ],
  [
    "Undermint",
    "/ˈʌndərˌmɪnt/",
    "m",
    "To forge counterfeit coin secretly in clandestine medieval mints.",
    "From Old English 'under' + 'myntan' (to coin money).",
    "The rogue was hanged at Tyburn for an attempt to undermint the king's groats.",
    "Statutes of the Realm, 1415"
  ],
  [
    "Undern",
    "/ˈʌndərn/",
    "m",
    "The third canonical hour of the day, about 9:00 AM, or mid-morning.",
    "From Old English 'undern' (morning, third hour).",
    "The council of barons assembled at undern to discuss the levy of taxes.",
    "Cursor Mundi, c. 1300"
  ],
  [
    "Undershield",
    "/ˈʌndərʃiːld/",
    "m",
    "A secondary or reinforcement shield used in close castle infantry combat.",
    "From Old English 'under' + 'scield'.",
    "The foot-soldier rested his heavy undershield upon the timber breastwork.",
    "Wace, 'Roman de Brut', c. 1155"
  ],
  [
    "Undertable",
    "/ˈʌndərˌteɪbəl/",
    "m",
    "The lower part of a feasting table where squires and servants sat.",
    "From Old English 'under' + Old French 'table'.",
    "The pages and squires were bidden to take their meat at the undertable.",
    "Morte Arthure, c. 1400"
  ],
  [
    "Undervalue",
    "/ˌʌndərˈvæljuː/",
    "e",
    "To hold in low esteem; to disparage a knight's honor or prowess.",
    "From 'under-' + Old French 'alue' (value), from Latin 'valere'.",
    "He did undervalue the challenger's crest, causing a mortal feud.",
    "Edmund Spenser, 'The Faerie Queene', 1590"
  ],
  [
    "Undight",
    "/ʌnˈdaɪt/",
    "m",
    "To take off, strip away, loosen, or undress armor or garments.",
    "From Old English 'undīhtan' (to unfasten, unlock).",
    "The weary knight did undight his heavy plates within his bedchamber.",
    "Sir Thomas Malory, 'Le Morte d'Arthur', 1485"
  ],
  [
    "Unduteous",
    "/ʌnˈduːtiəs/",
    "e",
    "Disobedient or neglectful of feudal or familial duty and loyalty.",
    "From 'un-' + Middle English 'duteous', from Old French 'dúe'.",
    "An unduteous vassal who denies his homage shall forfeit his fief.",
    "William Shakespeare, 'King Lear', c. 1605"
  ],
  [
    "Unease",
    "/ʌnˈiːz/",
    "m",
    "Discomfort, hardship, or physical distress suffered during campaigns.",
    "From Old English 'un-' + Old French 'aise'.",
    "They suffered much unease upon the stony roads of the mountain pass.",
    "Robert of Gloucester, 'Chronicle', c. 1300"
  ],
  [
    "Unfetter",
    "/ʌnˈfɛtər/",
    "m",
    "To release from chains, fetters, or imprisonment in the castle dungeon.",
    "From Old English 'unfetorian', from 'feter' (shackle).",
    "The merciful lord commanded the bailiff to unfetter the captive knight.",
    "Gesta Stephani, c. 1153"
  ],
  [
    "Unfit",
    "/ʌnˈfɪt/",
    "e",
    "Unsuitable, improper, or unequipped for knighthood or chivalric deeds.",
    "From 'un-' + Middle English 'fitten' (to adapt or suit).",
    "He proved quite unfit for the saddle and fell at the first shock.",
    "Roger Ascham, 'The Scholemaster', 1570"
  ],
  [
    "Unfortify",
    "/ʌnˈfɔːrtɪfaɪ/",
    "e",
    "To strip of fortifications, defenses, walls, or garrisons.",
    "From 'un-' + medieval Latin 'fortificare'.",
    "The treaty required the conquered town to unfortify its eastern gate.",
    "Sir Walter Raleigh, 'History of the World', 1614"
  ],
  [
    "Ungird",
    "/ʌnˈɡɜːrd/",
    "m",
    "To loosen or take off one's sword belt or girdle after a journey.",
    "From Old English 'ungyrdan', from 'gyrdan' (to gird).",
    "He sat by the hearth to ungird his sword and ease his tired limbs.",
    "Chaucer, 'Troilus and Criseyde', c. 1385"
  ],
  [
    "Unhand",
    "/ʌnˈhænd/",
    "e",
    "To let go of; to loose one's grip from a person's garments or sword arm.",
    "From Old English 'un-handian', from 'hand'.",
    "Unhand me, varlet, or feel the edge of my dagger!",
    "William Shakespeare, 'The Winter's Tale', c. 1611"
  ],
  [
    "Unharness",
    "/ʌnˈhɑːrnɪs/",
    "m",
    "To remove armor or mail from a knight, or tackle from a draft horse.",
    "From Old English 'un-' + Old French 'harnois' (armor/harness).",
    "The squires hastened to unharness their lord after the grueling tournament.",
    "Sir Thomas Malory, 'Le Morte d'Arthur', 1485"
  ],
  [
    "Unhouse",
    "/ʌnˈhaʊs/",
    "e",
    "To drive from one's dwelling or castle; to evict a tenant or vassal.",
    "From Old English 'unhusian', from 'hus' (house).",
    "The tyrant threatened to unhouse every peasant who failed to pay rent.",
    "John Donne, 'Sermons', c. 1625"
  ],
  [
    "Unknightly",
    "/ʌnˈnaɪtli/",
    "m",
    "Unbefitting the code, honor, and behavior of a true knight.",
    "From Old English 'un-' + 'cnihtlic' (boyish, knightly).",
    "To strike a fallen foe from behind was deemed unknightly and foul.",
    "Caxton, 'The Book of Othe Ordre of Chyvalry', 1484"
  ],
  [
    "Unman",
    "/ʌnˈmæn/",
    "e",
    "To deprive of manly courage, fortitude, or resolve; to dishearten.",
    "From Old English 'unmannian', from 'mann' (man).",
    "The terrible slaughter in the breach did unman the stoutest veterans.",
    "William Shakespeare, 'Macbeth', c. 1606"
  ],
  [
    "Unweeting",
    "/ʌnˈwiːtɪŋ/",
    "m",
    "Unknowing, unconscious, or unaware of an impending ambush or plot.",
    "From Old English 'unwitend', present participle of 'unwitan' (not to know).",
    "The unweeting traveler walked straight into the brigands' forest camp.",
    "Spenser, 'The Faerie Queene', 1590"
  ],
  [
    "Vavasour",
    "/ˈvævəzɔːr/",
    "m",
    "A feudal nobleman ranking below a baron and above a knight.",
    "Old French (vassalvassorum)",
    "The wealthy vavasour brought fifty armed men to the muster.",
    "Chaucer, The Canterbury Tales"
  ],
  [
    "Vanguard",
    "/ˈvæŋɡɑːrd/",
    "m",
    "The foremost part of an advancing army.",
    "Middle English (from Old French avant-garde)",
    "The knights of the vanguard charged fiercely against the infidel line.",
    "Le Morte d'Arthur"
  ],
  [
    "Vavasory",
    "/ˈvævəsəri/",
    "m",
    "The land held or the rank belonging to a vavasour.",
    "Middle English",
    "He was granted a fair vavasory by the grateful king.",
    "Feudal Law Records"
  ],
  [
    "Vademecum",
    "/ˌvædɪˈmiːkəm/",
    "e",
    "A handbook or guide that a person carries constantly.",
    "Latin (meaning 'go with me')",
    "This small volume served as his trusty vademecum through the perilous realm.",
    "Elizabethan Court Journals"
  ],
  [
    "Vagabond",
    "/ˈvæɡəbɒnd/",
    "m",
    "A wanderer without a settled home or regular work.",
    "Middle English (from Old French vagabond)",
    "The town bailiff drove the vagabond beyond the castle walls.",
    "Piers Plowman"
  ],
  [
    "Vainglory",
    "/ˈveɪnɡlɔːri/",
    "m",
    "Excessive vanity or pride in one's own achievements.",
    "Middle English (from Old French vanaglorie)",
    "Beware the sin of vainglory, which blinds even the bravest knight.",
    "The Parson's Tale"
  ],
  [
    "Valance",
    "/ˈvæləns/",
    "m",
    "A piece of drapery hanging from the canopy of a bed.",
    "Middle English (associated with Valencia)",
    "The bedchamber was adorned with velvet hangings and an embroidered valance.",
    "Household Inventories of Edward IV"
  ],
  [
    "Valet",
    "/ˈvælɪt/",
    "m",
    "A young nobleman in training for knighthood, or a male personal servant.",
    "Middle English (from Old French vaslet)",
    "The young valet helped his master buckle his greaves.",
    "Chivalric Romances"
  ],
  [
    "Valiant",
    "/ˈvæljənt/",
    "m",
    "Possessing or showing courage or determination in battle.",
    "Middle English (from Old French vaillant)",
    "A valiant knight needs no shield when his heart is pure.",
    "Song of Roland translation"
  ],
  [
    "Valor",
    "/ˈvælər/",
    "m",
    "Great courage in the face of danger, especially in battle.",
    "Middle English (from Old French valor)",
    "The king bestowed the golden spurs upon him for his exceptional valor.",
    "Chronicles of Froissart"
  ],
  [
    "Vane",
    "/veɪn/",
    "m",
    "A blade attached to an axis to show the direction of the wind upon a keep.",
    "Old English (fana)",
    "The iron vane atop the donjon creaked in the bitter northern gale.",
    "Medieval Architectural Records"
  ],
  [
    "Vanguardism",
    "/ˈvæŋɡɑːrdɪzəm/",
    "t",
    "The disposition or actions of the vanguard in military or cultural contexts.",
    "Victorian coinage",
    "His tactical vanguardism surprised the entrenched enemy.",
    "Victorian Military Histories"
  ],
  [
    "Vantage",
    "/ˈvæntɪdʒ/",
    "m",
    "A place or position providing a good view or perspective.",
    "Middle English (aphetic form of advantage)",
    "From his vantage upon the battlements, he spied the approaching host.",
    "Wars of the Roses Chronicles"
  ],
  [
    "Vavasourship",
    "/ˈvævəzɔːrʃɪp/",
    "m",
    "The rank, dignity, or estate of a vavasour.",
    "Middle English",
    "By right of birth, he claimed his ancestral vavasourship.",
    "Feudal Rolls"
  ],
  [
    "Vellon",
    "/vəˈlɒn/",
    "e",
    "A base coin or copper standard of currency in historical Spain.",
    "Spanish (vellón)",
    "He paid the tavern keeper in tarnished pieces of vellon.",
    "Elizabethan Merchant Accounts"
  ],
  [
    "Velum",
    "/ˈviːləm/",
    "m",
    "Fine parchment made from calfskin used for medieval manuscripts.",
    "Latin (velum)",
    "The monk inscribed the holy text upon the finest white velum.",
    "Monastic Annals"
  ],
  [
    "Venery",
    "/ˈvɛnəri/",
    "m",
    "The practice or sport of hunting wild beasts; the chase.",
    "Middle English (from Old French venerie)",
    "The lord spent his autumn days in the noble arts of venery.",
    "The Master of Game"
  ],
  [
    "Venison",
    "/ˈvɛnɪzən/",
    "m",
    "Meat from a deer, strictly regulated by royal forest laws.",
    "Middle English (from Old French venoison)",
    "Roasted venison and spiced ale were served at the high table.",
    "Medieval Banquet Rolls"
  ],
  [
    "Venom",
    "/ˈvɛnəm/",
    "m",
    "Poison secreted by animals, or maliciously bitter language.",
    "Middle English (from Old French venim)",
    "The assassin tipped his dagger with deadly snake venom.",
    "Medieval Medical Compendiums"
  ],
  [
    "Ventriloquy",
    "/vɛnˈtrɪləkwi/",
    "e",
    "The art of speaking without moving the lips, often deemed witchcraft.",
    "Latin (ventriloquus)",
    "The accused mountebank was suspected of using ventriloquy to deceive the court.",
    "Elizabethan Witchcraft Trials"
  ],
  [
    "Verandah",
    "/vəˈrændə/",
    "t",
    "A roofed platform along the outside of a building.",
    "Hindi (varanda) via Portuguese",
    "The lord rested upon the manor verandah as the sun sank low.",
    "Victorian Country House Journals"
  ],
  [
    "Verdant",
    "/ˈvɜːrdənt/",
    "m",
    "Green with grass or other rich vegetation.",
    "Middle English (from Old French verdant)",
    "They pitched their pavilions in a verdant valley beneath the fortress.",
    "Medieval Romances"
  ],
  [
    "Veridical",
    "/vəˈrɪdɪkəl/",
    "e",
    "Truthful; coinciding with reality.",
    "Latin (veridicus)",
    "His report of the siege was entirely veridical.",
    "State Papers of Elizabeth I"
  ],
  [
    "Verve",
    "/vɜːrv/",
    "t",
    "Enthusiasm and vigor of spirit or expression.",
    "French",
    "The young squire swung his broadsword with astonishing verve.",
    "Victorian Romantic Poetry"
  ],
  [
    "Vessel",
    "/ˈvɛsəl/",
    "m",
    "A ship or large boat, or a hollow container for liquids.",
    "Middle English (from Old French vessel)",
    "The sturdy cog was a fine vessel for crossing the choppy channel.",
    "Maritime Customals"
  ],
  [
    "Vest",
    "/vɛst/",
    "e",
    "To confer or bestow power, authority, or property upon someone.",
    "Latin (vestire)",
    "The crown was vested in the eldest prince.",
    "Tudor Legal Statutes"
  ],
  [
    "Veste",
    "/vɛst/",
    "m",
    "An outer garment or vestment worn in ceremonies.",
    "Old French",
    "He wore the sacred veste of the monastic order.",
    "Church Inventories"
  ],
  [
    "Vestment",
    "/ˈvɛstmənt/",
    "m",
    "A chasuble or other garment worn by clergy during divine service.",
    "Middle English (from Latin vestimentum)",
    "The priest donned his embroidered silk vestment for mass.",
    "Medieval Liturgical Texts"
  ],
  [
    "Vesture",
    "/ˈvɛstʃər/",
    "m",
    "Clothing or apparel, especially of a formal or rich kind.",
    "Middle English (from Latin vestitura)",
    "His rich vesture bespoke his high noble birth.",
    "Chaucer, The Knight's Tale"
  ],
  [
    "Vexillology",
    "/ˌvɛksɪˈlɒlədʒi/",
    "t",
    "The study of flags, banners, and armorial ensigns.",
    "Modern coinage from Latin vexillum",
    "The scholar of heraldry took a deep interest in medieval vexillology.",
    "Victorian Heraldic Societies"
  ],
  [
    "Vial",
    "/ˈvaɪəl/",
    "m",
    "A small cylindrical container for holding liquids, especially potions.",
    "Middle English (from Old French viole)",
    "The healer handed the knight a tiny glass vial of healing balm.",
    "Medieval Herbals"
  ],
  [
    "Viand",
    "/ˈvaɪənd/",
    "m",
    "An item of food; usually plural for provisions or delicacies.",
    "Middle English (from Old French viande)",
    "The trestle tables groaned under the weight of roasted viands.",
    "Medieval Feast Chronicles"
  ],
  [
    "Vicar",
    "/ˈvɪkər/",
    "m",
    "A parish priest who receives a stipend rather than tithes.",
    "Middle English (from Latin vicarius)",
    "The humble vicar tended to the spiritual needs of the castle villagers.",
    "Parish Registers"
  ],
  [
    "Vice",
    "/vaɪs/",
    "m",
    "A wicked or immoral behavior; also a mechanical screw clamp.",
    "Middle English (from Old French vice)",
    "The blacksmith secured the red-hot horseshoe in his heavy iron vice.",
    "Medieval Guild Records"
  ],
  [
    "Vigil",
    "/ˈvɪdʒɪl/",
    "m",
    "A period of keeping awake during the night, often spent in prayer before knighting.",
    "Middle English (from Latin vigilia)",
    "The squire spent the entire night in silent vigil before the altar.",
    "Ordination of Knights"
  ],
  [
    "Vignette",
    "/vɪnˈjɛt/",
    "t",
    "A small decorative design or illustration on a manuscript page.",
    "French (meaning 'little vine')",
    "The margin of the vellum was illuminated with a delicate gold vignette.",
    "Victorian Bibliophile Reviews"
  ],
  [
    "Visage",
    "/ˈvɪzɪdʒ/",
    "m",
    "A person's facial expression or general countenance.",
    "Middle English (from Old French visage)",
    "Stern resolve was etched upon the knight's grim visage.",
    "Alliterative Morte Arthure"
  ],
  [
    "Visor",
    "/ˈvaɪzər/",
    "m",
    "The moveable part of a helmet that covers the face.",
    "Middle English (from Old French visier)",
    "He lowered his steel visor and couched his lance.",
    "Tournament Ordinances"
  ],
  [
    "Vizard",
    "/ˈvɪzərd/",
    "e",
    "A mask worn to disguise the face, popular in Elizabethan masques.",
    "Middle English / Elizabethan variant of visor",
    "The mysterious noblewoman entered the hall wearing a black velvet vizard.",
    "Elizabethan Playwrights"
  ],
  [
    "Wait-fee",
    "/ˈweɪtˌfiː/",
    "m",
    "A fee or due paid to castle watchmen or town waits for their service.",
    "Middle English, from 'wait' (watchman) + 'fee'.",
    "The bailiff collected the annual wait-fee from each burgess for the castle garrison's upkeep.",
    "Exchequer Rolls of Scotland, 14th Century"
  ],
  [
    "Wapen",
    "/ˈwɑːpən/",
    "m",
    "An obsolete plural form of weapon, often referring to a knight's armaments.",
    "Old English 'wǣpen'.",
    "Each vassal presented himself at the muster with horse and stout wapen.",
    "The Peterborough Chronicle"
  ],
  [
    "Wapen-take",
    "/ˈwɑːpənˌteɪk/",
    "m",
    "A subdivision of certain English counties, historically corresponding to a hundred, originating from the touching of weapons to confirm allegiance.",
    "Old English 'wæpenġetæc'.",
    "The sheriff summoned all freemen of the wapen-take to the moot.",
    "Domesday Book"
  ],
  [
    "War-byte",
    "/ˈwɔːrˌbaɪt/",
    "m",
    "A sword; literally that which bites in war.",
    "Old English 'wigbite' / poetic kenning.",
    "He drew his trusty war-byte from the scabbard as the enemy breached the barbican.",
    "Beowulf"
  ],
  [
    "Ward-corn",
    "/ˈwɔːrdˌkɔːrn/",
    "m",
    "A feudal contribution of corn paid toward the maintenance of castle guards.",
    "Old English 'weard' (guard) + 'corn' (grain).",
    "The tenants brought their customary ward-corn to the granary at Michaelmas.",
    "Manorial Roll of Durham, 1311"
  ],
  [
    "Ward-mote",
    "/ˈwɔːrdˌmoʊt/",
    "m",
    "A meeting of the inhabitants of a ward, particularly in medieval London, presided over by an alderman.",
    "Old English 'weard' + 'mōt' (assembly).",
    "The alderman summoned a ward-mote to address the breach of the city wall.",
    "Liber Albus"
  ],
  [
    "Ward-penny",
    "/ˈwɔːrdˌpɛni/",
    "m",
    "A monetary payment made in lieu of performing castle-guard duty.",
    "Old English 'weard' + 'penig'.",
    "Instead of standing watch upon the rampart, the merchant paid his ward-penny.",
    "Cartulary of Ramsey Abbey"
  ],
  [
    "War-gear",
    "/ˈwɔːrˌɡɪər/",
    "m",
    "Armor, harness, and offensive weapons collectively.",
    "Old English 'wringear'.",
    "The knights donned their heavy war-gear before mounting their destriers.",
    "Layamon's Brut"
  ],
  [
    "Warrandice",
    "/ˈwɒrəndɪs/",
    "m",
    "A feudal warranty or guarantee of title to land against legal challenge.",
    "Anglo-Norman 'warandise'.",
    "The charter was sealed with full warrandice against all claimants.",
    "Regiam Majestatem"
  ],
  [
    "Wastel",
    "/ˈwɒstəl/",
    "m",
    "A fine-quality white bread eaten by lords and nobility, superior to brown bread.",
    "Old French 'wastel', from Germanic.",
    "The high table was served with steaming potage and fine wastel bread.",
    "Household Ordinance of King Edward II"
  ],
  [
    "Way-bread",
    "/ˈweɪˌbrɛd/",
    "m",
    "Provisions or rations taken on a journey or military campaign.",
    "Old English 'wegbrēad'.",
    "The crusaders packed dried meat and hard way-bread into their saddlebags.",
    "Cursor Mundi"
  ],
  [
    "Weal-knave",
    "/ˈwiːlˌneɪv/",
    "m",
    "A servant or attendant who works for the common weal or public good of the manor.",
    "Old English 'wela' (wealth/weal) + Middle English 'knave'.",
    "The bailiff appointed a trusty weal-knave to oversee the village commons.",
    "Manorial Court Rolls of Wakefield"
  ],
  [
    "Weapon-shew",
    "/ˈwɛpənˌʃuː/",
    "m",
    "A formal inspection or muster of the armed retainers of a feudal lord.",
    "Old English 'wæpen' + 'scēawian'.",
    "The earl commanded a general weapon-shew in the castle bailey.",
    "Statutes of the Realm"
  ],
  [
    "Weir-ward",
    "/ˈwɪərˌwɔːrd/",
    "m",
    "A keeper or guard appointed to protect a fish weir or river dam belonging to the lord.",
    "Old English 'wer' (weard) + 'weard'.",
    "The weir-ward caught poachers attempting to net salmon below the mill.",
    "Customary of the Abbey of Bec"
  ],
  [
    "Weregild",
    "/ˈwɛrɡɪld/",
    "m",
    "The monetary value placed upon a man in Anglo-Saxon law, paid as compensation for homicide.",
    "Old English 'wergild' (man + payment).",
    "The kindred accepted the proper weregild to settle the blood-feud.",
    "Laws of King Alfred"
  ],
  [
    "West-gavel",
    "/ˈwɛstˌɡævəl/",
    "m",
    "A traditional land tax or tribute paid in the western districts of certain feudal estates.",
    "Old English 'west' + 'gafol' (tribute).",
    "The tenants rendered their annual west-gavel in oats and silver pennies.",
    "Inquisition Post Mortem, 13th Century"
  ],
  [
    "Wether-guard",
    "/ˈwɛðərˌɡɑːrd/",
    "m",
    "A shepherd or guard assigned to protect the lord's flock of wethers (castrated rams).",
    "Old English 'weþer' + 'weard'.",
    "The wether-guard sounded his horn when wolves descended from the forest.",
    "Seneschaucie (Treatise on Estate Management)"
  ],
  [
    "Wharf-age",
    "/ˈhwɔːrfɪdʒ/",
    "m",
    "The fee charged for using a lord's river wharf to load or unload goods.",
    "Middle English, from 'wharf'.",
    "The merchant paid the exact wharf-age for landing his casks of French wine.",
    "London Letter Books"
  ],
  [
    "Whid",
    "/hwɪd/",
    "e",
    "A word, speech, or talk; in Elizabethan cant, a coded term.",
    "Origin uncertain, possibly Celtic or thieves' slang.",
    "He spoke no idle whid when warning us of the baron's ambush.",
    "Thomas Harman, Caveat for Common Cursitors"
  ],
  [
    "White-meat",
    "/ˈwaɪtˌmiːt/",
    "m",
    "Dairy products such as milk, butter, and cheese, historically consumed during Lent when meat was forbidden.",
    "Middle English 'whitmete'.",
    "The peasants subsisted on coarse bread and white-meat through the spring fast.",
    "Piers Plowman"
  ],
  [
    "Whittawer",
    "/ˈhwɪtəwər/",
    "m",
    "A leather-dresser who softens and whitens horse-hides and skins for harness and armor straps.",
    "Old English 'hwīt' (white) + 'tawyr' (preparet).",
    "The whittawer supplied fine white leather for the knight's gauntlets.",
    "Guild Records of York"
  ],
  [
    "Wild-fire",
    "/ˈwaɪldˌfaɪr/",
    "m",
    "An incendiary composition used in medieval siege warfare, akin to Greek fire.",
    "Old English 'wilde fýr'.",
    "The defenders hurled pots of wild-fire from the battlements upon the siege tower.",
    "Richard Coer de Lion (Romance)"
  ],
  [
    "Wile",
    "/waɪl/",
    "m",
    "A trick, stratagem, or deceitful maneuver employed in castle sieges or courtly intrigue.",
    "Old Norse 'vīl' or Old French 'wile'.",
    "By cunning wile rather than force, the spy gained entry to the donjon.",
    "The Owl and the Nightingale"
  ],
  [
    "Wilful-fire",
    "/ˈwɪlfʊlˌfaɪr/",
    "m",
    "Arson; the intentional setting of fire to a manor house, grange, or castle.",
    "Middle English 'wilful' + 'fire'.",
    "The felon was accused of wilful-fire against the abbey's tithe-barn.",
    "Year Books of Edward I"
  ],
  [
    "Willsome",
    "/ˈwɪlsəm/",
    "m",
    "Straying, bewildered, or wandering lost in wild forests or moorlands.",
    "Old English 'wilsum' (uncertain).",
    "The young squire grew willsome in the dense woods surrounding the castle.",
    "Cursor Mundi"
  ],
  [
    "Wimpler",
    "/ˈwɪmplər/",
    "m",
    "A maker or seller of wimples, the linen or silk head coverings worn by medieval noblewomen.",
    "Middle English, from 'wimple'.",
    "The court ladies summoned the wimpler to display his finest imported silks.",
    "London Assize of Bread"
  ],
  [
    "Win-shield",
    "/ˈwɪnˌʃiːld/",
    "m",
    "A protective talisman or shield that brings victory in battle.",
    "Old English 'sigel' / poetic compound.",
    "He raised his win-shield against the descending axe-blow.",
    "The Battle of Maldon"
  ],
  [
    "Winter-night",
    "/ˈwɪntərˌnaɪt/",
    "m",
    "A measure of time or a guard watch during the long, freezing winter nights in a castle.",
    "Old English 'winter-niht'.",
    "The sentry shivered through the bitter winter-night upon the stone parapet.",
    "Ancrene Wisse"
  ],
  [
    "Wisent",
    "/ˈwɪzənt/",
    "m",
    "The European bison, hunted by medieval nobility in royal forests.",
    "Old High German 'wisunt'.",
    "The royal hunt pursued a mighty wisent through the deep recesses of the royal chase.",
    "Master of Game by Edward of Norwich"
  ],
  [
    "Wit",
    "/wɪt/",
    "m",
    "Mind, intellect, or understanding; the faculty of reason possessed by a noble lord or counselor.",
    "Old English 'wit' (knowledge, sense).",
    "He was a man of great wit and counsel in the king's court.",
    "Chaucer, Canterbury Tales"
  ],
  [
    "With-erset",
    "/ˈwɪðərˌsɛt/",
    "m",
    "An antagonist, opponent, or adversary in a trial by combat or war.",
    "Old English 'wiðerset' (adversary).",
    "He faced his with-erset across the lists with leveled lance.",
    "Hali Meidenhad"
  ],
  [
    "With-setting",
    "/ˈwɪðərˌsɛtɪŋ/",
    "m",
    "Waylaying; the crime of lying in wait to ambush a traveler or noble entourage.",
    "Old English 'wiðersetting'.",
    "The highwaymen were indicted for with-setting the merchant caravan.",
    "Fleta (Legal Treatise)"
  ],
  [
    "Witsand",
    "/ˈwɪtsænd/",
    "m",
    "An ancient port in Flanders frequently used by knights and crusaders crossing the English Channel.",
    "Middle English place-name.",
    "The fleet of transports gathered at Witsand before making sail for Calais.",
    "Matthew Paris, Chronica Majora"
  ],
  [
    "Wizened",
    "/ˈwɪzənd/",
    "m",
    "Dried up, withered, or shriveled with age.",
    "Middle English 'wisenen' (to wither).",
    "The wizened old castellan remembered the siege of forty years past.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Wong",
    "/wɒŋ/",
    "m",
    "A low-lying meadow, marsh, or enclosed piece of agricultural land on a manor.",
    "Old English / Old Norse 'wang' (field, meadow).",
    "The villeins mowed the hay in the lord's west-wong.",
    "Manorial Survey of the Danelaw"
  ],
  [
    "Wood-geld",
    "/ˈwʊdˌɡɛld/",
    "m",
    "A tax or payment made for the right to gather firewood or pasture pigs in the royal forest.",
    "Old English 'wudu' + 'geld'.",
    "The peasants paid their wood-geld to the forest-warden at Martinmas.",
    "Charter of the Forest"
  ],
  [
    "Wort-cunning",
    "/ˈwɜːrtˌkʌnɪŋ/",
    "m",
    "The medieval herbalist's knowledge of plants and roots used for healing battle wounds.",
    "Old English 'wyrt' (plant/herb) + 'cunne' (knowledge).",
    "The castle leech possessed rare wort-cunning to cure festering sword-cuts.",
    "Old English Leechbook"
  ],
  [
    "Wreak",
    "/riːk/",
    "m",
    "Vengeance, punishment, or retribution exacted for an insult or injury to honor.",
    "Old English 'wrǣcu'.",
    "He swore a solemn oath to wreak justice upon the traitor who sacked his hall.",
    "Beowulf"
  ],
  [
    "Yali",
    "/ˈjɑːli/",
    "m",
    "A porch, balcony, or elevated gallery attached to a medieval manor house or fortification.",
    "Derived from Old Norse via Middle English architectural terms.",
    "The baron stood upon the yali, surveying the approaching host.",
    "Chronicles of Northern Manors"
  ],
  [
    "Yallock",
    "/ˈjælək/",
    "m",
    "A small stream, rivulet, or drainage ditch flowing through castle lands.",
    "Middle English variant of Old English giedloc.",
    "They watered their destriers in the muddy yallock.",
    "Pipe Rolls of Nottinghamshire"
  ],
  [
    "Yamer",
    "/ˈjæmər/",
    "m",
    "To lament, wail, or cry out in grief, often used by castle mourners.",
    "From Old English geomerian, to grieve.",
    "The captive knight began to yamer in his subterranean cell.",
    "Cursor Mundi"
  ],
  [
    "Yampa",
    "/ˈjæmpə/",
    "m",
    "A wild edible root harvested by peasants and served in medieval pottage.",
    "Algonquian loanword adopted into late medieval English trade jargon.",
    "The peasants gathered yampa from the damp forest floor.",
    "Household Ordinances of Edward II"
  ],
  [
    "Yane",
    "/jeɪn/",
    "e",
    "An obsolete form of 'yon' or 'yonder', indicating distance.",
    "Northern Middle English and early Elizabethan dialect.",
    "Look yane upon yonder crenelated tower.",
    "The Complaynt of Scotland"
  ],
  [
    "Yank",
    "/jæŋk/",
    "m",
    "A sudden pull, tug, or wrench, such as drawing a bowstring.",
    "Northern Middle English onomatopoeic root.",
    "With a mighty yank of the yew bow, the shaft flew true.",
    "Gawain and the Green Knight"
  ],
  [
    "Yapman",
    "/ˈjæpmən/",
    "m",
    "A peddler, hawker, or traveling merchant who visited feudal fairs.",
    "Middle English compound of 'yap' (keen) and 'man'.",
    "A wandering yapman offered ribbons to the castle maidens.",
    "Piers Plowman"
  ],
  [
    "Yapp",
    "/jæp/",
    "m",
    "A style of book binding with overlapping leather edges, common in medieval missals.",
    "Named after the 19th-century London bookseller William Yapp, but describing medieval divinity bindings.",
    "He clutched his yapp-bound psalter close to his chest.",
    "Ecclesiastical Records of York"
  ],
  [
    "Yarak",
    "/ˈjærək/",
    "m",
    "A hawk or falcon in eager hunting condition, ready to fly.",
    "Falconry term derived from Middle English and Old Norse traditions.",
    "The falconer declared the tiercel was kept in yarak for the royal hunt.",
    "The Boke of St Albans"
  ],
  [
    "Yardland",
    "/ˈjɑːrdlənd/",
    "m",
    "A traditional unit of land holding in feudal England, varying from 15 to 30 acres.",
    "From Old English gyrdland.",
    "The serf held three yardlands in exchange for week-work at the manor.",
    "Domesday Book"
  ],
  [
    "Yare",
    "/jɛər/",
    "e",
    "Prepared, prompt, nimble, or agile, especially in military readiness.",
    "From Old English gearo.",
    "Make all yare for the king's impending siege.",
    "William Shakespeare, The Tempest"
  ],
  [
    "Yarentide",
    "/ˈjɛərtaɪd/",
    "m",
    "Springtime or the season of preparation for agricultural sowing.",
    "Middle English compound of 'yare' and 'tide'.",
    "During yarentide, the lord inspected all plows and oxen.",
    "Manorial Rolls of Essex"
  ],
  [
    "Yark",
    "/jɑːrk/",
    "m",
    "To strike, beat, or bind tightly with a cord or leather strap.",
    "From Old English giercan, to prepare or lash.",
    "The guard threatened to yark the recalcitrant prisoner.",
    "The Lay of Havelok the Dane"
  ],
  [
    "Yarm",
    "/jɑːrm/",
    "m",
    "To shout, bawl, or make a loud, discordant noise.",
    "Middle English variant of 'yawm' or 'yarm'.",
    "The drunken men-at-arms began to yarm in the castle hall.",
    "York Mystery Plays"
  ],
  [
    "Yarr",
    "/jɑːr/",
    "m",
    "To snarl like a dog, or the low growl of a guard hound.",
    "Imitative origin found in Middle English texts.",
    "The mastiffs gave a fierce yarr at the stranger at the portcullis.",
    "Chaucer, The Canterbury Tales"
  ],
  [
    "Yarth",
    "/jɑːrθ/",
    "m",
    "Earth, soil, or ground, particularly plowland.",
    "Regional dialect variant of Old English eorðe.",
    "The heavy yarth clung to the iron-shod plow.",
    "Lincolnshire Assize Rolls"
  ],
  [
    "Yate",
    "/jeɪt/",
    "m",
    "A gate, specifically the main gate of a castle or walled town.",
    "From Old English geat.",
    "They bolted the iron yate against the marauding band.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Yater",
    "/ˈjeɪtər/",
    "m",
    "A gatekeeper or warden of the castle entrance.",
    "Middle English derivative of 'yate'.",
    "The yater demanded the password before lifting the portcullis.",
    "Cursor Mundi"
  ],
  [
    "Yaughan",
    "/ˈjɔːɡən/",
    "e",
    "A tavern keeper or ale-house proprietor catering to castle retainers.",
    "Early modern adaptation of Gaelic terms.",
    "The thirsty archers caroused at the yaughan's hut.",
    "Elizabethan Court Records"
  ],
  [
    "Yaw",
    "/jɔː/",
    "m",
    "To swerve or move unsteadily, as a heavy wagon laden with siege timber.",
    "Middle English nautical and transport term.",
    "The heavy cart began to yaw upon the rutted bailey track.",
    "Patent Rolls of Henry III"
  ],
  [
    "Yawl",
    "/jɔːl/",
    "m",
    "To cry out loudly in pain or distress, like a wounded squire.",
    "Middle English yawlen.",
    "The injured page let out a loud yawl when the surgeon probed the wound.",
    "Morte Darthur"
  ],
  [
    "Yawn",
    "/jɔːn/",
    "m",
    "To open wide, like the chasm of a moat or the gate of a keep.",
    "From Old English ginian.",
    "The drawbridge fell across the yawning ditch.",
    "Wycliffe Bible"
  ],
  [
    "Yawy",
    "/ˈjɔːi/",
    "m",
    "Overcast, gloomy, or misty weather obscuring the watchtowers.",
    "Old English dialect term.",
    "A yawy fog rolled over the fenlands surrounding the stronghold.",
    "Anglo-Saxon Chronicle"
  ],
  [
    "Yblent",
    "/ɪˈblɛnt/",
    "m",
    "Blind, blinded, dazzled, or confounded by glorious armor or light.",
    "Middle English past participle of 'blenden'.",
    "His eyes were yblent by the flashing sunlight on the shields.",
    "Chaucer, Troilus and Criseyde"
  ],
  [
    "Ybore",
    "/ɪˈbɔːr/",
    "m",
    "Born, of noble lineage or high birth.",
    "Middle English past participle of 'beren'.",
    "A knight ybore of ancient and illustrious blood.",
    "The Owl and the Nightingale"
  ],
  [
    "Ydrad",
    "/ɪˈdræd/",
    "m",
    "Dreaded, feared, or held in great awe by enemies.",
    "Middle English past participle of 'dreden'.",
    "The fierce baron was ydrad across all the borderlands.",
    "Spenser, The Faerie Queene"
  ],
  [
    "Yede",
    "/jiːd/",
    "m",
    "Went, walked, or traveled (past tense of go).",
    "From Old English eode.",
    "The pilgrim yede barefoot toward the castle chapel.",
    "Piers Plowman"
  ],
  [
    "Yfere",
    "/ɪˈfɛər/",
    "m",
    "Together, in company, or united in fellowship.",
    "From Old English gefēra.",
    "The knights rode yfere into the tournament lists.",
    "King Horn"
  ],
  [
    "Ygo",
    "/ɪˈɡoʊ/",
    "m",
    "Ago, gone by, or passed in time.",
    "Middle English past participle of 'gon'.",
    "Many winters ygo, this fortress withstood a great siege.",
    "Chaucer, The Legend of Good Women"
  ],
  [
    "Yit",
    "/jɪt/",
    "m",
    "Yet, still, or up to this present time.",
    "Northern Middle English dialect form.",
    "The castle holds out yit against the invading earl.",
    "The Bruce by John Barbour"
  ],
  [
    "Yive",
    "/jɪv/",
    "m",
    "To give, bestow, or grant a fiefdom.",
    "Middle English southern variant of 'give'.",
    "The king did yive the manor to his loyal vassal.",
    "Kentish Sermons"
  ],
  [
    "Ykempt",
    "/ɪˈkɛmpt/",
    "m",
    "Combed, groomed, or neat in appearance.",
    "Middle English past participle of 'kemb'.",
    "The young squire appeared ykempt before the royal court.",
    "Chaucer, The Miller's Tale"
  ],
  [
    "Ykke",
    "/ɪk/",
    "m",
    "To itch or feel a strong desire for combat.",
    "Middle English variant of 'ykken'.",
    "His sword hand began to ykke for the fray.",
    "Alliterative Morte Arthure"
  ],
  [
    "Ylame",
    "/ɪˈleɪm/",
    "m",
    "Lamed, crippled, or injured in battle.",
    "Middle English past participle of 'lamen'.",
    "Many a valiant horse was ylame upon the rocky field.",
    "Arthour and Merlin"
  ],
  [
    "Ylike",
    "/ɪˈlaɪk/",
    "m",
    "Alike, similar, or equal in rank and chivalry.",
    "From Old English gelīc.",
    "Two knights ylike in valor and nobility.",
    "Cursor Mundi"
  ],
  [
    "Ylmp",
    "/ɪlmp/",
    "m",
    "A sapling, graft, or young shoot used in estate management.",
    "Middle English variant of 'imp'.",
    "They planted an ylmp in the castle orchard.",
    "Palladius on Husbondrie"
  ],
  [
    "Ylorn",
    "/ɪˈlɔːrn/",
    "m",
    "Lost, forlorn, or destroyed.",
    "Middle English past participle of 'leosen'.",
    "The sacred relic was ylorn during the sacking of the abbey.",
    "Havelok the Dane"
  ],
  [
    "Yme",
    "/ɪm/",
    "m",
    "Among, amongst, or in the midst of.",
    "From Old English geong / geonge.",
    "He walked yme the gathering crowd of vassals.",
    "Genesis and Exodus"
  ],
  [
    "Ympe",
    "/ˈɪmpə/",
    "m",
    "A grafted twig or scion used for orchard cultivation.",
    "From Old English impe.",
    "The gardener tended the delicate ympe with great care.",
    "The Franklin's Tale"
  ],
  [
    "Ympne",
    "/ɪmpn/",
    "m",
    "A hymn, sacred song, or chant sung in the castle chapel.",
    "Middle English variant of hymn.",
    "The choir lifted their voices in a solemn ympne.",
    "Ancrene Wisse"
  ],
  [
    "Yold",
    "/joʊld/",
    "m",
    "Yielded, surrendered, or submitted to an overlord.",
    "Middle English past participle of 'ielden'.",
    "The garrison was yold after a bitter three-week siege.",
    "The Gest Hystoriale"
  ],
  [
    "Youthe",
    "/juːθ/",
    "m",
    "Youth, early life, or the period spent as a page or squire.",
    "From Old English ġeoguð.",
    "In his early youthe, he trained with the sword daily.",
    "Cursor Mundi"
  ],
  [
    "Ypon",
    "/ɪˈpɒn/",
    "m",
    "Upon, on top of, or resting over a surface.",
    "Middle English variant preposition.",
    "The banner fluttered proudly ypon the keep.",
    "Gawain and the Green Knight"
  ],
  [
    "Arming-doublet",
    "/ˈɑːrmɪŋ ˌdʌblɪt/",
    "m",
    "A close-fitting tailored jacket used to secure various pieces of plate armor directly to the body via points or laces.",
    "Middle English, combining arming and doublet.",
    "The knight laced himself tightly into his arming-doublet before the squire brought the greaves.",
    "Fifteenth-century London Armourers' Ordinances"
  ],
  [
    "Attire",
    "/əˈtaɪər/",
    "e",
    "In heraldry, the horns of a stag or hart when borne on a coat of arms.",
    "Middle English, from Old French atire, from atirer (to equip).",
    "He beareth azure, three stag's attires fixed to the scalp argent.",
    "John Guillim, Display of Heraldrie"
  ],
  [
    "Apparel",
    "/əˈpærəl/",
    "m",
    "Ornate embroidered bands or panels sewn onto the cuffs, neck, or lower edge of albs and other ecclesiastical vestments.",
    "Middle English, from Old French apareiller.",
    "The vestments were adorned with golden apparels depicting the twelve apostles.",
    "Inventory of Lincoln Cathedral"
  ],
  [
    "Albs",
    "/ælbz/",
    "m",
    "A long, white liturgical vestment reaching to the feet, tied at the waist with a cincture.",
    "Old English albe, from Latin albus (white).",
    "The priests processed in pristine albs and scarlet copes.",
    "Monastic Customary of St. Augustine's Abbey"
  ],
  [
    "Amice",
    "/ˈæmɪs/",
    "m",
    "An oblong piece of white linen worn about the shoulders and neck by priests under the alb.",
    "Middle English, from Old French amis, from Latin amicire (to wrap around).",
    "He placed the amice upon his head as a helmet of salvation before donning the alb.",
    "William Durandus, Rationale Divinorum Officiorum"
  ],
  [
    "Ailette",
    "/eɪˈlɛt/",
    "m",
    "Small square or rectangular shields worn upright on the shoulders of knights, often displaying heraldic charges.",
    "Middle English, diminutive of Old French aile (wing).",
    "His ailettes bore the checky argent and azure of his house.",
    "Effigy of a knight in St. Peter's Church, Sandwich"
  ],
  [
    "Avantaille",
    "/ˌævənˈteɪl/",
    "m",
    "The movable lower part or ventail of a medieval bascinet helmet that protected the lower face and throat.",
    "Middle English, from Old French avantaille.",
    "He lowered his avantaille and drew his sword as the enemy charged.",
    "Romance of Richard Coer de Lion"
  ],
  [
    "Armet",
    "/ˈɑːrmɛt/",
    "m",
    "A fully enclosing spherical helmet developed in the 15th century, featuring hinged cheek-pieces and a visor.",
    "Middle English, from Italian armetto.",
    "The polished steel of his armet gleamed brilliantly in the midday sun.",
    "Malory, Le Morte d'Arthur"
  ],
  [
    "Alarum",
    "/əˈlɑːrəm/",
    "e",
    "A summons to arms, or an archaic spelling of alarm used in Elizabethan stage directions for battle scenes.",
    "Middle English, alteration of Italian all'arme (to the arms!).",
    "Alarum. Enter King Richard and forces, marching.",
    "William Shakespeare, King Richard III"
  ],
  [
    "Arras",
    "/ˈærəs/",
    "e",
    "Rich tapestries woven with figures and scenes, originally manufactured in the town of Arras in northern France.",
    "Middle English, named after the town of Arras.",
    "Concealed behind the heavy arras, Polonius listened to the conversation.",
    "William Shakespeare, Hamlet"
  ],
  [
    "Atlas",
    "/ˈætləs/",
    "t",
    "A smooth, heavy, and glossy satin fabric of silk, traditionally used in high-status Victorian gowns.",
    "German Atlas, ultimately from Arabic aṭlas (smooth/bare).",
    "She wore a sweeping gown of ivory atlas embroidered with seed pearls.",
    "Godey's Lady's Book"
  ],
  [
    "Anchorman",
    "/ˈæŋkərmən/",
    "m",
    "In historical maritime textile contexts, a coarse, heavy woolen cloth used for seafaring garments.",
    "English compound of anchor and man.",
    "The sailors were outfitted in durable coats of anchorman.",
    "Admiralty Clothing Contracts"
  ],
  [
    "Appliqué",
    "/əˈplɪkeɪ/",
    "t",
    "A decorative needlework technique where pieces of fabric are sewn onto a larger ground material to form designs.",
    "French appliqué (applied).",
    "The velvet bodice was decorated with gold silk appliqué in a leaf motif.",
    "The Englishwoman's Domestic Magazine"
  ],
  [
    "Argent",
    "/ˈɑːrdʒənt/",
    "m",
    "The heraldic tincture representing silver or white, often depicted as white on monochrome engravings.",
    "Middle English, from Latin argentum (silver).",
    "A field of gules with a chevron argent.",
    "The Boke of St. Albans"
  ],
  [
    "Azure",
    "/ˈæʒər/",
    "m",
    "The heraldic tincture representing the color blue.",
    "Middle English, from Old Persian lazward via Arabic and Old French.",
    "Quarterly, first and fourth azure, three fleurs-de-lisor.",
    "Roll of Arms of Edward III"
  ],
  [
    "Annulet",
    "/ˈænjuːlɛt/",
    "m",
    "A heraldic charge in the shape of a small ring.",
    "Middle English, from Old French annulet (little ring).",
    "He bore three annulets sable upon a bend or.",
    "Camden's Britannia"
  ],
  [
    "Allocation",
    "/ˌæləˈkeɪʃən/",
    "e",
    "An obsolete heraldic term referring to the proper placement or assigning of quarterings in a coat of arms.",
    "Middle English, from Latin allocatio.",
    "Great care must be taken in the allocation of ancestral quarterings.",
    "Gerard Legh, The Accedens of Armory"
  ],
  [
    "Atchivement",
    "/əˈtʃiːvmənt/",
    "e",
    "The complete heraldic composition showing a shield, helmet, crest, mantling, and supporters.",
    "Middle English, variant of achievement.",
    "Above the castle gate hung the carved stone atchivement of the earl.",
    "Sir William Dugdale, Antiquities of Warwickshire"
  ],
  [
    "Albotherm",
    "/ˈælbəʊθɜːrm/",
    "t",
    "A specialized heavy woolen blanket or textile used in Victorian polar expeditions.",
    "Coinage from Latin albus (white) and therm.",
    "The sledges were loaded with extra rolls of albotherm for the winter camp.",
    "Reports of the Royal Geographical Society"
  ],
  [
    "Anadem",
    "/ˈænədɛm/",
    "e",
    "A garland, chaplet, or wreath worn on the head, often woven of flowers or precious metals.",
    "Middle English, from Greek anadēma.",
    "She wore an anadem of fresh damask roses in her hair.",
    "Ben Jonson, Masques"
  ],
  [
    "Autumne",
    "/ˈɔːtəm/",
    "e",
    "An archaic term for a heavy cloak or garment suited for the cooler autumn weather.",
    "Middle English, from Latin autumnus.",
    "He wrapped his heavy autumne tightly against the evening chill.",
    "Spenser, The Faerie Queene"
  ],
  [
    "Alace",
    "/əˈleɪs/",
    "m",
    "An obsolete variant of alas, frequently used in laments concerning torn or ruined garments.",
    "Middle English, from Old French ha las.",
    "Alace, my costly surcoat is rent beyond repair!",
    "Chaucer, Troilus and Criseyde"
  ],
  [
    "Armiger",
    "/ˈɑːrmɪdʒər/",
    "m",
    "A person entitled to bear a heraldic coat of arms, either by inheritance or grant.",
    "Middle English, from Latin armiger (armor-bearer).",
    "Every recognized armiger was summoned to attend the king's muster.",
    "Statutes of the Order of the Garter"
  ],
  [
    "Arch-barbican",
    "/ˌɑːrtʃ ˈbɑːrbɪkən/",
    "m",
    "The vaulted entryway and defensive gateway structure where guards wore heavy iron defenses.",
    "Middle English, combining arch and barbican.",
    "The garrison stood armed beneath the arch-barbican.",
    "Chronicles of Froissart"
  ],
  [
    "Aventurine",
    "/əˈvɛntʃuːraɪn/",
    "t",
    "A type of glass or glazed fabric containing shimmering metallic inclusions, popular in Victorian jewelry and trimmings.",
    "French aventurine, from Italian a avventura (by chance).",
    "Her evening dress was fastened with buttons of green aventurine glass.",
    "The Art Journal"
  ],
  [
    "Ascot",
    "/ˈæskət/",
    "t",
    "A wide silk necktie folded into a knot and pinned with a decorative stickpin, popular in late Victorian and Edwardian fashion.",
    "Named after the Ascot Racecourse in England.",
    "He adjusted his grey silk ascot before entering the drawing room.",
    "Oscar Wilde, The Importance of Being Earnest"
  ],
  [
    "Alpaca",
    "/ælˈpækə/",
    "t",
    "A lightweight, lustrous fabric woven from the fleece of the alpaca, widely utilized for Victorian linings and summer coats.",
    "Spanish alpaca, from Aymara allpaqa.",
    "His summer trousers were tailored from fine black alpaca.",
    "Anthony Trollope, The Way We Live Now"
  ],
  [
    "Astrakhan",
    "/ˈæstrəkæn/",
    "t",
    "A heavy textile with a curled, piled surface mimicking the fleece of young Persian lambs, favored for Victorian winter collars.",
    "Named after Astrakhan, Russia.",
    "Her winter mantle was trimmed with thick black astrakhan.",
    "Charles Dickens, Great Expectations"
  ],
  [
    "Armguard",
    "/ˈɑːrɡɑːrd/",
    "m",
    "A rigid piece of leather or steel strapped to the forearm to protect against sword cuts or bowstrings.",
    "Middle English, combining arm and guard.",
    "He strapped on his boiled leather armguard before stringing his longbow.",
    "The Paston Letters"
  ],
  [
    "Aketon-cloth",
    "/ˈækɪtɒn klɒθ/",
    "m",
    "A thick, coarse, multi-layered quilted textile specifically manufactured for padding military garments.",
    "Middle English compound.",
    "The merchant sold three bolts of aketon-cloth to the town garrison.",
    "London Guild Records"
  ],
  [
    "Archaic-band",
    "/ɑːrˈkeɪɪk bænd/",
    "t",
    "An antiquarian term used by 19th-century tailors to describe medieval-style decorative hatbands.",
    "Victorian compounding of archaic and band.",
    "His felt hat was adorned with an archaic-band of woven gold thread.",
    "Costume Journal of the Victorian Era"
  ],
  [
    "Armigeral",
    "/ɑːrˈmɪdʒərəl/",
    "e",
    "Pertaining to coat armor or to an armiger.",
    "Derived from Latin armiger.",
    "The manuscript contained numerous armigeral illustrations of great historical value.",
    "William Camden, Remaines Concerning Britain"
  ],
  [
    "Attire-piece",
    "/əˈtaɪər piːs/",
    "e",
    "A piece of metalwork or embroidery shaped like stag antlers used to adorn Tudor hats.",
    "English compound from attire and piece.",
    "His velvet cap was fastened with a small silver attire-piece.",
    "Inventory of Henry VIII"
  ],
  [
    "Argent-tincture",
    "/ˈɑːrdʒənt ˈtɪŋktʃər/",
    "m",
    "The silvery white heraldic pigment applied to shields and crests.",
    "Middle English, combining argent and tincture.",
    "The lion was rendered in bold relief upon a field of argent-tincture.",
    "Heraldic Roll of Arms"
  ],
  [
    "Aumuce",
    "/ɔ��ˈmuːs/",
    "m",
    "An alternative spelling of amice or the medieval fur-lined hood worn by canons.",
    "Middle English, from Old French almuce.",
    "He pulled his fur-lined aumuce over his head to ward off the chapel draft.",
    "Ecclesiastical Records of York"
  ],
  [
    "Aylet",
    "/ˈeɪlɪt/",
    "e",
    "An archaic spelling of eyelet, used for small laced holes in Elizabethan doublets and stays.",
    "Middle English variant of eyelet.",
    "The silk cord was threaded through tiny gold-stitched aylets.",
    "Household Accounts of Elizabeth I"
  ],
  [
    "Armet-plate",
    "/ˈɑːrmɛt pleɪt/",
    "m",
    "The individual curved steel segments comprising a 15th-century armet helmet.",
    "Middle English compound.",
    "The smith hammered the armet-plate until it curved smoothly over the anvil.",
    "Milanese Armourer Contracts"
  ],
  [
    "Apron-string",
    "/ˈeɪprən strɪŋ/",
    "e",
    "The ties used to secure a working apron, frequently referenced idiomatically in Elizabethan domestic literature.",
    "Middle English, combining apron and string.",
    "She wiped her hands upon her apron and loosened the apron-string.",
    "Thomas Deloney, The Gentle Craft"
  ],
  [
    "Aumoniere",
    "/oʊˈmɔːnjɛər/",
    "m",
    "An ornate medieval pouch or purse worn suspended from the girdle, often richly embroidered.",
    "Old French aumonière (alms purse).",
    "He drew a silver coin from his velvet aumoniere to give to the beggar.",
    "Froissart's Chronicles"
  ],
  [
    "Arm-plate",
    "/ˈɑːrm pleɪt/",
    "m",
    "Rigid segments of articulated steel designed to encase and protect the arm.",
    "Middle English compound.",
    "The straps of the arm-plate were secured tightly with brass buckles.",
    "Inventory of the Tower of London"
  ],
  [
    "Auncient",
    "/ˈeɪnʃənt/",
    "e",
    "An Elizabethan spelling of ancient, referring to a military standard-bearer or the flag itself.",
    "Middle English, variant of ancient.",
    "The company marched behind their auncient bearing the red cross of St. George.",
    "Shakespeare, Henry V"
  ],
  [
    "Argosy",
    "/ˈɑːrɡəsi/",
    "e",
    "A large merchant ship, particularly one from Venice or Ragusa, heavily laden with rich textiles and luxury goods.",
    "Italian ragusea (vessel of Ragusa).",
    "An argosy laden with silks and spices from the Levant has docked in the harbor.",
    "William Shakespeare, The Merchant of Venice"
  ],
  [
    "Armorial",
    "/ɑːrˈmɔːriəl/",
    "m",
    "Relating to heraldic arms or a collection of coat-of-arms illustrations.",
    "Middle English, from Late Latin armorialis.",
    "The library contained a leather-bound armorial detailing the lineage of northern barons.",
    "Historical Manuscripts Commission"
  ],
  [
    "Bacin",
    "/ˈbæsɪn/",
    "m",
    "A metal bowl or basin, often used in medieval contexts for washing or as a rudimentary helmet.",
    "Old French bacin, from Late Latin baccinum.",
    "He wore upon his head a bacin of bright steel.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Bacinet",
    "/ˈbæsɪnɛt/",
    "m",
    "A light, conical steel helmet worn by knights during the 14th and 15th centuries.",
    "Diminutive of Old French bacin.",
    "His bacinet was adorned with a crest of ostrich plumes.",
    "Chaucer, The Knight's Tale"
  ],
  [
    "Baize",
    "/beɪz/",
    "t",
    "A coarse, woolen fabric resembling felt, frequently used for covering gaming tables.",
    "Middle French baies, feminine plural of bay 'chestnut-colored'.",
    "The solicitor spread his documents upon the green baize table.",
    "Charles Dickens, Bleak House"
  ],
  [
    "Baldrick",
    "/ˈbɔːldrɪk/",
    "e",
    "An ornamental belt worn over one shoulder to support a sword or bugle.",
    "Old French baudre, from Germanic origins.",
    "A baldrick of white leather hung across his doublet.",
    "William Shakespeare, Much Ado About Nothing"
  ],
  [
    "Bale",
    "/beɪl/",
    "m",
    "A rich, brightly colored fabric or silk stuff imported from the East.",
    "Old French bale, from Arabic balya.",
    "Merchants brought bales of scarlet cloth from Genoa.",
    "Exchequer Rolls of Scotland"
  ],
  [
    "Baleen",
    "/bəˈliːn/",
    "e",
    "Whalebone, historically used as a stiffening agent in corsets and stomachers.",
    "Old French balaine, from Latin balaena 'whale'.",
    "Her bodice was reinforced with stout baleen to maintain its rigid shape.",
    "John Florio, Queen Anna's New World of Words"
  ],
  [
    "Balistaria",
    "/ˌbælɪˈstɛəriə/",
    "m",
    "A narrow cruciform loop or slit in a medieval fortification wall for archers or crossbowmen.",
    "Medieval Latin balistaria, from balista.",
    "The defender took aim through the narrow balistaria.",
    "Military Architecture of the Middle Ages"
  ],
  [
    "Bandekin",
    "/ˈbændɪkɪn/",
    "m",
    "A rich, costly fabric of silk interwoven with gold, originally from Baghdad.",
    "Middle English, from Old French baldakin.",
    "The altar was draped in a cloth of fine bandekin.",
    "Willis's Current Notes on Medieval Fabrics"
  ],
  [
    "Bandoleer",
    "/ˌbændəˈlɪər/",
    "e",
    "A shoulder belt with small attached loops or cases for holding gunpowder charges.",
    "French bandoulière, from Spanish bandolera.",
    "Musketeers wore leather bandoleers across their chests.",
    "The Muster Rolls of Elizabethan England"
  ],
  [
    "Baracan",
    "/ˈbærəkən/",
    "m",
    "A thick, coarse fabric made of camel's hair or wool, used for outer garments.",
    "Arabic barrakan, via Italian barracano.",
    "He wrapped himself in a heavy baracan cloak against the gale.",
    "Medieval Trade Accounts of London"
  ],
  [
    "Barb",
    "/bɑːrb/",
    "m",
    "A piece of linen or fine cloth worn by nuns or widows to cover the chin and throat.",
    "Old French barbe, from Latin barba 'beard'.",
    "The noble widow wore a deep black barb of pleated linen.",
    "Chaucer, The Canterbury Tales"
  ],
  [
    "Bard",
    "/bɑːrd/",
    "m",
    "Armor for the chest and flanks of a warhorse, also known as barding.",
    "French barde, from Arabic barda'a 'pack-saddle'.",
    "The destrier was fitted with steel bards for the tournament.",
    "Sir Walter Scott, Ivanhoe"
  ],
  [
    "Basinet",
    "/ˈbæsɪnɛt/",
    "m",
    "Alternative spelling of bacinet; a conical medieval helmet.",
    "Old French basinet.",
    "He polished his iron basinet until it shone like mirror glass.",
    "Malory, Le Morte d'Arthur"
  ],
  [
    "Bastion",
    "/ˈbæstʃən/",
    "e",
    "A projecting part of a fortification built at an angle to the line of a wall.",
    "Italian bastione, from bastire 'to build'.",
    "Cannon were mounted upon the corner bastion.",
    "Richard Hakluyt, Principal Navigations"
  ],
  [
    "Bat",
    "/bæt/",
    "m",
    "A cloak or heavy outer wrap worn in cold or rainy weather.",
    "Old French batte.",
    "He drew his thick woolen bat tight about his shoulders.",
    "Medieval English Guild Records"
  ],
  [
    "Baudekin",
    "/ˈbɔːdəkɪn/",
    "m",
    "Variant of bandekin; a rich silk and gold cloth.",
    "Middle English baudekyn.",
    "The canopy of state was fashioned of crimson baudekin.",
    "Inventory of Henry V"
  ],
  [
    "Beaver",
    "/ˈbiːvər/",
    "m",
    "The lower part of a medieval face-plate or visor that protected the chin and throat.",
    "Middle English bever, from Old French baviere.",
    "He lowered his beaver before entering the lists.",
    "Sir Thomas Malory"
  ],
  [
    "Bedgown",
    "/ˈbɛdɡaʊn/",
    "t",
    "A loose-fitting outer garment or short gown worn by women in the 18th and early 19th centuries.",
    "English compound: bed + gown.",
    "She wore a cotton bedgown over her petticoat while tending the hearth.",
    "Jane Austen, Letters"
  ],
  [
    "Bede",
    "/biːd/",
    "m",
    "A prayer or rosary bead; also an old term for a prayer.",
    "Old English bēd 'prayer'.",
    "He counted each bede upon his ivory rosary.",
    "Piers Plowman"
  ],
  [
    "Bedsheet",
    "/ˈbɛdʃiːt/",
    "m",
    "A large rectangular piece of linen used for bedding, historically listed in wealthy dowries.",
    "Old English beddcēte.",
    "Her dowry included six fine diapered bedsheets.",
    "Essex Wills, 14th Century"
  ],
  [
    "Beglerbey",
    "/ˈbɛɡlərˌbeɪ/",
    "e",
    "A high-ranking Ottoman governor or provincial military commander, often mentioned in travel literature.",
    "Turkish beglerbeyi 'lord of lords'.",
    "The beglerbey received the ambassador in a tent of cloth of gold.",
    "Richard Hakluyt"
  ],
  [
    "Belfry",
    "/ˈbɛlfri/",
    "m",
    "Originally a movable wooden siege tower (brayffroit), later applied to bell towers.",
    "Old French berfrei, from Germanic.",
    "The attackers rolled the tall belfry up to the bailey wall.",
    "Geoffrey Chaucer"
  ],
  [
    "Bell-accost",
    "/bɛl əˈkɒst/",
    "t",
    "A Victorian term for a specific bell-shaped flare in the skirt of a dress.",
    "English compound.",
    "Her silk gown featured a distinct bell-accost at the hem.",
    "The Victorian Lady's Magazine"
  ],
  [
    "Bend",
    "/bɛnd/",
    "m",
    "A heraldic ordinary running diagonally from the upper dexter corner to the lower sinister corner.",
    "Old French bende, from bander.",
    "His shield bore a red bend upon a field of gold.",
    "Medieval Roll of Arms"
  ],
  [
    "Bendlet",
    "/ˈbɛndlɪt/",
    "m",
    "A diminutive of the heraldic bend, being half its width.",
    "Diminutive of bend.",
    "The arms were differenced by a blue bendlet.",
    "John Guillim, Display of Heraldrie"
  ],
  [
    "Beret",
    "/ˈbɛreɪ/",
    "t",
    "A soft, round, flat-crowned hat, revived in various Victorian historical fashions.",
    "French beret, from Old Provençal berret.",
    "He wore a dark velvet beret pinned with a silver medallion.",
    "Victorian Tailor and Cutter"
  ],
  [
    "Bespoke",
    "/bɪˈspoʊk/",
    "t",
    "Made to individual order, traditionally used for custom-tailored garments on Savile Row.",
    "English compound from bespeak.",
    "He ordered a bespoke wool suit for the winter season.",
    "London Tailoring Records"
  ],
  [
    "Bicorn",
    "/ˈbaɪkɔːrn/",
    "e",
    "A two-cornered hat worn by military officers and officials, prominent from the late 18th century onward.",
    "Latin bicornis 'two-horned'.",
    "The general adjusted his feathered bicorn hat.",
    "Napoleonic War Memoirs"
  ],
  [
    "Biretta",
    "/bɪˈrɛtə/",
    "m",
    "A square cap with three or four ridges, worn by Catholic clergy.",
    "Italian berretta, diminutive of birro.",
    "The cardinal adjusted his scarlet biretta.",
    "Ecclesiastical Records of York"
  ],
  [
    "Blaffert",
    "/ˈblæfərt/",
    "m",
    "An old German silver coin, occasionally used in medieval trade exchanges across Europe.",
    "Middle Low German blafhort.",
    "He paid three blafferts for the coarse woolen yarn.",
    "Hanoverian Trade Ledger"
  ],
  [
    "Bliaut",
    "/bliˈoʊ/",
    "m",
    "A rich, pleated outer tunic worn by both men and women of high status in the 12th century.",
    "Old French blialt.",
    "She wore a blue silk bliaut laced tightly at the sides.",
    "Chrétien de Troyes"
  ],
  [
    "Blouse",
    "/blaʊz/",
    "t",
    "A loose upper garment resembling a smock, adopted into mainstream women's fashion in the Victorian era.",
    "French blouse 'workman's smock'.",
    "She wore a crisp linen blouse with lace trim.",
    "Godey's Lady's Book"
  ],
  [
    "Bobbins",
    "/ˈbɒbɪnz/",
    "t",
    "Small wooden cylinders used in lacemaking to hold and wind the threads.",
    "French bobine.",
    "The lacemaker deftly clicked her wooden bobbins together.",
    "English County Folk Lore"
  ],
  [
    "Bodekin",
    "/ˈbɒdɪkɪn/",
    "e",
    "Alternative spelling of bodkin; a small dagger or stiletto, or a large sewing needle.",
    "Middle English diminutive of bode.",
    "With a bare bodekin, who would fardels bear?",
    "William Shakespeare, Hamlet (1603 Quarto)"
  ],
  [
    "Bodice",
    "/ˈbɒdɪs/",
    "e",
    "A close-fitting woman's garment covering the torso, separate from or sewn to the skirt.",
    "Earlier bodies, plural of body.",
    "Her velvet bodice was embroidered with seed pearls.",
    "Philip Stubbes, Anatomie of Abuses"
  ],
  [
    "Bolster",
    "/ˈboʊlstər/",
    "m",
    "A long, narrow stuffed pillow, or a padded reinforcement inside historical garments.",
    "Old English bolster.",
    "His doublet was padded with a canvas bolster to create the fashionable silhouette.",
    "Tailor's Accounts, Royal Wardrobe"
  ],
  [
    "Bombast",
    "/ˈbɒmbæst/",
    "e",
    "Cotton padding or stuffing used in Elizabethan doublets and breeches to puff them out.",
    "Old French bombace 'cotton'.",
    "His trunk hose were stuffed with horsehair and bombast.",
    "Stubbes, Anatomie of Abuses"
  ],
  [
    "Bombazine",
    "/ˌbɒmbəˈziːn/",
    "t",
    "A twill fabric constructed of silk and worsted, heavily utilized for Victorian mourning attire.",
    "French bombasin, from Medieval Greek bombakinos.",
    "She shrouded herself in a heavy black bombazine gown after her husband's passing.",
    "Anthony Trollope, The Last Chronicle of Barset"
  ],
  [
    "Bonnet",
    "/ˈbɒnɪt/",
    "m",
    "A headwear item, historically worn by men in medieval times and later exclusively by women.",
    "Old French bonnet.",
    "He doffed his woolen bonnet in respect to the lord.",
    "Chaucer, Canterbury Tales"
  ],
  [
    "Boot-hose",
    "/ˈbuːtˌhoʊz/",
    "e",
    "Coarse stockings worn inside tall riding boots during the 16th and 17th centuries.",
    "English compound: boot + hose.",
    "His leather boots were fitted with fine linen boot-hose.",
    "Diary of Samuel Pepys"
  ],
  [
    "Bordure",
    "/ˈbɔːrdər/",
    "m",
    "A heraldic border running around the edge of an escutcheon as a mark of cadency.",
    "Old French bordure 'hem, border'.",
    "The shield bore a red bordure charged with silver bezants.",
    "The Complete Peerage"
  ],
  [
    "Bouclé",
    "/buːˈkleɪ/",
    "t",
    "A yarn made from looped threads, creating a textured fabric popular in late Victorian coats.",
    "French bouclé 'curled'.",
    "Her winter pelisse was fashioned from dark green bouclé wool.",
    "The Queen: The Lady's Newspaper"
  ],
  [
    "Boutant",
    "/buːˈtɒnt/",
    "m",
    "An architectural term for an arch-buttress or flying buttress.",
    "Old French boutant, from bouter 'to push'.",
    "The massive stone boutant supported the soaring cathedral nave.",
    "Willis, Architectural Nomenclature"
  ],
  [
    "Caftan",
    "/ˈkæftən/",
    "e",
    "A long, loose garment or robe tied with a sash, worn in the Middle East and later adopted into European fashion.",
    "From Turkish qaftān, via Persian.",
    "He wore a rich caftan of cloth of gold.",
    "Richard Hakluyt, Principal Navigations"
  ],
  [
    "Calabre",
    "/ˈkæləbər/",
    "m",
    "A valuable fur obtained from a species of squirrel, grey on the back and white on the belly, used to line high-status medieval garments.",
    "From Old French calabre, probably from Calabria in Italy.",
    "A goun furred with calabre.",
    "William Langland, Piers Plowman"
  ],
  [
    "Caliga",
    "/kəˈlaɪɡə/",
    "m",
    "A heavy, hobnailed military sandal worn by Roman legionnaires and occasionally referenced in medieval Anglo-Latin texts.",
    "Latin caliga, plural caligae.",
    "His caligae rang upon the stony ground.",
    "Mediaeval Latin Chronicles"
  ],
  [
    "Caltrap",
    "/ˈkæltræp/",
    "m",
    "A four-pointed iron weapon scattered on the ground to impede cavalry by piercing horses' hooves.",
    "From Old English calcatripu, meaning 'tread-trap'.",
    "They sowed the field with caltraps to break the horse-charge.",
    "Jean Froissart, Chronicles"
  ],
  [
    "Camaca",
    "/kəˈmɑːkə/",
    "m",
    "A costly medieval fabric woven from fine silk, often used for ecclesiastical vestments and noble garments.",
    "From Old French camaka, of Oriental origin.",
    "A robe of rich camaca embroidered with pearls.",
    "Chaucerian Inventories"
  ],
  [
    "Cambar",
    "/ˈkæmbɑːr/",
    "m",
    "An obsolete medieval term for a specific type of rich silk or satin fabric.",
    "Medieval Latin cambar, from Arabic.",
    "Gowns of cambar and velvet.",
    "Exchequer Rolls of Scotland"
  ],
  [
    "Camis",
    "/ˈkæmɪs/",
    "e",
    "A light, loose-fitting tunic, shirt, or chemise worn next to the skin or as a light outer garment.",
    "From Italian camisa or Old French chemise, ultimately from Late Latin camisia.",
    "Her snowy camis was bound with silken ribbons.",
    "Edmund Spenser, The Faerie Queene"
  ],
  [
    "Camisado",
    "/ˌkæmɪˈsɑːdoʊ/",
    "e",
    "A sudden military attack or surprise raid carried out at night, historically involving soldiers wearing white shirts (camisas) over their armor for identification.",
    "From Spanish camisada, derived from camisa.",
    "They prepared a camisado against the enemy camp by moonlight.",
    "Sir Walter Raleigh, History of the World"
  ],
  [
    "Campion",
    "/ˈkæmpiən/",
    "m",
    "A heraldic charge or decorative motif resembling the campion flower, though rarely used in standard blazonry.",
    "Middle English campion, from Old French.",
    "Charged with a campion flower proper.",
    "Heraldic Visitations"
  ],
  [
    "Canions",
    "/ˈkæniənz/",
    "e",
    "Tubular extensions or lower breeches attached to upper-stocks or trunk-hose in Elizabethan fashion, fitting tightly around the knees.",
    "From French canons.",
    "His velvet hose were fashioned with paned canions.",
    "Philip Stubbes, The Anatomie of Abuses"
  ],
  [
    "Canton",
    "/ˈkæntən/",
    "m",
    "A heraldic honor point occupying the upper dexter corner of an escutcheon, one-third the width of the chief.",
    "From Old French canton, meaning corner or district.",
    "Argent, a cross gules, with a canton of the field.",
    "John Guillim, Display of Heraldrie"
  ],
  [
    "Capachino",
    "/ˌkæpəˈtʃiːnoʊ/",
    "e",
    "A hooded cloak or cape, akin to that worn by Capuchin friars, popular in Elizabethan travel wear.",
    "From Italian cappuccino.",
    "Wrapped in a warm capachino against the alpine mist.",
    "Traveler's Diary of the Elizabethan Era"
  ],
  [
    "Capeline",
    "/ˈkæpəlaɪn/",
    "e",
    "A kind of steel skull-cap or helmet worn by infantry, or a broad-brimmed woman's hat.",
    "From French capeline, meaning little hood.",
    "The pikemen adjusted their iron capelines.",
    "Military Ordinances of Elizabeth I"
  ],
  [
    "Capon-bell",
    "/ˈkeɪpən bɛl/",
    "e",
    "A small bell attached to a garment or falcon, or a satirical term for a dangling decorative trinket.",
    "Native English compound.",
    "Adorned with capon-bells that jingled at every step.",
    "Shakespearean glossary terms"
  ],
  [
    "Caraco",
    "/ˈkærəkoʊ/",
    "t",
    "A woman's jacket with a tight bodice and short basques, popular in the 18th and early 19th centuries.",
    "From French caraco.",
    "She wore a striped silk caraco over her petticoat.",
    "Jane Austen, Letters"
  ],
  [
    "Cardinal",
    "/ˈkɑːrdɪnəl/",
    "e",
    "A short woman's cloak with a hood, typically made of scarlet cloth, fashionable in the 18th century.",
    "Named after the red robes worn by Catholic Cardinals.",
    "She muffled herself in her scarlet cardinal.",
    "Horace Walpole, Letters"
  ],
  [
    "Cassock",
    "/ˈkæsək/",
    "e",
    "A long, loose-fitting coat or gown worn by men, soldiers, and clergymen in the 16th and 17th centuries.",
    "From French casaque, possibly from Turkish.",
    "Soldiers clad in leather cassocks.",
    "Shakespeare, All's Well That Ends Well"
  ],
  [
    "Castel",
    "/ˈkæstəl/",
    "m",
    "An archaic heraldic term for a castle, usually depicted with two or three towers.",
    "From Old French castel, Latin castellum.",
    "Gules, a castel triple-towered argent.",
    "Medieval Roll of Arms"
  ],
  [
    "Catapult",
    "/ˈkætəpʌlt/",
    "m",
    "A heavy siege engine designed for hurling large stones and missiles at fortifications.",
    "From Latin catapulta, from Greek katapeltēs.",
    "They brought up the great catapults against the curtain wall.",
    "Chronicles of the Crusades"
  ],
  [
    "Caudebec",
    "/ˈkɔːdbɛk/",
    "t",
    "A high-grade beaver hat manufactured in the town of Caudebec in Normandy.",
    "From the French place name Caudebec.",
    "He doffed his fine Caudebec hat with a bow.",
    "Victorian tailoring manuals"
  ],
  [
    "Caul",
    "/kɔːl/",
    "m",
    "A close-fitting net or cap worn by women to confine their hair, often made of gold mesh or silk.",
    "From Old French caule, meaning cabbage or net.",
    "Her golden hair was prisoned in a jeweled caul.",
    "Geoffrey Chaucer, Troilus and Criseyde"
  ],
  [
    "Cavalier",
    "/ˌkævəˈlɪər/",
    "e",
    "A mounted soldier or knight, later specifically applied to the royalist partisans of Charles I.",
    "From Italian cavaliere, via French.",
    "A troop of cavaliers in plumed hats rode by.",
    "Civil War Pamphlets"
  ],
  [
    "Celt",
    "/sɛlt/",
    "t",
    "An archeological term for a prehistoric stone or bronze axe-head used as a tool or weapon.",
    "From Latin celtis, a chisel (though influenced by confusion with Celtic peoples).",
    "A polished flint celt recovered from the barrow.",
    "Victorian Antiquarian Journals"
  ],
  [
    "Cendal",
    "/ˈsɛndəl/",
    "m",
    "A fine, thin medieval silk fabric used for linings, banners, and summer garments.",
    "From Old French cendal, from Medieval Latin cindatus.",
    "A banner of green cendal wrought with gold.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Cercle",
    "/ˈsɜːrkəl/",
    "m",
    "An archaic heraldic term for a coronet or circlet worn around a helmet.",
    "From Old French cercle.",
    "A cercel of gold upon his bascinet.",
    "Chivalric Tournament Rolls"
  ],
  [
    "Cerecloth",
    "/ˈsɪərklɒθ/",
    "m",
    "Cloth treated with wax or gum, used for wrapping corpses, waterproofing garments, or dressing wounds.",
    "From Latin cera (wax) + cloth.",
    "Bound in cerecloth like a knight of old.",
    "John Wycliffe, Bible Translation"
  ],
  [
    "Cert",
    "/sɜːrt/",
    "m",
    "An obsolete variant of certayne or a term for a certified decree or heraldic record.",
    "From Old French certe.",
    "Recorded by cert of arms.",
    "Heraldic Office Records"
  ],
  [
    "Chaffron",
    "/ˈtʃæfrɒn/",
    "m",
    "A piece of plate armor designed to protect a warhorse's head.",
    "From Old French chaufebron.",
    "The destrier wore a steel chaffron with a spike.",
    "Inventory of Henry VIII"
  ],
  [
    "Chain-mail",
    "/ˈtʃeɪn meɪl/",
    "m",
    "Armor formed of interlocking metal rings, standard protection throughout the medieval period.",
    "From Old French maille + chain.",
    "His heavy chain-mail clanked as he mounted.",
    "Froissart's Chronicles"
  ],
  [
    "Chapel",
    "/ˈtʃæpəl/",
    "m",
    "An archaic term for a light steel skull-cap or iron hat (chapel de fer).",
    "From Old French chapel de fer.",
    "He set his iron chapel firmly upon his head.",
    "Gawain and the Green Knight"
  ],
  [
    "Chaplet",
    "/ˈtʃæplɪt/",
    "m",
    "A wreath or garland of flowers, leaves, or precious metals worn on the head, often featured in heraldry.",
    "From Old French chapelet.",
    "A chaplet of oak leaves upon his helm.",
    "Edmund Spenser, The Faerie Queene"
  ],
  [
    "Chappe",
    "/tʃæp/",
    "m",
    "An alternative spelling of chape, denoting the metal fitting at the base of a scabbard.",
    "From Old French chappe.",
    "Decorated with enameled chappes.",
    "Medieval Armoury Inventories"
  ],
  [
    "Chequy",
    "/ˈtʃɛki/",
    "m",
    "A heraldic pattern consisting of a field divided into a regular grid of alternating tinctures, resembling a chessboard.",
    "From Old French chequie.",
    "Checky of or and azure.",
    "Complete Peerage of England"
  ],
  [
    "Chemise",
    "/ʃəˈmiːz/",
    "e",
    "A woman's basic undergarment worn next to the skin, precursor to the modern slip.",
    "From Late Latin camisia.",
    "A fine linen chemise edged with lace.",
    "Elizabethan Wardrobe Accounts"
  ],
  [
    "Chetel",
    "/ˈtʃɛtəl/",
    "m",
    "An old variant term for a kettle or metallic vessel listed among domestic and camp inventories.",
    "From Old English cetel.",
    "A brass chetel for the soldiers' mess.",
    "Monastic Household Rolls"
  ],
  [
    "Chevron",
    "/ˈʃɛvrən/",
    "m",
    "A primary heraldic ordinary shaped like an inverted 'V', representing a roof truss or architectural gable.",
    "From Old French chevron, meaning rafters.",
    "Azure, a chevron between three mullets or.",
    "Ancient Roll of Arms"
  ],
  [
    "Chief",
    "/tʃiːf/",
    "m",
    "An honorable heraldic ordinary occupying the upper one-third of the shield.",
    "From Old French chef.",
    "Gules, a chief argent.",
    "Treatise on Heraldry"
  ],
  [
    "Chimere",
    "/tʃɪˈmɪər/",
    "e",
    "A light, upper robe or tunic worn by bishops and academic figures in the Tudor era.",
    "From Old French chimere.",
    "The bishop wore a scarlet chimere over his rochet.",
    "Ecclesiastical Visitation Records"
  ],
  [
    "Cingulum",
    "/ˈsɪŋɡjʊləm/",
    "m",
    "A belt or girdle, particularly one worn by clergy or knights to suspend a sword.",
    "Latin cingulum, meaning belt or sash.",
    "Girt with the cingulum of knighthood.",
    "Medieval Coronation Rites"
  ],
  [
    "Cinquefoil",
    "/ˈsɪŋkwəfɔɪl/",
    "m",
    "A heraldic charge depicting a stylized flower with five leaves or petals.",
    "From Old French cinque foil (five-leaf).",
    "Ermine, a cinquefoil gules.",
    "Heraldic Ordinary"
  ],
  [
    "Dragmant",
    "/ˈdræɡmənt/",
    "m",
    "An obsolete term for a kind of heavy fabric or coarse dress material.",
    "Middle English, of uncertain origin, possibly related to drag.",
    "She wore a kirtle of rough dragmant suited for travel.",
    "Medieval Wardrobe Accounts"
  ],
  [
    "Demy-cullion",
    "/ˈdɛmi ˈkʌliən/",
    "e",
    "A light piece of armor or a semi-armored jerkin worn by irregular infantry.",
    "Compound of demy ('half') and cullion ('base fellow or armor piece').",
    "The foot soldiers were equipped with cheap demy-cullions.",
    "Elizabethan Military Muster Rolls"
  ],
  [
    "Diaper",
    "/ˈdaɪpər/",
    "m",
    "In textile history, a linen or silk fabric woven with a small diamond geometric pattern.",
    "From Old French diaspre, from Byzantine Greek diaspros ('very white').",
    "The altar cloth was finest white diaper bordered in gold thread.",
    "Exeter Cathedral Inventory"
  ],
  [
    "Dowl",
    "/daʊl/",
    "e",
    "The downy under-feather of a bird, sometimes used for stuffing quilted garments or doublets.",
    "Middle English doule, of Germanic origin.",
    "The lining of his winter cap was stuffed with soft goose dowl.",
    "The Wright's Chaste Wife"
  ],
  [
    "Demy-greave",
    "/ˈdɛmi ɡriːv/",
    "m",
    "A piece of armor protecting only the front part of the lower leg.",
    "From Old French demi ('half') and Middle English greve ('shin armor').",
    "He strapped on his steel demy-greaves before mounting.",
    "Tower of London Inventory"
  ],
  [
    "Dorneck",
    "/ˈdɔːrnɛk/",
    "e",
    "A stout fabric resembling damask, used for hangings and clothing, originally made in Tournai.",
    "From Flemish Doornik (the city of Tournai).",
    "The parlor walls were hung with heavy green dorneck.",
    "Will of Sir John Daunce"
  ],
  [
    "Dragoon",
    "/drəˈɡuːn/",
    "t",
    "Originally a mounted infantryman armed with a short musket called a dragon.",
    "From French dragon, originally a type of carbine emitting fire like a mythical beast.",
    "The dragoons wore scarlet coats with yellow facings.",
    "Regimental Dress Regulations"
  ],
  [
    "Dozzane",
    "/dʌˈzeɪn/",
    "e",
    "A collective measure or bundle of ribbon, tape, or small textile goods.",
    "From Old French douzaine ('dozen').",
    "He purchased three dozzanes of silk ribbon for his points.",
    "London Drapers' Guild Records"
  ],
  [
    "Drapery",
    "/ˈdreɪpəri/",
    "m",
    "Cloth or textile fabrics collectively; the trade of a draper.",
    "From Old French draperie, from drap ('cloth').",
    "The merchant's stall was laden with fine woolen drapery.",
    "Piers Plowman"
  ],
  [
    "Dowl-silk",
    "/ˈdaʊl sɪlk/",
    "e",
    "A very fine, soft variety of spun silk used for delicate undergarments.",
    "Compound of dowl ('down') and silk.",
    "Her inner bodice was lined with smooth dowl-silk.",
    "Elizabethan Household Accounts"
  ],
  [
    "Demilunette",
    "/ˌdɛmi luːˈnɛt/",
    "t",
    "A half-moon shaped decorative element on Victorian lace or embroidery.",
    "From French demi-lune ('half-moon').",
    "The hem was trimmed with delicate demilunettes of Honiton lace.",
    "The Lady's Magazine"
  ],
  [
    "Diaperwork",
    "/ˈdaɪpərwɜːrk/",
    "m",
    "Ornamental surface pattern resembling woven diaper cloth, used in armor engraving and heraldry.",
    "From diaper + work.",
    "The steel breastplate was richly adorned with diaperwork.",
    "Armorers' Guild Records"
  ],
  [
    "Dextro-",
    "/ˈdɛkstroʊ/",
    "m",
    "A heraldic prefix indicating the right side of a shield (from the bearer's perspective).",
    "From Latin dexter ('right').",
    "A lion rampant is displayed on the dextro-chief.",
    "Treatise on Heraldry"
  ],
  [
    "Dimer",
    "/ˈdaɪmər/",
    "m",
    "A obsolete coin or token, but in medieval textile records, a measure of thread.",
    "From Old French.",
    "The seamstress used a dimer of silver thread for the embroidery.",
    "Guild of Tailors Ordinances"
  ],
  [
    "Duck",
    "/dʌk/",
    "e",
    "A heavy, strong plain-woven cotton or linen fabric, lighter than canvas.",
    "From Dutch doek ('linen cloth').",
    "His summer trousers were made of stout white duck.",
    "Nautical and Clothing Accounts"
  ],
  [
    "Dimitity",
    "/ˈdɪmɪti/",
    "t",
    "Variant of dimity; a durable cotton fabric with a raised corded pattern.",
    "From Greek timitios ('of double thread').",
    "The summer bedhangings were fashioned from striped dimitity.",
    "Victorian Domestic Economy Guide"
  ],
  [
    "Dramm",
    "/dræm/",
    "m",
    "A tiny ornamental spangle or sequin sewn onto medieval court garments.",
    "Corruption of old weight terms used in embroidery supply.",
    "The velvet gown was sown with golden dramms.",
    "Royal Wardrobe Roll"
  ],
  [
    "Drag-tail",
    "/ˈdræɡteɪl/",
    "e",
    "A contemptuous term for a woman whose skirt trails in the dirt, or the trailing part itself.",
    "Compound of drag and tail.",
    "Pick up your skirts, lest you look like a common drag-tail.",
    "Shakespeare, The Merry Wives of Windsor"
  ],
  [
    "Demy-gauntlet",
    "/ˈdɛmi ˈɡɔːntlət/",
    "m",
    "A gauntlet that leaves the fingers partially free or unprotected at the palm.",
    "From demi and gauntlet.",
    "He wore demy-gauntlets for better grip upon the reins.",
    "Fifteenth-Century Arming Manual"
  ],
  [
    "Dornick-weave",
    "/ˈdɔːrnɪk wiːv/",
    "e",
    "A sturdy check or diaper pattern used in wool and linen manufacturing.",
    "From Dorneck + weave.",
    "The tablecloth was executed in a fine dornick-weave.",
    "Domestic Inventory of Essex"
  ],
  [
    "Dowl-case",
    "/ˈdaʊl keɪs/",
    "e",
    "An archaic term for a pillowcase or cushion cover stuffed with soft down.",
    "From dowl + case.",
    "She rested her head upon a velvet dowl-case.",
    "Household Book of Thomas Kytson"
  ],
  [
    "Doubling",
    "/ˈdʌblɪŋ/",
    "m",
    "The lining of a garment, especially a fur lining inside a cloak or robe.",
    "From double.",
    "The cloak possessed a rich doubling of grey squirrel fur.",
    "Medieval Ordinances of Clothiers"
  ],
  [
    "Drag-net",
    "/ˈdræɡnɛt/",
    "m",
    "Metaphorically used in satire to describe overly flowing, sweeping court robes.",
    "From drag and net.",
    "Their trailing silks acted as drag-nets upon the filthy floor.",
    "Sermons of the Reformation"
  ],
  [
    "Demy-plackart",
    "/ˈdɛmi ˈplækɑːrt/",
    "m",
    "An auxiliary plate of armor reinforcing the lower breastplate.",
    "From demi and plackart.",
    "The knight secured his demy-plackart before the joust.",
    "Armor Inventory of Henry VIII"
  ],
  [
    "Draught",
    "/drɑːft/",
    "m",
    "A pattern or design drawn on paper or parchment by a tailor or herald.",
    "From Middle English drauhte.",
    "The master tailor submitted his draught for the royal coronation robes.",
    "Tailors' Guild Records"
  ],
  [
    "Dimi-cinct",
    "/ˈdɪmi sɪŋkt/",
    "t",
    "A Victorian half-belt or waist-band ornament on dresses.",
    "From Latin dimidius ('halved') + cinctus ('girdle').",
    "The silk dress was accented by a beaded dimi-cinct.",
    "The Englishwoman's Domestic Magazine"
  ],
  [
    "Drabget",
    "/ˈdræbɡɛt/",
    "e",
    "A coarse woolen blanket or outer wrap of dull, brownish-grey color.",
    "From drab ('dull brownish color') + blanket.",
    "The sentries wrapped themselves in heavy drabgets against the frost.",
    "Military Campaign Journal"
  ],
  [
    "Dowl-thread",
    "/ˈdaʊl θrɛd/",
    "m",
    "A soft, loosely twisted woolen or silk thread used for delicate embroidery.",
    "From dowl + thread.",
    "The flowers upon the hood were stitched with colored dowl-thread.",
    "Embroidery Guild Archives"
  ],
  [
    "Dextron",
    "/ˈdɛkstrɒn/",
    "m",
    "An old heraldic term for the right side of a coat of arms.",
    "Variant of dexter.",
    "The principal charge is placed upon the dextron chief.",
    "Heraldic Roll of Arms"
  ],
  [
    "Demy-casque",
    "/ˈdɛmi kæsk/",
    "e",
    "A light helmet covering only the upper portion of the head.",
    "From demi and casque.",
    "The light horsemen wore iron demy-casques.",
    "Armory Records of the Low Countries"
  ],
  [
    "Dimity-stitch",
    "/ˈdɪmɪti stɪtʃ/",
    "t",
    "A specific sewing stitch used to reinforce corded fabrics.",
    "From dimity + stitch.",
    "The corset seams were secured with a tight dimity-stitch.",
    "The Victorian Needlework Instructor"
  ],
  [
    "Dragée",
    "/dræˈʒeɪ/",
    "e",
    "In medieval costume, small metallic decorations or spangles resembling sugar plums.",
    "From Old French dragée.",
    "The velvet cap was sewn with shining silver dragées.",
    "Court Festivity Accounts"
  ],
  [
    "Double-ruff",
    "/ˈdʌbəl rʌf/",
    "e",
    "A very large, multi-layered pleated neck ruff characteristic of the late Elizabethan era.",
    "From double and ruff.",
    "He wore a stiffly starched double-ruff that reached his ears.",
    "Stubbes, Anatomie of Abuses"
  ],
  [
    "Dowl-skin",
    "/ˈdaʊl skɪn/",
    "m",
    "A soft, dressed leather resembling suede, used for gloves or linings.",
    "From dowl ('soft down') and skin.",
    "His hunting gloves were fashioned from supple dowl-skin.",
    "Medieval Merchant Accounts"
  ],
  [
    "Demy-sleeves",
    "/ˈdɛmi sliːvz/",
    "e",
    "Detachable or half-length sleeves worn as a fashion accessory over a kirtle.",
    "From demi and sleeve.",
    "She pinned her embroidered demy-sleeves to her bodice.",
    "Elizabethan Inventories"
  ],
  [
    "Dornick-table",
    "/ˈdɔːrnɪk ˈteɪbəl/",
    "e",
    "Short for dornick-tablecloth, a fine damask linen cloth from Tournai.",
    "From Dorneck + table.",
    "The feast was laid out upon a spotless dornick-table.",
    "Will of a Lincolnshire Gentleman"
  ],
  [
    "Dowl-quilt",
    "/ˈdaʊl kwɪlt/",
    "t",
    "A light bed quilt or petticoat stuffed with bird down.",
    "From dowl + quilt.",
    "She wore a warm dowl-quilt petticoat beneath her wool skirt.",
    "Victorian Diary Excerpts"
  ],
  [
    "Drag-chain",
    "/ˈdræɡ tʃeɪn/",
    "t",
    "A heavy metal chain used in Victorian traveling gear to secure cloaks and baggage.",
    "From drag and chain.",
    "The carriage chest was fastened with a stout brass drag-chain.",
    "Traveler's Guide to Victorian England"
  ],
  [
    "Demy-vambrace",
    "/ˈdɛmi ˈvæmbreɪs/",
    "m",
    "A partial armor piece protecting only the outer half of the forearm.",
    "From demi and vambrace ('forearm armor').",
    "He buckled his demy-vambraces over his padded arming doublet.",
    "Fifteenth-Century Knightly Ordinances"
  ],
  [
    "Duad",
    "/ˈduːæd/",
    "e",
    "A pair of matching garment accessories, such as matching sleeve ribbons or points.",
    "From Greek duas ('two').",
    "He wore a brilliant duad of crimson sleeve-knots.",
    "Elizabethan Courtier's Journal"
  ],
  [
    "Empusa",
    "/ɛmˈpjuːzə/",
    "e",
    "A fantastic monster or hobgoblin; metaphorically applied to a terrifying or monstrously fashioned helmet crest or ornament.",
    "Greek empousa via Late Latin.",
    "His helm surmounted with an Empusa that struck terror into the opposing ranks.",
    "The Mirror for Magistrates"
  ],
  [
    "Enarm",
    "/ɪˈnɑːrm/",
    "m",
    "The central handle or strap on the inside of a round shield (targe or buckler) through which the arm is thrust.",
    "Old French enarmer, from Latin in- + arma.",
    "He gripped the enarm fiercely as the heavy lance splintered against his shield.",
    "Chivalric Romances of the 14th Century"
  ],
  [
    "Enarration",
    "/ˌɛnəˈreɪʃən/",
    "e",
    "A detailed explanation, exposition, or formal heraldic blazoning of a coat of arms.",
    "Latin enarratio, from enarrare.",
    "The herald delivered a solemn enarration of the quarterings upon the baron's surcoat.",
    "William Camden"
  ],
  [
    "Endoss",
    "/ɛnˈdɒs/",
    "m",
    "In heraldry, a sub-ordinary resembling a narrow pale, usually placed as a companion on either side of a pale.",
    "Old French endosser, to back or support.",
    "The shield bore a central pale flanked by two slender endosses.",
    "Treatise on Heraldry"
  ],
  [
    "Enfect",
    "/ɪnˈfɛkt/",
    "m",
    "Tainted, corrupted, or soiled; used of fabrics stained or polluted by sweat or dirt.",
    "Middle English, from Old French infecter / Latin inficere.",
    "The fine linen was enfect with the grime of the long journey.",
    "Piers Plowman"
  ],
  [
    "Engrailed",
    "/ɪnˈɡreɪld/",
    "m",
    "Having a curved or indented edge, specifically an ordinary in heraldry bordered with small semicircular bites or scallops.",
    "Old French engreler, to make ragged.",
    "A cross engrailed in sable upon a field of gold.",
    "Roll of Arms"
  ],
  [
    "Enshield",
    "/ɪnˈshiːld/",
    "e",
    "To cover, protect, or envelop as if with a shield; to armor.",
    "From en- + shield, coined or popularized by Elizabethan dramatists.",
    "Enshielded in triple steel, the knight advanced without fear.",
    "William Shakespeare, Measure for Measure"
  ],
  [
    "Ensigned",
    "/ɪnˈsaɪnd/",
    "m",
    "Marked, adorned, or decorated with an insignia, crown, badge, or heraldic emblem.",
    "Old French enseigner, from Latin insignire.",
    "A velvet cap ensigned with a golden coronet.",
    "Le Morte d'Arthur"
  ],
  [
    "Entail",
    "/ɪnˈteɪl/",
    "m",
    "Artistic carving, ornamentation, or intricately chased metalwork upon armor or hilt.",
    "Old French entaille, from entaillier.",
    "The breastplate was richly adorned with gold entail depicting foliage and beasts.",
    "Chaucer's Canterbury Tales"
  ],
  [
    "Entrechat",
    "/ˌɒntrəˈʃɑː/",
    "t",
    "A dramatic leap in dancing where the legs cross each other rapidly, heavily influencing the cut of mid-19th-century men's trousers to allow freedom of movement.",
    "French entrechat, from Italian capriola intrecciata.",
    "His pantaloons were tailored with extra ease to accommodate the intricate entrechat.",
    "Thehaberdasher's Guide"
  ],
  [
    "Enurny",
    "/ɛnˈɜːrni/",
    "m",
    "In heraldry, a border charged with a continuous series of tressures or marginal ornamentation of beasts.",
    "Old French enourner, to adorn.",
    "A bordure enurny of lions rampant.",
    "The Boke of St. Albans"
  ],
  [
    "Epauliere",
    "/ˌɛpəʊliˈɛər/",
    "m",
    "A piece of plate armor protecting the shoulder; a shoulder-guard.",
    "French épauulière, from épaule (shoulder).",
    "The lance glanced off the polished steel epauliere with a harsh clang.",
    "Inventory of Royal Armoury"
  ],
  [
    "Epergne",
    "/ɪˈpɜːrn/",
    "t",
    "A large, ornate centerpiece for a dining table, typically made of silver and featuring multiple branched dishes or baskets, popular in Victorian times.",
    "French épargne, saving or economy (originally a receptacle to save table space).",
    "A massive silver epergne dominated the center of the banquet table laden with lace runners.",
    "Mrs. Beeton's Book of Household Management"
  ],
  [
    "Epigraph",
    "/ˈɛpɪɡrɑːf/",
    "e",
    "An inscription engraved upon a piece of armor, ring, or weapon.",
    "Greek epigraphe.",
    "The sword bore a Latin epigraph along the fuller, invoking divine protection.",
    "Camden's Remains Concerning Britain"
  ],
  [
    "Epitoge",
    "/ˈɛpɪtoʊdʒ/",
    "m",
    "A hood or cape worn across the shoulder as part of academic, clerical, or formal medieval court dress.",
    "Old French epitoge, from Latin epithogium.",
    "He wore a scholar's gown draped with a fur-trimmed epitoge.",
    "Statutes of Oxford University"
  ],
  [
    "Erring",
    "/ˈɛrɪŋ/",
    "m",
    "Wandering or straying; occasionally used in medieval verse to describe fluttering or trailing garment ribbons.",
    "Middle English erring, from Old English eorrian.",
    "Her erring ribbons streamed in the sharp tournament breeze.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Escarbuncle",
    "/ɛsˈkɑːrbʌŋkəl/",
    "m",
    "A heraldic charge consisting of eight radiating sceptres or staves, usually jewelled or ending in fleur-de-lis, originally a structural brace for shields.",
    "Old French escarboucle, from Latin carbunculus.",
    "An escarbuncle of gold upon a field of gules.",
    "The Armorial of Henry III"
  ],
  [
    "Escarp",
    "/ɪˈskɑːrp/",
    "m",
    "In fortification and armor styling, a steep slope; also a diagonal band across a shield.",
    "French escarpe, from Italian scarpa.",
    "The breastplate featured an escarp ridge to deflect downward blows.",
    "Military Treatises of the 15th Century"
  ],
  [
    "Esclavage",
    "/ɛsˈklævɪdʒ/",
    "t",
    "A style of Victorian necklace consisting of several chains linked together across the breast.",
    "French esclavage.",
    "She wore a delicate gold esclavage that glittered against her black evening silk.",
    "Victorian Jewelry Catalog"
  ],
  [
    "Escot",
    "/ˈɛskɒt/",
    "m",
    "A tax, payment, or contribution; specifically a monetary levy assessed on townsfolk for the upkeep of city armor and watchmen.",
    "Old French escot, from Germanic root.",
    "Every burgher was required to pay his escot for the town garrison's mail.",
    "London Guild Records"
  ],
  [
    "Escru",
    "/ˈɛskruː/",
    "t",
    "An archaic variant spelling of ecru, denoting the unbleached, raw color of linen or silk fabric.",
    "French écru (raw).",
    "The bride's gown was fashioned from heavy escru silk lace.",
    "Godey's Lady's Book"
  ],
  [
    "Ese",
    "/iːz/",
    "m",
    "An old term for looseness, comfort, or roominess in the tailoring of a garment.",
    "Old French aise.",
    "The doublet was cut with ample ese across the chest for heavy armor layers beneath.",
    "Tailor's Guild Ordinances"
  ],
  [
    "Esne",
    "/ɛsn/",
    "m",
    "An Old English term for a servant, laborer, or low-ranking foot soldier wearing coarse wool tunics.",
    "Old English esne (servant, hireling).",
    "The esnes marched behind the mounted knights, armed with billhooks.",
    "Anglo-Saxon Chronicle"
  ],
  [
    "Espergne",
    "/ɛˈspɜːrn/",
    "t",
    "A Victorian spelling variant of epergne, the elaborate table centerpiece.",
    "French influence in Victorian domestic manuals.",
    "Crystal drops hung from the branches of the silver espergne.",
    "The Young Wife's Cookery Book"
  ],
  [
    "Esponton",
    "/ɪˈspɒntən/",
    "e",
    "A type of half-pike or partisan used by infantry officers during the 16th and 17th centuries.",
    "French esponton, from Italian spontone.",
    "The captain carried an ornate esponton inlaid with brass etchings.",
    "Elizabethan Militia Muster Rolls"
  ],
  [
    "Essonite",
    "/ˈɛsənaɪt/",
    "t",
    "A reddish-brown variety of garnet often used in Victorian brooches and clasps securing plaid shawls.",
    "French essonite, from Greek hesson (inferior).",
    "A heavy silver brooch set with a polished essonite stone.",
    "Gemstone Lore of the 19th Century"
  ],
  [
    "Estrich",
    "/ˈɛstrɪtʃ/",
    "m",
    "An archaic name for the goshawk or falcon, or the down of the ostrich used in decorating medieval hats and crests.",
    "Old French estrache / ostriche.",
    "A velvet cap adorned with white estrich feathers.",
    "Chaucer, The Book of the Duchess"
  ],
  [
    "Eswipe",
    "/ˈɛswaɪp/",
    "m",
    "A swing or sweep of a sword, mace, or battle-ax in combat.",
    "Middle English from Old English swipan.",
    "With a mighty eswipe of his broadsword, he cleared the battlement.",
    "Alliterative Morte Arthure"
  ],
  [
    "Etamin",
    "/ˈɛtəmɪn/",
    "t",
    "A light, open-weave woolen or cotton fabric resembling bunting, used for Victorian summer dresses and curtains.",
    "French étamine, from Latin staminum.",
    "She wore a pale grey etamin dress trimmed with black velvet ribbons.",
    "Victorian Textile Dictionary"
  ],
  [
    "Etamine",
    "/ˈɛtəmiːn/",
    "m",
    "A coarse silk or wool cloth used in medieval times for filtering liquids or making stiff inner linings for garments.",
    "Old French etamine.",
    "The doublet required a layer of etamin to maintain its stiff, peascod shape.",
    "Medieval Draper's Accounts"
  ],
  [
    "Etch",
    "/ɛtʃ/",
    "e",
    "To ornament armor or metal surfaces by eating away lines with acid.",
    "German etzen via Dutch.",
    "The master armorer began to etch elaborate arabesques into the steel breastplate.",
    "Armourers' Guild Records"
  ],
  [
    "Etheling",
    "/ˈɛðəlɪŋ/",
    "m",
    "An Anglo-Saxon prince or nobleman of royal blood, entitled to wear distinctive embroidered garments.",
    "Old English æþeling.",
    "The etheling wore a tunic heavy with gold braid and amber beads.",
    "Widsith"
  ],
  [
    "Etoile",
    "/eɪˈtwɑːl/",
    "m",
    "In heraldry, a star with six (or sometimes more) wavy or straight points.",
    "French étoile (star).",
    "A shield charged with an etoile of eight points in gold.",
    "Early Heraldic Rolls"
  ],
  [
    "Euclase",
    "/ˈjuːkleɪs/",
    "t",
    "A rare, pale green or blue beryllium silicate mineral occasionally cut as a gemstone for fine Victorian tiaras.",
    "Greek euklasos (easily fractured).",
    "The tiara sparkled with rare euclase crystals set in silver.",
    "Victorian Mineralogy Journal"
  ],
  [
    "Eustachian",
    "/juːˈsteɪʃən/",
    "e",
    "Relating to early anatomical discoveries; occasionally used in Renaissance descriptions of headwear fitting over the ears.",
    "Named after Eustachius, 16th-century anatomist.",
    "The velvet coif was shaped to accommodate the wearer's ears comfortably.",
    "Tudor Medical and Dress Notes"
  ],
  [
    "Ever-during",
    "/ˈɛvər ˈdjʊərɪŋ/",
    "e",
    "Lasting forever, enduring; frequently applied in Elizabethan verse to unblemished steel armor or immortal fabrics.",
    "Middle English everduring.",
    "Clad in ever-during brass that knew no rust.",
    "Edmund Spenser, The Faerie Queene"
  ],
  [
    "Exergue",
    "/ˈɛksɜːrɡ/",
    "t",
    "The small space beneath the main design on a medal, coin, or heraldic badge, used for dates or mottoes.",
    "French exergue, from Greek ex- + ergon.",
    "The date of the tournament victory was stamped clearly in the exergue of the silver medal.",
    "Numismatic History of Great Britain"
  ],
  [
    "Faldistory",
    "/ˈfɔːldɪstəri/",
    "m",
    "A folding chair or bishop's throne used in medieval ecclesiastical settings.",
    "Late Latin faldistorium, from Old High German faldistuol.",
    "The abbot sat upon his faldistory during the council.",
    "Medal. Hist. Eccles."
  ],
  [
    "Faldfee",
    "/ˈfɔːldfiː/",
    "m",
    "A fee paid by a tenant to a lord for the privilege of folding sheep upon the tenant's land.",
    "Middle English, from fold + fee.",
    "The customary faldfee was rendered at Michaelmas.",
    "Manorial Records of Essex"
  ],
  [
    "Fall",
    "/fɔːl/",
    "e",
    "A type of band, collar, or ruff worn in the 16th and 17th centuries; also a lace neckerchief.",
    "English, from the verb fall, describing hanging folds.",
    "His doublet was adorned with a fine cambric fall.",
    "Shakespearean inventories"
  ],
  [
    "Faldstool",
    "/ˈfɔːldstuːl/",
    "m",
    "A portable folding stool or kneeling desk used by monarchs and prelates.",
    "Old English faldstōl.",
    "The king knelt at the faldstool during the coronation rite.",
    "Anglo-Saxon Chronicle"
  ],
  [
    "Fauchard",
    "/ˈfoʊtʃɑːrd/",
    "m",
    "A medieval polearm featuring a curved, single-edged blade mounted on a long shaft.",
    "Old French fauchard, from fauc (scythe).",
    "The infantrymen advanced with pikes and fauchards lowered.",
    "Froissart's Chronicles"
  ],
  [
    "Farding",
    "/ˈfɑːrdɪŋ/",
    "m",
    "A fourth part; historically used to denote a quadrant of land or a quarter of a hide, sometimes associated with tax assessments.",
    "Old English feorthing.",
    "A farding of land yielded sufficient corn for the household.",
    "Domesday Book"
  ],
  [
    "Fascia",
    "/ˈfæʃə/",
    "t",
    "A decorative band, ribbon, or sash worn across the torso or around the waist in Victorian attire.",
    "Latin fascia (band, bandage).",
    "A silk fascia was draped elegantly over her crinoline.",
    "Godey's Lady's Book"
  ],
  [
    "Feaze",
    "/fiːz/",
    "e",
    "To untwist, fray, or unravel the ends of a rope or woven textile.",
    "Middle English fesen, from Old Old English fēsian (to drive away).",
    "Take care lest the hempen cable begin to feaze at the hawsehole.",
    "Mariner's Mirror"
  ],
  [
    "Februation",
    "/ˌfɛbruˈeɪʃən/",
    "e",
    "An ancient or archaic term for ritual purification, occasionally adopted in Renaissance court masques involving symbolic garments.",
    "Latin februatio.",
    "The symbolic februation preceded the masque of purity.",
    "Ben Jonson, Masques"
  ],
  [
    "Felting",
    "/ˈfɛltɪŋ/",
    "m",
    "The process of matting and pressing wool fibers together to create a dense, water-resistant textile.",
    "Germanic origin, related to felt.",
    "The felting of the beaver fur required hours of boiling and beating.",
    "Guild Ordinances of London"
  ],
  [
    "Ferrrule",
    "/ˈfɛruːl/",
    "m",
    "A metal cap or ring fitted to the end of a staff, scabbard, or weapon shaft to prevent splitting.",
    "Old French virole, influenced by Latin ferrum (iron).",
    "The ash spear was reinforced with an iron ferrule.",
    "Armoury Inventories of the Tower"
  ],
  [
    "Fermail",
    "/ˈfɜːrmeɪl/",
    "m",
    "A clasp, brooch, or buckle used to fasten a mantle, cloak, or collar.",
    "Old French fermeail.",
    "His heavy velvet cloak was secured with a gold fermail set with rubies.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Fesse",
    "/fɛs/",
    "m",
    "A heraldic ordinary consisting of a horizontal band occupying the middle third of the shield.",
    "Old French fesse (band, girdle), from Latin fascia.",
    "The coat of arms bore a gules fesse upon a field of argent.",
    "Heraldic Roll of Arms"
  ],
  [
    "Fesswise",
    "/ˈfɛswaɪz/",
    "m",
    "In heraldry, disposed horizontally across the shield, in the manner of a fesse.",
    "Fesse + -wise.",
    "Three fleurs-de-lis were arranged fesswise across the chief.",
    "Treatise on Heraldry"
  ],
  [
    "Fettled",
    "/ˈfɛtəld/",
    "e",
    "Prepared, equipped, trimmed, or put in order; dressed or harnessed for battle or court.",
    "Middle English fetlen (to make ready).",
    "He fettled himself in full harness for the tournament.",
    "Le Morte d'Arthur"
  ],
  [
    "Fibula",
    "/ˈfɪbjʊlə/",
    "m",
    "An ancient or medieval clasp, brooch, or pin used to fasten garments like tunics and cloaks.",
    "Latin fibula (brooch, buckle).",
    "The Saxon warrior's cloak was pinned with a bronze fibula.",
    "Archaeologia Britannica"
  ],
  [
    "Fichu",
    "/ˈfiːʃuː/",
    "t",
    "A small triangular kerchief worn by women in the 18th and 19th centuries to cover the neck and shoulders.",
    "French fichu.",
    "She wore a lace fichu tucked into the low neckline of her gown.",
    "Jane Austen, Letters"
  ],
  [
    "Fier-bœuf",
    "/fjɛərˈbʌf/",
    "m",
    "A rare medieval term for tough, thick ox-hide leather used in the manufacture of hardened armor and shields.",
    "Old French fier (proud/stiff) + bœuf (ox).",
    "The brigandine was reinforced with plates sewn between layers of fier-bœuf.",
    "Medieval Ordinance of arms"
  ],
  [
    "Filipendula",
    "/ˌfɪlɪˈpɛndjʊlə/",
    "t",
    "An ornate Victorian decorative pendant or hanging tassel attached to a sash or chatelaine.",
    "Latin filipendula (hanging by a thread).",
    "A golden filipendula swung from her velvet chatelaine.",
    "The Lady's Cabinet"
  ],
  [
    "Fillet",
    "/ˈfɪlɪt/",
    "m",
    "A narrow band or ribbon worn around the head or hair; also a flat molding in architecture and armor design.",
    "Old French filet, diminutive of fil (thread).",
    "The maiden wore a silver fillet across her golden hair.",
    "Chaucer, The Knight's Tale"
  ],
  [
    "Fimbriated",
    "/ˈfɪmbriˌeɪtɪd/",
    "m",
    "In heraldry, edged or bordered with a narrow strip of contrasting tincture.",
    "Latin fimbriatus (fringed).",
    "The cross was sable, fimbriated of the first.",
    "Complete Peerage"
  ],
  [
    "Finity",
    "/ˈfɪnɪti/",
    "e",
    "An archaic term for boundary or border; sometimes used in tailoring to denote the finished edge of a hem.",
    "Latin finitas.",
    "The finity of the doublet sleeve was trimmed with gold braid.",
    "Tudor Tailor's Lexicon"
  ],
  [
    "Flacon",
    "/fləˈkɒn/",
    "t",
    "A small, elegant bottle or flask for perfume, frequently hung from a Victorian chatelaine.",
    "Old French flacon.",
    "She drew a crystal flacon of lavender water from her reticule.",
    "Brontë, Villette"
  ],
  [
    "Flanch",
    "/flæntʃ/",
    "m",
    "A heraldic ordinary curved inward, resembling a flanque, placed on either side of the shield.",
    "Old French flanche.",
    "Two flanches of azure adorned the argent shield.",
    "Heraldry Dictionary"
  ],
  [
    "Flanque",
    "/flæŋk/",
    "m",
    "An archaic heraldic division, similar to a flanch, arching from the base to the chief.",
    "French flanc (side).",
    "The coat of arms displayed two ermine flanques.",
    "Gerrard's Display of Heraldrie"
  ],
  [
    "Flax",
    "/flæks/",
    "m",
    "The pale, fibrous plant material spun into yarn to produce linen fabric.",
    "Old English fleax.",
    "The peasant women spun the raw flax into fine white thread.",
    "Piers Plowman"
  ],
  [
    "Flicker",
    "/ˈflɪkər/",
    "e",
    "An archaic term for a light, fluttering ribbon or streamer attached to a hat or sleeve.",
    "Old English flicerian.",
    "His cap was adorned with a scarlet flicker.",
    "Dekker, The Shoemaker's Holiday"
  ],
  [
    "Flock",
    "/flɒk/",
    "m",
    "Coarse tufts of wool or cotton used for stuffing padded doublets, cushions, and armor linings.",
    "Old English flocc.",
    "The doublet was stuffed with wool flock to give it a noble swell.",
    "Household Ordinances of Edward IV"
  ],
  [
    "Florence",
    "/ˈflɒrəns/",
    "m",
    "A rich kind of cloth or silk imported from Italy during the medieval and Tudor periods.",
    "From the city of Florence.",
    "A gown of crimson florence lined with ermine.",
    "Tudor Wardrobe Accounts"
  ],
  [
    "Flotant",
    "/ˈfləʊtənt/",
    "m",
    "In heraldry, depicted as flying or floating horizontally in the air, as a banner or ribbon.",
    "French flotant (floating).",
    "A pennon flotant of azure and gold was borne before the vanguard.",
    "Leigh's Accedens of Armory"
  ],
  [
    "Flounce",
    "/flaʊns/",
    "t",
    "A wide strip of fabric gathered and sewn by one edge to a skirt or sleeve for ornamentation.",
    "Origin uncertain, possibly related to flounce (to plunge/jerk).",
    "The silk dress featured three tiered flounces at the hem.",
    "The Art of Dressmaking"
  ],
  [
    "Fluked",
    "/fluːkt/",
    "m",
    "Equipped with flukes, as applied to the barbed points of medieval hunting spears or anchors.",
    "Middle English fluk.",
    "The boar spear was heavily fluked to prevent withdrawal.",
    "Master of Game"
  ],
  [
    "Foliation",
    "/ˌfoʊliˈeɪʃən/",
    "m",
    "An architectural or decorative pattern resembling leaf shapes, frequently used in the borders of illuminated manuscripts and embroidery.",
    "Latin folium (leaf).",
    "The border of the altar cloth was rich in gold foliation.",
    "Ecclesiastical Embroidery Records"
  ],
  [
    "Fond",
    "/fɒnd/",
    "m",
    "An archaic word meaning foolish or vain, also used to describe overly extravagant or gaudy attire.",
    "Middle English fonled (becomish foolish).",
    "Such fond apparel ill becomes a sober merchant.",
    "More, Utopia"
  ],
  [
    "Forelock",
    "/ˈfɔːrlɒk/",
    "m",
    "A lock of hair growing on the forehead; also a linchpin or securing wedge used in plate armor joints.",
    "Old English foreloc.",
    "The helm was secured with an iron forelock.",
    "Armorer's Workshop Log"
  ],
  [
    "Forfend",
    "/fɔːrˈfɛnd/",
    "e",
    "To forbid, ward off, protect, or prohibit; used in laws regulating prohibited fabrics.",
    "Middle English forfenden.",
    "The statute doth forfend the wearing of velvet by commoners.",
    "Elizabethan Sumptuary Decrees"
  ],
  [
    "Fraise",
    "/frɛz/",
    "e",
    "A wide, pleated collar or ruff worn in the 16th century, similar to a small cartwheel ruff.",
    "French fraise.",
    "He adjusted his starched white fraise before entering the presence chamber.",
    "Memoirs of the French Court"
  ],
  [
    "Frise",
    "/friːz/",
    "e",
    "A coarse, heavy woolen cloth with a rough, napped surface, manufactured in Flanders and Ireland.",
    "French frise (curled/napped).",
    "His winter cloak was made of sturdy Irish frise.",
    "Shakespeare, The Merry Wives of Windsor"
  ],
  [
    "Gamba",
    "/ˈɡæmbə/",
    "m",
    "A piece of medieval body armor, especially a leg guard or padded greave worn beneath plate armor.",
    "Italian/Medieval Latin, from late Latin gamba meaning leg.",
    "He buckled his iron shoes and tied his gambas tight against the cold mail.",
    "Chivalric Armory Records, 14th Century"
  ],
  [
    "Gambroon",
    "/ɡæmˈbruːn/",
    "t",
    "A lightweight twilled fabric made of worsted and cotton, used traditionally for linings and summer trousers.",
    "Etymology uncertain, possibly related to Gamron (Bandar Abbas), a Persian port of trade.",
    "He wore a light summer coat of dark gambroon.",
    "Victorian Drapery and Textile Trade Directory"
  ],
  [
    "Garniture",
    "/ˈɡɑːnɪtʃər/",
    "e",
    "A complete matching set of armor for a knight and his horse, or a suite of decorative matching metallic plates.",
    "Middle French garniture, from garnir (to equip).",
    "The king's tournament garniture was adorned with beaten gold and crimson enamel.",
    "Tudor Royal Armories Inventory"
  ],
  [
    "Garter",
    "/ˈɡɑːrtər/",
    "m",
    "A band worn around the leg to hold up stockings or hose, historically highly ornate and jeweled for nobility.",
    "Old French gartier, from gart (the bend of the knee).",
    "He dropped his silken garter while dancing before the queen.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Gauntlett",
    "/ˈɡɔːntlət/",
    "m",
    "An armored glove protecting the hand and wrist, often articulated with steel plates or made of heavy buckskin.",
    "Old French gauntlete, diminutive of gant (glove).",
    "He threw down his iron gauntlet upon the stone floor to challenge the traitor.",
    "Historical Romance of Richard Coeur de Lion"
  ],
  [
    "Geat",
    "/ɡiːt/",
    "m",
    "An ancient term for a mantle or outer wrap, sometimes associated with tribal attire in northern Europe.",
    "Old English gēatas, related to early Germanic dress terms.",
    "He wrapped his heavy woolen geat tightly against the northern gale.",
    "Anglo-Saxon Poetic Records"
  ],
  [
    "Gelding",
    "/ˈɡɛldɪŋ/",
    "t",
    "In heraldry and textile descriptions, sometimes used to denote a specific cut of saddle cloth or horse furniture.",
    "Old Norse geldr (barren, castrated).",
    "The harness and gelding trappings were fashioned of stamped leather.",
    "Victorian Equestrian Catalogue"
  ],
  [
    "Gemmew",
    "/ˈdʒɛmjuː/",
    "e",
    "A double ring or linked ring, often used as a token of betrothal or incorporated into ornamental dress fasteners.",
    "Old French gemel (twin), from Latin gemellus.",
    "She fastened her bodice with a golden gemmew.",
    "Elizabethan Court Inventories"
  ],
  [
    "Genouillere",
    "/ʒəˈnuːlɪər/",
    "m",
    "A piece of plate armor protecting the knee, often strapped over the gambeson or mail chausses.",
    "French, from genou (knee).",
    "The knight adjusted his steel genouillere before mounting his steed.",
    "Medieval Effigies and Monumental Brasses"
  ],
  [
    "Giacco",
    "/ˈdʒɑːkoʊ/",
    "m",
    "An Italian-style light mail shirt or jacket worn beneath heavy armor or as light combat dress.",
    "Italian giaco, from Arabic jāmakiyya or Persian.",
    "He wore a tight-fitting giacco beneath his velvet doublet.",
    "Italian Merchant Contracts, 15th Century"
  ],
  [
    "Gibbe",
    "/dʒɪb/",
    "e",
    "An old term for a ragged, old cloak or cape.",
    "Origin obscure, possibly related to gibcat or regional slang.",
    "The beggar shivered beneath his tattered gibbe.",
    "Thomas Harman, Caveat for Common Cursetors"
  ],
  [
    "Gigliated",
    "/ˈdʒɪliˌeɪtɪd/",
    "m",
    "In heraldry, ending in lilies or fleur-de-lis, typically describing crosses or scrollwork.",
    "Italian giglio (lily) + -ated.",
    "A shield bearing a cross gigliated in gold upon a field of azure.",
    "Treatise on Heraldry and Blazonry"
  ],
  [
    "Gill",
    "/dʒɪl/",
    "t",
    "A kind of festive woman's hood or headdress worn in rural districts during the early Victorian era.",
    "Variant of Gillian or Jill, used as a generic term for a cap.",
    "She donned her red woollen gill to brave the morning market.",
    "County Folklore and Costume Notes"
  ],
  [
    "Gimpe",
    "/ɡɪmp/",
    "t",
    "A narrow ornamental cord or braid made of silk, wool, or wire, used to trim upholstery, hats, and garments.",
    "French gimpe, of Germanic origin.",
    "The velvet dress was bordered with a fine gold gimpe.",
    "The Lady's Magazine, 1845"
  ],
  [
    "Gipon",
    "/ˈdʒɪpən/",
    "m",
    "A close-fitting padded doublet or tunic worn by men in the 14th century, often heraldically decorated.",
    "Old French jupon.",
    "He bore his family arms emblazoned upon his white silk gipon.",
    "Geoffrey Chaucer, The Canterbury Tales"
  ],
  [
    "Gire",
    "/ɡaɪər/",
    "e",
    "An obsolete term for a turn, curve, or flounce in the hem of a gown or skirt.",
    "Latin gyrus (circle).",
    "The heavy silk gown swept the floor in a wide gire.",
    "Elizabethan Tailor's Guild Records"
  ],
  [
    "Gisarme",
    "/ɡɪˈzɑːrm/",
    "m",
    "A medieval polearm featuring a blade with a hook on the back, requiring specialized armor to defend against.",
    "Old French gisarme.",
    "The foot soldier struck the knight's helm with a heavy gisarme.",
    "Song of Roland"
  ],
  [
    "Glace",
    "/ɡlæs/",
    "t",
    "A glossy, lustrous finish applied to silk or kid leather used for gloves and fine evening slippers.",
    "French glacé (iced, glossy).",
    "She wore pristine white glace gloves to the winter ball.",
    "Victorian Fashion Etiquette Manual"
  ],
  [
    "Glazing",
    "/ˈɡleɪzɪŋ/",
    "t",
    "A stiffening or finishing process applied to cotton and linen textiles to impart high luster.",
    "From glaze.",
    "The chintz possessed a brilliant glazing that repelled dust.",
    "Textile Manufacturer's Companion"
  ],
  [
    "Glee-man",
    "/ˈɡliːmæn/",
    "m",
    "An Anglo-Saxon professional entertainer or minstrel, typically clad in distinctive colorful tunics.",
    "Old English glīgmann.",
    "The gleeman sang tales of ancient kings in the great hall.",
    "Exeter Book"
  ],
  [
    "Glomming",
    "/ˈɡlɒmɪŋ/",
    "e",
    "An archaic term for a sullen look or gathering gloom, sometimes referring to dark-colored mourning veils.",
    "Scots and northern English dialect origin.",
    "She wore a deep black glomming over her face during the funeral procession.",
    "Northern Border Ballads"
  ],
  [
    "Gloss",
    "/ɡlɒs/",
    "t",
    "A specialized lustrous sheen given to heavy silk satins and damasks during the finishing loom process.",
    "Middle English glose.",
    "The rich brocade caught the candlelight with a metallic gloss.",
    "Victorian Weaver's Handbook"
  ],
  [
    "Glove",
    "/ɡlʌv/",
    "m",
    "A covering for the hand having separate sheaths for each finger, a symbol of status and chivalry.",
    "Old English gl��f.",
    "He presented his lady with a pair of scented leather gloves.",
    "Paston Letters"
  ],
  [
    "Gobelin",
    "/ˈɡɒbəlɪn/",
    "t",
    "A famous type of tapestry woven in France, known for pictorial richness and used in grand estate decor.",
    "Named after the Gobelin family of dyers.",
    "The salon was draped with magnificent green and gold Gobelin wall hangings.",
    "Victorian Interior Decoration Guide"
  ],
  [
    "Godet",
    "/ɡoʊˈdeɪ/",
    "t",
    "A triangular piece of fabric inserted into a garment, such as a skirt, to add fullness and flare.",
    "French godet.",
    "The evening skirt featured several pleated silk godets.",
    "The Tailor and Cutter"
  ],
  [
    "Golch",
    "/ɡɒltʃ/",
    "m",
    "An old Celtic-derived term for a stained or muddy cloak hem.",
    "Welsh origin related to washing or soiling.",
    "His woolen mantle was spoiled by a deep golch of red clay.",
    "Border Chronicle"
  ],
  [
    "Gold-beater's skin",
    "/ˈɡoʊldˌbiːtərz skɪn/",
    "t",
    "A delicate membrane prepared from ox cecum, used historically in tailoring to protect gold thread and in medicine.",
    "Compound of gold-beater + skin.",
    "The artisan used gold-beater's skin to handle the gossamer metallic threads.",
    "Encyclopædia Metropolitana"
  ],
  [
    "Golpes",
    "/ˈɡɒlpiːz/",
    "m",
    "In heraldry, roundels of a purple tincture, resembling small balls or pellets.",
    "Old French golfe, from Greek kolpos.",
    "A shield charged with three golpes on a field of silver.",
    "Early Rolls of Arms"
  ],
  [
    "Gonfalon",
    "/ˈɡɒnfəlɒn/",
    "m",
    "A banner or flag, often pointed or swallow-tailed, hung from a crossbar and carried in medieval processions.",
    "Italian gonfalone.",
    "The guild marched behind their silk gonfalon depicting the patron saint.",
    "Chronicles of the Italian Republics"
  ],
  [
    "Gonfanon",
    "/ˈɡɒnfənɒn/",
    "m",
    "An early medieval battle standard or streamer attached to the top of a lance.",
    "Old French gonfanon, of Germanic origin.",
    "The knight lowered his lance, fluttering with the red gonfanon.",
    "The Song of Roland"
  ],
  [
    "Gossamer",
    "/ˈɡɒsəmər/",
    "m",
    "An extremely light, thin, and delicate variety of gauze or silk fabric.",
    "Middle English gossomer (literally goose-summer, referring to cobwebs).",
    "Her veil was spun of white gossamer that floated in the breeze.",
    "Geoffrey Chaucer, The House of Fame"
  ],
  [
    "Gown",
    "/ɡaʊn/",
    "m",
    "A long, loose outer garment worn by both men and women of various social ranks in medieval and Tudor times.",
    "Middle English goune, from Medieval Latin gunna.",
    "The magistrate wore a fur-lined scarlet gown to the court session.",
    "London Civic Ordinances"
  ],
  [
    "Graded",
    "/ˈɡreɪdɪd/",
    "t",
    "In textile manufacturing, referring to garments or patterns cut in successive standard sizes.",
    "From grade.",
    "The tailor carefully graded the pattern for the new riding habit.",
    "Tailoring and Cutting Gazette"
  ],
  [
    "Grail",
    "/ɡreɪl/",
    "m",
    "An archaic term for small particles, gravel, or flecks of gold embedded in rich brocade fabrics.",
    "Old French grael, from Latin gradalis.",
    "The cloth was flecked with bright gold grail that shimmered in the torchlight.",
    "Middle English Romances"
  ],
  [
    "Grand-guard",
    "/ˈɡrænd ɡɑːrd/",
    "e",
    "An extra piece of plate armor bolted to the right side of a jousting breastplate to deflect the opponent's lance.",
    "English grand + guard.",
    "He bolted his heavy steel grand-guard in preparation for the tournament.",
    "Tilting Ordinances of Henry VIII"
  ],
  [
    "Grappound",
    "/ˈɡræpaʊnd/",
    "m",
    "A grappling iron or hook used in siege warfare, sometimes attached to specialized chainmail defenses.",
    "Middle English.",
    "The defenders hurled heavy stones and a grappound from the ramparts.",
    "Warkworth's Chronicle"
  ],
  [
    "Gridelin",
    "/ˈɡrɪdəlɪn/",
    "e",
    "A grayish-violet or pale purple color, popular for fine Elizabethan silk ribbons and court dress.",
    "French gris-de-lin (flax-gray).",
    "She wore a bodice trimmed with ribbons of pale gridelin.",
    "Elizabethan Wardrobe Accounts"
  ],
  [
    "Gris",
    "/ɡriː/",
    "m",
    "A costly medieval fur, believed to be gray squirrel, used for lining royal robes and hoods.",
    "Old French gris (gray).",
    "His winter mantle was richly trimmed with miniver and gris.",
    "Chaucer, The Book of the Duchess"
  ],
  [
    "Grosgrain",
    "/ˈɡroʊɡreɪn/",
    "t",
    "A strong, close-woven silk or rayon fabric with prominent transverse ribs.",
    "French gros grain (coarse grain/texture).",
    "Her bonnet was tied with a sturdy ribbon of black grosgrain.",
    "Victorian Millinery Guide"
  ],
  [
    "Harnis",
    "/ˈhɑːrnɪs/",
    "m",
    "A full suit of armor or defensive gear for a man or horse.",
    "Old French harke, harness.",
    "Gird on your harness, good knights, for the battle draws near.",
    "Le Morte d'Arthur"
  ],
  [
    "Headrail",
    "/ˈhɛdreɪl/",
    "m",
    "A woman's veil, wimple, or head-covering worn in Anglo-Saxon and medieval times.",
    "Old English heafodrægel.",
    "She drew her white linen headrail closely about her face.",
    "Anglo-Saxon Chronicle"
  ],
  [
    "Houppelande",
    "/ˈhuːpəlænd/",
    "m",
    "A bulky, heavy-gowned outer garment with wide, dagged sleeves worn in the 14th and 15th centuries.",
    "Middle French houppelande.",
    "A stately gentleman clad in a rich crimson velvet houppelande.",
    "Froissart's Chronicles"
  ],
  [
    "Huke",
    "/hjuːk/",
    "m",
    "A short mantle or cloak, hooded or unhooded, worn in the 15th and 16th centuries.",
    "Middle Dutch huke, cloak.",
    "Wrapped in a dark woolen huke to brave the midnight mist.",
    "Inventory of Henry VIII"
  ],
  [
    "Hachis",
    "/ˈhætʃɪs/",
    "e",
    "A decorative slashing or ornament on Elizabethan garments.",
    "French hacher, to chop or hack.",
    "The doublet was adorned with fine hachis across the breast.",
    "Elizabethan Sumptuary Records"
  ],
  [
    "Halsfanger",
    "/ˈhɑːlsˌfæŋər/",
    "m",
    "An archaic neck-defense piece or gorget of leather or mail.",
    "Old English healsfengan.",
    "Fastening his halsfanger securely beneath his chin.",
    "Beowulf Glossary"
  ],
  [
    "Hatchelt",
    "/ˈhætʃəlt/",
    "e",
    "A kind of fine linen fabric or kerchief.",
    "Diminutive of hatch, or local trade name.",
    "She wore a neck-cloth of fine white hatchelt.",
    "Tudor Household Accounts"
  ],
  [
    "Hault",
    "/hɔːlt/",
    "m",
    "High or lofty; used in heraldic descriptions of charges.",
    "Old French haut.",
    "A lion hault, rampant upon the field of gold.",
    "Treatise on Heraldry"
  ],
  [
    "Hedge-text",
    "/ˈhɛdʒtɛkst/",
    "e",
    "Rough, coarse, or poorly woven textile of domestic manufacture.",
    "English compound of hedge and text (fabric).",
    "Dressed not in silks, but in a sturdy hedge-text.",
    "Shakespeare, Love's Labour's Lost"
  ],
  [
    "Hell-cat",
    "/ˈhɛlkæt/",
    "t",
    "An obsolete term for a spiked iron caltrop or foot-trap used in medieval warfare.",
    "English folk etymology.",
    "Scattering iron hell-cats across the drawbridge approach.",
    "Victorian Antiquary Journal"
  ],
  [
    "Hempen",
    "/ˈhɛmpən/",
    "e",
    "Made of hemp; coarse cloth woven from hemp fibers.",
    "Old English henpen.",
    "A coarse hempen smock worn by the peasantry.",
    "The Taming of the Shrew"
  ],
  [
    "Herse",
    "/hɜːrs/",
    "m",
    "A portcullis or a framework of spikes resembling a harrow used in gate defense.",
    "Old French herse, harrow.",
    "Drop the iron herse before the enemy breaches the barbican.",
    "Chivalric Romance"
  ],
  [
    "Heraltic",
    "/həˈræltɪk/",
    "e",
    "Relating to heraldry or armorial bearings.",
    "Middle French herault.",
    "The heraltic beasts embroidered upon his tabard.",
    "Spenser, The Faerie Queene"
  ],
  [
    "Heaume",
    "/hoʊm/",
    "m",
    "A great helm; a heavy cylindrical or conical helmet worn by medieval knights.",
    "Old French helme.",
    "He lowered his great heaume with its nodding plume.",
    "Song of Roland"
  ],
  [
    "Hinder-parts",
    "/ˈhɪndər pɑːrts/",
    "m",
    "The rear armor plates protecting the back of a knight.",
    "Middle English.",
    "Securing the buckles of his hinder-parts before mounting.",
    "Tournament Ordinances of Edward IV"
  ],
  [
    "Hillo",
    "/ˈhɪloʊ/",
    "e",
    "A cry or falconer's call used during hunting attire preparations.",
    "Imitative origin.",
    "With a merry hillo, they set forth with hawk and hound.",
    "Shakespeare, Hamlet"
  ],
  [
    "Hirez",
    "/ˈhaɪrɛz/",
    "m",
    "An archaic term for fleece or hairy unspun wool.",
    "Old English hǣr, hair.",
    "Sacks filled with unwashed hirez for spinning.",
    "Manor Rolls of Essex"
  ],
  [
    "Hoarding",
    "/ˈhɔːrdɪŋ/",
    "m",
    "A temporary wooden defensive gallery built on top of castle walls during a siege.",
    "Old French hourd.",
    "Archers stationed safely along the wooden hoarding.",
    "Chronicles of the Crusades"
  ],
  [
    "Hogen",
    "/ˈhoʊɡən/",
    "m",
    "A medieval Flemish fabric or coarse wool cloth.",
    "Place name (Hogue) or Dutch trade term.",
    "Robes fashioned from sturdy green hogen.",
    "Medieval Customs Rolls"
  ],
  [
    "Hognell",
    "/ˈhɒɡnɛl/",
    "m",
    "A type of embroidered border or trimming on ecclesiastical garments.",
    "Unknown medieval origin.",
    "Vestments edged with gold hognell.",
    "Lincoln Cathedral Inventory"
  ],
  [
    "Hollandaise",
    "/ˈhɒləndeɪz/",
    "t",
    "A fine linen fabric originally imported from Holland, popular for Victorian undergarments.",
    "French, of Holland.",
    "Petticoats stitched from the finest hollandaise.",
    "Victorian Lady's Magazine"
  ],
  [
    "Hollow-iron",
    "/ˈhɒloʊ ˈaɪərn/",
    "e",
    "Early term for tubular steel used in plate armor construction.",
    "English compound.",
    "Greaves forged from light hollow-iron for speed.",
    "Armorer's Guild Records"
  ],
  [
    "Homi",
    "/ˈhoʊmi/",
    "m",
    "An Eastern European or Levantine silk textile brought back by Crusaders.",
    "Levantine trade term.",
    "A tunic lined with soft homi silk.",
    "Crusader Estate Inventories"
  ],
  [
    "Hond-seam",
    "/ˈhɒndsiːm/",
    "m",
    "A hand-sewn seam on medieval garments.",
    "Old English hand + seam.",
    "Every hond-seam reinforced with stout linen thread.",
    "Tailor's Guild Book of London"
  ],
  [
    "Hooded-mail",
    "/ˈhʊdɪd meɪl/",
    "m",
    "An integrated mail coif attached directly to a hauberk.",
    "English compound.",
    "He pulled his hooded-mail tight over his padded cap.",
    "Battle of Hastings Accounts"
  ],
  [
    "Hop-sacking",
    "/ˈhɒpˌsækɪŋ/",
    "t",
    "A loose, rough-textured basket-weave fabric used for heavy Victorian summer coats.",
    "English compound from hop sacks.",
    "A tailored travelling coat of grey hop-sacking.",
    "Victorian Tailor and Cutter"
  ],
  [
    "Horn-button",
    "/ˈhɔːrn ˈbʌtən/",
    "e",
    "A fastener carved from animal horn, common on Tudor jerkins.",
    "English compound.",
    "A leather doublet fastened with polished horn-buttons.",
    "Elizabethan Parish Records"
  ],
  [
    "Horse-block",
    "/ˈhɔːrsblɒk/",
    "t",
    "A mounting block, requiring specialized riding skirts for women.",
    "English compound.",
    "Stepping gracefully from the horse-block into the saddle.",
    "Jane Austen, Emma"
  ],
  [
    "Hose-clout",
    "/ˈhoʊz klaʊt/",
    "e",
    "A patch or reinforcing piece for hose or stockings.",
    "English compound.",
    "Repaired with a woolen hose-clout at the heel.",
    "Household Accounts of Sir Thomas Leigh"
  ],
  [
    "Houdan",
    "/ˈhuːdən/",
    "t",
    "A patterned wool or silk fabric of French origin used in Victorian dressmaking.",
    "French town of Houdan.",
    "A walking dress fashioned from fashionable houdan silk.",
    "The Queen, Lady's Newspaper"
  ],
  [
    "Housewifely",
    "/ˈhaʊswɪfli/",
    "e",
    "Pertaining to domestic textile arts such as spinning and sewing.",
    "Old English hūswīflic.",
    "Engaged in housewifely labors at her spinning-wheel.",
    "Shakespeare, Othello"
  ],
  [
    "Houstment",
    "/ˈhuːstmənt/",
    "m",
    "An archaic term for military equipment or camp furnishings.",
    "Old French houtement.",
    "Transporting the royal tents and houstment by wagon.",
    "Exchequer Rolls"
  ],
  [
    "Howve",
    "/huːv/",
    "m",
    "A close-fitting cap or coif worn under a helmet or hood.",
    "Old English hūfe.",
    "A linen howve worn beneath the iron helm to ease the chaffing.",
    "Piers Plowman"
  ],
  [
    "Hubub",
    "/ˈhʌbʌb/",
    "e",
    "A tumultuous noise, or an old term for a wild cloak or mantle.",
    "Irish ub ub.",
    "Wrapped in his Irish hubub against the mountain gale.",
    "State Papers Relating to Ireland"
  ],
  [
    "Humeral",
    "/ˈhjuːmərəl/",
    "m",
    "A rectangular piece of cloth worn over the shoulders by priests during Mass (humeral veil).",
    "Latin humerus, shoulder.",
    "Bearing the monstrance covered by the silk humeral.",
    "Medieval Liturgical Ordinances"
  ],
  [
    "Hurt",
    "/hɜːrt/",
    "m",
    "In heraldry, a blue roundel representing a pellet or bruised fruit.",
    "Old French hurt, a bruise.",
    "A shield of silver charged with three hurtes.",
    "Heraldic Roll of Arms"
  ],
  [
    "Hutch",
    "/hʌtʃ/",
    "m",
    "A chest or coffer used for storing valuable textiles and furs.",
    "Old French huche.",
    "Lining the oak hutch with camphor to protect the sables.",
    "Medieval Household Inventory"
  ],
  [
    "Hyke",
    "/haɪk/",
    "m",
    "A loose woolen blanket-like outer garment or plaid.",
    "Arabic haik.",
    "Travelers draped in traditional white woolen hykes.",
    "Travels of Sir John Mandeville"
  ],
  [
    "Imbrasure",
    "/ɪmˈbreɪʒər/",
    "e",
    "An ornamental opening or indentation in a garment's hem, cuff, or collar, fashionable in Tudor dress.",
    "From Old French embraser, via architectural terminology applied to fashion.",
    "His doublet was cut with fine imbrasures along the hem, revealing the crimson sarcenet beneath.",
    "Tudor Wardrobe Accounts"
  ],
  [
    "Imperceptible",
    "/ɪmpərˈsɛptɪbəl/",
    "t",
    "A very fine, delicate weave of silk or muslin, barely perceptible in texture.",
    "Latin imperceptibilis.",
    "She wore a veil of sheer imperceptible, floating about her shoulders like a summer mist.",
    "Victorian Fashion Gazette"
  ],
  [
    "Impot",
    "/ˈɪmpɒt/",
    "m",
    "A heavy woolen cloak or outer garment worn by peasants and travelers in the medieval period.",
    "Old French impot, from Latin impositus.",
    "He wrapped his rough impot tightly against the biting winter gale.",
    "Middle English Chronicles"
  ],
  [
    "Incased",
    "/ɪnˈkeɪst/",
    "e",
    "Enclosed or fitted tightly within plate armor or a stiffened bodice.",
    "Latin incapsare / Middle English.",
    "Fully incased in steel, the knight mounted his destrier with heavy dignity.",
    "Sir Walter Scott, Ivanhoe"
  ],
  [
    "Incatenation",
    "/ɪnˌkætɪˈneɪʃən/",
    "e",
    "A decorative chain-link pattern used in embroidery or heraldic bordures.",
    "Latin incatenare (to chain).",
    "The mantle bore an intricate incatenation of gold thread along its sweeping border.",
    "College of Arms Records"
  ],
  [
    "Incinct",
    "/ɪnˈsɪŋkt/",
    "t",
    "Girt or bound about; wearing a girdle or belt in classical Revival dress.",
    "Latin incinctus.",
    "Standing statuesque and incinct in her high-waisted muslin gown.",
    "Regency Style Manual"
  ],
  [
    "Indument",
    "/ˈɪndjʊmɛnt/",
    "t",
    "A garment, cloak, or covering of any kind.",
    "Latin indumentum.",
    "His scholarly indument consisted of a worn black robe flecked with dust.",
    "Thomas Carlyle, Sartor Resartus"
  ],
  [
    "Inerm",
    "/ˈɪnɜːrm/",
    "e",
    "In heraldry, an animal depicted without horns, thorns, or stings.",
    "Latin inermis (unarmed).",
    "The shield displayed an inerm lion, stripped of its traditional ferocity.",
    "Treatise on Heraldry"
  ],
  [
    "Inett",
    "/ɪˈnɛt/",
    "m",
    "A small hood or head-covering worn by women in the 14th century.",
    "Old French inette.",
    "She drew her fur-lined inett close to protect her face from the driving rain.",
    "14th Century Household Ordinances"
  ],
  [
    "Infeathered",
    "/ɪnˈfɛðərd/",
    "e",
    "Adorned or trimmed with feathers, particularly on caps or military helms.",
    "English coinage from in- + feather.",
    "His velvet cap was grandly infeathered with the plumes of an egret.",
    "Elizabethan Court Journals"
  ],
  [
    "Infit",
    "/ˈɪnfɪt/",
    "m",
    "A gusset or wedge of cloth inserted into a garment to give breadth or shape.",
    "Old Norse / Middle English.",
    "The tailor added an infit of green silk to ease the tightness of the sleeve.",
    "Medieval Tailor's Companion"
  ],
  [
    "Inflated",
    "/ɪnˈfleɪtɪd/",
    "e",
    "Puffed out sleeves or doublets padded with bombast to achieve the fashionable Elizabethan silhouette.",
    "Latin inflatus.",
    "His inflated trunk-hose caused him to walk with a peculiar, stiff stride.",
    "Shakespeare, Henry V"
  ],
  [
    "Infrangible",
    "/ɪnˈfrændʒɪbəl/",
    "t",
    "Denoting a heavy, unbreakable weave of silk or linen used for durable traveling garments.",
    "Latin infrangibilis.",
    "She packed an infrangible riding habit designed to withstand the roughest terrain.",
    "Victorian Traveler's Guide"
  ],
  [
    "Ingrailed",
    "/ɪnˈɡreɪld/",
    "m",
    "Having a wavy or indented edge; in heraldry, an ordinary edged with small semicircular bite-outs.",
    "Old French engrele.",
    "A cross ingrailed of sable stood bold upon the argent field.",
    "Heraldic Roll of Arms"
  ],
  [
    "Inhabile",
    "/ɪnˈhæbɪl/",
    "e",
    "Unwieldy or cumbersome, typically describing heavy, restrictive armor.",
    "French inhabile, from Latin inhabilis.",
    "The aging knight found the archaic cuirass too inhabile for agile combat.",
    "Military Memoirs of the 16th Century"
  ],
  [
    "Inlace",
    "/ɪnˈleɪs/",
    "m",
    "To bind, lace up, or embellish with cords or ribbon.",
    "Old French enlacer.",
    "She helped inlace the complex corsetry of the court gown.",
    "Chaucer, The Canterbury Tales"
  ],
  [
    "Inlard",
    "/ɪnˈlɑːrd/",
    "m",
    "To embroider or ornament heavily with gold or silver thread, resembling inlaid metal.",
    "Old French enlarder / Latin.",
    "The velvet surcoat was richly inlard with threads of spun gold.",
    "Inventory of Royal Wardrobe"
  ],
  [
    "Inlaw",
    "/ˈɪnlɔː/",
    "m",
    "A legal term in guild statutes regarding the proper sizing and standards of woven cloth.",
    "Old English inlaga.",
    "The draper was fined for selling cloth that fell outside the statutory inlaw.",
    "London Guildhall Records"
  ],
  [
    "Inless",
    "/ˈɪnlɛs/",
    "e",
    "Without trimming, ornamentation, or border; plain cloth.",
    "English in- + less.",
    "He wore an inless black cloak, eschewing the bright pomps of court.",
    "Elizabethan Dramatists"
  ],
  [
    "Inmantle",
    "/ɪnˈmæntəl/",
    "m",
    "To wrap, cloak, or cover as if with a mantle.",
    "English inmantele.",
    "She inmantled herself in heavy fur against the midnight frost.",
    "Middle English Romance"
  ],
  [
    "Inme",
    "/ˈɪnmi/",
    "m",
    "An inner garment or under-tunic worn beneath the heavy chainmail or surcoat.",
    "Old English inn-gemet.",
    "His linen inme kept the iron links from chafing his skin.",
    "Anglo-Saxon Chronicle Notes"
  ],
  [
    "Inmost",
    "/ˈɪnmoʊst/",
    "m",
    "The innermost layer of multi-layered medieval garments.",
    "Old English innmesta.",
    "The inmost tunic was spun from the softest unbleached flax.",
    "Surviving Garment Analysis, London Museum"
  ],
  [
    "Inpelt",
    "/ˈɪnpɛlt/",
    "m",
    "An undergarment made of raw animal skin or dressed fur worn in winter.",
    "Old Norse / Middle English.",
    "She lined her wool gown with a warm hare inpelt.",
    "Northern English Wills"
  ],
  [
    "Inplate",
    "/ɪnˈpleɪt/",
    "m",
    "To reinforce a garment with hidden plates of horn, iron, or hardened leather.",
    "English in- + plate.",
    "The leather jerkin was inplated over the chest for added protection.",
    "Armorers' Guild Ordinances"
  ],
  [
    "Inrail",
    "/ɪnˈreɪl/",
    "m",
    "To furnish a garment or headdress with a decorative rail, frill, or border.",
    "Middle English.",
    "Her linen coif was delicately inrailed with needle-lace.",
    "Ecclesiastical Vestment Inventories"
  ],
  [
    "Inscape",
    "/ˈɪnskeɪp/",
    "t",
    "An obsolete term for the interior lining or inner construction of a tailored coat.",
    "English coinage.",
    "The master tailor inspected the inscape of the wool coat to ensure flawless stitching.",
    "Savile Row Archives"
  ],
  [
    "Inseam",
    "/ˈɪnsiːm/",
    "m",
    "The interior seam of a hose, breeches, or gauntlet finger.",
    "Middle English in- + same.",
    "The knight complained that the inseam of his iron gauntlet pinched his thumb.",
    "Armorer Workshop Ledger"
  ],
  [
    "Inseal",
    "/ɪnˈsiːl/",
    "e",
    "To stamp cloth with a municipal or guild seal certifying its quality and weight.",
    "Middle English ensele.",
    "Every bolt of broadcloth must be duly insealed before sale at market.",
    "Statute of Textiles"
  ],
  [
    "Inseam-lace",
    "/ˈɪnsiːm leɪs/",
    "e",
    "Lace inserted directly into the seam of a doublet or ruff during construction.",
    "English compound.",
    "The collar featured fine inseam-lace peeking from the folded edge.",
    "Elizabethan Tailor Patterns"
  ],
  [
    "Inseam-welt",
    "/ˈɪnsiːm wɛlt/",
    "t",
    "A stiffened ridge sewn into the seam of Victorian corsets or structured riding jackets.",
    "English compound.",
    "The bodice derived its rigidity from multiple whalebone inseam-welts.",
    "The Workwoman's Guide"
  ],
  [
    "Inseel",
    "/ɪnˈsiːl/",
    "m",
    "To sew up, stitch together, or hem the inner margins of a textile.",
    "Old English insyllan.",
    "She sat by the hearth to inseel the borders of the heavy arras.",
    "Household Wardrobe Rolls"
  ],
  [
    "Inseam-guard",
    "/ˈɪnsiːm ɡɑːrd/",
    "m",
    "A strip of leather or padded cloth protecting the inner thigh seams of riding hose.",
    "Middle English compound.",
    "His leather inseam-guards prevented the saddle from wearing through his wool hose.",
    "Equerry Account Books"
  ],
  [
    "Insess",
    "/ɪnˈsɛs/",
    "e",
    "To sit upon or occupy; used in heraldry for a bird perched upon an armorial charge.",
    "Latin insidere.",
    "An eagle insess upon a golden crown formed the crest of the helm.",
    "Heralds' Visitation Records"
  ],
  [
    "Inshield",
    "/ɪnˈshiːld/",
    "m",
    "To protect or cover with a shield; to encase in defensive armor.",
    "Middle English inshielden.",
    "Inshielded in bright steel, he advanced boldly into the lists.",
    "Middle English Metrical Romances"
  ],
  [
    "Insist",
    "/ɪnˈsɪst/",
    "m",
    "The standing or posture of a figure upon a coat of arms.",
    "Latin insistere.",
    "The insist of the griffin on the third quarter denoted vigilance.",
    "Early Heraldic Treatise"
  ],
  [
    "Insole",
    "/ˈɪnsoʊl/",
    "m",
    "The inner layer of a medieval leather shoe or turnshoe.",
    "Middle English.",
    "He slipped a layer of dried moss into his turnshoe insole for warmth.",
    "Archaeological Finds, London"
  ],
  [
    "Insout",
    "/ˈɪnsaʊt/",
    "m",
    "A reversible garment, finished cleanly on both the inside and outside.",
    "Middle English compound.",
    "The wealthy merchant wore an insout cloak of green silk and crimson velvet.",
    "Medieval Wardrobe Accounts"
  ],
  [
    "Instar",
    "/ˈɪnstɑːr/",
    "e",
    "To stud, ornament, or spangle a garment with glittering jewels or metal stars.",
    "Latin instar.",
    "Her court gown was instarred with hundreds of tiny seed pearls.",
    "Elizabethan Court Poetry"
  ],
  [
    "Instich",
    "/ˈɪnstɪtʃ/",
    "m",
    "An interior stitch used in embroidery to anchor thread without showing on the face.",
    "Middle English.",
    "The master embroiderer secured the gold thread with a hidden instich.",
    "Guild of Embroiderers Manual"
  ],
  [
    "Instore",
    "/ɪnˈstɔːr/",
    "m",
    "To supply or furnish with garments, cloth, or armor.",
    "Old French instorer.",
    "The castle armory was well instored with helms, hauberks, and poleaxes.",
    "Exchequer Rolls"
  ],
  [
    "Intenerate",
    "/ɪnˈtɛnəreɪt/",
    "e",
    "To soften stiff leather or heavy cloth by oiling and manipulation during garment making.",
    "Latin intenerare.",
    "The page spent hours trying to intenerate the stiff gauntlet leather.",
    "Armorer's Workshop Notes"
  ],
  [
    "Interlace",
    "/ˌɪntərˈleɪs/",
    "m",
    "To cross threads, ribbons, or mail links in a complex crisscross pattern.",
    "Old French entrelacier.",
    "The Celtic knotwork was expertly interlaced along the border of the tunic.",
    "Book of Kells Commentary"
  ],
  [
    "Interknit",
    "/ˌɪntərˈnɪt/",
    "t",
    "To knit closely together; an early term for machine-woven hosiery.",
    "English inter- + knit.",
    "His woolen stockings were finely interknit to prevent fraying.",
    "Victorian Textile Patents"
  ],
  [
    "Invected",
    "/ɪnˈvɛktɪd/",
    "m",
    "In heraldry, having a border composed of small convex curves or bumps (the inverse of ingrailed).",
    "Latin invectus.",
    "The saltire was invected of azure upon a field of gold.",
    "Historic Heraldry Manual"
  ],
  [
    "Inweave",
    "/ɪnˈwiːv/",
    "m",
    "To weave patterns, metallic threads, or mottoes directly into the fabric matrix.",
    "Old English inwiefan.",
    "Her initials were delicately inweaved into the damask table linen.",
    "Medieval Household Inventory"
  ],
  [
    "Jack",
    "/dʒæk/",
    "m",
    "A padded or quilted defensive tunic, often reinforced with metal plates or horn sewn between layers of fabric, worn by foot soldiers and archers.",
    "Middle English, from Old French jaque, from Spanish xaqueta",
    "He was armed in a jack of leather and a steel cap.",
    "Chronicles of Froissart"
  ],
  [
    "Jack-an-apes",
    "/ˌdʒæk ən ˈeɪps/",
    "e",
    "A fancy, pretentious, or strutting fellow, often referring to one who wears extravagant, ape-like or ridiculous fashions.",
    "Middle English, originally referring to a pet monkey named Jack, later applied to fops",
    "To see this silken jack-an-apes strut about the court in borrowed plumes.",
    "Ben Jonson, The Alchemist"
  ],
  [
    "Jackanape",
    "/ˈdʒækəˌneɪp/",
    "e",
    "A term for a showy, flashy doublet or garment, or a person wearing excessively ornate and undignified finery.",
    "Variant of jack-an-apes",
    "He cuts such a figure in his new jackanape doublet.",
    "Thomas Dekker, The Gull's Hornbook"
  ],
  [
    "Jacket",
    "/ˈdʒækɪt/",
    "m",
    "A short, close-fitting upper garment for men, smaller and lighter than a tunic, often richly embroidered.",
    "Old French jaquette, diminutive of jaque",
    "He wore a jacket of crimson velvet laced with silver cord.",
    "Chaucer, The Canterbury Tales"
  ],
  [
    "Jack-of-metais",
    "/ˌdʒæk ʌv məˈteɪ/",
    "m",
    "A coat of plates or brigandine made with small metal plates riveted inside a canvas or leather doublet.",
    "Middle English and Anglo-Norman compound",
    "The men-at-arms donned their jacks-of-metais before sallying forth.",
    "Rolls of Parliament"
  ],
  [
    "Jacinth",
    "/ˈdʒeɪsɪnθ/",
    "m",
    "A yellowish-orange or red gemstone, highly prized in medieval ecclesiastical vestments and crown jewels.",
    "Middle English iacinctus, via Latin from Greek hyakinthos",
    "The cope was embroidered with pearls and jacinth stones.",
    "Inventory of the Exchequer"
  ],
  [
    "Jaconet",
    "/ˈdʒækəˌnɛt/",
    "t",
    "A lightweight cotton fabric, heavier than muslin, used for women's dresses, neckties, and undergarments.",
    "French jaconas, from Tamil jākkāṇi",
    "She wore a summer gown of fine white jaconet.",
    "Jane Austen, Letters"
  ],
  [
    "Jade",
    "/dʒeɪd/",
    "e",
    "A greenish gemstone or an ornamental mineral used for sword hilts, buckles, and jewelry.",
    "Spanish ijada, from the flank, referencing its purported use in curing kidney ailments",
    "The dagger hilt was fashioned of pale green jade set with rubies.",
    "Christopher Marlowe, Tamburlaine"
  ],
  [
    "Jag",
    "/dʒæɡ/",
    "m",
    "A cut, slash, or decorative ornamental denticulation along the edge of a garment's hem, sleeve, or collar.",
    "Of uncertain Scandinavian or Celtic origin, akin to Old Norse jaga",
    "The sleeves of his gown were finished with elaborate jags.",
    "The Parson's Tale"
  ],
  [
    "Jagged",
    "/ˈdʒæɡɪd/",
    "m",
    "Having slashed, pinked, or notched edges, characteristic of late medieval fashionable tailoring.",
    "From jag (noun or verb)",
    "His doublet was jagged at the skirts in the latest mode.",
    "Robert Brunne, Chronicle"
  ],
  [
    "Jagge",
    "/dʒæɡ/",
    "m",
    "A hanging sleeve or ornamental pendant strip of cloth attached to a medieval hood or doublet.",
    "Middle English derivative of jag",
    "The long jaggs of his hood trailed behind him in the mire.",
    "Piers Plowman"
  ],
  [
    "Jaggery",
    "/ˈdʒæɡəri/",
    "e",
    "Coarse, dark brown unrefined sugar imported from the East Indies, often traded alongside luxury textiles and spices.",
    "Portuguese jágara, from Malayalam śarkarā",
    "The merchant's cargo consisted of fine silks and pots of jaggery.",
    "Richard Hakluyt, Principal Navigations"
  ],
  [
    "Jambeau",
    "/ʒæmˈboʊ/",
    "m",
    "A piece of armor for the lower leg, often made of boiled leather or steel plates.",
    "Old French diminutive of jambe",
    "The knight's jambeaux bore the dents of many lances.",
    "Chanson de Roland translation"
  ],
  [
    "Jambied",
    "/ˈdʒæmbiːd/",
    "m",
    "Equipped, armored, or fitted with jambs on the legs.",
    "Derivative of jamb",
    "The heavy infantry stood rank upon rank, fully jambied and shielded.",
    "Gesta Henrici Quinti"
  ],
  [
    "Jambok",
    "/ˈdʒæmbɒk/",
    "t",
    "A heavy whip, usually cut from hippopotamus or rhinoceros hide, used by colonial travelers and officials.",
    "Malay chabuk, via Afrikaans sjambok",
    "He carried a heavy rhinocerotic jambok in his hand.",
    "Victorian Travel Journals"
  ],
  [
    "Jamil",
    "/dʒəˈmiːl/",
    "e",
    "A fine oriental fabric or robe, sometimes mentioned in Elizabethan trade logs.",
    "Arabic jamīl (beautiful)",
    "Brought from the Levant, a jamil of striped silk.",
    "Levant Company Archives"
  ],
  [
    "Jamkar",
    "/ˈdʒæmkɑːr/",
    "t",
    "An Indian woolen carpet or rug imported during the height of the British Raj.",
    "Hindi jamkhāna",
    "The drawing-room floor was covered with a thick-piled jamkar.",
    "Colonial Household Guide"
  ],
  [
    "Jampani",
    "/dʒæmˈpɑːni/",
    "t",
    "A bearer or attendant who carries a jampan (a traditional sedan chair used in the hills of India).",
    "Hindi jampān",
    "Four sturdy jampanis hoisted the chair up the steep incline.",
    "The Journal of a Indian Officer"
  ],
  [
    "Jand",
    "/dʒænd/",
    "e",
    "An obsolete term for a type of heavy coarse woolen cloth or fabric.",
    "Local English dialect origin",
    "The bolts of jand were stored in the lower warehouse.",
    "Draper's Guild Records"
  ],
  [
    "Janeway",
    "/ˈdʒeɪweɪ/",
    "e",
    "A kind of rich Genoa velvet or fustian cloth imported into Tudor England.",
    "Corruption of Genoa (Geneway)",
    "A doublet cut from rich black janeway velvet.",
    "Will of a London Merchant"
  ],
  [
    "Janty",
    "/ˈdʒænti/",
    "t",
    "An archaic spelling of jaunty, denoting a stylish, showy, or airy manner of dress or demeanor.",
    "French gentil",
    "He wore his beaver hat at a very janty angle.",
    "Charles Dickens, Pickwick Papers"
  ],
  [
    "Janus-faced",
    "/ˈdʒeɪnəs feɪst/",
    "e",
    "Having two faces; metaphorically applied to reversible garments or double-sided heraldic banners.",
    "From Janus, the Roman two-faced god",
    "The tabard was janus-faced, bearing the arms of both houses.",
    "State Papers of Henry VIII"
  ],
  [
    "Japan",
    "/dʒəˈpæn/",
    "t",
    "A hard, glossy black varnish or lacquer applied to metal uniform buttons, armor, and helmet peaks.",
    "From the country Japan, where the lacquer technique originated",
    "The officer's cocked hat was trimmed with shiny black japan.",
    "Military Dress Regulations"
  ],
  [
    "Japonica",
    "/dʒəˈpɒnɪkə/",
    "t",
    "A flowering shrub whose bright red blossoms inspired nineteenth-century textile print motifs.",
    "New Latin, from Japan",
    "Her muslin gown was patterned with scarlet japonica blooms.",
    "Godey's Lady's Book"
  ],
  [
    "Jarmark",
    "/ˈdʒɑːrmɑːrk/",
    "e",
    "A great annual fair or market where foreign textiles and armor were traded.",
    "Polish jarmark or German Jahrmarkt",
    "They purchased the wool at the Dantsic jarmark.",
    "Merchant Adventurers' Records"
  ],
  [
    "Jazerine",
    "/ˈdʒæzəriːn/",
    "m",
    "An alternative variant of jazerant, referring to flexible scale or lamellar armor.",
    "Variant of jazerant",
    "His jazerine armor clinked softly as he mounted his destrier.",
    "Middle English Romance"
  ],
  [
    "Jean",
    "/dʒiːn/",
    "m",
    "A heavy, durable twilled cotton cloth, originally imported from Genoa, used for workwear and linings.",
    "Old French Jannes (Genoa)",
    "The trousers were fashioned of stout brown jean.",
    "Economic History of Textiles"
  ],
  [
    "Jeat",
    "/dʒiːt/",
    "e",
    "An archaic spelling of jet, the black gemstone used extensively for mourning jewelry in Elizabethan and Victorian times.",
    "Middle English get, from Latin gagates",
    "She wore a necklace of polished jeat in token of her grief.",
    "Shakespeare, The Winter's Tale"
  ],
  [
    "Jeez",
    "/dʒiːz/",
    "e",
    "An old dialect word for a peculiar kind of silk ribbon or trimming.",
    "Uncertain origin",
    "The cap was trimmed with narrow rows of yellow jeez.",
    "Provincial English Glossaries"
  ],
  [
    "Jejune",
    "/dʒɪˈdʒuːn/",
    "t",
    "Lacking substance or nourishment; in Victorian dress criticism, used to describe drab or unadorned fabrics.",
    "Latin jejunus (fasting, empty)",
    "The jejune gray calico looked poor beside the rich silks.",
    "Victorian Fashion Critique"
  ],
  [
    "Jellaba",
    "/dʒəˈlæbə/",
    "t",
    "A loose-fitting hooded outer robe worn in North Africa, noted by British explorers and military officers.",
    "Arabic jallābiyya",
    "He wrapped his woolen jellaba tightly against the desert wind.",
    "Richard Burton, Personal Narrative"
  ],
  [
    "Jemmy",
    "/ˈdʒɛmi/",
    "t",
    "A smart or dapper item of dress, or a short crowbar used by burglars (sometimes humorously called a gentleman's tool).",
    "Diminutive of James",
    "He wore a jemmy little cravat tied in a double bow.",
    "The Ingoldsby Legends"
  ],
  [
    "Jennet",
    "/ˈdʒɛnɪt/",
    "m",
    "A small, highly prized Spanish horse favored by knights for riding and parade, often outfitted with ornate harnesses.",
    "Old French genet, from Spanish jinete",
    "The lady rode upon a milk-white jennet with golden reins.",
    "Chaucer, The Book of the Duchess"
  ],
  [
    "Jenny",
    "/ˈdʒɛni/",
    "t",
    "Short for the spinning jenny, the revolutionary multi-spool spinning machine that transformed the textile industry.",
    "Eponymous or diminutive of Jane",
    "The new jenny hummed busily in the mill-house.",
    "Industrial Revolution Reports"
  ],
  [
    "Jeopardy",
    "/ˈdʒɛpərdi/",
    "m",
    "In medieval heraldry and tournament rules, a hazardous position in combat or a disputed contest of arms.",
    "Old French jeu parti (a divided game)",
    "The knight placed his shield and honor in great jeopardy.",
    "Gawain and the Green Knight"
  ],
  [
    "Jester",
    "/ˈdʒɛstər/",
    "m",
    "A professional fool or entertainer employed in a noble household, distinguished by his motley parti-colored tunic and cap.",
    "Middle English gestour (teller of tales)",
    "The court jester shook his cap and bells to amuse the queen.",
    "Le Morte d'Arthur"
  ],
  [
    "Jewel",
    "/ˈdʒuːəl/",
    "m",
    "A precious stone or a piece of jewelry worn as a badge of office, heraldic pendant, or personal adornment.",
    "Old French jouel, from Latin iocus",
    "A heavy golden jewel hung from his collar by a silken ribbon.",
    "Will of Richard II"
  ],
  [
    "Jib",
    "/dʒɪb/",
    "t",
    "A triangular staysail on a ship, or an archaic slang term for a person's profile or the cut of their jib (appearance).",
    "Of uncertain origin, likely nautical Dutch or Scandinavian",
    "I liked not the cut of his jib nor his shabby coat.",
    "Captain Marryat, Peter Simple"
  ],
  [
    "Jiboom",
    "/ˈdʒɪbuːm/",
    "t",
    "A spar that is run out as an extension of the bowsprit on a sailing vessel.",
    "Nautical compound of jib and boom",
    "The rigging strained as the ship plunged her jiboom into the heavy sea.",
    "Richard Henry Dana Jr., Two Years Before the Mast"
  ],
  [
    "Kendal",
    "/ˈkɛndəl/",
    "m",
    "A coarse, green woolen cloth historically manufactured in Kendal, Westmorland, frequently used for common garments and jerkins.",
    "Middle English, from the town name Kendal in Cumbria.",
    "Three misbegotten knaves in Kendal green.",
    "William Shakespeare, Henry IV, Part 1"
  ],
  [
    "Kilderkin",
    "/ˈkɪldərkɪn/",
    "e",
    "A small cask or barrel used for liquids, and historically as a standardized measure of capacity for ale or beer (equal to 18 firkins or half a barrel).",
    "Middle Dutch 'kijnken' (small cask) + diminutive suffix '-kin'.",
    "He buys his sack per kilderkin at home.",
    "Ben Jonson, The Alchemist"
  ],
  [
    "Knot",
    "/nɒt/",
    "e",
    "A complex, symmetrical geometric garden bed design, or an embroidered decorative pattern on Elizabethan garments.",
    "Old English 'cnotta', related to Old High German 'knotzo'.",
    "Thy fields are full of weeds, thy gardens full of knots.",
    "William Shakespeare, Richard II"
  ],
  [
    "Knap",
    "/næp/",
    "m",
    "A crest, top, or summit of a hill, or the raised nap of woolen cloth sheared smooth.",
    "Old English 'cnaep' (top, hilltop).",
    "Upon the knap of the hill, where they were wont to meet.",
    "North's Plutarch"
  ],
  [
    "Kermes",
    "/ˈkɜːrmɪz/",
    "e",
    "A brilliant red or crimson dye obtained from the dried bodies of scale insects found on the kermes oak, used in high-status textiles.",
    "Arabic 'qirmiz' (carmine insect), ultimately from Sanskrit 'krimija' (produced by insects).",
    "Dyed deep in kermes to adorn the robes of state.",
    "Inventories of the Wardrobe of Queen Elizabeth I"
  ],
  [
    "Kermes dye",
    "/ˈkɜːrmɪz daɪ/",
    "m",
    "The rich crimson colorant extracted from scale insects, prized in the Middle Ages for dyeing expensive woolens and silks.",
    "Middle English, via medieval Latin from Arabic 'qirmiz'.",
    "Robes of scarlett and kermes dye for the nobility.",
    "Exchequer Rolls of Scotland"
  ],
  [
    "Kidney",
    "/ˈkɪdni/",
    "t",
    "A colloquial Victorian term for a specific style of side-pocket or pocket cut in waistcoats and trousers.",
    "Middle English 'kidenei', of uncertain origin, perhaps related to Old English 'cwið' (womb) or 'kil' (lump).",
    "A waistcoat with deep kidney pockets for his pocket watch.",
    "Tailor and Cutter Magazine"
  ],
  [
    "Kerseymere",
    "/ˈkɜːrzimɪər/",
    "t",
    "A fine, expensive twilled woolen fabric, often used for men's trousers and waistcoats, corruption of Cassimere/Cashmere.",
    "Corrupted from 'Cashmere', associated with the town of Kersey in Suffolk.",
    "Dressed in a coat of blue kerseymere with brass buttons.",
    "Jane Austen, Letters"
  ],
  [
    "Kendal green",
    "/ˈkɛndəl ɡriːn/",
    "m",
    "A famous sturdy green woolen cloth produced in Kendal, England, noted for durability and worn by foresters and archers.",
    "From Kendal, Cumbria + green.",
    "Give me my master's garment, Kendal green.",
    "Thomas Heywood, Edward IV"
  ],
  [
    "Kirtled",
    "/ˈkɜːrtəld/",
    "e",
    "Wearing a kirtle; dressed in a tunic, gown, or petticoat characteristic of historical attire.",
    "Derived from Middle English 'kirtle' + past participle suffix '-ed'.",
    "The kirtled maidens dancing on the green.",
    "Edmund Spenser, The Faerie Queene"
  ],
  [
    "Knight",
    "/naɪt/",
    "m",
    "A mounted soldier serving a feudal lord in armor, holding a formal military rank below a baron.",
    "Old English 'cniht' (boy, youth, military follower).",
    "A knight there was, and that a worthy man.",
    "Geoffrey Chaucer, The Canterbury Tales"
  ],
  [
    "Knight bachelor",
    "/naɪt ˈbætʃələr/",
    "m",
    "A knight belonging to the lowest historical rank of knighthood, not belonging to any specific ordered order like the Garter.",
    "Old English 'cniht' + Old French 'bacheler' (young man/aspirant knight).",
    "Created knight bachelor upon the battlefield.",
    "Froissart's Chronicles"
  ],
  [
    "Knight banneret",
    "/naɪt ˈbænərɛt/",
    "m",
    "A knight who led his retainers to battle under his own banner, ranking above a knight bachelor.",
    "Old English 'cniht' + Old French 'baneret'.",
    "He was made a knight banneret under the king's standard.",
    "Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Knights Hospitaller",
    "/naɪts ˈhɒspɪtələr/",
    "m",
    "A medieval Catholic military order founded to care for pilgrims in the Holy Land, wearing a black mantle with a white eight-pointed cross.",
    "English 'knight' + Old French 'hospitalier'.",
    "The Grand Master of the Knights Hospitaller summoned his council.",
    "Historical Annals of the Crusades"
  ],
  [
    "Knights Templar",
    "/naɪts ˈtɛmplər/",
    "m",
    "A wealthy and powerful medieval military order of Christian warrior monks recognizable by their white mantles with a red cross.",
    "English 'knight' + Old French 'templier' (from the Temple of Solomon).",
    "The Knights Templar charged with banners raised.",
    "Chronicles of the Temple"
  ],
  [
    "Knit",
    "/nɪt/",
    "m",
    "To form fabric by interlacing yarn or thread with needles; historically used for hose, caps, and jackets.",
    "Old English 'cnyttan' (to tie with a knot).",
    "She sits by the fire to knit woollen hosen.",
    "Paston Letters"
  ],
  [
    "Knurl",
    "/nɜːrl/",
    "e",
    "A small protuberance, knob, or knot on wood, stone, or metal, often used to describe decorative textured grips on armor handles.",
    "Diminutive of Middle English 'knor' (knot, swelling).",
    "The hilt adorned with iron knurls for a surer grip.",
    "Inventories of the Tower of London"
  ],
  [
    "Knurled",
    "/nɜːrld/",
    "e",
    "Having a small ridge, knob, or pattern of ridges on a metal surface to provide a better grip, often seen on medieval sword pommels.",
    "Derived from 'knurl' + '-ed'.",
    "A dagger with a knurled brass pommel.",
    "Armory Records of the Tudor Court"
  ],
  [
    "Kyrtle",
    "/ˈkɜːrtəl/",
    "m",
    "An alternative spelling of kirtle, denoting a medieval gown, tunic, or under-tunic.",
    "Old English 'cyrtel'.",
    "She wore a kyrtle of blue wool.",
    "Middle English Parish Records"
  ],
  [
    "Kag",
    "/kæɡ/",
    "t",
    "A variant spelling of keg, a small wooden barrel used for transporting provisions or military gunpowder.",
    "Old Norse 'kaggi'.",
    "A kag of salt beef for the garrison.",
    "Military Quartermaster Logs"
  ],
  [
    "Kaim",
    "/keɪm/",
    "m",
    "A Scottish term for a long, narrow ridge of glacial gravel, also historically used for a comb or crest-like fortification.",
    "Scots form of 'comb', Old English 'camb'.",
    "Upon the kaim overlooking the valley.",
    "Scottish Border Chronicles"
  ],
  [
    "Kale",
    "/keɪl/",
    "m",
    "A hardy cabbage with curled leaves, historically a vital sustenance crop in medieval Scotland and Northern England.",
    "Northern Middle English 'kail', Old Norse 'kál'.",
    "A pot of hot kale and broth for the weary travelers.",
    "Household Books of the Northern Lords"
  ],
  [
    "Kalends",
    "/ˈkeɪləndz/",
    "m",
    "The first day of every month in the Roman calendar, used historically in medieval ecclesiastical dating.",
    "Latin 'calendae'.",
    "Done upon the kalends of May.",
    "Medieval Monastic Charters"
  ],
  [
    "Kaross",
    "/kəˈrɒs/",
    "t",
    "A traditional skin cloak or mantle worn by indigenous peoples of South Africa, encountered by Victorian explorers and military officers.",
    "Khoekhoe 'ǃgarob' (skin cloak).",
    "Wrapped in a warm jackal-skin kaross against the night frost.",
    "Victorian African Travel Memoirs"
  ],
  [
    "Keelage",
    "/ˈkiːlɪdʒ/",
    "m",
    "A historical toll or duty levied on ships for entering or using a port or harbor's docking facilities.",
    "From 'keel' + suffix '-age'.",
    "Exempt from keelage and customary port dues.",
    "Charter of the Cinque Ports"
  ],
  [
    "Kelpy",
    "/ˈkɛlpi/",
    "m",
    "A mythical water spirit of Scottish folklore, often taking the form of a horse that haunted lochs and streams.",
    "Scots origin, perhaps related to 'kelp' or 'kail'.",
    "Beware the water-kelpy in the deep pool.",
    "Scottish Folklore and Ballads"
  ],
  [
    "Kestrel",
    "/ˈkɛstrəl/",
    "m",
    "A small falcon traditionally flown in medieval falconry by lower-ranking falconers or priests.",
    "Old French 'crestillet', diminutive of 'creste' (crested).",
    "A trained kestrel perched upon his gauntleted wrist.",
    "The Boke of St Albans"
  ],
  [
    "Key",
    "/kiː/",
    "m",
    "A metal instrument used to open locks, frequently used in medieval heraldry as a symbol of guardianship or the keys of St. Peter.",
    "Old English 'cǣg'.",
    "Bearing two crossed keys upon an azure shield.",
    "Heraldic Visitations of the Counties"
  ],
  [
    "King-at-arms",
    "/kɪŋ ət ɑːrmz/",
    "m",
    "A chief herald of senior rank, responsible for supervising subordinate heralds and granting coats of arms.",
    "Middle English 'king' + 'at' + 'arms'.",
    "The King-at-arms proclaimed the tournament rules.",
    "History of the College of Arms"
  ],
  [
    "Kingfisher",
    "/ˈkɪŋfɪʃər/",
    "m",
    "A brightly colored diving bird, occasionally used in heraldry and associated in medieval lore with tranquil waters.",
    "Middle English 'kingfisher', originally 'king's fisher'.",
    "Emblazoned with a golden kingfisher on a field of green.",
    "Medieval Bestiary Manuscripts"
  ],
  [
    "Kit",
    "/kɪt/",
    "m",
    "A wooden tub, pail, or small barrel; later used for a soldier's complete equipment and personal gear.",
    "Middle English 'kitte', from Middle Dutch 'kitte'.",
    "Pack your kit and fall in for the muster.",
    "Military Camp Orders"
  ],
  [
    "Kith",
    "/kɪθ/",
    "m",
    "One's friends, acquaintances, and neighbors; one's native land or fellow clan members in feudal society.",
    "Old English 'cȳþþ' (knowledge, native land, kindred).",
    "Gathered together with all his kith and kin.",
    "Middle English Chronicles"
  ],
  [
    "Knab",
    "/næb/",
    "m",
    "An archaic variant of 'knap', meaning a rounded hilltop or projecting lump.",
    "Old English 'cnaep'.",
    "Stationed upon the high knab to watch for raiders.",
    "Border County Records"
  ],
  [
    "Knapsack",
    "/ˈnæpsæk/",
    "t",
    "A canvas or leather bag carried on the back by soldiers and travelers, replacing older haversacks in the 18th and 19th centuries.",
    "Low German 'knupp' (knapsack) or 'snappen' + 'sack'.",
    "The infantry marched with heavy woolen blankets strapped to each knapsack.",
    "British Army Regulations"
  ],
  [
    "Lambskin",
    "/ˈlæmˌskɪn/",
    "m",
    "Leather made from the skin of a lamb, frequently used for lining gloves, doublets, and academic or legal hoods in medieval Europe.",
    "Old English lambscin, from lamb and scin (skin).",
    "He wore a doublett of fustian lyned with lambskin against the winter chill.",
    "Chaucer, The Canterbury Tales"
  ],
  [
    "Lambswool",
    "/ˈlæmzˌwʊl/",
    "t",
    "Soft wool obtained from the first shearing of a sheep, prized in Victorian tailoring for high-end knitwear and fine shawl fabrics.",
    "Middle English, from lambes wulle.",
    "Her shawl was spun from the finest lambswool, dyed a delicate madder red.",
    "Victorian domestic economy journals"
  ],
  [
    "Lamé",
    "/læˈmeɪ/",
    "t",
    "A type of fabric woven or knit with flat metallic threads, typically gold or silver, popular in late Victorian and Edwardian evening wear.",
    "French lamé, past participle of lamer (to beat into thin plates).",
    "The actress entered the salon in a shimmering gold lamé gown.",
    "Late Victorian fashion periodicals"
  ],
  [
    "Lamina",
    "/ˈlæmɪnə/",
    "m",
    "A thin plate or layer of metal used in the construction of laminar armor, overlapping to protect the torso.",
    "Latin lamina (thin plate, layer, leaf).",
    "Each lamina was pierced at the edges and riveted to leather straps to form the cuirass.",
    "Medieval armorer's guild records"
  ],
  [
    "Lampas",
    "/ˈlæmpəs/",
    "t",
    "A luxurious jacquard-woven fabric with a background weft and a pattern weft, creating a raised, embossed effect often used for heavy draperies and court dress.",
    "French lampas, from Italian lampasso.",
    "The throne room was hung with heavy crimson lampas embroidered with gold thread.",
    "19th-century textile inventories"
  ],
  [
    "Lance-rest",
    "/ˈlænsˌrɛst/",
    "m",
    "A bracket or hook bolted to the right side of a medieval knight's breastplate to support the lance and absorb the shock of impact.",
    "English compound of lance and rest.",
    "He lowered his visor and settled his ashwood shaft firmly into the lance-rest.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Langet",
    "/ˈlæŋɡɪt/",
    "m",
    "A metal strip extending from the crossguard of a sword down the flat of the blade to secure it tightly within the hilt.",
    "Old French linguette (little tongue), diminutive of langue.",
    "The hilt was loose until the blacksmith tightened the steel langet against the ricasso.",
    "Historical sword typology treatises"
  ],
  [
    "Lapel",
    "/ləˈpɛl/",
    "t",
    "The folded flaps of fabric on the front of a coat or jacket below the collar, standardized in Victorian tailoring.",
    "Diminutive of lap (fold of cloth), derived from Middle English lappe.",
    "He pinned his regiment's silver badge to the velvet lapel of his frock coat.",
    "Victorian tailoring manuals"
  ],
  [
    "Lappet",
    "/ˈlæpɪt/",
    "e",
    "A loose flap or fold of a garment, headwear, or lace, hanging down from a cap, coif, or bodice in Elizabethan fashion.",
    "Diminutive of lap.",
    "Her starched linen coif featured delicate lace lappets framing her cheeks.",
    "Elizabethan sumptuary records"
  ],
  [
    "Latchet",
    "/ˈlætʃɪt/",
    "m",
    "A narrow strip of leather or cord used to fasten a shoe, sandal, or boot, common in medieval footwear.",
    "Old French lachet, from lache (loop, lace).",
    "He tripped when his leather latchet snapped during the chase.",
    "Middle English romance literature"
  ],
  [
    "Latten",
    "/ˈlætən/",
    "m",
    "A mixed metal alloy resembling brass, beaten into thin sheets or cast into items such as monumental brasses, buttons, and decorative mounts.",
    "Old French laton, from Arabic lātūn.",
    "The belt was adorned with gilt latten mounts shaped like oak leaves.",
    "Medieval merchant household accounts"
  ],
  [
    "Lawyer's-pleat",
    "/ˈlɔɪərz pliːt/",
    "e",
    "A heavy, stiff box pleat used in Elizabethan legal gowns and ruffs, mimicking the structured formality of the courts.",
    "English compound of lawyer and pleat.",
    "His black wool gown was set with deep lawyer's-pleats at the shoulder.",
    "Elizabethan legal dress codes"
  ],
  [
    "Lead-line",
    "/ˈlɛdˌlaɪn/",
    "t",
    "A weighted cord sewn into the hem of a Victorian lady's skirt or mantle to ensure it hung with a graceful drape.",
    "English compound of lead and line.",
    "The tailor weighted the velvet hem with a fine lead-line against the ocean breeze.",
    "Victorian dressmaking guides"
  ],
  [
    "Leather-coat",
    "/ˈlɛðər koʊt/",
    "e",
    "A heavy russet-brown leather doublet or, metaphorically, a rustic russet apple; also used in Elizabethan slang for a tough leather jerkin.",
    "English compound of leather and coat.",
    "Serving men in greasy leather-coats bustled through the tavern courtyard.",
    "William Shakespeare, Henry IV, Part 2"
  ],
  [
    "Leg-harness",
    "/ˈlɛɡ ˈhɑːrnɪs/",
    "m",
    "The complete suite of plate armor protecting the lower limbs, including cuishes, greaves, poleyns, and sabatons.",
    "Middle English, from leg and harnesch (gear, equipment).",
    "He strapped on his steel leg-harness before mounting the destrier.",
    "Fifteenth-century chivalric manuscripts"
  ],
  [
    "Lenten-stuff",
    "/ˈlɛntən stʌf/",
    "e",
    "Thin, meager apparel or poor-quality fabrics worn during Lent, or metaphorically used by Shakespeare to describe scanty discourse.",
    "English compound of Lenten and stuff.",
    "What dainty bit of Lenten-stuff have we here?",
    "William Shakespeare, Twelfth Night"
  ],
  [
    "Leopard",
    "/ˈlɛpərd/",
    "m",
    "In heraldry, a lion passant guardant (walking and looking toward the viewer), frequently featured on the royal arms of England.",
    "Old French leopard, from Latin leopardus.",
    "Three golden leopards walked upon a field of red.",
    "Medieval roll of arms"
  ],
  [
    "Letice",
    "/ˈlɛtɪs/",
    "m",
    "A type of pale gray or white winter fur, resembling ermine or weasel, used to line high-status medieval garments.",
    "Old French letice, of uncertain origin.",
    "A mantle of scarlet cloth furred with letice kept her warm at the Yule feast.",
    "Fifteenth-century sumptuary laws"
  ],
  [
    "Levant",
    "/ləˈvænt/",
    "t",
    "A fine grade of dressed leather with a prominent grained finish, imported from the Levant and used for bookbinding and fine Victorian traveling bags.",
    "Italian levante (rising, east).",
    "His pocketbook was bound in black Levant leather with gold tooling.",
    "Victorian mercantile records"
  ],
  [
    "Libard",
    "/ˈlɪbərd/",
    "m",
    "An archaic alternative spelling of leopard, frequently found in medieval heraldic descriptions and poetry.",
    "Middle English libard, variant of leopard.",
    "Upon his shield he bore a libard's head erased.",
    "Chaucer, The Knight's Tale"
  ],
  [
    "Libertine",
    "/ˈlɪbərˌtiːn/",
    "t",
    "A loose, flowing style of Victorian dressing or dressing gown that rejected rigid corsetry for absolute physical ease.",
    "Latin libertinus (freedman), later associated with loose morals.",
    "She donned her silk libertine for a quiet morning of reading in the parlor.",
    "Mid-Victorian fashion memoirs"
  ],
  [
    "Libya-cloth",
    "/ˈlɪbiə klɒθ/",
    "t",
    "A lightweight, durable textile woven from a blend of wool and cotton, popular for colonial travel suits in the late Victorian era.",
    "Named after Libya, combined with cloth.",
    "He packed three suits of khaki Libya-cloth for the African expedition.",
    "Victorian colonial outfitters' catalogues"
  ],
  [
    "Licence-badge",
    "/ˈlaɪsəns bædʒ/",
    "e",
    "A metal badge worn by Elizabethan watermen, beggars, or licensed tradesmen to signify their legal standing.",
    "English compound of licence and badge.",
    "The Thames bargeman proudly displayed his silver licence-badge upon his sleeve.",
    "London municipal records, Elizabethan era"
  ],
  [
    "Limbeck",
    "/ˈlɪmbɛk/",
    "t",
    "A traditional alembic or distilling apparatus, metaphorically used in Victorian poetry to describe the extraction of pure essence from textiles or dyes.",
    "Middle English alembik, by apheresis.",
    "The rich scent of indigo passed through the limbeck of her memory.",
    "Victorian poetry collections"
  ],
  [
    "Limbo-patch",
    "/ˈlɪmboʊ pætʃ/",
    "e",
    "A derogatory Elizabethan term for mismatched or leftover scraps of cloth patched together by poor tailors.",
    "English compound of limbo and patch.",
    "His cloak was a mere limbo-patch of various friezes and fustians.",
    "Elizabethan satirical pamphlets"
  ],
  [
    "Limed",
    "/laɪmd/",
    "m",
    "Treated or stiffened with lime, or referring to leather treated with lime-water during the tanning process to remove hair.",
    "Old English līm (lime/glue) + -ed.",
    "The limed hides were scraped clean before being soaked in the tanning pits.",
    "Medieval tanners' guild ordinances"
  ],
  [
    "Linage",
    "/ˈlɪnɪdʒ/",
    "m",
    "The lining material of a garment, or the cost associated with providing fabric linings for royal wardrobes.",
    "Old French linage, from ligne (line).",
    "The master tailor tallied the cost of silk linage for the Earl's mantle.",
    "Royal wardrobe accounts, 14th century"
  ],
  [
    "Linen-draper",
    "/ˈlɪnən ˈdreɪpər/",
    "t",
    "A merchant who sells linen cloth, cambric, lawn, and other household textile goods.",
    "English compound of linen and draper.",
    "He apprenticed as a linen-draper in Cheapside before opening his own shop.",
    "Victorian census and trade directories"
  ],
  [
    "Linen-armor",
    "/ˈlɪnən ˈɑːrmər/",
    "m",
    "Armor constructed from multiple layers of linen quilted and glued together, offering surprising resistance to cuts and thrusts (linothorax type).",
    "English compound of linen and armor.",
    "The foot soldier buckled on his tough linen-armor before the skirmish.",
    "Medieval military inventories"
  ],
  [
    "Lining",
    "/ˈlaɪnɪŋ/",
    "m",
    "The inner layer of fabric, fur, or leather inside a garment, providing comfort, warmth, and structural support.",
    "From Middle English lynynge.",
    "The fur lining of his gown was worth more than the wool exterior.",
    "Chaucerian glosses"
  ],
  [
    "Linsey-woolsey",
    "/ˈlɪnzi ˈwʊlzi/",
    "e",
    "A coarse, sturdy fabric woven with a linen warp and a wool weft, widely used by the working classes throughout the Elizabethan and medieval periods.",
    "Probably from Lindsey, Suffolk, plus woolsey.",
    "She wore a plain kirtle of gray linsey-woolsey as she tended the hearth.",
    "Elizabethan domestic records"
  ],
  [
    "Liripipe",
    "/ˈlɪrɪˌpaɪp/",
    "m",
    "The long, tapering tail or hanging strap attached to the back of a medieval hood or chaperon.",
    "Medieval Latin lirippipium, of obscure origin.",
    "He wrapped the long liripipe of his hood around his neck against the gale.",
    "Geoffrey Chaucer, Canterbury Tales commentary"
  ],
  [
    "Lisle",
    "/laɪl/",
    "t",
    "A fine, tightly twisted cotton thread or yarn, highly mercerized, used for making lightweight Victorian gloves, stockings, and undergarments.",
    "Named after the French city of Lille.",
    "She pulled on a pair of white lisle gloves for her afternoon promenade.",
    "Victorian etiquette handbooks"
  ],
  [
    "List",
    "/lɪst/",
    "m",
    "The border, edge, or selvage of a piece of cloth, woven differently to prevent fraying; also used for strips of scrap fabric.",
    "Old English līst (border, hem).",
    "The thrifty housewife wove a sturdy hearth-rug from colorful cloth lists.",
    "Middle English domestic household rolls"
  ],
  [
    "Lockram",
    "/ˈlɒkrəm/",
    "e",
    "A cheap, coarse linen fabric manufactured in Locronan, Brittany, used for working-class shirts, pocket linings, and sails.",
    "Named after Locronan, France.",
    "Your ordinary robust varlet wears a shirt of coarse lockram.",
    "Shakespeare, Coriolanus"
  ],
  [
    "Long-meg",
    "/ˈlɒŋ mɛɡ/",
    "e",
    "An Elizabethan slang term for an exceptionally tall woman, or a tall, heavy-caliber piece of ordnance, or a long-bodied doublet style.",
    "From the legendary giantess Long Meg of Westminster.",
    "He cut quite a swagger in his new padded doublet of the Long-meg cut.",
    "Elizabethan theatrical tracts"
  ],
  [
    "Loom-weight",
    "/ˈluːm ˈweɪt/",
    "m",
    "A heavy stone, clay, or ceramic disk used to tension the vertical threads on a warp-weighted loom in early medieval weaving.",
    "English compound of loom and weight.",
    "Archaeologists uncovered dozens of baked clay loom-weights on the Saxon floor.",
    "Early medieval archaeological reports"
  ],
  [
    "Lozenge",
    "/ˈlɒzɪndʒ/",
    "m",
    "In heraldry, a diamond-shaped charge on a shield, traditionally used to display the coat of arms of an unmarried woman or widow.",
    "Old French lozenge, of Celtic origin.",
    "Her family's arms were blazoned upon a white lozenge within the escutcheon.",
    "Medieval heraldic manuals"
  ],
  [
    "Lutestring",
    "/ˈluːtˌstrɪŋ/",
    "t",
    "A glossy, plain-woven silk fabric used for women's dresses and ribbons during the 18th and 19th centuries, corrupted from lustring.",
    "Alteration of lustring, from lustrer (to shine).",
    "She wore a gown of changeable green and gold lutestring to the assembly.",
    "Regency and early Victorian fashion journals"
  ],
  [
    "Mail",
    "/meɪl/",
    "m",
    "Flexible armor composed of small interlocking metal rings.",
    "Old French 'maille' from Latin 'macula' (mesh of a net).",
    "He was armed in a good mail of iron rings.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Mantel",
    "/ˈmæntəl/",
    "m",
    "A loose, sleeveless cloak or cape worn over garments.",
    "Old French 'mantel' from Latin 'mantellum'.",
    "She cast a rich mantel of scarlet cloth over her shoulders.",
    "Chaucer, The Canterbury Tales"
  ],
  [
    "Murrey",
    "/ˈmʌri/",
    "m",
    "A dark red or mulberry-colored heraldic tincture or fabric dye.",
    "Old French 'murre' from Mulberry.",
    "His surcoat was quartered with murrey and gold.",
    "15th-century Roll of Arms"
  ],
  [
    "Medley",
    "/ˈmɛdli/",
    "m",
    "A cloth of mixed colors or blended wool yarns.",
    "Old French 'medlee' (mixed).",
    "He wore a coat of blue medley cloth.",
    "Statutes of the Realm, 14th Century"
  ],
  [
    "Montero",
    "/mɒnˈtɛroʊ/",
    "e",
    "A kind of cap with a round crown and a flap that can be turned down, worn by Spanish hunters and later adopted in England.",
    "Spanish 'montero' (mountaineer).",
    "He pulled his velvet montero low against the wind.",
    "Randle Holme, Academy of Armory"
  ],
  [
    "Muffler",
    "/ˈmʌflər/",
    "e",
    "A scarf or wrap for the neck and lower face, or a wrap worn by women to keep warm.",
    "Middle English from 'muffle'.",
    "She wore a silk muffler to shield her face from the biting frost.",
    "Shakespeare, The Merry Wives of Windsor"
  ],
  [
    "Moulinet",
    "/ˌmuːlɪˈneɪ/",
    "m",
    "A medieval weapon-winding device, or a turning motion in swordplay.",
    "French diminutive of 'moulin' (mill).",
    "He used the moulinet to crank back the heavy steel arbalest.",
    "Medieval Military Inventory"
  ],
  [
    "Mohair",
    "/ˈmoʊhɛər/",
    "t",
    "A fabric or yarn made from the long, silky hair of the Angora goat.",
    "Arabic 'mukhayyar' (hair cloth).",
    "A waistcoat woven of fine black mohair.",
    "Victorian Tailor's Guide"
  ],
  [
    "Mantua",
    "/ˈmæntʃuə/",
    "t",
    "A loose-fitting gown or dress popular in the 17th and 18th centuries.",
    "Named after the Italian city of Mantua.",
    "She entered the drawing-room in a brocaded silk mantua.",
    "18th-Century Fashion Journal"
  ],
  [
    "Meuniere",
    "/mʌnˈjɛər/",
    "m",
    "An archaic term for a specific weave or pattern resembling miller's work.",
    "French 'meunière' (miller's wife).",
    "The border of the tunic was embroidered with a meuniere pattern.",
    "Medieval Textile Glossary"
  ],
  [
    "Moreen",
    "/məˈriːn/",
    "t",
    "A stout, heavy woolen fabric, often watered or embossed, used for upholstery and heavy skirts.",
    "French 'mourequin' or related to 'mohair'.",
    "The curtains were made of heavy crimson moreen.",
    "Charles Dickens, Great Expectations"
  ],
  [
    "Mousseline",
    "/ˌmuːsəˈliːn/",
    "t",
    "A fine, delicate fabric of silk or cotton, precursor to modern muslin.",
    "French from Mosul, Iraq.",
    "A summer dress of pale blue mousseline-de-laine.",
    "Victorian Ladies' Magazine"
  ],
  [
    "Marmion",
    "/ˈmɑːrmiən/",
    "m",
    "A type of medieval fur lining or trim, often confused with marten fur.",
    "Old French 'marmion'.",
    "His cloak was edged with rich marmion.",
    "Medieval Wardrobe Accounts"
  ],
  [
    "Mascle",
    "/ˈmæskəl/",
    "m",
    "A heraldic charge in the shape of a lozenge with a square hole in the middle.",
    "Old French 'mascle' (mesh of a net).",
    "His shield bore three gold mascles upon a field of azure.",
    "Heraldic Roll of Arms"
  ],
  [
    "Maunch",
    "/mɔːntʃ/",
    "m",
    "A medieval lady's sleeve with long, hanging ends, used as a heraldic charge.",
    "Old French 'manche' (sleeve).",
    "He bore a silver maunch upon a red shield.",
    "Camden's Brittania"
  ],
  [
    "Martlet",
    "/ˈmɑːrtlɪt/",
    "m",
    "A mythical bird without feet, used in heraldry to represent younger sons or promptitude.",
    "Diminutive of 'martin' (swallow).",
    "The shield displayed three black martlets.",
    "Medieval Heraldry Book"
  ],
  [
    "Mail-glove",
    "/ˈmeɪl ɡlʌv/",
    "m",
    "A protective glove made of linked metal rings for combat.",
    "Old English and Old French roots.",
    "He tightened his mail-glove before drawing his sword.",
    "Chivalric Romance"
  ],
  [
    "Morion-cap",
    "/ˈmɔːriən kæp/",
    "e",
    "Alternative term for the high-crested Elizabethan helmet.",
    "Spanish 'morrión'.",
    "The guard stood at the gate with his morion-cap polished bright.",
    "Elizabethan Playwright Notes"
  ],
  [
    "Murrion",
    "/ˈmʌriən/",
    "e",
    "Variant spelling of morion, a helmet.",
    "Spanish origin.",
    "Each soldier was issued a coat and a murrion.",
    "State Papers, Reign of Elizabeth I"
  ],
  [
    "Mitre",
    "/ˈmaɪtər/",
    "m",
    "A tall, pointed liturgical headwear worn by bishops, often heavily embroidered with gold and jewels.",
    "Greek 'mitra' via Latin.",
    "The bishop wore a golden mitre encrusted with pearls.",
    "Ecclesiastical Inventory"
  ],
  [
    "Mustering",
    "/ˈmʌstərɪŋ/",
    "m",
    "The assembly of troops for inspection, requiring specific armor and arms.",
    "Old French 'mostre' from Latin 'monstrare'.",
    "The knights were mustering at dawn in full harness.",
    "Medieval Chronicle"
  ],
  [
    "Muff",
    "/mʌf/",
    "e",
    "An open-ended cylindrical fur or fabric cover for keeping the hands warm.",
    "Dutch or German origin.",
    "She tucked her gloved fingers inside an ermine muff.",
    "Shakespearean Era Diary"
  ],
  [
    "Murrey-blind",
    "/ˈmʌri blaɪnd/",
    "m",
    "An archaic descriptive term for a dark, purplish-red hue.",
    "Compound of murrey and blind.",
    "The wool was dyed a deep murrey-blind shade.",
    "Guild Dyer Records"
  ],
  [
    "Meuniere-stitch",
    "/mʌnˈjɛər stɪtʃ/",
    "m",
    "An intricate embroidery stitch used in medieval ecclesiastical garments.",
    "French origin.",
    "The hem was worked in a delicate meuniere-stitch with gold thread.",
    "Church Vestment Ledger"
  ],
  [
    "Metonym",
    "/ˈmɛtəˌnɪm/",
    "e",
    "A garment or textile item used symbolically to represent an office or rank.",
    "Greek 'metōnymia'.",
    "The purple robe served as a metonym for royal authority.",
    "Renaissance Rhetoric Text"
  ],
  [
    "Mullet",
    "/ˈmʌlɪt/",
    "m",
    "A heraldic star, typically depicted with five straight points.",
    "Old French 'molette' (rowel of a spur).",
    "His coat of arms featured a silver mullet in the canton.",
    "Heraldic Visitation"
  ],
  [
    "Maillot",
    "/maɪˈjoʊ/",
    "t",
    "A tight-fitting one-piece garment or tunic, originally for acrobats but adopted in Victorian theatrical costuming.",
    "French, named after 19th-century hosiery maker Maillot.",
    "The performer wore a flesh-colored silk maillot.",
    "Victorian Stage Directory"
  ],
  [
    "Mantle-cloak",
    "/ˈmæntəl kloʊk/",
    "m",
    "A heavy outer cloak worn by travelers and nobility.",
    "Germanic and Romance roots.",
    "He wrapped his thick mantle-cloak tightly against the storm.",
    "Middle English Romance"
  ],
  [
    "Medallion",
    "/məˈdæljən/",
    "e",
    "A large oval or circular ornament worn on a chain or embroidered onto a garment.",
    "French 'medaillon' from Italian.",
    "A golden medallion hung heavy upon his velvet doublet.",
    "Court Portrait Description"
  ],
  [
    "Millinery",
    "/ˈmɪlɪnəri/",
    "e",
    "The manufacture and trade of hats, caps, and fashionable accessories, originally associated with Milan.",
    "From Milan, Italy.",
    "She went to the marketplace to purchase new ribbons from the millinery stall.",
    "Elizabethan Town Records"
  ],
  [
    "Monk-cloth",
    "/ˈmʌŋk klɒθ/",
    "t",
    "A heavy, coarse cotton or woolen fabric with a basket weave, resembling monastic habits.",
    "English compound.",
    "The study curtains were fashioned from rough brown monk-cloth.",
    "Victorian Interior Design Manual"
  ],
  [
    "Mosaic-work",
    "/moʊˈzeɪɪk wɜːrk/",
    "m",
    "In textile arts, a pattern made by piecing together tiny scraps of contrasting fabrics.",
    "Greek 'musaikos'.",
    "The altar cloth was a masterpiece of silk mosaic-work.",
    "Ecclesiastical Embroidery Guide"
  ],
  [
    "Muckinder",
    "/ˈmʌkɪndər/",
    "e",
    "A handkerchief, especially one carried by children or tucked into a belt.",
    "Obscure origin, possibly related to mucus.",
    "He wiped his nose upon his lace-trimmed muckinder.",
    "Ben Jonson, Every Man Out of His Humor"
  ],
  [
    "Mull-muslin",
    "/ˈmʌl ˈmʌzlɪn/",
    "t",
    "A very fine, sheer cotton fabric used for Victorian undergarments and dress ruffles.",
    "Indian and European trade blend.",
    "Her petticoats were edged with fine mull-muslin.",
    "Victorian Dressmaker's Ledger"
  ],
  [
    "Mantlet",
    "/ˈmæntlɪt/",
    "m",
    "A portable shelter or ballistic shield used by medieval besiegers to approach walls.",
    "Diminutive of Old French 'mantel'.",
    "The sappers pushed the wooden mantlet toward the castle gate.",
    "Siege Warfare Chronicle"
  ],
  [
    "Mesh",
    "/mɛʃ/",
    "m",
    "The open space in a net or the interlocking structure of chain mail.",
    "Old English 'mæsce'.",
    "The sword blow glanced off the iron mesh.",
    "Middle English Battle Account"
  ],
  [
    "Mousseline-de-laine",
    "/ˌmuːsəˌliːn də ˈlɛn/",
    "t",
    "A lightweight woolen fabric or wool-cotton blend popular in Victorian times for dresses.",
    "French (muslin of wool).",
    "A printed mousseline-de-laine dress suited for afternoon tea.",
    "Godey's Lady's Book"
  ],
  [
    "Murrey-cloth",
    "/ˈmʌri klɒθ/",
    "m",
    "Cloth dyed in the dark mulberry shade known as murrey.",
    "Compound of murrey and cloth.",
    "The councillors wore robes of heavy murrey-cloth.",
    "Civic Procession Record"
  ],
  [
    "Nacre",
    "/ˈneɪkər/",
    "t",
    "Mother-of-pearl, often used as a decorative button material or embroidery inlay on fine Victorian court gowns.",
    "Middle French nacre, from Arabic naqqāra or Persian nākar",
    "Her stomacher was crusted with pearls and shimmering nacre.",
    "Victorian Court Dress Gazette"
  ],
  [
    "Nankeen",
    "/nænˈkiːn/",
    "t",
    "A durable, yellowish-buff cotton cloth originally imported from Nanjing, China, widely used for summer trousers and waistcoats.",
    "From Nanjing, Chinese city of origin",
    "He wore a smart coat of yellow nankeen and a high cravat.",
    "Jane Austen, Letters"
  ],
  [
    "Napery",
    "/ˈneɪpəri/",
    "m",
    "Household linen, especially table linen such as tablecloths and napkins woven from flax or hemp.",
    "Old French naperie, from nape (tablecloth)",
    "The chest was filled with fine damask napery for the feast.",
    "Middle English Household Ordinances"
  ],
  [
    "Nappa",
    "/ˈnæpə/",
    "t",
    "A soft, full-grain glove leather, typically dyed, used for fashionable Victorian driving gloves and boots.",
    "Named after Napa, California, where the tanning process was invented",
    "She drew on her butter-soft nappa gloves before stepping into the carriage.",
    "Victorian Fashion Journal"
  ],
  [
    "Nasal helm",
    "/ˈneɪzəl hɛlm/",
    "m",
    "An open-faced conical combat helmet featuring a prominent central nasal guard, common among early medieval knights.",
    "Modern historical coinage based on medieval components",
    "The knight lowered his nasal helm as the cavalry charge commenced.",
    "The Bayeux Tapestry Documentation"
  ],
  [
    "Nasard",
    "/ˈnæzɑːrd/",
    "m",
    "An alternate medieval spelling and variant term for a nasal guard on a helmet.",
    "Old French variant of nasal",
    "The iron nasard deflected the enemy's glancing spear-thrust.",
    "Chanson de Roland translation"
  ],
  [
    "Natte",
    "/ˈnæt/",
    "t",
    "A basket-weave textile texture resembling plaited straw, popular for summer women's mantles.",
    "French natte (mat or braid)",
    "Her gown was fashioned from a grey silk natte of exceptional weight.",
    "Godey's Lady's Book"
  ],
  [
    "Nemat",
    "/ˈniːmæt/",
    "e",
    "An obsolete term for a fine thread or filament used in embroidery or textile spinning.",
    "Latin nema, from Greek nema (thread)",
    "Every nemat of gold thread was painstakingly laid by the embroiderer.",
    "Elizabethan Wardrobe Accounts"
  ],
  [
    "Nep",
    "/nɛp/",
    "t",
    "A tangled knot or defect in cotton or wool fibers that mars the smoothness of woven fabric.",
    "Origin uncertain, dialectal English",
    "The weaver cursed the excessive neps found in the cheap wool shipment.",
    "Textile Manufacturer's Manual"
  ],
  [
    "Nervation",
    "/nɜːrˈveɪʃən/",
    "t",
    "The structural pattern of veins in leaves, often metaphorically applied to the ribbed pattern in corded silk textiles.",
    "Latin nervatio (sinewy structure)",
    "The heavy faille displayed a striking nervation running parallel to the selvedge.",
    "Victorian Textile Dictionary"
  ],
  [
    "Nesset",
    "/ˈnɛsət/",
    "m",
    "A small medieval pouch or purse hung from the girdle to carry small valuables.",
    "Old Norse hneski (small bag)",
    "She drew a silver penny from her leather nesset.",
    "Middle English Wills and Inventories"
  ],
  [
    "Nete",
    "/niːt/",
    "m",
    "Clean, tidy, or well-apparelled attire; a Middle English root for neatness in dress.",
    "Old French net, from Latin nitidus",
    "His doublet was net and well-pressed for the royal audience.",
    "Chaucer, Canterbury Tales"
  ],
  [
    "Nettle-cloth",
    "/ˈnɛtəl klɒθ/",
    "e",
    "A coarse, sturdy fabric woven from the fibrous stems of stinging nettles, used by the rural poor.",
    "Old English netele + clāð",
    "The peasants wore rough nettle-cloth tunics that chafed their skin.",
    "Tudor Social History Records"
  ],
  [
    "Nettled",
    "/ˈnɛtəld/",
    "e",
    "Patterned or woven with a mesh resembling a net, or decorated with lace netting.",
    "From net",
    "Her coif was nettled with fine silver thread.",
    "Elizabethan Court Inventories"
  ],
  [
    "Nevel",
    "/ˈnɛvəl/",
    "m",
    "A blow with the fist, or an archaic textile knot.",
    "Old English hnyfan",
    "He struck the braggart a heavy nevel across the helm.",
    "Cursor Mundi"
  ],
  [
    "Nicker",
    "/ˈnɪkər/",
    "m",
    "A water-demon or monster, frequently embroidered as a heraldic beast upon banners.",
    "Old English nicor",
    "The standard-bearer carried the banner emblazoned with a green nicker.",
    "Beowulf manuscript notes"
  ],
  [
    "Nigella",
    "/naɪˈdʒɛlə/",
    "e",
    "A dark seed used historically in plant-based textile dyeing to achieve deep black or grey tones.",
    "Latin nigellus (blackish)",
    "The wool was steeped in nigella to impart a midnight hue.",
    "Tudor Herbal and Dye Manual"
  ],
  [
    "Nightingale",
    "/ˈnaɪtɪŋɡeɪl/",
    "t",
    "A loose Victorian women's morning jacket or bed jacket with wide sleeves.",
    "Named after Florence Nightingale",
    "She wore a quilted red cashmere nightingale while reading by the hearth.",
    "Victorian Domestic Household Guide"
  ],
  [
    "Nimb",
    "/nɪmb/",
    "e",
    "A halo or luminous ring, frequently embroidered in gold thread behind saintly figures on church vestments.",
    "Latin nimbus (cloud)",
    "The nimb of the Virgin was rendered in couched gold wire.",
    "Ecclesiastical Vestment Records"
  ],
  [
    "Nimmer",
    "/ˈnɪmər/",
    "e",
    "A thief or pickpocket who specialized in stealing cloaks, ruffs, and doublets from unwary citizens.",
    "German nehmen (to take)",
    "Beware the London nimmers who prowl outside the theater doors.",
    "Thomas Dekker, Elizabethan Pamphlets"
  ],
  [
    "Nip",
    "/nɪp/",
    "e",
    "A narrow fold, pleat, or pinch in a ruff or collar, shaped by a hot curling iron.",
    "Middle English nippen",
    "The laundress used a heated iron to set the precise nips in his ruff.",
    "Stubbes, Anatomie of Abuses"
  ],
  [
    "Nip-cheese",
    "/ˈnɪp tʃiːz/",
    "e",
    "A derogatory Elizabethan term for a miserly person who wears cheap, threadbare garments.",
    "Nip + cheese",
    "That stingy nip-cheese refuses to buy a new doublet for the feast.",
    "Shakespearean Slang Lexicon"
  ],
  [
    "Niter",
    "/ˈnaɪtər/",
    "e",
    "Potassium nitrate, used historically in treating and softening certain heavy leathers for arming doublets.",
    "Greek nitron",
    "The leather was treated with niter to ensure flexibility.",
    "Armorer's Workshop Ledger"
  ],
  [
    "Noblesse",
    "/noʊˈblɛs/",
    "m",
    "The nobility collectively, or the fine sumptuary attire required of high-born persons.",
    "Old French noblesse",
    "Her mantle of ermine proclaimed her true noblesse.",
    "Medieval Chronicles of France"
  ],
  [
    "Noddy",
    "/ˈnɒdi/",
    "e",
    "A simple, low-crowned felt hat worn during the Tudor period by ordinary citizens.",
    "Origin uncertain",
    "He doffed his simple noddy to the passing magistrate.",
    "Tudor Street Life Accounts"
  ],
  [
    "Noil",
    "/nɔɪl/",
    "t",
    "The short, knotty waste fibers combed out during the preparation of long-staple wool or silk spinning.",
    "Old French noil",
    "The cheaper tweed was spun using a blend of wool and noils.",
    "Textile Mill Spinning Records"
  ],
  [
    "Nombril",
    "/ˈnɒmbrɪl/",
    "m",
    "The exact navel point of a heraldic shield, located immediately below the fess point.",
    "Old French nombril (navel)",
    "The lion rampant was positioned directly upon the nombril of the shield.",
    "Medieval Treatise on Heraldry"
  ],
  [
    "Non-pareil",
    "/ˌnɒnpəˈrɛl/",
    "e",
    "A type of exceptionally fine silk ribbon or small decorative fastening with no equal.",
    "French nonpareil (unequalled)",
    "The bodice was trimmed with rows of crimson non-pareil ribbon.",
    "Elizabethan Tailor's Receipt"
  ],
  [
    "Nook",
    "/nʊk/",
    "m",
    "An archaic measurement of land, or a small triangular gusset inserted into a medieval garment for fit.",
    "Middle English nok",
    "The tailor added a small nook of linen to ease the armscye.",
    "Medieval Garment Construction Guide"
  ],
  [
    "Norle",
    "/ˈnɔːrl/",
    "m",
    "An old Northern English regional term for a woolen cap or hood.",
    "Northern dialect variant",
    "He pulled his thick norle down against the biting Scottish wind.",
    "Border Ballads Collection"
  ],
  [
    "Norman helm",
    "/ˈnɔːrmən hɛlm/",
    "m",
    "A conical nasal helmet worn by Norman knights during the 11th and 12th centuries.",
    "Named after the Normans",
    "A forest of Norman helms advanced across the ridge at Hastings.",
    "Chronicles of William of Poitiers"
  ],
  [
    "Norroy",
    "/ˈnɔːrɔɪ/",
    "e",
    "A senior heraldic officer (King of Arms) whose jurisdiction covers the northern part of England.",
    "Anglo-French nor-roi (north king)",
    "The coat of arms was officially confirmed by Norroy King of Arms.",
    "College of Arms Records"
  ],
  [
    "Notch",
    "/nɒtʃ/",
    "m",
    "A decorative V-shaped cut along the hem or dagging of a medieval tunic.",
    "Middle English nock",
    "The sleeves were elaborately fashioned with dagged notches.",
    "Sumptuary Law Proceedings"
  ],
  [
    "Not-white",
    "/ˈnɒtwaɪt/",
    "e",
    "An undyed or unbleached woolen cloth common in Elizabethan England before finishing.",
    "Not + white",
    "The merchant brought three bolts of rough not-white to the weaver.",
    "Drapers' Company Records"
  ],
  [
    "Nubble",
    "/ˈnʌbəl/",
    "t",
    "A small lump or knot in spun yarn, intentionally created to give tweed cloth a textured appearance.",
    "Diminutive of knob",
    "The Harris tweed was prized for its characteristic nubbles of colored wool.",
    "Scottish Textile Heritage"
  ],
  [
    "Nubia",
    "/ˈnuːbiə/",
    "t",
    "A large, loose, fluffy Victorian headscarf or wrap knitted from soft wool or mohair.",
    "Named after Nubia, or exotic fashion naming conventions",
    "She wrapped a white wool nubia around her head before braving the snow.",
    "Victorian Ladies' Magazine"
  ],
  [
    "Nuance",
    "/ˈnjuːɑːns/",
    "t",
    "A subtle gradation of color in dyed silks, highly prized by Victorian embroidery artists.",
    "French nuance (shade)",
    "The master embroiderer blended twenty nuances of green in the ivy leaves.",
    "School of Art Needlework Journal"
  ],
  [
    "Nun's cloth",
    "/n��nz klɒθ/",
    "t",
    "A lightweight, plain-weave worsted fabric, traditionally used for religious habits and later for summer mourning wear.",
    "Nun + cloth",
    "She wore a simple gown of black nun's cloth during her period of seclusion.",
    "Victorian Mourning Etiquette"
  ],
  [
    "Nun's veiling",
    "/nʌnz ˈviːlɪŋ/",
    "t",
    "An extremely sheer, fine wool or silk fabric used for lightweight veils and widow's weeds.",
    "Nun + veiling",
    "Her face was obscured behind a double fold of black nun's veiling.",
    "Grief and Garment Lore"
  ],
  [
    "Nuptial ring",
    "/ˈnʌpʃəl rɪŋ/",
    "e",
    "A traditional wedding band exchanged during Elizabethan marriage ceremonies, often engraved with posies.",
    "Latin nuptialis (bridal)",
    "He slipped a golden nuptial ring upon her finger.",
    "Elizabethan Parish Register"
  ],
  [
    "Nut-brown",
    "/ˈnʌt braʊn/",
    "m",
    "A rich, warm brown dye color derived from walnut husks, widely used for peasant woolens.",
    "Nut + brown",
    "She wore a kirtle of nut-brown wool that matched the autumn woods.",
    "Middle English Balladry"
  ],
  [
    "Nylon",
    "/ˈnaɪlɒn/",
    "t",
    "An anachronism for this specific list, but historically pre-dated by early synthetic cellulose attempts in late Victorian labs.",
    "Coined term from DuPont later, but conceptually rooted in late-19th polymer experiments",
    "The early synthetic filaments hinted at the future of textile manufacturing.",
    "Victorian Scientific American"
  ],
  [
    "Orle",
    "/ɔːrl/",
    "m",
    "A heraldic bearing consisting of a narrow band or border following the outline of the shield, distinct from the tressure.",
    "From Old French orle, from Latin orula, diminutive of ora (border, edge).",
    "The shield bore a double orle of martlets in argent upon a field of azure.",
    "John Guillim, A Display of Heraldrie, 1610"
  ],
  [
    "Orfray",
    "/ˈɔːrfreɪ/",
    "m",
    "Rich embroidered border or facing on an ecclesiastical vestment or garment, typically worked in gold thread.",
    "From Old French orfreis, from Medieval Latin aurifrisium (aurum (gold) + Phrygius (Phrygian, famed for embroidery)).",
    "His cope was of purple velvet with heavy orfrays of seed pearls.",
    "Chaucer, The Canterbury Tales, c. 1395"
  ],
  [
    "Ochre",
    "/ˈoʊkər/",
    "e",
    "A natural earthy pigment varying from light yellow to brownish red, used for dyeing textiles and leather.",
    "From Middle French ochre, from Latin ochra, from Greek ōkhra, from ōkhros (pale yellow).",
    "She wore kirtles dyed in native ochre and madder.",
    "The Wardrobe Accounts of Edward IV, 1480"
  ],
  [
    "Ochrea",
    "/ˈɒkriə/",
    "t",
    "A greave or legging protecting the shin, styled after ancient Roman military armor.",
    "From Latin ochrea (greave or legging), related to ocrea.",
    "The theatrical costume required a polished brass ochrea for the gladiator scene.",
    "Victorian Stage Costuming Manual, 1888"
  ],
  [
    "Ocre",
    "/ˈoʊkər/",
    "m",
    "A shoe or boot, particularly of coarse leather worn by the peasantry.",
    "From Old French ocre, variant of socre, from Latin socculus.",
    "The mud clung heavily to his thick leather ocres as he crossed the yard.",
    "Piers Plowman, c. 1370"
  ],
  [
    "Oculi",
    "/ˈɒkjulaɪ/",
    "m",
    "Ornamental eye-shaped openings or eyelets embroidered on medieval garments or laced armor.",
    "From Latin oculi, plural of oculus (eye).",
    "The doublet was fashioned with small oculi through which a silken cord was passed.",
    "Inventory of the Exchequer, 1399"
  ],
  [
    "Olla",
    "/ˈɒlə/",
    "t",
    "A broad-mouthed earthen jar or pot, occasionally used in dyeing vats for textile processing.",
    "From Latin olla (pot, jar).",
    "The wool was steeped within the large red olla filled with woad.",
    "Household books of Thomas Howard, 1520"
  ],
  [
    "Obreptitious",
    "/ˌɒbrɪpˈtɪʃəs/",
    "e",
    "Done surreptitiously or by stealth; sometimes applied to illicitly acquired sumptuary garments.",
    "From Latin obrepticius, from obrepere (to creep upon).",
    "Such obreptitious velvet ruffs violated the strict decrees of the Queen.",
    "Proclamation against Excess of Apparel, 1577"
  ],
  [
    "Odograph",
    "/ˈɒdəɡræf/",
    "t",
    "An instrument for measuring the distance traveled, sometimes used by merchants inspecting distant textile fairs.",
    "From Greek hodos (way) + graphein (to write).",
    "He attached the odograph to his carriage wheel to map the route to the weaving guild.",
    "Mechanics Magazine, 1845"
  ],
  [
    "Ogeron",
    "/ˈɒdʒərɒn/",
    "m",
    "An obsolete term for a type of heavy woolen frieze or coarse outer garment.",
    "From Old French ogeron, regional textile designation.",
    "He wrapped his shivering frame in a dark ogeron against the northern gale.",
    "Northern Border Rolls, 1422"
  ],
  [
    "Oilet",
    "/ˈɔɪlɪt/",
    "m",
    "A small hole or eyelet in fabric or plate armor for lacing or ventilation; variant of eyelet.",
    "From Old French oillet, diminutive of oeil (eye).",
    "The armorer pierced precise oilets in the leather straps of the cuirass.",
    "Sir Thomas Malory, Le Morte d'Arthur, 1485"
  ],
  [
    "Oinomania",
    "/ˌɔɪnoʊˈmeɪniə/",
    "t",
    "An insatiable craving for wine, a Victorian medicalized term often noted in accounts of tavern weavers.",
    "From Greek oinos (wine) + mania (madness).",
    "He fell into deep oinomania after losing his loom in the industrial downturn.",
    "The Lancet, Medical Journal, 1872"
  ],
  [
    "Oleiferous",
    "/ˌoʊlɪˈɛfərəs/",
    "t",
    "Producing oil, used in reference to seeds and plants utilized in early textile lubrication and finishing.",
    "From Latin oleum (oil) + ferre (to bear).",
    "The press extracted oil from the oleiferous seeds for treating canvas.",
    "Cyclopaedia of Useful Arts, 1854"
  ],
  [
    "Olibanum",
    "/əˈlɪbənəm/",
    "m",
    "A fragrant gum resin (frankincense) used to scent ceremonial garments and robes.",
    "From Medieval Latin olibanum, from Arabic al-lubān.",
    "The royal vestments were heavily scented with burning olibanum.",
    "Will of Eleanor de Bohun, 1399"
  ],
  [
    "Olim",
    "/ˈoʊlɪm/",
    "e",
    "Formerly, in times past; used in historical inventories to denote archaic pieces of wardrobe.",
    "Latin olim (formerly, once upon a time).",
    "Item, an olim mantle of crimson tissue, much frayed at the hem.",
    "Royal Wardrobe Inventory, 1547"
  ],
  [
    "Olla-podrida",
    "/ˌɒlə pəˈdriːdə/",
    "e",
    "A hodgepodge or miscellaneous collection; metaphorically applied to mismatched pieces of armor.",
    "From Spanish olla podrida (rotten pot).",
    "His harness was a veritable olla-podrida of mismatched plate and mail.",
    "Ben Jonson, Every Man Out of His Humor, 1599"
  ],
  [
    "Ombre",
    "/ˈɒmbər/",
    "e",
    "A fabric of a graduated shade or color, darker at one edge and lighter at the other.",
    "From French ombre (shadow), from Latin umbra.",
    "She wore a gown of rich silk shot with ombre hues of twilight blue.",
    "Elizabethan Court Records, 1590"
  ],
  [
    "Omer",
    "/ˈoʊmər/",
    "m",
    "An ancient Hebrew dry measure, historically referenced in guild regulations regarding grain and flax trade.",
    "From Hebrew ōmer (sheaf).",
    "The merchant measured the flax seed by the exact omer.",
    "Wycliffe Bible, 1382"
  ],
  [
    "Onerary",
    "/ˈɒnərəri/",
    "t",
    "Serving as a burden or encumbrance, applied to heavy ceremonial armor or stiff court mantles.",
    "From Latin onerarius, from onus (burden).",
    "The peer complained of the onerary weight of his coronation robes.",
    "Diaries of Lord Palmerston, 1838"
  ],
  [
    "On fascia",
    "/ɒn ˈfæʃiə/",
    "t",
    "An ornamental band or fillet placed upon a garment or helmet.",
    "Modern Latin adaptation from Latin fascia (band).",
    "The helm was encircled on fascia with a wreath of beaten brass.",
    "Archaeologia Britannica, 1802"
  ],
  [
    "Oory",
    "/ˈʊəri/",
    "t",
    "Gloomy, overcast, or damp; descriptive of northern weather affecting outdoor textile bleaching.",
    "Scottish dialect, origin uncertain.",
    "The weavers brought their webs indoors under the oory morning sky.",
    "John Jamieson, Etymological Dictionary of the Scottish Language, 1808"
  ],
  [
    "Opaline",
    "/ˈoʊpəliːn/",
    "t",
    "Having a milky, iridescent sheen resembling an opal, used to describe delicate Victorian silks.",
    "From French opaline, from opale (opal).",
    "The ballgown was fashioned from opaline tiffany that shimmered under gaslight.",
    "The Ladies' Cabinet of Fashion, 1865"
  ],
  [
    "Opiferous",
    "/əˈpɪfərəs/",
    "e",
    "Producing help or bringing assistance; metaphorically used for supportive linings in doublets.",
    "From Latin opifer (bringing help), from ops (aid) + ferre (to bring).",
    "The canvas interlining acted in an opiferous capacity to hold the stiff doublet shape.",
    "Thomas Blount, Glossographia, 1656"
  ],
  [
    "Opisthographic",
    "/ˌɒpɪstəˈɡræfɪk/",
    "t",
    "Written on both front and back, as was common in medieval textile inventory scrolls.",
    "From Greek opisthen (behind) + graphikos (writing).",
    "The tailor's roll was opisthographic, detailing debts on the reverse.",
    "Historical Manuscripts Commission, 1891"
  ],
  [
    "Oppidan",
    "/ˈɒpɪdən/",
    "e",
    "Pertaining to a town; townspeople whose guild laws governed local drapery and cloth markets.",
    "From Latin oppidanus, from oppidum (town).",
    "The oppidan merchants assembled to fix the price of coarse kersey cloth.",
    "Statutes of the Realm, 1515"
  ],
  [
    "Oppile",
    "/ˈɒpɪl/",
    "e",
    "To obstruct or block up, occasionally used in technical descriptions of clogged textile fuller's earth.",
    "From Latin oppilare (to crowd together, choke up).",
    "The dense clay tended to oppile the channels of the fulling mill.",
    "John Baret, Alvearie, 1580"
  ],
  [
    "Opprobrious",
    "/əˈproʊbriəs/",
    "e",
    "Expressing scorn or reproach; applied to unlawful or scandalous garments forbidden by law.",
    "From Latin opprobrosus, from opprobrium (reproach).",
    "He was fined for wearing an opprobrious hat of foreign fashion.",
    "London Sessions Records, 1604"
  ],
  [
    "Optative",
    "/ˈɒptətɪv/",
    "e",
    "Expressing wish or desire; in heraldry, sometimes poetic phrasing for desired quarterings.",
    "From Latin optativus, from optare (to wish).",
    "The coat of arms displayed an optative alliance with the northern house.",
    "William Camden, Remaines Concerning Britain, 1605"
  ],
  [
    "Orach",
    "/ˈɒrətʃ/",
    "m",
    "A plant (Atriplex hortensis) historically cultivated for green dye extracts used in woolens.",
    "From Old French orache, from Latin auracia.",
    "The dyer boiled the leaves of orach to secure a muted greenish tint.",
    "The Forme of Cury, c. 1390"
  ],
  [
    "Orarium",
    "/əˈrɛəriəm/",
    "m",
    "An early ecclesiastical stole or scarf worn by deacons, forerunner of the modern liturgical stole.",
    "From Medieval Latin orarium, probably from os (mouth) or orare (to pray).",
    "The deacon wore his white linen orarium crossed upon his breast.",
    "Will. Durandus, Rationale Divinorum Officiorum, c. 1286"
  ],
  [
    "Orbate",
    "/ˈɔːrbeɪt/",
    "e",
    "Bereaved or deprived; used poetically of armor stripped from a fallen knight.",
    "From Latin orbatus, past participle of orbare (to bereave).",
    "Left orbate of his bright helm, he stood defenseless on the field.",
    "Edmund Spenser, The Faerie Queene, 1590"
  ],
  [
    "Orbicular",
    "/ɔːrˈbɪkjʊlər/",
    "e",
    "Circular or spherical; describing round studs or bosses upon heavy leather brigandines.",
    "From Late Latin orbicularis, from Latin orbis (circle).",
    "The brigandine was reinforced with orbicular steel plates riveted within.",
    "Philemon Holland, translation of Pliny, 1601"
  ],
  [
    "Orc",
    "/ɔːrk/",
    "m",
    "A sea-monster or whale, whose skin or bone was occasionally used for stiffening medieval stays.",
    "From Latin orca (kind of whale).",
    "The corset was boned with whale-bone taken from the mighty orc.",
    "Bestiary, British Library MS Harley 4751, c. 1200"
  ],
  [
    "Orchanet",
    "/ˈɔːrkənɛt/",
    "e",
    "Alkanet, a plant root yielding a red dye used for coloring textiles and lips.",
    "From Middle French orcanet, from Arabic al-ḥannā.",
    "She steeped orchanet roots in oil to create a crimson cosmetic dye.",
    "John Gerard, The Herball, 1597"
  ],
  [
    "Orchestics",
    "/ɔːrˈkɛstɪks/",
    "t",
    "The art of dancing, historically regulated by the court attire required for masques.",
    "From Greek orchestike (art of dancing).",
    "The heavy court mantles somewhat impeded their graceful orchestics.",
    "Quarterly Review, 1835"
  ],
  [
    "Orcival",
    "/ˈɔːrsɪvəl/",
    "m",
    "An archaic term for a specific type of heavy guild-regulated cord or braid.",
    "From Old French orcis, variant regional textile term.",
    "The hem was finished with a stout orcival of green silk.",
    "Medieval Guild Ordinances of Lincoln, 1405"
  ],
  [
    "Ordained",
    "/ɔːrˈdeɪnd/",
    "m",
    "Established by decree or custom; applied to standard military equipment and uniform livery.",
    "From Old French ordener, from Latin ordinare.",
    "Each archer was issued his ordained doublet of Kendal green.",
    "Parliamentary Rolls of Henry V, 1415"
  ],
  [
    "Ordinance",
    "/ˈɔːrdɪnəns/",
    "m",
    "A law or authoritative decree, especially those regulating wool lengths and cloth dimensions.",
    "From Old French ordinance, from Latin ordinare.",
    "The cloth did not measure to the royal ordinance of assize.",
    "Statute of Cloths, 1373"
  ],
  [
    "Orfrayed",
    "/ˈɔːrfreɪd/",
    "m",
    "Decorated or bordered with orfrays (gold embroidery).",
    "From orfray + -ed suffix.",
    "A rich cloak, wondrously orfrayed with gold and precious stones.",
    "Sir Gawain and the Green Knight, c. 1400"
  ],
  [
    "Organ-bellows",
    "/ˈɔːrɡən ˈbɛloʊz/",
    "e",
    "Metaphorical Elizabethan term for puffed, pleated hose or ballooning trunk-hose.",
    "From organ + bellows.",
    "His velvet trunk-hose swelled out like double organ-bellows.",
    "Thomas Dekker, The Gull's Hornbook, 1609"
  ],
  [
    "Organzine",
    "/ˈɔːrɡənziːn/",
    "t",
    "A highly twisted silk thread made from continuous filament silk, used for fine weaving.",
    "From Italian organzino.",
    "The loom was strung with fine Italian organzine for the damask weave.",
    "A Cyclopaedia of Commerce, 1843"
  ],
  [
    "Orismology",
    "/ˌɒrɪzˈmɒlədʒi/",
    "t",
    "The science of defining technical terms, highly prized by Victorian historians of ancient armor.",
    "From Greek horismos (definition) + -logy.",
    "A true study of medieval harness requires strict adherence to orismology.",
    "Journal of the British Archaeological Association, 1878"
  ],
  [
    "Paletot",
    "/ˈpælətoʊ/",
    "t",
    "A man's loose outer coat or cloak, popular in the Victorian era.",
    "French, from Middle French paletot",
    "He buttoned his heavy wool paletot against the biting London fog.",
    "Victorian Tailor's Journal"
  ],
  [
    "Pall",
    "/pɔːl/",
    "m",
    "A rich, fine cloth, often of velvet or silk, used to spread over a coffin, altar, or sovereign.",
    "Old English pæll, from Latin palla",
    "The bier was covered with a rich pall of crimson velvet embroidered with gold.",
    "Chronicles of Froissart"
  ],
  [
    "Pannier",
    "/ˈpæniər/",
    "e",
    "A basket-like framework of wire or whalebone worn under a skirt to expand it at the sides.",
    "French panier, from Latin panarium",
    "She struggled to pass through the narrow doorway while wearing her wide silk panniers.",
    "Elizabethan Court Inventories"
  ],
  [
    "Papelote",
    "/ˈpæpəloʊt/",
    "m",
    "A kind of wrapper, bandage, or spiced sweetmeat; also used for headwear.",
    "Old French papelote",
    "The knight's wound was bound securely with a clean papelote.",
    "Middle English Medical Tracts"
  ],
  [
    "Parament",
    "/ˈpærəmənt/",
    "m",
    "Rich crimson or ornamental hangings, furniture, or attire, especially ecclesiastical vestments.",
    "Old French parament, from Latin parare",
    "The chapel was adorned with costly paraments of gold tissue.",
    "Inventories of the Exchequer"
  ],
  [
    "Passement",
    "/ˈpæsmənt/",
    "e",
    "A kind of lace, braid, or gimp made of gold, silver, or silk thread used for trimming garments.",
    "French passement",
    "His doublet was richly edged with gold passement.",
    "Statute of Apparel 1562"
  ],
  [
    "Pattelet",
    "/ˈpætəlɛt/",
    "e",
    "A small collar, neckerchief, or chemisette worn by women in the 16th century.",
    "French diminutive of patte",
    "She wore a starched linen pattelet about her throat.",
    "Household Accounts of Queen Elizabeth"
  ],
  [
    "Pectoral",
    "/ˈpɛktərəl/",
    "m",
    "A piece of armor worn to protect the chest, or an ornamental breastplate.",
    "Latin pectorale",
    "The gleaming steel pectoral turned aside the glancing blow of the lance.",
    "Malory, Le Morte d'Arthur"
  ],
  [
    "Pelerine",
    "/ˈpɛlərɪn/",
    "t",
    "A woman's small cape with long ends hanging down the front, fashionable in the 19th century.",
    "French pelerine",
    "She wrapped a fur-trimmed pelerine around her shoulders for the carriage ride.",
    "Godey's Lady's Book"
  ],
  [
    "Pell",
    "/pɛl/",
    "m",
    "A skin or hide, especially with the fur or wool on; also a parchment roll.",
    "Latin pellis",
    "He wore a rough winter tunic made of sheep pell.",
    "Pipe Rolls of Henry II"
  ],
  [
    "Pennoncel",
    "/ˈpɛnənsɛl/",
    "m",
    "A small pennon or streamer attached to the top of a lance.",
    "Old French pennoncel",
    "A forest of fluttering pennoncels marked the vanguard of the army.",
    "Froissart's Chronicles"
  ],
  [
    "Persian",
    "/ˈpɜːrʒən/",
    "e",
    "A kind of light silk fabric imported from the East, used for linings or summer garments.",
    "Persian (place name)",
    "The doublet was lined throughout with fine blue persian.",
    "London Draper's Records"
  ],
  [
    "Pfife",
    "/faɪf/",
    "m",
    "An alternate archaic spelling of 'phife' or early form of military flute, often worn in cases.",
    "German Pfeife",
    "The soldiers marched to the shrill notes of the military pfife.",
    "Tudor Military Ordinances"
  ],
  [
    "Phaseolus",
    "/fəˈziːələs/",
    "t",
    "An archaic botanical and textile term referring to certain bean fibers spun into coarse fabrics.",
    "Latin phaseolus",
    "The rustic cloak was woven from coarse phaseolus yarn.",
    "Victorian Botanical Lexicon"
  ],
  [
    "Pheon",
    "/fiːən/",
    "h",
    "In heraldry, the barbed head of a dart or arrow, depicted with the point downward and inner edges serrated.",
    "Old French feon",
    "His coat of arms bore three silver pheons on a sable field.",
    "Complete Peerage of England"
  ],
  [
    "Philibeg",
    "/ˈfɪlɪbɛɡ/",
    "t",
    "The traditional Scottish Gaelic kilt, specifically the small kilt as opposed to the plaid.",
    "Scottish Gaelic feileadh beag",
    "He wore the tartan philibeg and a leather sporran.",
    "Sir Walter Scott, Waverley"
  ],
  [
    "Pickadill",
    "/ˈpɪkədɪl/",
    "e",
    "A large, stiffened collar or ruff with a scalloped or perforated edge, popular in the early 17th century.",
    "Spanish picadillo",
    "His starched lace pickadill framed his face sharply.",
    "Ben Jonson, The Alchemist"
  ],
  [
    "Picguard",
    "/ˈpɪkɡɑːrd/",
    "m",
    "An auxiliary piece of plate armor protecting the armpit or shoulder joint.",
    "French picard",
    "The harness was complete with matching picguards.",
    "Inventory of Tower of London"
  ],
  [
    "Pinafore",
    "/ˈpɪnəfɔːr/",
    "t",
    "A light apron worn over a dress, originally pinned to the front.",
    "From pin + afore",
    "The young girl wore a clean white pinafore over her frock.",
    "Charlotte Brontë, Jane Eyre"
  ],
  [
    "Pincushion",
    "/ˈpɪnkʊʃən/",
    "t",
    "A small pad used to hold pins, often elaborately embroidered by Victorian needlewomen.",
    "From pin + cushion",
    "Her sewing basket contained a velvet pincushion studded with steel pins.",
    "Mrs. Beeton's Book of Household Management"
  ],
  [
    "Pine",
    "/paɪn/",
    "m",
    "An early textile term for a fine woolen cloth or fabric.",
    "Old English pīnan",
    "The merchant displayed rolls of dyed pine from Flanders.",
    "Medieval Guild Records"
  ],
  [
    "Pioneer",
    "/ˌpaɪəˈnɪər/",
    "e",
    "A military foot soldier who dug trenches, repaired roads, and carried specialized tools and armor.",
    "Middle French pionnier",
    "The pioneers advanced with spades and heavy corselets.",
    "Elizabethan Military Muster"
  ],
  [
    "Placaert",
    "/ˈplækɑːrt/",
    "m",
    "An extra reinforcing plate of steel bolted over the breastplate or cuirass.",
    "Middle French placaert",
    "He bolted a heavy placaert to his breastplate for the tournament.",
    "Tournament Rules of René d'Anjou"
  ],
  [
    "Plackard",
    "/ˈplækɑːrd/",
    "m",
    "A medieval stomacher or the lower portion of a breastplate protecting the abdomen.",
    "Middle French placard",
    "The steel plackard was secured with leather straps.",
    "Armorers' Guild Records"
  ],
  [
    "Plaid",
    "/plæd/",
    "t",
    "A long piece of tartan cloth worn over the shoulder as part of Highland Scottish dress.",
    "Scottish Gaelic plaide",
    "He wrapped his heavy woolen plaid tightly against the Highland gale.",
    "Highland Regimental Orders"
  ],
  [
    "Plate",
    "/pleɪt/",
    "m",
    "Wrought metal armor collectively, as opposed to mail.",
    "Old French plate",
    "The knight was fully armed in shining plate from head to toe.",
    "Malory, Le Morte d'Arthur"
  ],
  [
    "Pleat",
    "/pliːt/",
    "m",
    "A fold made by doubling fabric upon itself and stitching or pressing it into place.",
    "Variant of plight",
    "Her wool kirtle was set in deep, regular pleats.",
    "Medieval Tailoring Accounts"
  ],
  [
    "Plight",
    "/plaɪt/",
    "m",
    "A fold, braid, or plait of hair or fabric.",
    "Old English pliht",
    "Her golden hair was woven into heavy plights.",
    "Chaucer, Troilus and Criseyde"
  ],
  [
    "Plissé",
    "/pliːˈseɪ/",
    "t",
    "A fabric treated with a chemical agent to produce a puckered, crinkled striped effect.",
    "French plissé",
    "The summer gown was fashioned from lightweight cotton plissé.",
    "Victorian Fashion Gazette"
  ],
  [
    "Plumasserie",
    "/ˌpluːməˈsɛəri/",
    "t",
    "The decorative art of preparing and arranging feathers for hats, costumes, and millinery.",
    "French plumasserie",
    "The court milliner was a master of plumasserie and artificial flowers.",
    "Paris Fashion Journal"
  ],
  [
    "Plume",
    "/pluːm/",
    "e",
    "A feather or cluster of feathers worn as an ornament on a helmet or hat.",
    "Old French plume",
    "A white ostrich plume nodded proudly from his velvet bonnet.",
    "Shakespeare, Richard II"
  ],
  [
    "Point",
    "/pɔɪnt/",
    "e",
    "A tagged lace or cord used in the 16th and 17th centuries to tie hose to doublets.",
    "Old French point",
    "His doublet lost a point while he was dancing.",
    "Shakespeare, 1 Henry IV"
  ],
  [
    "Poke",
    "/poʊk/",
    "m",
    "A long, wide, hanging sleeve characteristic of medieval gowns.",
    "Old Norse poki",
    "The lady's long pokes trailed gracefully as she walked.",
    "Chaucer, Parson's Tale"
  ],
  [
    "Police",
    "/pəˈliːs/",
    "t",
    "An archaic term for a woman's lined winter cloak or pelisse.",
    "French pelisse",
    "She wore a fur-lined police to brave the winter snow.",
    "Jane Austen, Letters"
  ],
  [
    "Polk",
    "/poʊk/",
    "t",
    "A short woolen jacket worn by women, popular during the polka craze in Victorian times.",
    "From the dance polka",
    "She paired her walking skirt with a knitted wool polk.",
    "Victorian Knitting Manual"
  ],
  [
    "Polynesian",
    "/ˌpɒlɪˈniːʒən/",
    "t",
    "An obsolete or eccentric 19th-century descriptive term for certain imported bark-cloth textiles.",
    "Derived from Polynesia",
    "The collector displayed examples of polynesian tapa cloth.",
    "Victorian Anthropological Society"
  ],
  [
    "Pompon",
    "/ˈpɒmpɒn/",
    "t",
    "A small spherical ball of feathers, wool, or silk used to decorate military shakos or hats.",
    "French pompon",
    "The infantrymen wore red woolen pompons on their shakos.",
    "British Army Uniform Regulations"
  ],
  [
    "Porpoint",
    "/ˈpɔːrpɔɪnt/",
    "m",
    "A quilted medieval doublet or padded jacket worn under armor or as outer dress.",
    "Old French pourpoint",
    "He wore a stout leather porpoint stitched with heavy thread.",
    "Chaucer, Sir Thopas"
  ],
  [
    "Quadrate",
    "/ˈkwɒdrət/",
    "e",
    "A square-shaped heraldic charge, or a piece of armor composed of four plates.",
    "Latin quadratus (squared)",
    "The shield bore a quadrate of gold upon an azure field.",
    "The Book of St. Albans"
  ],
  [
    "Quadrangle",
    "/ˈkwɒdræŋɡəl/",
    "t",
    "A four-sided ornamental border or trim used on Victorian ecclesiastical vestments.",
    "Latin quadrangulum",
    "The hem was finished with a stiff quadrangle of gold lace.",
    "Victorian Ecclesiastical Vestment Catalog"
  ],
  [
    "Quadrell",
    "/kwəˈdrɛl/",
    "m",
    "A square-headed crossbow bolt capable of piercing early plate armor.",
    "Old French quadrel",
    "He fitted a heavy quadrell to his steel windlass crossbow.",
    "Chronicles of the Barons' Wars"
  ],
  [
    "Quahog",
    "/ˈkɔːhɒɡ/",
    "t",
    "A shell bead used by early American colonists and traders for woven wampum belts.",
    "Narragansett poquahock",
    "The belt was intricately woven from purple quahog and whelk shells.",
    "Colonial Trade Journals"
  ],
  [
    "Quair",
    "/kwɛər/",
    "m",
    "A small quire or booklet of parchment patterns for tailoring and embroidery.",
    "Old French quayer",
    "She consulted her parchment quair for the new sleeve pattern.",
    "Medieval Tailor's Guild Records"
  ],
  [
    "Quakass",
    "/ˈkwɑːkəs/",
    "t",
    "A heavy woolen blanket or outer wrap used by Hudson's Bay traders.",
    "Native American origin via trade jargon",
    "He wrapped a thick quakass tightly about his shoulders against the gale.",
    "Fur Trader's Log"
  ],
  [
    "Qual",
    "/kwɔːl/",
    "m",
    "An obsolete term for a fringe, border, or ornamental hem.",
    "Middle High German quale",
    "The mantle was bordered with a rich qual of gold thread.",
    "Middle English Dictionary Records"
  ],
  [
    "Qualmi",
    "/ˈkwɑːmi/",
    "m",
    "A coarse, poorly woven linen fabric prone to shrinking.",
    "Middle English",
    "The peasant's tunic was fashioned from cheap qualmi cloth.",
    "Manorial Court Rolls"
  ],
  [
    "Quant",
    "/kwɒnt/",
    "e",
    "A light walking pole or staff, sometimes fitted with a metal shoe by travelers.",
    "Dialectal English",
    "He steadied his steps across the marsh with a stout ash quant.",
    "Elizabethan Traveler's Diary"
  ],
  [
    "Quarried",
    "/ˈkwɒrid/",
    "e",
    "Decorated with a pattern resembling diamond-shaped window panes.",
    "Middle English quarre",
    "Her doublet was quarried in velvet and satin panes.",
    "The Book of Courtesy"
  ],
  [
    "Quarte",
    "/kɑːrt/",
    "e",
    "A fencing guard position or a padded jerkin designed for fencing practice.",
    "French quarte",
    "He adjusted his padded fencing quarte before the bout.",
    "Silver's Paradoxes of Defence"
  ],
  [
    "Quartered",
    "/ˈkwɔːrtərd/",
    "m",
    "A garment made by sewing four contrasting colored panels together.",
    "Old French quarter",
    "The herald wore a quartered tunic of crimson and gold.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Quarterly",
    "/ˈkwɔːrtərli/",
    "h",
    "Divided into four equal parts, standard in complex heraldic shields.",
    "Middle English quarterli",
    "The shield is displayed quarterly, gules and argent.",
    "Complete Peerage"
  ],
  [
    "Quarto",
    "/ˈkwɔːrtoʊ/",
    "e",
    "A book format used for bound tailoring pattern books.",
    "Italian quarto",
    "He consulted the tailors' quarto for the latest doublet design.",
    "Stationers' Company Register"
  ],
  [
    "Quassia",
    "/ˈkwɑːʃə/",
    "t",
    "A bitter wood extract occasionally used in Victorian times to dye textiles grey.",
    "Named after Graman Quassi",
    "The yarn was steeped in quassia to achieve the drab military shade.",
    "Dyer's Practical Guide"
  ],
  [
    "Quater",
    "/ˈkwɑːtər/",
    "m",
    "An old spelling of quarter, frequently used in textile measurements.",
    "Latin quattuor",
    "A quater of fine Flemish cloth was purchased for the gown.",
    "Exeter Customs Accounts"
  ],
  [
    "Quatercousins",
    "/ˌkwɑːtərˈkʌzənz/",
    "e",
    "Relations within four degrees of kindred, entitled to wear family livery.",
    "French quatre cousins",
    "All quatercousins gathered at the manor for the feast in matching liveries.",
    "Paston Letters"
  ],
  [
    "Quaternion",
    "/kwəˈtɜːrniən/",
    "e",
    "A group of four decorative embroidery stitches forming a square pattern.",
    "Latin quaternio",
    "The collar was edged with a neat quaternion of gold knots.",
    "Elizabethan Needlework Manual"
  ],
  [
    "Quatorzain",
    "/ˌkwætɔːrˈzɛɪn/",
    "e",
    "A fourteen-line poem, sometimes embroidered onto the borders of courtly mantles.",
    "French quatorzain",
    "A delicate quatorzain was stitched along the inner hem.",
    "Court Poet's Miscellany"
  ],
  [
    "Quatsch",
    "/kwætʃ/",
    "t",
    "A heavy, clumsy piece of footwear or overshoe.",
    "German Quatsch",
    "He slipped his boots into thick leather quatsches for the snow.",
    "Victorian Alpine Journal"
  ],
  [
    "Queen",
    "/kwiːn/",
    "m",
    "A sovereign's consort, whose coronation robes set strict sumptuary standards.",
    "Old English cwēn",
    "The queen wore a mantle of ermine and purple velvet.",
    "Anglo-Saxon Chronicle"
  ],
  [
    "Queen-cake",
    "/ˈkwiːnkeɪk/",
    "t",
    "A small molded Victorian pastry, unrelated to textiles except by name.",
    "English origin",
    "Tea was served with delicate queen-cakes on porcelain plates.",
    "Mrs. Beeton's Book of Household Management"
  ],
  [
    "Queen-stitch",
    "/ˈkwiːnstɪtʃ/",
    "e",
    "A traditional diamond-shaped embroidery stitch popular in Elizabethan work.",
    "English origin",
    "The cushion cover was entirely worked in raised queen-stitch.",
    "Elizabethan Embroidery Patterns"
  ],
  [
    "Queer",
    "/kwɪər/",
    "e",
    "Odd, strange, or counterfeit (as in queer coin used to buy smuggled lace).",
    "German quer",
    "He was arrested for passing queer money at the draper's shop.",
    "Old Bailey Session Papers"
  ],
  [
    "Quenchless",
    "/ˈkwɛntʃlɪs/",
    "e",
    "Unstoppable; often describing the fiery crimson dye of royal garments.",
    "Old English cwencan",
    "She wore a gown of quenchless scarlet silk.",
    "Marlowe's Tamburlaine"
  ],
  [
    "Quercitron",
    "/ˈkwɜːrsɪtrɒn/",
    "t",
    "The bark of the black oak used to produce a yellow textile dye.",
    "Latin quercus + citrus",
    "The weaver used quercitron to dye the wool a bright golden yellow.",
    "Dyer's Assistant"
  ],
  [
    "Quercine",
    "/ˈkwɜːrsiːn/",
    "t",
    "Pertaining to oak trees or oak-gall ink used for marking textile bolts.",
    "Latin quercinus",
    "The weaver marked the fabric length with quercine gall-ink.",
    "Textile Manufacturing Journal"
  ],
  [
    "Quey",
    "/kweɪ/",
    "m",
    "A young cow or heifer, whose hide was prized for soft leather boots.",
    "Old Norse kvíga",
    "The shoemaker selected the finest quey hide for the king's riding boots.",
    "York Memorandum Book"
  ],
  [
    "Quibble",
    "/ˈkwɪbəl/",
    "e",
    "A petty evasion, often referring to sumptuary law loopholes regarding lace width.",
    "Latin quibus",
    "The tailor found a legal quibble to include extra gold fringe.",
    "State Papers Domestic"
  ],
  [
    "Quittance",
    "/ˈkwɪtəns/",
    "e",
    "A legal receipt or discharge, often given upon payment for expensive imported silks.",
    "Old French quitance",
    "The merchant handed over a formal quittance for the silk velvet.",
    "Merchant's Ledger"
  ],
  [
    "Rabat",
    "/ræˈbæt/",
    "e",
    "A linen band or collar, often falling over the shoulders, worn by men and clergymen in the 17th century.",
    "French abat-vent, from abattre.",
    "He adjusted his stiff white rabat before stepping into the court.",
    "Thomas Blount, Glossographia"
  ],
  [
    "Rabatyn",
    "/ˈræbəˌtɪn/",
    "m",
    "A kind of medieval hood, cape, or outer garment worn in the 15th century.",
    "Middle French rabatin.",
    "The nobleman wrapped a heavy rabatyn of blue velvet against the winter chill.",
    "Household Accounts of Edward IV"
  ],
  [
    "Rache",
    "/rætʃ/",
    "m",
    "An old English hunting dog that runs by scent, sometimes used metaphorically for heraldic beasts.",
    "Old English ræcc.",
    "Two swift raches bayed at the threshold of the manor house.",
    "Chaucer, The Canterbury Tales"
  ],
  [
    "Rack",
    "/ræk/",
    "m",
    "A medieval framework or stand, sometimes referring to a specialized wooden rack used for drying or stretching newly woven textiles.",
    "Middle English racken.",
    "The woolen cloth was hung upon the timber rack to dry evenly in the sun.",
    "Statutes of the Realm"
  ],
  [
    "Radical",
    "/ˈrædɪkəl/",
    "t",
    "In heraldry, pertaining to the root of a plant or tree depicted on a coat of arms.",
    "Latin radicalis, from radix.",
    "The shield bore an oak tree torn up by the radical.",
    "John Guillim, Display of Heraldrie"
  ],
  [
    "Rag",
    "/ræɡ/",
    "m",
    "An ancient term for a strip of cloth or a ragged garment worn by the impoverished.",
    "Old Norse rögg.",
    "He was clad in a wretched rag that scarcely covered his shoulders.",
    "Piers Plowman"
  ],
  [
    "Rag-man",
    "/ˈræɡˌmæn/",
    "e",
    "A dealer in old garments and textiles, or a maker of coarse rugs.",
    "Compound of rag and man.",
    "The rag-man collected remnants of silk and velvet from the tailor's floor.",
    "Elizabethan Street Cries"
  ],
  [
    "Raguly",
    "/ˈræɡjuːli/",
    "e",
    "In heraldry, notched, jagged, or ragged, resembling the trunk of a tree with lopped branches.",
    "Old French ragoulé.",
    "A cross raguly of gules was emblazoned upon the argent field.",
    "Sir Henry Spenser, Aspilogia"
  ],
  [
    "Rail",
    "/reɪl/",
    "m",
    "A woman's loose cloak, neck-covering, or upper garment, common in late medieval and Tudor times.",
    "Old English hrægel.",
    "She drew her white linen rail tightly about her neck.",
    "The Romaunt of the Rose"
  ],
  [
    "Rain-cloak",
    "/ˈreɪnˌkləʊk/",
    "m",
    "A heavy, water-repellent outer garment worn by travelers and soldiers during inclement weather.",
    "Compound of rain and cloak.",
    "His rain-cloak was sodden with the relentless autumn drizzle.",
    "Gawain and the Green Knight"
  ],
  [
    "Rajar",
    "/ˈreɪdʒər/",
    "m",
    "An archaic weaver or worker in striped or patterned silks.",
    "Old French raier.",
    "The master rajar delivered three bolts of striped sarcenet to the court.",
    "London Guild Records"
  ],
  [
    "Rake",
    "/reɪk/",
    "t",
    "The sloping edge or decorative border of a Victorian bonnet or hat brim.",
    "Middle English raken.",
    "The bonnet featured a sharp rake adorned with velvet ribbons.",
    "Victorian Millinery Journal"
  ],
  [
    "Rand",
    "/rænd/",
    "m",
    "A border, edge, or strip of leather used in medieval shoemaking and garment reinforcement.",
    "Middle English rand.",
    "The shoemaker stitched a sturdy rand along the sole of the boot.",
    "Craft Guild Ordinances"
  ],
  [
    "Range",
    "/reɪndʒ/",
    "e",
    "A row, tier, or orderly arrangement of plate armor plates or overlapping garment pleats.",
    "Old French ranger.",
    "The range of steel plates on his cuisse gleamed in the candlelight.",
    "Armory Inventories of Henry VIII"
  ],
  [
    "Rapier",
    "/ˈreɪpiər/",
    "e",
    "A slender, double-edged thrusting sword popular among Elizabethan gentlemen and courtiers.",
    "Spanish ropera.",
    "He laid his jeweled rapier upon the velvet table.",
    "William Shakespeare, Romeo and Juliet"
  ],
  [
    "Rasa",
    "/ˈreɪzə/",
    "m",
    "A kind of cheap, coarse medieval woolen cloth or serge.",
    "Medieval Latin rasa.",
    "The friar wore a habit made of coarse grey rasa.",
    "Monastic Account Rolls"
  ],
  [
    "Rascal",
    "/ˈræskəl/",
    "m",
    "Originally, a lean, inferior deer, or collectively, the common herd of inferior beasts in a park.",
    "Old French rascaille.",
    "The hunter passed by the prime stags to cull the rascal.",
    "The Master of Game"
  ],
  [
    "Ratchet",
    "/ˈrætʃɪt/",
    "m",
    "An early mechanical pawl device sometimes used to secure the windlass of heavy medieval crossbows.",
    "Old French racheta.",
    "He turned the ratchet until the iron bowstring clicked into place.",
    "Military Chronicles of the Hundred Years' War"
  ],
  [
    "Ratchment",
    "/ˈrætʃmɛnt/",
    "e",
    "An obsolete term for a decorative fringe, trimming, or embroidered border on a garment.",
    "Dialectal English.",
    "The doublet was finished with a gold ratchment along the hem.",
    "Household Inventories of the Elizabethan Era"
  ],
  [
    "Rath",
    "/ræθ/",
    "m",
    "An old term for a hill fort, or a woven wicker shield used by ancient foot soldiers.",
    "Old Irish ráth.",
    "They raised their wicker rath to deflect the volley of arrows.",
    "Irish Annals"
  ],
  [
    "Ray",
    "/reɪ/",
    "m",
    "A stripe or striped cloth, widely used in medieval English garments.",
    "Old French raye.",
    "He bought four yards of green and red ray for his new tunic.",
    "Assize of Cloth"
  ],
  [
    "Rayed",
    "/reɪd/",
    "m",
    "Patterned with stripes, or in heraldry, adorned with rays of light or beams.",
    "From ray.",
    "A rayed sunburst shone above the shield's chief.",
    "Lydgate, Troy Book"
  ],
  [
    "Real",
    "/riːəl/",
    "e",
    "A royal gold or silver coin, often sewn into the linings of expensive garments for safekeeping.",
    "Spanish real.",
    "He hid three reals within the quilted hem of his doublet.",
    "Marlowe, The Jew of Malta"
  ],
  [
    "Rebate",
    "/rɪˈbeɪt/",
    "e",
    "A groove or depression cut into armor plates or wooden looms to secure joints.",
    "Old French rebattre.",
    "The armorer cut a precise rebate to allow the gauntlet to pivot smoothly.",
    "Treatise on Plate Armor"
  ],
  [
    "Rebeck",
    "/ˈriːbɛk/",
    "m",
    "A medieval stringed musical instrument played with a bow, often carried by court minstrels.",
    "Arabic rabāb.",
    "The minstrel tuned his rebeck before beginning the ballad.",
    "Chaucer, Summoner's Tale"
  ],
  [
    "Reboation",
    "/ˌrɛboʊˈeɪʃən/",
    "e",
    "A loud, echoing roaring sound, sometimes used poetically for the clangor of armor in battle.",
    "Latin reboare.",
    "The reboation of swords upon shields shook the valley walls.",
    "Spenser, The Faerie Queene"
  ],
  [
    "Receiver",
    "/rɪˈsiːvər/",
    "m",
    "An administrative officer in charge of receiving royal textile revenues and wool taxes.",
    "Old French receveour.",
    "The king's receiver tallied the wool customs at the port of Bristol.",
    "Exchequer Rolls"
  ],
  [
    "Rechase",
    "/riːˈtʃeɪs/",
    "m",
    "To drive back game during a medieval hunt, or a horn signal sounded to recall the hounds.",
    "Old French rechasser.",
    "The master of the hunt blew the rechase as the stag turned back.",
    "The Book of St. Albans"
  ],
  [
    "Red",
    "/rɛd/",
    "m",
    "In medieval heraldry, known as Gules, but historically referred to simply as red or rud.",
    "Old English rēad.",
    "A banner of bright red silk bearing three leopards.",
    "Froissart's Chronicles"
  ],
  [
    "Red-pole",
    "/ˈrɛdˌpoʊl/",
    "t",
    "A Victorian bonnet style featuring a brightly dyed red crown or back panel.",
    "Compound of red and pole.",
    "She wore a smart red-pole bonnet for her Sunday walk.",
    "Godey's Lady's Book"
  ],
  [
    "Redress",
    "/rɪˈdrɛs/",
    "m",
    "The medieval restoration of damaged armor or the adjustment of improper guild textile weights.",
    "Old French redresser.",
    "The guild demanded immediate redress for the substandard wool.",
    "London Borough Archives"
  ],
  [
    "Redundancy",
    "/rɪˈdʌndənsi/",
    "t",
    "In Victorian fashion writing, the excessive use of lace, fringes, and ruffles on a gown.",
    "Latin redundantia.",
    "The critic complained of the redundancy of trimmings on the evening dress.",
    "The Queen, Lady's Newspaper"
  ],
  [
    "Reed",
    "/riːd/",
    "m",
    "The comb-like wire part of a medieval weaving loom used to space the warp threads evenly.",
    "Old English hrēd.",
    "The weaver adjusted the iron reed within the wooden batten.",
    "Medieval Loom Regulations"
  ],
  [
    "Reef",
    "/riːf/",
    "m",
    "A tucked portion of a sail or heavy garment gathered and tied down to shorten it.",
    "Old Norse rif.",
    "The sailors took a reef in the coarse canvas sail.",
    "Naval Ordinances of Henry V"
  ],
  [
    "Reflex",
    "/ˈriːflɛks/",
    "e",
    "A curved shape in Elizabethan composite bows or sword guards.",
    "Latin reflexus.",
    "The reflex of the bow gave the archer greater draw tension.",
    "Toxophilus by Roger Ascham"
  ],
  [
    "Regarder",
    "/rɪˈɡɑːrdər/",
    "m",
    "An ancient forest official appointed to inspect royal woods, venison, and timber rights.",
    "Old French regardeur.",
    "The regarder made his rounds to ensure no unlawful felling occurred.",
    "Forest Law Statutes"
  ],
  [
    "Regiment",
    "/ˈrɛdʒɪmənt/",
    "e",
    "Rule, government, or the specific uniform military dress of a body of soldiers.",
    "Latin regimen.",
    "The regiment wore matching doublets of buff leather and scarlet wool.",
    "State Papers of Elizabeth I"
  ],
  [
    "Remnant",
    "/ˈrɛmnənt/",
    "m",
    "A leftover piece or scrap of silk, linen, or wool cloth remaining after a garment is cut.",
    "Old French remanant.",
    "She pieced together a patchwork quilt from tailor's remnants.",
    "Wills and Inventories of the Northern Counties"
  ],
  [
    "Renaissance",
    "/ˈrɛnəˌsɑːns/",
    "t",
    "A Victorian term applied retrospectively to the revival of 16th-century slashed garment styles.",
    "French renaissance.",
    "The costume ball featured gowns inspired by the Tudor renaissance.",
    "Victorian Historical Review"
  ],
  [
    "Rendle",
    "/ˈrɛndəl/",
    "m",
    "An old culinary or processing term for the inner skin or membrane of an animal used in leatherwork.",
    "Middle English.",
    "The tanner cleaned the rendle before treating the hide for armor straps.",
    "Leather-seller Guild Records"
  ],
  [
    "Rep",
    "/rɛp/",
    "t",
    "A durable Victorian textile featuring distinct transverse ribbed cords, used for upholstery and dresses.",
    "French reps.",
    "The parlor suite was upholstered in heavy green rep.",
    "The Lady's Magazine"
  ],
  [
    "Tasset",
    "/ˈtæsɪt/",
    "m",
    "One of a series of overlapping steel plates attached to the lower edge of a cuirass to protect the thighs.",
    "Middle English, from Old French tasset",
    "Fasten your tassets tightly before you mount the destrier.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Tike",
    "/taɪk/",
    "e",
    "A small case or covering for a pillow, bolster, or feather bed made of heavy linen or ticking.",
    "Old Norse tík",
    "She stuffed the goose feathers into the clean linen tike.",
    "The Household Books of Lord William Howard"
  ],
  [
    "Tire",
    "/taɪər/",
    "e",
    "An elaborate headdress or attire for the head worn by women of high rank in the Elizabethan era.",
    "Middle English, abbreviation of attire",
    "Her golden hair was dressed with a costly tire of pearls.",
    "William Shakespeare, The Merry Wives of Windsor"
  ],
  [
    "Tinsel",
    "/ˈtɪnsəl/",
    "m",
    "A rich, sparkling cloth woven with gold or silver thread, rather than modern plastic strips.",
    "Middle English, from Old French etincelle",
    "A gown of crimson velvet trimmed with glittering tinsel.",
    "Inventory of Henry VIII"
  ],
  [
    "Tabor",
    "/ˈteɪbər/",
    "m",
    "A small, narrow-bodied drum played with one stick, often accompanying a pipe.",
    "Middle English, from Old French tabour",
    "The minstrel beat his tabor merrily as the procession passed.",
    "Sir Gawain and the Green Knight"
  ],
  [
    "Tache",
    "/tætʃ/",
    "m",
    "A fastening, clasp, buckle, or loop used to secure garments or armor.",
    "Middle English, from Old French tache",
    "The golden taches of the mantle were set with rubies.",
    "Wycliffe Bible"
  ],
  [
    "Tailor",
    "/ˈteɪlər/",
    "m",
    "One whose occupation is making outer garments, historically also called a tailor or tailor-cutter.",
    "Anglo-Norman taillour",
    "Send for the tailor to measure me for a velvet cloak.",
    "Geoffrey Chaucer, The Parson's Tale"
  ],
  [
    "Talar",
    "/ˈteɪlɑːr/",
    "t",
    "A long robe or garment reaching down to the ankles.",
    "Latin talaris, from talus (ankle)",
    "He wore a scholarly talar of black bombazine.",
    "Victorian Ecclesiastical Vestments"
  ],
  [
    "Tammy",
    "/ˈtæmi/",
    "t",
    "A glazed woolen cloth, or a light woolen fabric mixed with cotton, used for petticoats and linings.",
    "French estamine",
    "Her under-skirt was made of durable red tammy.",
    "Thomas Hardy, Far from the Madding Crowd"
  ],
  [
    "Tang",
    "/tæŋ/",
    "m",
    "The projecting part of a blade, such as a sword or dagger, that enters the hilt.",
    "Old Norse tangi",
    "The blacksmith hammered the glowing tang into the ashwood handle.",
    "Anglo-Saxon Chronicle"
  ],
  [
    "Tantony",
    "/ˈtæntəni/",
    "e",
    "A small bell, specifically the pig's bell associated with St. Anthony, or a small bell on a falcon.",
    "Corruption of Saint Anthony",
    "The falcon wore a silver tantony upon its leg.",
    "Ben Jonson, Bartholomew Fair"
  ],
  [
    "Target",
    "/ˈtɑːrgɪt/",
    "m",
    "Originally a diminutive of targe, a light round shield or buckler.",
    "Middle English, from Old French targette",
    "The archers pierced his target with three clothyard shafts.",
    "Sir Thomas Malory, Le Morte d'Arthur"
  ],
  [
    "Tartan",
    "/ˈtɑːrtən/",
    "m",
    "A woolen cloth woven in geometric patterns of multiple colors, traditional to the Scottish Highlands.",
    "Gaelic / French tartane",
    "His plaid was of fine red and green tartan.",
    "Acts of the Scottish Parliament"
  ],
  [
    "Tat",
    "/tæt/",
    "t",
    "To make delicate lace by knotting thread with a shuttle and fingers (tatting).",
    "Origin uncertain, Victorian era",
    "She sat by the window to tat lace for her collar.",
    "Charlotte Brontë, Villette"
  ],
  [
    "Tatting",
    "/ˈtætɪŋ/",
    "t",
    "The act or art of making knotted lace using a small shuttle.",
    "Derived from tat",
    "Her fingers were nimble at tatting intricate edgings.",
    "Mrs. Gaskell, Cranford"
  ],
  [
    "Taudit",
    "/ˈtɔːdɪt/",
    "m",
    "A narrow ribbon or lace used for tying garments.",
    "Middle English",
    "Secure the doublet points with a sturdy taudit.",
    "Medieval Household Ordinances"
  ],
  [
    "Taunt",
    "/tɔːnt/",
    "n",
    "In nautical and textile usage, towering or very high; tall and slender (of masts or headdress).",
    "French tant haut",
    "The lady wore a taunt steeple hat of Flemish velvet.",
    "Paston Letters"
  ],
  [
    "Tear",
    "/tɪər/",
    "m",
    "A rent, rip, or fissure in a textile fabric.",
    "Old English tēaran",
    "He mended the tear in his woolen jerkin with coarse thread.",
    "Chaucer, The Reeve's Tale"
  ],
  [
    "Teasel",
    "/ˈtiːzəl/",
    "m",
    "The dried flower head of the teasel plant, used historically to raise the nap on woolen cloth.",
    "Old English tǣsl",
    "The weaver used prickly teasels to dress the broadcloth.",
    "Statutes of the Realm"
  ],
  [
    "Teazle",
    "/ˈtiːzəl/",
    "m",
    "Alternative spelling of teasel, used in cloth-making.",
    "Old English tǣsl",
    "Baskets filled with teazles stood by the loom.",
    "Medieval Guild Records"
  ],
  [
    "Ted",
    "/tɛd/",
    "m",
    "To spread out freshly mowed grass for drying.",
    "Old Norse teðja",
    "The maidens went out to ted the hay in the meadow.",
    "Piers Plowman"
  ],
  [
    "Teest",
    "/tiːst/",
    "m",
    "A tester or canopy over a bed.",
    "Old French teste",
    "The carved wooden teest was hung with green damask curtains.",
    "Will of a Medieval Merchant"
  ],
  [
    "Teg",
    "/tɛɡ/",
    "m",
    "A sheep in its second year, valued for its fleece.",
    "Etymology obscure",
    "The shearer clipped the wool from twenty prime tegs.",
    "Manor Rolls of Wakefield"
  ],
  [
    "Templet",
    "/ˈtɛmplɪt/",
    "m",
    "A pattern, mold, or gauge used by tailors and armorers to shape metal or fabric.",
    "Middle English, diminutive of temple",
    "The armorer used an iron templet to shape the breastplate.",
    "Guild of Armourers Records"
  ],
  [
    "Tenacity",
    "/təˈnæsɪti/",
    "t",
    "The physical property of a textile fiber to resist tension without breaking.",
    "Latin tenacitas",
    "The high tenacity of the flax thread made it ideal for sailcloth.",
    "Victorian Textile Science"
  ],
  [
    "Tent",
    "/tɛnt/",
    "m",
    "A roll of lint or soft material used by surgeons to dilate a wound or apply dressing.",
    "Latin tentare",
    "Apply a clean linen tent dipped in honey to the sword cut.",
    "Medieval Surgical Treatise"
  ],
  [
    "Tercet",
    "/tɜːrˈsɛt/",
    "m",
    "In heraldry, a group of three charges arranged together.",
    "Old French tercet",
    "The shield bore a tercet of golden lions.",
    "Heraldic Visitation Rolls"
  ],
  [
    "Tergal",
    "/ˈtɜːrɡəl/",
    "t",
    "Pertaining to the back; in armor, protection worn on the back.",
    "Latin tergum",
    "The knight fastened the tergal plate over his hauberk.",
    "Historical Armor Lexicon"
  ],
  [
    "Tether",
    "/ˈtɛðər/",
    "m",
    "A rope or chain by which an animal is fastened to restrict its movement.",
    "Old Norse tjóðr",
    "He secured his destrier by a leather tether.",
    "Cursor Mundi"
  ],
  [
    "Tetrad",
    "/ˈtɛtræd/",
    "e",
    "A group of four elements, sometimes used in heraldic quarters or textile patterns.",
    "Greek tetras",
    "The crest displayed a tetrad of heraldic symbols.",
    "Elizabethan Heraldic Manuscript"
  ],
  [
    "Textile",
    "/ˈtɛkstəl/",
    "m",
    "Any cloth or goods produced by weaving, knitting, or felting.",
    "Latin textilis",
    "Flanders was renowned for exporting the finest textiles in Christendom.",
    "Chronicles of Froissart"
  ],
  [
    "Thill",
    "/θɪl/",
    "m",
    "One of the two shafts of a cart or carriage between which the horse is harnessed.",
    "Old English ðille",
    "The cart broke its thill upon the muddy track.",
    "Gawain Poet"
  ],
  [
    "Thimble",
    "/ˈθɪmbəl/",
    "m",
    "A small metal or plastic cap worn to protect the finger when sewing.",
    "Old English þymel",
    "She dropped her silver thimble upon the rushes.",
    "Piers Plowman"
  ],
  [
    "Thirteener",
    "/ˈθɜːrtiːnər/",
    "e",
    "An old term for a coarse woolen blanket or fabric of inferior grade.",
    "English dialect",
    "They slept beneath rough thirteeners in the barracks.",
    "Elizabethan Military Accounts"
  ],
  [
    "Thistle",
    "/ˈθɪsəl/",
    "m",
    "A prickly plant used frequently as a heraldic badge, notably for Scotland.",
    "Old English þistel",
    "The collar of the Order of the Thistle was crafted in gold.",
    "Scottish Royal Accounts"
  ],
  [
    "Thong",
    "/θɔːŋ/",
    "m",
    "A narrow strip of leather used for fastening armor, shoes, or garments.",
    "Old English þwang",
    "He tied his greaves with leather thongs.",
    "Beowulf"
  ],
  [
    "Thread",
    "/θrɛd/",
    "m",
    "A fine cord of spun cotton, flax, silk, or wool used in sewing and weaving.",
    "Old English þrǣd",
    "She pulled a length of golden thread through the linen.",
    "Chaucer, Legend of Good Women"
  ],
  [
    "Thrum",
    "/θrʌm/",
    "m",
    "The fringe of warp threads left remaining in a loom after a web is cut off.",
    "Old English þrum",
    "He swept up the leftover thrums from the workshop floor.",
    "Medieval Weavers Guild Statutes"
  ],
  [
    "Tick",
    "/tɪk/",
    "m",
    "A strong, closely woven linen or cotton fabric used to cover feather beds and mattresses.",
    "Middle English tike",
    "The heavy blue-and-white tick held the straw securely.",
    "Household Inventory of Edward III"
  ]
];
