import { faApplePay, faCcMastercard, faCcVisa, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight, faChevronLeft, faCircleInfo, faCreditCard, faLock, faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import * as yup from "yup";
import { CartContext } from "../../Context/Cart.context";
import { apiClient } from "../../components/ApiClient/ApiClient";
import { toast, Zoom } from "react-toastify";
export default function CheckOut() {

  const {cartInfo,setCartInfo} = useContext(CartContext)
  const {numOfCartItems,cartId,data} = cartInfo? cartInfo : {}
  const {totalCartPrice,products} = data? data : {}
  const {product} = products ? products : []
  const {count,price} = product? product : {}



 
  

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      paymentMethod: "online",
      shippingAddress: {
        details:"",
        phone: "",
        city: "",
      }
    },
    validationSchema: yup.object({
      paymentMethod: yup.string().required("Please select a payment method"),
      shippingAddress: yup.object({
        details: yup.string().required("Shipping Address is required"),
        phone: yup.string().required("Phone Number is required").matches(/^[\+2]?01[012][0-9]{8}$/,"Please enter a valid phone number"),
        city: yup.string().required("City is required"),
      })
    }),
    onSubmit: (values) => {
      handlePayment(values);
      
    }
  })

  function handlePaymentMethodChange(e) {
    formik.setFieldValue("paymentMethod", e.target.value);
  }



 async function handlePayment(values){

  let url

  if (values.paymentMethod === "online") {
     url =`/orders/checkout-session/${cartId}?url=${location.origin}`
  } else if (values.paymentMethod === "cod"){
     url =`/orders/${cartId}`
  }



    try {
      const options= {
      url:url,
      method:"POST",
      data:{
        shippingAddress:{
          details:values.shippingAddress.details,
          phone:values.shippingAddress.phone,
          city:values.shippingAddress.city
        }
      }
    }

    const response = await apiClient.request(options)
    setCartInfo({
      data:{},
      numOfCartItems:0,
      cartId:response.cartId
    })
    if (response.success) {
      if (values.paymentMethod === "online") {
        toast.loading("Redirecting to payment page",{autoClose:2000,position:`top-right`,transition:Zoom,theme:"colored"});
        setTimeout(()=>{
          window.location.href = response?.data?.session.url
        },2500)
        
        
      } else if (values.paymentMethod === "cod") {
        toast.success("Your Order has been submitted successfully",{autoClose:2000,position:`top-right`,transition:Zoom,theme:"colored"});
        setTimeout(()=>{
          navigate("/orders")
        },3000)
        
      }
    }
    } catch (error) {
      console.log(error);
      
    }
    
  }








  
  return <>
      <section className="bg-gray-100 py-10">
        <div className="container">
          <div className="w-[90%] lg:w-[80%] mx-auto">
              <h1 className="font-bold text-2xl mb-6">Checkout</h1>
            <form className="flex flex-col lg:flex-row justify-between gap-10" onSubmit={formik.handleSubmit}>
              <div className="h-fit">
                
                <div >
                  <div className="payment-options rounded-lg bg-white p-6 mb-6">
                    <h2 className="font-semibold text-lg mb-6">Payment Method</h2>
                    <div className="space-y-4">
                       <div className={` ${formik.values.paymentMethod === "cod" && "bg-primary-50"} border border-gray-300/50 rounded-md px-2 py-5 space-y-5`}>
                            <label htmlFor="cod" className="flex items-center justify-between gap-4">
                            <div className="w-full flex flex-col items-center justify-between gap-4">
                              <div className="flex items-center gap-2">
                                <input type="radio" id="cod" name="paymentMethod" value={"cod"} onChange={formik.handleChange} onBlur={formik.handleBlur} onClick={(e)=>{handlePaymentMethodChange(e)}} />
                                  <i className="text-primary-600"><FontAwesomeIcon icon={faMoneyBill1Wave} /></i>
                                <div className="flex flex-col justify-center">
                                  <h3 className="text-primary-600">Cash on Delivery</h3>
                                  <p className="text-gray-600 text-sm">Pay with cash when your order is delivered</p>
                                </div>
                              </div>
                              <span className="text-primary-600">No Extra changes</span>
                            </div>
                          </label>
                          {formik.values.paymentMethod==="cod"&&<div className="bg-primary-100 py-6 px-2 rounded-md border border-gray-300/50 w-[80%] mx-auto">
                              <div className="flex items-center justify-center w-[100%]  gap-2">
                                  <i className="text-primary-600"><FontAwesomeIcon icon={faCircleInfo} /></i>
                                  <p className="text-primary-600 text-sm">Please keep exact change ready for hasstle-free delivery</p>
                              </div>
                          </div>}
                       </div>
                      

                      <div className={`${formik.values.paymentMethod === "online" && "bg-primary-50"} border border-gray-300/50 rounded-md px-2 py-5 space-y-5`}>
                               <label htmlFor="online"  className="flex items-center justify-between gap-4">
                        <div className="w-full flex flex-col items-center justify-between gap-4">
                          <div className="flex items-center gap-2">
                            <input type="radio" id="online" name="paymentMethod" value={"online"} onChange={formik.handleChange} onBlur={formik.handleBlur} checked={formik.values.paymentMethod === "online"} onClick={(e)=>{handlePaymentMethodChange(e)}}/>
                                <i className="text-primary-600"><FontAwesomeIcon icon={faCreditCard} /></i>
                              <div className="flex flex-col justify-center">
                                <h3 className="text-primary-600">Online payment</h3>
                                <p className="text-gray-600 text-sm">Pay securely with card or digital wallet</p>
                              </div>
                          </div>
                          <span className="text-primary-600">Recommended</span>
                        </div>
                      </label>
                      {formik.values.paymentMethod==="online"&&<div className="bg-blue-100 py-6 px-2 rounded-md border border-gray-300/50 w-[80%] mx-auto">
                          <div className="flex items-center justify-center lg:w-[90%] w-[100%] mx-auto gap-2">
                              <i className="text-blue-600"><FontAwesomeIcon icon={faCircleInfo} /></i>
                              <p className="text-blue-600 text-sm">Your will be redirected to secure payment gateway to complete your transaction</p>
                          </div>
                        </div>}
                      </div>
                    </div>
                    
                  </div>

                  <div className="shipping-address rounded-lg bg-white p-6 space-y-4">
                    <h2 className="font-semibold text-lg mb-6">Shipping Address</h2>
                    <div className="address">
                      <label htmlFor="addressDetails" className="text-gray-700">Address Details *</label>
                      <textarea name="shippingAddress.details" value={formik.values.shippingAddress.details} onChange={formik.handleChange} onBlur={formik.handleBlur} id="addressDetails" placeholder="Enter your shipping address details" className="form-control max-h-[150px]"></textarea>
                      {formik.errors.shippingAddress?.details && formik.touched.shippingAddress?.details?<p className="text-red-600 text-sm">{formik.errors.shippingAddress?.details}</p>:""}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="phone grow-1">
                          <label htmlFor="phone" className="text-gray-700">Phone Number *</label>
                          <input type="tel" name="shippingAddress.phone" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="01121989480" id="phone" className="form-control" />
                          {formik.errors.shippingAddress?.phone && formik.touched.shippingAddress?.phone?<p className="text-red-600 text-sm">{formik.errors.shippingAddress?.phone}</p>:""}
                      </div>
                      <div className="city grow-1">
                          <label htmlFor="city" className="text-gray-700">City *</label>
                          <input type="text" name="shippingAddress.city" onChange={formik.handleChange} onBlur={formik.handleBlur} id="city" placeholder="cairo" className="form-control" />
                          {formik.errors.shippingAddress?.city && formik.touched.shippingAddress?.city?<p className="text-red-600 text-sm">{formik.errors.shippingAddress?.city}</p>:""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 bg-white border border-gray-300/50 rounded-lg p-5 lg:w-[55%] xl:w-[40%] h-fit">
                  <h2 className="font-bold text-xl">Order Summary</h2>
                  <div className={`cart-items ${products?.length>0 && " h-[350px] overflow-auto"}`}>
                        {products?.length <= 0 ? <><p className="text-gray-600 text-center text-lg">Your cart is empty!</p>
                          <button type="button" className="btn bg-primary-600 w-full my-2 hover:bg-primary-700"><Link to="/"><i className="text-white"><FontAwesomeIcon icon={faArrowLeft} /></i> Continue Shopping</Link></button>
                        </>:""}
                      {products?.map((product)=>{
                        return <div key={product._id} className="flex items-center justify-between space-x-8 space-y-4">
                        <div className="flex items-center gap-3">
                              <div className="w-[60px] flex items-center justify-center rounded-lg overflow-hidden border border-gray-300/50">
                                <Link to={`/product/${product.product.id}`}><img className="w-full" src={product.product.imageCover} alt={product.product.title} /></Link>
                              </div>
                            <div className="flex flex-col text-gray-500 justify-center">
                                <span className="text-gray-700"><Link to={`/product/${product.product.id}`}>{product.product.title}</Link></span>
                                <span>Qty: {product.count}</span>
                            </div>
                        </div>
                        <span className="text-gray-700 block text-nowrap w-fit">{product.price} EGP</span>
                      </div>
                      })}
                  </div>
                  <div className="divider"></div>
                   <div className="flex justify-between items-center">
                      <ul className="text-gray-700 space-y-3 px-4">
                        <li>SubTotal ({numOfCartItems} item)</li>
                        <li>Shipping</li>
                        <li>Tax</li>
                      </ul>
                      <ul className="text-gray-700 space-y-3 px-4">
                        <li>{products?.length>0 ? totalCartPrice:0} EGP</li>
                        <li className="text-primary-600">{products?.length>0 ? 70:0} EGP</li>
                        <li>14% of Subtotal</li>
                      </ul>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-semibold">{products?.length>0 ? Math.trunc((totalCartPrice+70)+(totalCartPrice*14/100)):0} EGP</span>
                  </div>

                   <div className="flex flex-col gap-4">
                    <button type="submit" className="btn flex justify-center items-center gap-2 text-center bg-primary-600 hover:bg-primary-700 text-white  border border-primary-300/50">Proceed To Payment <i><FontAwesomeIcon icon={faArrowRight} /></i></button>
                    <Link to={"/cart"} className="btn flex justify-center items-center gap-2 text-center bg-transparent hover:bg-gray-100/50 text-black  border border-gray-300/50"> <i><FontAwesomeIcon icon={faChevronLeft} /></i>Previous Step</Link>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg">Secure Checkout</h3>
                    <div className="flex items-center gap-2">
                      <i className="text-primary-600"><FontAwesomeIcon icon={faLock} /></i>
                      <span className="text-gray-500">Your payment information is secure</span>
                    </div>
                    <div className="flex items-center gap-2 pl-2">
                            <i className="text-blue-500 text-xl">
                              <FontAwesomeIcon icon={faCcVisa} />
                            </i>
                             <i className="text-red-500 text-xl">
                              <FontAwesomeIcon icon={faCcMastercard} />
                            </i>
                            <i className="text-blue-500 text-xl">
                              <FontAwesomeIcon icon={faPaypal} />
                            </i>
                            <i className="text-white bg-black text-xl rounded-md"><FontAwesomeIcon icon={faApplePay} /></i>
                    </div>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </section>
  </>
}
