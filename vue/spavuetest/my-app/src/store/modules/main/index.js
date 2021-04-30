const state = {
    user:''
  }
  
const mutations = {
    UPDATE_USER(state, user){
      state.user = user;
    }
}
  
const actions = {
    addUser({commit}, user) {
      commit('UPDATE_USER', user)
    }
}
  
const getters = {
    getUser: state => state.user
}

const mainModule = {
    state,
    mutations,
    actions,
    getters
}

export default mainModule