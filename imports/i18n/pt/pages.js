const pages = {
  login: {
    name: 'Login',
    welcome: 'Bem vindo ao JWManagement',
    text: 'Por favor insira seus detalhes de conta pessoal para Entrar.',
    forgot: 'Esqueceu sua palavra-passe?',
    existing: 'JW Management é um sistema de gerência de turnos para projetos de pregação com carrinhos de literatura.<br>Gostaria de testar o sistema?<br>Envie-nos um email para support@jwmanagement.org e nós criaremos um projeto para vocês.',
    create: 'Criar conta',
    back: 'Voltar à página inicial'
  },
  forgotPassword: {
    name: 'Palavra-passe anterior',
    text: 'Insira seu email e nós enviaremos um endereço para você restabelecer sua palavra-passe.',
    button: 'Enviar endereço para palavra-passe',
    back: 'Voltar à página inicial',
    noUserForThisEmail: 'Não existe conta que corresponda a este email.',
    multipleAccountsForThisEmail: 'Existem diversas contas com este email. Por favor especifique o usuário.',
    emailMissing: 'Digite seu endereço de e-mail',
    mailSent: 'Você receberá um e-mail em breve. Siga o link no e-mail para redefinir sua senha.'
  },
  resetPassword: {
    name: 'Restabelecer sua palavra-passe.',
    text: 'Por favor digite uma nova palavra-passe para {{0}} {{1}}.',
    noUserFound: '<p>Endereço inválido</p><p>Confirme o URL</p>',
    button: 'Mudar palavra-passe',
    back: 'Voltar à página inicial'
  },
  profile: {
    name: 'Meu perfil',
    personalData: 'Meus detalhes pessoais',
    changePicture: 'Editar imagem...',
    options: {
      title: 'Definições',
      helpText: 'Em JWManagement você pode fazer tudo com apenas uma conta, portanto você só precisa se lembrar de um nome de usuário e senha. Se tiver várias contas, escreva-nos um e-mail para support@jwmanagement.org com os nomes de utilizador das contas.'
    },
    availability: {
      title: 'Disponibilidade',
      helpText: 'Por favor marque as horas que está disponivel.',
      shortTermCalls: 'Eu estou disponivel a ser contactado com pouco aviso',
      shortTermCallsAlways: 'Mesmo que disponibilidade não esteja definida'
    },
    speaks: 'Fala',
    telefon: 'Telefone',
    congregation: 'Congregação',
    languages: 'Linguas Faladas',
    gender: 'Sexo',
    _gender: {
      brother: 'Irmão',
      sister: 'Irmã'
    },
    publisher: 'Publicador',
    privilegeOfService: 'Privilegio de Serviço',
    _privilegeOfService: {
      auxiliaryPioneer: 'Pioneiro Auxiliar',
      pioneer: 'Pioneiro Regular',
      specialPioneer: 'Pioneiro Especial',
      circuitOverseer: 'Superintendente de Circuito',
      bethelite: 'Betelita',
      fulltimeConstructionServant: 'Servo de Construção'
    },
    ministryPrivilege: 'Designação Congregacional',
    _ministryPrivilege: {
      ministerialServant: 'Servo Ministerial',
      elder: 'Ancião'
    },
    placeholder: {
      telefon: '(e.g. +447712345678)',
      congregation: 'Congregação',
      languages: 'Linguagens'
    },
    changePassword: 'Mudar Palavra-passe',
    deleteAccount: 'Apagar Conta',
    vacation: {
      title: 'Férias',
      helpText: 'Por favor adicione os periodos em que não estará disponivel.'
    },
    until: 'até',
    addVacation: 'Adicionar Férias',
    usernameTaken: 'Este nome de usuário ja está em uso. Por favor escolha outro.'
  },
  wiki: {
    name: 'Centro de Informação',
    nameShort: 'Informação',
    files: 'ficheiros',
    addQuestion: 'Adicionar questão/titulo',
    edit: 'Editar',
    delete: 'Apagar',
    noFiles: 'Nenhum ficheiro disponivel'
  },
  shifts: {
    name: 'Turnos',
    route: 'Rota',
    addWeek: 'Adicionar uma nova semana',
    applications: 'Aplicações',
    openApplications: 'Abrir aplicações',
    automation: 'Automatico',
    template: 'Modelo',
    noVisibleShifts: 'Nenhum turno com essa etiqueta esta semana',
    start: 'Começo',
    end: 'Fim',
    visibility: 'Visibilidade:',
    helpText: {
      start: 'Esta é a primeira semana a ser criada pelo sistema.',
      end: 'Esta é a última semana a ser criada pelo sistema.',
      visibility: 'Isto define quantas semana em avanço os publicadores estão autorizados a visualizar e a reservar. De acordo com o inicio de semana e fim da semana, o sistema irá criar automáticamente os turnos necessários.'
    },
    weeks: 'semanas',
    sendWeek: 'Enviar Confirmações',
    shift: {
      tag: 'Etiqueta',
      schedule: 'Horário',
      teamleader: 'Lider de Equipa',
      teams: 'Equipa',
      noTeams: 'Nenhuma Equipa',
      participants: 'Participantes',
      start: 'Começa',
      end: 'Termina',
      noPermission: 'Apenas um Gerente de Projeto ou Gerente de Turno tem permissão para editar ou reservar turnos.'
    }
  },
  day: {
    removeAll: 'Remover todos'
  },
  project: {
    name: 'Administração',
    nameShort: 'Admin'
  },
  settings: {
    main: {
      title: 'Configurações Principais',
      id: 'Identificação',
      name: {
        text: 'Nome',
        placeholder: 'Nome de projeto',
        helpText: 'Em muitos casos o nome do projeto é o nome da congregação. Para projetos maiores que incluam multiplas congregações pode ser utilizado o nome da cidade onde o projeto irá ser realizado. Se o projeto não organizar pregação com os carrinhos, o nome também poderá refletir o que será organizado com o projeto.'
      },
      email: {
        text: 'Email',
        placeholder: 'Project email address',
        helpText: 'Em email como Confirmações de Turnos e Atualizações de Lider de Equipa, este endereço será definido como o endereço de resposta. Se os destinatários responderem a estes email, a resposta será enviada para a caixa de email deste endereço. Também, este endereço será notificado ex: em cancelamentos de participação com pouco aviso'
      },
      language: {
        text: 'Linguagem',
        helpText: 'Se o sistema notificar o endereço acima mencionado sobre as alterações, ele enviará os e-mails no idioma definido aqui.',
        deleteProject: 'Delete o projeto'
      }
    },
    tags: {
      title: 'Etiquetas',
      helpText: '<p> Cada turno tem que ter uma etiqueta designada. Além disso, todos os usuários podem ter permissão ou negado permissão para ver as mudanças dependendo das etiqutas. </ P> <p> As etiquetas podem refletir atividades diferentes (por exemplo, testemunho de carrinho, stand de informações, trabalho de rua, etc.). A divisão de turnos em diferentes etiquetas pode ser útil, por exemplo, se houver vários turnos ao mesmo tempo ou se apenas alguns publicadores estão treinados em um tipo específico de testemunho público.</p><p> Com cada etiqueta pode haver um conjunto de semanas-modelo que foram definidas anteriormente. Ao usar a opção automática ao planejar, o programa pode usar essas semanas de modelo. Isto salva tempo ao gerente de projeto ou gerente de turno quando planejando, que caso contrário teria que ser criada manualmente.</p>',
      id: 'ID',
      name: 'Nome',
      img: {
        name: 'Imagem',
        helpText: 'Esta imagem irá ser mostrada no painel de controle quando selecionar “Turnos”. Irá explicar o tipo de tarefas realizadas em turnos com esta etiqueta. Se você quiser adicionar uma imagem customizada, por favor envie um email para support@jwmanagement.org descrevendo a sua ideia.'
      },
      templates: 'Modelos',
      showTemplate: 'Editar Turnos',
      editTemplate: 'Editar nome',
      removeTemplate: 'Apagar',
      addTemplate: 'Definir novo modelo',
      action: 'Acção',
      none: 'Nenhuma etiqueta adicionada',
      add: 'Adicionar nova etiqueta',
      remove: 'Remove esta etiqueta'
    },
    teams: {
      title: 'Equipas',
      helpText: {
        main: 'Por cada turno them de haver no minimo uma equipa. Cada equipa é designada uma rota ou localização. Um participante do turno é sempre membro de uma destas equipas.',
        picture: 'O publicador irá conseguir ver está imagem. Isso deverá dar informação extra das tarefas da equipa. Por exemplo você poderia criar uma rota para esta equipa no “Google Mapas” e carregar a imagem para aqui.',
        link: 'Este endereço irá estar conetado com a imagem. Se o usuário selecionar a imagem, ele irá ser reencaminhado para o endereço. Por exemplo você poderia providenciar o endereço do mapa do “Google Mapas”.',
        description: 'Aqui você pode colocar uma descrição para esta equipa. Por exemplo alguma particularidade desta equipa ou rota.'
      },
      id: 'ID',
      name: 'Nome',
      picture: 'Imagem',
      noPicture: 'Nenhuma imagem carregada',
      link: 'Link',
      description: 'Descrição',
      action: 'Acção',
      none: 'Nenhuma equipa adicionada'
    },
    meetings: {
      title: 'Ponto de Encontro',
      helpText: {
        main: 'Todas as equipas de turno podem ter um ponto de encontro designado. Equipas podem se encontrar independente umas das outras. Isto pode ser útil, devido ao facto que certas rotas ou localizações das equipas podem estar distantes umas das outras. Pontos de encontro são definidos com coordenadas.',
        picture: 'O publicador irá poder ver esta imagem. A imagem deverá providenciar informação adicional do ponto de encontro. Por exemplo você poderia carregar uma imagem com os arredores com o “Google Mapas”.'
      },
      id: 'ID',
      name: 'Nome',
      picture: 'Imagem',
      noPicture: 'Nenhuma imagem carregada',
      action: 'Acção',
      none: 'Nenhuns pontos de encontro adicionados'
    }
  },
  notes: {
    description: 'Aqui pode criar notas. Cada Gerente de Projeto, Gerente de Turno e Gerente de Loja pode ver essas notas. Útil para partilhar informações relevantes para a equipa.',
    createNote: 'Criar nota',
    title: 'Titulo',
    text: 'Texto'
  },
  firstLogin: {
    name: 'Bem Vindo',
    text: '<p>Estamos felizes de lhe dar as boas vindas.</p><p>Por favor crie seu nome de usuário e palavra-passe. Irá necessitar de ambos para se conetar ao sistema.</p><p>Depois disso, pode começar a usar o JWManagement.</p><p>Desfrute!</p>',
    button: 'Vamos!',
    tokenError: 'Erro. Por favor contacte o Administrador (support@jwmanagement.org) ou o seu Lider de Projeto.',
    usernameExists: 'Este nome de usuário já está sendo utilizado. Por favor escolha outro.',
    usernameMissing: 'Por favor insira um nome de usuário.'
  }
}

export default pages
