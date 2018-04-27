export default {
	'CHANGE_PHONE' (state, payload){
		state.user.phone = payload
	},
	
	'SET_USER' (state, payload){
		state.user = payload
	}
}