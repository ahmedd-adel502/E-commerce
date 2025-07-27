import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { apiClient } from "../../components/ApiClient/ApiClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import MetaData from "../../components/MetaData/MetaData";

export default function SubCategoryDetails() {

    const {id}= useParams();
    const [isLoading,setIsLoading]= useState(false);
    const [error,setError]= useState(null);
    const [subCategory,setsubCategory]= useState(null);
    async function getSubCategory(id){
        try {
            const response = await apiClient.request(`/subcategories/${id}`);
            setsubCategory(response.data.data);
            console.log(response.data.data);
            
            
        } catch (error) {
            throw error
        }
    }

    useEffect(()=>{
        getSubCategory(id);
    },[id]);


  return <>
  <MetaData title={subCategory?.name} description={subCategory?.description} keywords={subCategory?.name} />
    <div className="bg-white py-15">
          <div className="container">
            <div className={` w-fit mx-auto bg-gray-200/50 p-8 hover:shadow-xl rounded-lg flex flex-col items-center gap-y-2 broder border-2 border-gray-200/10 space-y-2`}>
                <span className='flex justify-center items-center'><i className="text-primary-600 bg-primary-200 flex items-center justify-center rounded-full size-12 text-xl"><FontAwesomeIcon icon={faApple} /></i> </span>
                <h2 className='font-semibold text-center text-nowrap'>{subCategory?.name}</h2>
            </div>
          </div>
      </div>
  
  </>
}
