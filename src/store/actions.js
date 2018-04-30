import firebase from 'firebase'
export default {
	getUserByEmaailAndPassword (context, payload) {
		firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
		.then( (user) => {
				
		})
		.catch((error) => {
				console.log(error)
		})
	},

	unSetUser(context){
		console.log('unset user')
		context.commit('UNSET_USER')
	}
}
