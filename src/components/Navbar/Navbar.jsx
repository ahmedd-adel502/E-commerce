import { faAngleDown, faBabyCarriage, faBars, faBolt, faCartShopping, faEllipsis, faEnvelope, faIdCard, faPerson, faPersonDress, faPhone, faRepeat, faRightFromBracket, faSearch, faSpinner, faSuitcaseMedical, faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router'
import freshCartLogo from "../../assets/images/freshcart-logo.svg"
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { useContext, useState } from 'react'
import { AuthContext } from '../../Context/Auth.context'
import { toast, Zoom } from 'react-toastify'
import { CartContext } from '../../Context/Cart.context'
import { WishlistContext } from '../../Context/Wishlist.context'
export default function Navbar() {


  const [canvasOpen,setCanvasOpen]=useState(false)
  function toggleCanvas(){
    setCanvasOpen(!canvasOpen)
  }
  const{setToken,token} = useContext(AuthContext)
  function handleLogOut(){
    setToken(null)
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    sessionStorage.removeItem("token")
    toast.success("You have successfully logged out",{autoClose:1500,position:`top-center`,transition:Zoom,theme:"colored"});
    setTimeout(() => {
      window.location.reload()
    },500)
  }

  const {cartInfo,isLoading} = useContext(CartContext);
  const {itemsCount,isLoading:wishlistLoading} = useContext(WishlistContext);
  
  
  


  return <>
    {/* Top Navbar */}
    <div className="hidden container lg:flex justify-between items-center py-3 text-sm border-b border-gray-200/50">
        <ul className='flex items-center gap-x-5 text-gray-500'>
          <li className='flex items-center gap-2'>
            <a href="tel:+1 (800) 123-4567">
              <i><FontAwesomeIcon icon={faPhone} /> </i>
               <span>+1 (800) 123-4567</span>
            </a>
          </li>
          <li className='flex items-center gap-2'>
            <a href="mailto:support@freshcart.com">
              <i><FontAwesomeIcon icon={faEnvelope} /> </i>
              <span>support@freshcart.com</span>
            </a>
          </li>
        </ul>

        <ul className='flex items-center gap-x-5 text-gray-500'>
          <li>
            <Link to={"/orders"}>Track Order</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
           <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <select>
              <option>USD</option>
              <option>SAR</option>
              <option>AED</option>
            </select>
          </li>
          <li>
            <select>
              <option value="en">English</option>
              <option value="ar">العربيه</option>
            </select>
          </li>
        </ul>
    </div>

    {/* Main Navbar */}
    <div className="container flex justify-between items-center border-b border-gray-300/50 lg:border-b-0 py-4 px-5 sm:px-0">
      <Link className='text-3xl font-bold' to="/">
         <span className='text-primary-600'>Fresh</span>Cart
      </Link>

      <button onClick={toggleCanvas} className='btn bg-primary-600 lg:hidden'>
        {canvasOpen?<i><FontAwesomeIcon icon={faXmark} /></i>:<i><FontAwesomeIcon icon={faBars} /></i>}
      </button>
      {canvasOpen && <div  className='inset-0 flex justify-between fixed bg-black/50 w-full h-full z-20'>
          <div className=' canvas bg-white h-full px-5 py-3 w-[50%] space-y-5 animate-slide-in'>
              <div className='flex justify-between items-center'>
                  <h1><Link to={"/"}>
                    <img src={freshCartLogo} alt="Fresh Cart Logo" />
                  </Link></h1>
                  <button onClick={toggleCanvas} className='size-10 cursor-pointer bg-gray-300 text-gray-700 rounded-full'><i><FontAwesomeIcon icon={faXmark} /></i></button>
              </div>
              <div className='divider'></div>
              <search className='relative'>
                  <input type="text" className='w-full py-2 px-3 border-2 border-gray-200 rounded-xl focus:outline-none placeholder:text-sm lg:placeholder:text-lg focus:border-primary-600' placeholder='Search for products...' />
                  <i className='absolute text-gray-500 top-1/2 right-3 transform -translate-y-1/2'>
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
              </search>

              <div className='space-y-3'>
                <h2 className='font-semibold text-lg'>Main Menu</h2>
                <menu className=' space-y-3 px-4'>
                  <li>
                    <NavLink className={({isActive})=>`flex gap-4 items-center bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-3 ${isActive? "text-primary-600 bg-primary-100":""}` } to={"wishlist"}>
                       <div className='relative'>
                          <i><FontAwesomeIcon className='text-lg' icon={faHeart} /></i>
                          <span className=' bg-primary-600 text-white rounded-full size-5 flex justify-center items-center absolute top-1 -right-2 -translate-y-1/2 '>{!token? 0 : wishlistLoading? <FontAwesomeIcon icon={faSpinner} spin /> : itemsCount}</span>
                        </div>
                        <span className='text-sm'>Wishlist</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({isActive})=>`flex gap-4 items-center bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-3 ${isActive? "text-primary-600 bg-primary-100":""}` } to={"cart"}>
                        <div className='relative'>
                          <i><FontAwesomeIcon className='text-lg' icon={faCartShopping} /></i>
                          <span className=' bg-primary-600 text-white rounded-full size-5 flex justify-center items-center absolute top-1 -right-2 -translate-y-1/2 '>{!token? 0 : isLoading? <FontAwesomeIcon icon={faSpinner} spin /> :cartInfo?.numOfCartItems}</span>
                        </div>
                        <span className='text-sm'>Cart</span>
                    </NavLink>
                  </li>
                   <li>
                      <NavLink className={({isActive})=>`flex gap-4 items-center bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-3 ${isActive? "text-primary-600 bg-primary-100":""}` } to={"account"}>
                          <i><FontAwesomeIcon className='text-lg' icon={faUser} /></i>
                          <span className='text-sm'>Account</span>
                      </NavLink>
                    </li>
                </menu>
                <div className="divider"></div>
                <div className='space-y-3'>
                  <h2 className='font-semibold text-lg'>Acount</h2>
                  <menu className='space-y-3 px-4'>
                       {!token?<>
                       <li>
                          <NavLink className={({isActive})=>`flex gap-4 items-center bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-3 ${isActive? "text-primary-600 bg-primary-100":""}` } to={"/signup"}>
                              <i><FontAwesomeIcon className='text-lg' icon={faUserPlus} /></i>
                              <span className='text-sm'>Sign Up</span>
                          </NavLink>
                        </li>
                       <li>
                          <NavLink className={({isActive})=>`flex gap-4 items-center bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-3 ${isActive? "text-primary-600":""}` } to={"/login"}>
                              <i><FontAwesomeIcon className='text-lg' icon={faIdCard} /></i>
                              <span className='text-sm'>Login</span>
                          </NavLink>
                        </li></>:""}
                       {token? <li className='flex items-center bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-3 gap-4 cursor-pointer hover:text-primary-600' onClick={()=>{handleLogOut()}}>
                            <i><FontAwesomeIcon className='text-lg' icon={faRightFromBracket} /></i>
                            <span className='text-sm'>Log Out</span>
                        </li>:""}
                  </menu>
                </div>
              </div>
          </div>
          <div className="w-[50%] h-full" onClick={toggleCanvas}>
          </div>
      </div>}

      <search className='hidden lg:block relative w-[40%]'>
        <input type="text" className='w-full py-2 px-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 placeholder:text-black' placeholder='Search for products...' />
        <i className='absolute text-gray-500 top-1/2 right-3 transform -translate-y-1/2'>
          <FontAwesomeIcon icon={faSearch} />
        </i>
      </search>

      <ul className='hidden lg:flex items-center gap-5 text-gray-700'>
        <li>
          <NavLink className={({isActive})=>`flex flex-col items-center ${isActive? "text-primary-600":""}` } to={"wishlist"}>
              <div className='relative'>
                    <i><FontAwesomeIcon className='text-xl' icon={faHeart} /></i>
                    <span className=' bg-primary-600 text-white rounded-full size-5 flex justify-center items-center absolute top-1 -right-2 -translate-y-1/2 '>{!token? 0 : wishlistLoading? <FontAwesomeIcon icon={faSpinner} spin /> : itemsCount}</span>
                  </div>
              <span className='text-sm'>Wishlist</span>
          </NavLink>
        </li>
         <li>
          <NavLink className={({isActive})=>`flex flex-col items-center ${isActive? "text-primary-600":""}` } to={"compare"}>
              <i><FontAwesomeIcon className='text-lg' icon={faRepeat} /></i>
              <span className='text-sm'>Compare</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>`flex flex-col items-center ${isActive? "text-primary-600":""}` } to={"cart"}>
              <div className='relative'>
                <i><FontAwesomeIcon className='text-lg' icon={faCartShopping} /></i>
                <span className=' bg-primary-600 text-white rounded-full size-5 flex justify-center items-center absolute top-1 -right-2 -translate-y-1/2 '>{!token? 0 : isLoading? <FontAwesomeIcon icon={faSpinner} spin /> :cartInfo?.numOfCartItems}</span>
              </div>
              <span className='text-sm'>Cart</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>`flex flex-col items-center ${isActive? "text-primary-600":""}` } to={"account"}>
              <i><FontAwesomeIcon className='text-lg' icon={faUser} /></i>
              <span className='text-sm'>Account</span>
          </NavLink>
        </li>
         {!token?<>
         <li>
          <NavLink className={({isActive})=>`flex flex-col items-center ${isActive? "text-primary-600":""}` } to={"/signup"}>
              <i><FontAwesomeIcon className='text-lg' icon={faUserPlus} /></i>
              <span className='text-sm'>Sign Up</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>`flex flex-col items-center ${isActive? "text-primary-600":""}` } to={"/login"}>
              <i><FontAwesomeIcon className='text-lg' icon={faIdCard} /></i>
              <span className='text-sm'>Login</span>
          </NavLink>
        </li></>:""}
        {token?<li className='flex flex-col items-center cursor-pointer hover:text-primary-600' onClick={()=>{handleLogOut()}}>
            <i><FontAwesomeIcon className='text-lg' icon={faRightFromBracket} /></i>
            <span className='text-sm'>Log Out</span>
        </li>:""}
      </ul>
    </div>

    {/* Categories Navbar */}
    <div className='bg-gray-200/50 py-4 hidden lg:block'>
        <div className="container flex items-center gap-10">
          <div className='relative group'>
              <button className='btn flex items-center gap-x-2 bg-primary-600 hover:bg-primary-700'>
              <i><FontAwesomeIcon icon={faBars} /></i>
              All Categories
              <i><FontAwesomeIcon icon={faAngleDown} /></i>
            </button>
            <menu className='hidden group-hover:block bg-white shadow-lg absolute z-10 top-full left-0 w-[120%] divide-y divide-gray-200 rounded-lg overflow-hidden'>
                  <li className='px-3 py-3 hover:bg-gray-200/50 '>
                    <Link className='flex items-center gap-2' to={"/categories"}>
                        <i>
                          <FontAwesomeIcon className='text-xl text-primary-600' fixedWidth  icon={faPerson} />
                       </i>
                      <span>Men's Fashion</span>
                    </Link>
                  </li>
                  <li className='px-3 py-3 hover:bg-gray-200/50 '>
                    <Link className='flex items-center gap-2' to={"/categories"}>
                      <i>
                      <FontAwesomeIcon className='text-xl text-primary-600' fixedWidth  icon={faPersonDress} />
                    </i>
                    <span>Women's Fashion</span>
                    </Link>
                  </li>
                  <li className='px-3 py-3 hover:bg-gray-200/50 '>
                    <Link className='flex items-center gap-2' to={"/categories"}>
                      <i>
                      <FontAwesomeIcon className='text-xl text-primary-600' fixedWidth  icon={faBabyCarriage} />
                    </i>
                    <span>Baby & toys</span>
                    </Link>
                  </li>
                  <li className='px-3 py-3 hover:bg-gray-200/50 '>
                    <Link className='flex items-center gap-2' to={"/categories"} >
                      <i><FontAwesomeIcon className='text-xl text-primary-600' fixedWidth  icon={faSuitcaseMedical} /></i>
                    <span>Beauty & health</span>
                    </Link>
                  </li>
                  <li className='px-3 py-3 hover:bg-gray-200/50 '>
                    <Link className='flex items-center gap-2' to={"/categories"} >
                      <i><FontAwesomeIcon className='text-xl text-primary-600' fixedWidth  icon={faBolt} /></i>
                    <span>Electronics</span>
                    </Link>
                  </li>
                  <li className='px-3 py-3 hover:bg-gray-200/50 '>
                      <Link className='flex items-center gap-2' to={"/categories"}>
                        <i><FontAwesomeIcon  className='text-xl text-primary-600' fixedWidth icon={faEllipsis} /></i>
                       <span>View all categories</span>
                      </Link>
                  </li>
            </menu>
          </div>

          <ul className='flex gap-6'>
              <li>
                <NavLink className={({isActive})=>`flex flex-col items-center ${isActive? "text-primary-600":""}` } to={"/"}>
                    Home
                </NavLink>
              </li>
              <li>
                <NavLink className={({isActive})=>`flex flex-col items-center ${isActive? "text-primary-600":""}` } to={"/categories"}>
                    Shop
                </NavLink>
              </li>
              <li>
                <NavLink className={({isActive})=>`flex flex-col items-center ${isActive? "text-primary-600":""}` } to={"/offers"}>
                    Deals
                </NavLink>
              </li>
              <li>
                <NavLink className={({isActive})=>`flex flex-col items-center ${isActive? "text-primary-600":""}` } to={"/products"}>
                    New Arrivals
                </NavLink>
              </li>
              <li>
                <NavLink className={({isActive})=>`flex flex-col items-center ${isActive? "text-primary-600":""}` } to={"/categories"}>
                    Categories
                </NavLink>
              </li>
              <li>
                <NavLink className={({isActive})=>`flex flex-col items-center ${isActive? "text-primary-600":""}` } to={"/brands"}>
                    Brands
                </NavLink>
              </li>
              
          </ul>
        </div>
    </div>
  </>
}
