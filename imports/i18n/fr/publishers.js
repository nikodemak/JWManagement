const publisher = {
  entity: {
    username: 'Utilisateur',
    profile: {
      firstname: 'Prénom',
      lastname: 'Nom',
      email: 'E-mail',
      telefon: 'Tél.',
      gender: 'Sexe',
      genderValues: {
        m: 'Frère',
        w: 'Soeur'
      },
      pioneer: 'Statut',
      pioneerValues: {
        publisher: 'Proclamateur',
        auxiliary: 'Pionnier auxiliaire',
        regular: 'Pionnier permanent',
        special: 'Pionnier spécial',
        circuit: 'Responsable de circonscription',
        bethelite: 'Béthélite',
        ldc: 'Serviteur à la construction'
      },
      privilege: 'Responsabilité dans l\'assemblée',
      privilegeValues: {
        publisher: 'Proclamateur',
        servant: 'Assistant',
        elder: 'Ancien',
        coordinator: 'Coordinateur du collège des anciens',
        secretary: 'Secrétaire',
        serviceOverseer: 'Responsable de prédication'
      },
      languages: 'Langues',
      shortTermCalls: 'Recevoir des e-mails en cas de sous-effectif',
      shortTermCallsAlways: 'Bientôt disponible.',
      availability: {
        new: 'Ajoute un créneau horaire',
        noElements: 'Pas de créneau horaire disponibles',
        deleteConfirmation: 'Désires-tu vraiement supprimer ce créneau horaire?',
        mondays: 'Lundis',
        tuesdays: 'Mardis',
        wednesdays: 'Mercredis',
        thursdays: 'Jeudis',
        fridays: 'Vendredis',
        saturdays: 'Samedis',
        sundays: 'Dimanches',
        start: 'Début',
        startDateFormat: 'HH:mm',
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
        end: 'Fin',
        endDateFormat: 'HH:mm',
        endValues: {
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
        wholeDay: 'Jour entier'
      },
      vacation: {
        start: 'Début',
        end: 'Fin',
        new: 'Ajoute une nouvelle période d\'absence',
        noElements: 'Pas d\'absence ajoutée',
        deleteConfirmation: 'Supprimer cette absence?',
        startDateFormat: 'DD/MM/YYYY [jusqu\'à]',
        endDateFormat: 'DD/MM/YYYY'
      }
    },
    password: {
      change: 'Modifier le mot de passe',
      reset: 'Envoyez un e-mail pour modifier le mot de passe',
      resetConfirmation: 'Désires-tu vraiement envoyer un e-mail pour modifier le mot de passe de l\'utilisateur? Attention: cet utilisateur ne pourra plus s\'identifer tant qu\'il ne suivra pas la procédure de la modification du mot de passe.',
      password: 'Entrez le nouveau mot de passe',
      passwordRepeat: 'Entrez à nouveau le nouveau mot de passe'
    },
    invite: 'Envoyez l\'invitation de ce projet',
    inviteConfirmation: 'Désires-tu vraiment envoyer une invitation de ce projet à ce proclamateur?',
    delete: 'Révoquez l\'accès de ce proclamateur de ce projet',
    deleteConfirmation: 'Désires-tu vraiement révoquer l\'accès de ce proclamateur à ce projet?'
  },
  search: {
    placeholder: 'Prénom, Nom, E-mail, Tél. ou Utilisateur'
  },
  details: {
    sections: {
      identification: 'Données d\'identifications',
      availability: 'Disponibilité',
      vacations: 'Absences',
      password: 'Mot de passe',
      options: 'Options'
    }
  },
  profile: {
    availability: {
      details: {
        sections: {
          mondays: 'Disponibilité les lundis',
          tuesdays: 'Disponibilité les mardis',
          wednesdays: 'Disponibilité les mercredis',
          thursdays: 'Disponibilité les jeudis',
          fridays: 'Disponibilité les vendredis',
          saturdays: 'Disponibilité les samedis',
          sundays: 'Disponibilité les dimanches'
        }
      }
    }
  }
}

export default publisher
