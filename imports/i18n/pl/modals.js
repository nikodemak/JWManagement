const modal = {
  close: 'Zamknij',
  addParticipant: {
    title: 'Dodaj współpracownika',
    noUsers: 'Brak dostępnych użytkowników',
    description: 'Proszę wybierz użytkownika, którego chcesz dodać do tej zmiany',
    submit: 'Dodaj',
    alreadyRequested: 'Ten użytkownik otrzymał już prośbę o współpracę',
    alreadyParticipating: 'Ten użytkownik jest już współpracownikiem',
    available_users: 'Dostępni głosiciele',
    all_users: 'Inni głosiciele',
    select: 'Wybierz głosiciela'
  },
  addVessel: {
    title: 'Dodaj vessel',
    action: 'Dodaj vessel'
  },
  addWeek: {
    title: 'Stwórz nowy tydzień',
    noTemplate: 'Proszę najpierw zdefiniować szablon',
    defineTemplate: 'Zdefiniuj szablon',
    action: 'Stwórz nowy tydzień',
    text: {
      top: 'Wybierz tydzień do którego ten szablon zostanie zastosowany:',
      bottom: 'Wybierz szablonowy tydzień:'
    }
  },
  cancelTeam: {
    title: 'Anuluj zmianę',
    text: 'Opisz dlaczego ta zmiana została anulowana. Wszyscy członkowie tej zmiany dostaną tą wiadomość w mailu.',
    action: 'Anuluj zmianę'
  },
  copyShift: {
    title: 'Kopiuj zmianę',
    text: 'Wybierz dni do których chesz skopiować tą zmianę',
    action: 'Kopiuj zmianę'
  },
  editShift: {
    title: 'Edytuj informacje o zmianie',
    mainData: 'Główne informacje',
    tag: 'Tag',
    team: 'Zmiana',
    teams: 'Lokalizacje przypisane do tej zmiany',
    helpText: {
      tag: 'Ustaw Tag zmiany. Wszyscy użytkownicy z uprawnieniami do tego Tagu będą widzieć tą zmianę.',
      scheduling: 'Jeżeli wybierzesz \'akceptuj automatycznie\', zgłoszenia będą akcpetowane w momencie, kiedy zostanie osiągnięta minimalna liczba współpracowników.'
    },
    addTeam: 'Dodaj nową lokalizację',
    teamMin: 'Minimalna ilość współpracowników:',
    teamMax: 'Maksymalna ilość współpracowników:',
    teamStart: 'Start:',
    teamEnd: 'Koniec:',
    teamPlace: 'Miejsce:',
    removeTeam: 'Usuń tą lokalizację',
    noMeeting: 'Brak zbiórki',
    action: 'Akcja:',
    delete: 'Usuń',
    switch: 'Grafik',
    copyShift: 'Kopiuj zmianę'
  },
  editTeamPicture: {
    title: 'Zmień zdjęcie lokalizacji',
    currentPicture: 'Aktualne zdjęcie:',
    hints: 'Te zdjęcie prawdopodobnie głosiciel będzie widział większe.',
    noPictureUploaded: 'Nie masz wrzuconych żadnych zdjęć',
    upload: 'Wrzuć',
    delete: 'Usuń'
  },
  editMeetingPicture: {
    title: 'Zmień zdjęcie zbiórki',
    currentPicture: 'Aktualne zdjęcie:',
    hints: 'Te zdjęcie prawdopodobnie głosiciel będzie widział większe.',
    noPictureUploaded: 'Nie masz wrzuconych żadnych zdjęć',
    upload: 'Wrzuć',
    delete: 'Usuń'
  },
  editVessel: {
    title: 'Edytuj vessel',
    action: 'Zapisz zmiany'
  },
  inviteUser: {
    title: 'Zaproś nowego głosiciela',
    key: '<span class="text-warning">Pomarańczowa nazwa</span> oznacza, że użytkownik został już zaproszony.',
    selectAll: 'Wybierz wszystkich',
    noUsers: 'Brak nowych głosicieli',
    invite: 'Zaproś'
  },
  position: {
    title: 'Zaznacz pozycję lewym klawiszem myszy'
  },
  shift: {
    collapseTeam: 'Rozwiń ulicę i punkty zbiórek',
    expandTeam: 'Rozszerz ulicę i punkty zbiórek',
    noParticipants: 'Brak współpracowników',
    requestTeam: 'Zgłoś chęć współpracy',
    requestTeamAgain: 'Zgłoś chęć współpracy ponownie',
    requests: 'Zgłoszenia',
    cancelRequest: 'Anuluj zgłoszenie',
    cancelParticipation: 'Anuluj współpracę',
    addParticipant: 'Dodaj współpracownika',
    unknownAge: 'Nieznany wiek',
    cancelTeam: 'Anuluj zmianę',
    closedTeam: 'Ten zmiana jest zamknięta. Nie możesz zgłosić chęci współpracy.',
    maximumReached: 'Osiągniętą maksymalną ilość współpracowników.',
    noPermission: 'Nie masz uprawnień do wyznaczania użytkowników',
    noTeamleader: 'Ten użytkownik nie ma uprawnień Koordynatora zmian',
    sendUnderstaffed: 'Wyślij mail o wolnych miejscach',
    alreadyTeamleader: 'Ten użytkownik jest już Koordynatorem zmian',
    openTeam: 'Otwórz zmianę',
    closeTeam: 'Zamknij zmianę',
    switch: 'Edytuj zmianę',
    existingTeamleaders: 'Koordynator zmiany istnieje',
    noExistingTeamleader: 'Brakuje koordynatora zmiany',
    approveSelected: 'Zaakceptuj zaznaczone',
    declineSelected: 'Odmów zaznaczonym',
    report: 'Report'
  },
  shiftReport: {
    title: 'Sprawozdanie',
    teamleader: 'Koordynator zmiany',
    substituteTeamleader: 'Zastępca koordynatora zmiany',
    publications: 'Publikacje',
    occurrences: 'Zdarzenie',
    store: 'Magazyn',
    experiences: 'Doświadczenia',
    present: 'Obecny',
    sick: 'Chory',
    missing: 'Brak',
    name: 'Imię',
    language: 'Język',
    count: 'Ilość',
    action: 'Akcja',
    noPublications: 'Brak publikacji',
    select_publication: 'Wybierz publikacje',
    selectPublicationFirst: 'Proszę najpierw wybrać publiakcje',
    addItem: 'Dodaj tą publikację',
    removeItem: 'Usuń tą publikację',
    texts: 'Wersety biblijne',
    speaks: 'Rozmowy',
    videos: 'Pokazane filmy',
    website: 'Pokazana strona',
    returnVisits: 'Odwiedziny ponowne',
    bibleStudies: 'Studia Biblijne',
    time: 'Godziny służby',
    trolleysFilled: 'Wóżki są uzupełnione',
    neatnessLast: 'Stan wzóków po zmianie',
    bad: 'Zły',
    normal: 'Normalny',
    good: 'Dobry',
    yes: 'Tak',
    no: 'Nie',
    expRoute: 'Ulica',
    expGood: 'Ciekawe doświadczenia',
    expProblems: 'Problemy / Trudności',
    date: 'Data',
    toShift: 'Do zmiany',
    pages: {
      publisher: 'Głosiciel',
      items: 'Rozpowszechione publikacje',
      occurrences: 'Zdarzenia',
      store: 'Magazyn',
      experiences: 'Doświadczenia',
      prevPage: 'Idź do wcześniejszej strony',
      nextPage: 'Idź do kolejnej strony',
      finish: 'Zakończ sprawozdanie'
    }
  },
  route: {
    title: 'Stwórz/edytuj ulicę',
    routeMarkers: 'Marker ulicy',
    addRouteMarkers: 'Kliknij na mapie aby dodać nowy marker ulicy'
  },
  uploadUserFile: {
    title: 'Użytkownik - Wyślij plik',
    helpText: 'Porządek danych osobistych (* pola wymagane): <br> Email*, First name*, Last name*, Gender(m or w)*, Phone number, Privilege of service (\'publisher\', \'auxiliary\', \'regular\', \'special\', \'circuit\', \'bethelite\' or \'ldc\'), Ministry privilege (\'publisher\', \'servant\', \'elder\', \'coordinator\', \'secretary\' or \'serviceOverseer\'), Congregation',
    helpEncoding: 'Plik musi mieć kodowanie UTF-8 aby wspierać wszystkie znaki',
    uploadFile: 'Wyślij plik CSV',
    new: 'Nowi głosiciele',
    existing: 'Głosiciele z kontem JW Management',
    name: 'Nazwa',
    email: 'Email',
    add: 'Dodaj użytkowników'
  },
  mergeAccounts: {
    title: 'Scal konta',
    description: 'Wprowadź dane logowania konta które chcesz scalić. Zostaniesz zalogowany na to konto za chwilę.',
    username: 'Użytkownik',
    password: 'Hasło',
    merge: 'Scal konta'
  }
}

export default modal
