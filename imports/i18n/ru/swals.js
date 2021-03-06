const swal = {
  error: 'Ошибка',
  publisherInOtherTeam: 'Этот участник уже назначен в другой группе. Чтобы назначить его в эту группу, сначала отклони его участие в другой группе.',
  onlyTeam: 'Ты не можешь удалить эту группу. Это единственная группа в этой смене. Каждая смена нуждается по крайней мере в одной группе.',
  noTeamleader: 'В каждой группе всегда должен быть назначен руководитель группы. К сожалению, этот участник не может быть назначен как руководитель группы.',
  ownPermission: 'Ты не можете лишить себя полномочий. Это может сделать другой администратор проекта.',
  approvalInformed: 'Этот участник уже был проинформирован о его назначении.',
  declinementInformed: 'Этот участник уже проинформирован об отказе его заявления.',
  vacationEndInPast: 'Дата окончания не может быть в прошлом.',
  missingTag: 'Ещё не был создан Тег. Это обязательно нужно сделать. Перейди в Управление > Настройки и создай новый Тег.',
  logout: {
    title: 'Подсказка',
    text: 'Нет необходимости выходить из системы JW-Management. Твоё соединение зашифровано, и мы сохраняем информацию о сеансе только в локальном хранилище браузера на твоём устройстве. Таким образом, никто не может взломать твою сессию.',
    confirm: 'Всё равно выйти!',
    cancel: 'Отменить'
  },
  invite: {
    user: {
      title: 'Пригласить участника?',
      text: 'Так как этот участник <b>уже имеет аккаунт</b>, для него не нужно создавать новую учетную запись. Вместо этого он <b>просто получит доступ к этому проекту</b>.<br>Конечно<b>мы оповестим его</b> об этом. <br><p>Если с этим E-Mail есть несколько аккаунтов, то выбери правильный из списка:</p>'
    },
    users: {
      title: 'Ты уверен?',
      text: 'Всем выбранным участникам, будет выслано приглашение по E-Mail.',
      confirm: 'Пригласить',
      cancel: 'Отменить'
    }
  },
  sendMail: {
    confirmWeek: {
      title: 'Ты уверен?',
      text: 'Все назначенные участники получат сообщение о подтверждении, а все отклоненные участники получат сообщение об отказе, по E-Mail.',
      confirm: 'Да',
      cancel: 'Отменить'
    },
    confirmation: {
      title: 'Оповестить участников?',
      text: 'Участник будет оповещён о его назначении, по E-Mail.',
      confirm: 'Да',
      cancel: 'Отменить'
    },
    declined: {
      title: 'Оповестить участников?',
      text: 'Участник будет оповещён о том что ему отказали, по E-Mail.',
      confirm: 'Да',
      cancel: 'Отменить'
    },
    selectTag: {
      title: 'Оповестить Тег. Какой?',
      text: 'Выбери Тег, который ты хочешь оповестить:',
      confirm: 'OK',
      cancel: 'Отменить'
    },
    teamUpdate: {
      user: {
        title: 'Руководитель группы уже проинформирован',
        text: 'Руководитель этой группы ранее уже был уведомлен по E-Mail о его группе. Выслать сообщение об изменении?',
        confirm: 'Да',
        cancel: 'Нет'
      },
      general: {
        title: 'Ты уверен?',
        text: 'Все ранее оповещённые участники получат письмо с обновленными данными их группы.',
        confirm: 'Да',
        cancel: 'Нет'
      }
    },
    understaffed: {
      title: 'Оповестить участников?',
      text: 'Хочешь ли ты, чтобы ! ВСЕ ! участники этого Тега получили E-Mail, о том что эта группа нуждается в участниках?',
      confirm: 'Да',
      cancel: 'Нет',
      teamleader: {
        title: 'Оповестить руководителей групп?',
        text: 'Оповестить всех руководителей групп о том, что в одной смене не хватает руководителя группы?',
        confirm: 'Да',
        cancel: 'Нет'
      }
    }
  },
  add: {
    meeting: {
      title: 'Создать новое место встречи/ВПС?',
      text: '',
      placeholder: 'Название',
      confirm: 'Создать',
      cancel: 'Отменить'
    },
    question: {
      title: 'Создать Вопрос/Название/Заголовок',
      text: '',
      placeholder: 'Вопрос/Название/Заголовок',
      inputError: 'Ты обязательно должет заполнить это поле!',
      confirm: 'Создать',
      cancel: 'Отменить'
    },
    tab: {
      title: 'Создать новую вкладку',
      text: '',
      placeholder: 'Название/Заголовок',
      inputError: 'Это название недействительное для вкладки!',
      confirm: 'Создать',
      cancel: 'Отменить'
    },
    tag: {
      title: 'Создать новый Тег',
      text: '',
      placeholder: 'Название',
      inputError: 'Это название недействительное для Тега!',
      confirm: 'Создать',
      cancel: 'Отменить'
    },
    team: {
      title: 'Создать новую группу',
      text: '',
      placeholder: 'Название',
      inputError: 'Это название недействительное для группы!',
      confirm: 'Создать',
      cancel: 'Отменить'
    },
    template: {
      title: 'Создать шаблон недели',
      text: '',
      placeholder: 'Название',
      inputError: 'Это название недействительное для шаблона недели!',
      confirm: 'Создать',
      cancel: 'Отменить'
    },
    user: {
      title: 'Сделано!',
      text: 'Пользователь был создан.'
    },
    users: {
      title: 'Ты уверен?',
      text: 'Все показанные возвещатели будут добавлены к проекту..',
      confirm: 'Добавить',
      cancel: 'Отменить'
    }
  },
  update: {
    file: {
      title: 'Изменить название файла',
      text: '',
      placeholder: 'Название файла',
      inputError: 'Это название недействительное для названия файла!',
      confirm: 'Изменить',
      cancel: 'Отменить'
    },
    password: {
      title: 'Изменение пароля',
      passwordOld: 'Старый пароль',
      passwordNew1: 'Новый пароль',
      passwordNew2: 'Повтори новый пароль',
      confirm: 'Изменить',
      cancel: 'Отменить',
      passwordChanged: 'Пароль был успешно изменён.'
    },
    question: {
      title: 'Изменить Вопрос/Название',
      text: '',
      placeholder: 'Вопрос/Название',
      confirm: 'Изменить',
      cancel: 'Отменить'
    },
    template: {
      title: 'Изменить имя',
      text: '',
      placeholder: 'Имя',
      confirm: 'Изменить',
      cancel: 'Отменить'
    }
  },
  delete: {
    account: {
      title: 'Ты действительно желаешь удалить свой аккаунт на JWManagement?',
      text: 'Знай что твой аккаунт будет удалён безвозвратно и не может быть восстановлен!',
      confirm: 'Да, удалите мой аккаунт!',
      cancel: 'Отменить'
    },
    allShifts: {
      title: 'Ты уверен?',
      text: 'Все Смены а также Заявления (подтверждённые и не подтверждённые) этого дня будут безвозвратно удалены!',
      confirm: 'Удалить',
      cancel: 'Отменить'
    },
    file: {
      title: 'Действительно удалить файл?',
      text: 'Помни что после удаления, этот файл больше невозможно будет восстановить!',
      confirm: 'Удалить',
      cancel: 'Отменить'
    },
    language: {
      title: 'Действительно удалить этот язык?',
      text: 'Это действие безвозвратно удалит как язык так и весь в наличии состав этой публикации!',
      confirm: 'Удалить',
      cancel: 'Отменить'
    },
    meeting: {
      title: 'Действительно удалить это место встречи/ВПС?',
      text: 'Это действие безвозвратно удалит это место встречи/ВПС также из всех смен! Это значительно повлияет на весь проект, просим тебя подтвердить твоё решение!',
      checkInput: 'Удалить',
      placeholder: 'Введи "{{0}}" для подтверждения',
      inputError: 'Твой текст не совпадает с нужным словом: "{{0}}" Введи текст "{{0}}" в строку!',
      confirm: 'Удалить',
      cancel: 'Отменить'
    },
    note: {
      title: 'Действительно удалить эту записку?',
      text: 'Это действие безвозвратно удалит эту записку.',
      confirm: 'Удалить',
      cancel: 'Отменить'
    },
    project: {
      title: 'Действительно безвозвратно удалить этот проект?',
      text: 'Это действие также безвозвратно удалит все непосредственно и транзитивно зависимые от него данные (например, смены, отчёты, заявления, публикации и т.д.). Только аккаунты пользователей останутся незатронутыми.',
      checkInput: 'Действительно удалить этот проект!',
      placeholder: 'Введи "{{0}}" для подтверждения',
      inputError: 'Твой текст не совпадает с нужным текстом: "{{0}}" Введи текст "{{0}}" в строку!',
      confirm: 'Удалить',
      cancel: 'Отменить'
    },
    publication: {
      title: 'Удалить эту публикацию из депо/склада?',
      text: 'Это приведет к потере всех данных этой публикации(все языки и их данные).',
      confirm: 'Удалить',
      cancel: 'Отменить'
    },
    question: {
      title: 'Действительно удалить этот вопрос?',
      text: 'Этот вопрос с ответами будет безвозвратно удалён!',
      confirm: 'Удалить',
      cancel: 'Отменить'
    },
    shift: {
      title: 'Действительно удалить эту смену?',
      text: 'Все заявления и участие этой смены (всех групп этой смены!) будут безвозвратно удалены!',
      confirm: 'Удалить',
      cancel: 'Отменить'
    },
    store: {
      title: 'Действительно сбросить депо/склад?',
      text: 'Это приведет к безвозвратной потере !всех! публикаций, данных о публикациях и языках!',
      confirm: 'Сбросить',
      cancel: 'Отменить'
    },
    tab: {
      title: 'Действительно удалить эту вкладку?',
      text: 'Вся вкладка со всеми вопросами будет удалена!',
      confirm: 'Удалить',
      cancel: 'Отменить'
    },
    tag: {
      title: 'Действительно удалить этот Тег?',
      text: '!Внимание! Это удалит все смены и все заявления на эти смены, принадлежащие к этому Тегу. Это значительно повлияет на весь проект, просим тебя подтвердить твоё решение!',
      checkInput: 'Удалить этот Тег',
      placeholder: 'Введи "{{0}}" для подтверждения',
      inputError: 'Твой текст не совпадает с нужным текстом: "{{0}}" Введи текст "{{0}}" в строку!',
      confirm: 'Удалить',
      cancel: 'Отменить'
    },
    team: {
      title: 'Действительно удалить группу?',
      text: 'Группы также удалятся из существующих смен. Заявления на участие в этих группах распределяются между другими группами. Это значительно повлияет на весь проект, просим тебя подтвердить твоё решение!',
      checkInput: 'Удалить группу',
      placeholder: 'Введи "{{0}}" для подтверждения',
      inputError: 'Твой текст не совпадает с нужным текстом: "{{0}}" Введи текст "{{0}}" в строку!',
      confirm: 'Удалить',
      cancel: 'Отменить'
    },
    template: {
      title: 'Действительно удалить шаблон недели?',
      text: '',
      confirm: 'Удалить',
      cancel: 'Отменить'
    },
    user: {
      title: 'Действительно удалить участника из проекта?',
      text: 'Этот участник будут лишён всех прав в этом проекте! Это НЕ удаляет его аккаунт на JWManagement.',
      confirm: 'Удалить',
      cancel: 'Отменить'
    }
  },
  request: {
    approve: {
      title: 'Действительно назначить этого участника?',
      text: 'Внимание, этот участник был отклонен. Поэтому, пожалуйста, ещё раз убедитесь и подтверди, что он все ещё хочет и может принять участие.',
      confirm: 'Да',
      cancel: 'Нет'
    },
    cancel: {
      title: 'Действительно отказаться от участия?',
      text: 'Это может повлиять на всю группу, даже так, что вся группа будет расформирована! Лучше сначала обратись к ответственным братьям!',
      confirm: 'Да',
      cancel: 'Отменить'
    },
    decline: {
      title: 'Действительно отклонить участие участника?',
      text: 'Если участник уже получил E-Mail с подтверждением его участия, тогда он получит новое сообщение о том что его участие было только что отклонено.',
      confirm: 'Да',
      cancel: 'Нет'
    },
    maxReached: {
      title: 'Выбрано слушком много участников!',
      text: 'Повысить макс. число участников с {{0}} на {{1}} и подтвердить всех?',
      confirm: 'Подтвердить',
      cancel: 'Отменить'
    },
    minNotReached: {
      title: 'Выбрано недостаточное количество участников!',
      text: 'Изменить мин. число участников с {{0}} на {{1}}  и подтвердить всех выбранных?',
      confirm: 'Подтвердить',
      cancel: 'Отменить'
    },
    minReached: {
      title: 'Действительно отказать участнику?',
      text: 'Достигнут минимальный предел группы. Если ты откажешь этому участнику, то система отменит участие всей группе!',
      confirm: 'Да, отменить всей группе!',
      cancel: 'Нет'
    },
    noNewTeamleader: {
      title: 'Действительно отказать руководителю группы?',
      text: 'К сожалению среди участников нет друго возможного руководителя группы. Если ты откажешь этому участнику, то система отменит участие всей группе!',
      confirm: 'Да, отменить всей группе!',
      cancel: 'Нет'
    }
  }
}

export default swal
