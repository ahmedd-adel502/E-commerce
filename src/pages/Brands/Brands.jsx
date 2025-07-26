import { faArrowRight, faCheck, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { Link } from "react-router";
import { BrandsContext } from "../../Context/Brands.context";
import brandImg from "../../assets/images/BrandsPage.png";

export default function Brands() {


  const {brands,isLoading,fetchAllBrands,fetchSpecificBrand} = useContext(BrandsContext);


  useEffect(() => {
    fetchAllBrands();
  }, []);
  


  

  return <>
    <div className="space-y-3 text-center py-10">
      <h1 className="font-bold text-3xl">Our Partner Brands</h1>
      <p className="text-gray-500 text-sm lg:text-lg">Discover Quality products from our trusted brand partners. We've partnered with leading <br /> brands to bring you the best selection of fresh and organic products.</p>
    </div>

    {/* Featured Brands */}
    <div className="bg-gray-100/50 pt-10 px-5 sm:px-3 lg:px-0">
        <div className="container">
          <h1 className="font-bold text-2xl my-4">Featured Brands</h1>
          <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-3">
              <div className="rounded-lg overflow-hidden bg-white border border-gray-200">
                <div className="relative">
                  <img className="w-full block" src="https://dairypure.com/wp-content/uploads/2024/12/milks-creams-cottage-cheese.png" alt="Pure Dairy" />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 flex flex-col justify-end items-start py-10 px-6">
                        <h2 className="text-white font-bold text-2xl">Nature's Harvest</h2>
                        <span className="text-gray-300 text-sm ">Premium Organic product</span>
                  </div>
                </div>
                <div className="px-4 py-2 space-y-3">
                  <p className="text-gray-600">Bringing the freshest organic fruits and vegetables from farm to table since 1995.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">124 Products</span>
                    <Link className="flex items-center gap-2 text-primary-600">
                      View Products <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              </div>

                            <div className="rounded-lg overflow-hidden bg-white border border-gray-200">
                <div className="relative">
                  <img className="w-full block" src="https://dairypure.com/wp-content/uploads/2024/12/milks-creams-cottage-cheese.png" alt="Pure Dairy" />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 flex flex-col justify-end items-start py-10 px-6">
                        <h2 className="text-white font-bold text-2xl">Pure Dairy</h2>
                        <span className="text-gray-300 text-sm ">Farm Fresh Dairy Products</span>
                  </div>
                </div>
                <div className="px-4 py-2 space-y-3">
                  <p className="text-gray-600">Ethically sourced dairy products from family-owned farms with no artificial additives.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">87 Products</span>
                    <Link className="flex items-center gap-2 text-primary-600">
                      View Products <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              </div>

                            <div className="rounded-lg overflow-hidden bg-white border border-gray-200">
                <div className="relative">
                  <img className="w-full block" src="https://dairypure.com/wp-content/uploads/2024/12/milks-creams-cottage-cheese.png" alt="Pure Dairy" />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 flex flex-col justify-end items-start py-10 px-6">
                        <h2 className="text-white font-bold text-2xl">Hearth & grain</h2>
                        <span className="text-gray-300 text-sm ">Artisan Bakery Products</span>
                  </div>
                </div>
                <div className="px-4 py-2 space-y-3">
                  <p className="text-gray-600">Handcrafted breads and pastries made with traditional methods and organic ingredients.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">62 Products</span>
                    <Link className="flex items-center gap-2 text-primary-600">
                      View Products <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              </div>
          </div>

          <div className="py-10">
              <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
                <div className="relative w-full my-2 lg:my-0 lg:w-[30%]">
                  <input type="text" placeholder="Search brands..." className="form-control bg-white placeholder:text-black" />
                  <i className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"><FontAwesomeIcon icon={faSearch} /></i>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-gray-500">Sort by:</span>
                    <select className="rounded-md py-1 px-2 bg-white border border-gray-300/50">
                        <option value="a-z">Alphabetical: A-Z</option>
                        <option value="1-9">Numerical: 1-9</option>
                    </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
                    {brands?.map(brand=><div key={brand._id} className="rouned-lg border border-gray-200/50 bg-white space-y-3">
                      <div className="border-b border-gray-300/50">
                        <Link className="block" to={`/brands/${brand._id}`}><img className="w-full h-full block" src={brand.image} alt="Pure dairy" /></Link>
                      </div>
                      <div className="px-4 py-2">
                        <Link className="flex items-center w-fit" to={`/brands/${brand._id}`}><h2 className="font-bold text-lg">{brand.name}</h2></Link>
                        <p className="text-gray-500 text-sm">{brand.slug}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500">124 Products</span>
                          <Link className="text-primary-600 hover:text-primary-700">View</Link>
                        </div>
                      </div>
                    </div>)}
              </div>
          </div>
        </div>
        <div className="bg-primary-50 flex items-center justify-center py-10">
                <div className="bg-white w-[60%] rounded-lg overflow-hidden border border-gray-200/50 flex items-center justify-between">
                      <div className="space-y-8 px-6 py-6">
                        <h1 className="font-bold text-2xl">Want to become a brand <br /> partner?</h1>
                        <p className="text-gray-500">Join our growing family of quality brands. <br />Showcase your products to our engaged customer. <br />base and grow your business with FreshCart.</p>

                        <ul className="flex flex-col gap-4">
                          <li className="flex items-center gap-x-2 text-gray-600"><i className="text-primary-600"><FontAwesomeIcon icon={faCheck} /></i>Access to over 1 million active customers</li>
                          <li className="flex items-center gap-x-2 text-gray-600"><i className="text-primary-600"><FontAwesomeIcon icon={faCheck} /></i>Dedicated account manager for your brand</li>
                          <li className="flex items-center gap-x-2 text-gray-600"><i className="text-primary-600"><FontAwesomeIcon icon={faCheck} /></i>Marketing and promotional opportunities</li>
                          <li className="flex items-center gap-x-2 text-gray-600"><i className="text-primary-600"><FontAwesomeIcon icon={faCheck} /></i>Steamlined logistics and fulfillment</li>
                        </ul>
                        <button className="btn py-3 px-4 bg-primary-600 hover:bg-primary-700">Apply to Become a Partner</button>
                      </div>
                      <img className="w-1/2" src={brandImg} alt="Partner" />
                </div>
                
            </div>
    </div>
  
  </>
}
