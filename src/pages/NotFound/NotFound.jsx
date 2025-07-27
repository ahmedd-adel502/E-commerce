import { faApple } from "@fortawesome/free-brands-svg-icons"
import { faBreadSlice, faDrumstickBite, faEgg, faEnvelope, faHome, faMessage, faPhone, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router"
import errorImg from "../../../public/undraw_feeling-blue_8si6.svg"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import MetaData from "../../components/MetaData/MetaData"
export default function NotFound() {
  return <>

  <MetaData title="Not Found" description=" Page you are looking for is Not Found" keywords="Not Found, products, favorite, cart, buy, order" />
    <div className="flex flex-col space-y-8 justify-center items-center w-full bg-gray-200/50">
        <div className="w-2/5 mt-5">
          <img src={errorImg} alt="Page Not Found" />
        </div>
        <h2 className="text-black font-bold text-3xl">Oops! Page Not Found</h2>
        <div className="text-center space-y-1 px-4 lg:px-0">
          <p className="text-gray-700 lg:text-lg text-sm">The page you're looking for seems to have gone shopping!</p>
          <span className="text-gray-500 text-sm">Don't worry, our fresh products are still available for you.</span>
        </div>

        <div className="flex items-center gap-4 flex-col-reverse lg:flex-row">
          <Link to={"/"} className="btn border-2 border-primary-600 rounded-md text-white bg-primary-600 flex items-center gap-x-2 hover:bg-primary-700 hover:border-primary-700"><i><FontAwesomeIcon icon={faHome} /></i>Back to Home</Link>
          <div className="border-2 py-2 px-4 border-primary-500 focus-within:border-primary-600 rounded-md text-primary-600 bg-transparent flex items-center gap-x-2">
            <i><FontAwesomeIcon icon={faSearch} /></i>
            <input placeholder="Search Products" className="outline-none peer w-full placeholder:text-primary-600"/>
          </div>
        </div>

        <div className="mt-6 space-y-8 text-center">
          <h2 className="text-black font-semibold text-lg">Or explore our popular categories</h2>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            <li className=" bg-white rounded-md p-3">
                <Link className="flex items-center flex-col gap-2" to={"/categories"}>
                      <span className="rounded-full size-10 flex items-center justify-center bg-primary-200"><i className="text-primary-600 text-lg"><FontAwesomeIcon icon={faApple} /></i></span>
                      <span>Fruits & vegetables</span>
                </Link>
            </li>
            <li className=" bg-white rounded-md p-3">
                <Link className="flex items-center flex-col gap-2" to={"/categories"}>
                    <span className="rounded-full size-10 flex items-center justify-center bg-primary-200"><i className="text-primary-600 text-lg"><FontAwesomeIcon icon={faEgg} /></i></span>
                    <span>Dairy & Eggs</span>
                </Link>
            </li>
            <li className=" bg-white rounded-md p-3">
                <Link className="flex items-center flex-col gap-2" to={"/categories"}>
                    <span className="rounded-full size-10 flex items-center justify-center bg-primary-200"><i className="text-primary-600 text-lg"><FontAwesomeIcon icon={faBreadSlice} /></i></span>
                    <span>Bakery & Snacks</span>
                </Link>
            </li>
            <li className=" bg-white rounded-md p-3">
                <Link className="flex items-center flex-col gap-2" to={"/categories"}>
                    <span className="rounded-full size-10 flex items-center justify-center bg-primary-200"><i className="text-primary-600 text-lg"><FontAwesomeIcon icon={faDrumstickBite} /></i></span>
                    <span>Meat & Seafood</span>
                </Link>
            </li>
          </ul>
        </div>


        <div className="bg-primary-50 rounded-md py-4 px-5 mx-5 space-y-4 text-center mb-18">
            <h2 className="text-black font-semibold">Need help?</h2>
            <span className="text-gray-600">Our customer support team is here to assist you 24/7</span>
            <ul className="flex items-center flex-col lg:flex-row gap-2 lg:gap-4">
              <li>
                <a className="flex items-center gap-x-2" href="tel:+1 (800) 123-4567"><i className="text-primary-600"><FontAwesomeIcon icon={faPhone} /></i><span className="text-gray-700">+1 (800) 123-4567</span></a>
              </li>
              <li><a className="flex items-center gap-x-2" href="mailto:support@freshcart.com"><i className="text-primary-600"><FontAwesomeIcon icon={faEnvelope} /></i><span className="text-gray-700">support@freshcart.com</span></a></li>
              <li className="flex items-center gap-x-2"><i className="text-primary-600"><FontAwesomeIcon icon={faMessage} /></i><span className="text-gray-700">Live Chat</span></li>
            </ul>
        </div>
       <NewsLetter />
    </div>
    
  
  </>
}
