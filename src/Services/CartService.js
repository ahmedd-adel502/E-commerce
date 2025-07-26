import { useContext } from "react";
import { apiClient } from "../components/ApiClient/ApiClient"

export async function addProductToCart({id}){
    


    
   try {
         const options={
        url:`/cart`,
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

export async function getCartItems(){
    


    
    try {
        const options = {
        url:"/cart",
        method:"GET"
    }
    const response = await apiClient.request(options);
    return response
    } catch (error) {
        throw error
        
}}

export async function deleteProductFromCart({id}){
    


    
    try {
        const options = {
        url:`/cart/${id}`,
        method:"DELETE"
    }
    const response = await apiClient.request(options);
    return response;    
    } catch (error) {
        console.log(error);
        
        
}
}