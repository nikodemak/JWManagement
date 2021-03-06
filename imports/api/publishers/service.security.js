import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { Random } from 'meteor/random'
import i18next from 'i18next'
import { getMailTexts } from '../../framework/Functions/Mail'
import { checkPermissions } from '../../framework/Functions/Security'
import { validate } from '../../framework/Functions/validations'
import { defaultValidations } from '../../framework/Functions/defaultValidations'
import Users from '../users/Users'
import RoleManager from '../../framework/Managers/RoleManager'
import MailManager from '../../framework/Managers/MailManager'
import State from '../../framework/Constants/State'

function publisherPasswordInsert ({ projectId, userId }, passwords) {
  validate('password', {
    ...defaultValidations.projectAdminAndUserMember,
    password: {
      type: String,
      min: 8
    },
    passwordRepeat: {
      type: String,
      min: 8,
      custom () {
        if (this.value !== this.field('password').value) {
          return 'passwordMismatch'
        }
      }
    }
  }, {
    projectId,
    userId,
    ...passwords
  })

  try {
    Accounts.setPassword(userId, passwords.password)

    return userId
  } catch (e) {
    for (let detail of e.details) {
      if (detail.type === 'minString') {
        detail.type = 'minString8'
      }
    }

    throw new Meteor.Error(e)
  }
}

function publisherPasswordReset ({ projectId, userId }) {
  checkPermissions(projectId, userId)

  try {
    let token = Random.id(43)
    const publisher = Users.findOne(userId, {
      fields: {
        'profile.email': 1,
        'profile.language': 1,
        services: 1
      }
    })

    if (publisher.profile.email === '') {
      throw new Meteor.Error('userHasNoEmail')
    }

    const alreadyHasToken = (publisher.services != null) &&
      (publisher.services.password != null) &&
      (publisher.services.password.reset != null) &&
      publisher.services.password.reset.token

    if (alreadyHasToken) {
      token = publisher.services.password.reset.token
    } else {
      Users.update(publisher._id, {
        $set: {
          'services.password.reset': {
            token: token
          }
        }
      })
    }

    const language = publisher.profile.language
    const localTranslate = i18next.getFixedT(language)

    MailManager.sendMail({
      recipient: publisher.profile.email,
      sender: 'JW Management',
      from: 'support@jwmanagement.org',
      subject: localTranslate('mail.resetPassword.subject'),
      template: 'resetPassword',
      language: language,
      data: {
        token: token,
        language: language,
        content: getMailTexts('resetPassword', language)
      }
    })
  } catch (e) {
    console.log(e)
    throw new Meteor.Error(e)
  }
}

function publisherInvite ({ projectId, userId }) {
  checkPermissions(projectId, userId)

  try {
    let token = Random.id(43)
    const project = Projects.findOne(projectId, {
      fields: {
        name: 1
      },
      email: 1
    })
    const publisher = Users.findOne(userId, {
      fields: {
        'profile.email': 1,
        'profile.firstname': 1,
        'profile.lastname': 1,
        'profile.language': 1,
        services: 1,
        state: 1
      }
    })

    const alreadyHasToken = (publisher.services != null) &&
      (publisher.services.password != null) &&
      (publisher.services.password.reset != null) &&
      publisher.services.password.reset.token

    if (alreadyHasToken) {
      token = publisher.services.password.reset.token
    } else {
      Users.update(publisher._id, {
        $set: {
          'services.password.reset': {
            token: token
          }
        }
      })
    }

    const language = publisher.profile.language
    const localTranslate = i18next.getFixedT(language)

    MailManager.sendMail({
      recipient: publisher.profile.email,
      sender: project.name,
      from: project.email,
      subject: localTranslate('mail.accountCreated.subject'),
      template: 'accountCreated',
      language: language,
      data: {
        token: token,
        project: project.name,
        name: publisher.profile.firstname + ' ' + publisher.profile.lastname,
        language: language,
        content: getMailTexts('accountCreated', language)
      }
    })

    if (publisher.state === 'created') {
      Users.update(userId, {
        $set: {
          state: State.INVITED
        }
      })
    }
  } catch (e) {
    throw new Meteor.Error(e)
  }
}

function removeFromProject ({ projectId, userId }) {
  checkPermissions(projectId, userId)

  if (userId === Meteor.userId()) {
    throw new Meteor.Error('You cannot remove yourself from this project')
  }

  try {
    RoleManager.removeProjectPermission(projectId, userId)

    const project = Projects.findOne(projectId, { fields: { 'tags._id': 1 } })

    if (project && project.tags) {
      for (let tag of project.tags) {
        RoleManager.removeTagPermission(tag._id, userId)
      }
    }

    if (!RoleManager.hasPermissions(userId)) {
      Users.remove(userId)
    }
  } catch (e) {
    throw new Meteor.Error(e)
  }
}

export {
  publisherPasswordInsert,
  publisherPasswordReset,
  publisherInvite,
  removeFromProject
}
