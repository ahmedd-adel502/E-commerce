import { useEffect, useState } from "react";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { useParams } from "react-router";
import { apiClient } from "../../components/ApiClient/ApiClient";
import ProductTabs from "../../components/ProductDetailing/ProductTabs";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

export default function ProductDetails() {

  const [isLoading,setIsLoading]= useState(false);
    const [error,setError]= useState(null);
    const [products,setProducts]= useState(null);

    const {id}= useParams();
     async function getProductByid(id){
        try {
          const response = await apiClient.get(`/products/${id}`);
             setIsLoading(true);
          if(response.success){
                setIsLoading(false);
                setProducts(response.data.data);
            }
            
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    }

    useEffect(()=>{
        getProductByid(id);
        window.scrollTo(0,0);
    },[id]);


  return <>
    <div className="bg-gray-100/50">
       <div className="container py-15">
         <ProductInfo productDetails={products} />
        <div className="mt-30 bg-white px-4 sm:px-3 lg:px-2 xl:px-0">
          <ProductTabs productDetails={products} />
        </div>
        <div className="my-6 bg-white shadow-lg px-5 py-4 rounded-md">
          <RelatedProducts productDetails={products} />
        </div>
      </div>
    </div>

    
  
  
  </>
}
