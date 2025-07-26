import Rating from "../Rating/Rating"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus, faSpinner, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react";
import { CartContext } from "../../Context/Cart.context";
import Loading from "../Loading/Loading";
import { Link } from "react-router";

export default function CartItem({productInfo}) {

    const {cartInfo,isLoading,isError,error,handleDeleteCartItem,updateProductQuantity} = useContext(CartContext);

    if(isLoading || !cartInfo) return <Loading />
    
    const {count,price,product} = productInfo    
    
    const {title,imageCover,ratingsAverage,category,id} = product


    

    
  return <>
            <div>
                <div className="flex justify-between flex-col lg:flex-row items-center border border-gray-300/50 rounded-md p-5 lg:border-0 lg:p-0 mt-4">
                    <div className="flex items-center lg:items-start  gap-x-4">
                        <div className="w-full lg:w-[10%] rounded-md overflow-hidden">
                            <Link to={`/product/${id}`}><img src={imageCover} alt={title} /></Link>
                        </div>
                        <div className="flex flex-col gap-1 text-sm">
                            <Link to={`/product/${id}`}>{title}</Link>
                            <span className="text-gray-500">{category?.name}</span>
                            <div>
                            <Rating rating={ratingsAverage} /> <span className="ms-2 mt-2 text-gray-700">({ratingsAverage})</span>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-x-4 mt-2">
                            <div className="flex items-center border border-gray-400 rounded-md  gap-x-2 overflow-hidden">
                                <button className="cursor-pointer text-lg py-2 px-2 border-r border-gray-400 bg-gray-200 hover:bg-gray-300 " onClick={()=>{updateProductQuantity({id,count:count-1})}}><i><FontAwesomeIcon icon={faMinus} /></i></button>
                                <span className="text-black  text-lg mx-2">{isLoading?<><FontAwesomeIcon icon={faSpinner} spin /></>:<>{count}</>}</span>
                                <button className="cursor-pointer text-lg py-2 px-2 border-l border-gray-400 bg-primary-600 hover:bg-primary-700 text-white" onClick={()=>{updateProductQuantity({id,count:count+1})}}><i><FontAwesomeIcon icon={faPlus} /></i></button>
                            </div>
                            <div className="w-[100px] text-center">
                                <span className="text-lg font-semibold">{price} EGP</span>
                            </div>
                            <div>
                                <button className="text-red-500 cursor-pointer" onClick={()=>{handleDeleteCartItem({id})}}><i><FontAwesomeIcon icon={faTrash} /></i></button>
                            </div>
                    </div>
                </div>
            </div>
  </>
}
