import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'
import SimpleSchema from 'simpl-schema'
import Permissions from '../../framework/Constants/Permissions'
import RoleManager from '../../framework/Managers/RoleManager'
import SystemLanguages from '../../framework/Constants/SystemLanguages'
import { validate } from '../../framework/Functions/validations'

Meteor.methods({
  'project.search' ({ searchString, limit }) {
    if (!Roles.userIsInRole(Meteor.userId(), 'support', Roles.GLOBAL_GROUP)) {
      return []
    }

    const result = {
      total: 0,
      items: []
    }

    if (typeof searchString !== 'string' || searchString === '') {
      return result
    }

    const regEx = new RegExp(searchString, 'i')

    const cursor = Projects.find({
      $or: [
        { _id: searchString },
        { name: regEx }
      ]
    }, {
      fields: {
        'name': 1
      },
      sort: {
        name: 1
      },
      limit: limit
    })

    result.total = cursor.count()
    result.items = cursor.fetch()

    return result
  },
  'project.get' ({ projectId }) {
    const project = Projects.findOne(projectId, {
      fields: {
        name: 1,
        'news.text': 1,
        vesselModule: 1
      }
    })

    if (project == null) {
      throw new Meteor.Error('projectNotFound')
    }

    if (!Roles.userIsInRole(Meteor.userId(), Permissions.member, projectId)) {
      throw new Meteor.Error('youAreNotProjectAdmin')
    }

    return project
  },
  'project.insert' (_, project) {
    validate('project', {
      name: {
        type: String,
        min: 3
      },
      email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
      },
      language: {
        type: String,
        min: 2,
        allowedValues: SystemLanguages.allowedValues
      }
    }, project)

    const projectId = Projects.insert({
      name: project.name,
      email: project.email,
      language: project.language,
      news: {},
      wiki: {
        tabs: []
      },
      tags: [],
      teams: [],
      meetings: [],
      store: {}
    })

    Roles.addUsersToRoles(Meteor.userId(), Permissions.admin, projectId)

    return projectId
  },
  'project.leave' ({ projectId }) {
    const project = Projects.findOne(projectId, { fields: { 'tags._id': 1 } })

    if (project == null) {
      throw new Meteor.Error('projectNotFound')
    }

    try {
      const userId = Meteor.userId()

      RoleManager.removeProjectPermission(projectId, userId)

      if (project && project.tags) {
        for (let tag of project.tags) {
          RoleManager.removeTagPermission(tag._id, userId)
        }
      }
    } catch (e) {
      throw new Meteor.Error(e)
    }
  },
  'project.support.get' () {
    return {
      supportText: 'If you encounter any problems or have any questions or ideas, please tell us.\nHere is a list of possibilities on how to get in contact with us:',
      phone: '+49 177 3291529',
      github: 'github.com/JWDeveloper/JWManagement/issues',
      discord: 'discord.gg/Te9TKD8',
      donateText: 'Since JW Management is used widely all around the earth now, our operating costs have increased in order to make it possible for you to have a smooth experience.\nThis means that every publisher that uses the system costs us about 0.15€ (15 cents) per year.\nWe would like to encourage you to think about whether you would be able to contribute something. (2 Corinthians 9:7)\nBy working together and each of us doing our part, we can keep the system running and are able to provide support for you.\nBrotherly love, The JW Management Team',
      paypal: 'paypal.me/MarvinZeising',
      iban: 'DE12 5001 0517 5570 1628 99'
    }
  }
})
