import { apiClient } from "../components/ApiClient/ApiClient";

export async function getCategories(){
    


    

    const options = {
        method:"GET",
        url:"/categories"
    }
    try {
        const response = await apiClient.request(options);
        if(response.success){
            return response;
        }
        
    } catch (error) {
        throw error
    }


}

export async function getCategoryById(id){
    try {
        const options = {
            method:"GET",
            url:`/categories/${id}`
        }
        const response = await apiClient.request(options);
        if(response.success){
            return response;
        }
    } catch (error) {
        console.log(error);
        
    }

}

export async function getSubCategoryById(id){
    try {
        const options = {
            method:"GET",
            url:`/subcategories/${id}`
        }
        const response = await apiClient.request(options);
        if(response.success){
            return response;
        }
    } catch (error) {
        console.log(error);
        
    }

}