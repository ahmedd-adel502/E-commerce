import { createContext, useEffect, useState } from "react";
import { fetchAllProducts } from "../Services/ProductService";

export const ProductsContext = createContext()
export default function ProductsProvider({children}) {

        const [isLoading, setIsLoading] = useState(true);
        const [isError, setIsError] = useState(false);
        const [error, setError] = useState(null);
        const [products, setProducts] = useState(null);
    
        async function fetchProducts() {
                try {
                    const response = await fetchAllProducts();
                    if (response.success) {
                        setIsLoading(false);
                        setProducts(response.data.data);
                    }
                } catch (error) {
                    setIsError(true);
                    setError(error);
                    setIsLoading(false);                
                }    
    
    
            }   
    
    
            useEffect(() => {
                fetchProducts();
            }, []);
    








  return (
    <ProductsContext.Provider value={{isLoading, isError, error, products,fetchProducts}}>
      {children}
    </ProductsContext.Provider>
  );

}