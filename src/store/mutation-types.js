export const LOAD_POSTS='LOAD_POSTS';
export const LOAD_POST='LOAD_POST';

export const mutations = {
    [LOAD_POSTS](state, payload) {
        state.posts=payload;
    },
    [LOAD_POST](state, payload) {
        state.post=payload;
    }
}