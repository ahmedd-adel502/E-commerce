import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { verifySentCode } from "../../Services/Auth";
import MetaData from "../../components/MetaData/MetaData";

export default function VerifyResetCode() {

 const navigate = useNavigate();

   const [code, setCode] = useState(["", "", "", "", "", ""]);
   const inputRefs = useRef([]);
    const [timeLeft, setTimeLeft] = useState(10 * 60)
  
    useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000); 

    return () => clearInterval(timer); 
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value.slice(0, 1);
    setCode(newCode);
     if (e.target.value && index < code.length - 1) {
    inputRefs.current[index + 1]?.focus();
   }
  };

  const formik=useFormik(
    {initialValues:{
      resetCode:""
    }
    ,onSubmit:(values)=>{
      const joinedCode = code.join("");
      verifySentCode({resetCode:joinedCode})
      setTimeout(() => {
        navigate("/resetpassword")
      },3500)
    }}
  )









  return <>
  <MetaData title="Verify Reset Code" description="if you forgot your password you can return your account from here" keywords="Verify Reset Code, products, favorite, cart, buy, order" />
    <div className="bg-gray-100 py-15">
      <div className="container py-4">
        <div className="w-[90%] sm:w-[60%] lg:w-[40%] xl:w-[30%] mx-auto bg-white shadow-lg border border-gray-200/50 rounded-lg p-6 space-y-6">
            <i className="text-2xl text-primary-600 size-15 bg-primary-200 rounded-full mx-auto flex items-center justify-center"><FontAwesomeIcon  icon={faShieldHalved} /></i>
            <h2 className="text-3xl font-bold text-center">Verify Reset Code</h2>
            <div>
              <p className="text-gray-600 text-center">We have sent a verification code to your email address.</p>
              <p className="text-primary-600 text-center">{sessionStorage.getItem("email")||"John.doe@gmail.com"}</p>
            </div>

            <div className="space-y-3">
              <span className="text-gray-500 text-center block">Enter 6 digit Verification Code</span>
             <div>
                <ul className="flex items-center gap-x-2">
                   {code.map((value, index) => (
                    <li key={index}>
                      <input
                        type="text"
                        ref={(el) => (inputRefs.current[index] = el)}
                         onKeyDown={(e) => {
                          if (e.key === "Backspace") {
                            if (!code[index] && index > 0) {
                              inputRefs.current[index - 1]?.focus();
                            }
                
                            const newCode = [...code];
                            newCode[index] = "";
                            setCode(newCode);
                          }
                        }}
                        maxLength={1}
                        value={value}
                        onChange={(e) => handleChange(e, index)}
                        className="border-2 w-full text-center h-full outline-none border-gray-200/50 focus:border-primary-600 rounded-md py-3 px-1"
                      />
                    </li>
                  ))}
               </ul>
             </div>
             <div className="flex items-center justify-center gap-1">
                <span className="text-gray-500">Code expires in:</span>
                <span className="text-primary-600">{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</span>
             </div>
              <button type="submit" className="btn bg-primary-600 hover:bg-primary-700 w-full" onClick={formik.handleSubmit}>Verify Code</button>
              <div className="text-gray-500 flex items-center justify-center">
                  <span className="text-gray-500">Didn't receive the code?</span>
              </div>
                <button className="text-primary-600 cursor-pointer block mx-auto hover:text-primary-700">Resend Code</button>
                <button className="text-primary-600 cursor-pointer block mx-auto hover:text-primary-700">Back to Sign in</button>
            </div>
        </div>
      </div>
      <div className="text-center">
        <span>Need help? <Link to="/contact" className="text-primary-600 hover:text-primary-700">Contact us</Link></span>
      </div>
    </div>
  
  </>
}
