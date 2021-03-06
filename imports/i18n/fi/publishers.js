const publisher = {
  entity: {
    username: 'Käyttäjänimi',
    profile: {
      firstname: 'Etunimi',
      lastname: 'Sukunimi',
      email: 'Sähköposti',
      telefon: 'Puhelin',
      gender: 'Sukupuoli',
      genderValues: {
        m: 'Veli',
        w: 'Sisar'
      },
      pioneer: 'Palvelustehtävät',
      pioneerValues: {
        publisher: 'Julistaja',
        auxiliary: 'Osa-aikainen tienraivaaja',
        regular: 'Vakituinen tienraivaaja',
        special: 'Erikoistienraivaaja',
        circuit: 'Kierrosvalvoja',
        bethelite: 'Beteliläinen',
        ldc: 'Rakentamisen vapaaehtoinen'
      },
      privilege: 'Seurakunnan palvelustehtävät',
      privilegeValues: {
        publisher: 'Julistaja',
        servant: 'Avustava palvelija',
        elder: 'Vanhin',
        coordinator: 'Vanhimmiston koordinaattori',
        secretary: 'Sihteeri',
        serviceOverseer: 'Palvelusvalvoja'
      },
      languages: 'Vieraat kielet',
      shortTermCalls: 'Vastaanota tietoja vajaista vuoroista',
      shortTermCallsAlways: 'Käytettävissä nopealla aikataululla',
      availability: {
        new: 'Lisää uusi aikajakso',
        noElements: 'Aikajaksoja ei ole muodostettu',
        deleteConfirmation: 'Haluatko todella poistaa tämän aikajakson?',
        mondays: 'Maanantait',
        tuesdays: 'Tiistait',
        wednesdays: 'Keskiviikot',
        thursdays: 'Torstait',
        fridays: 'Perjantait',
        saturdays: 'Lauantait',
        sundays: 'Sunnuntait',
        start: 'Aloitusaika',
        startDateFormat: 'hh:mm -',
        startValues: {
          '0': '00:00',
          '1': '01:00',
          '2': '02:00',
          '3': '03:00',
          '4': '04:00',
          '5': '05:00',
          '6': '06:00',
          '7': '07:00',
          '8': '08:00',
          '9': '09:00',
          '10': '10:00',
          '11': '11:00',
          '12': '12:00',
          '13': '13:00',
          '14': '14:00',
          '15': '15:00',
          '16': '16:00',
          '17': '17:00',
          '18': '18:00',
          '19': '19:00',
          '20': '20:00',
          '21': '21:00',
          '22': '22:00',
          '23': '23:00'
        },
        end: 'Lopetusaika',
        endDateFormat: 'hh:mm',
        endValues: {
          '0': '01:00',
          '1': '02:00',
          '2': '03:00',
          '3': '04:00',
          '4': '05:00',
          '5': '06:00',
          '6': '07:00',
          '7': '08:00',
          '8': '09:00',
          '9': '10:00',
          '10': '11:00',
          '11': '12:00',
          '12': '13:00',
          '13': '14:00',
          '14': '15:00',
          '15': '16:00',
          '16': '17:00',
          '17': '18:00',
          '18': '19:00',
          '19': '20:00',
          '20': '21:00',
          '21': '22:00',
          '22': '23:00',
          '23': '24:00'
        },
        wholeDay: 'Koko päivä'
      },
      vacation: {
        start: 'Aloitusaika',
        end: 'Lopetusaika',
        new: 'Lisä uusi lomapäivä',
        noElements: 'Ei lisättyjä lomapäiviä',
        deleteConfirmation: 'Haluatko todella poistaa tämän lomapäivän?',
        startDateFormat: 'DD/MM/YYYY [päivään]',
        endDateFormat: 'DD/MM/YYYY'
      }
    },
    password: {
      change: 'Vaihda salasana',
      reset: 'Lähetä sähköpostiviesti salasanan vaihtamiseksi',
      resetConfirmation: 'Haluatko todella lähettää sähköpostin salasana vaihtamiseksi tälle käyttäjälle?',
      password: 'Anna uusi salasana',
      passwordRepeat: 'Anna uusi salasana uudelleen'
    },
    invite: 'Lähetä kutsu projektiin',
    inviteConfirmation: 'Haluatko todella lähettä kutsuviestin käyttäjälle tähän projetiin?',
    delete: 'Poista käyttäjän pääsy tähän projektiin',
    deleteConfirmation: 'haluatko todella poistaa käyttäjän pääsyn tähän projektiin?'
  },
  search: {
    placeholder: 'Etunimi, Sukunimi, Sähköposti, Puhelinnumero tai Käyttäjänimi'
  },
  details: {
    sections: {
      identification: 'Tunnistautumistiedot',
      availability: 'Käytettävyys',
      vacations: 'Lomapäivät',
      password: 'Salasana',
      options: 'Valinnat'
    },
    dateFormat: 'DD/MM/YYYY'
  },
  profile: {
    availability: {
      details: {
        sections: {
          mondays: 'Käytettävissä maanantaisin',
          tuesdays: 'Käytettävissä tiistaisin',
          wednesdays: 'Käytettävissä keskiviikkoisin',
          thursdays: 'Käytettävissä torstaisin',
          fridays: 'Käytettävissä perjantaisin',
          saturdays: 'Käytettävissä lauantaisin',
          sundays: 'Käytettävissä sunnuntaisin'
        }
      }
    }
  }
}

export default publisher
