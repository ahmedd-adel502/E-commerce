
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import HomeFeatures from '../../components/HomeFeatures/HomeFeatures';
import HomeCategories from '../../components/HomeCategories/HomeCategories';
import HomeDeals from '../../components/HomeDeals/HomeDeals';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import { useRef } from 'react';
import MetaData from '../../components/MetaData/MetaData';


export default function Home() {

   const dealsRef = useRef(null);
  const featuredRef = useRef(null);

  const scrollToDeals = () => {
      dealsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

  const scrollToFeatured = () => {
      featuredRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  return <>
    <MetaData title="Home" description="Fresh Cart Home page" keywords="Home, products, favorite, cart, buy, order,deals" />
    <HomeSlider goToDeals={scrollToDeals} goToFeatured={scrollToFeatured}/>
    <HomeFeatures/>
    <HomeCategories/>
    <div ref={dealsRef}>
      <HomeDeals  />
    </div>
    <div ref={featuredRef}>
      <FeaturedProducts/>
    </div>
  </>
}
