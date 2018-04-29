export default {
	'SET_USER' (state, payload){
		console.log('mutation')
		state.user = payload
	},

	'UNSET_USER'(){
		state.user = ''
		console.log('UNSET_USER')
	}
}