import axios from "axios";

const baseURL = process.env.NUXT_ENV_API_URL
export default{
    //funciton for fetching all task from backend
    async apiGetAllTask({commit}){
        return await new Promise((resolve,reject)=>{
            axios
            .get(`${baseURL}/todos`)
            .then(
                (res)=>{
                    const obj = res.data
                    if(!obj){
                        reject(new Error('Api connection is wrong'))
                    }
                    resolve(res)
                    commit('set_all_task',obj)
                }
            )
            .catch()
        })
    },
    //function for create new task
    async apiCreateTask({dispatch,commit},payload){
        return await new Promise((resolve,reject)=>{
            axios
            .post(`${baseURL}/todos`,
                {content : payload})
            .then((res)=>{
                const obj = res.data
                if(!obj){
                    reject(new Error('API return is wrong'))
                }
                resolve(obj)
            })
        })
    },
    //function for deleting task
    async apiDeleteTask({dispatch},payload){
        return await new Promise((resolve,reject)=>{
            axios
            .delete(`${baseURL}/todos/${payload}`)
            .then(
                dispatch('apiGetAllTask')
            )
        })
    },
    //function for get one task
    async apiGetOneTask({commit},payload){
        return await new Promise((resolve,reject)=>{
            axios.get(`${baseURL}/todos/${payload}`)
            .then(
                (res)=>{
                    resolve(res)
                    
            })
        })
    },
    //function for update
    apiUpdateTask({commit},payload){
        return new Promise((resolve,reject)=>{
            axios
            .put(`${baseURL}/todos/${payload.id}`,{content : payload.content})
            .then(
                (res)=>{ 
                    resolve(res)
                })
            .catch(
                (err)=>{reject(err)
                })
        })
    },
    apiMakeDone({commit},payload){
        return new Promise((resolve,reject)=>{
            axios
            .put(`${baseURL}/todos/${payload.id}`,{done:payload.done})
            .then((res)=>{resolve(res)})
            .catch((err)=>{reject(err)})
        })
    }
}

