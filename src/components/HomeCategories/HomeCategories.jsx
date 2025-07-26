import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import Loading from "../Loading/Loading";
import { CategoriesContext } from "../../Context/Categories.context";
import { useContext, useEffect } from "react";

export default function HomeCategories() {
  const {categories,isLoading,fetchCategories} = useContext(CategoriesContext); 

 

  if (isLoading) {
    return <Loading />
  }

  
 


  return <>
    <section className='category bg-gray-500/10 py-10 px-5 sm:px-4 lg:px-2'>
      <div className="container mx-auto space-y-10">
          <div className="category-header flex justify-between items-center">
            <h2 className='font-bold text-2xl'>Shop By Category</h2>
            <Link className='text-primary-600 flex items-center gap-x-1' to={"/categories"}>View All Categories <i className='text-primary-600'><FontAwesomeIcon icon={faArrowRight} /></i></Link>
          </div>

          {categories ? <div className='category-list px-4 grid sm:grid-cols-3 grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
            {categories.map((category) => (
              <Link to={`/categories/${category._id}`} key={category._id} className={`cursor-pointer category-cart bg-white py-5 px-5 hover:shadow-xl rounded-lg flex flex-col items-center gap-y-2 broder border-2 border-gray-200/10 space-y-2`}>
                <span className='flex justify-center items-center'><img className="size-25 rounded-full object-fill" src={category.image} alt={category.name} /></span>
                <h2 className='font-semibold text-center text-nowrap'>{category.name}</h2>
             </Link>
            ))}
          </div>: <Loading />}
      </div>
    </section>
  
  
  </>
}
