import { Swiper,SwiperSlide } from "swiper/react";
import {Navigation,Pagination,Autoplay} from 'swiper/modules';
import homeImg from "../../assets/images/home-slider-1.png"
export default function HomeSlider({goToDeals,goToFeatured}) {
  return <>
   <Swiper 
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      modules={[Pagination,Navigation]}
      navigation={true}
      pagination={{clickable:true}}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
          <div style={{backgroundImage:`url(${homeImg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
            <div className=' bg-gradient-to-r from-primary-700/95 to-primary-400/40'>
              <div className="container mx-auto py-34 px-15 space-y-4">
                 <h3 className='font-bold text-white lg:text-3xl text-xl'>Fresh Products <br/>Delivered to Your Door</h3>
                <span className='text-gray-200 lg:text-xl text-lg'>Get 20% off on your first order with code: FRESH20</span>
                <div className='flex gap-4 items-center'>
                  <button onClick={goToFeatured} className='py-3 px-3 rounded-md cursor-pointer bg-white text-primary-400 border-2 border-white hover:bg-gray-100/90'>Shop Now</button>
                  <button onClick={goToDeals} className='py-3 px-3 rounded-md cursor-pointer bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-400'>View Deals</button>
                </div>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div style={{backgroundImage:`url(${homeImg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
            <div className=' bg-gradient-to-r from-primary-700/95 to-primary-400/40'>
              <div className="container mx-auto py-34 px-15 space-y-4">
                 <h3 className='font-bold text-white lg:text-3xl text-xl'>Fresh Products <br/>Delivered to Your Door</h3>
                <span className='text-gray-200 lg:text-xl text-lg'>Get 20% off on your first order with code: FRESH20</span>
                <div className='flex gap-4 items-center'>
                  <button className='py-3 px-3 rounded-md cursor-pointer bg-white text-primary-400 border-2 border-white hover:bg-gray-100/90'>Shop Now</button>
                  <button className='py-3 px-3 rounded-md cursor-pointer bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-400'>View Deals</button>
                </div>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div style={{backgroundImage:`url(${homeImg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
            <div className=' bg-gradient-to-r from-primary-700/95 to-primary-400/40'>
              <div className="container mx-auto py-34 px-15 space-y-4">
                 <h3 className='font-bold text-white lg:text-3xl text-xl'>Fresh Products <br/>Delivered to Your Door</h3>
                <span className='text-gray-200 lg:text-xl text-lg'>Get 20% off on your first order with code: FRESH20</span>
                <div className='flex gap-4 items-center'>
                  <button className='py-3 px-3 rounded-md cursor-pointer bg-white text-primary-400 border-2 font-bold border-white hover:bg-gray-100/90'>Shop Now</button>
                  <button className='py-3 px-3 rounded-md cursor-pointer bg-transparent text-white border-2 font-bold border-white hover:bg-white hover:text-primary-400'>View Deals</button>
                </div>
              </div>
            </div>
          </div>
      </SwiperSlide>
    </Swiper>
  
  </>
}
