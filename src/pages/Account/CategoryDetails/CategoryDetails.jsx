import { Link, useParams } from "react-router";
import { apiClient } from "../../../components/ApiClient/ApiClient";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../../Services/ProductService";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Loading from "../../../components/Loading/Loading";
import MetaData from "../../../components/MetaData/MetaData";

export default function CategoryDetails() {

    const {id}= useParams();
    const [isLoading,setIsLoading]= useState(false);
    const [products,setProducts]= useState(null);
    const [error,setError]= useState(null);
    const [category,setCategory]= useState(null);
    async function getSpecificCategory(id){
        try {
            const response = await apiClient.request(`/categories/${id}`);
            setCategory(response.data.data);
            
            
            
            
        } catch (error) {
            throw error
        }
    }

  async function getProductsByCategory() {
    try {
      setIsLoading(true);
      const response = await fetchAllProducts({category:category?._id})
      if (response.success) {
        setIsLoading(false);            
        setProducts(response.data.data);        
        
      }
    } catch (error) {
      setError(error.message);
      setIsLoading(false);      
    }




  }




    useEffect(()=>{
        getSpecificCategory(id);
        getProductsByCategory();
    },[id]);

    if (isLoading) {
      return <Loading />
    }

  return <>
  <MetaData title={`Products for ${category?.name}`} description={`Products for ${category?.name}`} keywords={`Products for ${category?.name}`} />
    <div className="py-15">
          <div className="container">
            {products?.filter((product)=>product.category.name===category?.name).length > 0 ? <><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products?.filter((product)=>product.category.name===category?.name).map((product)=><ProductCard key={product._id} productInfo={product} />)}
              </div></> : <>
              <h1 className="text-center text-2xl font-semibold my-6">Sorry, No products found for this category!</h1>
                    <button className="block mx-auto btn bg-primary-600 text-center text-xl"><Link to={"/categories"} className="text-white">Continue Shopping other category!</Link></button></>}
              
          </div>
      </div>
  
  </>
}
