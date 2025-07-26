import { createContext, useContext, useEffect, useState } from "react";
import { addProductToCart, deleteProductFromCart, getCartItems } from "../Services/CartService";
import { toast, Zoom } from "react-toastify";
import Swal from 'sweetalert2'
import { apiClient } from "../components/ApiClient/ApiClient";
import { AuthContext } from "./Auth.context";

export const CartContext = createContext(null);
export default function CartProvider({ children }) {
    const {token} = useContext(AuthContext)
    const [cartInfo,setCartInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error,setError] = useState(null);
    
    

    async function handleAddingProductToCart({id}){
        try {
            const response = await addProductToCart({id})
            if(response.success){
                setCartInfo(response.data);
                toast.success(response.data.message,{autoClose:2000,position:`top-right`,transition:Zoom,theme:"colored"});
                await handleFetchingCartInfo();
            }
            

        } catch (error) {
            setIsLoading(false);
            setIsError(true)
            setError(error) 
            
        }
        
    }
    

    async function handleFetchingCartInfo(){
        try {
            setIsLoading(true);
            const response = await getCartItems();
            if(response.success){
                setIsLoading(false);
                setCartInfo(response.data);
                                       
                          
            }
        } catch (error) {
            setIsLoading(false);
            setIsError(true)
            setError(error)            
        }
    }

   async function updateProductQuantity({id,count}){
    const options={
        url:`/cart/${id}`,
        method:"PUT",
        data:{
            count:count
        }
    }
    try {
        const response = await apiClient.request(options);
        if (response.success){
            setCartInfo(response.data);
            toast.success(response.data.message,{autoClose:2000,position:`top-right`,transition:Zoom,theme:"colored"});
        }
        
    } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setError(error);
        console.log(error);
        
    }
   }


    async function handleDeleteCartItem({id}){
        try {
          const result = await Swal.fire({
                    title: "Are you sure?",
                    text: "You Want to Delete this item!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonColor: "#3085d6",
                    confirmButtonText: "Yes, delete it!"
                    })
                    if(result.isConfirmed){
                       const toastId = toast.loading("We are deleting your item!")
                        const response = await deleteProductFromCart({id});
                        if(response.success){
                            toast.dismiss(toastId)
                            setCartInfo(response.data);
                            toast.success(response.data.message,{autoClose:2000,position:`top-right`,transition:Zoom,theme:"colored"});
                        }
                    }
        
        } catch (error) {
            setIsLoading(false);
            throw error;
        }
    }
    useEffect(()=>{
        if(token){
            handleFetchingCartInfo();
        }
    },[])
    return <CartContext.Provider value={{cartInfo,handleAddingProductToCart,isLoading,isError,error,handleDeleteCartItem,updateProductQuantity,handleFetchingCartInfo,setCartInfo}}>
            {children}
        </CartContext.Provider>;



}