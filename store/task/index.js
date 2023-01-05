import getters from "./getters"
import mutations from "./mutations"
export const state = () => ({
    tasks:[]
})

export default {
    namespaced: true,
    state,
    getters,
    mutations

}