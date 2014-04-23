// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '522902561068910', // your App ID
		'clientSecret' 	: '520b60e6034b70f427f9fe708880933b', // your App Secret
		'callbackURL' 	: 'http://localhost:8085/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'YPXZTl3fJI4FsdJNEl6023eHW',
		'consumerSecret' 	: 'NRbxdRSRr9Fbazb6U3dAAEVHbeMslZZobefwTDG6bpCb41MWe3',
		'callbackURL' 		: 'http://localhost:8085/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};