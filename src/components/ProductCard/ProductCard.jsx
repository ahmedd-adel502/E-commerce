import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodeCompare, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router"
import { faEye, faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { calcDiscount } from "../../utils/discount-utils";
import Rating from "../Rating/Rating";
import { useContext } from "react";
import { CartContext } from "../../Context/Cart.context";
import { WishlistContext } from "../../Context/Wishlist.context";
export default function ProductCard({productInfo}) {
    const {category,title,imageCover,id,price,priceAfterDiscount,ratingsAverage,ratingsQuantity} = productInfo;
    const {handleAddingProductToCart,cartInfo,isLoading,isError,error} = useContext(CartContext);
    const {handleAddProductToWishlist,products,deleteItemFromWishlist}= useContext(WishlistContext)    
    const inWishList = products?.find((product) => product.id === id);
    
    
  return <>
        
            <div className="card group relative rounded-md border overflow-hidden border-gray-300 hover:shadow-lg transition-shadow duration-300">
                <div className="card-top text-center">
                    <Link className="inline-block" to={`/product/${id}`}>
                        <img className="h-60 mx-auto" src={imageCover} alt="review author" />
                    </Link>
                </div>
                <div className="card-bottom px-4 py-4 space-y-2">
                    <h3 className="text-sm text-gray-500">{category.name}</h3>
                    <Link to={`/product/${id}`}>
                        <h2 className="text-lg lg:text-sm font-semibold line-clamp-2">{title}</h2>
                    </Link>
                    <div className="rating flex items-center gap-x-2">
                        <Rating rating={ratingsAverage} />
                        <div>
                            <span className="ratingAverage">{ratingsAverage}</span>
                            <span className="ratingQuantity">({ratingsQuantity})</span>
                        </div>
                    </div>
                     <div className="flex justify-between items-center gap-x-2">
                           <div className="flex items-center gap-2">
                             {priceAfterDiscount ? <><span className="price text-lg  font-semibold text-primary-600">{priceAfterDiscount} EGP</span>
                             <span className="delPrice text-gray-500"><del className="lg:text-sm">{price} EGP</del></span> </>: <span className="price text-lg  font-semibold text-primary-600">{price} EGP</span>}
                           </div>
                           <div>
                             <button className="btn p-0 size-8 rounded-full bg-primary-600 text-white" onClick={()=>{handleAddingProductToCart({id})}}><i><FontAwesomeIcon icon={faPlus} /></i></button>
                           </div>
                     </div>
                </div>

                   {priceAfterDiscount<price ?  <span className="bg-red-500 text-white absolute top-4 left-4 px-2 py-1 rounded-md">-{calcDiscount({price,priceAfterDiscount})}%</span>: ""}
                    <ul className="flex flex-col gap-2 absolute top-4 right-[-100%] group-hover:right-4 transition-[right] druation-500 bg-gray-200/90 p-2 rounded-md">
                        <li>
                            <button onClick={()=>{inWishList ? deleteItemFromWishlist({id}) : handleAddProductToWishlist({id})}} className={`${inWishList ? "text-primary-600" : "text-gray-500"} cursor-pointer hover:text-primary-600 transition-colors duration-300 bg-white size-8 flex items-center justify-center rounded-full`}  >
                                <i><FontAwesomeIcon icon={inWishList ? solidHeart : regularHeart} /></i>
                            </button>
                        </li>
                         <li>
                            <Link className="text-gray-500 hover:text-primary-600 transition-colors duration-300 bg-white size-8 flex items-center justify-center rounded-full"  >
                                <i><FontAwesomeIcon icon={faCodeCompare} /></i>
                            </Link>
                        </li>
                         <li>
                            <Link to={`/product/${id}`} className="text-gray-500 hover:text-primary-600 transition-colors duration-300 bg-white size-8 flex items-center justify-center rounded-full" >
                                    <i><FontAwesomeIcon icon={faEye} /></i>
                            </Link>
                        </li>

                    </ul>
            </div>
        
  </>
}
