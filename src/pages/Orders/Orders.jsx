import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faEye, faGaugeHigh, faHeart, faLocationDot, faRightFromBracket, faRotateRight, faSearch, faStar, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/Auth.context";

export default function Orders() {

  let user = JSON.parse(localStorage.getItem("user"));
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
  return <>
  <div className="py-10 bg-gray-100">
    <div className="container">
        <div className="grid grid-cols-12 gap-10 px-5 lg:px-0">
          <div className="lg:col-span-3 col-span-12 rounded-md bg-white border border-gray-200/50 shadow-sm p-6 space-y-4">
            <div className="flex items-center gap-x-3">
              <span className="bg-primary-100 text-2xl size-14 rounded-full flex items-center justify-center"><i className="text-primary-600"><FontAwesomeIcon icon={faUser} /></i></span>
              <div>
                <h2 className="font-semibold">{user?.name}</h2>
                <span className="text-gray-500">{user?.email}</span>
              </div>
            </div>


            <div>
              <ul className="*:py-3 *:px-3 *:rounded-md *:cursor-pointer  *:transition-colors *:duration-200 space-y-3">
                <NavLink to={"/account"} className={`flex items-center gap-x-2 bg-transparent text-gray-600 hover:bg-primary-50 hover:text-primary-600 `} ><i><FontAwesomeIcon icon={faGaugeHigh} /></i>Dashboard</NavLink>
                <NavLink to={"/orders"}  className={`flex items-center gap-x-2 bg-transparent text-gray-600 hover:bg-primary-50 hover:text-primary-600 `} ><i><FontAwesomeIcon icon={faBagShopping} /></i>Orders</NavLink>
                <NavLink to={"/wishlist"}  className={`flex items-center gap-x-2 bg-transparent text-gray-600 hover:bg-primary-50 hover:text-primary-600 `} ><i><FontAwesomeIcon icon={faHeart} /></i>Wishlist</NavLink>
                <NavLink to={"/wishlist"}  className={`flex items-center gap-x-2 bg-transparent text-gray-600 hover:bg-primary-50 hover:text-primary-600 `} ><i><FontAwesomeIcon icon={faStar} /></i>Favorites</NavLink>
                <NavLink to={"/account"} className={`flex items-center gap-x-2 bg-transparent text-gray-600 hover:bg-primary-50 hover:text-primary-600 `} ><i><FontAwesomeIcon icon={faLocationDot} /></i>Addresses</NavLink>
                <NavLink to={"/checkout"}  className={`flex items-center gap-x-2 bg-transparent text-gray-600 hover:bg-primary-50 hover:text-primary-600 `} ><i><FontAwesomeIcon icon={faCcVisa} /></i>Payment Methods</NavLink>
                <NavLink to={"/account"}  className={`flex items-center gap-x-2 bg-transparent text-gray-600 hover:bg-primary-50 hover:text-primary-600 `} ><i><FontAwesomeIcon icon={faUserEdit} /></i>Account Details</NavLink>
                <li className={`flex items-center gap-x-2 bg-transparent text-gray-600  hover:bg-primary-50 hover:text-primary-600`} onClick={handleLogOut} ><i><FontAwesomeIcon icon={faRightFromBracket} /></i>Logout</li>
              </ul>
            </div>
          </div>  
          <div className="col-span-12 lg:col-span-9 bg-white border border-gray-200/50 shadow-sm p-6">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <h2 className="font-bold text-2xl">My Orders</h2>
                <div className="flex flex-col lg:flex-row items-center justify-end gap-4 w-full lg:w-[70%] mt-5 lg:mt-0">
                  <select className="form-control text-gray-600 w-[50%] lg:w-[18%]">
                    <option value="allOrders">All Orders</option>
                    <option value="PaidOrders">Paid Orders</option>
                    <option value="UnpaidOrders">Unpaid Orders</option>
                  </select>

                  <search className='relative w-full'>
                      <input type="text" className='form-control w-full focus:border-primary-600' placeholder='Search Orders...' />
                      <i className='absolute text-gray-500 top-1/2 right-3 transform -translate-y-1/2'>
                        <FontAwesomeIcon icon={faSearch} />
                      </i>
                  </search>
                </div>
              </div>

              <div className="order-cart border-2 border-gray-300/50 rounded-md mt-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 items-center justify-between bg-gray-200/50 p-4 border-b border-gray-300/50">
                    <div>
                        <div className="flex flex-col items-center gap-1 lg:flex-row lg:gap-3">
                          <span className="font-semibold">Order #FC9584</span>
                          <span className="bg-primary-200 text-primary-600 rounded-lg px-2 py-1 text-xs">Delivered</span>
                        </div>
                        <span className="text-gray-600">Placed on June 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <button className="text-primary-600 flex items-center gap-x-1 cursor-pointer hover:text-primary-700"><i><FontAwesomeIcon icon={faRotateRight} /></i>Reorder</button>
                      <button className="text-gray-700 flex items-center gap-x-1 cursor-pointer hover:text-gray-800"><i><FontAwesomeIcon icon={faEye} /></i>View Details</button>
                    </div>
                  </div>

                  <div className="bg-white p-4 flex flex-col lg:flex-row items-center justify-between gap-5">
                        <div className=" *:w-full flex items-center gap-2 w-full lg:w-[30%]">
                            <div className="rounded-md overflow-hidden relative">
                              <img className="w-full block" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Top-26-Amazing-Benefits-Of-Green-Apples-For-Skin-Hair-And-Health-1.jpg.webp" alt="Apples" />
                              <span className="bg-black rounded-bl-md flex items-center justify-center size-6 absolute top-0 right-0 text-white">1</span>
                            </div>
                            <div className="rounded-md overflow-hidden relative">
                              <img className="w-full block" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Top-26-Amazing-Benefits-Of-Green-Apples-For-Skin-Hair-And-Health-1.jpg.webp" alt="Apples" />
                              <span className="bg-black rounded-bl-md flex items-center justify-center size-6 absolute top-0 right-0 text-white">2</span>
                            </div>
                            <div className="rounded-md overflow-hidden relative">
                              <img className="w-full block" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Top-26-Amazing-Benefits-Of-Green-Apples-For-Skin-Hair-And-Health-1.jpg.webp" alt="Apples" />
                              <span className="bg-black rounded-bl-md flex items-center justify-center size-6 absolute top-0 right-0 text-white">1</span>
                            </div>
                        </div>

                       <div className="flex items-center justify-between border-l border-r border-gray-300/50 w-full lg:w-[60%] text-center">
                          <div>
                              <span className="text-gray-500">Items</span>
                              <span className="font-semibold text-lg">4 items</span>
                            </div>

                            <div>
                              <span className="text-gray-500">Total Amount</span>
                              <span className="font-semibold text-lg">450 EGP</span>
                            </div>

                            <div>
                              <span className="text-gray-500">Delivered To</span>
                              <span className="font-semibold text-lg">Cairo, Egypt</span>
                            </div>
                       </div>

                       <div className="w-full lg:w-[20%] space-y-2 text-center">
                          <button className="btn bg-primary-600 font-semibold text-nowrap hover:bg-primary-700 w-full">Track Order</button>
                          <button className="btn bg-transparent border border-gray-300 text-gray-700 font-semibold text-nowrap hover:bg-gray-100 w-full">Write Review</button>
                       </div>
                  </div>
              </div>
              <div className="order-cart border-2 border-gray-300/50 rounded-md mt-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 items-center justify-between bg-gray-200/50 p-4 border-b border-gray-300/50">
                    <div>
                        <div className="flex flex-col items-center gap-1 lg:flex-row lg:gap-3">
                          <span className="font-semibold">Order #FC9584</span>
                          <span className="bg-primary-200 text-primary-600 rounded-lg px-2 py-1 text-xs">Delivered</span>
                        </div>
                        <span className="text-gray-600">Placed on June 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <button className="text-primary-600 flex items-center gap-x-1 cursor-pointer hover:text-primary-700"><i><FontAwesomeIcon icon={faRotateRight} /></i>Reorder</button>
                      <button className="text-gray-700 flex items-center gap-x-1 cursor-pointer hover:text-gray-800"><i><FontAwesomeIcon icon={faEye} /></i>View Details</button>
                    </div>
                  </div>

                  <div className="bg-white p-4 flex flex-col lg:flex-row items-center justify-between gap-5">
                        <div className=" *:w-full flex items-center gap-2 w-full lg:w-[30%]">
                            <div className="rounded-md overflow-hidden relative">
                              <img className="w-full block" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Top-26-Amazing-Benefits-Of-Green-Apples-For-Skin-Hair-And-Health-1.jpg.webp" alt="Apples" />
                              <span className="bg-black rounded-bl-md flex items-center justify-center size-6 absolute top-0 right-0 text-white">1</span>
                            </div>
                            <div className="rounded-md overflow-hidden relative">
                              <img className="w-full block" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Top-26-Amazing-Benefits-Of-Green-Apples-For-Skin-Hair-And-Health-1.jpg.webp" alt="Apples" />
                              <span className="bg-black rounded-bl-md flex items-center justify-center size-6 absolute top-0 right-0 text-white">2</span>
                            </div>
                            <div className="rounded-md overflow-hidden relative">
                              <img className="w-full block" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Top-26-Amazing-Benefits-Of-Green-Apples-For-Skin-Hair-And-Health-1.jpg.webp" alt="Apples" />
                              <span className="bg-black rounded-bl-md flex items-center justify-center size-6 absolute top-0 right-0 text-white">1</span>
                            </div>
                        </div>

                       <div className="flex items-center justify-between border-l border-r border-gray-300/50 w-full lg:w-[60%] text-center">
                          <div>
                              <span className="text-gray-500">Items</span>
                              <span className="font-semibold text-lg">4 items</span>
                            </div>

                            <div>
                              <span className="text-gray-500">Total Amount</span>
                              <span className="font-semibold text-lg">450 EGP</span>
                            </div>

                            <div>
                              <span className="text-gray-500">Delivered To</span>
                              <span className="font-semibold text-lg">Cairo, Egypt</span>
                            </div>
                       </div>

                       <div className="w-full lg:w-[20%] space-y-2 text-center">
                          <button className="btn bg-primary-600 font-semibold text-nowrap hover:bg-primary-700 w-full">Track Order</button>
                          <button className="btn bg-transparent border border-gray-300 text-gray-700 font-semibold text-nowrap hover:bg-gray-100 w-full">Write Review</button>
                       </div>
                  </div>
              </div>
              <div className="order-cart border-2 border-gray-300/50 rounded-md mt-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 items-center justify-between bg-gray-200/50 p-4 border-b border-gray-300/50">
                    <div>
                        <div className="flex flex-col items-center gap-1 lg:flex-row lg:gap-3">
                          <span className="font-semibold">Order #FC9584</span>
                          <span className="bg-primary-200 text-primary-600 rounded-lg px-2 py-1 text-xs">Delivered</span>
                        </div>
                        <span className="text-gray-600">Placed on June 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <button className="text-primary-600 flex items-center gap-x-1 cursor-pointer hover:text-primary-700"><i><FontAwesomeIcon icon={faRotateRight} /></i>Reorder</button>
                      <button className="text-gray-700 flex items-center gap-x-1 cursor-pointer hover:text-gray-800"><i><FontAwesomeIcon icon={faEye} /></i>View Details</button>
                    </div>
                  </div>

                  <div className="bg-white p-4 flex flex-col lg:flex-row items-center justify-between gap-5">
                        <div className=" *:w-full flex items-center gap-2 w-full lg:w-[30%]">
                            <div className="rounded-md overflow-hidden relative">
                              <img className="w-full block" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Top-26-Amazing-Benefits-Of-Green-Apples-For-Skin-Hair-And-Health-1.jpg.webp" alt="Apples" />
                              <span className="bg-black rounded-bl-md flex items-center justify-center size-6 absolute top-0 right-0 text-white">1</span>
                            </div>
                            <div className="rounded-md overflow-hidden relative">
                              <img className="w-full block" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Top-26-Amazing-Benefits-Of-Green-Apples-For-Skin-Hair-And-Health-1.jpg.webp" alt="Apples" />
                              <span className="bg-black rounded-bl-md flex items-center justify-center size-6 absolute top-0 right-0 text-white">2</span>
                            </div>
                            <div className="rounded-md overflow-hidden relative">
                              <img className="w-full block" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Top-26-Amazing-Benefits-Of-Green-Apples-For-Skin-Hair-And-Health-1.jpg.webp" alt="Apples" />
                              <span className="bg-black rounded-bl-md flex items-center justify-center size-6 absolute top-0 right-0 text-white">1</span>
                            </div>
                        </div>

                       <div className="flex items-center justify-between border-l border-r border-gray-300/50 w-full lg:w-[60%] text-center">
                          <div>
                              <span className="text-gray-500">Items</span>
                              <span className="font-semibold text-lg">4 items</span>
                            </div>

                            <div>
                              <span className="text-gray-500">Total Amount</span>
                              <span className="font-semibold text-lg">450 EGP</span>
                            </div>

                            <div>
                              <span className="text-gray-500">Delivered To</span>
                              <span className="font-semibold text-lg">Cairo, Egypt</span>
                            </div>
                       </div>

                       <div className="w-full lg:w-[20%] space-y-2 text-center">
                          <button className="btn bg-primary-600 font-semibold text-nowrap hover:bg-primary-700 w-full">Track Order</button>
                          <button className="btn bg-transparent border border-gray-300 text-gray-700 font-semibold text-nowrap hover:bg-gray-100 w-full">Write Review</button>
                       </div>
                  </div>
              </div>
              <div className="order-cart border-2 border-gray-300/50 rounded-md mt-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 items-center justify-between bg-gray-200/50 p-4 border-b border-gray-300/50">
                    <div>
                        <div className="flex flex-col items-center gap-1 lg:flex-row lg:gap-3">
                          <span className="font-semibold">Order #FC9584</span>
                          <span className="bg-primary-200 text-primary-600 rounded-lg px-2 py-1 text-xs">Delivered</span>
                        </div>
                        <span className="text-gray-600">Placed on June 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <button className="text-primary-600 flex items-center gap-x-1 cursor-pointer hover:text-primary-700"><i><FontAwesomeIcon icon={faRotateRight} /></i>Reorder</button>
                      <button className="text-gray-700 flex items-center gap-x-1 cursor-pointer hover:text-gray-800"><i><FontAwesomeIcon icon={faEye} /></i>View Details</button>
                    </div>
                  </div>

                  <div className="bg-white p-4 flex flex-col lg:flex-row items-center justify-between gap-5">
                        <div className=" *:w-full flex items-center gap-2 w-full lg:w-[30%]">
                            <div className="rounded-md overflow-hidden relative">
                              <img className="w-full block" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Top-26-Amazing-Benefits-Of-Green-Apples-For-Skin-Hair-And-Health-1.jpg.webp" alt="Apples" />
                              <span className="bg-black rounded-bl-md flex items-center justify-center size-6 absolute top-0 right-0 text-white">1</span>
                            </div>
                            <div className="rounded-md overflow-hidden relative">
                              <img className="w-full block" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Top-26-Amazing-Benefits-Of-Green-Apples-For-Skin-Hair-And-Health-1.jpg.webp" alt="Apples" />
                              <span className="bg-black rounded-bl-md flex items-center justify-center size-6 absolute top-0 right-0 text-white">2</span>
                            </div>
                            <div className="rounded-md overflow-hidden relative">
                              <img className="w-full block" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Top-26-Amazing-Benefits-Of-Green-Apples-For-Skin-Hair-And-Health-1.jpg.webp" alt="Apples" />
                              <span className="bg-black rounded-bl-md flex items-center justify-center size-6 absolute top-0 right-0 text-white">1</span>
                            </div>
                        </div>

                       <div className="flex items-center justify-between border-l border-r border-gray-300/50 w-full lg:w-[60%] text-center">
                          <div>
                              <span className="text-gray-500">Items</span>
                              <span className="font-semibold text-lg">4 items</span>
                            </div>

                            <div>
                              <span className="text-gray-500">Total Amount</span>
                              <span className="font-semibold text-lg">450 EGP</span>
                            </div>

                            <div>
                              <span className="text-gray-500">Delivered To</span>
                              <span className="font-semibold text-lg">Cairo, Egypt</span>
                            </div>
                       </div>

                       <div className="w-full lg:w-[20%] space-y-2 text-center">
                          <button className="btn bg-primary-600 font-semibold text-nowrap hover:bg-primary-700 w-full">Track Order</button>
                          <button className="btn bg-transparent border border-gray-300 text-gray-700 font-semibold text-nowrap hover:bg-gray-100 w-full">Write Review</button>
                       </div>
                  </div>
              </div>
          </div>
        </div>      
    </div>
  </div>
  
  
  </>
}
