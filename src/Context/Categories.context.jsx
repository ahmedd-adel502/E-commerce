import { createContext, useEffect, useState } from "react";
import { getCategories } from "../Services/CategoriesService";
import { apiClient } from "../components/ApiClient/ApiClient";

export const CategoriesContext = createContext();
export default function CategoriesProvider({ children }) { 
    const [categories, setCategories] = useState(null);
    const [subCategories, setSubCategories] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);
     async function fetchCategories() {
    try {
      setIsLoading(true)
      const response = await getCategories();
      setCategories(response.data.data)
      
      
    } catch (error) {
        setIsLoading(false)
        setIsError(true);
        setError(error.message);
    } finally {
      setIsLoading(false)
      
    }


  }


  async function getSubCategories(){
    const options = {
      url:"/subcategories",
      method:"GET"
    }
    try {
      setIsLoading(true);
      const response = await apiClient.request(options);
      if (response.success){
        setIsLoading(false);
        setSubCategories(response.data.data);
      }
    } catch (error) {
      throw error
    }
  }
  useEffect(() => {
    fetchCategories();
    getSubCategories();
  }, []);





    return (
        <CategoriesContext.Provider value={{categories,isLoading,isError,error,getSubCategories,subCategories,fetchCategories}}>
            {children}
        </CategoriesContext.Provider>
    );
}