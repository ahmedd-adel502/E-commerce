import { apiClient } from "../components/ApiClient/ApiClient";


export async function addProductToWishlist({id}){
    


    
   try {
         const options={
        url:`/wishlist`,
        method:"POST",
        data:{
            productId:id
        }
    }
    const response = await apiClient.request(options);
    return response;
    
   } catch (error) {
    throw error
    
    
   }
}

export async function getWishlistItems(){
    


    
    try {
        const options = {
        url:"/wishlist",
        method:"GET"
    }
    const response = await apiClient.request(options);
    return response
    } catch (error) {
    throw error
          
}}

export async function deleteProductFromWishlist({id}){
    


    
    try {
        const options = {
        url:`/wishlist/${id}`,
        method:"DELETE"
    }
    const response = await apiClient.request(options);
    return response;    
    } catch (error) {
        throw error
        
}
}