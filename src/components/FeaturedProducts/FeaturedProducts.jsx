import { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import { ProductsContext } from "../../Context/Products.context";

export default function FeaturedProducts() {

   const {products,isError,error,isLoading} = useContext(ProductsContext)

    


    if (isLoading){
        return <Loading />
    }

  return <>
     <div id="featured" className="container py-20 px-5 sm:px-4 lg:px-3">
        <div className="flex justify-between items-center">
            <div className="flex">
                <h2 className="text-2xl font-semibold">Featured Products</h2>
            </div>
        </div>
        <div className="py-15">
        {
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products?.map((product)=><ProductCard key={product._id} productInfo={product} />)}
        </div>
        }
        </div>
     </div>
  
  
  
  </>
}
