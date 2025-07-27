import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import {  use, useContext, useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { counter } from "../../utils/counter-utils";
import { ProductsContext } from "../../Context/Products.context";

export default function HomeDeals() {

    const {isLoading,products,isError,error,fetchProducts} = useContext(ProductsContext);
    const [time, setTime] = useState({hours: 0, minutes: 0, seconds: 0});

       const deals= products?.filter((product=>product.priceAfterDiscount)).slice(0,5);
    
      const date= new Date().getTime();
      function calculateOfferTime(date){
        const result = counter(date);
        setTime({hours: result.hours, minutes: result.minutes, seconds: result.seconds});
      }

      useEffect(() => {
        const timeInt= setInterval(() => {
          calculateOfferTime()
        },1000)

        return () => {
          clearInterval(timeInt);
        }
      },[])


    if(isLoading){
      return <Loading />
    }

    
    
     

    
  return <>
  <div id="deals" className="container py-20 px-5 sm:px-4 lg:px-3">
    <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Deals of the day</h2>
            <div className="text-gray-500 text-sm flex items-center gap-2">offer ends in:
                <span className="bg-black size-8 text-sm rounded-md text-white flex justify-center items-center">{time.hours}</span>:
                <span className="bg-black size-8 text-sm rounded-md text-white flex justify-center items-center">{time.minutes}</span>:
                <span className="bg-black size-8 text-sm rounded-md text-white flex justify-center items-center">{time.seconds}</span>
            </div>
        </div>
        <Link className="text-primary-600 flex items-center gap-1" to={"deals"}>
            View all deals <i><FontAwesomeIcon icon={faArrowRight} /></i>
        </Link>
    </div>
    <div className="py-15">
        {isLoading? <Loading />:
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {deals?.map((product)=><ProductCard key={product._id} productInfo={product} />)}
        </div>
        }
    </div>
  </div>
  
  
  </>
}
