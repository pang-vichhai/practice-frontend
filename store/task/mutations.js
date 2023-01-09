export default {
    setTask(state,payload){
        state.tasks.push(payload)
    },
    deleteTask(state,id){
        const idx = state.tasks.findIndex((v) => v.id === id)
        state.tasks.splice(idx,1)
    },
    set_all_task(state,payload){
        state.tasks = payload
    }
}