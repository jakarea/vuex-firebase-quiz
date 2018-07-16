import firebase from 'firebase'
export default {
	getUserByEmailAndPassword (context, payload) {
		firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
		.then((auth) => {
				let user = {
					email: auth.email,
					photoURL: auth.photoURL,
					name:auth.displayName
				}
			context.commit('SET_USER',user)
		})
		.catch((error) => {
			context.commit('SET_ERROR',error)
		})
	},
	registerUserByEmailAndPassword(context, payload){
		firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).catch((error) => {
			console.log(error.code)
			console.log(error.message)
		})
		.then( (auth) => {
			console.log('auth:', auth)
			auth.updateProfile({
				displayName: payload.name,
				photoURL: 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Giant-Man-icon.png'
			});
		})
		.catch(function(error) {
			console.log('Reigstration fail')
		});

		firebase.auth().onAuthStateChanged(function(auth) {
			if (auth) {
				let user = {
					email: auth.email,
					photoURL: auth.photoURL,
					name:auth.displayName
				}
				context.commit('SET_USER',user)
			} else {
				console.log('Authentication fail')
			}
		});
	},

	authenticatUserByFacebook(context){
		let provider = new firebase.auth.FacebookAuthProvider()
			firebase.auth().signInWithPopup(provider).then((result) => {
			let user = {
				name: result.user.displayName,
				email: result.user.email,
				uid: result.user.uid,
				photo: result.user.photoURL,
				token: result.credential.accessToken
			}

			context.commit('SET_USER',user)
		},
		function(error) {
			let email = error.email;
			let credential = error.credential;
			console.log('error', error)
			if (error.code === 'auth/account-exists-with-different-credential') {
				firebase.auth().fetchProvidersForEmail(email).then(function(providers) {
				// The returned 'providers' is a list of the available providers
				// linked to the email address. Please refer to the guide for a more
				// complete explanation on how to recover from this error.
				});
			}
		});
	},

	unSetUser(context){
		context.commit('UNSET_USER')
	}
}
