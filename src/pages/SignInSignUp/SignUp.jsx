import { Link } from "react-router-dom";
import { useState } from "react";

  
// Image
import GoogleIcon from "../../assets/GoogleIcon.png";
import IptbmLogo from "../../assets/iptbm-logo-noBG.png"
import UniversityPhoto from "../../assets/UniversityPhotoSample2.jpg";

// Icons
import { Eye, EyeOff } from 'lucide-react'; // Using lucide-react for icons

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    const inputClass = "w-full p-4 rounded-sm focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800 font-light placeholder-gray-400 transition-all text-xs md:text-sm bg-gray-100";
  
    return(
      <>
        <main className="flex flex-col xl:flex-row w-full min-h-screen">
          {/* Display Section */}
          <section 
            className="hidden relative xl:flex flex-col justify-between p-8 md:p-8 h-150 md:h-200 xl:h-screen w-full xl:w-[55%] rounded-b-4xl xl:rounded-none bg-cover md:bg-[center_55%] lg:bg-[center_75%] xl:bg-[center_60%] 2xl:bg-[center_80%]"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${UniversityPhoto})` 
            }}
          >
            {/* TOP CONTENT: Logo */}
            <div className="flex px-4 py-2 gap-4 items-center w-full md:w-fit text-white bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg">
              <Link to="/landing">
                <img src={IptbmLogo} alt="Iptbm Logo" className="h-12 w-12 md:h-16 md:w-16 flex-shrink-0" />
              </Link>
              <h1 className="leading-tight text-xs md:text-base font-medium">
                Intellectual Property and Technology <br className="hidden md:block"/> Business Management
              </h1>
            </div>
  
            {/* BOTTOM CONTENT: Text & Awards */}
            <div className="flex flex-col gap-6"> 
                <h1 className="font-medium text-white w-full text-2xl md:text-4xl xl:text-3xl 2xl:text-5xl text-start">
                  Protect Your Intellectual <br/> Property
                </h1>
                <p className="font-light w-full text-white text-xs md:text-base xl:text-sm 2xl:text-lg text-start">
                  Enterprise-grade tools to protect, manage, and <br/> monetize your intellectual property.
                </p>
            </div>
          </section>
  
          {/* Login Section */}
          <section className="h-180 md:h-200 xl:h-screen w-full xl:w-[45%] flex flex-col justify-center items-center mt-16 md:mt-0">
            <div className="flex flex-col w-[85%] md:w-[60%] 2xl:w-[70%] gap-8">
              <section className="flex flex-col gap-4">
                <h1 className="text-[clamp(2.6rem,5vw,3rem)] font-semibold leading-tight">
                  <span className="text-lg">Hola,</span> <br/>Let's Sign Up! 
                </h1>
                <h2 className="text-gray-500 text-[clamp(0.75rem,1vw,0.95rem)]">
                  Please enter your email and password
                </h2>
              </section>
  
              {/* Forms */}
              <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                
                {/* Names */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* First Name - Takes 1 column */}
                  <div className="grid col-span-3 lg:col-span-1">
                    <input type="text" placeholder="First name" className={inputClass} />
                  </div>
  
                  {/* Middle and Last Name - Spans 2 columns, then splits them */}
                  <div className="grid grid-cols-2 col-span-3 lg:col-span-2 gap-4">
                    <input type="text" placeholder="Middle name" className={inputClass} />
                    <input type="text" placeholder="Last name" className={inputClass} />
                  </div>
                </section>
  
                {/* Username and Password */}
                <span className="flex flex-col gap-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="email" placeholder="Enter your email" className={inputClass} />
                    <input type="email" placeholder="Enter your username" className={inputClass} />
                  </div>
  
                  {/* Password */}
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Enter your password" 
                      className={inputClass} 
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      // Changed top-9 to top-1/2 and added -translate-y-1/2
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </span>
  
                {/* Confirm Password */}
                <div className="relative">
                  {/* <label className={labelClass}>Confirm Password</label> */}
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="Confirm your password" 
                    className={inputClass} 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    // Changed top-9 to top-1/2 and added -translate-y-1/2
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
  
                {/* Terms */}
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="w-4 h-4 rounded accent-sky-500 cursor-pointer" />
                  <label htmlFor="terms" className="text-sm text-black gap-2 flex">
                    I agree to the <a href="#" className="underline text-blue-700 font-semibold">Terms and Conditions</a>
                  </label>
                </div>
  
                {/* Submit Button */}
                <section className='flex flex-col gap-8'>
                  <button className="w-full py-4 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-base rounded-xl shadow-md transition-colors cursor-pointer">
                    Create Account
                  </button>
  
                  <div className="flex gap-2 text-sm justify-center ">
                    <h2>Already have an account? </h2>
                    <Link to="/login" className="text-blue-500">Sign In</Link>
                  </div>
                </section>
              </form>
            </div>
          </section>
  
  
        </main>
      </>
    )
};

export default SignUp;