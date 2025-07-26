import { faLeaf, faPlantWilt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductDetailed({productDetails}) {
    const {description,title} = productDetails? productDetails : {};
  return <>
  <div className="px-4 py-4 space-y-4 ">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg lg:text-xl font-semibold">Product Prescription</h2>
        <div className="text-gray-600">
            <p>{title}</p>
            <p>{description}</p>
        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="space-y-4">
            <h2 className="text-lg lg:text-xl font-semibold">Benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Rich in vitamins C and K</li>
                <li>Good souce of fiber and antioxidants</li>
                <li>Supports heart health</li>
                <li>Helps regulate blood pressure</li>
                <li>Promotes healthy skin</li>
            </ul>
        </div>
        <div className="space-y-4">
            <h2 className="text-lg lg:text-xl font-semibold">Product Details</h2>
            <ul className="list-none space-y-3 ">
                <li>Origin: <span className="text-gray-500">California, USA</span></li>
                <li>Cultivation: <span className="text-gray-500">Organic</span></li>
                <li>Storage: <span className="text-gray-500">Refrigerate upon arrival</span></li>
                <li>Shelf Life: <span className="text-gray-500">5-7 days when refrigerated</span></li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col gap-2 mt-6">
        <h3 className="text-lg font-black">How to store</h3>
        <p className="text-gray-600">For optimal freshness, refrigerate strawberries unwashed in their original container on in a paper towel-lined container. Wash just before eating. To extend shelf life , remove any damaged berries as soon as possible</p>
    </div>
        <div className="flex flex-col gap-2 mt-6">
            <h3 className="text-lg font-semibold">Certifications</h3>
            <ul className="flex items-center gap-x-2">
                <li className="flex items-center gap-x-2 py-2 px-3 border border-gray-300 rounded-md">
                    <i className="text-primary-600"><FontAwesomeIcon icon={faLeaf} /></i>
                    <span>USDA Organic</span>
                </li>
                <li className="flex items-center gap-x-2 py-2 px-3 border border-gray-300 rounded-md">
                    <i className="text-primary-600"><FontAwesomeIcon icon={faPlantWilt} /></i>
                    <span>Non-GMO</span>
                </li>
            </ul>
        </div>
  </div>

  </>
}
