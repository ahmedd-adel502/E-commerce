import { faArrowRotateLeft, faHeadphonesSimple, faShieldHalved, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeFeatures() {
  return <>
    <div className='security bg-white py-15'>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
        <div className=" shadow-lg hover:shadow-xl py-5 px-5 rounded-lg relative border-1 border-gray-200/90 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-x-4  mx-auto w-[80%] lg:w-[70%] xl:w-[90%]">
         <div>
            <i className='text-3xl text-primary-600 bg-primary-200 rounded-full w-[50px] h-[50px] flex justify-center items-center' ><FontAwesomeIcon icon={faTruckFast} /></i>
         </div>
           <div>
             <h2 className='font-semibold'>Free Delivery</h2>
            <span className='text-gray-500'>Order $50 or more</span>
           </div>
        </div>
        <div className=" shadow-lg hover:shadow-xl py-5 px-5 rounded-lg relative border-1 border-gray-200/90 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-x-4  mx-auto w-[80%] lg:w-[70%] xl:w-[90%]">
          <div>
            <i className='text-3xl text-primary-600 bg-primary-200 rounded-full w-[50px] h-[50px] flex justify-center items-center' ><FontAwesomeIcon icon={faArrowRotateLeft} /></i>
          </div>
           <div>
             <h2 className='font-semibold'>30 Days Return</h2>
            <span className='text-gray-500'>Satisfaction guranteed</span>
           </div>
        </div>
        <div className=" shadow-lg hover:shadow-xl py-5 px-5 rounded-lg relative border-1 border-gray-200/90 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-x-4  mx-auto w-[80%] lg:w-[70%] xl:w-[90%]">
          <div>
            <i className='text-3xl text-primary-600 bg-primary-200 rounded-full w-[50px] h-[50px] flex justify-center items-center' ><FontAwesomeIcon icon={faShieldHalved} /></i>
          </div>
            <div>
              <h2 className='font-semibold'>Secure Payment</h2>
            <span className='text-gray-500'>100% Protected Checkout</span>
            </div>
        </div>
        <div className=" shadow-lg hover:shadow-xl py-5 px-5 rounded-lg relative border-1 border-gray-200/90 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-x-4  mx-auto w-[80%] lg:w-[70%] xl:w-[90%]">
          <div>
            <i className='text-3xl text-primary-600 bg-primary-200 rounded-full w-[50px] h-[50px] flex justify-center items-center' ><FontAwesomeIcon icon={faHeadphonesSimple} /></i>
          </div>
            <div>
              <h2 className='font-semibold'>24/7 Support</h2>
            <span className='text-gray-500'>Ready to help anytime</span>
            </div>
        </div>
      </div>  
    </div>
  
  </>
}
