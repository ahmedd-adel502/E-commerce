import { faEye, faEyeSlash, faLeaf, faShieldHalved, faStar, faTruckFast, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import reviewAuthor from "../../assets/images/review-author.png";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendDataToSignUp } from "../../Services/Auth";
import { toast,Zoom} from "react-toastify";
import { useState } from "react";
import { checkPasswordStrength } from "../../utils/password-utils";

export default function SignUp() {

  const nameRegex=/^[a-zA-Z ]+$/
  const phoneRegex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/


  const [passError,setpassError]=useState(null)
  const[showpassword,setshowpassword]=useState(false)
  const[showConfirmPassword,setshowConfirmPassword]=useState(false)
  const navigate=useNavigate()
 async function handleSignUp(values){
   try {
   const response= await sendDataToSignUp(values)
    if(response.message==="success"){
      toast.success("You have successfully signed up",{autoClose:2000,position:`bottom-right`,transition:Zoom,theme:"colored"});
      setTimeout(()=>{
        navigate("/login")
      },2500)
    }
   } catch (error) {
     toast.error(error.message,{autoClose:2000,position:`bottom-right`,transition:Zoom,theme:"colored"})
     setpassError(error.message)
     console.log(error);
     
   }
}

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone:"",
      password: "",
      confirmPassword: "",
      promotionalEmail: false,
      terms: false
    },
    validationSchema:Yup.object({
      firstName:Yup.string().matches(nameRegex,"Invalid name").required("First Name is required"),
      lastName:Yup.string().matches(nameRegex,"Invalid name").required("Last Name is required"),
      phone:Yup.string().matches(phoneRegex,"Invalid phone number").required("Phone number is required"),
      email:Yup.string().matches(emailRegex,"Invalid email address").required("Email is required"),
      password:Yup.string().matches(passwordRegex,"Password Must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character").required("Password is required"),
      confirmPassword:Yup.string().oneOf([Yup.ref("password"),null],"Passwords must match").required("Confirm Password is required"),
      promotionalEmail:Yup.boolean().oneOf([true,false]),
      terms:Yup.boolean().oneOf([true],"Please accept the terms and conditions").required("You must accept the terms and conditions"),
    }),
    
    onSubmit: handleSignUp
  })

  const PasswordStrength= checkPasswordStrength(formik.values.password)
  

  return <>
  <div className="bg-gray-200/90 py-20">
    <div className="container mx-auto grid grid-cols-2 gap-10">
        <div className="left-side py-30 space-y-8">
          <h1 className="text-5xl font-bold">Welcome to <span className="text-primary-600">Fresh Cart</span></h1>
          <p className="text-gray-500">Join thousands of happy customers who enjoy fresh groceries <br /> delivered right to their doorstep</p>
          <ul className="flex flex-col gap-6">
            <li className="flex items-center gap-2">
              <i className="text-primary-700 text-xl w-[50px] h-[50px] bg-primary-200 rounded-full flex justify-center items-center"><FontAwesomeIcon icon={faLeaf} /></i>
              <div>
                <h3 className="font-semibold">Fresh & Organic</h3>
                <span className="text-gray-500">Premium quality products sourced directly from farms</span>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <i className="text-primary-700 text-xl w-[50px] h-[50px] bg-primary-200 rounded-full flex justify-center items-center"><FontAwesomeIcon icon={faTruckFast} /></i>
              <div>
                <h3 className="font-semibold">Fast Delivery</h3>
                <span className="text-gray-500">Same-day delivery available in most areas</span>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <i className="text-primary-700 text-xl w-[50px] h-[50px] bg-primary-200 rounded-full flex justify-center items-center"><FontAwesomeIcon icon={faShieldHalved} /></i>
              <div>
                <h3 className="font-semibold">Secure Shopping</h3>
                <span className="text-gray-500">Yoru data and payments are completely secure</span>
              </div>
            </li>
          </ul>
          <blockquote className="bg-gray-100/95 rounded-lg p-8 shadow-lg">
            <div className="flex gap-4 space-y-5 ">
                <img className="w-[50px]" src={reviewAuthor} alt="Author" />
                <div>
                  <h2 className="font-semibold">Sarah Johnson</h2>
                  <div>
                    <i className="text-yellow-500"><FontAwesomeIcon icon={faStar} /></i>
                    <i className="text-yellow-500"><FontAwesomeIcon icon={faStar} /></i>
                    <i className="text-yellow-500"><FontAwesomeIcon icon={faStar} /></i>
                    <i className="text-yellow-500"><FontAwesomeIcon icon={faStar} /></i>
                    <i className="text-yellow-500"><FontAwesomeIcon icon={faStar} /></i>
                  </div>
                </div>
            </div>
            <p className="italic text-gray-500">"Fresh cart has completely changed how i shop for groceries. The quality is amazing and delivery is always on time!"</p>
          </blockquote>
        </div>

        <div className="right-side bg-gray-100/95 rounded-lg shadow-lg p-8 space-y-10">
            <h2 className="text-3xl font-semibold text-center mb-2">Create Your Account</h2>
            <span className="text-center text-gray-500 block">Start your fresh journey with us today</span>
            <div className="grid grid-cols-2 gap-4 *:border-2 *:border-gray-200/90 *:rounded-lg *:py-3 *:px-3 *:hover:bg-gray-200/95 *:cursor-pointer">
              <button className="flex gap-2 justify-center items-center"><i className="text-red-500"><FontAwesomeIcon icon={faGoogle} /></i>Google</button>
              <button className="flex gap-2 justify-center items-center"><i className="text-blue-700"><FontAwesomeIcon icon={faFacebookF} /></i>Facebook</button>
            </div>
            <div className="divider">
              <span className="bg-gray-100/95 px-2 uppercase text-gray-500">or</span>
            </div>
            <div>
              <form className="space-y-5" onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-700" htmlFor="firstname">First Name *</label>
                   <input type="text" className="form-control" placeholder="John" id="firstname" name="firstName" value={formik.values.firstName}  onChange={formik.handleChange} onBlur={formik.handleBlur} />
                   {formik.touched.firstName && formik.errors.firstName && <p className="text-red-500 rounded-lg mt-1 ms-2">{formik.errors.firstName}*</p>}
                  </div>
                  <div>
                    <label className="text-gray-700" htmlFor="lastname">Last Name *</label>
                    <input type="text" className="form-control" placeholder="Doe" id="lastname" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                     {formik.touched.lastName && formik.errors.lastName && <p className="text-red-500 rounded-lg mt-1 ms-2">{formik.errors.lastName}*</p>}
                  </div>
                </div>
                <div>
                  <label className="text-gray-700" htmlFor="email">Your Address *</label>
                  <input type="email" placeholder="jhon.doe@example.com" className="form-control" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                   {formik.touched.email && formik.errors.email && <p className="text-red-500 rounded-lg mt-1 ms-2">{formik.errors.email}*</p>}
                   {passError && <p className="text-red-500 rounded-lg mt-1 ms-2">{passError}</p>}
                </div>
                <div>
                  <label className="text-gray-700" htmlFor="phone">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 123-4567" className="form-control" id="phone" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                   {formik.touched.phone && formik.errors.phone && <p className="text-red-500 rounded-lg mt-1 ms-2">{formik.errors.phone}*</p>}
                </div>
                <div>
                  <label className="text-gray-700" htmlFor="password">Password *</label>
                 <div className="relative">
                   <input type={showpassword?"text":"password"}  placeholder="Create a strong password" className="form-control" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  <button type="button"  onClick={()=>setshowpassword(!showpassword)} className=" cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2">
                    {showpassword?<i className="text-gray-500"><FontAwesomeIcon icon={faEyeSlash} /></i>:<i className="text-gray-500"><FontAwesomeIcon icon={faEye} /></i>}
                  </button>
                 </div>
                  {formik.touched.password && formik.errors.password && <p className="text-red-500 rounded-lg mt-1 ms-2">{formik.errors.password}*</p>}
                </div>
                
                {formik.values.password !=="" && <div className="PasswordStrength flex items-center gap-2 mt-[-10px]">
                  <div className="bar w-full h-1 bg-gray-200 rounded-xl overflow-hidden">
                    <div className={`progress ${PasswordStrength.width} h-full ${PasswordStrength.background}`}></div>
                  </div>
                  <span className="text-gray-600 text-sm text-nowrap">{PasswordStrength.text}</span>
                </div>}
                <div>
                  <label className="text-gray-700" htmlFor="confirmpassword">Confirm Password *</label>
                  <div className="relative">
                    <input type={showConfirmPassword?"text":"password"} placeholder="Confirm password" className="form-control" id="confirmpassword" name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                   <button type="button"  onClick={()=>setshowConfirmPassword(!showConfirmPassword)} className=" cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2">
                    {showConfirmPassword?<i className="text-gray-500"><FontAwesomeIcon icon={faEyeSlash} /></i>:<i className="text-gray-500"><FontAwesomeIcon icon={faEye} /></i>}
                  </button>
                  </div>
                  {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="text-red-500 rounded-lg mt-1 ms-2">{formik.errors.confirmPassword}*</p>}
                </div>
                <div>
                  <input type="checkbox" className="me-2 accent-primary-400" id="promotionalEmails" name="promotionalEmails" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.promotionalEmail} />
                  <label  htmlFor="promotionalEmails" className="text-gray-600">i'd like to recieve promotional emails about new products, discounts, and exclusive offers.</label>
                </div>
                <div>
                  <input type="checkbox" className="me-2 accent-primary-400" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.terms} id="terms" name="terms" />
                  <label htmlFor="terms" className="text-gray-600">i agree to the <Link className="text-primary-500"> Terms of Service</Link> and <Link className="text-primary-500">Privacy Policy</Link> *</label>
                  { formik.touched.terms && formik.errors.terms && <p className="text-red-500 rounded-lg mt-1 ms-2">{formik.errors.terms}*</p>}
                </div>
                <button type="submit" className="text-white bg-primary-500 py-4 px-3 w-full rounded-lg cursor-pointer hover:bg-primary-600"> <i><FontAwesomeIcon icon={faUserPlus} /></i> Create My Account</button>
                <div className="divider"></div>
                <div className="text-gray-600 text-center">Already have an account? <Link className="text-primary-500" to="/login">Login</Link></div>
              </form>
              
            </div>
        </div>
    </div>
  </div>
  
  
  </>
}
