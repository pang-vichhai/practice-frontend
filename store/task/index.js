import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
export const state = () => ({
    tasks:[],
    task:null,
    update:null
})

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}