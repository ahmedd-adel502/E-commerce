import { createContext, useState } from "react";
import { getAllBrands, getBrandById } from "../Services/BrandService";

export const BrandsContext = createContext(null);

export default function BrandsProvider({children}){

    const [brands, setBrands] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);
    async function fetchAllBrands(){
        try {
            setIsLoading(true);
            const response = await getAllBrands();
            if(response.success){
                setIsLoading(false);
                setBrands(response.data.data);
                
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    async function fetchSpecificBrand(id){
        try {
            setIsLoading(true);
            const response = await getBrandById(id);
            if(response.success){
                setIsLoading(false);
                setBrands(response.data.data);
                console.log(response.data.data);
                
                
            }
        } catch (error) {
            console.log(error);
            
        }
    }








    return <BrandsContext.Provider value={{fetchAllBrands,isLoading,brands,fetchSpecificBrand}}>
            {children}
        </BrandsContext.Provider>;
}