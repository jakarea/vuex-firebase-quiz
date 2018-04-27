import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)

firebase.initializeApp({
	projectId: 'vue-firebase-quiz',
  	databaseURL: 'https://vue-firebase-quiz.firebaseio.com',
  	apiKey: 'AIzaSyCXHZVqI6y09vM6Hk06JG-_P9ahyMj0ezw',
  	authDomain: 'vue-firebase-quiz.firebaseapp.com',
})

export const db = firebase.firestore()

new Vue({
	router,
	store,
  	el: '#app',
  	render: h => h(App)
})
