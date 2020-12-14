export const state = () => ({
    userData: []
})
export const getters = {}
export const mutations = {
    SET_USER_DATA(state, data) {
        state.userData = data
    }   
}
// export const actions = {
//     async FETCH_USER_DATA({ commit }, payload) {
//         const userData = await this.$axios.$get(`https://api.github.com/users/${payload}/repos`)
//         commit('SET_USER_DATA', userData)
//     }   
// }