import { apiClient } from "../components/ApiClient/ApiClient";

export async function getAllBrands(){
    try {
        const options = {
            url:"/brands",
            method:"GET"
        }
        const response = await apiClient.request(options);
        return response;
        
    } catch (error) {
        throw error;
        
    }
}

export async function getBrandById(id) {
    try {
        const options = {
            url:`/brands/${id}`,
            method:"GET"
        }
        const response = await apiClient.request(options);
        console.log(response);
        
        
    } catch (error) {
        throw error;
        
    }
}