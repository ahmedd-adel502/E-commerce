import { createContext, useContext, useEffect, useState } from "react";
import { addProductToWishlist, deleteProductFromWishlist, getWishlistItems } from "../Services/WishlistService";
import { toast, Zoom } from "react-toastify";
import { AuthContext } from "./Auth.context";

export const WishlistContext = createContext(null);

export default function WishlistProvider({children}){
    const {token} = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(null);
    const [products, setProducts] = useState([]);
    const [itemsCount,setItemsCount]= useState(0);
    
    async function handleAddProductToWishlist({id}){
        try {
            setIsLoading(true)
            const response = await addProductToWishlist({id})
            if(response.success){
                setIsLoading(false);
                setProducts(response.data.data);
                toast.success(response.data.message,{autoClose:2000,position:`top-right`,transition:Zoom,theme:"colored"});
                await fetchWishlistItems();         
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            setError(error.message);
            setIsError(error);
            
        }
        
    }

    async function fetchWishlistItems() {
        try {
            const response = await getWishlistItems();
            if (response.success) {
                setIsLoading(false);
                setProducts(response.data.data);
                setItemsCount(response.data.data.length);                
            }
        } catch (error) {
            setError(error.message);
            setIsError(error);
            setIsLoading(false);
        }
    } 

    async function deleteItemFromWishlist({id}){
        try {
            const response = await deleteProductFromWishlist({id});
            const toastId=toast.loading("We are deleting your item!");
            if(response.success){
                setProducts(response.data.data);
                toast.dismiss(toastId);
                toast.success("Product Removed successfully from your wishlist",{autoClose:2000,position:`top-right`,transition:Zoom,theme:"dark"});
                await fetchWishlistItems(); 
            }
            
        } catch (error) {
            setError(error.message);
            setIsError(true);
            setIsLoading(false);
        }
    }
    
    useEffect(() => {
        if(token){
            fetchWishlistItems();
        }
    }, []);

    return <WishlistContext.Provider value={{handleAddProductToWishlist,isLoading,isError,products,fetchWishlistItems,deleteItemFromWishlist,itemsCount}}>
        {children}
    </WishlistContext.Provider>

}