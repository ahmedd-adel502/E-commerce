import { apiClient } from "../components/ApiClient/ApiClient";


export async function fetchAllProducts({
    page,
    priceGreaterThan,
    priceLessThan,
    sortedBy,
    keyword,
    brand,
    category,
    price,
    priceAfterDiscount,
    title,
    imageCover,
    id,
    ratingsAverage,
    ratingsQuantity
}={}){
    


    
 const options={
    method:"GET",
    url:`/products?${page?`page=${page}`:""}${keyword?`&keyword=${keyword}`:""}${brand?`&brand=${brand}`:""}${category?`&category=${category}`:""}${priceGreaterThan?`&price[gte]=${priceGreaterThan}`:""}${priceLessThan?`&price[lte]=${priceLessThan}`:""}${sortedBy?`&sortedBy=${sortedBy}`:""}${category?`&category[in]=${category}`:""}${brand?`&brand=${brand}`:""}`

}

 const response = await apiClient.request(options);
 return response;
 



}