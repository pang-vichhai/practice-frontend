import getters from "./getters"
export const state = () => ({
    tasks:[{
        id:1,
        title:'First',
        date:'12/12221'
    }]
})

export default {
    namespaced: true,
    state,
    getters

}