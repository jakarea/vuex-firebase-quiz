import firebase from 'firebase'
export default {
	getUserByEmailAndPassword (context, payload) {
		firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
		.then( (auth) => {
				let user = {
						email: auth.email,
				}
				context.commit('SET_USER',user)
		})
		.catch((error) => {
				console.log(error)
		})
	},

	unSetUser(context){
		context.commit('UNSET_USER')
	}
}
