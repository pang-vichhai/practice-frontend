import axios from "axios";
const inBrowser = typeof window !== 'undefined'
const secureInst = axios.create({
    baseURL: process.env.NUXT_ENV_API_URL
})