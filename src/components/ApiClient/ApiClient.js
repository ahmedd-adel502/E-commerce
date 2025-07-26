import axios from "axios";
import { ApiConfig } from "../../pages/Config/Config";

export const apiClient = axios.create({
    baseURL: `${ApiConfig.baseURL}/api/${ApiConfig.version}`,
    timeout: `${ApiConfig.timeout}`,
});
apiClient.interceptors.response.use((response)=>{
    return Promise.resolve({
        success:true,
        status:response.status,
        data:response.data
    });
},(error)=>{
    return Promise.reject({
        success:false,
        error:error,
        message: error?.response?.data?.message
    });
})


apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")||sessionStorage.getItem("token");
    if (token) {
        config.headers.token=token;
    }
    return config;
})