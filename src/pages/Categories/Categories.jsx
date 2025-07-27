import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faCheck, faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { getCategories } from "../../Services/CategoriesService";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import { CategoriesContext } from "../../Context/Categories.context";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import MetaData from "../../components/MetaData/MetaData";

export default function Categories() {
  const {getSubCategories,setSubCategories,subCategories} = useContext(CategoriesContext)

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);


  async function fetchCategories(){
    setIsLoading(true);
    try {
      const response = await getCategories();
      if (response.success){
        setIsLoading(false);
        setCategories(response.data.data);
        
        
      }
    } catch (error) {
      setIsError(true);
      setError(error);
      
    }
  }

  async function fetchSubCategories(){
    try {
      const response = await getSubCategories();
      if (response?.success){
        setSubCategories(response.data.data);
      }
    } catch (error) {
      throw error
    }
  }


  

  useEffect(() => {
    fetchCategories();
    fetchSubCategories();
  }, []);

  return <>
  <MetaData title="Categories" description="Categories of your favorite products" keywords="Categories, products, favorite, cart, buy, order" />
  {/* Categories Header */}
    <div>
      <div className="container flex flex-col text-center lg:text-left gap-3 lg:gap-0 lg:flex-row  justify-between items-center py-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Shop by Categories</h2>
          <span className="text-gray-500">Browse our wide selection of fresh products by category</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Sort by:</span>
          <select className="py-1 px-2 border border-gray-300 rounded-md">
            <option value="Featured">Featured</option>
            <option value="Featured">Deals</option>
            <option value="Featured">Sup Category</option>
          </select>
          <div className="flex items-center rounded-md overflow-hidden border border-gray-300/50 w-fit">
              <i className="text-white bg-primary-600 flex items-center justify-center p-2"><FontAwesomeIcon icon={faQuestionCircle} /></i>
              <i className="text-black flex items-center justify-center p-2"><FontAwesomeIcon icon={faListUl} /></i>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-200/50 py-15">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 lg:px-0 gap-4">
              {categories.slice(0,6).map((category) => (
                <div key={category._id} className="rounded-lg overflow-hidden bg-white">
                <div className="relative h-[450px]">
                   <img className="h-full w-full" src={category.image} alt={category.name} />
                  <div to={`/categories/${category._id}`} className="absolute top-0 left-0 w-full h-full bg-black/20 flex flex-col justify-end pb-10 px-5">
                    <h2 className="text-white text-2xl font-bold hover:text-gray-300"><Link to={`/categories/${category._id}`}>{category.name}</Link></h2>
                    <span className="text-gray-100">82 items</span>
                  </div>
                </div>
                <div className="flex justify-between items-center my-5 px-5">
                    <ul className="flex items-center gap-2 *:bg-primary-200 *:text-primary-600 *:py-1 *:px-2 *:rounded-md">
                      <li>Premium</li>
                      <li>Fresh</li>
                      <li>Local</li>
                    </ul>
                    <Link to={`/categories/${category._id}`} className="text-primary-600 text-xl hover:text-primary-700">
                      <i><FontAwesomeIcon icon={faArrowRight} /></i>
                    </Link>
                </div>
              </div>
              ))}
            </div>
          </div>
      </div>

      {/* Popular SubCategories */}
      <div className="py-15 px-5 lg:px-0">
        <div className="container space-y-5">
          <h2 className="font-bold text-2xl">Popluar Subcategories</h2>
          <div className="grid px-4 sm:grid-cols-3 grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {subCategories?.slice(0,6).map((subCategory) => (
                  <Link to={`/subcategories/${subCategory._id}`} key={subCategory._id} className={`cursor-pointer category-cart bg-gray-200/50 py-5 px-5 hover:shadow-xl rounded-lg flex flex-col items-center gap-y-2 broder border-2 border-gray-200/10 space-y-2`}>
                  <span className='flex justify-center items-center'><i className="text-primary-600 bg-primary-200 flex items-center justify-center rounded-full size-12 text-xl"><FontAwesomeIcon icon={faApple} /></i> </span>
                  <h2 className='font-semibold text-center text-nowrap'>{subCategory.name}</h2>
                 </Link>
              ))}
          </div>
        </div>
      </div>

      {/* featured Category */}
      <div className="bg-gray-200/50 py-15 px-5 lg:px-0">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-md overflow-hidden">
              <div className="bg-primary-50 flex flex-col justify-center px-10 space-y-5 py-5 lg:py-0">
                <span className="text-primary-600 block">Featured Category</span>
                <h2 className="text-3xl font-bold">Organic fruits and vegetables</h2>
                <p className="text-gray-500">Discover our wide range of certified organic products, sourced from local farms and delivered fresh to your doorstep.</p>
                <ul>
                  <li>
                    <i className="text-primary-600 mx-2"><FontAwesomeIcon icon={faCheck} /></i>
                    <span>100% Certified Organic</span>
                  </li>
                  <li>
                    <i className="text-primary-600 mx-2"><FontAwesomeIcon icon={faCheck} /></i>
                    <span>Locally sourced when Available</span>
                  </li>
                  <li>
                    <i className="text-primary-600 mx-2"><FontAwesomeIcon icon={faCheck} /></i>
                    <span>No Pesticides or Harmful Chemicals</span>
                  </li>
                </ul>
                <button className="btn bg-primary-600 w-fit hover:bg-primary-700">Explore Category</button>
              </div>
              <div>
                <img src="https://d1hm90tax3m3th.cloudfront.net/web/vegetables.jpg" alt="Fruits and vegetables" />
              </div>
          </div>
        </div>
      </div>

      {/* Seasonal Categories */}
      <div className="py-10">
        <div className="container space-y-5 px-5 lg:px-0">
          <h2 className="text-3xl font-bold">Seasonal Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="relative rounded-md overflow-hidden">
              <img className="h-full w-full object-cover" src="https://t3.ftcdn.net/jpg/01/47/51/60/360_F_147516063_hCXI8VUIdBYud0B0hhS3Yo5CFTT1a4g8.jpg" alt="Fruits and vegetables" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-end pb-10 px-5 space-y-2 *:w-fit">
                  <span className="text-white bg-primary-600 py-1 px-2 rounded-xl">Limited Time</span>
                  <span className="text-white font-bold text-xl">Summer fruits</span>
                  <span className="text-gray-400">28 items</span>
              </div>
            </div>
            <div className="relative rounded-md overflow-hidden">
              <img className="h-full w-full object-cover" src="https://c1.wallpaperflare.com/preview/69/216/930/pumpkins-crate-food-vegetables.jpg" alt="Fall Harvest Pumpkin" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-end pb-10 px-5 space-y-2 *:w-fit">
                  <span className="text-white bg-primary-600 py-1 px-2 rounded-xl">Limited Time</span>
                  <span className="text-white font-bold text-xl">Fall Harvest</span>
                  <span className="text-gray-400">32 items</span>
              </div>
            </div>
            <div className="relative rounded-md overflow-hidden">
              <img className="h-full w-full object-cover" src="https://as1.ftcdn.net/jpg/04/61/19/58/1000_F_461195881_yxNxBC93Ceylxa3wOwd4JnfF8DlrfSG2.jpg" alt="Baking Offers" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-end pb-10 px-5 space-y-2 *:w-fit">
                  <span className="text-white bg-primary-600 py-1 px-2 rounded-xl">Limited Time</span>
                  <span className="text-white font-bold text-xl">Holiday Baking</span>
                  <span className="text-gray-400">24 items</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <NewsLetter/>
      </div>
    </div>
  </>
}
