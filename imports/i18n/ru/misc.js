const misc = {
  input: {
    username: 'Логин',
    firstname: 'Имя',
    lastname: 'Фамилия',
    email: 'E-Mail Адрес',
    telefon: 'Телефон',
    congregation: 'Собрание',
    languages: 'Иностранные языки',
    gender: 'Пол',
    privilegeOfService: 'Преимущества',
    privilegeOfMinistry: 'Назначение как',
    password: 'Пароль',
    passwordRepeat: 'Повторить пароль',
    newPassword: 'Новый пароль',
    newPasswordRepeat: 'Повторить новый пароль'
  },
  role: {
    role: 'Роли',
    admin: 'Администратор',
    shiftScheduler: 'Назначение смен',
    shiftAdmin: 'Планировщик смен',
    storeAdmin: 'Ответственный за литературу',
    member: 'Участник',
    teamleader: 'Руководитель группы',
    substituteTeamleader: 'Зам-Руководитель группы',
    participant: 'Участник',
    nothing: 'не участник',
    noPermission: 'Нет разрешения'
  },
  permissions: {
    notAdmin: 'Этот пользователь не является администратором проекта',
    notShiftScheduler: 'Этот пользователь не является распорядителем смен.',
    notShiftAdmin: 'Этот пользователь не является планировщиком смен',
    notStoreAdmin: 'Этот пользователь не является ответственным за литературу',
    notProjectParticipant: 'Этому пользователю не разрешено участвовать в этом проекте',
    notTeamleader: 'Этому пользователю не разрешено быть руководителем смены',
    notTagParticipant: 'Этому пользователю не разрешено участвовать в этом теге',
    notTeamParticipant: 'Этому пользователю не разрешено участвовать в этой группе/Team'
  },
  time: {
    start: 'Начало',
    end: 'Конец',
    suffix: 'Время',
    years: 'год',
    to: 'до'
  },
  scheduling: {
    name: 'Назначение',
    direct: 'Автоматически',
    manual: 'Вручную'
  },
  password: {
    tooShort: 'Пароль должен состять как минимум из 8 знаков!',
    notMatching: 'Пароли не схожи друг с другом!'
  },
  weekdays: {
    mo: 'Понедельник',
    tu: 'Вторник',
    we: 'Среда',
    th: 'Четверг',
    fr: 'Пятница',
    sa: 'Суббота',
    su: 'Воскресенье'
  },
  intervals: {
    m: 'Вручную',
    every: 'Каждую неделю',
    even: 'Каждую чётную неделю',
    odd: 'Каждую нечётную неделю'
  },
  privileges: {
    auxiliary: 'Подс.Пионер',
    regular: 'Общ.Пионер',
    special: 'Спец.Пионер',
    circuit: 'РН',
    bethelite: 'Вефилец',
    ldc: 'LDC',
    coordinator: 'КCC',
    secretary: 'Секр.',
    serviceOverseer: 'СH',
    elder: 'С',
    servant: 'СП',
    publisher: 'В'
  },
  period: {
    d: 'Д',
    w: 'Н',
    '4w': '4Н'
  }
}

export default misc
