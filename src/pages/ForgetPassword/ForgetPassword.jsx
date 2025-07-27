import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faEnvelopeOpenText, faHeadphonesSimple, faLock, faPaperPlane, faQuestionCircle, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router'
import { sendEmailTocheck } from '../../Services/Auth'
import * as Yup from "yup" 
import MetaData from '../../components/MetaData/MetaData'
export default function ForgetPassword() {

  const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().matches(emailRegex, 'Please enter a valid email').required('Email is Required'),
    }),
    onSubmit: (values) => {
      sendEmailTocheck(values)
      setTimeout(() => {
        navigate('/verifyemail')
      },3500)
      sessionStorage.setItem("email",values.email)
    }
  })







  return <>
  <MetaData title="Forgot Password" description="if you forgot your password you can return your account from here" keywords="Forget Password, products, favorite, cart, buy, order" />
    <div className='bg-gray-100 py-15'>
      <div className="container flex items-center justify-center">
          <div className='flex flex-col gap-4 w-[90%] lg:w-[35%]'>
            <div className='rounded-md bg-white text-center border border-gray-300/60 py-6 px-6 space-y-4'>
                <span className='bg-primary-200 text-primary-600 mx-auto rounded-full size-15 flex justify-center items-center text-3xl'><i><FontAwesomeIcon icon={faLock} /></i></span>
                <h2 className='font-semibold text-2xl'>Forgot your password?</h2>
                <p className='text-gray-600'>No worries! Enter your email address and we'll <br /> send you a link to reset your password.</p>
                <div className='text-left'>
                    <label htmlFor="email" className='text-gray-700 mb-2 block w-fit'>Email Address</label>
                    <div className='relative'>
                      <input id='email' type="email" placeholder='Your registered email address' className='placeholder:text-black form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                      <i className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-500'><FontAwesomeIcon icon={faEnvelope} /></i>
                    </div>
                    {formik.touched.email && formik.errors.email ? <span className='text-red-600'>{formik.errors.email}</span> : null}
                    <div className='mt-5'>
                      <button type='submit' className='btn bg-primary-600 py-3 hover:bg-primary-700 w-full flex justify-center items-center gap-2' onClick={formik.handleSubmit}><i><FontAwesomeIcon icon={faPaperPlane} /></i>Send Reset Code</button>
                    </div>
                </div>
                <span className='text-gray-500'>Remember your password? <Link to={"/login"} className='text-primary-600' state={{from:"/forget-password"}}>Sign in</Link></span>
            </div>
            <div className='flex justify-between gap-x-4 border border-gray-300/60 rounded-md p-4'>
              <i className='text-primary-600 text-3xl'><FontAwesomeIcon icon={faShieldHalved} /></i>
              <div className='flex flex-col gap-2'>
                  <span className='text-black'>Security notice</span>
                  <p className='text-gray-500'>For your security, a password reset link will be sent to your registered email address. The link will expire after 30 minutes.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className='py-15 text-center'>
      <h2 className='font-bold text-2xl'>Need aditional help?</h2>
      <div className="container pt-8">
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-[90%] lg:w-[60%] mx-auto'>
            <div className='bg-gray-100 rounded-md py-5 px-4 space-y-3 flex flex-col items-center justify-center border border-gray-300/50'>
                <span className='bg-primary-200 text-primary-600 mx-auto rounded-full size-12 flex justify-center items-center text-xl'><i><FontAwesomeIcon icon={faHeadphonesSimple} /></i></span>
                <span className='text-lg font-bold'>Contact support</span>
                <p className='text-gray-500'>Our customer support team is available 24/7 to assist you.</p>
                <div className='flex items-center gap-2'>
                  <span className='text-primary-600'>Contact us</span>
                  <i className='text-primary-600'><FontAwesomeIcon icon={faArrowRight} /></i>
                </div>
            </div>

            <div className='bg-gray-100 rounded-md py-5 px-4 space-y-3 flex flex-col items-center justify-center border border-gray-300/50'>
                <span className='bg-primary-200 text-primary-600 mx-auto rounded-full size-12 flex justify-center items-center text-xl'><i><FontAwesomeIcon icon={faQuestionCircle} /></i></span>
                <span className='text-lg font-bold'>FAQs</span>
                <p className='text-gray-500'>Find answers to frequently asked questions about your account.</p>
                <div className='flex items-center gap-2'>
                  <span className='text-primary-600'>View FAQs</span>
                  <i className='text-primary-600'><FontAwesomeIcon icon={faArrowRight} /></i>
                </div>
            </div>

            <div className='bg-gray-100 rounded-md py-5 px-4 space-y-3 flex flex-col items-center justify-center border border-gray-300/50'>
                <span className='bg-primary-200 text-primary-600 mx-auto rounded-full size-12 flex justify-center items-center text-xl'><i><FontAwesomeIcon icon={faEnvelopeOpenText} /></i></span>
                <span className='text-lg font-bold'>Email not recieved</span>
                <p className='text-gray-500'>Check your spam folder or request a new reset link.</p>
                <div className='flex items-center gap-2'>
                  <span className='text-primary-600'>Resend Email</span>
                  <i className='text-primary-600'><FontAwesomeIcon icon={faArrowRight} /></i>
                </div>
            </div>
        </div>
      </div>
    </div>
  </>
}
