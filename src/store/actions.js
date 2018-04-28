export default {
	setUser (context, payload) {
		context.commit('SET_USER', payload)
	},

	unSetUser(context){
		console.log('unset user')
		context.commit('UNSET_USER')
	}
}
