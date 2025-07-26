import { faCcMastercard, faCcVisa, faFacebookF, faInstagram, faPaypal, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function Footer() {
  return <>
    <div className="bg-white border-t border-gray-300/80 text-sm sm:text-lg">
      <div className="container py-10 px-4">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-x-10">
        <div className="space-y-6 w-full sm:w-full sm:text-sm lg:text-lg">
            <div>
                <Link to={"/"} className="text-2xl font-bold text-primary-600">
                    Fresh<span className="text-black">Cart</span>
                </Link>
            </div>
            <p className="text-gray-500">FreshCart is your one-step destination for fresh groceries, organic products, and household essentials delievered right to your doorstep</p>
            <ul className="text-gray-500 flex justify-center sm:justify-start items-center gap-x-4 mt-6">
              <li>
                <a href="https://web.facebook.com/ahmedadell502"><i className="hover:text-primary-600"><FontAwesomeIcon icon={faFacebookF} /></i></a>
              </li>
              <li>
                <a href="https://web.facebook.com/ahmedadell502"><i className="hover:text-primary-600"><FontAwesomeIcon icon={faTwitter} /></i></a>
              </li>
              <li>
                <a href="https://web.facebook.com/ahmedadell502"><i className="hover:text-primary-600"><FontAwesomeIcon icon={faInstagram} /></i></a>
              </li>
              <li>
                <a href="https://web.facebook.com/ahmedadell502"><i className="hover:text-primary-600"><FontAwesomeIcon icon={faPinterest} /></i></a>
              </li>

            </ul>
        </div>
        <div className="flex items-center justify-between gap-x-10 w-full mt-6 sm:text-sm sm:w-full lg:text-lg lg:w-full">
          <div>
            <span className="text-lg font-semibold">Categories</span>
            <ul className="text-gray-500 flex flex-col ps-2 justify-between space-y-4 mt-4">
              <li>
                <Link to={"/category/fruits"} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                  Fruists & Vegetables
                </Link>
              </li>
              <li>
                <Link to={"/category/fruits"} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                  Dairy & Eggs
                </Link>
              </li>
              <li>
                <Link to={"/category/fruits"} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                  Bakey & Snacks
                </Link>
              </li>
              <li>
                <Link to={"/category/fruits"} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                  Meat & Seafood
                </Link>
              </li>
              <li>
                <Link to={"/category/fruits"} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                  Beverages
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="text-lg font-semibold">Quick Links</span>
            <ul className="text-gray-500 flex flex-col ps-2 justify-between space-y-4 mt-4">
               <li>
                <Link to={"/about"} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to={"/terms"} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={"/terms"} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                  Terms Of Service
                </Link>
              </li>
              <li>
                <Link to={"/shipping"} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="text-lg font-semibold">Customer Service</span>
            <ul className="text-gray-500 flex flex-col ps-2 justify-between space-y-4 mt-4">
                <li>
                <Link to={"/account"} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                  My account
                </Link>
              </li>
              <li>
                <Link to={"/orders"} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                  Order History
                </Link>
              </li>
              <li>
                <Link to={"/whishlist"} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                  WishList
                </Link>
              </li>
              <li>
                <Link to={"/orders"} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                  Returns and Refunds
                </Link>
              </li>
              <li>
                <Link to={"/help"} className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="divider my-5 bg-gray-200/50"></div>
      <div className="bottom-footer flex justify-between items-center text-xs sm:text-sm">
            <p className="text-gray-500">&copy; 2025 FreshCart , All rights Reserved , Designed By <a className="text-black font-semibold" href="https://web.facebook.com/ahmedadell502">Ahmed Adel</a></p>
            <div className="flex items-center flex-col sm:flex-row sm:gap-x-2">
              <p className="text-gray-500">Secure Payments Powered by </p>
              <ul className="flex items-center gap-x-2">
                <li>
                  <i className="text-blue-500 text-xl">
                    <FontAwesomeIcon icon={faCcVisa} />
                  </i>
                </li>
                <li>
                  <i className="text-red-500 text-xl">
                    <FontAwesomeIcon icon={faCcMastercard} />
                  </i>
                </li>
                <li>
                  <i className="text-blue-500 text-xl">
                    <FontAwesomeIcon icon={faPaypal} />
                  </i>
                </li>
              </ul>
            </div>
        </div>
    </div>
    </div>
  
  
  </>
}
