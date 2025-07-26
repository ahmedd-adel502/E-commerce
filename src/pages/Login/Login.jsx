import { faCircleQuestion, faEnvelope } from "@fortawesome/free-regular-svg-icons"
import loginCart from "../../assets/images/LoginCart.png"
import { faClock, faEye, faEyeSlash, faLock, faStar, faTruckFast, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { useFormik } from "formik"
import { Link, useLocation, useNavigate } from "react-router"
import { useContext, useState } from "react"
import * as Yup from "yup"
import { sendDataToLogin } from "../../Services/Auth"
import { toast, Zoom } from "react-toastify"
import { AuthContext } from "../../Context/Auth.context"
export default function Login() {
  const navigate = useNavigate()
  const[showpassword,setshowpassword]=useState(false)
  const [passError,setpassError]=useState(null)
  const {setToken} = useContext(AuthContext)
  const location = useLocation()
  const from = location.state?.from || "/"

  const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  async function handleSubmit(values){
    try {
        const response = await sendDataToLogin(values);
        if(response.message==="success"){
          toast.success(`You have successfully signed in ,Welcome Back ! ${response.user.name}`,{autoClose:1500,position:`top-center`,transition:Zoom,theme:"colored"});
          setTimeout(()=>{
            navigate(from)
              setTimeout(() => {
                window.location.reload()
              },50)
          },1000)
          setToken(response.token)
          if(values.remember){
            localStorage.setItem("token",response.token)
          }else{
            sessionStorage.setItem("token",response.token)
          }
        }
    } catch (error) {
      setpassError(error.message);
    }
    
  }

  const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
        remember: false
      },
      validationSchema:Yup.object({
        email:Yup.string().required("Email is required"),
        password:Yup.string().required("Password is required")
      }),
      onSubmit:handleSubmit
    })












  return <>
    <div className='bg-gray-100/95'>
      <div className="container mx-auto py-32 px-5 grid grid-cols-2 gap-6">
          <div className="left-side mt-15 flex flex-col justify-center items-center text-center space-y-5">
            <img className="w-[90%] rounded-md shadow-lg inline-block" src={loginCart} alt="Fresh Cart" />
            <h2 className="text-2xl font-bold">Fresh Groceries Delivered</h2>
            <p className="text-gray-600">Join thousands of happy customers who trust FreshCart for their <br />daily grocery needs</p>
            <ul className="flex gap-6">
                <li className="flex gap-2 items-center">
                  <i className="text-primary-600 text-sm"><FontAwesomeIcon icon={faTruckFast} /></i>
                  <span>Free Delivery </span>
                </li>
                <li className="flex gap-2 items-center">
                  <i className="text-primary-600 text-sm"><FontAwesomeIcon icon={faCircleQuestion} /></i>
                  <span>Secure Payment </span>
                </li>
                <li className="flex gap-2 items-center">
                  <i className="text-primary-600 text-sm"><FontAwesomeIcon icon={faClock} /></i>
                  <span>24/7 Support </span>
                </li>
            </ul>
          </div>


          <div className="right-side bg-gray-100/95 rounded-lg shadow-lg px-10 py-8 space-y-10">
            <div className="text-center">
              <Link to={"/"} className="text-4xl font-bold"><span className="text-primary-600">Fresh</span>Cart</Link>
              <h2 className="text-2xl font-semibold my-2">Welcome back!</h2>
              <span className=" text-gray-500 block">Sign in to continue your fresh shopping experience</span>
            </div>
            <div className="grid grid-cols-1 gap-4 *:border-2 *:border-gray-300/90  *:py-3 *:px-3 *:hover:bg-gray-200/95 *:cursor-pointer *:rounded-xl">
              <button className="flex gap-2 justify-center items-center"><i className="text-red-500"><FontAwesomeIcon icon={faGoogle} /></i>Continue with Google</button>
              <button className="flex gap-2 justify-center items-center"><i className="text-blue-700"><FontAwesomeIcon icon={faFacebookF} /></i>Continue withFacebook</button>
            </div>
            <div className="divider">
              <span className="bg-gray-100/95 px-2 uppercase text-gray-500">or continue with email</span>
            </div>
            <div>
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                  <label className="text-gray-700 font-semibold mb-2 inline-block" htmlFor="email">Email address </label>
                  <div>
                   <div className="relative">
                     <input type="email" placeholder="Enter your email" className="placeholder:text-black form-control ps-10 rounded-xl" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    <i className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"><FontAwesomeIcon icon={faEnvelope} /></i>
                   </div>
                   {formik.touched.email && formik.errors.email && <p className="text-red-500 rounded-lg mt-1 ms-2">{formik.errors.email}*</p>}
                   {passError && <p className="text-red-500 rounded-lg mt-1 ms-2">{passError}</p>}
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center">
                    <label className="text-gray-700 font-semibold mb-2 inline-block" htmlFor="password">Password</label>
                    <Link to={"/forgetpassword"} className="text-primary-600">Forgot Password?</Link>
                  </div>
                 <div className="relative">
                   <input type={showpassword?"text":"password"}  placeholder="Enter your password" className="placeholder:text-black form-control ps-10 rounded-xl" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  <button type="button"  onClick={()=>setshowpassword(!showpassword)} className=" cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2">
                    {showpassword?<i className="text-gray-500"><FontAwesomeIcon icon={faEyeSlash} /></i>:<i className="text-gray-500"><FontAwesomeIcon icon={faEye} /></i>}
                  </button>
                  <i className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"><FontAwesomeIcon icon={faLock} /></i>
                 </div>
                  {formik.touched.password && formik.errors.password && <p className="text-red-500 rounded-lg mt-1 ms-2">{formik.errors.password}*</p>}
                </div>
                <div className="flex gap-2 items-center">
                  <input id="remember" name="remember" type="checkbox" className="accent-primary-600 size-4" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.remember} />
                  <label htmlFor="remember" className="text-gray-500">Keep me signed in</label>
                </div>
  
               
              
               
                <button type="submit" className="text-white bg-primary-500 py-4 px-3 w-full rounded-lg cursor-pointer hover:bg-primary-600"> Sign In</button>
                <div className="divider"></div>
                <div className="text-gray-600 text-center">New To FreshCart? <Link className="text-primary-600" to="/signup">Create an account</Link></div>
                <ul className="flex justify-around items-center w-[70%] mx-auto">
                  <li className="flex gap-2 items-center text-sm">
                    <i className="text-gray-500"><FontAwesomeIcon icon={faLock} /></i>
                    <span className="text-gray-500">SSL Secured</span>
                  </li>
                  <li className="flex gap-2 items-center text-sm">
                    <i className="text-gray-500"><FontAwesomeIcon icon={faUsers} /></i>
                    <span className="text-gray-500">50K+ Users</span>
                  </li>
                  <li className="flex gap-2 items-center text-sm">
                    <i className="text-gray-500"><FontAwesomeIcon icon={faStar} /></i>
                    <span className="text-gray-500">4.9 Rating</span>
                  </li>
                </ul>
              </form>
              
            </div>
        </div>

      </div>
    
    </div>
  
  
  </>
}
