import axios from "axios"
import  userStore  from '../store/userstore'
//import { Notification } from "antd";

const http = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 2000
})

//请求拦截器
http.interceptors.request.use(
    async (config) => {
        const userInfo = userStore.getState().userInfo; // 直接访问 zustand store 的状态
        const token = userInfo.token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        console.log(error)
        return Promise.reject(error)
    }
);

//响应拦截器
http.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        console.log(error)
        //ElMessage.error(error.response.data.message);
        return Promise.reject(error);
    }
)

export default http;