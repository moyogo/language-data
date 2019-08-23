const THOUSAND = 1000;
const MILLION = THOUSAND * THOUSAND;

export default function() {
  return [{
    language: 'Aja',
    region: 'African',
    speakers: 550 * THOUSAND,
    pangrams: ['Agbetɔwo pleŋu vanɔ gbɛmɛ ko vovoɖeka gbeswɛgbeswɛ, sɔto amɛnyinyi ko acɛwo gomɛ; wo xɔnɔ susunywin ko jimɛnywi so esexwe. Wo ɖo a wa nɔvi ɖaɖa wowo nɔnɔwo gbɔ. ']
  },
  {
    language: 'Aghem',
    region: 'African',
    speakers: 27000,
    specialCharacters: 'À Â È Ê Ì Î Ò Ô Ù Û à â è ê ì î ò ô ù û Ā ā Ē ē Ě ě Ī ī Ŋ ŋ Ō ō Ū ū Ɔ Ɛ Ɨ Ǎ ǎ Ǐ ǐ Ǒ ǒ Ǔ ǔ Ʉ ɔ ɛ ɨ ʉ ​ʔ'
  },
  {
    language: 'Akan',
    region: 'African',
    speakers: 32 * MILLION,
    specialCharacters: 'Ɛ ɛ Ɔ ɔ Á á É é Ɛ́ ɛ́ Í í Ḿ ḿ Ń ń Ó ó Ɔ́ ɔ́ Ú ú À à È è Ɛ̀ ɛ̀ Ì ì M̀ m̀ Ǹ ǹ Ò ò Ɔ̀ ɔ̀ Ù ù',
    paragraphs: ['Dèdé: Èhé nà Kégyétíá wó? Méfá kwáń béǹ só ákó hó? Kyèí: Kò w’àníḿ tèè kòsí sè wóbéhúnú sòtóò bí áà yéátwéré àníḿ sé ‘Ònyàmé túmí’.']
  },
  {
    language: 'Asturian',
    region: 'European',
    speakers: 351000,
    specialCharacters: 'ḷḷeite ḷḷinu ḥou, ḥenu, ḥuera',
    paragraphs: ['Tolos seres humanos nacen llibres y iguales en dignidá y drechos y, pola mor de la razón y la conciencia de so, han comportase hermaniblemente los unos colos otros.']
  },
  {
    language: 'Azeri',
    altNames: ['Azerbaijani'],
    region: 'European',
    speakers: 23 * MILLION,
    pangrams: ['Zəfər, jaketini də papağını da götür, bu axşam hava çox soyuq olacaq.']
  },
  {
    language: 'Basaa',
    altNames: ['Basa'],
    region: 'African',
    speakers: 300 * THOUSAND,
    specialCharacters: 'Â È É Ê Ì Í Î Ò Ó Ô Ù Ú Û à á â è é ê ì í î ò ó ô ù ú û Ā ā Ē ē Ě ě Ī ī Ń ń Ŋ ŋ Ō ō Ū ū Ɓ ɓ Ɔ ɔ Ɛ ɛ Ǎ ǎ Ǐ ǐ Ǒ ǒ Ǔ ǔ Ǹ ǹ'
  },
  {
    language: 'Belarusian',
    region: 'European',
    speakers: 7.6 * MILLION,
    script: 'Cyrl',
    pangrams: ['Літаратурная мова абслугоўвае (паралельна з рускай) розныя сферы дзейнасці беларускага народа, з\'яўляецца поліфункцыянальнай.']
  },
  {
    language: 'Berber languages',
    region: 'African',
    speakers: 0,
    script: 'Latn',
    specialCharacters: 'Č Ḍ Ɛ Ǧ Ɣ Ḥ Ř Ṛ Ṣ Ṭ Ẓ.'
  },
  {
    language: 'Breton',
    region: 'European',
    speakers: 210 * THOUSAND,
    pangrams: ['Yec’hed mat Jakez ! Skarzhit ar gwerennoù-mañ, kavet e vo gwin betek fin ho puhez.']
  },
  {
    language: 'Bulgarian',
    region: 'European',
    speakers: 9 * MILLION,
    script: 'Cyrl',
    pangrams: ['Фучейки и хълцайки, кьоравият грухтящ шопар жадно стъпка зюмбюлите.', 'Ах чудна българска земьо, полюшвай цъфтящи жита.', 'Жълтата дюля беше щастлива, че пухът, който цъфна, замръзна като гьон.', 'Под южно дърво, цъфтящо в синьо, бягаше малко пухкаво зайче. ']
  },
  {
    language: 'Catalan',
    region: 'European',
    speakers: 4.1 * MILLION,
    pangrams: ['«Dóna amor que seràs feliç!». Això, il·lús company geniüt, ja és un lluït rètol blavís d’onze kWh. aïllament']
  },
  {
    language: 'Croatian',
    region: 'European',
    speakers: 5.6 * MILLION,
    pangrams: ['Gojazni đačić s biciklom drži hmelj i finu vatu u džepu nošnje.']
  },
  {
    language: 'Czech',
    speakers: 10 * MILLION,
    region: 'European',
    pangrams: ['Loď čeří kýlem tůň obzvlášť v Grónské úžině.'],
    gotchas: [{
      topic: 'vertical caron',
      tags: ['metrics'],
      tests: [
        'Loďka ďábelska ďatlov ďábel objížďka buďto dešť loď',
        'loď. loď, loď: loď; loď- loď?'
      ]
    }, {
      topic: 'kruzek congruent with Scandinavian ring above',
      tags: ['congruency'],
      tests: ['Håkanův? ']
    }]
  },
  {
    language: 'Dagbani',
    region: 'African',
    speakers: 1160 * THOUSAND,
    specialCharacters: 'A B CH D E Ɛ F G GB Ɣ H I J K KP L M N NY Ŋ O Ɔ P R S SH T U W Y Z Ʒ ’ a b ch d e ɛ f g gb ɣ h i j k kp l m n ny ŋ o ɔ p r s sh t u w y z ʒ ’ '
  },
  {
    language: 'Danish',
    speakers: 5.5 * MILLION,
    region: 'European',
    pangrams: ['Quizdeltagerne spiste jordbær med fløde, mens cirkusklovnen Walther spillede på xylofon.']
  },
  {
    language: 'Duala',
    region: 'African',
    speakers: 87000,
    specialCharacters: 'Á É Í Ó Ú á é í ó ú Ŋ ŋ Ū ū Ɓ Ɔ Ɗ Ɛ ɓ ɔ ɗ ɛ'
  },
  {
    language: 'Dutch',
    region: 'European',
    speakers: 21 * MILLION,
    pangrams: ['Pa’s wijze lynx bezag vroom het fikse aquaduct.'],
    gotchas: [{
      topic: 'IJ',
      tags: ['ligature', 'optional'],
      tests: ['IJburg Rijksmuseum']
    }, {
      topic: 'ij-acute',
      tags: ['ligature', 'localization', 'contextual'],
      tests: ['Wíjze']
    }]
  },
  {
    language: 'Ewe',
    region: 'African',
    speakers: 6.5 * MILLION,
    pangrams: ['Ʋu axaléɖiƒe. Wo dona Eʋegbe le Ghana kple Togo kpakple Benin Dahumey dukɔ siwo le Afrika ƒe ɣetoɖoƒe lɔƒo la me. Gbe gbɔgblɔ siwo teɖe Eʋegbe ŋu wonye Fɔŋgbe kpakple Adzágbe. Esiawo katã wonye Gbe siwo doƒome kple Ʋegbe. Ŋɔŋlɔdzesi blaetɔ̃ ye le Eʋegbe me.'],
    specialCharacters: 'A a Á á À à Ã ã B b D d Ɖ ɖ E e É é È è Ẽ ẽ Ɛ ɛ F f Ƒ ƒ G g Ɣ ɣ H h X x I i Í í Ì ì Ĩ ĩ K k L l M m N n Ŋ ŋ O o Ó ó Ò ò Õ õ Ɔ ​ ɔ P p R r S s T t U u Ú ú Ù ù Ũ ũ V v Ʋ ʋ W w Y y Z z'
  },
  {
    language: 'Ewondo',
    region: 'African',
    speakers: 580 * THOUSAND,
    pangram: '',
    specialCharacters: 'À Á Â È É Ê Ì Í Î Ò Ó Ô Ù Ú Û à á â è é ê ì í î ò ó ô ù ú û Ě ě Ń ń Ŋ ŋ Ɔ Ə Ɛ Ǎ ǎ Ǐ ǐ Ǒ ǒ Ǔ ǔ Ǹ ǹ ɔ ə ​ɛ'
  },
  {
    language: 'English',
    region: 'European',
    speakers: 360 * MILLION,
    pangrams: ['Amazingly few discotheques provide jukeboxes.', 'Why shouldn’t a quixotic Kazakh vampire jog barefoot?', 'Battle of Thermopylae: Quick javelin grazed wry Xerxes.', 'Quick zephyrs blow, vexing daft Jim.', 'Two driven jocks help fax my big quiz.', 'Show mangled quartz flip vibe exactly.', 'Public junk dwarves hug my quartz fox.', 'Jumbling vext frowzy hacks PDQ.', 'Nymphs blitz quick vex dwarf jog.', 'Schwarzkopf vexed Iraq big-time in July.', 'Boxers had zap of gay jock love, quit women.', 'Fix problem quickly with galvanized jets.', 'Watch “Jeopardy!”, Alex Trebek’s fun TV quiz game.'],
    letterings: ['Attaboy Bubble Cache Dwindle Essence Flyleaf Grunge Headache Infinite Jinjer Kinky Lonely Murmur Norwegian Officious Purpose Qashqai Rarity Sognefjord’s Testy Usual Vivian Woodwind Xerxes Yuppy Zanzibar'],
    paragraphs: ['Unicode just made its new emoji list for 2019 official, and the update adds 230 new symbols, including a yawning face, white heart, and pinching hand symbol.',
      'This nomination will be examined in 2009 by the responsible UNESCO Committee.',
      'Reinstate the 17 trainees to flight status. — I will...but I just want you to understand...that I-',
      'Had to be me. Someone else might have gotten it wrong.',
      'Galactica, the Cylon is now flying formation with me! Right above my head. This thing is acting weird...'
    ],
    numerals: ['Unicode just made its new emoji list for 2019 official, and the update adds 230 new symbols, including a yawning face, white heart, and pinching hand symbol.', 'Though the list of new emoji has now been finalized, it will still be several months before the update hits your phone. Unicode will release the update in March, but it will take some time after that for apps and operating systems to roll out support for the new characters. Updates will start hitting in April and continue through the end of the year, according to Emojipedia.'],
    smallcaps: ['Private Johnson went <span style="font-variant-caps: all-small-caps;">AWOL</span> after he received an order to join major combat forces in Iraq.', 'Developing apps requires a knowledge of <span style="font-variant-caps: all-small-caps;">html</span> and JavaScript, and that\'s it.', 'This nomination will be examined in 2009 by the responsible <span style="font-variant-caps: all-small-caps;">UNESCO</span> Committee.'],
  },
  {
    language: 'Esperanto',
    speakers: 1000,
    pangrams: ['Eble ĉiu kvazaŭ-deca fuŝĥoraĵo ĝojigos homtipon.']
  },
  {
    language: 'Estonian',
    region: 'European',
    speakers: 1.1 * MILLION,
    pangrams: ['Põdur Zagrebi tšellomängija-följetonist Ciqo külmetas kehvas garaažis']
  },
  {
    language: 'Finnish',
    region: 'European',
    speakers: 5 * MILLION,
    pangrams: ['Fahrenheit ja Celsius yrjösivät Åsan backgammon-peliin, Volkswagenissa, daiquirin ja ZX81:n yhteisvaikutuksesta.']
  },
  {
    language: 'Fon',
    region: 'African',
    speakers: 2.2 * MILLION,
    pangrams: ['Ee nyi ɖɔ hɛnnu ɖokpo mɛ ɔ, mɛ ɖokpoɖokpo ka do susu tɔn, bɔ acɛ ɖokpo ɔ wɛ mɛbi ɖo bo e ma sixu kan fɛn kpon é ɖi mɛɖesusi jijɛ, hwɛjijɔzinzan, kpodo fifa ni tiin nu wɛkɛ ɔ bi e ɔ.'],
    todo: 'todo',
    _letterings: ['Gbeta Gbɛ Ɔ Bi Tɔn Ee Ɖɔ Xó Dó Acɛ E Gbɛtɔ Ɖó Kpodo Sisi E Ɖo Na Ɖó N\'I Lɛ Kpo Wu E Wexwle']
  },
  {
    language: 'French',
    speakers: 75 * MILLION,
    region: 'European',
    pangrams: ['Voix ambiguë d’un cœur qui au zéphyr préfère les jattes de kiwi.'],
    html: [`M<span style="font-feature-settings: 'sups' 1;">lle</span> Orane`],
    gotchas: [{
      topic: 'iï ïl',
      tags: ['metrics'],
      tests: ['thaïlandais aïllament acneïforme sjiïete thaïlandais aïllament increïblement caraïbes caraïbische privilegiïn geïdentifiseer haïfa geïllustreerd tchaïkovski']
    }, {
      topic: "d'A L'A l'A",
      tags: ['metrics'],
      tests: ["curly quotes: d’A L’A l’A, straight quotes: d'A L'A l'A"],
    }]
  },
  {
    language: 'West Frisian',
    altNames: ['Western Frisian'],
    region: 'European',
    speakers: 470 * THOUSAND,
    pangrams: ['Alve bazige froulju wachtsje op dyn komst'],
    specialCharacters: '​Á Ä É Ë Ì Ï Ò Ö Ú Ü á ä é ë ì ï ò ö ú ü Ỳ ỳ'
  },
  {
    language: 'Fula',
    // altNames: ['Fulah'],
    region: 'African',
    speakers: 24 * MILLION,
    pangrams: ['Musidɓe tedduɓe, Fulɓe e leƴƴi kala gonɗi e Fuuta, haa Dakaar, e gure Senegaal kala, mi salminii on calminaali tedduɗi. abɓcdɗefghijklmnŋɲ(ñ)oprstuwyƴ\'ɠ ABƁCDƊEFGHIJKLMNŊƝ(Ñ)OPRSTUWYƳ\'Ɠ']
  },
  {
    language: 'German',
    speakers: 95 * MILLION,
    region: 'European',
    pangrams: ['Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich']
  },
  {
    language: 'Greek',
    altNames: ['Modern Greek'],
    script: 'Grek',
    speakers: 11.5 * MILLION,
    region: 'European',
    speakers: 12 * MILLION,
    pangrams: ['Ξεσκεπάζω τὴν ψυχοφθόρα βδελυγμία.', 'Ζαφείρι δέξου πάγκαλο, βαθῶν ψυχῆς τὸ σῆμα.', 'Ταχίστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός.', 'Διαφυλάξτε γενικά τη ζωή σας από βαθειά ψυχικά τραύματα.'],
    paragraphs: [],
    letterings: ['Αμαζόνιος Βραβεία Γουάνγκ Διόδωρος Εργαλεία Ζεμτσούζινα Ηγησιππος Θεοξενιος Ιστορία Καζακστάν Λαμπροκλης Μάρμαρο Νίζνι Ξέρξης Οινομαχος Περσέπολη Ροτόρ Σθενελαος Ταυτιστεί Υπάρχουν Φρολόφ Χοχλόφ Ψαρρής Ωφελιων'],
    numbers: ['Έχει θερμοκρασία τήξης 304°C και θερμοκρασία βρασμού 1473°C.', 'Το φυσικό οξυγόνο αποτελείται από τρία (3) σταθερά ισότοπα: το <sup>16</sup>O (σε ποσοστό 99,762&nbsp;%), το <sup>17</sup>O και το <sup>18</sup>O.'],
    alphabet: 'Α α Β β Γ γ Δ δ Ε ε Ζ ζ Η η Θ θ Ι ι Κ κ Λ λ Μ μ Ν ν Ξ ξ Ο ο Π π Ρ ρ Σ σ ς Τ τ Υ υ Φ φ Χ χ Ψ ψ Ω ω'
  },
  {
    language: 'Guarani',
    script: 'Latn',
    speakers: 4.6 * MILLION,
    region: 'American',
    paragraphs: ['Mayma yvypóra ou ko yvy ári iñapyty\'yre ha eteĩcha tecoruvicharendá ha acatúape jeguerekópe; ha ikatu rupi oikuaa ñetéva ha añete\'yva, iporãva ha ivaíva, tekotevẽ pehenguéicha oiko oñondivekuéra.'],
    alphabet: 'A a Ã ã Ch ch E e Ẽ ẽ G g G̃ g̃ H h I i Ĩ ĩ J j K k L l M m Mb mb N n Nd nd Ng ng Nt nt Ñ ñ O o Õ õ P p R r Rr rr S s T t U u Ũ ũ V v Y y Ỹ ỹ \''
  },
  {
    language: 'Hausa',
    region: 'African',
    speakers: 34 * MILLION,
    paragraphs: ['Nonuwana sun cika sun yi nauyi Suna begen hannayenka Kai kadai ka iya rikesu Tamkar kana rike da kwai Kai ka iya murza su kamar amaro Ka iya shan su kamar lemu Yaya zanyi da raina?', 'Ai ba sauran budurci a tare da nonuwa na Tun ranar da ka ba su ʼyanci Basu san kowa ba sai kai.'],
    alphabet: 'A a B b Ɓ ɓ C c D d Ɗ ɗ E e F f G g H h I i J j K k Ƙ ƙ L l M m N n O o R r R̃ r̃ S s Sh sh T t Ts ts U u W w Y y (Ƴ ƴ) Z z ʼ'
  },
  {
    language: 'Hungarian',
    speakers: 13 * MILLION,
    region: 'European',
    pangrams: ['Jó foxim és don Quijote húszwattos lámpánál ülve egy pár bűvös cipőt készít.']
  },
  {
    language: 'Icelandic',
    region: 'European',
    speakers: 300 * THOUSAND,
    pangrams: ['Sævör grét áðan því úlpan var ónýt.', 'Svo hölt, yxna kýr þegði jú um dóp í fé á bæ.'],
    gotchas: [{
      topic: 'fþ',
      tags: ['metrics', 'ligature'],
      tests: ['hafþór']
    }]
  },
  {
    language: 'Igbo',
    region: 'African',
    speakers: 25 * MILLION,
    pangrams: ['Nne, nna, wepụ he’l’ụjọ dum n’ime ọzụzụ ụmụ, vufesi obi nye Chukwu, ṅụrịanụ, gbakọọnụ kpaa, kwee ya ka o guzoshie ike; ọ ghaghị ito, nwapụta ezi agwa.']
  },
  {
    language: 'Indonesian',
    speakers: 43 * MILLION,
    region: 'Asian',
    pangrams: ['Muharjo seorang xenofobia universal yang takut pada warga jazirah, contohnya Qatar.']
  },
  {
    language: 'Irish',
    speakers: 150 * THOUSAND,
    region: 'European',
    pangrams: ['Ċuaiġ bé ṁórṡáċ le dlúṫspád fíorḟinn trí hata mo ḋea-ṗorcáin ḃig']
  },
  {
    language: 'Italian',
    region: 'European',
    speakers: 59 * MILLION,
    pangrams: ['Pranzo d’acqua fa volti sghembi.'],
    gotchas: [{
      topic: "d'A L'A l'A",
      tags: ['metrics'],
      tests: ["curly quotes: d’A L’A l’A, straight quotes: d'A L'A l'A"],
    }]
  },
  {
    language: 'Jula',
    altNames: ['Dyula', 'Dioula'],
    region: 'African',
    speakers: 2.2 * MILLION,
    specialCharacters: 'A B C D E Ɛ F G H I J K L M N Ɲ Ŋ O Ɔ P R S T U V W Y Z a b c d e ɛ f g h i j k l m n ɲ ŋ o ɔ p r s t u v w y z '
  },
  {
    language: 'Kabyle',
    region: 'African',
    speakers: 5.5 * MILLION,
    pangrams: ['Yiwen wass, Ğeḥḥa yefka-yas baba-s frank, akken ad d-yaɣ aqerruy n tixsi. Yuɣ-it-id, yečča akk aksum-is. Yeqqim-d uceqlal d ilem, yewwi-yas-t-id i baba-s. Ihi, mi t-iwala yenna-yas: "acu-t wa?" yenna-yas: "d aqerruy n tixsi". – A ccmata, anida llan imeẓẓuɣen-is?']
  },
  {
    language: 'Kako',
    region: 'African',
    speakers: 120 * THOUSAND,
    specialCharacters: 'À Á Â È É Ê Ì Í Î Ò Ó Ô Ù Ú Û à á â è é ê ì í î ò ó ô ù ú û Ŋ ŋ Ɓ Ɔ Ɗ Ɛ Ǌ ǋ ǌ ɓ ɔ ɗ ​ɛ'
  },
  {
    language: 'Khoekhoe',
    region: 'African',
    speakers: 200 * THOUSAND,
    script: 'Latn',
    paragraphs: ['ǃGâi tsēs. ǃGâi ǁgoas. Nē ǀkharib ǃnâ da ge ǁgûn tsî ǀgaen tsî doan tsîn; tsî ǀnopodi tsî ǀkhenadi tsî ǀhuigu tsî ǀamin tsîn; tsî ǀkharagagu ǀaon tsîna ra hō.'],
    alphabet: 'A a B b Ɓ ɓ C c D d Ɗ ɗ E e Ə ə F f G g H h I i J j K k L l M m N n Ŋ ŋ O o P p R r S s T t U u V v W w Y y Z z Ã ã Ẽ ẽ Ə̃ ə̃ ĩ Ĩ Õ õ',
    specialCharacters: 'Ɓ ɓ Ɗ ɗ Ə ə Ŋ ŋ Ã ã Ẽ ẽ Ə̃ ə̃ Ĩ ĩ Õ õ'
  },
  {
    language: 'Koyraboro Senni',
    // altNames: ['Koyraboro Senni Songhai'],
    region: 'African',
    speakers: 430 * THOUSAND,
    specialCharacters: 'Ã Õ ã õ Ŋ ŋ Š š Ž ž Ɲ ɲ Ẽ ẽ'
  },
  {
    language: 'Koyra Chiini',
    // altNames: ['Koyra Chiini Songhay'],
    region: 'African',
    speakers: 240 * THOUSAND,
    specialCharacters: 'Ã Õ ã õ Ŋ ŋ Š š Ž ž Ɲ ɲ Ẽ ẽ'
  },
  {
    language: 'Latin',
    speakers: 0,
    region: 'European',
    pangrams: ['Sic fugiens, dux, zelotypos, quam Karus haberis.']
  },
  {
    language: 'Latvian',
    region: 'European',
    speakers: 1.5 * MILLION,
    pangrams: ['Muļķa hipiji mēģina brīvi nogaršot celofāna žņaudzējčūsku.', 'Glāžšķūņa rūķīši dzērumā čiepj Baha koncertflīģeļu vākus.'],
    gotchas: [{
      topic: 'ī',
      tags: ['metrics'],
      tests: ['spēcīgi līdz Cīrulis peisaistīja Irbītis Skatīt vadība ierādīta piedalījās dīšas čīča \n"ī" /ī/ \\ī\\ (ī) [ī] {ī}']
    }]
  },
  {
    language: 'Lingala',
    region: 'African',
    speakers: 15 * MILLION,
    paragraphs: ['Tatá wa bísó, ozala o likoló, bato bakúmisa Nkómbó ya Yɔ́, bandima bokonzi bwa Yɔ́, mpo elingo Yɔ́, basálá yangó o nsé, lokóla bakosalaka o likoló Pésa bísó lɛlɔ́ biléi bya mokɔlɔ na mokɔlɔ, límbisa mabé ma bísó, lokóla bísó tokolimbisaka baníngá. Sálisa bísó tondima masɛ́nginyá tê, mpe bíkisa bísó o mabé. Na yɔ́ bokonzi, nguyá na nkembo, o bileko o binso sékô. Amen.']
  },
  {
    language: 'Lithuanian',
    speakers: 3.1 * MILLION,
    region: 'European',
    pangrams: ['Įlinkdama fechtuotojo špaga sublykčiojusi pragręžė apvalų arbūzą']
  },
  // { language: 'Lojban', pangram: '.o’i mu xagji sofybakni cu zvati le purdi' },
  {
    language: 'Maasai',
    altNames: ['Masai'],
    region: 'African',
    speakers: 1.3 * MILLION,
    alphabet: 'a b ch d e ɛ g h i ɨ j k l m n ny ŋ o ɔ p r rr s sh t u ʉ w wu y yi \' ʔ'
  },
  {
    language: 'Macedonian',
    region: 'European',
    speakers: 2 * MILLION,
    script: 'Cyrl',
    pangrams: ['Ѕидарски пејзаж: шугав билмез со чудење џвака ќофте и кељ на туѓ цех.']
  },
  {
    language: 'Maltese',
    region: 'European',
    speakers: 520 * THOUSAND,
    script: 'Latn',
    pangram: "L-Unjoni hija mibnija fuq il-valuri ta' rispett għad-dinjità tal-bniedem, ta' libertà, ta' demokrazija, ta' ugwaljanza, ta' l-istat tad-dritt u tar-rispett għad-drittijiet tal-bniedem, inklużi d-drittijiet ta' persuni li jagħmlu parti minn minoranzi. Dawn il-valuri huma komuni għall-Istati Membri f'soċjetà karatterizzata mill-pluraliżmu, in-non-diskriminazzjoni, it-tolleranza, il-ġustizzja, is-solidarjetà u l-ugwaljanza bejn in-nisa u l-irġiel."
  },
  {
    language: 'Mapudungun',
    region: 'American',
    speakers: 300 * THOUSAND,
    pangrams: ['Gvxam mincetu apocikvyeh: ñizol ce mamvj ka raq kuse bafkeh mew', 'Ngütram minchetu apochiküyeṉ: ñidol che mamüll ka rag kushe ḻafkeṉ mew.', 'Gütxam minchetu apochiküyenh: ñizol che mamüll ka raq kushe lhafkenh mew.']
  },
  {
    language: 'Marshallese',
    region: 'Austronesian',
    speakers: 55000,
    script: 'Latn',
    pangrams: ['E-ar den̄ōt er. N̄a i-j yokwe ajiri ro nej-ū. em̧m̧an io̧kwe ļalem M̧aaj M̧aļo-eļap '],
    specialCharacters: 'A Ā B D E I J K L Ļ M M̧ N Ņ N̄ O O̧ Ō P R T U Ū W a ā b d e i j k l ļ m m̧ n ņ n̄ o o̧ ō p r t u ū w'
  },
  {
    language: 'Mongolian',
    speakers: 5.2 * MILLION,
    region: 'Asian',
    script: 'Cyrl',
    pangrams: ['Щётканы фермд пийшин цувъя. Бөгж зогсч хэльюү.']
  },
  {
    language: 'Mundang',
    region: 'African',
    speakers: 240 * THOUSAND,
    script: 'Latn',
    specialCharacters: 'A B Ɓ C D Ɗ E Ə F G H I J K L M N Ŋ O P R S T U V W Y Z a b ɓ c d ɗ e ə f g h i j k l m n ŋ o p r s t u v w y z ã ẽ ə̃ ĩ õ'
  },
  {
    language: 'Ngiemboon',
    region: 'African',
    speakers: 250 * THOUSAND,
    script: 'Latn',
    specialCharacters: '​À​ Á Â È É Ê Ì Í Ò Ó Ô Ù Ú Û à á â è é ê ì í ò ó ô ù ú û ÿ Ě ě Ń ń Ŋ ŋ Ÿ Ɔ  Ɛ Ǎ ǎ Ǒ ǒ Ǔ ǔ Ʉ ɔ ɛ ʉ ʼ Ḿ ḿ Ẅ ẅ'
  },
  {
    language: 'Ngomba',
    region: 'African',
    speakers: 63000,
    script: 'Latn',
    specialCharacters: '​Á Â Í Î Ú Û á â í î ú û Ń ń Ŋ ŋ Ɔ Ɛ Ǎ ǎ Ǐ ǐ Ǔ ǔ Ǹ ǹ Ʉ ɔ ɛ ʉ Ḿ ḿ Ẅ ẅ Ꞌ ​ꞌ'
  },
  {
    language: 'Norwegian',
    speakers: 4.5 * MILLION,
    region: 'European',
    pangrams: ['Jeg begynte å fortære en sandwich mens jeg kjørte taxi på vei til quiz']
  },
  {
    language: 'Polish',
    region: 'European',
    speakers: 40 * MILLION,
    pangrams: ['Koń i żółw grali w kości z piękną ćmą u źródła.'],
    letterings: ['Aerofłot Bóbr Część Ćmić Dyndasz Ernest Farfocel Gringo Hochsztapler Irbis Jajko Krokus Lalka Łękotka Mąkami Nanizać Obrok Ósemka Poprzestań Quiz Rzeżączka Schniesz Świąt Tarty Uzurpator Victoria Warszawa Xero Yeti Złorzeczyć Źrebak Żółtko'],
    gotchas: [{
      topic: 'łł',
      tags: ['metrics'],
      tests: ['Kołłątaj Piłka Ełk Półkole Półton PÓŁTON Radziwiłłów']
    }]
  },
  {
    language: 'Portuguese',
    region: 'European',
    speakers: 215 * MILLION,
    pangrams: ['Luís argüia à Júlia que «brações, fé, chá, óxido, pôr, zângão» eram palavras do português.']
  },
  {
    language: 'Romanian',
    region: 'European',
    speakers: 24 * MILLION,
    pangrams: ['Bând whisky, jazologul șprițuit vomă fix în tequila.']
  },
  {
    language: 'Russian',
    region: 'European',
    speakers: 155 * MILLION,
    script: 'Cyrl',
    pangrams: ['— Любя, съешь щипцы, — вздохнёт мэр, — Кайф жгуч!'],
    paragraphs: ['Я только в главную мысль мою верю. Она именно состоит в том, что люди, по закону природы, разделяются вообще на два разряда: на низший (обыкновенных), то есть, так сказать, на материал, служащий единственно для зарождения себе подобных, и собственно на людей, то есть имеющих дар или талант сказать в среде своей новое слово... Первый разряд всегда — господин настоящего, второй разряд — господин будущего. Первые сохраняют мир и приумножают его численно; вторые двигают мир и ведут его к цели. И те, и другие имеют совершенно одинаковое право существовать. Одним словом, у меня все равносильное право имеют, и — vive la guerre eternelle, — до Нового Иерусалима, разумеется!'],
    letterings: ['Аудиограф Бомбист Втузовец Гуглить Драгдилер Евгения Ё-моё Жоржет Звёздно Иберийский Йельский Классика Льяло Мнемоник Нутационный Ожогин Пилоправ Рэппер Сфинкс Тлить Узуфрукт Фуфачёв Холедох Цугцванг Чёлочка Шропшир Щадящий Ынахсыт Эмвэдэшник Ююба Ягьяев'],
    alphabet: 'А а Б б В в Г г Д д Е е Ё ё Ж ж З з И и Й й К к Л л М м Н н О о П п Р р С с Т т У у Ф ф Х х Ц ц Ч ч Ш ш Щ щ Ъ ъ Ы ы Ь ь Э э Ю ю Я я'
  },
  {
    language: 'Scottish Gaelic',
    speakers: 57 * THOUSAND,
    region: 'European',
    pangrams: ['Mus d’fhàg Cèit-Ùna ròp Ì le ob.']
  },
  {
    language: 'Serbian',
    script: 'Cyrl',
    region: 'European',
    speakers: 19 * MILLION,
    region: 'European',
    pangrams: ['Љубазни фењерџија чађавог лица хоће да ми покаже штос.', 'Ајшо, лепото и чежњо, за љубав срца мога дођи у Хаџиће на кафу.'],
  },
  {
    language: 'Serbian',
    script: 'Latn',
    region: 'European',
    speakers: 19 * MILLION,
    pangrams: ['Ljubazni fenjerdžija čađavog lica hoće da mi pokaže štos.']
  },
  {
    language: 'Shilha',
    altNames: ['Tachelhit'],
    region: 'African',
    speakers: 7 * MILLION,
    script: 'Latn',
    pangrams: ['Lqqiṣt n yan urgaz lli yzznzan tammnt ɣ ssuqq. Yan urgaz iɛmmr mnnaw yilmawn n tammnt ɣ ssuqq. Yašk nn dars yan urgaz, ira ad dars isɣ tammnt. Inna y as: "Mnšk at tzznzt tammnt ann?" Inna y as: "Mḍi tt, iɣ ak tɛžb ar gis tsawalt." Yasy urgaz ann yan yilm, ifsi t, imḍi tammnt, ifk t i bab nns, inna as: "Amẓ, ar kiɣ gussɣ wayyaḍ." Yamẓ t s ufus nns, yasi daɣ umsaɣ lli wayyaḍ, ifsi t, imḍi tammnt, ifk t daɣ i bab nns. Yamẓ t s ufus nns yaḍnin, yasy umsaɣ yan yilm n tammnt, irur. Iggammi bu tammnt mad a yskar i yilmawn lli yumẓ.']
  },
  {
    language: 'Slovak',
    region: 'European',
    speakers: 5.5 * MILLION,
    pangrams: ['Kŕdeľ šťastných ďatľov učí pri ústí Váhu mĺkveho koňa obhrýzať kôru a žrať čerstvé mäso.'],
    gotchas: [{
      topic: 'vertical caron',
      tags: ['metrics'],
      tests: [
        'Ľadovec Ľudovít loďka ďábelska ďatlov ďábel objížďka buďto veľký dešť ľuľkovité loď ĽM',
        'loď, loď: loď; loď- loď?'
      ]
    }, {
      topic: 'caron and inverted caron',
      tags: ['congruency'],
      tests: ['môže?']
    }]
  },
  {
    language: 'Slovenian',
    speakers: 2.5 * MILLION,
    region: 'European',
    pangrams: ['Hišničin bratec vzgaja polže pod fikusom.']
  },
  {
    language: 'Spanish',
    region: 'European',
    speakers: 405 * MILLION,
    letterings: ['Alacrán Babélico Calcaño Dónde Erección Érebo Fitófago Galápago Hechicería Ilegítimo Índice Jujeño Kafkiano Lilongüe Máximo Neptuno Ñisñil Octógono Óxido Púrpura Recurrir Senescalía Taoísta Urubú Último Vivencia Wawarón Xeneixe Yinyang Zaquizamí'],
    pangrams: ['Whisky bueno: ¡excitad mi frágil pequeña vejez!', 'El pingüino Wenceslao hizo kilómetros bajo exhaustiva lluvia y frío; añoraba a su querido cachorro.', 'La niña, viéndose atrapada en el áspero baúl índigo y sintiendo asfixia, lloró de vergüenza; mientras que la frustrada madre llamaba a su hija diciendo: “¿Dónde estás Waleska?”.', 'El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.'],
    gotchas: [{
      topic: 'question inverted',
      tags: ['metrics'],
      tests: ['“¿Vale?” «¿Vale?»']
    }]
  },
  {
    language: 'Swedish',
    region: 'European',
    speakers: 8.7 * MILLION,
    pangrams: ['Byxfjärmat föl gick på duvshowen.']
  },
  {
    language: 'Tagalog',
    region: 'Austronesian',
    speakers: 28 * MILLION,
    pangrams: ['Ang bawat rehistradong kalahok sa patimpalak ay umaasang magantimpalaan ng ñino.']
  },
  {
    language: 'Turkish',
    region: 'European',
    speakers: 63 * MILLION,
    pangrams: ['Pijamalı hasta yağız şoföre çabucak güvendi. Öküz ajan hapse düştü yavrum, ocağı felç gibi.']
  },
  {
    language: 'Ukrainian',
    region: 'European',
    script: 'Cyrl',
    speakers: 30 * MILLION,
    pangrams: ['Чуєш їх, доцю, га? Кумедна ж ти, прощайся без ґольфів! Жебракують філософи при ґанку церкви в Гадячі, ще й шатро їхнє п’яне знаємо.'],
    gotchas: [{
      topic: 'її',
      tags: ['metrics', 'ligature'],
      tests: ['ЗГОДОМ ЇЇ ВЖИВ без імени її творця. Ви вже бачили її нового друга? Обидві її дитини були шоковані від її нового друга, але змирилися з ситуацією, бо хотіли, щоб їх мама була щаслива.']
    }]
  },
  {
    language: 'Vai',
    region: 'African',
    script: 'Latn',
    speakers: 120 * THOUSAND,
    specialCharacters: 'Á​ Ã É Í Ó Õ Ú á ã é í ó õ ú Ĩ ĩ Ŋ ŋ Ũ ũ Ɓ  Ɔ  Ɗ Ɛ ɓ ɔ ɗ ɛ Ẽ ẽ'
  },
  {
    language: 'Vietnamese',
    region: 'Asian',
    script: 'Latn',
    speakers: 76 * MILLION,
    pangrams: ['Do bạch kim rất quý nên sẽ dùng để lắp vô xương.'],
    gotchas: [{
      topic: 'horn diacritic',
      tags: ['metrics'],
      tests: ['lựt mưng nữi nựi nưm lưu']
    }],
    specialCharacters: 'À​ Á Â Ã È É Ê Ì Í Ò Ó Ô Õ Ù Ú Ý à á â ã è é ê ì í ò ó ô õ ù ú ý Ă ă Đ đ Ĩ ĩ Ũ ũ Ơ ơ Ư ư Ạ ạ Ả ả Ấ ấ Ầ ầ Ẩ ẩ Ẫ ẫ Ậ ậ Ắ ắ Ằ ằ Ẳ ẳ Ẵ ẵ Ặ ặ Ẹ ẹ Ẻ ẻ Ẽ ẽ Ế ế Ề ề Ể ể Ễ ễ Ệ ệ Ỉ ỉ Ị ị Ọ ọ Ỏ ỏ Ố ố Ồ ồ Ổ ổ Ỗ ỗ Ộ ộ Ớ ớ Ờ ờ Ở ở Ỡ ỡ Ợ ợ Ụ ụ Ủ ủ Ứ ứ Ừ ừ Ử ử Ữ ữ Ự ự Ỳ ỳ Ỵ ỵ Ỷ ỷ Ỹ ỹ',
    paragraphs: ['Ảnh hưởng này kéo theo sự xuất hiện của nhiều từ gốc Pháp trong nhiều lĩnh vực khác nhau, đặc biệt là trong khoa học – kỹ thuật. Ễnh ương đốm.', `Tiếng Việt, còn gọi tiếng Việt Nam[5] hay Việt ngữ, là ngôn ngữ của người Việt (người Kinh) và là ngôn ngữ chính thức tại Việt Nam. Đây là tiếng mẹ đẻ của khoảng 85% dân cư Việt Nam, cùng với hơn bốn triệu người Việt hải ngoại. Tiếng Việt còn là ngôn ngữ thứ hai của các dân tộc thiểu số tại Việt Nam. Mặc dù tiếng Việt có một số từ vựng vay mượn từ tiếng Hán và trước đây dùng chữ Nôm — một hệ chữ dựa trên chữ Hán — để viết nhưng tiếng Việt được coi là một trong số các ngôn ngữ thuộc ngữ hệ Nam Á có số người nói nhiều nhất (nhiều hơn một số lần so với các ngôn ngữ khác cùng hệ cộng lại). Ngày nay, tiếng Việt dùng bảng chữ cái Latinh, gọi là chữ Quốc ngữ, cùng các dấu thanh để viết.`,
      `Tiếng Việt được chính thức ghi nhận trong Hiến pháp nước Cộng hòa Xã hội chủ nghĩa Việt Nam 2013, tại chương I điều 5 mục 3, là ngôn ngữ quốc gia của Việt Nam [6]. Tiếng Việt bao gồm cách phát âm tiếng Việt và chữ Quốc ngữ để viết. Tuy nhiên hiện chưa có bất kỳ văn bản nào ở cấp nhà nước quy định giọng chuẩn và quốc tự của tiếng Việt [7]. Hiện nay phần lớn các văn bản trong nước được viết theo những "Quy định về chính tả tiếng Việt và về thuật ngữ tiếng Việt" áp dụng cho các sách giáo khoa, báo và văn bản của ngành giáo dục nêu tại Quyết định của Bộ Giáo dục số 240/QĐ ngày 5 tháng 3 năm 1984 [8] do những người thụ hưởng giáo dục đó sau này ra làm việc trong mọi lĩnh vực xã hội.`, `Cũng cần lưu ý tránh nhầm lẫn với Việt ngữ (粵語) hay tiếng Quảng Đông, một ngôn ngữ được sử dụng ở miền nam Trung Quốc (Quảng Đông, Quảng Tây) cũng như ở Hồng Kông và Ma Cao.`, `Tổ chức tiêu chuẩn hóa quốc tế đặt mã ngôn ngữ hai chữ cái cho tiếng Việt là "vi" (tiêu chuẩn ISO 639-1) và đặt mã ngôn ngữ ba chữ cái cho tiếng Việt là "vie" (tiêu chuẩn ISO 639-2) [9][10][11].`
    ]
  },
  {
    language: 'Walser German',
    // htmlTag: 'wae',
    // opentypeTag: 'DEU',
    altNames: ['Walser', 'Walliser German', 'Walliser', 'Walserdeutsch', 'Walliserdeutsch'],
    region: 'European',
    speakers: 22000,
    pangrams: ['«Méin oalten atte ischt gsinh van in z’Überlann, un d’oaltun mamma ischt van Éischeme, ischt gsing héi van im Proa. Stévenin ischt gsinh dar pappa, la nonna ischt gsinh des Chamonal. [...] D’alpu ischt gsinh aschua van méin oalten pappa. Ich wiss nöit ol z’is heji... Ischt gsinh aschuan d’oaltu, un d’ketschu, gmachut a schian ketschu in z’Überlann.»']
  },
  {
    language: 'Welsh',
    region: 'European',
    speakers: 700 * THOUSAND,
    pangrams: ['Parciais fy jac codi baw hud llawn dŵr ger tŷ Mabon. John Rhŷs. ẂẃẀẁŴŵẄẅ ÝýỲỳŶŷŸÿ']
  },
  {
    language: 'Central Yambasa',
    altNames: ['Yangben'],
    region: 'African',
    speakers: 17000,
    specialCharacters: 'À Á Â È É Ì Í Î Ò Ó Ô Ù Ú Û à á â è é ì í î ò ó ô ù ú û Ā ā Ī ī Ŋ ŋ Ō ō Ū ū Ɔ Ɛ Ǎ ǎ Ǒ ǒ Ǔ ǔ ɔ ɛ'
  },
  {
    language: 'Yoruba',
    region: 'African',
    speakers: 28 * MILLION,
    pangrams: ['Ìwò̩fà ń yò̩ séji tó gbojúmó̩, ó hàn pákànpò̩ gan-an nis̩é̩ rè̩ bó dò̩la.']
  },
  {
    language: 'Zarma',
    region: 'African',
    speakers: 3.5 * MILLION,
    pangrams: ['Da curo fo hẽ, afo mana hẽ, i si jinde kaana bay. Ay no leemuyaŋ. '],
    specialCharacters: 'Ã Õ ã õ Ŋ ŋ Š š Ž ž Ɲ ɲ Ẽ ẽ'
  },
  {
    language: 'Zulu',
    region: 'African',
    speakers: 12 * MILLION,
    pangrams: ['Thina, bantu baseNingizimu Afrika, Siyakukhumbula ukucekelwa phansi kwamalungelo okwenzeka eminyakeni eyadlula;  Sibungaza labo abahluphekela ubulungiswa nenkululeko kulo mhlaba wethu;  Sihlonipha labo abasebenzela ukwakha nokuthuthukisa izwe lethu; futhi  Sikholelwa ekutheni iNingizimu Afrika ingeyabo bonke abahlala kuyo, sibumbene nakuba singafani.']
  },
  {
    language: 'IPA',
    htmlTag: '',
    opentypeTag: '',
    script: 'IPA',
    speakers: 0,
    specialCharacters: 'ʃ θ ʊ ʊ ʌ ʒ ʔ æ ɑ ð ə ɚ ɛ ɜ ɝ ɪ ɫ ŋ ɔ ɒ ɹ ɾ ˈ ˌ ː ᵊ ʳ õ r̩',
    paragraphs: ['/sɯ̥ʃi/ /a̠ˈmiɣo̟/ [ˈɲeɣʐɛ] [ðə bɛɪʒ çjuː ˈɒn ðə wɔːtəz əv ðə lɔx ɪmˈprɛst ɔːl ɪnˈkluːdɪŋ ðə frɛntʃ kwiːn bɪˈfɔː ˈʃiː hɜːd ðæt ˈsɪɱfəni əˈɡɛn dʒəst əz jʌŋ ˈɑːθə ˈwɒntɪd]',
      '/à ˈnojtɨ, vuˈvo kuuaɫʃˈki ˈve u ˈimɐ̃ kɐˈiɾ nu ˈpɛ du ˈpĩgüˈĩ kɐjˈʃozu i vuˈvɔ ˈpõj ɐˈsukaɾ nu ˈʃa dɨ ˈtɐmɐɾɐʒ du ʒɐbuˈti fɨˈɫiʃ/',
      '[ˈxoˈse kõmˈpɾo ˈuna ˈβjexa sãmˈpoɲa ɛ̃m pɛˈɾu ɛksuˈsãn̪dose, soˈfia tiˈɾo su ˈwiskj al̪ deˈsaɣwe ðe la βãŋˈkɛta]',
      ' maj ˌɹɛvəˈleʃənz æz ə spaj ˈstivən ˈliˌkɑk  ( fɹəm ˈfɹɛnzid ˈfɪkʃən )  ɪn ˈmɛni ˈpipəl ðə ˈvɛɹi nem "spaj " əkˈsajts ə ˈʃʌdəɹ əv ˌæpɹəˈhɛnʃən ; wi spajz , ɪn fækt , ɡɛt kwajt just tə ˈbiɪŋ ˈʃʌdəɹd æt . nʌn əv ʌs spajz majnd ət æt ɑl . ˌwɛnˈɛvəɹ aj ˈɛntəɹ ə ˌhoˈtɛl ənd ˈɹɛdʒəstəɹ ˌmajˈsɛlf æz ə spaj aj əm kwajt əˈkʌstəmd tə si ə θɹɪl əv fɪɹ ɹʌn ɹawnd ðə kləɹks , ɔɹ kləɹk , bəˈhajnd ðə dɛsk .  ʌs spajz , ɔɹ wi spajz --fɔɹ wi kɑl ɑɹˈsɛlvz boθ --ɑɹ ðʌs ə ɹes əˈpɑɹt . nʌn no ʌs . ɑl fɪɹ ʌs . wɛɹ du wi lɪv ? ˈnoˌwɛɹ . wɛɹ ɑɹ wi ? ˈɛvɹiˌwɛɹ .',
      'ˈfɹikwəntli wi dont no ɑɹˈsɛlvz wɛɹ wi ɑɹ . ðə ˈsikɹət ˈɔɹdəɹz ðət wi ɹəˈsiv kʌm fɹəm so haj ʌp ðæt ɪt ɪz ˈɑfən fʌɹˈbɪdən tu ʌs ˈivən tə æsk wɛɹ wi ɑɹ . ə fɹɛnd əv majn , ɔɹ æt list ə ˈfɛlo spaj --ʌs spajz hæv no fɹɛndz --wʌn əv ðə most ˈbɹɪljənt mɛn ɪn ðə hʌŋˈɡɛɹiən ˈsikɹət ˈsəɹvəs , wʌns spɛnt ə mʌnθ ɪn ˌnju ˈjɔɹk ˈʌndəɹ ðə əmˈpɹɛʃən ðət hi wəz ən ˈwɪnəˌpɛɡ . ɪf ðɪs ˈhæpənd tə ðə most ˈbɹɪljənt , θɪŋk əv ðə ˈʌðəɹz .  ðə ˈsɔɹoz əv ə ˈsʌməɹ ɡɛst  lɛt mi ədˈmɪt , æz aj stɑɹt tə ɹajt , ðət ðə hol θɪŋ ɪz maj fɑlt . aj ʃʊd ˈnɛvəɹ həv kʌm , aj nju ˈbɛtəɹ . aj həv non ˈbɛtəɹ fɔɹ jɪɹz . aj hæv non ðət ɪt əz ʃɪɹ ˈmædnəs tə ɡo ənd pe ˈvɪzəts ɪn ˈʌðəɹ ˈpipəlz ˈhawzəz .  jɛt ɪn ə ˈmomənt əv ɪnˈsænəti aj həv lɛt ˌmajˈsɛlf ˈɪn fəɹ ɪt ənd hɪɹ aj æm . ðɛɹ ɪz no hop , no ˈawtlət naw tɪl ðə fəɹst əv ˌsɛpˈtɛmbəɹ wɛn maj ˈvɪzət ɪz tə ˈtəɹməˌnet . ˈajðəɹ ˈðæt ɔɹ ˈdɛθ . aj du nɑt ˈɡɹetli kɛɹ wɪtʃ .'
    ]
  },
  ];
}