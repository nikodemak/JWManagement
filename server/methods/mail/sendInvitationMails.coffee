import i18next from 'i18next'

Meteor.methods

	sendInvitationMails: (userIds, projectId) ->
		project = Projects.findOne projectId, fields: name: 1, email:1

		check userIds, Array
		check { userId: Meteor.userId(), projectId: projectId }, isAdmin

		for userId in userIds
			token = Random.id 43

			user = Meteor.users.findOne userId, fields:
				services: 1

			if user?.services?.password?.reset?.token
				token = user.services.password.reset.token
			else
				Meteor.users.update userId, $set: 'services.password.reset': 'token': token

			user = Meteor.users.findOne userId, fields:
				'profile.email': 1
				'profile.firstname': 1
				'profile.lastname': 1
				'profile.language': 1
				state: 1

			localTranslate = i18next.getFixedT(user.profile.language)

			Meteor.call 'sendMail',
				recipient: user.profile.email
				sender: project.name
				from: project.email
				subject: localTranslate('mail.accountCreated.subject')
				template: 'accountCreated'
				language: user.profile.language
				data:
					token: token
					project: project.name
					name: user.profile.firstname + ' ' + user.profile.lastname
					language: user.profile.language
					content: getMailTexts 'accountCreated', localTranslate

			if !user.state || user.state == 'created'
				Meteor.call 'setState', projectId, userId, 'invited'
