import { faShieldHalved, faShoppingCart, faTruck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CartItem from "../../components/CartItem/CartItem"
import { useContext } from "react"
import { CartContext } from "../../Context/Cart.context"
import Loading from "../../components/Loading/Loading"
import { Link } from "react-router"
export default function Cart() {

    const {cartInfo,isLoading,isError,error} = useContext(CartContext);    
    if(isLoading || !cartInfo) return <Loading />    
    const {data} = cartInfo
    const {products, totalCartPrice} = data
  
    

  return <>
    <div className="bg-gray-100/50 py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row px-10 lg:px-0 justify-center gap-10">
          <div className="bg-white shadow rounded-md px-5 py-2 h-fit w-full space-y-6">
            <div className="border-b border-gray-200/50  py-2">
                  <h2 className="text-lg font-semibold">Shopping Cart</h2>
                  {products.length>0?<span className="text-gray-500">{cartInfo?.numOfCartItems} items in your cart</span>:""}
              </div>
            {products.length > 0 ? <>{products?.map(product => <CartItem key={product._id} productInfo={product} />)}</>:<div className="text-center space-y-3">
              <span className="text-gray-600"><i><FontAwesomeIcon className="text-black" icon={faShoppingCart} /></i> Your Cart is empty!</span>
              <div className="text-gray-600">You can start shopping now from <Link className="text-primary-600" to={"/"}>here</Link></div>
              </div>}
          </div>

          <div className="bg-white shadow rounded-md py-4 px-3 space-y-4">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <div className="flex justify-between items-center">
                <ul className="text-gray-700 space-y-3 px-4">
                  <li>SubTotal ({cartInfo?.numOfCartItems} item)</li>
                  <li>Shipping</li>
                  <li>Tax</li>
                </ul>
                <ul className="text-gray-700 space-y-3 px-4">
                  <li>{totalCartPrice} EGP</li>
                  <li className="text-primary-600">{products.length>0? 70:0} EGP</li>
                  <li>14% of Subtotal</li>
                </ul>
              </div>
              <div className="divider bg-gray-200/50"></div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg font-semibold">{Math.trunc((totalCartPrice)+ (products.length>0?70:0) +(totalCartPrice*0.14))}</span>
              </div>

              <div className="flex flex-col gap-4">
                <Link to={"/checkout"} className="btn text-center bg-primary-600 hover:bg-primary-700 text-white  border border-primary-300/50">Proceed To CheckOut</Link>
                <Link to={"/"} className="btn text-center bg-transparent hover:bg-gray-100/50 text-black  border border-gray-300/50">Continue Shopping</Link>
              </div>


              <div className="flex flex-col gap-4">
                  <div className="bg-gray-100/50 rounded-md p-4">
                    <div className="flex items-center gap-x-2">
                      <i className="text-primary-600">
                        <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>
                      </i>
                      <span>Free Delivery</span>
                    </div>
                    <p className="text-gray-600 text-sm">Your orders qualifies for free Delivery. Estimated delivery 2-3 business day</p>
                  </div>
                  <div className="bg-primary-200/50 rounded-md p-4">
                    <div className="flex items-center gap-x-2">
                      <i className="text-primary-600">
                        <FontAwesomeIcon icon={faShieldHalved}></FontAwesomeIcon>
                      </i>
                      <span>Secure Checkout</span>
                    </div>
                    <p className="text-gray-600 text-sm">Your payment information is protected with 256-bit SSL encryption</p>
                  </div>
              </div>
          </div>
        </div>
      </div>

    </div>
  
  
  </>
}
