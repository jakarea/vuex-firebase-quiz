import { mutations } from './mutation-types.js';
import { getters } from './getters.js';
import { actions } from './actions.js';

// Store
export default {
    strict: process.env.NODE_ENV!=='production',
    mutations,
    getters,
    actions,
    state: {
        posts: [],
        post: {},
    },
}
