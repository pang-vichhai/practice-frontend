import getters from "./getters"
export const state = () => ({
    tasks:[{
        title:'First',
        desc:'',
        date:''
    }]
})

export default {
    namespaced: true,
    state,
    getters

}