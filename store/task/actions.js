import axios from "axios";

const baseURL = process.env.NUXT_ENV_API_URL
export default{
    async apiGetAllTask({dispatch,commit}){
        return await new Promise((resolve,reject)=>{
            axios
            .get(`${baseURL}/todos`)
            .then(
                (res)=>{
                    const obj = res.data
                    console.log(obj)
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
    apiDeleteTask({dispatch},payload){
        return new Promise((resolve,reject)=>{
            axios
            .delete(`${baseURL}/todos/${payload}`)
            .then(
                dispatch('apiGetAllTask')
            )
            // .then(
            //     commit('delete_task',payload.id)
            // )
        })
    },
    async apiGetOneTask({commit},payload){
        return await new Promise((resolve,reject)=>{
            axios.get(`${baseURL}/todos/${payload}`)
            .then(
                (res)=>{
                    const data = res.data
                    commit('set_one_task',data)
                    if(!data){
                        reject(new Error('API return failed'))
                    }
                    resolve(data)
            })
        })
    },
    async apiUpdateTask({dispatch,commit},payload){
        return await new Promise((resolve,reject)=>{
            axios
            .put(`${baseURL}/todos/${payload.id}`,{content : payload.content})
            .then(res=>{resolve(res)})
            .catch((err)=>{reject(err)})
        })
    }
}

