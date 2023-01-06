import axios from "axios";

const inBrowser = typeof window !== 'undefined'
const secureInst = axios.create({
    baseURL: process.env.NUXT_ENV_API_URL,
    withCredentials: false,
    headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
    }
})
secureInst.interceptors.request.use((config)=>{
    const method = config.method.toUpperCase()
    if(method !== 'OPTION'){
        const token =  `${inBrowser ? sessionStorage.getItem('token') : ''}`
        config.headers = {
            ...config.headers,
            'Access-Control-Allow-Origin':'*',
            Authorization : `Bearer${token}`
        }
    }
    return config
})
export default {
    async apiCreateNewTask({dispatch,commit},payload){
        return await new Promise((resolve,reject)=>{
            secureInst
            .post(`todos/create`,)
            .then()
            .catch()
        })
    },
    async apiGetAllTask({dispatch,commit},payload){
        return await new Promise((resolve,reject)=>{
            secureInst.get().then().catch()
        })
    },
    async apiUpdateTask({dispatch,commit},payload){
        return await new Promise((resolve,reject)=>{
            secureInst.put().then().then()
        })
    },
    async apiDeleteTask({dispatch,commit},payload){
        return await new Promise((resolve,reject)=>{
            secureInst.delete().then().catch()
        })
    }
}