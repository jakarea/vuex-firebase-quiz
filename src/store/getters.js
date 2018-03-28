export const getters = {
    getPosts(state) {
        return state.posts
    },
    getPostById(state) {
        return (id) => state.posts[id-1]? state.posts[id-1]:false
    },
    getPost(state) {
        return state.post
    },
    filter(state,keyword) {
      return keyword => state.posts.filter(post =>{
        return post.title.toLowerCase().includes(keyword.toLowerCase())
    });
  },
}