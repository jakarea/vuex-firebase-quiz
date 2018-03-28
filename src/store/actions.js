export const actions = {
    fetchPosts({ commit }) {
        /*axios.get(`http://jsonplaceholder.typicode.com/posts`)
            .then(function (response) {
                commit('LOAD_POSTS', response.data);
            })
            .catch(function (error) {
                console.error(error);
            });*/
    },
    fetchPost({ commit }, id) {
    }
}