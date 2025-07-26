import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../Services/ProductService";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {Swiper,SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function RelatedProducts({productDetails}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState(null);
  const {category} = productDetails? productDetails :{};
  async function getRelatedProducts() {
    try {
      setIsLoading(true);
      const response = await fetchAllProducts({category:category?._id})
      if (response.success) {
        setProducts(response.data.data);
        setIsLoading(false);            
      }
    } catch (error) {
      setError(error.message);
      setIsLoading(false);      
    }




  }
  useEffect(() => {

      getRelatedProducts();
    
  },[]);

  if (isLoading) {
    return <Loading />;
  }

  return <> 
     <div className="container mt-6">
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-2xl font-semibold">You May Also Like</h2>
                    <div className="flex items-center gap-x-4">
                      <button className="btn prevEl bg-gray-600/50 hover:bg-primary-600/90"><i><FontAwesomeIcon icon={faChevronLeft} /></i></button>
                      <button className="btn nextEl bg-gray-600/50 hover:bg-primary-600/90"><i><FontAwesomeIcon icon={faChevronRight} /></i></button>
                    </div>
                </div>
            </div>
            <div className="py-15">
              <Swiper modules={[Navigation]} slidesPerView={5} spaceBetween={10} loop={true} navigation={{
                nextEl: ".nextEl",
                prevEl: ".prevEl"}} breakpoints={{
                  320:{
                    slidesPerView:1.3
                  },
                  640:{
                    slidesPerView:2
                  },
                  768:{
                    slidesPerView:3
                  },
                  1024:{
                    slidesPerView:4
                  },
                  1200:{
                    slidesPerView:5
                  }
                }}>
                {products?.map((product)=>
                  <SwiperSlide key={product._id}>
                    <ProductCard productInfo={product} />
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
         </div>
  
  
  </>
}
