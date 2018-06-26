import Vue from 'vue'
import * as types from './mutation-types'

function setUser (state, payload) {
  state.user = payload
}

function unSetUser (state) {
  state.user = {}
}

function setError (state, payload) {
  state.errors = payload
}

export default {
  [types.SET_USER]: setUser,
  [types.UNSET_USER]: unSetUser,
  [types.SET_ERROR]: setError,
}
