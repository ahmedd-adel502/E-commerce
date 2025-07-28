import { Link, useNavigate } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRotateLeft, faMinus, faPlus, faShareNodes, faShoppingCart, faSpinner, faTruckFast, faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"
import Rating from "../Rating/Rating"
import { calcDiscount } from "../../utils/discount-utils"
import Loading from "../Loading/Loading"
import ReactImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css";
import { useContext } from "react"
import { CartContext } from "../../Context/Cart.context"
import { WishlistContext } from "../../Context/Wishlist.context"
import { AuthContext } from "../../Context/Auth.context"
import { toast, Zoom } from "react-toastify"
export default function ProductInfo({productDetails}) {

    const {handleAddingProductToCart,isLoading,isError,error,cartInfo,updateProductQuantity,handleDeleteCartItem} = useContext(CartContext)
    const {handleAddProductToWishlist,deleteItemFromWishlist,products : wishlistProducts}= useContext(WishlistContext)
    const {token} = useContext(AuthContext)  
    
    if (!productDetails) return <><div className="flex justify-center items-center"><Loading /></div></>
    const {data} = cartInfo? cartInfo : {}
    const {products} = data ? data : {}
    const [product] = products? products.filter(product=>product.product.id === productDetails.id):[]
    const {count} = product ? product : {}
    const navigate= useNavigate();
    
    const {price,priceAfterDiscount,title,ratingsAverage,ratingsQuantity,images,quantity,description,id}= productDetails
    const inWishList = wishlistProducts?.find((product) => product?.id === id);

    function isProductInCart(id) {
        return products?.some(product => product?.product.id === id);
    }
  return <>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="flex items-center lg:items-start justify-center w-[80%] lg:w-[70%] mx-auto">
            <div className="images shadow-xl w-full lg:w-[120%]" onTouchMove={(e) => e.preventDefault()}>
                <ReactImageGallery showPlayButton={false} showNav={false} showFullscreenButton={false} items={images.map(image=>({original:image,thumbnail:image}))} />
             </div>
        </div>

        <div className="product-content bg-white py-4 px-8 mx-3 sm:mx-2 lg:mx-0 space-y-4 sm:space-y-6 lg:space-y-8 rounded-md shadow text-sm sm:text-[16px] lg:text-lg">
            <div className="flex justify-between items-center">
                {quantity >0 ? <span className="text-primary-600 bg-primary-200 text-sm px-2 py-1 rounded-md">in stock</span>:<span className="text-red-600 bg-red-200 text-sm px-2 py-1 rounded-md">out of stock</span>}
                <ul className="flex items-center gap-x-2">
                    <li>
                        <Link to={`favorites`} className="text-gray-500 hover:text-primary-600 transition-colors duration-300">
                            <i><FontAwesomeIcon icon={faShareNodes} /></i>
                        </Link>
                    </li>
                    <li>
                        <button onClick={()=>{inWishList ? deleteItemFromWishlist({id}) : handleAddProductToWishlist({id})}} className={`${inWishList ? "text-primary-600" : "text-gray-500"} cursor-pointer hover:text-primary-600 transition-colors duration-300`}>
                            <i><FontAwesomeIcon icon={inWishList ? solidHeart : regularHeart} /></i>
                        </button>
                    </li>
                </ul>
            </div>
            <h2 className="text-lg lg:text-xl xl:text-2xl font-bold">{title}</h2>
            <div className="flex items-center gap-x-2 text-gray-700">
                <Rating rating={ratingsAverage} />
                <span>({ratingsAverage})</span>
                <span>({ratingsQuantity} reviews)</span>
            </div>
            <div className="price flex items-center gap-x-2">
                {priceAfterDiscount ? <>
                <span className="text-lg font-semibold">{priceAfterDiscount} EGP</span>
                <del className="text-gray-500">{price} EGP</del>
                <span className="text-red-500 bg-red-300 text-sm px-2 py-1 rounded-md">Save {price&&priceAfterDiscount ? calcDiscount({price,priceAfterDiscount}):""}%</span></>:<>
                <span className="text-lg font-semibold">{price} EGP</span></>}
            </div>
            <div className="divider"></div>

           <div className="space-y-5">
                <p className="text-gray-600">{description}</p>

                <div className="quantity flex items-center gap-x-2">
                    <span className="text-black text-sm lg:text-lg">Quantity:</span>
                    <div className="flex items-center gap-x-2">
                        <div className="flex items-center border border-gray-400 rounded-md  gap-x-2 lg:overflow-hidden">
                                <button className="cursor-pointer text-sm lg:text-lg py-2 px-2 rounded-l-md border-r border-gray-400 bg-gray-200 hover:bg-gray-300 " onClick={()=>{updateProductQuantity({id,count:count-1})}}><i><FontAwesomeIcon icon={faMinus} /></i></button>
                                <span className="text-black  text-sm lg:text-lg mx-2">{token?isLoading?<><FontAwesomeIcon icon={faSpinner} spin /></>:<>{count?count:0}</>:0}</span>
                                <button className="cursor-pointer text-sm lg:text-lg py-2 px-2 rounded-r-md border-l border-gray-400 bg-primary-600 hover:bg-primary-700 text-white" onClick={()=>{updateProductQuantity({id,count:count+1})}}><i><FontAwesomeIcon icon={faPlus} /></i></button>
                            </div>
                        <span className="text-gray-500 text-sm sm:text-[16px]">only {quantity} items left in stock</span>
                    </div>
                </div>
           </div>
            <div className="grid grid-cols-2 gap-x-2 *:cursor-pointer py-4">
                {isProductInCart(id)?<button className="flex items-center gap-x-2 justify-center bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
                onClick={()=>{
                    handleDeleteCartItem({id})
                }}>
                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
                    Remove From Cart
                    </button>:<button className="flex items-center gap-x-2 justify-center bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700"
                onClick={()=>{
                    if(!token){
                        toast.error("Please login first to add products to cart!",{autoClose:2000,position:`top-right`,transition:Zoom,theme:"colored"})
                        setTimeout(() => {
                            navigate("/login")
                        },3000)
                    }else{
                    if(quantity>0){
                        handleAddingProductToCart({id})
                    }
                    }
                }}>
                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
                    Add to Cart
                    </button>}
                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-300 ml-2">Buy Now</button>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between items-center py-4 px-2">
                <div className="flex items-center gap-x-4 ">
                    <div>
                    <i className='text-lg lg:text-xl xl:text-2xl text-primary-600 bg-primary-200 rounded-full w-[50px] h-[50px] flex justify-center items-center' ><FontAwesomeIcon icon={faTruckFast} /></i>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className='font-semibold'>Free Delivery</h2>
                        <span className='text-gray-500 text-sm'>Free shipping on orders $50 or more</span>
                    </div>
                </div>

                <div className="flex items-center gap-x-4">
                    <div>
                    <i className='text-lg lg:text-xl xl:text-2xl text-primary-600 bg-primary-200 rounded-full w-[50px] h-[50px] flex justify-center items-center' ><FontAwesomeIcon icon={faArrowRotateLeft} /></i>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className='font-semibold'>30 Days Return</h2>
                        <span className='text-gray-500 text-sm'>Satisfaction guranteed or money back</span>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  
  </>
}
