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
    }
}

// const inBrowser = typeof window !== 'undefined'
// const secureInst = axios.create({
//     baseURL: process.env.NUXT_ENV_API_URL,
//     withCredentials: false,
//     headers:{
//         'Content-Type':'application/json',
//         'Access-Control-Allow-Origin':'*'
//     }
// })
// secureInst.interceptors.request.use((config)=>{
//     const method = config.method.toUpperCase()
//     if(method !== 'OPTION'){
//         const token =  `${inBrowser ? sessionStorage.getItem('token') : ''}`
//         config.headers = {
//             ...config.headers,
//             'Access-Control-Allow-Origin':'*',
//             Authorization : `Bearer${token}`
//         }
//     }
//     return config
// })
// export default {
//     async apiCreateNewTask({dispatch,commit},payload){
//         return await new Promise((resolve,reject)=>{
//             $axois
//             .$post(`todos/create`,{})
//             .then()
//             .catch()
//         })
//     },
//     async apiGetAllTask({dispatch,commit},payload){
//         return await new Promise((resolve,reject)=>{
//             secureInst.get().then().catch()
//         })
//     },
//     async apiUpdateTask({dispatch,commit},payload){
//         return await new Promise((resolve,reject)=>{
//             secureInst.put().then().then()
//         })
//     },
//     async apiDeleteTask({dispatch,commit},payload){
//         return await new Promise((resolve,reject)=>{
//             secureInst.delete().then().catch()
//         })
//     }
// }