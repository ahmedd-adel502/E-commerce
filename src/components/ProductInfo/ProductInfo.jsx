import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRotateLeft, faMinus, faPlus, faShareNodes, faShoppingCart, faTruckFast } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import Rating from "../Rating/Rating"
import { calcDiscount } from "../../utils/discount-utils"
import Loading from "../Loading/Loading"
import ReactImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css";
import { useContext } from "react"
import { CartContext } from "../../Context/Cart.context"
export default function ProductInfo({productDetails}) {

    const {handleAddingProductToCart,isLoading,isError,error,cartInfo} = useContext(CartContext)


    if (!productDetails) return <><div className="flex justify-center items-center"><Loading /></div></>
    const {price,priceAfterDiscount,title,ratingsAverage,ratingsQuantity,images,quantity,description,id}= productDetails
  return <>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="flex items-center justify-center w-[70%] mx-auto">
            <div className="images shadow-xl ">
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
                        <Link to={`favorites`} className="text-gray-500 hover:text-primary-600 transition-colors duration-300">
                            <i><FontAwesomeIcon icon={faHeart} /></i>
                        </Link>
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
                        <div className="flex items-center border border-gray-400 rounded-md py-2 px-2 lg:py-3 lg:px-3 gap-x-2">
                            <button className="cursor-pointer text-lg mx-4"><i><FontAwesomeIcon icon={faMinus} /></i></button>
                            <span className="text-black text-lg">1</span>
                            <button className="cursor-pointer text-lg mx-4"><i><FontAwesomeIcon icon={faPlus} /></i></button>
                        </div>
                        <span className="text-gray-500 text-sm sm:text-[16px]">only {quantity} items left in stock</span>
                    </div>
                </div>
           </div>
            <div className="grid grid-cols-2 gap-x-2 *:cursor-pointer py-4">
                <button className="flex items-center gap-x-2 justify-center bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors duration-300"
                onClick={()=>{
                    handleAddingProductToCart({id})
                }}>
                    <i><FontAwesomeIcon icon={faShoppingCart} /></i>
                    Add to Cart
                    </button>
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
