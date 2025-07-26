import { useState } from "react";
import ProductDetailed from "./ProductDetailed";
import ProductReviews from "./ProductReviews";
import ProductShipping from "./ProductShipping";

export default function ProductTabs({productDetails}) {
  const productDetailed = productDetails? productDetails : {};
  const [activeTab, setActiveTab] = useState('details');
    if(activeTab === 'details') {
       <ProductDetailed />
     }
     if(activeTab === 'reviews') {
       <ProductReviews />
     }
     if(activeTab === 'Shipping') {
       <ProductShipping />
     }

  return <>
    <div className="flex items-center border-b border-gray-300/50 text-lg pe-4">
      <button className="px-4 py-2 cursor-pointer text-gray-700 border-b-2 border-transparent hover:text-primary-600 hover:border-b-2 hover:border-primary-600" onClick={()=>{
        setActiveTab("details")
      }}>Product Details</button>
      <button className="px-4 py-2 cursor-pointer text-gray-700 border-b-2 border-transparent hover:text-primary-600 hover:border-b-2 hover:border-primary-600" onClick={()=>{
        setActiveTab("reviews")
      }}>Reviews (149)</button>
      <button className="px-4 py-2 cursor-pointer text-gray-700 border-b-2 border-transparent hover:text-primary-600 hover:border-b-2 hover:border-primary-600" onClick={()=>{
        setActiveTab("Shipping")
      }}>Shipping & Returns</button>
    </div>
    <div className="py-10 px-5 bg-white rounded-md shadow-lg">
      {activeTab === 'details' && <ProductDetailed productDetails={productDetailed} />}
      {activeTab === 'reviews' && <ProductReviews />}
      {activeTab === 'Shipping' && <ProductShipping />}
    </div>
  
  </>
}
