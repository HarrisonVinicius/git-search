export default {
    // this action when called is responsible for making the request to the endpoint and returning the data triggering the mutation
    // this action receives the username passed as parameter
    async FETCH_USER_DATA({ commit }, payload) {
        const userData = await this.$axios.$get(`https://api.github.com/users/${payload}/repos`)
        commit('SET_USER_DATA', userData)
    }    
}