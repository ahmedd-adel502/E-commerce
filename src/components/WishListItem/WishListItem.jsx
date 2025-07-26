import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Rating/Rating";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/Cart.context";
import Loading from "../Loading/Loading";
import { WishlistContext } from "../../Context/Wishlist.context";
import { Link } from "react-router";

export default function WishListItem({productInfo}) {

    const {deleteItemFromWishlist,isLoading} = useContext(WishlistContext)
    const {handleAddingProductToCart,handleDeleteCartItem} = useContext(CartContext)
    if (isLoading && !productInfo) return <Loading />
    const {id,title,imageCover,category,ratingsAverage,ratingsQuantity,price} = productInfo 
    const {cartInfo} = useContext(CartContext)  
    const {data} = cartInfo? cartInfo : {}
    const {products} = data? data : {}    
    
    function isProductInCart(id) {
        return products?.some(product => product?.product.id === id);
    }
    
    
    

  return <>
    <div className="flex flex-col gap-4 py-4 lg:flex-row justify-between items-center">
        <div className="flex flex-col text-center lg:flex-row lg:text-left items-center lg:gap-4">
            <div className="w-[90%] lg:w-[15%] rounded-lg overflow-hidden">
                <Link to={`/product/${id}`}>
                    <img className="w-full hover:animate-pulse hover:scale-105" src={imageCover} alt="Item image" />
                </Link>
            </div>
            <div className="flex flex-col space-y-1">
                <span className="text-gray-500">{category?.name}</span>
                <span className="text-black font-semibold"><Link to={`/product/${id}`}>{title}</Link></span>
                <div className="flex flex-col lg:flex-row items-center gap-2">
                    <Rating rating={ratingsAverage} />
                    <div className="flex gap-2"><span className="text-gray-500">{ratingsAverage}</span><span className="text-gray-500">({ratingsQuantity})</span></div>
                </div>
                <span className="text-primary-600 font-bold text-xl">{price} EGP</span>
            </div>
        </div>
        <div className="flex items-center gap-2">
            {isProductInCart(id) ? <button className="btn text-nowrap bg-red-500 hover:bg-red-700" onClick={()=>{handleDeleteCartItem({id})}}>Remove From Cart</button>:<button className="btn text-nowrap bg-primary-600 hover:bg-primary-700" onClick={()=>{handleAddingProductToCart({id})}}>Add to Cart</button>}
            <button className="text-gray-500 cursor-pointer" onClick={()=>{deleteItemFromWishlist({id})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
        </div>
    </div>
    <div className="divider bg-gray-200/50 my-5 lg:hidden"></div>
  
  
  </>
}
