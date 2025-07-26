import { faEnvelope, faEye, faEyeSlash, faKey, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router";
import * as Yup from "yup";
import { resetPassword } from "../../Services/Auth";
import { useState } from "react";
export default function ResetPassword() {

    const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    const[showpassword,setshowpassword]=useState(false)
    const[showConfirmPassword,setshowConfirmPassword]=useState(false)
    const navigate = useNavigate();

    const formik=useFormik({
      initialValues:{
        email:"",
        newPassword:"",
        confirmPassword:""
      },
      validationSchema: Yup.object({
        email: Yup.string().matches(emailRegex, 'Please enter a valid email').required('Email is Required'),
        newPassword: Yup.string().matches(passwordRegex, 'Please enter a valid password').required('Password is Required'),
        confirmPassword:Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match').required('Confirm Password is Required')
      }),
      onSubmit: (values) => {
        resetPassword(values)
        setTimeout(() => {
          navigate("/login")
        },3500)
      }
    })







  return <>
  <div className="bg-gray-100 py-10">
    <div className="container">
        <div className="bg-white w-[90%] sm:w-[60%] lg:w-[40%] xl:w-[30%] mx-auto border border-gray-300/50 shadow-lg rounded-md p-6 space-y-5">
            <i className="text-2xl text-primary-600 size-15 bg-primary-200 rounded-full mx-auto flex items-center justify-center"><FontAwesomeIcon icon={faKey} /></i>
            <h2 className="text-3xl font-bold text-center">Reset Password</h2>
            <p className="text-gray-600 text-center">Enter your email address and a new password to reset your account password.</p>

            <form className="space-y-4">
                <label htmlFor="email" id="email" className="mb-2 block">Email Address</label>
                <div className="relative">
                    <i className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"><FontAwesomeIcon icon={faEnvelope} /></i>
                    <input id="email" type="email" name="email" placeholder="Enter your email address" className="form-control px-10 placeholder:text-black" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                </div>
                {formik.touched.email && formik.errors.email?<span className="text-red-500">{formik.errors.email}</span>:null}
                <label htmlFor="password" id="password" className="mb-2 block">New password</label>
                <div className="relative">
                    <i className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"><FontAwesomeIcon icon={faLock} /></i>
                    <input id="password" type={showpassword?"text":"password"} name="newPassword" placeholder="Enter new password" className="form-control px-10 placeholder:text-black" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.newPassword} />
                    <button type="button"  onClick={()=>setshowpassword(!showpassword)} className=" cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2">
                    {showpassword?<i className="text-gray-500"><FontAwesomeIcon icon={faEyeSlash} /></i>:<i className="text-gray-500"><FontAwesomeIcon icon={faEye} /></i>}
                  </button>
                </div>
                {formik.touched.newPassword && formik.errors.newPassword?<span className="text-red-500">{formik.errors.newPassword}</span>:null}
                <div>
                    <span className="text-gray-500">Password Must Contain:</span>
                <ul className="text-gray-500 list-disc pl-5">
                    <li>At least 8 Characters</li>
                    <li>One Uppercase letter</li>
                    <li>One number</li>
                </ul>
                </div>

                <div className="relative">
                    <i className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"><FontAwesomeIcon icon={faLock} /></i>
                    <input type={showConfirmPassword?"text":"password"} name="confirmPassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} placeholder="Confirm new password" className="form-control px-10 placeholder:text-black" />
                    <button type="button"  onClick={()=>setshowConfirmPassword(!showConfirmPassword)} className=" cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2">
                    {showConfirmPassword?<i className="text-gray-500"><FontAwesomeIcon icon={faEyeSlash} /></i>:<i className="text-gray-500"><FontAwesomeIcon icon={faEye} /></i>}
                  </button>
                </div>

                <button type="submit" className="btn bg-primary-600 w-full" onClick={formik.handleSubmit}>Reset Password</button>
            </form>
            <span className="text-gray-500 text-center block">Remeber your password?<Link to={"/login"} className="text-primary-600" state={{from:"/reset-password"}}>Sign in</Link></span>
        </div>
    </div>
    <div className="text-center mt-5"><span className="text-gray-500">Need help?</span> <Link to={"/contact"} className="text-primary-600">Contact Support</Link></div>
  </div>
  
  
  </>
}
