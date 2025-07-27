import { faChevronLeft, faChevronRight, faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WishListItem from "../../components/WishListItem/WishListItem";
import { Link } from "react-router";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { use, useContext, useEffect } from "react";
import { WishlistContext } from "../../Context/Wishlist.context";
import { CartContext } from "../../Context/Cart.context";
import MetaData from "../../components/MetaData/MetaData";

export default function WishList() {
    const {products,isLoading,itemsCount} = useContext(WishlistContext)
    const {handleAddingProductToCart,handleDeleteCartItem,handleFetchingCartInfo} = useContext(CartContext)
    const {cartInfo} = useContext(CartContext)  
    const {data} = cartInfo? cartInfo : {}
    const {products: cartProducts} = data? data : {}
    const {product}=cartProducts? cartProducts:[]
    const {id} = product? product : {}
    
    
   function areAllProductsInCart(products, cartProducts) {
    if (!products || !cartProducts) return false;

    return products.every(wishlistItem =>
        cartProducts.some(cartItem => cartItem?.product?._id === wishlistItem?._id)
      );
}






  return <>
  <MetaData title="Wishlist" description="Wishlist of your favorite products" keywords="Wishlist, products, favorite, cart, buy, order" />
    <div className="bg-gray-200/50 py-10">
      <div className="container flex flex-col lg:flex-row px-5 lg:px-0 gap-10">
        <div className="col-span-8 h-fit bg-white rounded-md py-5 px-5 space-y-5">
          <div className="space-y-4 text-center lg:text-left lg:space-y-0">
            <h2 className="text-2xl font-bold">My Wishlist</h2>
            <div className="flex justify-between items-center flex-col gap-2 lg:gap-0 lg:flex-row">
              <span className="text-gray-600">{itemsCount} items in your wishlist</span>
              <div className="flex items-center gap-6 lg:gap-2">
                  <button className="text-gray-700 hover:text-red-500 transition-colors duration-200 flex items-center gap-1 cursor-pointer">
                      <i><FontAwesomeIcon icon={faTrash} /></i><span>Clear All</span>
                  </button>
                  {areAllProductsInCart(products, cartProducts)?<button className="btn bg-red-600 hover:bg-red-700 flex items-center gap-1"  onClick={async () => {
                        await Promise.all(
                          products?.map((product) =>
                            handleDeleteCartItem({ id: product?._id })
                          )
                        );
                      }}>
                    <i><FontAwesomeIcon icon={faShoppingCart} /></i><span>Remove All from Cart</span>
                  </button>:<button className="btn bg-primary-600 hover:bg-primary-700 flex items-center gap-1" onClick={async () => {
                      await Promise.all(
                        products?.map((product) =>
                          handleAddingProductToCart({ id: product?._id })
                        )
                      );
                    }}>
                    <i><FontAwesomeIcon icon={faShoppingCart} /></i><span>Add All to Cart</span>
                  </button> }
              </div>
            </div>
          </div>
          <div className="divider bg-gray-200/50"></div>
          <div className="px-4 ">
              {products? products.map(product=><WishListItem key={product?.id} productInfo={product} />):""}
          </div>
          <div className="divider bg-gray-200/50"></div>
          <div className="flex justify-center items-center gap-2">
              <button className="btn bg-transparent text-black border border-gray-400/50 focus:bg-primary-600 focus:text-white transition-all duration-200"><i><FontAwesomeIcon icon={faChevronLeft}/></i></button>
              <button className="btn bg-transparent text-black border border-gray-400/50 focus:bg-primary-600 focus:text-white transition-all duration-200">1</button>
              <button className="btn bg-transparent text-black border border-gray-400/50 focus:bg-primary-600 focus:text-white transition-all duration-200">2</button>
              <button className="btn bg-transparent text-black border border-gray-400/50 focus:bg-primary-600 focus:text-white transition-all duration-200"><i><FontAwesomeIcon icon={faChevronRight}/></i></button>
          </div>
        </div>


        <div className="space-y-5">
             <div className="bg-white rounded-md py-4 px-3 space-y-4">
                <h2 className="text-xl">Create New Wishlist</h2>
                <form>
                    <div>
                    <label htmlFor="wishlistName" className="text-gray-600">Wishlist Name</label>
                    <input id="wishlistName" type="text" placeholder="e.g., Holiday Shopping" className="placeholder:text-black form-control mt-1" />
                  </div>
                  <div className="flex flex-col mt-5">
                    <span className="text-gray-800">Privacy</span>
                    <div className="flex items-center gap-1 ps-2">
                      <div className="flex items-center gap-x-1 ms-1">
                        <input type="radio" id="radio-btn-public" name="radio-btn"/><label className="text-gray-600" htmlFor="radio-btn-public">Public</label>
                      </div>
                      <div className="flex items-center gap-x-1 ms-1">
                        <input type="radio" id="radio-btn-private" name="radio-btn"/><label className="text-gray-600" htmlFor="radio-btn-private">Private</label>
                      </div>
                    </div>
                  </div>
                  <button className="btn bg-primary-600 hover:bg-primary-700 w-full mt-5">Create Wishlist</button>
                </form>
             </div>
             <div className="bg-white rounded-md py-4 px-3">
                  <h2 className="text-xl my-4">My Wishlist</h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-1">
                        <span className="text-lg">Default Wishlist</span>
                        <span className="text-gray-500">12 items</span>
                      </div>
                      <Link className="text-primary-600" to={"/wishlist"}>
                          View
                      </Link>
                    </div>
                    <div className="divider bg-gray-200/50"></div>
                  </div>

                   <div className="space-y-3 py-2">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-2">
                        <span className="text-lg">Birthday ideas</span>
                        <span className="text-gray-500">8 items</span>
                      </div>
                      <Link className="text-primary-600" to={"/wishlist"}>
                          View
                      </Link>
                    </div>
                    <div className="divider bg-gray-200/50"></div>
                  </div>

                   <div className="space-y-3 py-2">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-2">
                        <span className="text-lg">Weekly groceries</span>
                        <span className="text-gray-500">15 items</span>
                      </div>
                      <Link className="text-primary-600" to={"/wishlist"}>
                          View
                      </Link>
                    </div>
                  </div>
                  
             </div>

             <div className="bg-white rounded-md py-4 px-5">
                <h2 className="text-xl my-3">Share Your Wishlist</h2>
                <div className="space-y-4">
                    <span className="text-gray-500">Share your wishlist with friends and family</span>
                    <div className="flex items-center gap-2">
                      <button className="btn bg-blue-800 hover:bg-blue-900 flex justify-center items-center gap-2 w-full"><i><FontAwesomeIcon icon={faFacebookF} /></i>Facebook</button>
                      <button className="btn bg-blue-400 hover:bg-blue-500 flex justify-center items-center gap-2 w-full"><i><FontAwesomeIcon icon={faTwitter} /></i>Twitter</button>
                    </div>
                    <div className="relative border-2 border-gray-300 rounded-md overflow-hidden flex justify-between items-center focus-within:border-primary-600">
                      <input type="text" value="https://freshcart.com/wishlist" className="w-full py-2 px-2 outline-none peer" readOnly />
                      <button className="absolute h-full px-2 right-0 bg-gray-300 cursor-pointer">Copy Link</button>
                    </div>
                </div>
             </div>
        </div>
    </div>
    </div>
</>
}
