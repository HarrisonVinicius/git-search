export default {
    async FETCH_USER_DATA({ commit }, payload) {
        const userData = await this.$axios.$get(`https://api.github.com/users/${payload}/repos`)
        commit('SET_USER_DATA', userData)
    }    
}