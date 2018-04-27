import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    strict: debug
})