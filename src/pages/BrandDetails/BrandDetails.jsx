import {useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { apiClient } from "../../components/ApiClient/ApiClient";
import Loading from "../../components/Loading/Loading";
import { fetchAllProducts } from "../../Services/ProductService";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function BrandDetails() {

    const {id} = useParams();
    const [brand,setBrand] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);
    const [products,setProducts] = useState(null);
    async function getSpecificBrand(id){
        try {
            const response = await apiClient.request(`/brands/${id}`);
            setBrand(response.data.data);
            
        } catch (error) {
            throw error
        }
    }


    async function getProductsByBrandId(){
        try {
            setIsLoading(true);
            const response = await fetchAllProducts({brand:brand?._id})
            if (response.success) {
                setIsLoading(false);            
                setProducts(response.data.data);
                
                
            }
        } catch (error) {
            setIsLoading(false);      
            setError(error.message);
        }
    }




    useEffect(()=>{
        getSpecificBrand(id);
        getProductsByBrandId();
    },[id]);

    if (isLoading) return <Loading />

  return <>
        <div className="py-10">
            <div className="container">
                {products?.filter((product)=>product.brand._id===brand?._id).length > 0 ? <><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {products?.filter((product)=>product.brand._id===brand?._id).map((product)=><ProductCard key={product._id} productInfo={product} />)}
                </div></> : <><h1 className="text-center text-2xl font-semibold my-6">Sorry, No products found for this brand!</h1>
                    <button className="block mx-auto btn bg-primary-600 text-center text-xl"><Link to={"/brands"} className="text-white">Continue Shopping other brands!</Link></button>
                </>}
                
            </div>
        </div>
  </>
}
