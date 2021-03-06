const store = {
  title: 'Raktárkészlet műszerfal',
  short: 'Parancsikon',
  language: 'Nyelv',
  languages: 'Nyelvek',
  total: 'Összes',
  count: 'számol',
  showAll: 'Az összes kiadvány megjelenítése',
  hideAll: 'Az összes nem hozzáadott kiadvány elrejtése',
  reset: 'készletnyílvántatás újrakezdése',
  noPublication: 'Te még nem vettél fel egy kiadványt sem.<br>A kiadvány hozzáadásához, használd az összes kiadvány mutatása gombot.<br>Ezután válasszuk ki a az összes kiadványt hogy a készletnyilvántartásunkban legyen.<br>Kattints a kiadványra, hogy be tudd állítani milyen nyelven van készleten.',
  startAddLanguage: 'Nyelv hozzáadása',
  cancelAddLanguage: 'Törlés',
  close: 'Bezár',
  addLanguage: 'Hozzáad',
  removeLanguage: 'Nyelv törlése',
  setup: {
    title: 'Kérlek válassz készletezési módot',
    support: 'Sajnos ez még nem támogatott',
    description: 'Kérjük, válassz egy módot tároló inicializálásokhoz.<br>Meg lehet változtatni később, ha szükséges.',
    simple: {
      name: 'Egyszerű',
      description: 'Az egyszerű módban, a rendszer automatikusan konfigurálja a néhány alapvető kategóriát, mint a „Könyvek és Bibliák”, „folyóiratok”, stb a te számodra. Ezek elérhetők lesznek a jelentésben.'
    },
    advanced: {
      name: 'Speciális',
      description: 'A speciális módban eldöntheted, hogy melyik kiadványok álljanak rendelkezésre és milyen nyelven. Megadhatod azt is, hogy hány ilyen kiadvány legyen készleten és a rendszer fogja őket készletezni naprakész információk által ami jelentésekből származik. Ezzel meg tudod határozni, hogy mely kiadványok és a nyelvek fogynak a legjobban azon a területen.'
    }
  },
  type: {
    books: 'Könyvek',
    brochures: 'Füzetek',
    magazines: 'Folyóiratok',
    tracts: 'Tájékoztató lapok',
    misc: 'Vegyes'
  },
  publication: {
    'CO-inv17': '2017 Regionális Kongresszus meghívó',
    'CO-inv18': '2018 Regionális Kongresszus meghívó',
    'CO-inv19': '2019 Regionális Kongresszus meghívó',
    'CO-inv20': '2020 Regionális Kongresszus meghívó',
    bh: 'Mit tanít valójában a Biblia?',
    bhs: 'MIT TANÍTHAT NEKÜNK A BIBLIA?',
    bi12: 'A Szentírás új világ fordítása (2005 kiadás)',
    bm: 'Mi a Biblia üzenete?',
    ct: 'Van-e Teremtő, aki törődik veled?',
    fg: 'Örömteli üzenet Istentől',
    fy: 'A családi boldogság titka',
    gt: 'A legnagyobb ember, aki valaha élt',
    hf: 'Hogyan élhetünk boldog családban?',
    inv: 'Gyülekezeti meghívó',
    jwcd: 'Jw.org -os névjegykártya',
    kt: 'Szeretné megtudni az igazságot?',
    lc: 'Egy Teremtő keze műve az élet?',
    ld: 'Figyelj Istenre!',
    lf: 'Az élet eredete – Öt kérdés, melynek érdemes utánajárni',
    ll: 'Figyelj Istenre, és élj örökké!',
    lmn: '„Íme, mindent újjáteszek!”"',
    lr: 'Tanulj a nagy Tanítótól!',
    mb: 'Bibliai mondókák',
    mi16: '2016 Emlékünnepi meghívó',
    mi17: '2017 Emlékünnepi meghívó',
    mi18: '2018 Emlékünnepi meghívó',
    mi19: '2019 Emlékünnepi meghívó',
    mi20: '2020 Emlékünnepi meghívó',
    my: 'Az én könyvem bibliai történetekről',
    nwt: 'A Szentírás új világ fordítása (2013 kiadás)',
    rj: 'Térj vissza Jehovához!',
    't-30': 'Mit gondolsz a Bibliáról?',
    't-31': 'Milyennek képzeled a jövőt?',
    't-32': 'Mi kell ahhoz, hogy egy család boldog legyen?',
    't-33': 'Ki uralkodik a világ felett?',
    't-34': 'Megszűnnek egyszer a bajok?',
    't-35': 'Élhet újra, aki meghalt?',
    't-36': 'Mi Isten Királysága?',
    't-37': 'Hol kaphatunk választ az élet nagy kérdéseire?',
    'wp/g': 'Őrtorony / Ébredjetek',
    yc: 'Tanítsd a gyermekedet!',
    yp1: 'Fiatalok kérdései – Gyakorlatias válaszok. 1. kötet',
    yp2: 'Fiatalok kérdései – Gyakorlatias válaszok. 2. kötet',
    ypq: '10 kérdés fiataloktól'
  }
}

export default store
